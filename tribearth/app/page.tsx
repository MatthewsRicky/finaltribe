import Artisans from "@/components/Artisans";
import Carousel from "@/components/Carousel";
import Ethos from "@/components/Ethos";
import Hero from "@/components/Hero";
import Learn from "@/components/Learn";
import Location from "@/components/Location";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div className="mt-20 flex flex-col justify-center items-center bg-neutral-100 text-black relative w-full h-full">
			<Hero />
			<Location />
			<Artisans />
			<Carousel />
		</div>
	);
}
