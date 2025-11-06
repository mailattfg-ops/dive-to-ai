"use client";
import { useEffect, useState, useRef } from "react";
import SectionHeader from "./SectionHeader";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [dotPositions, setDotPositions] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  // Measure the absolute Y positions of dots (once rendered)
  useEffect(() => {
    const updateDotPositions = () => {
      const containerTop =
        containerRef.current?.getBoundingClientRect().top || 0;
      const positions = dotRefs.current.map((dot) => {
        if (!dot) return 0;
        const rect = dot.getBoundingClientRect();
        return rect.top - containerTop;
      });
      setDotPositions(positions);
    };

    updateDotPositions();
    window.addEventListener("resize", updateDotPositions);
    return () => window.removeEventListener("resize", updateDotPositions);
  }, []);

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const section = containerRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.bottom < 0 || rect.top > windowHeight) return;

      const sectionHeight = rect.height;
      const scrollYInsideSection = Math.min(
        Math.max(windowHeight / 2 - rect.top, 0),
        sectionHeight
      );

      const stepHeight = sectionHeight / steps.length;
      const currentStep = Math.min(
        steps.length - 1,
        Math.floor(scrollYInsideSection / stepHeight)
      );

      setActiveStep(currentStep);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [steps.length]);

  return (
    <section className="bg-white relative overflow-hidden">
      <SectionHeader
        eyebrow="Let's Understand"
        description="Thousands of organizations trust DiveTo.AI to implement AI solutions.
        Get the expertise, tools, and confidence to transform your business."
      >
        How <span className="text-purple-500">DiveTo.AI</span> works
      </SectionHeader>

      <div ref={containerRef} className="relative mt-24 max-w-5xl mx-auto">
        <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-[-60px] bottom-[-60px] w-[3px] bg-linear-to-b from-transparent via-[#DCBAFF] to-transparent" />
        {dotPositions.length > 0 && (
          <div
            className="absolute left-6 md:left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out z-10"
            style={{
              top: `${dotPositions[activeStep] - 8}px`,
            }}
          >
            <span className="block w-8 h-8 ml-0.5 md:ml-0 bg-[#AB5DFF66] rounded-full opacity-60"></span>
          </div>
        )}

        {/* Steps */}
        <div className="flex flex-col gap-16   relative z-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-row-reverse items-start gap-4 pl-4 md:pl-0 md:flex-row md:items-center md:justify-between md:gap-0 ${
                step.side === "right" ? "md:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`w-full md:w-5/12 text-left md:text-${
                  step.side === "left" ? "right" : "left"
                }`}
              >
                <h3
                  className={`text-xl md:text-2xl font-semibold ${
                    activeStep === index ? "text-purple-600" : "text-[#17171C]"
                  }`}
                >
                  {step.title}
                </h3>
                <p className="text-[#71717A] mt-2 text-md">{step.text}</p>
              </div>

              <div
                ref={(el: any) => (dotRefs.current[index] = el)}
                className="relative z-10 flex items-center justify-center w-4 h-4 rounded-full shadow-md bg-[#AB5DFF]"
              />

              <div className="hidden md:block w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
