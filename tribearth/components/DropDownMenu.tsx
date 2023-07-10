"use client";

import { useState } from "react";
import Link from "next/link";

const DropdownMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="relative">
			<button
				onMouseOver={toggleMenu}
				className="flex text-center items-center text-yellow-500 hover:bg-yellow-500 py-4 px-4 hover:text-white rounded-lg "
			>
				Shop
			</button>

			{isOpen && (
				<div className="absolute rounded-lg right-0 m-2 w-48 bg-emerald-400 flex flex-col gap-4 hover:rounded-md">
					<Link
						href="/shop/bracelets"
						className="px-4 py-2 hover:bg-yellow-500/95 hover:rounded-md"
					>
						Bracelets
					</Link>
					<Link
						href="/shop/earrings"
						className="px-4 py-2 hover:bg-yellow-500/95 hover:rounded-md"
					>
						Earrings
					</Link>
					<Link
						href="/shop/necklaces"
						className="px-4 py-2 hover:bg-yellow-500/95 hover:rounded-md"
					>
						Necklaces
					</Link>
					<Link
						href="/shop/rings"
						className="px-4 py-2 hover:bg-yellow-500/95 hover:rounded-md"
					>
						Rings
					</Link>
				</div>
			)}
		</div>
	);
};

export default DropdownMenu;
