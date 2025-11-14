import React from "react";
import SectionHeader from "@/components/SectionHeader";
import LearnTimeline from "@/components/LearnTimeline";
import { steps } from "@/data/learnPageData";

export default function LearnTimelineSection() {
  return (
    <section className="w-full bg-white pt-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Let’s Understand"
          description="Thousands of organizations trust DiveTo.AI to implement AI solutions. Get the expertise, tools, and confidence to transform your business."
        >
          What <span className="text-[#AB5DFF]">You'll Learn</span> — Step-by-Step
        </SectionHeader>
        <div className="mt-12">
          <LearnTimeline steps={steps} />
        </div>
      </div>
    </section>
  );
}
