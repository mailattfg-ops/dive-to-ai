import React from "react";

interface ToolItem {
  icon: string;
  title: string;
  subtitle: string;
}

interface ToolsGridProps {
  data: ToolItem[];
}

export default function ToolsGrid({ data }: ToolsGridProps) {
  return (
    <div className="w-full mt-10">
      <div
        className="
          grid 
          grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
          gap-8 md:gap-10 
          max-w-7xl mx-auto px-6
        "
      >
        {data.map((item, i) => (
          <div
            key={i}
            className="
              flex flex-col items-center text-center 
              w-full max-w-[160px] mx-auto
            "
          >
            <div
              className="
                w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 
                flex items-center justify-center 
                rounded-xl bg-white shadow-sm border border-gray-200
              "
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
              />
            </div>

            <p className="text-sm md:text-base font-semibold text-black mt-3">
              {item.title}
            </p>
            <p className="text-xs md:text-sm text-gray-600">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
