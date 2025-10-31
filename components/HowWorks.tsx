"use client"
import { useState } from "react";
import SectionHeader from "./SectionHeader";

export default function HowItWorks() {
  const [cursor, setCursor] = useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const y = e.clientY - rect.top;
    setCursor(y);
  };

  const steps = [
    {
      title: "Discovery",
      text: "Define your goals and identify AI opportunities.",
      side: "right",
    },
    {
      title: "Implementation",
      text: "Deploy tools, systems, and automation tailored to your business.",
      side: "left",
    },
    {
      title: "Training",
      text: "Upskill your team with AI literacy and hands-on tools.",
      side: "right",
    },
    {
      title: "Optimization",
      text: "Measure performance and continuously improve results.",
      side: "left",
    },
  ];

  return (
    <section className="bg-white relative overflow-hidden">
      <SectionHeader
        eyebrow="Let's Understand"
        description="Thousands of organizations trust DiveTo.AI to implement AI solutions.
        Get the expertise, tools, and confidence to transform your business."
      >
        How <span className="text-purple-500">DiveTo.AI</span> works
      </SectionHeader>

      <div
        className="relative mt-16 max-w-5xl mx-auto"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setCursor(null)}
      >
       <div className="absolute left-1/2 transform -translate-x-1/2 top-[-60px] bottom-[-60px] w-[3px] bg-linear-to-b from-transparent via-[#DCBAFF] to-transparent blur-[0.5px]"></div>

        {cursor !== null && (
          <div
            className="absolute left-1/2 transform -translate-x-1/2 transition-all duration-150 ease-out"
            style={{
              top: `${cursor - 20}px`,
            }}
          >
            <span className="block w-10 h-10 bg-[#AB5DFF66] rounded-full opacity-40"></span>
          </div>
        )}

        <div className="flex flex-col gap-16 relative z-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center justify-between ${
                step.side === "right" ? "md:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`w-full md:w-5/12 text-center md:text-${
                  step.side === "left" ? "right" : "left"
                }`}
              >
                <h3 className="text-lg md:text-xl font-semibold text-[#17171C]">
                  {step.title}
                </h3>
                <p className="text-[#71717A] mt-2 text-md">{step.text}</p>
              </div>

              <div className="relative z-10 flex items-center justify-center w-4 h-4 bg-purple-500 rounded-full shadow-md" />

              <div className="hidden md:block w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
