"use client";

import { useState } from "react";
import Profile from "@/components/profile";
import Picture from "@/components/picture";

export default function Home() {
	const [isPictureOpen, setIsPictureOpen] = useState(true);
	const handleOnClick = () => {
		setIsPictureOpen(!isPictureOpen);
	};
	return (
		<main>
			{isPictureOpen ? <Picture /> : <Profile />}
			<button
				className="fixed bottom-8 right-4 border-2 border-black px-4 py-2 rounded-lg bg-white"
				type="button"
				onClick={handleOnClick}
			>
				Change
			</button>
		</main>
	);
}
