"use client"

import { useState } from 'react';
import Link from 'next/link';

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
        Shop
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-emerald-300 flex flex-col gap-4">
          <Link href="/shop/bracelets"
            className="px-4 py-2 hover:bg-emerald-400">Bracelets
          </Link>
          <Link href="/option2"
            className="px-4 py-2 hover:bg-emerald-400">
              Earrings
            </Link>
          <Link href="/option3"
            className="px-4 py-2 hover:bg-emerald-400">Necklaces 
          </Link>
          <Link href="/option3"
            className="px-4 py-2 hover:bg-emerald-400">Option 3 
          </Link>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
