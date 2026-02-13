import HeroSection from '@/components/HeroSection';
import MovementSection from '@/components/MovementSection';
import SpeakersSection from '@/components/SpeakersSection';
import ExperienceSection from '@/components/ExperienceSection';
import TicketsSection from '@/components/TicketsSection';
import FaqSection from '@/components/FaqSection';
import WaitlistSection from '@/components/WaitlistSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <MovementSection />
      <SpeakersSection />
      <ExperienceSection />
      <TicketsSection />
      <FaqSection />
      <WaitlistSection />
      <Footer />
    </main>
  );
};

export default Index;
