"use client"

import Image from "next/image"

const Navbar = () => {
  return (
    <div className="absolute w-full top-0 right-0 left-0 bg-emerald-100/90 flex justify-between items-center gap-4 px-4 py-6">
      <div>
        <Image 
          src={"/images/Tribearth logo.png"}
          alt="logo"
          width={80}
          height={80}
        />
      </div>
    </div>
  )
}

export default Navbar