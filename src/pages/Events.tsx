import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Search, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import manilaImage from "@/assets/ph-tournament-volleyball.jpg";
import cebuImage from "@/assets/ph-school-volleyball.jpg";
import davaoImage from "@/assets/ph-beach-volleyball.jpg";
import heroImage from "@/assets/manila-tournament.jpg";

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const allEvents = [
    {
      title: "Manila Volleyball Championship 2024",
      date: "March 15-17, 2024",
      location: "SM Mall of Asia Arena",
      participants: 48,
      category: "Tournament",
      image: manilaImage,
      featured: true
    },
    {
      title: "Cebu Inter-School League",
      date: "March 22, 2024",
      location: "University of San Carlos",
      participants: 16,
      category: "School League",
      image: cebuImage
    },
    {
      title: "Davao Beach Volleyball Open",
      date: "April 5-7, 2024",
      location: "Samal Island Beach Resort",
      participants: 32,
      category: "Beach",
      image: davaoImage
    },
    {
      title: "Quezon City Youth Championship",
      date: "April 12-14, 2024",
      location: "Smart Araneta Coliseum",
      participants: 24,
      category: "Youth",
      image: manilaImage
    },
    {
      title: "Palawan Beach Tournament",
      date: "April 20-21, 2024",
      location: "El Nido Beach Resort",
      participants: 20,
      category: "Beach",
      image: davaoImage
    },
    {
      title: "Baguio Mountain League",
      date: "May 3-5, 2024",
      location: "Baguio Athletic Bowl",
      participants: 18,
      category: "Tournament",
      image: cebuImage
    }
  ];

  const categories = ["All", "Tournament", "School League", "Beach", "Youth"];

  const filteredEvents = allEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || event.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5 relative">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/src/assets/ph-tournament-volleyball.jpg')`,
            filter: 'blur(2px) brightness(0.3)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-background/80 to-secondary/40" />
      </div>
      
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-24 border-b overflow-hidden">
          {/* Hero Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${heroImage})`,
            }}
          >
            <div className="absolute inset-0 bg-blue-900/70" />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-primary/30 to-transparent blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-secondary/30 to-transparent blur-3xl" />
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-900 backdrop-blur-md border border-white/30 mb-8 animate-fade-in shadow-elegant">
                <Calendar className="w-5 h-5 text-white animate-pulse" />
                <span className="text-white font-semibold">Events Hub</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold mb-8 animate-fade-in text-accent drop-shadow-2xl">
                Discover <span className="text-accent">Events</span>
              </h1>
              
              <p className="text-xl text-white mb-10 max-w-2xl mx-auto animate-fade-in leading-relaxed drop-shadow-lg">
                Find and join the most exciting volleyball tournaments, leagues, and competitions 
                across the Philippines. From local community games to national championships.
              </p>

              {/* Search and Filter */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto animate-fade-in">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search events or locations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-blue-900 border-white/60 text-white font-bold placeholder:text-white/80"
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full sm:w-48 bg-blue-900 border-white/60 text-white font-bold">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category.toLowerCase()}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
          <div className="container mx-auto px-4 relative">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">
                  {selectedCategory === "all" ? "All Events" : `${selectedCategory} Events`}
                </h2>
                <p className="text-muted-foreground">
                  {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''} found
                </p>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="hover-scale bg-white/50 backdrop-blur-md border-primary/20">
                  <Calendar className="w-4 h-4 mr-2" />
                  Calendar View
                </Button>
                <Button variant="outline" size="sm" className="hover-scale bg-white/50 backdrop-blur-md border-primary/20">
                  <MapPin className="w-4 h-4 mr-2" />
                  Map View
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredEvents.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No events found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search or filter criteria
                </p>
                <Button variant="outline" onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }} className="hover-scale">
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-secondary relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full" />
            <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white rounded-full" />
            <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-white rounded-full" />
            <div className="absolute bottom-32 right-1/3 w-24 h-24 border-2 border-white rounded-full" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Can't find what you're <span className="text-accent">looking for?</span>
              </h3>
              <p className="text-xl text-white/90 mb-8">
                Organize your own tournament or suggest an event for your community
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="heroSecondary" size="lg" className="hover-scale">
                  Create Event
                </Button>
                <Button variant="hero" size="lg" className="hover-scale">
                  Request Event
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Events;