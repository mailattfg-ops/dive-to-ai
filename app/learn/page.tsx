import ChallengeSection from "@/components/ChallengeSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import LearnHero from "@/components/LearnHero";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/testimonials";
import WhatYouWillBuild from "@/app/learn/sections/WhatYouWillBuildSection";
import WhyThisChallenge from "./sections/WhyThisChallenge";
import LearnTimelineSection from "./sections/LearnTimelineSection";
import ToolsYouMaster from "./sections/ToolsYoullMaster";
import WhyThisWorks from "./sections/WhyThisWorks";
import WhoShouldJoin from "./sections/WhoShouldJoin";
import YourResultsSection from "./sections/YourResultsSection";
import StatsSection from "./sections/StateSection";

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <LearnHero />
      <WhyThisChallenge/>
      <LearnTimelineSection/>
      <ToolsYouMaster/>
      <WhyThisWorks/>
      <WhoShouldJoin/>
      <WhatYouWillBuild/>
      <YourResultsSection/>
      <StatsSection/>
      <Testimonials />
      <ChallengeSection />
      <FaqSection />
      <Footer />
    </div>
  );
}
