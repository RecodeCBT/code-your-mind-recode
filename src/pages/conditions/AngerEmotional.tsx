import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Brain, Zap, Shield, AlertTriangle, CheckCircle, CreditCard, Flame } from "lucide-react";
import angerVolcanoImage from "@/assets/anger-volcano.jpg";

const AngerEmotional = () => {
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
            <h1 className="text-4xl font-bold mb-4">Anger & Emotional Dysregulation</h1>
            <p className="text-xl text-muted-foreground">
              Mastering emotional triggers and developing healthy response patterns for intense feelings
            </p>
          </div>

          {/* Hero Image - Volcano Analogy */}
          <div className="mb-12">
            <img 
              src={angerVolcanoImage} 
              alt="Volcano transforming to calm water representing anger management" 
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <p className="text-center text-sm text-muted-foreground mt-2 italic">
              Anger is like a volcano - explosive emotions that can be channeled into calm, flowing responses
            </p>
          </div>

          {/* Background Psychology */}
          <Card className="p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Brain className="h-6 w-6 text-primary" />
                Understanding Anger Psychology
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg leading-relaxed">
                Anger is a normal emotional response designed to protect us from threats and injustices. 
                However, when anger becomes dysregulated, it indicates that the brain's emotional processing 
                systems have become hypersensitive, often due to underlying stress, unmet needs, or learned patterns.
              </p>
              
              <p className="text-lg leading-relaxed">
                The amygdala triggers the anger response faster than the prefrontal cortex can process rational 
                thoughts, leading to "emotional hijacking." This creates automatic anger scripts that activate 
                before conscious control can intervene, resulting in reactions that often don't match the situation.
              </p>

              <div className="bg-muted/50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-red-500" />
                  The Anger Escalation Cycle
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500 text-white text-sm flex items-center justify-center">1</div>
                    <span>Trigger Event → Threat Interpretation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500 text-white text-sm flex items-center justify-center">2</div>
                    <span>Physical Arousal → Fight Response</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500 text-white text-sm flex items-center justify-center">3</div>
                    <span>Aggressive Behavior → Temporary Relief</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500 text-white text-sm flex items-center justify-center">4</div>
                    <span>Guilt/Regret → Increased Sensitivity</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Types of Anger */}
          <Card className="p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Shield className="h-6 w-6 text-orange-500" />
                Understanding Different Types of Anger
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
                    <h5 className="font-semibold text-red-700 dark:text-red-300 mb-2">Reactive Anger</h5>
                    <p className="text-sm text-red-600 dark:text-red-400">Immediate explosive responses to perceived threats or frustrations</p>
                  </div>
                  <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                    <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Passive Anger</h5>
                    <p className="text-sm text-orange-600 dark:text-orange-400">Indirect expression through sarcasm, silence, or withdrawal</p>
                  </div>
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                    <h5 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Chronic Irritability</h5>
                    <p className="text-sm text-yellow-600 dark:text-yellow-400">Persistent low-level anger affecting daily interactions</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Self-Directed Anger</h5>
                    <p className="text-sm text-blue-600 dark:text-blue-400">Harsh self-criticism and internal rage</p>
                  </div>
                  <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                    <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Defensive Anger</h5>
                    <p className="text-sm text-purple-600 dark:text-purple-400">Anger as protection against vulnerability or shame</p>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">Constructive Anger</h5>
                    <p className="text-sm text-green-600 dark:text-green-400">Healthy anger that motivates positive change</p>
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
                Signs of Emotional Dysregulation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 text-lg">Physical Symptoms</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-red-500" />
                      Rapid heart rate and blood pressure spikes
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-red-500" />
                      Muscle tension and clenched jaw
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-red-500" />
                      Hot flashes or feeling flushed
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-red-500" />
                      Headaches and stomach issues
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-red-500" />
                      Sleep disturbances
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-red-500" />
                      Trembling or shaking
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-4 text-lg">Behavioral & Emotional Signs</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-blue-500" />
                      Verbal outbursts or yelling
                    </li>
                    <li className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-blue-500" />
                      Physical aggression or throwing objects
                    </li>
                    <li className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-blue-500" />
                      Social withdrawal after anger episodes
                    </li>
                    <li className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-blue-500" />
                      Difficulty concentrating when upset
                    </li>
                    <li className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-blue-500" />
                      Ruminating on triggers
                    </li>
                    <li className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-blue-500" />
                      Relationship conflicts and damage
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Common Triggers */}
          <Card className="p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Common Anger Triggers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg text-center">
                  <h5 className="font-semibold text-red-700 dark:text-red-300 mb-2">Injustice</h5>
                  <p className="text-sm text-red-600 dark:text-red-400">Perceived unfairness or violations of expectations</p>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg text-center">
                  <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Frustration</h5>
                  <p className="text-sm text-orange-600 dark:text-orange-400">Blocked goals or repeated obstacles</p>
                </div>
                <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg text-center">
                  <h5 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Feeling Misunderstood</h5>
                  <p className="text-sm text-yellow-600 dark:text-yellow-400">Not being heard or validated</p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg text-center">
                  <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Overwhelm</h5>
                  <p className="text-sm text-blue-600 dark:text-blue-400">Too much stress or pressure</p>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg text-center">
                  <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Vulnerability</h5>
                  <p className="text-sm text-purple-600 dark:text-purple-400">Feeling exposed or threatened</p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg text-center">
                  <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">Fatigue</h5>
                  <p className="text-sm text-green-600 dark:text-green-400">Physical or emotional exhaustion</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* RECODE Treatment Approach */}
          <Card className="p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-500" />
                How RECODE Addresses Anger & Emotional Dysregulation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg leading-relaxed">
                RECODE approaches anger as an overactive emotional security system that needs recalibration. 
                We identify the specific triggers and automatic responses, then systematically reprogram 
                healthier emotional processing patterns.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 mb-2">REVEAL</div>
                  <p className="text-sm">Identify anger triggers and escalation patterns</p>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-2">EVALUATE</div>
                  <p className="text-sm">Assess underlying needs and threat interpretations</p>
                </div>
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">CHALLENGE</div>
                  <p className="text-sm">Reframe situations and develop balanced perspectives</p>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-green-700 dark:text-green-300">Key RECODE Interventions for Anger:</h4>
                <ul className="space-y-2 text-green-600 dark:text-green-400">
                  <li>• Trigger identification and early warning system development</li>
                  <li>• Physiological regulation techniques (breathing, grounding)</li>
                  <li>• Cognitive restructuring for threat assessment</li>
                  <li>• Communication skills for expressing needs effectively</li>
                  <li>• Stress management and lifestyle optimization</li>
                  <li>• Healthy boundaries and assertiveness training</li>
                </ul>
              </div>
              
              <p className="text-lg leading-relaxed">
                ...read more
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AngerEmotional;