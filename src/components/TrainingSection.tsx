import { Button } from "@/components/ui/button";
import TrainingCard from "./TrainingCard";
import heroImage from "@/assets/hero-ph-volleyball.jpg";

const TrainingSection = () => {
  const trainingModules = [
    {
      title: "Advanced Spiking Techniques",
      description: "Master the art of powerful spikes with proper form, timing, and approach techniques from professional coaches.",
      duration: "45 mins",
      difficulty: "Advanced" as const,
      rating: 4.8,
      category: "Skills",
      image: heroImage
    },
    {
      title: "Beach Volleyball Fundamentals",
      description: "Learn the basics of beach volleyball including sand movement, serving techniques, and outdoor game strategies.",
      duration: "30 mins",
      difficulty: "Beginner" as const,
      rating: 4.6,
      category: "Beach",
      image: heroImage
    },
    {
      title: "Team Strategy & Positioning",
      description: "Understand advanced team formations, rotation strategies, and communication techniques for competitive play.",
      duration: "60 mins",
      difficulty: "Intermediate" as const,
      rating: 4.9,
      category: "Strategy",
      image: heroImage
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/40 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <span className="text-secondary font-semibold">📚</span>
            <span className="text-secondary font-medium">Skill Development</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Training <span className="text-secondary">Programs</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Elevate your game with our comprehensive training modules designed by professional coaches 
            and approved by Philippine volleyball experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {trainingModules.map((module, index) => (
            <TrainingCard key={index} {...module} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="secondary" size="lg" className="mr-4">
            Browse All Modules
          </Button>
          <Button variant="outline" size="lg">
            Become an Instructor
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;