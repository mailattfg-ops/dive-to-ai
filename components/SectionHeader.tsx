import React from 'react'; 


interface SectionHeaderProps {
  eyebrow: string;
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
      <p className="text-sm uppercase text-[#0A1015] tracking-wide font-semibold">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold mt-2">
        {children}
      </h2>
      <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
}