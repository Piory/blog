"use client";

import { type HTMLMotionProps, motion } from "motion/react";

import { cn } from "@/lib/utils";

type GradientBackgroundProps = HTMLMotionProps<"div">;

function GradientBackground({
	className,
	transition = { duration: 15, ease: "easeInOut", repeat: Infinity },
	...props
}: GradientBackgroundProps) {
	return (
		<motion.div
			data-slot="gradient-background"
			className={cn("size-full bg-[#04130c]", className)}
			animate={{
				backgroundColor: ["#04130c", "#031b11", "#04130c"],
			}}
			transition={transition}
			{...props}
		/>
	);
}

export { GradientBackground, type GradientBackgroundProps };
