import AiJourney from '@/components/ChooseProduct';
import ExpertiseSection from '@/components/ExpertiseSection';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowWorks';
import Navbar from '@/components/Navbar';
import Testimonials from '@/components/testimonials';
import WhyChooseSection from '@/components/WhyChooseUs';
import ChallengeSection from "@/Components/ChallengeSection";
import LabsSection from '@/components/ShowcaseSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <HeroSection />
      <ExpertiseSection/>
      <Testimonials/>
      <WhyChooseSection/>
      <AiJourney/>
      <HowItWorks/>
      <LabsSection/>
      <ChallengeSection/>
      <FaqSection/>
      <Footer/>
    </div>
  );
}