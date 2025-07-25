import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { ArrowLeft, Brain, Heart, Zap, AlertTriangle, RotateCcw } from "lucide-react";

const Booking = () => {
  const conditions = [
    {
      id: "anxiety-panic",
      title: "Anxiety & Panic Disorders",
      description: "Overcome fear algorithms and panic responses",
      icon: AlertTriangle,
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
      price: "£199"
    },
    {
      id: "depression-mood",
      title: "Depression & Low Mood",
      description: "Break negative thought cycles and rebuild motivation",
      icon: Brain,
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      price: "£249"
    },
    {
      id: "procrastination",
      title: "Procrastination & Avoidance",
      description: "Overcome paralysis and build productive habits",
      icon: RotateCcw,
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      price: "£179"
    },
    {
      id: "anger-emotional",
      title: "Anger & Emotional Dysregulation",
      description: "Master emotional responses and build self-control",
      icon: Zap,
      color: "text-red-500",
      bgColor: "bg-red-50 dark:bg-red-950/20",
      price: "£219"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 mb-8 text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Book Your Session</h1>
            <p className="text-xl text-muted-foreground">
              Choose the condition you'd like to work on with Dr. Carson's RECODE methodology
            </p>
          </div>

          {/* Conditions Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {conditions.map((condition) => {
              const IconComponent = condition.icon;
              return (
                <Link key={condition.id} to={`/conditions/${condition.id}`}>
                  <Card className={`h-full transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer ${condition.bgColor} border-2 hover:border-primary/20`}>
                    <CardHeader className="text-center pb-4">
                      <div className={`mx-auto mb-4 p-4 rounded-full w-16 h-16 flex items-center justify-center ${condition.bgColor}`}>
                        <IconComponent className={`h-8 w-8 ${condition.color}`} />
                      </div>
                      <CardTitle className="text-xl mb-2">{condition.title}</CardTitle>
                      <CardDescription className="text-base">{condition.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="text-2xl font-bold text-primary mb-4">{condition.price}</div>
                      <Button className="w-full" size="lg">
                        Learn More & Book
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          {/* General Information */}
          <Card className="p-8 text-center">
            <CardHeader>
              <CardTitle className="text-2xl mb-4">All Sessions Include</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="flex items-center gap-3">
                  <Brain className="h-6 w-6 text-primary" />
                  <span>Comprehensive assessment</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="h-6 w-6 text-primary" />
                  <span>Personalized RECODE plan</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-6 w-6 text-primary" />
                  <span>Follow-up resources</span>
                </div>
              </div>
              <p className="text-muted-foreground">
                Each session is tailored to your specific needs using Dr. Carson's evidence-based RECODE methodology.
                Sessions are conducted via secure video call and include personalized worksheets and follow-up materials.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Booking;