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

  }
];

export default function Testimonials() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row items-start gap-4 border border-[#D5D5D5] rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 bg-white"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-sm text-[#808080] mb-2">{item.title}</p>
              <p className="text-[#17171C] text-sm leading-relaxed">
                “{item.text}”
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
