import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, User, Calendar } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [userType, setUserType] = useState<"player" | "organizer" | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Sample login - redirects to appropriate portal
    if (email && password) {
      if (userType === "player") {
        navigate("/player-portal");
      } else if (userType === "organizer") {
        navigate("/organizer-portal");
      }
    }
  };

  const handleDemoLogin = (role: "player" | "organizer") => {
    // Quick demo access without credentials
    if (role === "player") {
      navigate("/player-portal");
    } else {
      navigate("/organizer-portal");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back to Home */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <Card className="shadow-card">
          <CardHeader className="text-center pb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">🏐</span>
            </div>
            <CardTitle className="text-2xl">Welcome to Spike PH Connect</CardTitle>
            <p className="text-muted-foreground">Sign in to access your volleyball community</p>
          </CardHeader>

          <CardContent className="space-y-6">
            {!userType ? (
              <>
                <div className="text-center mb-6">
                  <h3 className="font-semibold mb-2">Choose Your Role</h3>
                  <p className="text-sm text-muted-foreground">Select how you'd like to use the platform</p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <Button
                    variant="outline"
                    className="h-auto p-6 justify-start"
                    onClick={() => setUserType("player")}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-left">
                        <div className="font-semibold">Volleyball Player</div>
                        <div className="text-sm text-muted-foreground">Find events, improve skills, join teams</div>
                      </div>
                    </div>
                  </Button>

                  <Button
                    variant="outline"
                    className="h-auto p-6 justify-start"
                    onClick={() => setUserType("organizer")}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-secondary" />
                      </div>
                      <div className="text-left">
                        <div className="font-semibold">Event Organizer</div>
                        <div className="text-sm text-muted-foreground">Create tournaments, manage events</div>
                      </div>
                    </div>
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div className="text-center mb-6">
                  <h3 className="font-semibold mb-2">
                    Sign In as {userType === "player" ? "Player" : "Organizer"}
                  </h3>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setUserType(null)}
                    className="text-muted-foreground"
                  >
                    Change role
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input 
                      id="password" 
                      type="password" 
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={handleLogin}
                  disabled={!email || !password}
                >
                  Sign In
                </Button>

                <Separator />

                <div className="text-center space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Try a demo account
                  </p>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-full"
                    onClick={() => handleDemoLogin(userType!)}
                  >
                    Demo {userType === "player" ? "Player" : "Organizer"} Account
                  </Button>
                </div>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <Button variant="link" className="p-0 h-auto">
                      Sign up here
                    </Button>
                  </p>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;