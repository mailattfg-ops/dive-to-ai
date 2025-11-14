import React from "react";

export interface TestimonialItem {
  name: string;
  title: string;
  image: string;
  text: string;
}

interface TestimonialsGridProps {
  testimonials: TestimonialItem[];
}

export default function TestimonialsGrid({ testimonials }: TestimonialsGridProps) {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-2 xl:p-0">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="
              flex flex-col h-full 
              border border-[#D5D5D5] rounded-3xl md:rounded-4xl 
              p-2 md:p-5 shadow-sm hover:shadow-md 
              transition-all duration-300 bg-white
            "
          >
            {/* Header */}
            <div className="flex items-center gap-3 font-sans shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-8 h-8 md:w-16 md:h-16 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <h3 className="font-semibold text-[12px] md:text-lg leading-tight">
                  {item.name}
                </h3>
                <p className="text-[9px] md:text-sm text-[#808080] leading-tight">
                  {item.title}
                </p>
              </div>
            </div>

          
            <p className="text-[#17171C] text-[10px] md:text-base leading-relaxed font-sans mt-2">
              “{item.text}”
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

