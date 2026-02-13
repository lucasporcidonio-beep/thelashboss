import HeroSection from "@/components/HeroSection";
import MovementSection from "@/components/MovementSection";
import SpeakersSection from "@/components/SpeakersSection";
import ExperienceSection from "@/components/ExperienceSection";
import TicketsSection from "@/components/TicketsSection";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection />
      <MovementSection />
      <SpeakersSection />
      <ExperienceSection />
      <TicketsSection />
      <WaitlistSection />
      <Footer />
    </main>
  );
};

export default Index;
