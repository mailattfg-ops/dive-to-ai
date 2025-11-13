import SectionHeader from "@/components/SectionHeader";
import ToolsGrid from "@/components/ui/ToolsGrid";
import { toolsData } from "@/data/learnPageData";


export default function ToolsYouMaster() {
  return (
    <section className="w-full bg-white pt-4 md:pt-8 lg:pt-12">
      <div className="max-w-7xl mx-auto text-center">
        <SectionHeader
          eyebrow="Let’s Understand"
          description="Master 10+ powerful AI platforms that automate your design, development, and marketing workflows."
        >
          Tools You'll <span className="text-[#AB5DFF]">Master</span>
        </SectionHeader>

        <ToolsGrid data={toolsData} />
      </div>
    </section>
  );
}
