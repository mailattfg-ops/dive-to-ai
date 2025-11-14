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
      <div className="max-w-7xl mx-auto px-12">
        <div
          className="
            grid 
            grid-cols-1 lg:grid-cols-4 
            gap-8
            text-center
          "
        >
          {items.map((item, i) => {
            const hasIcon = Boolean(item.icon);

            return (
              <div
                key={i}
                className="
                  flex flex-col items-center
                  mx-auto text-center
                  max-w-[160px] md:max-w-[180px] lg:max-w-[300px]
                "
              >
                {hasIcon && (
                  <div className="flex items-center justify-center h-16 md:h-20 mb-3 md:mb-4">
                    <img
                      src={item.icon}
                      alt={item.title || 'icon'}
                      className="w-10 h-10 md:w-14 md:h-14 object-contain"
                    />
                  </div>
                )}

                {variant === "simple" && item.text && (
                  <p
                    className="
                      text-[#A05CFF]
                      font-cal
                      text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px]
                      leading-none
                      tracking-tight
                      
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
                        text-[24px] md:text-[28px] lg:text-[32px]
                        leading-none
                      "
                    >
                      {item.title}
                    </h3>

                    {item.description && (
                      <p
                        className="
                          text-[#71717A]
                          mt-2
                          text-sm md:text-[16px] lg:text-[18px]
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
            );
          })}
        </div>
      </div>
    </div>
  );
}
