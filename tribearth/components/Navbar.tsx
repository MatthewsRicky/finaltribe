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
    <div className="relative w-full">
      <div className="w-full flex bg-emerald-100/90 items-center gap-4 px-4 py-6">
      <div className="flex w-fit">
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
        className={`md:flex w-full absolute ${ isOpen ? 'flex': 'hidden'}`}
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