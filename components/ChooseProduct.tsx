import SectionHeader from "./SectionHeader";

export default function AiJourney() {
  const cards = [
    {
      title: "AI Consulting for Businesses",
      description:
        "Get expert guidance to integrate AI into your workflow — from automation and analytics to marketing and customer experience.",
      button: "Book a Consulting Call",
      image:
        "/product1.jpg",
    },
    {
      title: "AI Product R&D",
      description:
        "Collaborate with our R&D team to develop AI-driven tools, prototypes, and intelligent systems tailored to your organization's goals.",
      button: "Partner with DiveTo.AI Labs",
      image:
        "/product2.jpg",
    },
    {
      title: "Learn with DiveTo.AI",
      description:
        "Participate in hands-on experiences such as the 14-Day AI Product Development Challenge and the 28-Day AI Implementation Challenge.",
      button: "Visit Learn with DiveToAI",
      image:
        "product3.jpg",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-10 lg:px-20 text-center bg-white">

        <SectionHeader
        eyebrow="Let's Understand"
        description="Thousands of organizations trust DiveTo.AI to implement AI solutions.
        Get the expertise, tools, and confidence to transform your business.">
            Choose your own <span className="text-[#AB5DFF]">AI Journey</span>
        </SectionHeader>

      <div className="max-w-6xl mx-auto mt-12 grid gap-8 md:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col border border-[#C3C3C3]"
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
              <h3 className="text-lg md:text-3xl font-bold text-[#AB5DFF]">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2 grow">
                {card.description}
              </p>
              <button className="mt-4 bg-[#AB5DFF] hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-full transition-colors">
                {card.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

