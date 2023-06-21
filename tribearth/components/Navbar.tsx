"use client"

import Image from "next/image"
import { useState } from "react"
import {AiOutlineMenu, AiFillShopping} from "react-icons/ai"
import {BiXCircle} from "react-icons/bi"
import Link from "next/link"

//@ts-check


const Navbar = (
) => {

  const [isOpen, setIsOpen] = useState(false);
 

  return (
    <div className="relative w-full">
      <div className="w-full md:flex justify-between bg-emerald-100/90 items-center gap-4 px-4 py-6 transition-all duration-300">
        <ul className="flex justify-between items-center">
          <li className="hover:scale-105 transition duration-300">
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
              onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (<BiXCircle size={30} />) : (
                  
                  <AiOutlineMenu size={30} />
                ) }
                
            </button>
          </li>
        </ul>
        <div 
        className={` md:flex flex gap-4 justify-between items-center ${ isOpen ? 'block': 'hidden'}`}
      >
        <ul className="w-full flex mt-0 flex-col md:flex-row justify-around items-center transition-all duration-300 bg-opacity-60 text-xl active:font-semibold">
          <Link href="/about" onClick={() => setIsOpen(!isOpen)}>
            <li className="py-4 hover:bg-emerald-500 hover:text-white hover:scale-105 w-full border-b-2 md:border-none mx-4 text-center border-emerald-500 rounded-sm ">About</li>
          </Link>
          <Link href="/artisans" onClick={() => setIsOpen(!isOpen)}>
            <li className="py-4 hover:bg-emerald-500 hover:text-white hover:scale-105 w-full border-b-2 md:border-none mx-4 text-center border-emerald-500 rounded-sm ">Artisans</li>
          </Link>
          <Link href="/impact" onClick={() => setIsOpen(!isOpen)}>
            <li className="py-4 hover:bg-emerald-500 hover:text-white hover:scale-105 w-full border-b-2 md:border-none mx-4 text-center border-emerald-500 rounded-sm ">Impact</li>
          </Link>
          <Link href="/vegancafe" onClick={() => setIsOpen(!isOpen)}>
            <li className="py-4 hover:bg-emerald-500 hover:text-white hover:scale-105 w-full border-b-2 md:border-none mx-4 text-center border-emerald-500 rounded-sm ">Vegan Cafe</li>
          </Link>
          <Link href="/shop" onClick={() => setIsOpen(!isOpen)}>
            <li className="py-4 hover:bg-emerald-500 hover:text-white hover:scale-105 w-full border-b-2 md:border-none mx-4 text-center border-emerald-500 rounded-sm ">Shop</li>
          </Link>
          <Link href="/cart" onClick={() => setIsOpen(!isOpen)}>
            <li className="py-4 hover:bg-emerald-500 hover:text-white hover:scale-105 w-full border-b-2 md:border-none mx-4 text-center border-emerald-500 rounded-sm ">
              <AiFillShopping size={24} onClick={() => setIsOpen(!isOpen)} />
            </li>
          </Link>
          
        </ul>
      </div>
        </div>
      
      </div>
      
  
    
    
  )
}

export default Navbar