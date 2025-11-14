import React from "react";

interface ExpertiseItem {
  title: string;
  image?: string;      
  color?: string;
  icon?: string;       
}

interface ExpertiseGridProps {
  data: ExpertiseItem[];
  showImages?: boolean; 
  showIcons?: boolean;   
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

          {showImages && item.image && (
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[480px] md:h-[340px] object-cover"
            />
          )}

    
          <div
            className={`
              ${item.color || "bg-[#AB5DFFB2]"} 
              absolute left-6 bottom-10 
              text-white px-3 py-2 md:px-4 md:py-3 
              rounded-md md:rounded-xl 
              flex flex-col items-start justify-center gap-2
              backdrop-blur-md bg-opacity-90
              w-46 h-26 md:w-48 md:h-28
            `}
          >
            <p className="font-semibold text-[16px] text-left leading-tight">
              {item.title}
            </p>

            {showIcons && item.icon && (
              <img
                src={item.icon}
                alt="icon"
                className="h-8 md:h-10 object-contain self-center"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
