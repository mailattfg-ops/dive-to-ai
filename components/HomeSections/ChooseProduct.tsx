"use client";

import { useEffect, useState } from "react"; // 1. Import useState
import Link from "next/link";
import SectionHeader from "../SectionHeader";
import { VioletButton } from "../ui/violetButton";
import { cards } from "@/data/homePageData";
import { InlineWidget } from "react-calendly"; // 2. Import InlineWidget

export default function AiJourney() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openCalendly = () => {
    setIsModalOpen(true);
  };

  return (
    <section className="relative py-8 px-4 md:px-14 lg:px-8 text-center bg-white">
      <SectionHeader
        eyebrow="Let's Understand"
        description="Thousands of organizations trust DiveTo.AI to implement AI solutions."
      >
        Choose your own <span className="text-[#AB5DFF]">AI Journey</span>
      </SectionHeader>

      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 gap-4 lg:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`rounded-4xl overflow-hidden shadow-xl transition-shadow duration-300 
              flex flex-col border border-[#C3C3C3]
              ${
                index === 2
                  ? "md:col-span-2 md:w-1/2 md:mx-auto lg:col-span-1 lg:w-full lg:mx-0"
                  : ""
              }
            `}
          >
            <div className="relative h-60">
              <img
                src={card.image}
                alt={card.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-white via-white/80 to-transparent" />
            </div>

            <div className="p-6 flex flex-col grow text-center">
              <h3 className="font-cal text-[28px] md:text-[24px] lg:text-[28px] xl:text-[38px] text-[#AB5DFF]">
                {card.title}
              </h3>

              <p className="text-gray-600 text-sm mt-2 grow whitespace-pre-line">
                {card.description}
              </p>

              {card.title === "AI Consulting for Businesses" ? (
                <VioletButton
                  onClick={openCalendly}
                  className="mt-2 w-auto max-w-[300px] mx-auto px-6 py-3"
                >
                  {card.button}
                </VioletButton>
              ) : card.title === "Learn with DiveTo.AI" ? (
                <Link href="/learn" className="w-full">
                  <VioletButton className="mt-2 w-auto max-w-[300px] mx-auto px-6 py-3">
                    {card.button}
                  </VioletButton>
                </Link>
              ) : (
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLScMCgxX88n8yxDaP8PqMqFNvnkseATh3X03GVM3Ru_-Ubt8Rg/viewform?usp=publish-editor"
                  target="_blank" 
                  rel="noopener noreferrer" 
                >
                  <VioletButton className="mt-2 w-auto max-w-[300px] mx-auto px-6 py-3">
                    {card.button}
                  </VioletButton>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-11/12 md:w-3/4 lg:w-2/3 max-w-4xl h-5/6 max-h-[700px] bg-white rounded-2xl shadow-xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-3 -right-3 z-10 p-2 bg-white rounded-full text-gray-700 shadow-md hover:bg-gray-200 transition"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <div className="w-full h-full rounded-2xl overflow-hidden">
              <InlineWidget
                url="https://calendly.com/divetoaimail/30min"
                styles={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
