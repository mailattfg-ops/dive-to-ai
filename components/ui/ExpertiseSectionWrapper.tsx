import React from "react";
import SectionHeader from "@/components/SectionHeader";

interface ExpertiseSectionWrapperProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  children: React.ReactNode;
}

export default function ExpertiseSectionWrapper({
  eyebrow,
  title,
  description,
  children,
}: ExpertiseSectionWrapperProps) {
  return (
    <section className="bg-white overflow-hidden pt-8 xl:pt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-4 xl:px-16 text-center">
        <SectionHeader eyebrow={eyebrow || ""} description={description}>
          {title}
        </SectionHeader>
        <div className="mt-8 md:mt-12">{children}</div>
      </div>
    </section>
  );
}
