import SectionHeader from "@/components/SectionHeader";
import SimpleFeatureList from "@/components/ui/SimpleFeatureList";
import { programHighlights } from "@/data/learnPageData";

export default function YourResultsSection() {
  return (
    <section className="w-full bg-white  pt-4 md:pt-8 lg:pt-12">
      <div className="max-w-7xl mx-auto text-center">
        <SectionHeader eyebrow="Let’s Understand">
          Your Results
        </SectionHeader>
        <div className="mt-10">
          <SimpleFeatureList items={programHighlights} variant="simple" />
        </div>
      </div>
    </section>
  );
}
