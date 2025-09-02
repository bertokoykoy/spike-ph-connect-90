import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-filipino-volleyball.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 mb-6">
          <span className="text-accent font-semibold">🏐</span>
          <span className="text-white font-medium">Uniting Philippine Volleyball</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">Spike </span>
          <span className="text-accent">PH </span>
          <span className="text-white">Connect</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
          The ultimate platform connecting volleyball players, event organizers, and government agencies 
          to elevate Philippine volleyball through better training, organized tournaments, and community building.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="min-w-[200px]">
            Find Events
          </Button>
          <Button variant="heroSecondary" size="lg" className="min-w-[200px]">
            Start Training
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="backdrop-blur-sm bg-white/10 p-6 rounded-2xl border border-white/20">
            <div className="text-3xl font-bold text-accent mb-2">500+</div>
            <div className="text-white/80">Active Players</div>
          </div>
          <div className="backdrop-blur-sm bg-white/10 p-6 rounded-2xl border border-white/20">
            <div className="text-3xl font-bold text-accent mb-2">50+</div>
            <div className="text-white/80">Monthly Events</div>
          </div>
          <div className="backdrop-blur-sm bg-white/10 p-6 rounded-2xl border border-white/20">
            <div className="text-3xl font-bold text-accent mb-2">15</div>
            <div className="text-white/80">Partner Agencies</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;