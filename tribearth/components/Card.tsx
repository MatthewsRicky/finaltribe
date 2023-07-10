import Image from "next/image";
import { useState } from "react";

interface CardProps {
	image: string;
	title: string;
}

const Card: React.FC<CardProps> = ({ image, title }) => {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	return (
		<div
			className={`relative overflow-hidden ${
				isHovered ? "shadow-lg shadow-emerald-400/60 rounded-lg" : ""
			}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<Image
				className="rounded-lg"
				src={image}
				alt="Card Image"
				width={1000}
				height={350}
			/>

			{isHovered && (
				<div className="absolute top-0  w-full h-full bg-gradient-to-t from-emerald-500/60 to-transparent flex items-center justify-center text-white text-xl font-semibold transition-all duration-500">
					{title}
				</div>
			)}
		</div>
	);
};

export default Card;
