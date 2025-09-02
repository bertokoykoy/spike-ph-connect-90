import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Play, Star, Clock, Users, Search, Filter, Trophy } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrainingCard from "@/components/TrainingCard";
import heroImage from "@/assets/hero-ph-volleyball.jpg";

const Training = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

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
    },
    {
      title: "Serving Mastery Course",
      description: "Perfect your serve with various techniques including float, jump, and topspin serves.",
      duration: "40 mins",
      difficulty: "Intermediate" as const,
      rating: 4.7,
      category: "Skills",
      image: heroImage
    },
    {
      title: "Defensive Positioning & Digging",
      description: "Learn proper defensive stances, reading attacks, and effective digging techniques.",
      duration: "35 mins",
      difficulty: "Beginner" as const,
      rating: 4.5,
      category: "Defense",
      image: heroImage
    },
    {
      title: "Setting & Playmaking",
      description: "Advanced setting techniques, hand positioning, and decision making for setters.",
      duration: "50 mins",
      difficulty: "Advanced" as const,
      rating: 4.9,
      category: "Skills",
      image: heroImage
    }
  ];

  const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredModules = trainingModules.filter(module => {
    const matchesSearch = module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         module.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         module.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = selectedDifficulty === "all" || module.difficulty.toLowerCase() === selectedDifficulty.toLowerCase();
    return matchesSearch && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-secondary/5 relative">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/src/assets/hero-ph-volleyball.jpg')`,
            filter: 'blur(2px) brightness(0.3)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-background/80 to-primary/40" />
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
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-secondary/30 to-transparent blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-primary/30 to-transparent blur-3xl" />
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-900 backdrop-blur-md border border-white/30 mb-8 animate-fade-in shadow-elegant">
                <BookOpen className="w-5 h-5 text-white animate-pulse" />
                <span className="text-accent font-semibold">Training Hub</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold mb-8 animate-fade-in text-accent drop-shadow-2xl">
                Advance Your <span className="text-accent">Skills</span>
              </h1>
              
              <p className="text-xl text-white mb-10 max-w-2xl mx-auto animate-fade-in leading-relaxed drop-shadow-lg">
                Elevate your volleyball skills with our comprehensive training modules designed by 
                professional coaches and approved by Philippine volleyball experts.
              </p>

              {/* Search and Filter */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto animate-fade-in">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search training modules..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-blue-900 border-white/60 text-white font-bold placeholder:text-white/80"
                  />
                </div>
                <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                  <SelectTrigger className="w-full sm:w-48 bg-blue-900 border-white/60 text-white font-bold">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    {difficulties.map((difficulty) => (
                      <SelectItem key={difficulty} value={difficulty.toLowerCase()}>
                        {difficulty}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Training Stats */}
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
          <div className="container mx-auto px-4 relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="group hover-scale bg-white/80 backdrop-blur-md border-white/40 hover:border-secondary/40 transition-all duration-300 hover:shadow-elegant">
                <CardContent className="p-8 text-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <BookOpen className="relative w-10 h-10 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-3xl font-bold text-secondary mb-2 group-hover:scale-105 transition-transform duration-300">50+</div>
                  <div className="text-sm text-muted-foreground font-medium">Training Modules</div>
                </CardContent>
              </Card>
              <Card className="group hover-scale bg-white/80 backdrop-blur-md border-white/40 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant">
                <CardContent className="p-8 text-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <Users className="relative w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform duration-300">10,000+</div>
                  <div className="text-sm text-muted-foreground font-medium">Students Trained</div>
                </CardContent>
              </Card>
              <Card className="group hover-scale bg-white/80 backdrop-blur-md border-white/40 hover:border-secondary/40 transition-all duration-300 hover:shadow-elegant">
                <CardContent className="p-8 text-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <Star className="relative w-10 h-10 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-3xl font-bold text-secondary mb-2 group-hover:scale-105 transition-transform duration-300">4.8</div>
                  <div className="text-sm text-muted-foreground font-medium">Average Rating</div>
                </CardContent>
              </Card>
              <Card className="group hover-scale bg-white/80 backdrop-blur-md border-white/40 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant">
                <CardContent className="p-8 text-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <Trophy className="relative w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform duration-300">25+</div>
                  <div className="text-sm text-muted-foreground font-medium">Expert Coaches</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Training Modules */}
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-white/70 backdrop-blur-sm rounded-3xl mx-4" />
          <div className="container mx-auto px-4 relative">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">
                  {selectedDifficulty === "all" ? "All Training Modules" : `${selectedDifficulty} Level`}
                </h2>
                <p className="text-muted-foreground">
                  {filteredModules.length} module{filteredModules.length !== 1 ? 's' : ''} available
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredModules.map((module, index) => (
                <TrainingCard key={index} {...module} />
              ))}
            </div>

            {filteredModules.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No modules found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search or difficulty level
                </p>
                <Button variant="outline" onClick={() => {
                  setSearchTerm("");
                  setSelectedDifficulty("all");
                }} className="hover-scale">
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Learning Path Section */}
        <section className="py-20 bg-gradient-to-br from-secondary via-secondary-light to-primary relative overflow-hidden">
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
                Structured <span className="text-accent">Learning Path</span>
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Follow our recommended learning path to systematically improve your volleyball skills
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {["Fundamentals", "Intermediate Skills", "Advanced Techniques", "Professional Level"].map((level, index) => (
                  <Card key={level} className="relative bg-white/20 backdrop-blur-md border-white/30 hover:bg-white/30 transition-all duration-300 hover-scale">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                          <span className="text-accent-foreground font-bold text-xl">{index + 1}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-xl text-white mb-2">{level}</h3>
                          <p className="text-white/80">
                            {index === 0 && "Basic rules, positioning, and fundamental techniques"}
                            {index === 1 && "Serving, passing, and basic team coordination"}
                            {index === 2 && "Advanced spikes, blocks, and strategic play"}
                            {index === 3 && "Competition preparation and coaching techniques"}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Progress value={(index + 1) * 25} className="w-24 bg-white/20" />
                          <span className="text-white font-bold">{(index + 1) * 25}%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Training;