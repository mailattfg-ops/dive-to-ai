"use client";
import Image from "next/image";
import { VioletButton } from "./ui/violetButton"; // Assuming this path is correct

export default function LearnHero() {
  return (
    <section
      className="
        relative 
        mx-2 md:mx-6 
        overflow-hidden 
        rounded-[40px] 
        border border-[#C4C4C4] 
        flex items-center justify-center
        aspect-[2.5/1.5]
      "
    >
      <Image
        src="/HeroLearn.png"
        alt="Learn AI Hero"
        fill
        priority
        className="
          object-cover 
          object-[30%_40%] 
          md:object-[40%_5%]
        "
      />

      <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto mt-10 xl:mt-38">
        <h1 className="font-cal text-lg sm:text-4xl md:text-6xl leading-tight font-cal">
          Master AI & Launch Your
          <br />
          Own Product in <span className="text-white">Just 14 Days</span>
        </h1>

        <p className="text-white/90 mt-1 md:mt-4 text-xs sm:text-base md:text-[18px] font-sans">
          Build and launch your next digital product using AI tools — no coding,
          no tech team, no big budget.
        </p>

        <VioletButton
          className="
            mt-8 px-3 py-1 md:px-10 md:py-4 text-[10px] md:text-lg
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