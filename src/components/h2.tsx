"use client";

type Props = {
	title: string;
	className?: string;
};

export default function H2({ title, className }: Props) {
	return <h2 className={`text-2xl font-bold ${className}`}># {title}</h2>;
}
