import React from "react";

const testimonials = [
  {
    name: "Leah Andrews",
    title: "CEO Techsphere",
    image: "/people1.jpg",
    text: "Whether you’re a beginner or an expert, DiveTo.AI provides excellent resources to help you achieve your goals.",
  },
  {
    name: "Raj Patel",
    title: "COO GrowthHacks",
    image: "/people2.jpg",
    text: "Streamlining processes and boosting efficiency is key to scaling your business effectively.",
  },
  {
    name: "Michael Thomson",
    title: "CMO Innovatech",
    image: "/people3.jpg",
    text: "Innovation drives success. At Innovatech, we leverage AI to transform ideas into reality.",
  },
  {
    name: "Sofia Kim",
    title: "CTO CodeMasters",
    image: "/people4.jpg",
    text: "Empowering developers with cutting-edge tools is our mission. Together, we code the future!",
  },
  {
    name: "Leah Andrews",
    title: "CEO Techsphere",
    image: "/people1.jpg",
    text: "Whether you’re a beginner or an expert, DiveTo.AI provides excellent resources to help you achieve your goals.",
  },
  {
    name: "Michael Thomson",
    title: "CMO Innovatech",
    image: "/people3.jpg",
    text: "Innovation drives success. At Innovatech, we leverage AI to transform ideas into reality.",
  },
];

export default function Testimonials() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className=" grid grid-cols-2 md:grid-cols-3 gap-6">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-start gap-4 border border-[#D5D5D5] rounded-3xl p-2 md:p-5 shadow-sm hover:shadow-md transition-all duration-300 bg-white"
          >
            <div className="flex items-center gap-3 font-sans">
              <img
                src={item.image}
                alt={item.name}
                className="w-8 h-8 md:w-16 md:h-16 rounded-full object-cover"
              />

              <div>
                <h3 className="font-semibold text-base md:text-lg">
                  {item.name}
                </h3>
                <p className=" text-xs md:text-sm text-[#808080]">
                  {item.title}
                </p>
              </div>
            </div>
            <p className="text-[#17171C] text-sm md:text-base leading-relaxed font-sans">
              “{item.text}”
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
