"use client";

import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";

const Vegancafe = () => {
	return (
		<div className="text-slate-800 flex pt-32 flex-col w-full">
			<div className="flex gap-4 flex-col p-8 text-center">
				<h1 className="text-4xl md:text-5xl xl:text-6xl text-emerald-500/90">
					Vegan Boutique Cafe
				</h1>

				<Link href={"/"}>
					<p className="italic hover:text-slate-950 hover:shadow-lg px-2 py-4 rounded-md hover:shadow-emerald-400/40">
						"Our Vegan Cafe at heart is a mix of Ethiopian food, Swahili snacks
						and healthy Vegan bitings"
					</p>
				</Link>
			</div>
			<div className="flex border-spacing-2 p-2 shadow-lg  flex-col md:flex-row items-base justify-around gap-8 mx-4 my-8">
				<div className="flex p-2 flex-col gap-8 hover:shadow-lg hover:shadow-emerald-200/60">
					<div className="flex justify-center items-center w-full rounded-md ">
						<Image
							src={"/images/Fruitbowls.jpeg"}
							alt="Fruit Bowls"
							width={500}
							height={500}
						/>
					</div>
					<div className="flex flex-col gap-4 items-center justify-center text-center p-2">
						<h1 className="animate duration-500 font-semibold text-lg md:text-xl lg:text-2xl ">
							Healthy vegan snacks
						</h1>
						<p className="text-md md:text-lg lg:text-xl font-medium">
							With the right ingredients, baobab, coconut milk, moringa,
							chocolate, peanut butter, and mango deliciousness, our smoothie
							bowls are just the perfect meal in a bowl.
						</p>
					</div>
				</div>
				<div className="flex p-2 flex-col gap-8 hover:shadow-lg hover:shadow-emerald-200/60">
					<div className="flex w-full justify-center items-center rounded-md">
						<Image
							src={"/images/coffee.jpeg"}
							alt="Coffee"
							width={300}
							height={200}
						/>
					</div>

					<div className="flex flex-col gap-4 items-center justify-center text-center p-2">
						<h1 className="font-semibold text-lg md:text-xl lg:text-2xl ">
							Freshly roasted Ethiopian coffee
						</h1>
						<p className="text-md md:text-lg lg:text-xl font-medium">
							The space brims with exciting flavors as guests marvel on freshly
							roasted beans on site while the coffee is being prepared on the
							spot. The sweet scent of frankincense burning and fusing with the
							coffee aroma pushes you to miss anything meaty.
						</p>
					</div>
				</div>
				<div className="flex p-2 flex-col gap-8 hover:shadow-lg hover:shadow-emerald-200/60">
					<div className="flex w-full justify-center items-center rounded-md">
						<Image
							src={"/images/anjeera.jpeg"}
							alt="Ethiopian Platter"
							width={1000}
							height={500}
						/>
					</div>
					<div className="flex flex-col gap-4 items-center justify-center text-center p-2">
						<h1 className="font-semibold md:text-xl lg:text-2xl text-lg">
							Ethiopian platter and wraps
						</h1>
						<p className="text-md md:text-lg lg:text-xl font-medium">
							Gluten free Injera with hearty traditional Ethiopian stews and
							vegs is one of our main meals. Something about Ethiopian platters
							that just tastes better when shared with friends.
						</p>
					</div>
				</div>
			</div>
			<div className="w-[50%] bg-cover">
				<Card
					title={"Ethiopian Platter"}
					image={"/images/anjeera.jpeg"}
				/>
			</div>
		</div>
	);
};

export default Vegancafe;
