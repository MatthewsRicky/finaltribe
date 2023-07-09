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
				isHovered ? "shadow-lg rounded-lg" : ""
			}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<Image
				src={image}
				alt="Card Image"
				width={3000}
				height={3000}
			/>

			{isHovered && (
				<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-emerald-500/60 to-transparent flex items-center justify-center text-white text-xl font-semibold">
					{title}
				</div>
			)}
		</div>
	);
};

export default Card;
