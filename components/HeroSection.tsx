"use client";
import Link from "next/link";
import Image from "next/image";
import { Iphone } from "./ui/iphone";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="relative overflow-hidden rounded-[40px] mx-2 md:mx-4 mt-2 md:mt-4 border border-[#C4C4C4] pt-4 md:pt-10"
      style={{
        backgroundImage: `linear-gradient(to bottom, #FFEBFF, #FFFFFF00), url("/HomeBackGround.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
          Empowering Businesses
          <br /> to Innovate with <span className="text-[#AB5DFF]">AI</span>
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-lg text-[#828282] mb-10 max-w-3xl mx-auto">
          Master the power of Artificial Intelligence to transform your business —
          through hands-on implementation, consulting, and research-driven
          solutions.
        </p>

        {/* 👇 Responsive Buttons */}
        <div className="flex flex-row font-cal-san  gap-0 md:gap-4 justify-center mb-8 md:mb-16 text-[7px] sm:text-sm md:text-base">
          <Link
            href="#"
            className="bg-[#AB5DFF] text-white px-3 py-2 md:px-8 md:py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors shadow-md"
          >
            {isMobile ? "Join the 28-Day Challenge" : "Book Your AI Strategy Call"}
          </Link>
          <Link
            href="#"
            className="bg-transparent border border-purple-600 text-purple-600 px-3 py-2 md:px-8 md:py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors shadow-md"
          >
            {isMobile
              ? "Book Your AI Strategy Call"
              : "Explore the 14-Day Product Challenge"}
          </Link>
        </div>

        {/* 👇 Mobile join section */}
        <div className="relative flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 md:gap-3 bg-white/80 backdrop-blur-md pl-2 md:px-4 md:py-2 rounded-full shadow-md mb-6 md:hidden">
            <p className="font-semibold text-gray-800 text-[6px] sm:text-sm leading-snug">
              JOIN OVER 10,000 <br /> PROFESSIONALS
            </p>
            <div className="flex -space-x-2 bg-[#C7C7C7] rounded-full p-1 px-2">
              {[1, 2, 3, 4].map((num) => (
                <div
                  key={num}
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-black overflow-hidden"
                >
                  <Image
                    src={`/people${num}.jpg`}
                    alt={`User ${num}`}
                    width={32}
                    height={32}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex flex-col items-center justify-center overflow-hidden mt-2 md:mt-16">
            <div className="relative w-full flex justify-center overflow-hidden h-[340px] sm:h-[400px] md:h-[620px]">
              <div className="w-[200px] sm:w-[280px] md:w-[380px]">
                <Iphone videoSrc="https://videos.pexels.com/video-files/8946986/8946986-uhd_1440_2732_25fps.mp4" />
              </div>
            </div>

            <div className="relative z-20 flex justify-center w-full -mt-6 md:-mt-10">
              <div className="w-[250px] sm:w-[320px] md:w-[450px] bg-white text-gray-800 font-medium shadow-lg p-3 sm:p-4 rounded-2xl border border-[#B4B4B4]">
                <div className="bg-[#E5E5E5] text-[#000000] text-xs sm:text-sm md:text-base p-3 rounded-2xl text-center leading-snug">
                  Create a Social Media Plan <br className="block sm:hidden" /> for
                  my Company
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="hidden md:flex absolute bottom-6 left-6 items-center gap-3 bg-white/40 backdrop-blur-md px-4 py-2 rounded-full shadow-md">
        <p className="font-semibold text-gray-800 text-xs sm:text-sm whitespace-nowrap">
          JOIN OVER 10,000 PROFESSIONALS
        </p>
        <div className="flex -space-x-2 bg-[#C7C7C7] rounded-full p-1 px-2">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-black overflow-hidden"
            >
              <Image
                src={`/people${num}.jpg`}
                alt={`User ${num}`}
                width={32}
                height={32}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
