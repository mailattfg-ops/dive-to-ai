import ExpertiseSection from '@/components/ExpertiseSection';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <HeroSection />
      <ExpertiseSection/>
    </div>
  );
}