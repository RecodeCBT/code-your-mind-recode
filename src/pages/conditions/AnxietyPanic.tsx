import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Brain, Heart, Zap, AlertTriangle, CheckCircle, CreditCard, Mail, User, Phone } from "lucide-react";
import anxietyBrainImage from "@/assets/anxiety-brain.jpg";

const AnxietyPanic = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 mb-8 text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Anxiety & Panic Disorders</h1>
            <p className="text-xl text-muted-foreground">
              Understanding and overcoming the fear algorithms that control your responses
            </p>
          </div>

          {/* Hero Image - Brain Circuit Analogy */}
          <div className="mb-12">
            <img 
              src={anxietyBrainImage} 
              alt="Brain with neural pathways representing anxiety circuits" 
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <p className="text-center text-sm text-muted-foreground mt-2 italic">
              Think of anxiety like overactive electrical circuits in your brain - RECODE helps rewire these pathways for calm
            </p>
          </div>

          {/* Background Psychology */}
          <Card className="p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Brain className="h-6 w-6 text-primary" />
                Understanding the Psychology
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg leading-relaxed">
                Anxiety and panic disorders represent overactive threat-detection systems in the brain. Your amygdala, 
                the brain's alarm center, has become hypersensitive to perceived dangers, triggering fight-or-flight 
                responses even when no real threat exists.
              </p>
              
              <p className="text-lg leading-relaxed">
                These conditions often develop through a combination of genetic predisposition, learned behaviors, 
                and environmental triggers. The brain creates neural pathways that automatically activate anxiety 
                responses, forming what we call "fear algorithms" - automatic mental scripts that run without conscious control.
              </p>

              <div className="bg-muted/50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-orange-500" />
                  The Anxiety Cycle
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500 text-white text-sm flex items-center justify-center">1</div>
                    <span>Trigger Event → Catastrophic Thought</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500 text-white text-sm flex items-center justify-center">2</div>
                    <span>Physical Symptoms → Increased Fear</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500 text-white text-sm flex items-center justify-center">3</div>
                    <span>Avoidance Behavior → Reinforced Fear</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500 text-white text-sm flex items-center justify-center">4</div>
                    <span>Increased Sensitivity → More Triggers</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Symptoms Section */}
          <Card className="p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-orange-500" />
                Common Symptoms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 text-lg">Physical Symptoms</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-red-500" />
                      Rapid heartbeat or palpitations
                    </li>
                    <li className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-red-500" />
                      Shortness of breath or hyperventilation
                    </li>
                    <li className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-red-500" />
                      Sweating or trembling
                    </li>
                    <li className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-red-500" />
                      Nausea or stomach upset
                    </li>
                    <li className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-red-500" />
                      Dizziness or feeling faint
                    </li>
                    <li className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-red-500" />
                      Muscle tension or headaches
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-4 text-lg">Psychological Symptoms</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-blue-500" />
                      Persistent worry or fear
                    </li>
                    <li className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-blue-500" />
                      Racing thoughts or overthinking
                    </li>
                    <li className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-blue-500" />
                      Feeling of impending doom
                    </li>
                    <li className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-blue-500" />
                      Difficulty concentrating
                    </li>
                    <li className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-blue-500" />
                      Sleep disturbances
                    </li>
                    <li className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-blue-500" />
                      Avoidance of triggers
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* RECODE Treatment Approach */}
          <Card className="p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-500" />
                How RECODE Addresses Anxiety & Panic
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg leading-relaxed">
                RECODE treats anxiety and panic like malfunctioning software that needs debugging and updating. 
                We identify the specific fear algorithms running in your mind and systematically reprogram them 
                with healthier, more adaptive responses.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 mb-2">REVEAL</div>
                  <p className="text-sm">Identify your unique anxiety triggers and thought patterns</p>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-2">EVALUATE</div>
                  <p className="text-sm">Assess the accuracy and usefulness of anxious thoughts</p>
                </div>
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">CHALLENGE</div>
                  <p className="text-sm">Question catastrophic thinking and develop balanced perspectives</p>
                </div>
              </div>

              <p className="text-lg leading-relaxed">
                Through this systematic approach, we help you build new neural pathways for calm confidence, 
                teach you practical coping strategies, and gradually expose you to feared situations in a 
                controlled, supportive environment.
              </p>
            </CardContent>
          </Card>

          {/* Booking Form */}
          <Card className="p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-center mb-4">Book Your Anxiety & Panic Session</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Contact Form */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Session Information</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+44 123 456 7890" />
                    </div>
                    <div>
                      <Label htmlFor="severity">How would you rate your anxiety level? (1-10)</Label>
                      <Input id="severity" type="number" min="1" max="10" placeholder="7" />
                    </div>
                    <div>
                      <Label htmlFor="message">Tell us about your specific anxiety triggers</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Describe situations that trigger your anxiety, frequency of panic attacks, etc."
                        rows={4}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Replace this form with your FormSpree action URL when ready.
                    </p>
                  </form>
                </div>

                {/* Payment Section */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Session Details & Payment</h3>
                  <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Anxiety & Panic Session</span>
                      <span className="font-bold">£199</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>Duration</span>
                      <span>90 minutes</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>Includes</span>
                      <span>Follow-up materials</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center font-bold text-lg">
                        <span>Total</span>
                        <span>£199</span>
                      </div>
                    </div>
                    
                    <Button className="w-full" size="lg">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Pay with Stripe
                    </Button>
                    
                    <p className="text-xs text-muted-foreground text-center">
                      Secure payment processing by Stripe. You'll be redirected to complete your booking.
                    </p>
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Brain className="h-4 w-4 text-blue-500" />
                      What to Expect
                    </h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Comprehensive anxiety assessment</li>
                      <li>• Personalized RECODE strategy</li>
                      <li>• Immediate coping techniques</li>
                      <li>• Follow-up worksheet and exercises</li>
                      <li>• Secure video call session</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AnxietyPanic;