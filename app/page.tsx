import AiJourney from '@/components/HomeSections/ChooseProduct';
import HeroSection from '@/components/HomeSections/HeroSection';
import HowItWorks from '@/components/HomeSections/HowWorks';
import Navbar from '@/components/Navbar';
import WhyChooseSection from '@/components/HomeSections/WhyChooseUs';
import ChallengeSection from "@/components/HomeSections/ChallengeSection";
import LabsSection from '@/components/HomeSections/ShowcaseSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import StatsSection from '@/app/learn/sections/StateSection';
import HomeExpertiseSection from '@/components/HomeSections/HomeExpertiseSection';
import TestimonialsSection from '@/components/HomeSections/TestimonialSection';


export default function Home() {

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <HeroSection />
      <HomeExpertiseSection/>
      <TestimonialsSection/>
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