import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import { ArrowLeft, Star, User } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      condition: "Anxiety & Panic",
      rating: 5,
      text: "Dr. Carson's RECODE method completely transformed how I understand and manage my anxiety. The neuroscience approach made everything click for me. I finally have tools that actually work.",
      date: "March 2024"
    },
    {
      name: "James R.",
      condition: "Depression & Low Mood",
      rating: 5,
      text: "After years of traditional therapy with limited results, RECODE gave me a fresh perspective. The way Dr. Carson explains thought patterns like code algorithms made so much sense. I feel like I have my life back.",
      date: "February 2024"
    },
    {
      name: "Emma K.",
      condition: "Procrastination & Avoidance",
      rating: 5,
      text: "The productivity algorithms and behavioral rewiring techniques were game-changing. I went from constant procrastination to actually enjoying challenging tasks. Dr. Carson's approach is revolutionary.",
      date: "January 2024"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 mb-8 text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Testimonials</h1>
          <p className="text-xl text-muted-foreground mb-8">
            This section is currently being updated
          </p>
          
          <Card className="p-12">
            <CardContent>
              <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
              <p className="text-muted-foreground text-lg">
                We're working on bringing you authentic client testimonials and experiences. 
                Please check back soon for updates.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;