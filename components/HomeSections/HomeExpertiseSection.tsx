import ExpertiseSectionWrapper from "@/components/ui/ExpertiseSectionWrapper";
import ExpertiseSection from "@/components/ExpertiseSection"
import BrandMarquee from "@/components/ui/BrandMarquee";
import { expertiseData } from "@/data/homePageData";

export default function HomeExpertiseSection() {
  return (
    <ExpertiseSectionWrapper
      eyebrow="LIMITED TIME OFFER"
      title={<h2 className="text-4xl md:text-5xl text-gray-900">Our Expertise</h2>}
      description="We specialize in AI implementation across multiple business areas:"
    >
      <ExpertiseSection
        data={expertiseData}
        showImages={true}
        showIcons={true}
      />
      <BrandMarquee />
    </ExpertiseSectionWrapper>
  );
}
