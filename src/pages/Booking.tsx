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
            <h1 className="text-4xl font-bold mb-4">Book an appointment</h1>
          </div>

          <section className="py-16">
            <iframe
              src="https://recodecbt.setmore.com"
              title="Book an appointment – Setmore"
              loading="lazy"
              className="w-full min-h-[80vh] border-0 rounded-lg shadow-md"
              scrolling="yes"
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Booking;