import AiJourney from '@/components/ChooseProduct';
import ExpertiseSection from '@/components/ExpertiseSection';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowWorks';
import Navbar from '@/components/Navbar';
import Testimonials from '@/components/testimonials';
import WhyChooseSection from '@/components/WhyChooseUs';
import ChallengeSection from "@/components/ChallengeSection";
import LabsSection from '@/components/ShowcaseSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import StatsSection from '@/app/learn/sections/StateSection';
import {expertiseData} from '@/data/homePageData'
import ExpertiseSectionWrapper from '@/components/ui/ExpertiseSectionWrapper';
import HomeExpertiseSection from '@/components/HomeExpertiseSection';


export default function Home() {
  const stats = [
    { value: "10,000+", label: "Professionals Upskilled" },
    { value: "50,000+", label: "Hours of mentoring delivered" },
    { value: "500+", label: "AI solutions implemented" },
    { value: "100+", label: "Research Projects Supported" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <HeroSection />
      <HomeExpertiseSection/>
      <Testimonials/>
      <WhyChooseSection/>
      <AiJourney/>
      <HowItWorks/>
      <LabsSection/>
      <StatsSection/>
      <ChallengeSection/>
      <FaqSection/>
      <Footer/>
    </div>
  );
}