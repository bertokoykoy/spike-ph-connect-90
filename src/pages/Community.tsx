import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users, MessageSquare, Calendar, Trophy, MapPin, Heart, Share2, Eye } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/ph-beach-volleyball.jpg";

const Community = () => {
  const communityStats = [
    { icon: Users, label: "Active Members", value: "15,247", color: "text-primary" },
    { icon: MessageSquare, label: "Forum Posts", value: "8,432", color: "text-secondary" },
    { icon: Calendar, label: "Monthly Events", value: "156", color: "text-primary" },
    { icon: Trophy, label: "Teams Formed", value: "342", color: "text-secondary" }
  ];

  const forumTopics = [
    {
      title: "Best training drills for beginners",
      author: "Maria Santos",
      replies: 24,
      views: 312,
      category: "Training",
      lastActivity: "2h ago",
      pinned: true
    },
    {
      title: "Looking for team members in Manila area",
      author: "Juan Dela Cruz",
      replies: 18,
      views: 156,
      category: "Team Formation",
      lastActivity: "4h ago"
    },
    {
      title: "Upcoming tournament rules discussion",
      author: "Ana Rodriguez",
      replies: 32,
      views: 445,
      category: "Events",
      lastActivity: "6h ago"
    },
    {
      title: "Equipment recommendations for indoor play",
      author: "Carlos Mendoza",
      replies: 15,
      views: 203,
      category: "Equipment",
      lastActivity: "8h ago"
    }
  ];

  const featuredMembers = [
    {
      name: "Coach Miguel Santos",
      role: "Professional Coach",
      location: "Manila",
      specialization: "Youth Development",
      experience: "15 years",
      avatar: "MS"
    },
    {
      name: "Sarah Chen",
      role: "Tournament Director",
      location: "Cebu",
      specialization: "Event Management",
      experience: "8 years",
      avatar: "SC"
    },
    {
      name: "Rico Villanueva",
      role: "Beach Volleyball Pro",
      location: "Boracay",
      specialization: "Beach Volleyball",
      experience: "12 years",
      avatar: "RV"
    }
  ];

  const recentActivities = [
    {
      user: "Team Spike Masters",
      action: "won the Manila Championship",
      time: "2 hours ago",
      type: "achievement"
    },
    {
      user: "Lisa Park",
      action: "completed Advanced Spiking course",
      time: "4 hours ago",
      type: "training"
    },
    {
      user: "Volleyball PH League",
      action: "announced new tournament dates",
      time: "6 hours ago",
      type: "event"
    },
    {
      user: "Coach Ramon",
      action: "shared a new training video",
      time: "8 hours ago",
      type: "content"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5 relative">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/src/assets/ph-school-volleyball.jpg')`,
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
              <Users className="w-5 h-5 text-white animate-pulse" />
              <span className="text-accent font-semibold">Community Hub</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-8 animate-fade-in text-accent drop-shadow-2xl">
              Join the <span className="text-accent">Community</span>
            </h1>
            
            <p className="text-xl text-white mb-10 max-w-2xl mx-auto animate-fade-in leading-relaxed drop-shadow-lg">
              Connect with fellow volleyball enthusiasts, coaches, and players across the Philippines. 
              Share experiences, form teams, and grow together in our vibrant community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="bg-blue-900 hover:bg-blue-800 backdrop-blur-md border border-white/30 text-white hover:text-white shadow-elegant hover-scale">
                <Heart className="w-4 h-4 mr-2" />
                Join Community
              </Button>
              <Button variant="outline" size="lg" className="hover-scale border-white/30 bg-blue-900 hover:bg-blue-800 backdrop-blur-md text-white hover:text-white">
                <MessageSquare className="w-4 h-4 mr-2" />
                Browse Forums
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {communityStats.map((stat, index) => (
              <Card key={index} className="group hover-scale bg-white/80 backdrop-blur-md border-white/40 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant">
                <CardContent className="p-8 text-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <stat.icon className={`relative w-10 h-10 ${stat.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-2 group-hover:scale-105 transition-transform duration-300`}>{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 relative">
        {/* Content Background */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm rounded-3xl mx-4" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Forum Topics */}
            <Card className="bg-gradient-to-br from-card via-card to-primary/5 border-primary/10 hover:shadow-elegant transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  Latest Forum Discussions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {forumTopics.map((topic, index) => (
                    <div key={index} className="group flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-muted/30 to-transparent hover:from-primary/10 hover:to-secondary/5 transition-all duration-300 border border-transparent hover:border-primary/20 cursor-pointer">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold group-hover:text-primary transition-colors duration-200 story-link">
                            {topic.title}
                          </h3>
                          {topic.pinned && (
                            <Badge variant="secondary" className="text-xs bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/30">Pinned</Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="font-medium">by {topic.author}</span>
                          <Badge variant="outline" className="text-xs hover:bg-primary/10 transition-colors">
                            {topic.category}
                          </Badge>
                          <span>{topic.lastActivity}</span>
                        </div>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <div className="flex items-center gap-1 mb-1 group-hover:text-primary transition-colors">
                          <MessageSquare className="w-3 h-3" />
                          <span className="font-semibold">{topic.replies}</span>
                        </div>
                        <div className="flex items-center gap-1 group-hover:text-secondary transition-colors">
                          <Eye className="w-3 h-3" />
                          <span className="font-semibold">{topic.views}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-6 border-t border-primary/10">
                  <Button variant="outline" className="w-full hover-scale bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 border-primary/20">
                    View All Discussions
                    <MessageSquare className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activities */}
            <Card className="bg-gradient-to-br from-card via-card to-secondary/5 border-primary/10 hover:shadow-elegant transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg">
                    <Calendar className="w-5 h-5 text-secondary" />
                  </div>
                  Recent Community Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-muted/30 to-transparent hover:from-secondary/10 hover:to-primary/5 transition-all duration-300 border border-transparent hover:border-secondary/20 cursor-pointer">
                      <div className={`relative w-3 h-3 rounded-full transition-all duration-300 group-hover:scale-150 ${
                        activity.type === 'achievement' ? 'bg-gradient-to-r from-primary to-primary-glow shadow-glow' :
                        activity.type === 'training' ? 'bg-gradient-to-r from-secondary to-secondary-glow shadow-glow' :
                        activity.type === 'event' ? 'bg-gradient-to-r from-primary to-secondary shadow-elegant' : 'bg-muted-foreground'
                      }`}>
                        <div className="absolute inset-0 rounded-full blur-sm bg-current opacity-50 group-hover:opacity-70" />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold group-hover:text-primary transition-colors">{activity.user}</span>
                        <span className="text-muted-foreground"> {activity.action}</span>
                      </div>
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors font-medium">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Featured Members */}
            <Card className="bg-gradient-to-br from-card to-primary/5 border-primary/10 hover:shadow-elegant transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg">
                    <Trophy className="w-5 h-5 text-primary" />
                  </div>
                  Featured Members
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {featuredMembers.map((member, index) => (
                    <div key={index} className="group flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-muted/20 to-transparent hover:from-primary/10 hover:to-secondary/5 transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/20">
                      <Avatar className="group-hover:scale-110 transition-transform duration-300 border-2 border-primary/20">
                        <AvatarFallback className="bg-gradient-to-br from-primary/20 to-secondary/20 text-primary font-bold">{member.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">{member.name}</h4>
                        <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">{member.role}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <MapPin className="w-3 h-3 text-muted-foreground group-hover:text-secondary transition-colors" />
                          <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">{member.location}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-to-br from-card to-secondary/5 border-primary/10 hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" size="sm" className="w-full justify-start hover-scale bg-gradient-to-r hover:from-primary/10 hover:to-secondary/5 border-primary/20">
                    <Users className="w-4 h-4 mr-2" />
                    Find Team Members
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start hover-scale bg-gradient-to-r hover:from-secondary/10 hover:to-primary/5 border-primary/20">
                    <Calendar className="w-4 h-4 mr-2" />
                    Create Event
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start hover-scale bg-gradient-to-r hover:from-primary/10 hover:to-secondary/5 border-primary/20">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Start Discussion
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start hover-scale bg-gradient-to-r hover:from-secondary/10 hover:to-primary/5 border-primary/20">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Content
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Community Guidelines */}
            <Card className="bg-gradient-to-br from-card to-accent/5 border-primary/10 hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">Community Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-muted-foreground">
                  {[
                    "Respect all community members",
                    "Share knowledge and experiences", 
                    "Use appropriate language",
                    "No spam or self-promotion",
                    "Report inappropriate behavior"
                  ].map((guideline, index) => (
                    <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
                      <span className="hover:text-foreground transition-colors">{guideline}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4 hover-scale bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 border-primary/20">
                  Full Guidelines
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

        <Footer />
      </div>
    </div>
  );
};

export default Community;