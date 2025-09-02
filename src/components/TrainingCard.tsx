import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Star, Play } from "lucide-react";

interface TrainingCardProps {
  title: string;
  description: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  rating: number;
  image: string;
  category: string;
}

const TrainingCard = ({ title, description, duration, difficulty, rating, image, category }: TrainingCardProps) => {
  const getDifficultyColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-accent/20 text-accent-foreground";
      case "Advanced": return "bg-secondary/20 text-secondary";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="group hover:shadow-card transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={image} 
          alt={title}
          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
            {category}
          </span>
        </div>
        
        <div className="absolute bottom-4 left-4">
          <Button variant="ghost" size="sm" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
            <Play className="w-4 h-4 mr-2" />
            Start Training
          </Button>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(difficulty)}`}>
            {difficulty}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-accent text-accent" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        
        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{duration}</span>
          </div>
          
          <Button variant="outline" size="sm">
            View Module
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrainingCard;