import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Brain, Clock, Target, AlertTriangle, CheckCircle, CreditCard, Zap } from "lucide-react";
import procrastinationClockImage from "@/assets/procrastination-clock.jpg";

const ProcrastinationAvoidance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 mb-8 text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Top Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/services">
              <Button size="lg" className="text-lg px-8 py-3 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white shadow-lg">
                Start Your Journey
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Procrastination & Avoidance</h1>
            <p className="text-xl text-muted-foreground">
              Debugging the mental scripts that cause task avoidance and implementing productivity algorithms
            </p>
          </div>

          {/* Hero Image - Clock Analogy */}
          <div className="mb-12">
            <img 
              src={procrastinationClockImage} 
              alt="Clock representing time and procrastination transformation to action" 
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <p className="text-center text-sm text-muted-foreground mt-2 italic">
              Procrastination is like time moving backwards - RECODE helps you move forward with purpose and action
            </p>
          </div>

          {/* Background Psychology */}
          <Card className="p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Brain className="h-6 w-6 text-primary" />
                Understanding Procrastination Psychology
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg leading-relaxed">
                Procrastination isn't about laziness or poor time management—it's a complex emotional regulation 
                strategy. Your brain has learned to avoid tasks that trigger negative emotions like anxiety, 
                perfectionism, or fear of failure by seeking immediate mood relief through distraction.
              </p>
              
              <p className="text-lg leading-relaxed">
                The prefrontal cortex, responsible for executive functions like planning and impulse control, 
                gets hijacked by the limbic system's emotional responses. This creates automatic avoidance 
                "scripts" that run whenever you encounter challenging or uncomfortable tasks.
              </p>

              <div className="bg-muted/50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-500" />
                  The Procrastination Cycle
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500 text-white text-sm flex items-center justify-center">1</div>
                    <span>Task Trigger → Negative Emotion</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500 text-white text-sm flex items-center justify-center">2</div>
                    <span>Avoidance Behavior → Temporary Relief</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500 text-white text-sm flex items-center justify-center">3</div>
                    <span>Guilt and Pressure → Increased Anxiety</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500 text-white text-sm flex items-center justify-center">4</div>
                    <span>Last-Minute Rush → Reinforced Pattern</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Types of Procrastination */}
          <Card className="p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Target className="h-6 w-6 text-orange-500" />
                Types of Procrastination
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
                    <h5 className="font-semibold text-red-700 dark:text-red-300 mb-2">Perfectionist Procrastination</h5>
                    <p className="text-sm text-red-600 dark:text-red-400">Fear of not meeting impossibly high standards</p>
                  </div>
                  <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                    <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Fear-Based Avoidance</h5>
                    <p className="text-sm text-orange-600 dark:text-orange-400">Avoiding tasks due to fear of failure or judgment</p>
                  </div>
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                    <h5 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Overwhelm Paralysis</h5>
                    <p className="text-sm text-yellow-600 dark:text-yellow-400">Feeling too overwhelmed to know where to start</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Instant Gratification</h5>
                    <p className="text-sm text-blue-600 dark:text-blue-400">Choosing immediate pleasure over long-term goals</p>
                  </div>
                  <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                    <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Rebellion Procrastination</h5>
                    <p className="text-sm text-purple-600 dark:text-purple-400">Avoiding tasks as a form of passive resistance</p>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">Decision Fatigue</h5>
                    <p className="text-sm text-green-600 dark:text-green-400">Avoiding decisions due to mental exhaustion</p>
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
                Common Signs & Symptoms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 text-lg">Behavioral Patterns</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-red-500" />
                      Chronic lateness or missed deadlines
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-red-500" />
                      Excessive planning without action
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-red-500" />
                      Doing easier tasks to avoid difficult ones
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-red-500" />
                      Digital distractions and time-wasting
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-red-500" />
                      Starting projects but not finishing
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-red-500" />
                      Making excuses or blaming external factors
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-4 text-lg">Emotional Impact</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-blue-500" />
                      Chronic guilt and self-criticism
                    </li>
                    <li className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-blue-500" />
                      Anxiety about unfinished tasks
                    </li>
                    <li className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-blue-500" />
                      Low self-esteem and confidence
                    </li>
                    <li className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-blue-500" />
                      Stress from last-minute pressure
                    </li>
                    <li className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-blue-500" />
                      Feeling overwhelmed or stuck
                    </li>
                    <li className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-blue-500" />
                      Shame about productivity levels
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
                How RECODE Addresses Procrastination
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg leading-relaxed">
                RECODE treats procrastination as faulty programming that can be systematically debugged and 
                optimized. We identify the specific emotional triggers and avoidance scripts, then implement 
                new productivity algorithms that work with your brain's natural patterns.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 mb-2">REVEAL</div>
                  <p className="text-sm">Identify procrastination triggers and avoidance patterns</p>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-2">EVALUATE</div>
                  <p className="text-sm">Assess the emotional costs and benefits of avoidance</p>
                </div>
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">CHALLENGE</div>
                  <p className="text-sm">Question perfectionist standards and fear-based thinking</p>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-green-700 dark:text-green-300">Key RECODE Strategies for Procrastination:</h4>
                <ul className="space-y-2 text-green-600 dark:text-green-400">
                  <li>• Task breakdown and micro-progress tracking</li>
                  <li>• Emotional regulation techniques for task anxiety</li>
                  <li>• Implementation intentions and environmental design</li>
                  <li>• Perfectionism restructuring and "good enough" standards</li>
                  <li>• Reward systems and momentum building</li>
                  <li>• Time management algorithms tailored to your patterns</li>
                </ul>
              </div>
              
            </CardContent>
          </Card>

          {/* Bottom Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link to="/services">
              <Button size="lg" className="text-lg px-8 py-3 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white shadow-lg">
                Start Your Journey
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcrastinationAvoidance;