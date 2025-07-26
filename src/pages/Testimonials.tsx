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

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Client Testimonials</h1>
            <p className="text-xl text-muted-foreground">
              Real experiences from clients who have transformed their lives with RECODE
            </p>
          </div>

          {/* Top Testimonials */}
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <User className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.condition}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add Your Testimonial Section */}
          <Card className="p-8">
            <CardHeader>
              <CardTitle className="text-2xl mb-4 text-center">Share Your Experience</CardTitle>
              <CardDescription className="text-center text-lg">
                Help others by sharing your RECODE journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Enter your name (or initials)"
                      disabled
                      className="bg-muted/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="condition">Condition Treated</Label>
                    <Input 
                      id="condition" 
                      placeholder="e.g., Anxiety, Depression, Procrastination"
                      disabled
                      className="bg-muted/50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rating">Rating</Label>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className="h-6 w-6 text-gray-300 cursor-not-allowed"
                      />
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="testimonial">Your Testimonial</Label>
                  <Textarea 
                    id="testimonial"
                    placeholder="Share your experience with RECODE..."
                    rows={6}
                    disabled
                    className="bg-muted/50"
                  />
                </div>
                <div className="text-center">
                  <Button disabled className="w-full md:w-auto">
                    Submit Testimonial (Coming Soon)
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">
                    Testimonial submission will be available soon via secure form
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;