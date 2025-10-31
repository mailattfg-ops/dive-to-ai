import React from "react";
import SectionHeader from "./SectionHeader";

export default function WhyChooseSection() {
  const features = [
    {
      title: "Proven Expertise",
      desc: "Over 500 successful AI implementations",
    },
    {
      title: "Tailored Consulting",
      desc: "Every project built for your unique business goals",
    },
    {
      title: "Hands-On Learning",
      desc: "1-1 mentoring, workshops, and challenges",
    },
    {
      title: "Continuous Support",
      desc: "From idea to full-scale AI adoption giving constant support",
    },
  ];

  return (
    <section className="w-full py-4 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <SectionHeader
        eyebrow="Let’s Understand"
        description="Thousands of organizations trust DiveTo.AI to implement AI solutions.
          Get the expertise, tools, and confidence to transform your business."
          >
            Why businesses choose{" "}
          <span className="text-[#AB5DFF]">DiveTo.AI</span>
          </SectionHeader>
          
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {features.map((item, index) => (
            <div key={index} className="px-4">
              <h3 className="text-lg md:text-3xl font-semibold text-[#AB5DFF] mb-2">
                {item.title}
              </h3>
              <p className="text-[#71717A] text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
