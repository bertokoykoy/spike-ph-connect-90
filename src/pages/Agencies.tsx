import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Building, Users, BarChart3, FileText, Calendar, MapPin, Award, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/ph-tournament-volleyball.jpg";

const Agencies = () => {
  const agencyStats = [
    { icon: Building, label: "Partner Agencies", value: "45", color: "text-primary" },
    { icon: Users, label: "Registered Athletes", value: "12,500", color: "text-secondary" },
    { icon: Calendar, label: "Sanctioned Events", value: "234", color: "text-primary" },
    { icon: Award, label: "Certified Coaches", value: "890", color: "text-secondary" }
  ];

  const programs = [
    {
      title: "Youth Development Program",
      description: "Grassroots volleyball development for students aged 10-18 across public schools",
      participants: 3500,
      schools: 120,
      status: "Active",
      completion: 75
    },
    {
      title: "Coach Certification Program",
      description: "Professional development and certification for volleyball coaches nationwide",
      participants: 450,
      schools: 0,
      status: "Ongoing",
      completion: 60
    },
    {
      title: "National Tournament Series",
      description: "Standardized tournament system across regions for talent identification",
      participants: 8000,
      schools: 200,
      status: "Active", 
      completion: 90
    }
  ];

  const regions = [
    { name: "NCR (National Capital Region)", events: 45, athletes: 3200, progress: 85 },
    { name: "Region III (Central Luzon)", events: 32, athletes: 2100, progress: 72 },
    { name: "Region IV-A (CALABARZON)", events: 38, athletes: 2800, progress: 78 },
    { name: "Region VII (Central Visayas)", events: 28, athletes: 1900, progress: 65 },
    { name: "Region XI (Davao Region)", events: 24, athletes: 1600, progress: 58 }
  ];

  const partnerAgencies = [
    {
      name: "Department of Education (DepEd)",
      type: "Government Agency",
      role: "School Sports Integration",
      projects: 15
    },
    {
      name: "Philippine Sports Commission",
      type: "Sports Authority",
      role: "National Sports Development",
      projects: 8
    },
    {
      name: "Local Government Units",
      type: "Municipal/Provincial",
      role: "Community Sports Programs",
      projects: 25
    },
    {
      name: "Philippine Olympic Committee",
      type: "Olympic Committee",
      role: "Elite Athlete Development",
      projects: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-secondary/10 relative">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-25 pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/src/assets/manila-tournament.jpg')`,
            filter: 'blur(2px) brightness(0.2)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-background/85 to-accent/40" />
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-primary/40 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-secondary/40 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-900 backdrop-blur-md border border-white/30 mb-8 animate-fade-in shadow-elegant">
              <Building className="w-5 h-5 text-white animate-pulse" />
              <span className="text-accent font-semibold">Government Portal</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-8 animate-fade-in text-accent drop-shadow-2xl">
              Government <span className="text-accent">Agencies</span>
            </h1>
            
            <p className="text-xl text-white mb-10 max-w-2xl mx-auto animate-fade-in leading-relaxed drop-shadow-lg">
              Comprehensive volleyball development platform for government agencies, educational institutions, 
              and sports authorities to manage programs and track national progress effectively.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="bg-blue-900 hover:bg-blue-800 backdrop-blur-md border border-white/30 text-white hover:text-white shadow-elegant hover-scale">
                <Shield className="w-4 h-4 mr-2" />
                Agency Access
              </Button>
              <Button variant="outline" size="lg" className="hover-scale border-white/30 bg-blue-900 hover:bg-blue-800 backdrop-blur-md text-white hover:text-white">
                <FileText className="w-4 h-4 mr-2" />
                View Reports
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Stats */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {agencyStats.map((stat, index) => (
              <Card key={index} className="group hover-scale bg-white/80 backdrop-blur-md border-white/40 hover:border-primary/50 transition-all duration-500 hover:shadow-glow">
                <CardContent className="p-8 text-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                    <stat.icon className={`relative w-12 h-12 ${stat.color} mx-auto mb-4 group-hover:scale-125 transition-transform duration-500`} />
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 relative">
        {/* Content Background */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-3xl mx-4" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* National Programs */}
            <Card className="bg-gradient-to-br from-card via-card to-secondary/5 border-primary/10 hover:shadow-glow transition-all duration-500">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  National Volleyball Programs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {programs.map((program, index) => (
                    <div key={index} className="group border border-primary/20 rounded-xl p-6 bg-gradient-to-r from-muted/20 to-transparent hover:from-primary/10 hover:to-secondary/10 transition-all duration-500 hover:shadow-elegant">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-bold text-lg group-hover:text-primary transition-colors mb-2">{program.title}</h3>
                          <Badge variant={program.status === 'Active' ? 'default' : 'secondary'} className="bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/30">
                            {program.status}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">{program.completion}%</div>
                          <div className="text-xs text-muted-foreground font-medium">Complete</div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">{program.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors">
                          <div className="p-2 bg-primary/20 rounded-lg">
                            <Users className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-sm font-medium">{program.participants.toLocaleString()} participants</span>
                        </div>
                        {program.schools > 0 && (
                          <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/5 group-hover:bg-secondary/10 transition-colors">
                            <div className="p-2 bg-secondary/20 rounded-lg">
                              <Building className="w-4 h-4 text-secondary" />
                            </div>
                            <span className="text-sm font-medium">{program.schools} schools involved</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="relative">
                        <Progress value={program.completion} className="h-3 bg-muted/50" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-sm" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Regional Progress */}
            <Card className="bg-gradient-to-br from-card via-card to-accent/5 border-primary/10 hover:shadow-glow transition-all duration-500">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  Regional Development Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {regions.map((region, index) => (
                    <div key={index} className="group border border-primary/20 rounded-xl p-5 bg-gradient-to-r from-muted/20 to-transparent hover:from-accent/10 hover:to-primary/5 transition-all duration-500 hover:shadow-elegant cursor-pointer">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold group-hover:text-primary transition-colors">{region.name}</h3>
                        <Badge variant="outline" className="bg-gradient-to-r from-accent/20 to-primary/20 border-accent/30 group-hover:scale-105 transition-transform">
                          {region.progress}% Complete
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="text-center p-3 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors">
                          <div className="text-xl font-bold text-primary group-hover:scale-110 transition-transform">{region.events}</div>
                          <div className="text-xs text-muted-foreground font-medium">Events Held</div>
                        </div>
                        <div className="text-center p-3 rounded-lg bg-secondary/5 group-hover:bg-secondary/10 transition-colors">
                          <div className="text-xl font-bold text-secondary group-hover:scale-110 transition-transform">{region.athletes.toLocaleString()}</div>
                          <div className="text-xs text-muted-foreground font-medium">Active Athletes</div>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <Progress value={region.progress} className="h-3 bg-muted/50" />
                        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-sm" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Partner Agencies */}
            <Card className="bg-gradient-to-br from-card to-primary/5 border-primary/10 hover:shadow-elegant transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg">
                    <Building className="w-5 h-5 text-primary" />
                  </div>
                  Partner Agencies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {partnerAgencies.map((agency, index) => (
                    <div key={index} className="group border border-primary/20 rounded-xl p-4 bg-gradient-to-r from-muted/20 to-transparent hover:from-primary/10 hover:to-secondary/5 transition-all duration-300 cursor-pointer">
                      <h4 className="font-bold text-sm mb-2 group-hover:text-primary transition-colors">{agency.name}</h4>
                      <Badge variant="outline" className="text-xs mb-3 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30 group-hover:scale-105 transition-transform">
                        {agency.type}
                      </Badge>
                      <p className="text-xs text-muted-foreground mb-3 group-hover:text-foreground transition-colors leading-relaxed">{agency.role}</p>
                      <div className="flex justify-between items-center p-2 bg-primary/5 rounded-lg group-hover:bg-primary/10 transition-colors">
                        <span className="text-xs text-muted-foreground font-medium">Projects:</span>
                        <span className="text-xs font-bold text-primary group-hover:scale-110 transition-transform">{agency.projects}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-to-br from-card to-secondary/5 border-primary/10 hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle>Agency Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" size="sm" className="w-full justify-start hover-scale bg-gradient-to-r hover:from-primary/10 hover:to-secondary/5 border-primary/20">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Generate Reports
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start hover-scale bg-gradient-to-r hover:from-secondary/10 hover:to-primary/5 border-primary/20">
                    <Users className="w-4 h-4 mr-2" />
                    Manage Athletes
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start hover-scale bg-gradient-to-r hover:from-accent/10 hover:to-primary/5 border-primary/20">
                    <Calendar className="w-4 h-4 mr-2" />
                    Approve Events
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start hover-scale bg-gradient-to-r hover:from-primary/10 hover:to-accent/5 border-primary/20">
                    <Award className="w-4 h-4 mr-2" />
                    Certifications
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Key Metrics */}
            <Card className="bg-gradient-to-br from-card to-accent/5 border-primary/10 hover:shadow-glow transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-lg">Key Performance Indicators</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  {[
                    { label: "Youth Participation", value: 78, color: "primary" },
                    { label: "Coach Training Coverage", value: 65, color: "secondary" }, 
                    { label: "Equipment Distribution", value: 52, color: "accent" },
                    { label: "Regional Integration", value: 71, color: "primary" }
                  ].map((metric, index) => (
                    <div key={index} className="group">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium group-hover:text-primary transition-colors">{metric.label}</span>
                        <span className="font-bold text-primary group-hover:scale-110 transition-transform">{metric.value}%</span>
                      </div>
                      <div className="relative">
                        <Progress value={metric.value} className="h-2.5 bg-muted/50 group-hover:h-3 transition-all duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  ))}
                </div>
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

export default Agencies;