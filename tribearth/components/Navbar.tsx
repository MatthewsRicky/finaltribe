"use client";

import Image from "next/image";
import { useState } from "react";
import { AiOutlineMenu, AiFillShopping } from "react-icons/ai";
import { BiXCircle } from "react-icons/bi";
import Link from "next/link";
import DropdownMenu from "./DropDownMenu";

//@ts-check

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="relative w-full">
			<div className="w-full md:fixed bg-white/90 z-10 top-0  md:flex justify-between hover:shadow-emerald-100/70 hover:shadow-lg items-center gap-4 px-4 py-2">
				<ul className="flex justify-between items-center">
					<li className="hover:scale-105 hover:shadow-md hover:shadow-emerald-500 p-4 rounded-lg transition duration-300">
						<Link href="/">
							<Image
								src={"/images/Tribearth logo.png"}
								alt="logo"
								width={100}
								height={100}
							/>
						</Link>
					</li>
					<li>
						<button
							className="flex flex-col md:hidden rounded-full justify-center p-4 items-center hover:text-neutral-100 hover:bg-emerald-500/90 text-emerald-500/90 text-center transition-all duration-300"
							onClick={() => setIsOpen(!isOpen)}
						>
							{isOpen ? (
								<BiXCircle
									size={30}
									className="shadow-emerald-400/70 shadow-md"
								/>
							) : (
								<AiOutlineMenu
									size={30}
									className="shadow-emerald-400/70 shadow-md"
								/>
							)}
						</button>
					</li>
				</ul>
				<div
					className={` md:flex flex gap-4 justify-between items-center ${
						isOpen ? "block" : "hidden"
					}`}
				>
					<ul className="w-full text-slate-600 flex mt-0 flex-col md:flex-row justify-around items-center transition-all duration-300 bg-opacity-60 text-xl active:font-semibold mx-4">
						<Link
							href="/about"
							onClick={() => setIsOpen(!isOpen)}
						>
							<li className="py-4 hover:shadow-md hover:shadow-emerald-400/70 hover:scale-105 w-full border-b-2 md:border-none mx-4 text-center border-emerald-500 rounded-lg ">
								About
							</li>
						</Link>
						<Link
							href="/artisans"
							onClick={() => setIsOpen(!isOpen)}
						>
							<li className="py-4 hover:shadow-md hover:shadow-emerald-400/70 hover:scale-105 w-full border-b-2 md:border-none mx-4 text-center border-emerald-500 rounded-lg ">
								Artisans
							</li>
						</Link>
						<Link
							href="/impact"
							onClick={() => setIsOpen(!isOpen)}
						>
							<li className="py-4 hover:shadow-md hover:shadow-emerald-400/70 hover:scale-105 w-full border-b-2 md:border-none mx-4 text-center border-emerald-500 rounded-lg ">
								Impact
							</li>
						</Link>
						<Link
							href="/vegancafe"
							onClick={() => setIsOpen(!isOpen)}
						>
							<li className="py-4 hover:shadow-md hover:shadow-emerald-400/70 hover:scale-105 w-full border-b-2 md:border-none mx-4 text-center border-emerald-500 rounded-lg ">
								Vegan Cafe
							</li>
						</Link>
						<Link
							href="/shop"
							onClick={() => setIsOpen(!isOpen)}
						>
							<li className="py-4 hover:text-white hover:scale-105 w-full border-b-2 md:border-none mx-4 text-center border-emerald-500 flex items-center rounded-lg justify-center">
								<DropdownMenu />
							</li>
						</Link>
						<Link href="/cart">
							<li className="py-4 hover:shadow-md hover:shadow-emerald-400/70 hover:scale-105 w-full border-b-2 md:border-none mx-4 justify-center flex items-center text-center border-emerald-500 rounded-lg">
								<AiFillShopping
									size={24}
									onClick={() => setIsOpen(!isOpen)}
								/>
							</li>
						</Link>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
