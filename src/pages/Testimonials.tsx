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
      name: "David C.",
      condition: "Initial Assessment & Intermediate Course",
      rating: 5,
      text: "I can't rate Dr. Carson's fantastic RecodeCBT highly enough. There's only a mere 5 star choice. If there were 7 he'd get them all. Are you crippled at times with a knot in your chest you can't unwind? Have you lost your appetite despite feeling hungrier than ever? Do you believe everything your mind tells you are truths? Are you sceptical about trying something new because you've never heard of it before? Then you sound just like me, before I tried my first session with Dr. Carson. For the first time I have had a coherent, and easy to understand explanation of how a mind works and how I have effectively trapped myself in a bit of a negative loop. I was amazed at how my own experiences/reactions in certain situations were coming through in Dr. Carson's explanations, before I'd even told him about them. The knowledge you take away from the initial session will hopefully be enough for you to begin questioning the rationale behind your reactions/thoughts - and from there the appetite for the solutions WILL increase, and so far I am STARVING for more of the insight into a mind I felt I was a slave to. I cannot wait for our next session.",
      date: "November 2024"
    },
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
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Client Testimonials</h1>
            <p className="text-xl text-muted-foreground">
              Real experiences from clients who have transformed their lives with RECODE
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <CardDescription className="text-sm">{testimonial.condition}</CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <blockquote className="text-muted-foreground italic mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                  <p className="text-sm text-muted-foreground font-medium">{testimonial.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;