"use client"

import Image from "next/image"
import { useState } from "react"

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  

  return (
    <div className="hidden md:flex absolute w-full top-0 right-0 left-0 bg-emerald-100/90 justify-between items-center gap-4 px-4 py-6">
      <div>
        <Image 
          src={"/images/Tribearth logo.png"}
          alt="logo"
          width={80}
          height={80}
        />
      </div>
      <div>
        <ul className="flex gap-4">
          <li>About</li>
          <li>Artisans</li>
          <li>Cart</li>
          <li>Impact</li>
          <li>Shop</li>
          <li>Vegan Cafe</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar