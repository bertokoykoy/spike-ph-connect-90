import { Button } from "@/components/ui/button";
import EventCard from "./EventCard";
import manilaImage from "@/assets/ph-tournament-volleyball.jpg";
import cebuImage from "@/assets/ph-school-volleyball.jpg";
import davaoImage from "@/assets/ph-beach-volleyball.jpg";

const EventsSection = () => {
  const upcomingEvents = [
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
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-primary font-semibold">🏆</span>
            <span className="text-primary font-medium">Discover Events</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Upcoming <span className="text-primary">Tournaments</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join the most exciting volleyball events across the Philippines. From local tournaments 
            to national championships, find your next competition here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {upcomingEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="mr-4">
            View All Events
          </Button>
          <Button variant="default" size="lg">
            Create Event
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;