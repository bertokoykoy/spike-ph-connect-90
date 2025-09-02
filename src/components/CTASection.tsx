import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calendar, Trophy } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full" />
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white rounded-full" />
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-white rounded-full" />
        <div className="absolute bottom-32 right-1/3 w-24 h-24 border-2 border-white rounded-full" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="text-accent">Elevate</span> Your Game?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join thousands of volleyball enthusiasts, coaches, and organizations 
            already using Spike PH Connect to grow the sport across the Philippines.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center text-white">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">For Players</h3>
            <p className="text-white/80">Find events, improve skills, connect with teams</p>
          </div>
          
          <div className="text-center text-white">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">For Organizers</h3>
            <p className="text-white/80">Create events, manage tournaments, reach more players</p>
          </div>
          
          <div className="text-center text-white">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">For Agencies</h3>
            <p className="text-white/80">Support programs, track progress, build communities</p>
          </div>
        </div>
        
        <div className="text-center">
          <Button variant="heroSecondary" size="lg" className="mr-4">
            Get Started Free
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button variant="hero" size="lg">
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;