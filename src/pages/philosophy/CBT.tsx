import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Target, Brain, CheckCircle, AlertTriangle } from "lucide-react";
import Navigation from "@/components/Navigation";

const CBT = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/what-is-recode" className="inline-flex items-center gap-2 mb-8 text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Back to RECODE Philosophy
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Cognitive Behavioral Therapy (CBT)</h1>
            <p className="text-xl text-muted-foreground">
              Understanding how thoughts, feelings, and behaviors are interconnected
            </p>
          </div>

          {/* What is CBT */}
          <Card className="p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Target className="h-6 w-6 text-primary" />
                What is CBT?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg leading-relaxed">
                Cognitive Behavioral Therapy (CBT) is a structured, goal-oriented form of psychotherapy 
                that focuses on identifying and changing negative thought patterns and behaviors. It's 
                based on the principle that our thoughts, feelings, and behaviors are all interconnected.
              </p>
              
              <p className="text-lg leading-relaxed">
                CBT helps you recognize distorted thinking patterns, challenge unhelpful beliefs, and 
                develop more balanced and realistic ways of thinking about yourself and your circumstances.
              </p>
            </CardContent>
          </Card>

          {/* Core Principles */}
          <Card className="p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Brain className="h-6 w-6 text-orange-500" />
                Core Principles of CBT
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">The Cognitive Triangle</h4>
                  <p className="text-muted-foreground">
                    Thoughts, feelings, and behaviors influence each other. Changing one can positively 
                    impact the others.
                  </p>
                </div>
                
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Present-Focused</h4>
                  <p className="text-muted-foreground">
                    CBT focuses on current problems and practical solutions rather than dwelling on the past.
                  </p>
                </div>
                
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Collaborative</h4>
                  <p className="text-muted-foreground">
                    The therapeutic relationship is a partnership where both therapist and client work 
                    together toward goals.
                  </p>
                </div>
                
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Evidence-Based</h4>
                  <p className="text-muted-foreground">
                    CBT techniques are supported by extensive research and proven to be effective for 
                    many mental health conditions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Common Techniques */}
          <Card className="p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-500" />
                Common CBT Techniques
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Thought Records</h5>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      Identifying and examining automatic thoughts and their impact on emotions
                    </p>
                  </div>
                  
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">Behavioral Experiments</h5>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Testing beliefs through real-world experiences and observations
                    </p>
                  </div>
                  
                  <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                    <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Activity Scheduling</h5>
                    <p className="text-sm text-purple-600 dark:text-purple-400">
                      Planning meaningful activities to improve mood and motivation
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                    <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Cognitive Restructuring</h5>
                    <p className="text-sm text-orange-600 dark:text-orange-400">
                      Challenging and replacing negative thought patterns with balanced alternatives
                    </p>
                  </div>
                  
                  <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
                    <h5 className="font-semibold text-red-700 dark:text-red-300 mb-2">Exposure Therapy</h5>
                    <p className="text-sm text-red-600 dark:text-red-400">
                      Gradually facing feared situations to reduce anxiety and avoidance
                    </p>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                    <h5 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Problem-Solving</h5>
                    <p className="text-sm text-yellow-600 dark:text-yellow-400">
                      Developing structured approaches to tackle life challenges
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cognitive Distortions */}
          <Card className="p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-orange-500" />
                Common Cognitive Distortions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed mb-6">
                  CBT helps identify these common thinking errors that can contribute to emotional distress:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h5 className="font-semibold mb-2">All-or-Nothing Thinking</h5>
                    <p className="text-sm text-muted-foreground">
                      Sometimes called "black and white thinking" - seeing things in extremes without recognizing middle ground. "If I'm not perfect, I have failed."
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h5 className="font-semibold mb-2">Over-generalising</h5>
                    <p className="text-sm text-muted-foreground">
                      Seeing a pattern based upon a single event, or being overly broad in the conclusions we draw. "Everything is always going wrong."
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h5 className="font-semibold mb-2">Mental Filter</h5>
                    <p className="text-sm text-muted-foreground">
                      Only paying attention to certain types of evidence, noticing our failures but not seeing our successes.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h5 className="font-semibold mb-2">Disqualifying the Positive</h5>
                    <p className="text-sm text-muted-foreground">
                      Discounting the good things that have happened or that you have done for some reason or another. "That doesn't count."
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h5 className="font-semibold mb-2">Jumping to Conclusions</h5>
                    <p className="text-sm text-muted-foreground">
                      Two key types: Mind reading (imagining we know what others are thinking) and Fortune telling (predicting the future).
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h5 className="font-semibold mb-2">Magnification & Minimisation</h5>
                    <p className="text-sm text-muted-foreground">
                      Blowing things out of proportion (catastrophising), or inappropriately shrinking something to make it seem less important.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h5 className="font-semibold mb-2">Emotional Reasoning</h5>
                    <p className="text-sm text-muted-foreground">
                      Assuming that because we feel a certain way that what we think must be true. "I feel embarrassed so I must be an idiot."
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h5 className="font-semibold mb-2">Should Statements</h5>
                    <p className="text-sm text-muted-foreground">
                      Using critical words like 'should,' 'must,' or 'ought' can make us feel guilty, or like we have already failed. This often leads to frustration.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h5 className="font-semibold mb-2">Labelling</h5>
                    <p className="text-sm text-muted-foreground">
                      Assigning labels to ourselves or other people. "I'm a loser," "I'm completely useless," "They're such an idiot."
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h5 className="font-semibold mb-2">Personalisation</h5>
                    <p className="text-sm text-muted-foreground">
                      Blaming yourself or taking responsibility for something that wasn't completely your fault. Conversely, blaming other people for something that was your fault.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Applications */}
          <Card className="p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Applications in RECODE</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg leading-relaxed">
                In RECODE sessions, CBT principles are applied systematically to help you:
              </p>
              
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Identify automatic thoughts that trigger emotional distress</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Challenge negative beliefs with evidence-based questioning</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Develop balanced, realistic thought patterns</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Create behavioral changes that support emotional well-being</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Build problem-solving skills for future challenges</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CBT;