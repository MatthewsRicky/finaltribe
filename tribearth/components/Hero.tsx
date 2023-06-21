"use client";

import { useState } from "react";

const Hero = () => {

  const [isClicked, setIsClicked] = useState(false)

  return (
    <div className="hero flex justify-center items-center relative">
      <button 
        onClick={() => {}}
        className="bg-emerald-200 rounded-lg py-4 px-3 text-center text-xl md:text-2xl lg:text-3xl font-semibold lg:font-bold hover:scale-105 cursor-pointer transition-all duration-300"
      >
        Explore
      </button>
    </div>
  )
}

export default Hero