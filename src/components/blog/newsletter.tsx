"use client";

import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { toast } from "sonner";

import {
	initialSubscribeState,
	subscribeToNewsletter,
} from "@/actions/subscribe";

export function Newsletter() {
	const [state, formAction] = useFormState(
		subscribeToNewsletter,
		initialSubscribeState,
	);

	useEffect(() => {
		if (!state?.status) return;
		if (state.status === "success") {
			toast.success(state.message ?? "ありがとうございました。");
		} else if (state.status === "error") {
			toast.error(state.message ?? "送信に失敗しました。");
		}
	}, [state]);

	return (
		<section className="rounded-3xl border border-emerald-400/30 bg-black/60 p-8 shadow-[inset_0_0_60px_rgba(6,31,19,0.6)]">
			<div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
				<div className="space-y-3">
					<p className="text-sm font-semibold tracking-tight text-emerald-300">
						スタジオログ
					</p>
					<h2 className="text-3xl font-semibold tracking-tight text-emerald-50">
						静かなニュースレター
					</h2>
					<p className="text-emerald-200/80">
						毎週日曜、未公開のストーリーボードやモーション実験、注釈付きの読書リストを一通だけ配信します。
					</p>
				</div>
				<form action={formAction} className="flex flex-col gap-3 sm:flex-row">
					<label className="sr-only" htmlFor="email">
						メールアドレス
					</label>
					<input
						id="email"
						name="email"
						type="email"
						required
						placeholder="あなた@example.com"
						autoComplete="email"
						className="flex-1 rounded-full border border-emerald-400/40 bg-black/40 px-5 py-3 text-base text-emerald-50 shadow-inner focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
					/>
					<SubmitButton />
				</form>
				<p aria-live="polite" className="text-sm text-emerald-200/80">
					{state?.status === "error" ? state.message : ""}
				</p>
			</div>
		</section>
	);
}

function SubmitButton() {
	const { pending } = useFormStatus();
	return (
		<button
			type="submit"
			disabled={pending}
			className="rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground shadow-lg shadow-primary/40 transition disabled:opacity-70"
		>
			{pending ? "送信中..." : "登録する"}
		</button>
	);
}
