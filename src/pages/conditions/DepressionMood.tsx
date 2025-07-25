import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Brain, Cloud, RefreshCw, AlertTriangle, CheckCircle, CreditCard, Sun } from "lucide-react";
import depressionCloudImage from "@/assets/depression-cloud.jpg";

const DepressionMood = () => {
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
            <h1 className="text-4xl font-bold mb-4">Depression & Low Mood</h1>
            <p className="text-xl text-muted-foreground">
              Breaking free from negative thought loops and behavioral patterns
            </p>
          </div>

          {/* Hero Image - Storm to Sunshine Analogy */}
          <div className="mb-12">
            <img 
              src={depressionCloudImage} 
              alt="Storm clouds clearing to reveal sunshine representing depression recovery" 
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <p className="text-center text-sm text-muted-foreground mt-2 italic">
              Depression is like storm clouds blocking the sun - RECODE helps clear the mental weather patterns
            </p>
          </div>

          {/* Background Psychology */}
          <Card className="p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Brain className="h-6 w-6 text-primary" />
                Understanding Depression Psychology
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg leading-relaxed">
                Depression involves complex changes in brain chemistry and neural pathways that affect mood, 
                thinking, and behavior. It's characterized by persistent negative thought patterns, reduced 
                activity in areas responsible for motivation and pleasure, and altered neurotransmitter function.
              </p>
              
              <p className="text-lg leading-relaxed">
                The condition often creates self-reinforcing cycles where negative thoughts lead to low mood, 
                which in turn generates more negative thinking. These "cognitive loops" become automatic, 
                running like persistent background programs that drain mental energy and distort perception.
              </p>

              <div className="bg-muted/50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <RefreshCw className="h-5 w-5 text-purple-500" />
                  The Depression Cycle
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-500 text-white text-sm flex items-center justify-center">1</div>
                    <span>Negative Thought → Low Mood</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-500 text-white text-sm flex items-center justify-center">2</div>
                    <span>Reduced Activity → Increased Isolation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-500 text-white text-sm flex items-center justify-center">3</div>
                    <span>Loss of Pleasure → Hopelessness</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-500 text-white text-sm flex items-center justify-center">4</div>
                    <span>Self-Criticism → Deeper Depression</span>
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
                  <h4 className="font-semibold mb-4 text-lg">Emotional Symptoms</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Cloud className="h-4 w-4 text-gray-500" />
                      Persistent sadness or emptiness
                    </li>
                    <li className="flex items-center gap-2">
                      <Cloud className="h-4 w-4 text-gray-500" />
                      Loss of interest in activities
                    </li>
                    <li className="flex items-center gap-2">
                      <Cloud className="h-4 w-4 text-gray-500" />
                      Feelings of hopelessness
                    </li>
                    <li className="flex items-center gap-2">
                      <Cloud className="h-4 w-4 text-gray-500" />
                      Guilt or worthlessness
                    </li>
                    <li className="flex items-center gap-2">
                      <Cloud className="h-4 w-4 text-gray-500" />
                      Irritability or mood swings
                    </li>
                    <li className="flex items-center gap-2">
                      <Cloud className="h-4 w-4 text-gray-500" />
                      Emotional numbness
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-4 text-lg">Physical & Behavioral Symptoms</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-blue-500" />
                      Fatigue or low energy
                    </li>
                    <li className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-blue-500" />
                      Sleep disturbances
                    </li>
                    <li className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-blue-500" />
                      Changes in appetite
                    </li>
                    <li className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-blue-500" />
                      Difficulty concentrating
                    </li>
                    <li className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-blue-500" />
                      Social withdrawal
                    </li>
                    <li className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-blue-500" />
                      Reduced self-care
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cognitive Distortions */}
          <Card className="p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <RefreshCw className="h-6 w-6 text-purple-500" />
                Common Thought Patterns in Depression
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
                    <h5 className="font-semibold text-red-700 dark:text-red-300 mb-2">All-or-Nothing Thinking</h5>
                    <p className="text-sm text-red-600 dark:text-red-400">"If I'm not perfect, I'm a complete failure"</p>
                  </div>
                  <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                    <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Mental Filter</h5>
                    <p className="text-sm text-orange-600 dark:text-orange-400">Focusing only on negative details while ignoring positives</p>
                  </div>
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                    <h5 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Personalization</h5>
                    <p className="text-sm text-yellow-600 dark:text-yellow-400">Blaming yourself for things outside your control</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Catastrophizing</h5>
                    <p className="text-sm text-blue-600 dark:text-blue-400">Expecting the worst possible outcome</p>
                  </div>
                  <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                    <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Mind Reading</h5>
                    <p className="text-sm text-purple-600 dark:text-purple-400">Assuming you know what others think (usually negative)</p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-950/20 rounded-lg">
                    <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Should Statements</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Harsh self-criticism with unrealistic expectations</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* RECODE Treatment Approach */}
          <Card className="p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-500" />
                How RECODE Addresses Depression
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg leading-relaxed">
                RECODE approaches depression as a collection of maladaptive mental programs that can be 
                identified, debugged, and rewritten. We systematically target the negative thought loops 
                and behavioral patterns that maintain depressive episodes.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 mb-2">REVEAL</div>
                  <p className="text-sm">Identify negative thought patterns and behavioral triggers</p>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-2">EVALUATE</div>
                  <p className="text-sm">Examine the evidence for and against depressive thoughts</p>
                </div>
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">CHALLENGE</div>
                  <p className="text-sm">Reframe negative interpretations with balanced perspectives</p>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-green-700 dark:text-green-300">Key RECODE Interventions for Depression:</h4>
                <ul className="space-y-2 text-green-600 dark:text-green-400">
                  <li>• Cognitive restructuring to challenge distorted thinking</li>
                  <li>• Behavioral activation to increase pleasurable activities</li>
                  <li>• Mindfulness training to break rumination cycles</li>
                  <li>• Goal-setting and achievement tracking for motivation</li>
                  <li>• Social connection and support system building</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Booking Form */}
          <Card className="p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-center mb-4">Book Your Depression & Mood Session</CardTitle>
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
                      <Label htmlFor="duration">How long have you been experiencing low mood? (weeks/months)</Label>
                      <Input id="duration" placeholder="6 months" />
                    </div>
                    <div>
                      <Label htmlFor="message">Tell us about your current mood and energy levels</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Describe your daily mood patterns, energy levels, motivation challenges, etc."
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
                      <span>Depression & Mood Session</span>
                      <span className="font-bold">£249</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>Duration</span>
                      <span>90 minutes</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>Includes</span>
                      <span>Mood tracking tools</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center font-bold text-lg">
                        <span>Total</span>
                        <span>£249</span>
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
                      <Sun className="h-4 w-4 text-yellow-500" />
                      What to Expect
                    </h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Comprehensive mood assessment</li>
                      <li>• Personalized RECODE plan</li>
                      <li>• Cognitive restructuring techniques</li>
                      <li>• Behavioral activation strategies</li>
                      <li>• Mood tracking and monitoring tools</li>
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

export default DepressionMood;