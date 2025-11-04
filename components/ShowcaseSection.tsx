"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import GridItem from "./LabCard";

export default function LabsSection() {


  return (
    <section className="hidden md:block py-4 md:py-8 bg-white text-center">
      <div className="max-w-5xl mx-auto px-6">

        <SectionHeader
          eyebrow="Let's Understand"
          description="At DiveTo.AI Labs, we experiment with next-generation AI solutions — 
          from conversational agents and intelligent dashboards to custom AI 
          models for industry-specific problems. We partner with startups, 
          educational institutions, and enterprises to explore new use cases in:"
        >
          <span className="font-bold text-gray-900">
            DiveTo.AI Labs —{" "}
            <span className="text-purple-600">R&D for the Future</span>
          </span>
        </SectionHeader>

 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 md:mt-6">

          <div className="contents md:flex md:flex-col md:gap-4">
            <GridItem
              title="Smart Manufacturing"
              imageUrl="/Smart.jpg"       
              className="
                aspect-video 
                md:aspect-auto md:grow-3 md:basis-0
              "
            />
            <GridItem
              title="Education Technology"
              imageUrl="/education.jpg"
        
              className="
                aspect-video
                md:aspect-auto md:grow-2 md:basis-0
              "
            />
          </div>
          <GridItem
            title="Sustainable AI Solutions"
            imageUrl="/AiSolution.jpg"
            className="
              aspect-video
              md:aspect-5/8"
          />
          <div className="contents md:flex md:flex-col md:gap-6">
            <GridItem
              title="Retail Automation"
              imageUrl="RetailAutomation.jpg"
       
              className="
                aspect-video
                md:aspect-auto md:grow-2 md:basis-0
              "
            />
            <GridItem
              title="Business Intelligence"
              imageUrl="/Business.jpg"
          
              className="
                aspect-video
                md:aspect-auto md:grow-3 md:basis-0
              "
            />
          </div>

        </div>


        <div className="mt-10">
          <button className="px-4 py-4 md:px-8 md:py-3 bg-[#AB5DFF] hover:opacity-90 text-white font-medium rounded-full shadow-md transition-all duration-300">
            Collaborate with DiveTo.AI Labs
          </button>
        </div>
      </div>
    </section>
  );
}
