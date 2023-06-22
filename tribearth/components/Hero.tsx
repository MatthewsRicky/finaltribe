"use client";

import { useState } from "react";

const Hero = () => {

  const [isClicked, setIsClicked] = useState(false)

  return (
    <div className="hero flex justify-center items-center relative">
      <button 
        onClick={() => {}}
        className="bg-yellow-400/80 rounded-lg py-4 px-3 text-center text-slate-700/80 text-xl md:text-2xl lg:text-3xl font-semibold lg:font-bold hover:scale-105 cursor-pointer transition-all duration-300"
      >
        Explore
      </button>
    </div>
  )
}

export default Hero