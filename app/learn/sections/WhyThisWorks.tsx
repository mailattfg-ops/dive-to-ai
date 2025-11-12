import SectionHeader from "@/components/SectionHeader";
import SimpleFeatureList from "@/components/ui/SimpleFeatureList";

export default function WhyThisWorks() {
  return (
    <section className="w-full bg-white  pt-4 md:pt-8 lg:pt-12">
      <div className="max-w-7xl mx-auto text-center">
        <SectionHeader
          eyebrow="Let’s Understand"
          description="All 5 Tracks Included (₹24,995 Value) — Learn AI for Education, Retail, E-commerce, Food, and Strategy."
        >
          Why <span className="text-[#AB5DFF]">This Challenge</span> Works
        </SectionHeader>

        <SimpleFeatureList
          variant="detailed"
          items={[
            {
              icon: "/Image/Icon/whatsapp.svg",
              title: "24×7 WhatsApp Support",
              description: "Mentors ready anytime you need help",
            },
            {
              icon: "/Image/Icon/hands-holding.svg",
              title: "Hands-On Learning",
              description: "Build your own live product.",
            },
            {
              icon: "/Image/Icon/code-square.svg",
              title: "No Coding Required",
              description: "100% AI-powered creation",
            },
            {
              icon: "/Image/Icon/certificate-check.svg",
              title: "Portfolio & Certification",
              description:
                "Showcase your AI product to employers or investors.",
            },
          ]}
        />
      </div>
    </section>
  );
}
