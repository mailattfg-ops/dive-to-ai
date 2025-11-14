import SectionHeader from "../../../components/SectionHeader";

export default function WhatYouWillBuild() {
  const items = [
    <>AI-powered <span className="text-[#AB5DFF] ">brand kit</span> (logo, tagline, color palette)</>,
    <>Market <span className="text-[#AB5DFF]">validation report</span></>,
    <>Landing page or <span className="text-[#AB5DFF]">MVP prototype</span></>,
    <>AI-generated <span className="text-[#AB5DFF]">ad creatives & content</span></>,
    <>Social media <span className="text-[#AB5DFF]">launch plan</span></>,
    <>Product <span className="text-[#AB5DFF]">pitch deck</span> or portfolio showcase</>,
  ];

  return (
    <section className="w-full bg-white text-center pt-10 px-4 md:px-8 lg:px-4 xl:px-16">
      <SectionHeader eyebrow="Let’s Understand" description="">
        What <span className="text-[#AB5DFF]">You’ll Build</span>
      </SectionHeader>

      <ul className="mt-10 space-y-4 max-w-3xl mx-auto text-left list-disc list-outside 
          pl-6 sm:pl-8 md:pl-10 font-cal">
        {items.map((item, i) => (
          <li
            key={i}
            className="text-[19px] md:text-[22px] lg:text-[26px] xl:text-[32px] font-medium text-black leading-relaxed"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
