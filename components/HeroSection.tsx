"use client";
import Link from "next/link";
import Image from "next/image";
import { Iphone } from "./ui/iphone";
import { VioletButton } from "./ui/violetButton";

const HeroSection = () => {
  return (
    <section
      className="relative overflow-hidden rounded-[40px] mx-2 md:mx-4 border border-[#C4C4C4] pt-4 md:pt-10"
      style={{
        backgroundImage: `
    linear-gradient(180deg, rgba(171,93,255,0.8) 0%, white 100%),
    url("/HomeBackGround.png")
  `,
        backgroundBlendMode: "hard-light",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-cal text-gray-900 mb-2 mt-12 md:mt-24">
          Empowering Businesses
          <br />
          to Innovate with <span className="text-[#AB5DFF]">AI</span>
        </h1>

        <p className="text-sm md:text-xl font-sans text-[#828282] mb-3 max-w-3xl mx-auto">
          Master the power of Artificial Intelligence to transform your business
          — through hands-on implementation, consulting, and research-driven
          solutions.
        </p>

          <div className="flex flex-row gap-2 md:gap-8 justify-center mb-8 md:mb-0 text-[8px] md:text-lg font-cal">
          {/* <Link
            href="#"
            className="bg-[#AB5DFF] text-white px-2 py-2 md:px-8 md:py-3 rounded-full hover:bg-purple-700 transition-colors shadow-md text-center"
          >
            Book Your AI Strategy Call
          </Link> */}
          <VioletButton className="px-2 py-2 md:px-8 md:py-3 ">Book Your AI Strategy Call</VioletButton>

          <button
            className="bg-white border border-[#AB5DFF] text-[#AB5DFF] px-2 py-2 md:px-8 md:py-3 rounded-full hover:bg-purple-50 transition-colors shadow-md text-center"
          >
            Explore the 14-Day Product Challenge
          </button>
        </div>

        <div className="relative flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 md:gap-4 pl-2 md:px-4 md:py-2 rounded-full mb-6 md:mb-0 md:mt-8 xl:hidden">
            <p className="font-semibold font-sans text-black text-xs md:text-base leading-snug">
              JOIN OVER 10,000
              <br />
              PROFESSIONALS
            </p>
            <div className="flex -space-x-2 md:-space-x-4 bg-[#C7C7C7] rounded-full p-1 px-2">
              {[1, 2, 3, 4].map((num) => (
                <div
                  key={num}
                  className="w-6 h-6 md:w-10 md:h-10 rounded-full border border-black overflow-hidden"
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

          <div className="relative flex flex-col items-center justify-center overflow-visible mt-2 md:mt-8 xl:mt-16">
            <div className="relative w-full flex justify-center overflow-hidden h-[60vw] md:h-[45vw] xl:h-[35vw] max-h-[620px]">
              <div className="w-[50vw] md:w-[40vw] xl:w-[24vw] max-w-[380px]">
                <Iphone className="mx-auto" />
              </div>
            </div>

            <div className="relative z-20 flex justify-center w-full">
              <div className="w-[80vw] md:w-[50vw] max-w-[450px] bg-white text-gray-800 font-medium p-2 md:px-4 md:pt-4 md:pb-8 xl:px-4 xl:pt-4 xl:pb-2 border-t border-l border-r border-[#B4B4B4] rounded-t-2xl md:rounded-t-4xl shadow-[4px_4px_30px_10px_rgba(0,0,0,0.15)]">
                <div className="bg-[#E5E5E5] text-[#000000] font-sans font-medium text-xs md:text-lg p-2 md:pb-4 md:pt-2 md:px-2 xl:px-4 xl:py-4 rounded-lg   md:rounded-2xl text-center leading-snug">
                  Create a Social Media Plan for my Company
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden xl:flex absolute bottom-6 left-6 items-center gap-3 px-4 py-2 rounded-full ">
        <p className="font-semibold font-sans text-black text-lg whitespace-nowrap">
          JOIN OVER 10,000
          <br />
          PROFESSIONALS
        </p>
        <div className="flex -space-x-2 bg-[#C7C7C7] rounded-full p-1 px-2">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="w-10 h-10 rounded-full border border-black overflow-hidden"
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
