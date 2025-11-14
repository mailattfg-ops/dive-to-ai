import React from "react";
import SectionHeader from "../SectionHeader";
import { features } from "@/data/homePageData";

export default function WhyChooseSection() {
  
  return (
    <section className="w-full py-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <SectionHeader
          eyebrow="Let’s Understand"
          description="Thousands of organizations trust DiveTo.AI to implement AI solutions.
          Get the expertise, tools, and confidence to transform your business."
        >
          Why businesses choose{" "}
          <span className="text-[#AB5DFF]">DiveTo.AI</span>
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 mt-10">
          {features.map((item, index) => (
            <div key={index} className="px-10">
              <h3 className="text-3xl md:text-[21px] lg:text-4xl font-cal text-[#AB5DFF] mb-1 leading-none">
                <span className="block">{item.title.split(" ")[0]}</span>
                {item.title.split(" ").slice(1).join(" ")}
              </h3>

              <p className="text-[#71717A] text-[14px] md:text-[10px] lg:text-[14px] xl-[20px] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
