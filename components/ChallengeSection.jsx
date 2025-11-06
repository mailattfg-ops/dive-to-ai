"use client";
import SectionHeader from "./SectionHeader";
import { Calendar, Trophy, Users, Target } from "lucide-react";

export default function ChallengeSection() {
  const calendar = "/calendar.png";

  const stats = [
    { value: "10,000+", label: "Businesses transformed" },
    { value: "50,000+", label: "Hours of mentoring delivered" },
    { value: "500+", label: "AI solutions implemented" },
    { value: "100+", label: "Research Projects Supported" },
  ];

  const features = [
    {
      icon: <Calendar className="text-white text-lg" />,
      title: "Structured Learning",
      text: "28 days of carefully designed lessons and implementations",
    },
    {
      icon: <Trophy className="text-white text-lg" />,
      title: "Real Results",
      text: "Implement working AI solutions by the end of the challenge",
    },
    {
      icon: <Users className="text-white text-lg" />,
      title: "Expert Mentoring",
      text: "1-1 support from experienced AI implementation consultants",
    },
    {
      icon: <Target className="text-white text-lg" />,
      title: "Business Focused",
      text: "Learn AI applications specific to your industry and goals",
    },
  ];

  return (
    <section className="bg-white text-center px-4">
      <div className="max-w-7xl mx-auto mt-8 md:mt-2">
        <SectionHeader
          eyebrow="Let's Understand"
          description="Learn at your own pace and discover how AI can help your business grow"
        >
          <span className="text-[#AB5DFF]">DiveTo.AI</span> in action
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-6">
          {stats.map((stat, i) => (
            <div key={i}>
              <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 md:mt-10">
        <SectionHeader
          eyebrow="Let's Understand"
          description="From problem to product — learn to build real solutions using AI tools in just 14 days.
Experience the power of applied AI through design, research, and development.
Choose from tracks like Education, Food Tech, Retail, and E-commerce."
        >
          The <span className="text-[#AB5DFF]">14-Day</span> AI Product
          Development Challenge
        </SectionHeader>
      </div>

      <div
        className="relative w-full max-w-6xl mx-auto mt-10 rounded-3xl 
  bg-linear-to-b from-[#F9F5FF] via-[#F3E8FF] to-[#ECECFF]
  shadow-[0_8px_30px_-8px_rgba(124,59,237,0.15)]
  border border-[#E5D4FF]
  px-6 sm:px-8 md:px-12 py-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left column - features */}
          <div className="space-y-6">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start gap-4">
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-lg 
              bg-linear-to-b from-[#AB5DFF] to-[#D2A8FF]
              shadow-[0_8px_20px_-6px_rgba(124,59,237,0.3)] shrink-0"
                >
                  {feature.icon}
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-cal text-[#4C4C4C] text-base md:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="text-[#71717A] text-base md:text-lg leading-snug">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center">
            <img
              src={calendar}
              alt="28-Day Challenge"
              className="hidden md:block w-full h-auto max-2w-x mx-auto drop-shadow-2xl"
            />
            <button className="bg-[#AB5DFF] hover:opacity-90 text-white text-base md:text-lg font-cal rounded-full shadow-md transition-all duration-200 px-4 py-2 md:px-8 md:py-4">
              Join the 28-Day Challenge
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
