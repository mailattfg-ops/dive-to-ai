"use client";
import Image from "next/image";
import { VioletButton } from "./ui/violetButton";

export default function LearnHero() {
  return (
    <section
      className="
        relative 
        mx-2 md:mx-6 
        overflow-hidden 
        rounded-[40px] 
        border border-[#C4C4C4] 
        min-h-screen xl:min-h-[850px]
        flex items-center justify-center
      "
    >
  
      <Image
        src="/HeroLearn.jpg"
        alt="Learn AI Hero"
        fill
        priority
        className="
          object-cover
          object-[50%_25%]          
          md:object-[62%_50%]       
          lg:object-[40%_40%]     
          xl:object-[45%_5%]
        "
      />

      <div
        className="
          relative z-10 text-center text-white 
          px-4 sm:px-6 
          max-w-5xl mx-auto
          mt-[2vh] md:mt-[8vh] lg:mt-[32vh] xl:mt-[18vw]
        "
      >
        <h1
          className="
            font-cal
            text-[43px] md:text-[50px] lg:text-[60px] xl:text-[72px]
            leading-tight
          "
        >
          Master AI & Launch Your Own Product in Just 14 Days
        </h1>

        <p
          className="
            text-white
            text-[14px] md:text-[17px] lg:text-[18px] xl:text-[24px]
            font-sans leading-snug
          "
        >
          Build and launch your next digital product using AI tools — no coding,
          no tech team, no big budget.
        </p>

        <VioletButton
          className="
            mt-6 
            px-4 py-2 
            sm:px-6 sm:py-3 
            md:px-6 md:py-4 
            text-[14px] md:text-[16px] lg:text-[18px] xl:text-[22px]
          "
        >
          Join Now for{" "}
          <span className="line-through ml-1 opacity-60">₹24,999</span>
          <span className="ml-2">₹1,999 ➜</span>
        </VioletButton>
      </div>
    </section>
  );
}
