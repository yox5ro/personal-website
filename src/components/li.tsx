"use client";

type Props = {
	children: React.ReactNode;
	className?: string;
};

export default function Li({ children, className }: Props) {
	return <li className={className}>- {children}</li>;
}
