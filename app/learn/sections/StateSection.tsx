import StatsShowcase from "@/components/StatsShowcase";
import { stats } from "@/data/learnPageData";

export default function StatsSection() {
  return (
    <section className="w-full bg-white  pt-4 md:pt-8 lg:pt-12">
      <div className="max-w-7xl mx-auto">
        <StatsShowcase
          eyebrow="Let's Understand"
          title={
            <>
              <span className="text-[#AB5DFF]">DiveTo.AI</span> in action
            </>
          }
          description="Learn at your own pace and discover how AI can help your business grow"
          stats={stats}
        />
      </div>
    </section>
  );
}
