"use client";
import SectionHeader from "./SectionHeader";
import { useTimelineScroll } from "@/hooks/useTimelineScroll";

export default function HowItWorks() {
  const steps = [
    { title: "Discovery", text: "Define your goals and identify AI opportunities.", side: "right" },
    { title: "Implementation", text: "Deploy tools, systems, and automation tailored to your business.", side: "left" },
    { title: "Training", text: "Upskill your team with AI tools.", side: "right" },
    { title: "Optimization", text: "Continuous improvement & results.", side: "left" },
  ];

  const { activeStep, dotPositions, containerRef, dotRefs } = useTimelineScroll(steps.length);

  return (
    <section className="bg-white relative overflow-hidden">
      <SectionHeader
        eyebrow="Let's Understand"
        description="Thousands of organizations trust DiveTo.AI to implement AI solutions."
      >
        How <span className="text-purple-500">DiveTo.AI</span> works
      </SectionHeader>

      <div ref={containerRef} className="relative mt-24 max-w-4xl mx-auto px-0.5 md:px-8 xl:px-0">
        <div className="absolute left-[22px] md:left-1/2 transform md:-translate-x-1/2 top-[-60px] bottom-[-60px] w-[3px] bg-linear-to-b from-transparent via-[#DCBAFF] to-transparent" />

        {dotPositions.length > 0 && (
          <div
            className="absolute left-1.5 md:left-1/2 transform md:-translate-x-1/2 -translate-y-2 md:-translate-y-4 transition-all duration-500 z-10"
            style={{ top: `${dotPositions[activeStep]}px` }}
          >
            <span className="block w-8 h-8 md:w-12 md:h-12 bg-[#AB5DFF66] rounded-full opacity-60"></span>
          </div>
        )}

        <div className="flex flex-col gap-8 md:gap-14 relative z-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-row-reverse items-start gap-4 md:flex-row md:justify-between ${
                step.side === "right" ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={`w-full md:w-5/12 text-${step.side === "left" ? "right" : "left"}`}>
                <h3 className={`text-xl md:text-2xl font-semibold ${
                    activeStep === index ? "text-purple-600" : "text-[#17171C]"
                  }`}>
                  {step.title}
                </h3>
                <p className="mt-1 text-[#71717A] text-sm md:text-base">{step.text}</p>
              </div>

              <div
                ref={(el:any) => (dotRefs.current[index] = el)}
                className="w-4 h-4 bg-[#AB5DFF] rounded-full"
              />

              <div className="hidden md:block w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
