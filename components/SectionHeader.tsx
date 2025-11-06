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
      <p className="text-sm uppercase text-[#0A1015] tracking-wide font-semibold font-sans mt-4 md:mt-8 ">
        {eyebrow}
      </p>
      <div className="text-3xl md:text-4xl font-cal mt-2">
  {children}
</div>

      <p className="text-gray-500 mt-4 max-w-3xl mx-auto font-sans">
        {description}
      </p>
    </div>
  );
}