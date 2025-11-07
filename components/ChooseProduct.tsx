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

      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 gap-4 md:gap-4 lg:gap-2 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`
    rounded-2xl overflow-hidden shadow-xl transition-shadow duration-300 
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
              <div className="absolute inset-0 bg-linear-to-t from-[#FCFCFC]/50 to-transparent" />
            </div>
            <div className="p-6 flex flex-col grow text-center">
              <h3 className="text-lg md:text-3xl font-cal text-[#AB5DFF]">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2 grow whitespace-pre-line">
                {card.description}
              </p>
              {/* <button className="mt-4 bg-[#AB5DFF] text-white px-2 py-2 md:px-8 md:py-3 rounded-full hover:bg-purple-700 transition-colors shadow-md text-center">
                {card.button}
              </button> */}
              <VioletButton className="mt-2 w-auto max-w-[300px] mx-auto px-8 py-4 md:w-full md:max-w-none text-sm  lg:text-base xl:text-lg">{card.button}</VioletButton>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
