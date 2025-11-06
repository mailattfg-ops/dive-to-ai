import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-0 text-white text-2xl">
              <Image
                src="/logo.svg"
                alt="DiveTo.ai Logo"
                width={20}
                height={32}
                priority
              />
              <span className="font-cal text-lg text-white">
                DiveTo.ai
              </span>
            </div>
            <p className="text-sm text-white mt-3 leading-relaxed">
              Your partner in AI implementation and business transformation
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white transition">
                  28-Day Challenge
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-white transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h4 className="text-white font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white transition">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-[#E4E4E7] mb-6" />

        <div className="text-center text-xs text-[#FFFFFF] space-y-2">
          <p>DiveTo.AI. All rights reserved. © 2025</p>
          <p className="hidden md:block">
            DiveTo.AI as an educational and consultancy platform provides AI
            implementation guidance. Results may vary based on individual
            business needs and implementation.
          </p>
        </div>
      </div>
    </footer>
  );
}
