import { Button } from "@/components/ui/button";
import { Menu, User, Calendar, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">🏐</span>
            </div>
            <span className="text-xl font-bold text-primary">Spike PH Connect</span>
          </Link>
          
          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/events" className="text-foreground hover:text-primary transition-colors">Events</Link>
            <Link to="/training" className="text-foreground hover:text-primary transition-colors">Training</Link>
            <Link to="/community" className="text-foreground hover:text-primary transition-colors">Community</Link>
            <Link to="/agencies" className="text-foreground hover:text-primary transition-colors">Agencies</Link>
          </nav>
          
          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/signin">
                <User className="w-4 h-4 mr-2" />
                Sign In
              </Link>
            </Button>
            <Button variant="default" size="sm">
              Get Started
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;