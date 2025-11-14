import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:grid md:grid-cols-4 gap-10 mb-10">
          <div className="flex flex-col items-start md:items-start col-span-1">
            <div className="flex items-center gap-2 text-white text-xl">
              <Image
                src="/logo.svg"
                alt="DiveTo.ai Logo"
                width={24}
                height={24}
              />
              <span className="font-cal text-lg text-white">DiveTo.ai</span>
            </div>
            <p className="text-[12px] md:text-[10px] lg:text-[11px] xl:text-[16px] text-white mt-2 leading-relaxed max-w-xs">
              Your partner in AI implementation and business transformation
            </p>
          </div>
          <div className="flex flex-col space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:col-span-3">
            <div>
              <h4 className="text-white font-semibold mb-2">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/" className="text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    28-Day Challenge
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-2">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-2">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-gray-600 mb-4" />

        {/* Bottom Text */}
        <div className="text-center text-xs text-white space-y-2">
          <p>DiveTo.AI. All rights reserved. © 2025</p>
          <p className="hidden md:block text-[#FFFFFF] md:text-[9px] lg:text-[10px] max-w-4xl mx-auto">
            DiveTo.AI as an educational and consultancy platform provides AI
            implementation guidance. Results may vary based on individual
            business needs and implementation.
          </p>
        </div>
      </div>
    </footer>
  );
}
