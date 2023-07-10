"use client";

import Link from "next/link";
import { useState } from "react";

const Hero = () => {
	const [isClicked, setIsClicked] = useState(false);

	return (
		<div className="hero bg-cover rounded-full justify-center flex items-center shadow-2xl shadow-emerald-200 my-10 relative">
			<button
				onClick={() => {}}
				className="bg-yellow-400/80 rounded-lg py-4 px-3 text-center hover:shadow-emerald-200/70 hover:shadow-lg text-slate-700/80 text-xl md:text-2xl lg:text-3xl font-semibold lg:font-bold hover:scale-105 cursor-pointer transition-all duration-300"
			>
				<Link href={"/shop"}>Explore</Link>
			</button>
		</div>
	);
};

export default Hero;
