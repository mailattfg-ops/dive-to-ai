import React from "react";

interface FeatureItem {
  icon?: string;
  title?: string;
  description?: string;
  text?: string;
}

interface SimpleFeatureListProps {
  items: FeatureItem[];
  variant?: "simple" | "detailed";
}

export default function SimpleFeatureList({
  items,
  variant = "simple",
}: SimpleFeatureListProps) {
  return (
    <div className="bg-white w-full mt-8">
      {/* ✅ Outer container for consistent alignment */}
      <div className="max-w-7xl mx-auto">
        <div
          className="
            grid 
            grid-cols-1 lg:grid-cols-4 
            gap-8 md:gap-10 lg:gap-14
            text-center
          "
        >
          {items.map((item, i) => (
            <div
              key={i}
              className={`
                flex flex-col items-center justify-center
                text-center
                mx-auto
                max-w-[160px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[250px]
              `}
            >
              {item.icon && (
                <div className="w-8 h-8 md:w-14 md:h-14 mb-4 flex items-center justify-center">
                  <img
                    src={item.icon}
                    alt={item.title || "icon"}
                    className="w-9 h-9 md:w-12 md:h-12 object-contain"
                  />
                </div>
              )}

              {/* SIMPLE VARIANT */}
              {variant === "simple" && item.text && (
                <p
                  className="
                    text-[#A05CFF]
                    font-cal
                    text-[24px] md:text-[28px] lg:text-[32px] xl:text-[34px]
                    leading-[1.3]
                    tracking-tight
                    wrap-break-word
                  "
                >
                  {item.text}
                </p>
              )}

              
              {variant === "detailed" && (
                <>
                  <h3
                    className="
                      text-[#A05CFF]
                      font-cal
                      text-[24px] md:text-[28px] lg:text-[32px] xl:text-[34px]
                      leading-tight
                    "
                  >
                    {item.title}
                  </h3>
                  {item.description && (
                    <p
                      className="
                        text-[#71717A]
                        mt-2
                        text-sm md:text-[16px] lg:text-[18px] xl:text-[24px]
                        leading-relaxed
                        max-w-[240px]
                      "
                    >
                      {item.description}
                    </p>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
