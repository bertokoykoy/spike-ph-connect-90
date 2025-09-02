import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">🏐</span>
              </div>
              <span className="text-xl font-bold">Spike PH Connect</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Uniting Philippine volleyball through organized events, quality training, 
              and strong community connections. Join us in elevating the sport we love.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#events" className="hover:text-accent transition-colors">Find Events</a></li>
              <li><a href="#training" className="hover:text-accent transition-colors">Training Programs</a></li>
              <li><a href="#community" className="hover:text-accent transition-colors">Join Community</a></li>
              <li><a href="#create" className="hover:text-accent transition-colors">Create Event</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#help" className="hover:text-accent transition-colors">Help Center</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact Us</a></li>
              <li><a href="#agencies" className="hover:text-accent transition-colors">For Agencies</a></li>
              <li><a href="#coaches" className="hover:text-accent transition-colors">For Coaches</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Spike PH Connect. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-primary-foreground/60">
              <a href="#privacy" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-accent transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;