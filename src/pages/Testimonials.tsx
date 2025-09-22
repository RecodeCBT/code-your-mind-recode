import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { ArrowLeft, Star, User, Quote, Award, TrendingUp } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maximilian",
      condition: "4 Session Package",
      rating: 5,
      text: "Working with Dr. Carson through CBT was really helpful. In just four sessions, he gave me different tools to deal with intrusive thoughts and rumination, which made a big difference. He talks about these 'autocodes' and how to disrupt them, and that's been a really practical way for me to manage my thoughts. He's super empathetic, but is also clearly very knowledgeable. I've already recommended him to others because I think he's a great resource, and I've learned so much from our sessions. It feels like everyone should know about their triggers, and know how to manage them.",
      date: "September 2025",
      featured: true
    },
    {
      name: "David C.",
      condition: "Initial Assessment & 4 Session Package",
      rating: 5,
      text: "I can't rate Dr. Carson's fantastic RecodeCBT highly enough. There's only a mere 5 star choice. If there were 7 he'd get them all. Are you crippled at times with a knot in your chest you can't unwind? Have you lost your appetite despite feeling hungrier than ever? Do you believe everything your mind tells you are truths? Are you sceptical about trying something new because you've never heard of it before? Then you sound just like me, before I tried my first session with Dr. Carson. For the first time I have had a coherent, and easy to understand explanation of how a mind works and how I have effectively trapped myself in a bit of a negative loop. I was amazed at how my own experiences/reactions in certain situations were coming through in Dr. Carson's explanations, before I'd even told him about them. The knowledge you take away from the initial session will hopefully be enough for you to begin questioning the rationale behind your reactions/thoughts - and from there the appetite for the solutions WILL increase, and so far I am STARVING for more of the insight into a mind I felt I was a slave to. I cannot wait for our next session.",
      date: "September 2025"
    },
    {
      name: "Origin Gymnastics",
      condition: "ReCODE Corporate Training Package",
      rating: 5,
      text: "We had the pleasure of welcoming Dr. Carson to Origin Gymnastics for our annual staff training day, where we chose the ReCODE corporate training package. The experience was outstanding. Dr. Carson delivered an engaging and insightful session on topics such as rewiring your brain to better serve you, with clear, practical applications that our team could immediately relate to and use in real life. The content was inspiring, well-delivered, and highly relevant to both personal and professional growth. We would highly recommend Dr. Carson to any organisation looking to motivate and empower their staff.",
      date: "September 2025"
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
        <Link to="/" className="inline-flex items-center gap-2 mb-8 text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
          <Button asChild size="lg" className="mb-4">
            <a href="https://recodecbt.setmore.com/#reviews" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3">
              <Award className="h-4 w-4" />
              Verified Reviews
            </a>
          </Button>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Client Success Stories
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover how RECODE has transformed lives through evidence-based cognitive behavioral therapy. 
              Real clients, real results, real transformation.
            </p>
          </div>

          
          {/* Testimonials Grid */}
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className={`group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  testimonial.featured ? 'ring-2 ring-primary/20 bg-gradient-to-br from-primary/5 to-transparent' : ''
                }`}
              >
                {testimonial.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      Latest
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                        <User className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {testimonial.name}
                        </CardTitle>
                        <CardDescription className="text-sm font-medium">
                          {testimonial.condition}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mt-3">
                    {renderStars(testimonial.rating)}
                    <span className="ml-2 text-sm text-muted-foreground">({testimonial.rating}/5)</span>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                    <blockquote className="text-muted-foreground leading-relaxed pl-6 relative">
                      {testimonial.text}
                    </blockquote>
                  </div>
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/50">
                    <p className="text-sm text-muted-foreground font-medium">{testimonial.date}</p>
                    <div className="h-2 w-2 rounded-full bg-primary/40"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 p-8 rounded-lg bg-gradient-to-r from-primary/5 via-transparent to-primary/5 border border-primary/10">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Life?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join hundreds of clients who have overcome anxiety, depression, and limiting beliefs with RECODE's proven approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="shadow-lg">
                <Link to="/services">Book Your Session</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="https://recodecbt.setmore.com/#reviews" target="_blank" rel="noopener noreferrer">
                  Leave a Review
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;