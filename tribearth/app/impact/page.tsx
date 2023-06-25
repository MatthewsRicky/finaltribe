"use client";

import Image from "next/image";
import Link from "next/link";

const Impact = () => {
  return (
    <div className="w-full relative flex flex-col">
      <div className="grid gap-x-6 gap-y-6 grid-row-1 md:grid-cols-2 justify-around items-center relative transition-all hover:bg-gradient-to-b from-yellow-500/20 to-emerald-300/20 duration-300 p-8 my-4 mx-4 shadow-lg">
        <div className="flex flex-col gap-y-2 shadow-lg hover:scale-105 hover:bg-white">
          <h1  className="flex font-semibold justify-center m-2 p-2 rounded-md z-10 bg-yellow-500/40 left-[40%] text-xl md:text-2xl shadow-lg hover:scale-105">Ethical Gemstones</h1>
          <p className="flex p-8 text-lg md:text-xl mt-4">Responsible sourcing of gemstones is of great importance to our brand. Our gemstones are sourced directly from ethical mines run by women in Kenya. We embrace traceability and sustainability throughout our complete supply chain.</p>
        </div>
        <Image
          className="min-w-[50%] rounded-lg hover:scale-110"
          src={"/images/Ethicalgems.jpg"}
          alt="Ethical Gems"
          width={700}
          height={1000}
        />
      </div>
      <div className="flex justify-centers p-6 text-center m-10 text-xl font-semibold italic md:text-2xl bg-emerald-300/20 rounded-lg shadow-md">
        <h1>
           Tribearth sustains 30% of LocalAid’s humanitarian work. To learn more of LocalAid’s work in Kenya, please visit <Link href ="/">localaid.or.ke</Link>
        </h1>
      </div>
      <div className="grid gap-x-6 gap-y-6 grid-row-1 md:grid-cols-2 justify-around items-center relative transition-all hover:bg-gradient-to-b from-yellow-500/20 to-emerald-300/20 duration-300 p-8 my-4 mx-4 shadow-lg">
        <Image
          className="min-w-[50%] rounded-lg hover:scale-110"
          src={"/images/Fairtrade.jpg"} alt="Fair Trade" width={700} height={1000} />
        <div className="flex flex-col gap-y-2 shadow-lg hover:scale-105 hover:bg-white">
          <h1 className="flex font-semibold justify-center m-2 p-2 rounded-md z-10 bg-yellow-500/40 left-[40%] text-xl md:text-2xl shadow-lg hover:scale-105">Fair Trade</h1>
          <h2>FASHION IS THE LARGEST INDUSTRIAL EMPLOYER OF WOMEN AND LESS THAN 2% ARE ACTUALLY PAID A LIVING WAGE.</h2>
          <p className="flex p-8 text-lg md:text-xl mt-4">Our vision is to empower women by providing them with fair and ethical means in which to earn a living. We promote gender equality in a sector that have long been male dominated. We place special emphasis on training and development that empowers the women working at the workshop.</p>
        </div>
      </div>
      <div className="grid gap-x-6 gap-y-6 grid-row-1 md:grid-cols-2 justify-around items-center relative transition-all hover:bg-gradient-to-b from-yellow-500/20 to-emerald-300/20 duration-300 p-8 my-4 mx-4 shadow-lg">
         <div className="flex flex-col gap-y-2 shadow-lg hover:scale-105 hover:bg-white">
          <h1 className="flex font-semibold justify-center m-2 p-2 rounded-md z-10 bg-yellow-500/40 left-[40%] text-xl md:text-2xl shadow-lg hover:scale-105">Green Workshop</h1>
          <p className="flex p-8 text-lg md:text-xl mt-4">We are passionate about preserving our planet for future generations. Our workshop, based in Diani, Kenya, operates using sustainable interventions, such as our recycling plant which includes recycling waste material and water. Additionally, we recycle our waste metals to re-create designs. We are working on setting up solar systems for our power and water harvesting systems.</p>
        </div>
        <Image
          className="min-w-[50%] rounded-lg hover:scale-110"
          src={"/images/green.png"}
          alt="Green Workshop"
          width={700}
          height={1000}
        />
      </div>
      <div className="grid gap-x-6 gap-y-6 grid-col-2 md:grid-cols-2 justify-around items-center relative transition-all hover:bg-gradient-to-b from-yellow-500/20 to-emerald-300/20 duration-300 p-8 my-4 mx-4 shadow-lg">
         <div>
          <Image
            className="min-w-[50%] rounded-lg hover:scale-110"
            src={"/images/Womenempowerment.jpeg"}
            alt="Women Empowerment"
            width={500}
            height={100}
          />
        </div>
        <div className="flex flex-col gap-y-2 shadow-lg hover:scale-105 hover:bg-white">
          <h1 className="flex font-semibold justify-center m-2 p-2 rounded-md z-10 bg-yellow-500/40 left-[40%] text-xl md:text-2xl shadow-lg hover:scale-105">Womens Empowerment</h1>
          <p className="flex p-8 text-lg md:text-xl mt-4">We believe that when Kenyan women have the freedom to reach their potential, all Kenyan families and communities grow stronger. Tribearth recognizes the potential that women living with HIV/AIDS have and the role they can play to improve the country’s economy.</p>
        </div>
      </div>
    </div>
  )
}

export default Impact