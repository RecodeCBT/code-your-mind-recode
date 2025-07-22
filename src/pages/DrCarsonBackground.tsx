import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, GraduationCap, Stethoscope, Brain, Award, Dumbbell, Heart, Activity } from "lucide-react";

const DrCarsonBackground = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 mb-8 text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Dr. Christopher Carson BSc MBBS MRCGP ProfDipCBT</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The journey from medical practice to creating RECODE - A revolutionary approach to mental health treatment
            </p>
          </div>

          {/* Professional Photos Section */}
          <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/lovable-uploads/c1b46773-b5a8-41c8-a7a3-f0f16097d31d.png" 
                  alt="Dr. Christopher Carson" 
                  className="w-full h-auto transition-transform duration-300 hover:scale-105 object-cover" 
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/lovable-uploads/28c2c6b5-4d5b-4410-975c-19cb580468dc.png" 
                  alt="Dr. Christopher Carson Professional" 
                  className="w-full h-auto transition-transform duration-300 hover:scale-105 object-cover" 
                />
              </div>
            </div>

            {/* Background Content */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Stethoscope className="h-6 w-6 text-primary" />
                    Formation of RECODE
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Dr. Christopher Carson developed RECODE in response to significant inefficiencies he observed in public mental health services during his work as a General Practitioner. Through years of treating patients with anxiety, depression, and stress-related disorders, he recognized that traditional approaches often focused on symptom management rather than addressing the underlying mental patterns that drive psychological distress.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Drawing from his extensive medical training and specialized CBT qualifications, Dr. Carson created RECODE as a systematic method to identify and reprogram the automatic thought patterns and emotional responses that keep people stuck in cycles of mental health challenges. His approach treats the mind like software that can be debugged and optimized.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Brain className="h-6 w-6 text-primary" />
                    Success in General Practice
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Throughout his tenure in general practice, Dr. Carson consistently achieved remarkable success rates in treating mental health conditions. His evidence-based approach, combining traditional medical knowledge with innovative therapeutic techniques, helped hundreds of patients overcome anxiety, depression, and various psychological challenges.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    His unique methodology, which later evolved into RECODE, demonstrated that mental health conditions could be treated more effectively when approached as systematic patterns that could be identified, analyzed, and restructured - much like debugging and optimizing computer code.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Dumbbell className="h-6 w-6 text-primary" />
                    The Importance of "The Basics"
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Through his dual expertise as both a practicing medical doctor and certified Level 3 Personal Trainer, Dr. Carson emphasizes the critical importance of "the basics" in holistic mental health. His experience has shown that anything affecting your energy levels directly impacts your psychological wellbeing.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="flex items-start gap-3">
                      <Activity className="h-6 w-6 text-orange-500 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Exercise Habits</h4>
                        <p className="text-muted-foreground">Regular physical activity directly influences neurotransmitter production and mental clarity</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Heart className="h-6 w-6 text-purple-600 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Sleep Hygiene</h4>
                        <p className="text-muted-foreground">Quality sleep patterns are fundamental to emotional regulation and cognitive function</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Brain className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Nutritional Impacts</h4>
                        <p className="text-muted-foreground">Proper nutrition provides the biochemical foundation for stable mood and mental performance</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Award className="h-6 w-6 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Hydration Levels</h4>
                        <p className="text-muted-foreground">Adequate hydration is essential for optimal brain function and psychological resilience</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    This comprehensive understanding allows him to address mental health from both neurochemical and lifestyle perspectives, ensuring that therapy is supported by optimal physical foundations for lasting psychological change.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quote Section */}
          <Card className="p-8 text-center bg-gradient-to-r from-primary/10 via-orange-500/10 to-purple-600/10">
            <blockquote className="text-2xl italic mb-4">
              "Mental health patterns are like code - they can be pre-loaded in the human brain. With the right approach, we can update and optimize them for better outcomes."
            </blockquote>
            <cite className="text-lg text-muted-foreground">- Dr. Christopher Carson BSc MBBS MRCGP ProfDipCBT</cite>
          </Card>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Link to="/contact">
              <Button size="lg" className="text-lg px-8 py-3">
                Get Started with RECODE
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrCarsonBackground;