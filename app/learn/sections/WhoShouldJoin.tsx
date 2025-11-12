import ExpertiseSectionWrapper from "@/components/ui/ExpertiseSectionWrapper";
import { expertiseData } from "@/data/learnPageData";
import ExpertiseSection from "@/components/ExpertiseSection";

export default function WhoShouldJoin() {
  return (
    <ExpertiseSectionWrapper
  eyebrow="Let’s Understand"
  title={
    <>
      <span className="text-[#AB5DFF]">Who</span> Should{" "}
      <span className="text-[#AB5DFF]">Join</span>
    </>
  }
>
  <ExpertiseSection data={expertiseData} showImages={true} showIcons={false}/>
</ExpertiseSectionWrapper>
  );
}
