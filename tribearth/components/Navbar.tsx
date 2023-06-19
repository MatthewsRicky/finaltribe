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
      <div className="w-full flex bg-emerald-100/90 items-center gap-4 px-4 py-6">
        <ul className="flex justify-between">
          <li>
            <Link href="/">
              <Image 
                src={"/images/Tribearth logo.png"}
                alt="logo"
                width={80}
                height={80}
              />
            </Link>
          </li>
          <li>
            <button 
              className="flex flex-col md:hidden rounded-full justify-center px-2 py-4 items-center hover:text-neutral-100 hover:bg-emerald-500/90 text-emerald-500/90 w-20 text-center transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (<BiXCircle size={24} />) : (
                  
                  <AiOutlineMenu size={24} />
                ) }
                
            </button>
          </li>
        </ul>
        </div>
      <div 
        className={`relative flex md:flex justify-between items-center w-full ${ isOpen ? 'flex': 'hidden'}`}
      >
        <ul className="w-full flex  md:bg-transparent mt-[4.5rem] md:mt-0 flex-col md:flex-row justify-between items-center transition-all duration-300  bg-opacity-60 ">
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/artisans">
            <li>Artisans</li>
          </Link>
          <Link href="/impact">
            <li>Impact</li>
          </Link>
          <Link href="/vegancafe">
            <li>Vegan Cafe</li>
          </Link>
          <Link href="/shop">
            <li>Shop</li>
          </Link>
          <Link href="/cart">
            <li>
              <AiFillShopping size={24}/>
            </li>
          </Link>
          
        </ul>
      </div>
      </div>
      
  
    
    
  )
}

export default Navbar