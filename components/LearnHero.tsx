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
        min-h-screen
        flex items-center justify-center
      "
    >
  
      <Image
        src="/HeroLearn.png"
        alt="Learn AI Hero"
        fill
        priority
        className="
          object-cover
          object-[50%_25%]          
          md:object-[40%_15%]       
          lg:object-[40%_40%]     
          xl:object-[45%_5%]
        "
      />

      <div
        className="
          relative z-10 text-center text-white 
          px-4 sm:px-6 
          max-w-5xl mx-auto
          mt-[10vh] md:mt-[8vh] lg:mt-[16vh]
        "
      >
        <h1
          className="
            font-cal
            text-[36px] md:text-[52px] lg:text-[62px] xl:text-[72px]
            leading-tight
          "
        >
          Master AI & Launch Your Own Product in Just 14 Days
        </h1>

        <p
          className="
            text-white/90
            mt-2 md:mt-4
            text-[14px] md:text-[16px] lg:text-[18px] xl:text-[24px]
            font-sans leading-snug
          "
        >
          Build and launch your next digital product using AI tools — no coding,
          no tech team, no big budget.
        </p>

        <VioletButton
          className="
            mt-6 sm:mt-8 
            px-4 py-2 
            sm:px-6 sm:py-3 
            md:px-10 md:py-4 
            text-[13px] md:text-[16px] lg:text-[18px] xl:text-[22px]
          "
        >
          Join Now for{" "}
          <span className="line-through ml-1 opacity-80">₹24,999</span>
          <span className="ml-2 font-bold">₹1,999 ➜</span>
        </VioletButton>
      </div>
    </section>
  );
}
