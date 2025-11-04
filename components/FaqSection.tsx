"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; 

const faqData = [

  {
    id: 1,
    question: "What exactly does an AI agent do?",
    answer:
      "AI Supply agents handle end-to-end workflows — from gathering data to executing actions — without needing constant human input.",
  },
  {
    id: 2,
    question: "How long does it take to get started?",
    answer:
      "Onboarding is quick! You can connect your data sources and set up your first agent in under an hour. Our support team is here to help you get started.",
  },
  {
    id: 3,
    question: "Do I need technical skills to use this?",
    answer:
      "Not at all. Our platform is designed with a no-code interface. If you can describe a business process, you can build an agent to automate it.",
  },
  {
    id: 4,
    question: "What tools can it integrate with?",
    answer:
      "We integrate with over 100 popular tools, including Salesforce, Google Sheets, Slack, Shopify, and more. We also have a public API for custom integrations.",
  },
  {
    id: 5,
    question: "Is my data secure?",
    answer:
      "Yes. Data security is our top priority. We use industry-standard encryption (both at-rest and in-transit) and are SOC 2 Type II compliant.",
  },
];

export default function FaqSection() {
  return (
    <section className="py-8 md:py-20 bg-white text-gray-900">
      <div className="max-w-3xl mx-auto px-6">
        
        <div className="text-center">
          <SectionHeader eyebrow="LET'S UNDERSTAND">
            <span className="font-semibold text-gray-900">
              Frequently{" "}
              <span className="text-purple-600 font-bold">
                Asked Questions
              </span>
            </span>
          </SectionHeader>
        </div>

        {/* SHADCN ACCORDION
          - `type="single"` means only one can be open at a time.
          - `collapsible` means you can close the open one.
          - `defaultValue="1"` makes the first item open by default.
        */}
        <Accordion
          type="single"
          collapsible
          className="w-full mt-6 md:mt-12"
          defaultValue="1"
        >
          {faqData.map((item) => (
            <AccordionItem value={String(item.id)} key={item.id}>
              <AccordionTrigger className="text-lg font-medium text-left text-[#434343]">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}