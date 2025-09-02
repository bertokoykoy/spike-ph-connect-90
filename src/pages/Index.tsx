import Hero from "@/components/Hero";
import Header from "@/components/Header";
import EventsSection from "@/components/EventsSection";
import TrainingSection from "@/components/TrainingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <EventsSection />
      <TrainingSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
