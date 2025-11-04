"use client";
import Link from "next/link";
import Image from "next/image";
import { Iphone } from "./ui/iphone";


const HeroSection = () => {


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
        

        <h1 className="hidden md:block text-4xl md:text-7xl font-bold text-gray-900 leading-tight mb-4">
          Empowering Businesses
          <br /> to Innovate with <span className="text-[#AB5DFF]">AI</span>
        </h1>
      
        <h1 className="block md:hidden text-4xl font-bold text-gray-900 leading-tight mb-4">
          Become the
          <br /> Master of <span className="text-[#AB5DFF]">AI</span>
        </h1>

   
        <p className="hidden md:block text-sm md:text-xl text-[#828282] mb-10 max-w-3xl mx-auto">
          Master the power of Artificial Intelligence to transform your business —
          through hands-on implementation, consulting, and research-driven
          solutions.
        </p>
    
        <p className="block md:hidden text-sm text-[#828282] mb-10 max-w-3xl mx-auto">
          Master AI implementation through our
          structured 28-day challenge or
          get personalized consulting for your
          business
        </p>
      
        <div className="flex flex-row font-cal-san gap-0 justify-center mb-8 md:mb-16 text-[7px] sm:text-sm md:text-base">
          
          <div className="flex flex-row gap-2 md:hidden">
            <Link
              href="#"
              className="bg-[#AB5DFF] text-white px-3 py-2 rounded-full font-semibold hover:bg-purple-700 transition-colors shadow-md"
            >
              Join the 28-Day Challenge
            </Link>
            <Link
              href="#"
              className="bg-transparent border border-purple-600 text-purple-600 px-3 py-2 rounded-full font-semibold hover:bg-purple-50 transition-colors shadow-md"
            >
              Book Your AI Strategy Call
            </Link>
          </div>

       
          <div className="hidden md:flex flex-row gap-4">
            <Link
              href="#"
              className="bg-[#AB5DFF] text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors shadow-md"
            >
              Book Your AI Strategy Call
            </Link>
            <Link
              href="#"
              className="bg-transparent border border-purple-600 text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors shadow-md"
            >
              Explore the 14-Day Product Challenge
            </Link>
          </div>
        </div>
     


        <div className="relative flex flex-col items-center justify-center">
  
          <div className="flex items-center gap-2 md:gap-3 pl-2 md:px-4 md:py-2 rounded-full mb-6 md:hidden">
            <p className="font-semibold text-gray-800 text-xs leading-snug">
              JOIN OVER 10,000<br/>PROFESSIONALS
            </p>
            <div className="flex -space-x-2 bg-[#C7C7C7] rounded-full p-1 px-2">
              {[1, 2, 3, 4].map((num) => (
                <div
                  key={num}
                  className="w-6 h-6 rounded-full border border-black overflow-hidden"
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

            <div className="relative w-full flex justify-center overflow-hidden h-[70vw] md:h-[50vw] max-h-[620px]">
              <div className="w-[50vw] md:w-[30vw] max-w-[380px]">
        
                <Iphone className="text-[#575757]" />
              </div>
            </div>

          <div className="relative z-20 flex justify-center w-full -mt-[6vw]">
  <div className="w-[60vw] md:w-[40vw] max-w-[450px] bg-white text-gray-800 font-medium shadow-lg p-2 md:p-4 border-t border-l border-r border-[#B4B4B4] rounded-t-2xl">
    <div className="bg-[#E5E5E5] text-[#000000] text-[2vw] text-sm md:text-base p-2 md:p-4 rounded-2xl text-center leading-snug">
      Create a Social Media Plan for my Company
    </div>
  </div>
</div>

          </div>

        </div>
      </div>

      
      <div className="hidden xl:flex absolute bottom-6 left-6 items-center gap-3 px-4 py-2 rounded-full ">
        <p className="font-semibold text-gray-800 text-xl whitespace-nowrap">
          JOIN OVER 10,000<br/>PROFESSIONALS
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