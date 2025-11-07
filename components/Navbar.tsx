// src/components/Navbar.tsx

import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="relative z-10 flex items-center justify-between p-4 px-8 md:px-16 lg:px-8 py-6 bg-white">
      <div className="flex items-center space-x-8">
        <Link href="/" className="flex items-center"> 
          <Image 
            src="/Blacklogo.svg" 
            alt="Logo" 
            width={20} 
            height={32} 
            priority 
          />
          <span className="font-cal text-lg text-black">
            DiveTo.ai
          </span>
        </Link>
        <div className="hidden md:flex items-center space-x-6 text-black text-sm font-inter">
          <div className="h-4 w-px bg-[#262626]" aria-hidden="true"></div>   
          <Link href="#" className="hover:text-gray-900 transition-colors">Home</Link>
          <Link href="#" className="hover:text-gray-900 transition-colors">About</Link>
          <Link href="#" className="hover:text-gray-900 transition-colors">Login</Link>
          <Link href="#" className="hover:text-gray-900 transition-colors">Contact</Link>
        </div>
      </div>
      <div>
        <Link href="#" className="font-cal bg-black text-white rounded-full py-2 text-xs px-4 md:text-sm md:py-3 md:px-4">
          Get started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;