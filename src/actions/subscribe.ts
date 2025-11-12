"use server";

import { z } from "zod";

type SubscribeResult = {
	status: "success" | "error" | null;
	message: string | null;
};

const schema = z.object({
	email: z
		.string({ required_error: "メールアドレスを入力してください。" })
		.email("有効なメールアドレスを入力してください。"),
});

export async function subscribeToNewsletter(
	_prevState: SubscribeResult | undefined,
	formData: FormData,
): Promise<SubscribeResult> {
	const parsed = schema.safeParse({
		email: formData.get("email"),
	});

	if (!parsed.success) {
		return {
			status: "error",
			message:
				parsed.error.issues[0]?.message ?? "入力内容を確認してください。",
		};
	}

	const email = parsed.data.email.trim().toLowerCase();
	const apiKey = process.env.RESEND_API_KEY;
	const audienceId = process.env.RESEND_AUDIENCE_ID;

	if (!apiKey || !audienceId) {
		console.warn("Missing RESEND configuration for newsletter subscription");
		return {
			status: "error",
			message:
				"現在サブスクリプションを受け付けていません。しばらくしてからお試しください。",
		};
	}

	const response = await fetch(
		`https://api.resend.com/audiences/${audienceId}/contacts`,
		{
			method: "POST",
			headers: {
				Authorization: `Bearer ${apiKey}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				double_opt_in: false,
			}),
		},
	);

	if (!response.ok) {
		const payload = await response.json().catch(() => null);
		const errorMessage =
			payload?.message ??
			payload?.error ??
			"購読処理で問題が発生しました。後でもう一度お試しください。";
		return { status: "error", message: errorMessage };
	}

	return {
		status: "success",
		message: "購読ありがとうございます。まもなく最初のレターをお届けします。",
	};
}

export const initialSubscribeState: SubscribeResult = {
	status: null,
	message: null,
};
