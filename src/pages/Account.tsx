import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Calendar, 
  Brain, 
  Heart, 
  Zap, 
  Clock, 
  CreditCard,
  Settings,
  LogOut
} from "lucide-react";

const Account = () => {
  // Mock user data - replace with real data from authentication
  const user = {
    name: "John Doe",
    email: "john.doe@email.com",
    joinDate: "January 2024",
    sessionsCompleted: 5,
    nextSession: "Tomorrow at 2:00 PM"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">My Account</h1>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button variant="outline" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="" />
                  <AvatarFallback className="text-2xl">{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <CardTitle>{user.name}</CardTitle>
                <CardDescription>{user.email}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Member since {user.joinDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Brain className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{user.sessionsCompleted} sessions completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Next: {user.nextSession}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Session Types */}
            <Card>
              <CardHeader>
                <CardTitle>Session Types</CardTitle>
                <CardDescription>Choose the type of support that fits your needs</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg space-y-3">
                  <div className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-blue-500" />
                    <h3 className="font-semibold">Condition Specific</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Targeted courses for anxiety, depression, PTSD, and other specific conditions
                  </p>
                  <div className="space-y-2">
                    <Badge variant="outline">Anxiety Course - £199</Badge>
                    <Badge variant="outline">Depression Program - £249</Badge>
                    <Badge variant="outline">PTSD Therapy - £299</Badge>
                  </div>
                  <Button className="w-full" size="sm">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Purchase Course
                  </Button>
                </div>

                <div className="p-4 border rounded-lg space-y-3">
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-red-500" />
                    <h3 className="font-semibold">Emergency Drop-in</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Immediate support when you need it most
                  </p>
                  <div className="space-y-2">
                    <Badge variant="outline">Single Session - £89</Badge>
                    <Badge variant="outline">Priority Booking - £119</Badge>
                  </div>
                  <Button className="w-full" size="sm">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Book Emergency
                  </Button>
                </div>

                <div className="p-4 border rounded-lg space-y-3">
                  <div className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-green-500" />
                    <h3 className="font-semibold">Refresher Sessions</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Maintain your progress with regular check-ins
                  </p>
                  <div className="space-y-2">
                    <Badge variant="outline">Monthly Session - £69</Badge>
                    <Badge variant="outline">3-Session Pack - £189</Badge>
                  </div>
                  <Button className="w-full" size="sm">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Book Session
                  </CardTitle>
                  <CardDescription>Schedule your next therapy session</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/booking">
                    <Button className="w-full">
                      <Clock className="h-4 w-4 mr-2" />
                      View Available Times
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5" />
                    Progress Tracker
                  </CardTitle>
                  <CardDescription>Monitor your mental wellness journey</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    View Progress
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Brain className="h-4 w-4 text-primary" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Completed anxiety management session</p>
                      <p className="text-xs text-muted-foreground">2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Calendar className="h-4 w-4 text-primary" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Booked follow-up session</p>
                      <p className="text-xs text-muted-foreground">1 week ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;