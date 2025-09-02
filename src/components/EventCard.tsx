import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, MapPin, Users } from "lucide-react";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  participants: number;
  image: string;
  category: string;
  featured?: boolean;
}

const EventCard = ({ title, date, location, participants, image, category, featured = false }: EventCardProps) => {
  return (
    <Card className={`group hover:shadow-card transition-all duration-300 transform hover:-translate-y-2 ${featured ? 'ring-2 ring-accent' : ''}`}>
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
            {category}
          </span>
        </div>
        {featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
              Featured
            </span>
          </div>
        )}
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <CalendarDays className="w-4 h-4" />
            <span className="text-sm">{date}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{location}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="w-4 h-4" />
            <span className="text-sm">{participants} participants</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            View Details
          </Button>
          <Button variant="default" size="sm" className="flex-1">
            Register
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;