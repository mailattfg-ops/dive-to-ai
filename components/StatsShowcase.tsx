import React from "react";
import SectionHeader from "./SectionHeader"; // adjust path if needed

interface Stat {
  value: string;
  label: string;
}

interface StatsSectionProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  stats: Stat[];
}

export default function StatsShowcase({
  eyebrow,
  title,
  description,
  stats,
}: StatsSectionProps) {
  return (
     <section className="bg-white text-center px-4 md:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto mt-8 md:mt-2 px-6">
      <SectionHeader eyebrow={eyebrow} description={description}>
        {title}
      </SectionHeader>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-6">
        {stats.map((stat, i) => (
          <div key={i}>
            <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
            <p className="text-gray-600 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}
