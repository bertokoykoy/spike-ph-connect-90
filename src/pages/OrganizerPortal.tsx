import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Trophy, Plus, BarChart3, Settings } from "lucide-react";

const OrganizerPortal = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center">
                <span className="text-white font-bold">🏆</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">Organizer Dashboard</h1>
                <p className="text-sm text-muted-foreground">Welcome back, Maria!</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="default" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Create Event
              </Button>
              <Button variant="outline" size="sm">Sign Out</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">15</div>
                  <div className="text-sm text-muted-foreground">Active Events</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">342</div>
                  <div className="text-sm text-muted-foreground">Total Participants</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-accent mb-1">8</div>
                  <div className="text-sm text-muted-foreground">This Month</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">4.9</div>
                  <div className="text-sm text-muted-foreground">Avg Rating</div>
                </CardContent>
              </Card>
            </div>

            {/* Active Events */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Your Active Events
                  </CardTitle>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Manila Championship 2024</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          March 15-17, 2024
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          48 teams registered
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge>Live</Badge>
                    <Button variant="outline" size="sm">Manage</Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Cebu Inter-School League</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          March 22, 2024
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          16 teams registered
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Upcoming</Badge>
                    <Button variant="outline" size="sm">Manage</Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Davao Beach Open</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          April 5-7, 2024
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          32 teams registered
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Draft</Badge>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm">New registration for Manila Championship</span>
                  <Badge variant="outline" className="text-xs">2 min ago</Badge>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm">Payment received for Cebu League</span>
                  <Badge variant="outline" className="text-xs">1 hour ago</Badge>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm">Event published: Davao Beach Open</span>
                  <Badge variant="outline" className="text-xs">3 hours ago</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <Card>
              <CardHeader>
                <CardTitle>Organization Profile</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="font-semibold mb-1">Philippine Volleyball League</h3>
                <p className="text-sm text-muted-foreground mb-4">Professional Tournament Organizer</p>
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
                <Button variant="default" size="sm" className="w-full justify-start">
                  <Plus className="w-4 h-4 mr-2" />
                  Create New Event
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Manage Teams
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Pro Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground space-y-2">
                  <p>💡 Events with early bird pricing get 40% more registrations</p>
                  <p>📱 Share your events on social media to increase visibility</p>
                  <p>🏆 Create exciting prizes to attract more participants</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizerPortal;