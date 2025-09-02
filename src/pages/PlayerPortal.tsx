import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Trophy, BookOpen, Users, Star, User } from "lucide-react";

const PlayerPortal = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-white font-bold">🏐</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">Player Dashboard</h1>
                <p className="text-sm text-muted-foreground">Welcome back, Juan!</p>
              </div>
            </div>
            <Button variant="outline" size="sm">Sign Out</Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">12</div>
                  <div className="text-sm text-muted-foreground">Events Joined</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">8</div>
                  <div className="text-sm text-muted-foreground">Training Completed</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-accent mb-1">4.8</div>
                  <div className="text-sm text-muted-foreground">Skill Rating</div>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Your Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Manila Championship</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          March 15, 2024
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          SM MOA Arena
                        </span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary">Registered</Badge>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Team Practice Session</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          March 12, 2024
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          Local Gym
                        </span>
                      </div>
                    </div>
                  </div>
                  <Badge>Confirmed</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Training Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Training Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Star className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Advanced Spiking</h3>
                      <div className="text-sm text-muted-foreground">75% Complete</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Continue</Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Team Strategy</h3>
                      <div className="text-sm text-muted-foreground">Not Started</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Start</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <Card>
              <CardHeader>
                <CardTitle>Your Profile</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Juan dela Cruz</h3>
                <p className="text-sm text-muted-foreground mb-4">Outside Hitter • Manila Eagles</p>
                <Button variant="outline" size="sm" className="w-full">
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Find Events
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Browse Training
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Find Teams
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerPortal;