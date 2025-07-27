import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, GraduationCap, Stethoscope, Brain, Award, Dumbbell, Heart, Activity } from "lucide-react";
import Navigation from "@/components/Navigation";

const DrCarsonBackground = () => {
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
            <h1 className="mb-2 text-4xl font-bold">Dr. Christopher Carson</h1>
            <p className="text-sm italic text-muted-foreground mb-4">BSc MBBS MRCGP ProfDipCBT</p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The journey from medical practice to creating RECODE - A revolutionary approach to mental health treatment
            </p>
          </div>

          {/* Professional Introduction Section */}
          <Card className="p-8 mb-12 border-2 border-primary/20 bg-gradient-to-r from-background via-muted/10 to-primary/5">
            <div className="grid lg:grid-cols-4 gap-8 items-center">
              <div className="lg:col-span-1 flex flex-col items-center space-y-4">
                <div className="relative overflow-hidden rounded-lg shadow-lg border-2 border-muted/30">
                  <img 
                    src="/lovable-uploads/c1b46773-b5a8-41c8-a7a3-f0f16097d31d.png" 
                    alt="Dr. Christopher Carson" 
                    className="w-48 h-64 object-cover transition-transform duration-300 hover:scale-105" 
                  />
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-lg border-2 border-muted/30">
                  <img 
                    src="/lovable-uploads/28c2c6b5-4d5b-4410-975c-19cb580468dc.png" 
                    alt="Dr. Christopher Carson Professional" 
                    className="w-48 h-64 object-cover transition-transform duration-300 hover:scale-105" 
                  />
                </div>
              </div>
              
              <div className="lg:col-span-3">
                <CardHeader className="pb-6">
                  <CardTitle className="text-3xl flex items-center gap-3">
                    <GraduationCap className="h-8 w-8 text-primary" />
                    Professional Background
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-base leading-relaxed">
                  <p>
                    Dr. Christopher Carson's journey in healthcare began with his <strong>BSc (Hons) in Biomedical Sciences</strong>, where he excelled particularly in neuroscience and neuropsychopharmacology. This foundational understanding of the brain's mechanisms would prove instrumental in his later therapeutic innovations.
                  </p>
                  
                  <p>
                    His passion for holistic health led him to achieve <strong>Level 3 Personal Training certification</strong>, recognizing the vital connection between physical fitness and mental wellbeing. This expertise allows him to address mental health from both neurochemical and lifestyle perspectives, understanding how exercise, nutrition, and physical health directly impact psychological resilience.
                  </p>
                  
                  <p>
                    Dr. Carson then pursued his medical training at the <strong>University of East Anglia</strong>, where he achieved his <strong>MBBS</strong> and qualified as a doctor. Following this, he completed his <strong>MRCGP in Belfast</strong>, granting him specialist training registration as a General Practitioner.
                  </p>
                  
                  <p>
                    Throughout his practice across <strong>Northern Ireland and London</strong>, Dr. Carson gained a deep passion for treating mental health conditions, while simultaneously developing frustration with the slow pace and inefficiencies of the overburdened NHS services. This experience highlighted the urgent need for more effective, streamlined approaches to mental healthcare.
                  </p>
                  
                  <p>
                    His commitment to excellence in mental health treatment led him to complete an <strong>accredited postgraduate diploma in Cognitive Behavioural Therapy</strong>, solidifying his interest and providing him with the final piece needed to consolidate his learning and form a revolutionary new approach to managing mental health through <strong>RECODE</strong>.
                  </p>
                </CardContent>
              </div>
            </div>
          </Card>

          {/* RECODE Methodology Section */}
          <div className="space-y-8 mb-16">
            <Card className="p-8 border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <div className="flex items-center gap-3">
                    <img 
                      src="/lovable-uploads/0ae4333b-2ae9-4aa3-803f-ed93b3dc6e41.png" 
                      alt="RECODE Logo" 
                      className="w-8 h-8 object-contain" 
                    />
                    <span>The RECODE Approach</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Dr. Carson developed RECODE as a systematic method to identify and reprogram the automatic thought patterns and emotional responses that keep people stuck in cycles of mental health challenges. His approach treats the mind like software that can be debugged and optimized, drawing from his comprehensive medical training and specialized CBT qualifications.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Through years of treating patients with anxiety, depression, and stress-related disorders, he recognized that traditional approaches often focused on symptom management rather than addressing the underlying mental patterns that drive psychological distress. RECODE represents a paradigm shift towards understanding and restructuring these fundamental patterns.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Stethoscope className="h-6 w-6 text-primary" />
                  Clinical Success & Innovation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Throughout his tenure in general practice, Dr. Carson consistently achieved remarkable success rates in treating mental health conditions. His evidence-based approach, combining traditional medical knowledge with innovative therapeutic techniques, helped hundreds of patients overcome anxiety, depression, and various psychological challenges.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  His unique methodology demonstrated that mental health conditions could be treated more effectively when approached with systematic understanding of thought patterns - much like debugging and optimizing computer code. Through structure and repetition, the brain can rewrite these patterns, similar to learning an instrument or language.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-primary/20">
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

          {/* Quote Section */}
          <Card className="p-8 text-center bg-gradient-to-r from-primary/10 via-orange-500/10 to-purple-600/10 border-2 border-primary/20">
            <blockquote className="text-2xl italic mb-4">"Mental health patterns are like code - they can be pre-loaded in the human brain or they can develop. With the right approach, we can reveal this code, update and re-write them for better outcomes."</blockquote>
            <cite className="text-lg text-muted-foreground">
              - Dr. Christopher Carson<br/>
              <span className="text-sm italic">BSc MBBS MRCGP ProfDipCBT</span>
            </cite>
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