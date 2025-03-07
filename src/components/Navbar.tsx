"use client";

import Link from "next/link";
import { useState } from "react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#FFF6F2] text-black border-b-1 border-b-gray-400">
      <div className="container mx-auto flex justify-between items-center font-semibold text-[16px] p-4">
        {/* ---------------- Logo or Brand Name ------------------- */}
        <div className="text-xl font-semibold pacifico-regular text-red-800">Mohammed Arif</div>

        {/* ---------------- Mobile Menu Button ------------------- */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* ------------ Desktop Menu --------------- */}
        <nav className="hidden md:flex space-x-6 justify-center items-center flex-1">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link href="/services" className="hover:text-gray-400">
            Services
          </Link>
          <Link href="/portfolio" className="hover:text-gray-400">
            Portfolio
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </nav>
      </div>

      {/* --------------- Mobile Menu ---------------- */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-[#FFF6F2] text-center text-[12px]`}>
        <ul className="flex flex-col space-y-2 p-4">
          <li>
            <Link href="/" className="hover:text-gray-400">
                Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-400">
                About
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-gray-400">
                Services
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="hover:text-gray-400">
                Portfolio
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-400">
                Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}