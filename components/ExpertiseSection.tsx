import React from "react";

interface ExpertiseItem {
  title: string;
  image?: string;      // Optional — some pages may not have images
  color?: string;
  icon?: string;       // Optional icon
}

interface ExpertiseGridProps {
  data: ExpertiseItem[];
  showImages?: boolean;  // ✅ Control image display
  showIcons?: boolean;   // ✅ Control icon display
}

export default function ExpertiseGrid({
  data,
  showImages = true,
  showIcons = true,
}: ExpertiseGridProps) {
  return (
    <div
      className="
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
        gap-0 max-w-6xl mx-auto border border-[#D5D5D5]
        rounded-3xl overflow-hidden mt-8 md:mt-12
      "
    >
      {data.map((item, i) => (
        <div
          key={i}
          className="
            relative overflow-hidden 
            shadow-lg hover:shadow-xl 
            transition-all duration-300
            flex flex-col justify-end
          "
        >
          {/* ✅ Conditionally render image */}
          {showImages && item.image && (
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[280px] md:h-[340px] object-cover"
            />
          )}

          {/* ✅ Color label (always visible) */}
          <div
            className={`
              ${item.color || "bg-[#AB5DFFB2]"} 
              absolute bottom-3 left-2 md:bottom-6 md:left-6 
              text-white px-3 py-2 md:px-4 md:py-3 
              rounded-md md:rounded-xl 
              flex flex-col items-center justify-center gap-2
              backdrop-blur-md bg-opacity-90
              w-36 h-20 md:w-48 md:h-28
            `}
          >
            <p className="font-semibold text-xs md:text-base text-center leading-tight">
              {item.title}
            </p>

            {/* ✅ Conditionally render icon */}
            {showIcons && item.icon && (
              <img
                src={item.icon}
                alt="icon"
                className="h-8 md:h-10 object-contain"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
