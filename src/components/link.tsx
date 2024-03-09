"use client";

type Props = {
	href: string;
	serviceName: string;
	userName: string;
	className?: string;
};

export default function Link({
	href,
	serviceName,
	userName,
	className,
}: Props) {
	return (
		<a
			href={href}
			target="blank"
			className={`hover:opacity-60 underline ${className}`}
		>
			{serviceName} @ {userName}
		</a>
	);
}
