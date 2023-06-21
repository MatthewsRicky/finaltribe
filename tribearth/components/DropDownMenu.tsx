"use client"

import { useState } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="flex items-center text-emerald-300"
      >
        Navbar Link
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-emerald-300 flex flex-col gap-4">
          <a href="#" className="px-4 py-2 hover:bg-emerald-400">Option 1</a>
          <a href="#" className="px-4 py-2 hover:bg-emerald-400">Option 2</a>
          <a href="#" className="px-4 py-2 hover:bg-emerald-400">Option 3</a>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;