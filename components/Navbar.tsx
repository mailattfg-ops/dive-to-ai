"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-50 bg-white border-b border-gray-100">
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-16 py-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/Blacklogo.svg"
            alt="Logo"
            width={24}
            height={32}
            priority
          />
          <span className="font-cal text-lg text-black">DiveTo.ai</span>
        </Link>

        <div className="hidden md:flex items-center space-x-6 text-black text-sm font-inter">
          <div className="h-4 w-px bg-[#262626]" />
          <Link href="/" className="hover:text-gray-800">Home</Link>
          <Link href="#" className="hover:text-gray-800">About</Link>
          <Link href="#" className="hover:text-gray-800">Login</Link>
          <Link href="#" className="hover:text-gray-800">Contact</Link>
          <Link href="/learn" className="hover:text-gray-800">Learn</Link>
        </div>

        <div className="hidden md:block">
          <Link
            href="#"
            className="font-cal bg-black text-white rounded-full py-2 px-5 text-sm hover:bg-gray-900 transition"
          >
            Get Started
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg border border-gray-300"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 animate-slideDown p-6 md:hidden">
          <div className="flex flex-col space-y-6 text-black text-base font-inter">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="#" onClick={() => setOpen(false)}>About</Link>
            <Link href="#" onClick={() => setOpen(false)}>Login</Link>
            <Link href="#" onClick={() => setOpen(false)}>Contact</Link>
            <Link href="/learn" onClick={() => setOpen(false)}>Learn</Link>

            <Link
              href="#"
              className="font-cal bg-black text-white rounded-full py-3 px-4 text-center hover:bg-gray-900"
              onClick={() => setOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
