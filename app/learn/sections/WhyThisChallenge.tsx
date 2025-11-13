import SectionHeader from "@/components/SectionHeader";
import SimpleFeatureList from "@/components/ui/SimpleFeatureList";
import { challengeSteps } from "@/data/learnPageData";

export default function WhyThisChallenge() {
  return (
    <section className="w-full bg-white  px-4 md:px-8 lg:px-4 xl:px-16 pt-10">
    <div className="max-w-6xl mx-auto text-center mb-4">
      <SectionHeader
        eyebrow="Let’s Understand"
        description="AI Has Changed the Game — Learn to Play It Like a Pro. No need to spend ₹50,000+ hiring teams. Learn to use AI to"
      >
        <span className="text-[#AB5DFF]">Why This</span> Challenge{" "}
        <span className="text-[#AB5DFF]">Exists</span>
      </SectionHeader>
    </div>
    <SimpleFeatureList items={challengeSteps} variant="simple" />
    </section>
  );
}
