"use client"

import Image from "next/image"
import { useState } from "react"
import {AiOutlineMenu, AiFillShopping} from "react-icons/ai"
import Link from "next/link"
import Router from "next/navigation"

//@ts-check


const Navbar = (
) => {

  const [isOpen, setIsOpen] = useState(false);
 
  const handleClick = () => {
    if (isOpen){
      setIsOpen(!isOpen)
    }
  } 

  return (
    <div className="">
      <div className="w-full top-0 right-0 left-0 bg-emerald-100/90 justify-between items-center gap-4 px-4 py-6">
      <div className="flex justify-between">
        <Link href="/">
          <Image 
            src={"/images/Tribearth logo.png"}
            alt="logo"
            width={80}
            height={80}
          />
        </Link>
        <button className="flex flex-col md:hidden"
       onClick={handleClick}>
        <AiOutlineMenu size={24}/>
       </button>
      </div>
      <div>
      
      <div 
        className={`hidden md:flex ${ isOpen ? 'flex': 'hidden'}`}
        onClick={handleClick}
      >
        <ul className="flex gap-4">
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
      
    </div>
    </div>
    
  )
}

export default Navbar