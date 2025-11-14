import React from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  description?: string;
  children: React.ReactNode;
}

export default function SectionHeader({
  eyebrow,
  description,
  children,
}: SectionHeaderProps) {
  return (
    <div className="text-center w-full max-w-3xl mx-auto px-4">
      {eyebrow && (
        <p className="text-sm uppercase text-[#0A1015] tracking-wide font-semibold font-sans mt-4 md:mt-8">
          {eyebrow}
        </p>
      )}

      <div className="text-3xl md:text-4xl font-cal mt-2 leading-snug">
        {children}
      </div>

      {description && (
        <p className="max-w-lg lg:max-w-3xl text-[#5C5C5C] mt-2 md:mt-4 text-[13px] lg:text-[17px] xl:text-[20px] mx-auto font-sans leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
