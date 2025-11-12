import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { VioletButton } from "./ui/violetButton";

export default function AiJourney() {
  const cards = [
    {
      title: "AI Consulting for Businesses",
      description:
        "Get expert guidance to integrate AI into your workflow — from automation and analytics to marketing and customer experience.\n→ Book a Consulting Call",
      button: "Book a Consulting Call",
      image: "/product1.jpg",
    },
    {
      title: "AI Product R&D",
      description:
        "Collaborate with our R&D team to develop AI-driven tools, prototypes, and intelligent systems tailored to your organization's goals.",
      button: "Partner with DiveTo.AI Labs",
      image: "/product2.jpg",
    },
    {
      title: "Learn with DiveTo.AI",
      description:
        "Participate in our hands-on experiences, such as the 14-Day AI Product Development Challenge and the 28-Day AI Implementation Challenge, to master AI tools and create your own AI projects.",
      button: "Visit Learn with DiveToAI",
      image: "/product3.jpg",
    },
  ];

  return (
    <section className="py-8 px-4 md:px-14 lg:px-8 text-center bg-white">
      <SectionHeader
        eyebrow="Let's Understand"
        description="Thousands of organizations trust DiveTo.AI to implement AI solutions.
        Get the expertise, tools, and confidence to transform your business."
      >
        Choose your own <span className="text-[#AB5DFF]">AI Journey</span>
      </SectionHeader>

      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 gap-4 lg:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`
    rounded-4xl overflow-hidden shadow-xl transition-shadow duration-300 
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
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-white via-white/80 to-transparent" />
            </div>
            <div className="p-6 flex flex-col grow text-center">
              <h3 className="font-col text-[28px] md:text-[24px] lg:text-[28px] xl:text-[38px] leading-tight font-cal text-[#AB5DFF]">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2 grow whitespace-pre-line">
                {card.description}
              </p>

              {card.title === "Learn with DiveTo.AI" ? (
                <Link href="/learn" className="w-full">
                  <VioletButton className="mt-2 w-auto max-w-[300px] mx-auto px-6 py-3 text-sm lg:text-base xl:text-lg">
                    {card.button}
                  </VioletButton>
                </Link>
              ) : (
                <VioletButton className="mt-2 w-auto max-w-[300px] mx-auto px-6 py-3 text-sm lg:text-base xl:text-lg">
                  {card.button}
                </VioletButton>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
