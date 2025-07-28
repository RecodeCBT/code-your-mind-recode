import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Lightbulb, Target, Trophy, TrendingUp, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";

const PerformancePsychology = () => {
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
            <h1 className="text-4xl font-bold mb-4">Performance Psychology</h1>
            <p className="text-xl text-muted-foreground">
              Optimizing mental frameworks for growth, confidence, and achievement
            </p>
          </div>

          {/* What is Performance Psychology */}
          <Card className="p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Lightbulb className="h-6 w-6 text-primary" />
                What is Performance Psychology?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg leading-relaxed">
                Performance psychology focuses on the mental skills and strategies that help individuals 
                achieve their best performance across various domains of life. Originally developed in 
                sports psychology, these principles apply equally well to academic, professional, 
                creative, and personal achievement.
              </p>
              
              <p className="text-lg leading-relaxed">
                Rather than just addressing problems, performance psychology emphasizes building strengths, 
                optimizing mental processes, and creating sustainable frameworks for excellence and growth.
              </p>
            </CardContent>
          </Card>

          {/* Core Principles */}
          <Card className="p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Target className="h-6 w-6 text-orange-500" />
                Core Principles of Performance Psychology
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Growth Mindset</h4>
                  <p className="text-muted-foreground">
                    Believing that abilities can be developed through effort, strategy, and learning from setbacks.
                  </p>
                </div>
                
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Process Focus</h4>
                  <p className="text-muted-foreground">
                    Concentrating on controllable actions and behaviors rather than just outcomes.
                  </p>
                </div>
                
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Mental Toughness</h4>
                  <p className="text-muted-foreground">
                    Building resilience, persistence, and emotional regulation under pressure.
                  </p>
                </div>
                
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Optimal Arousal</h4>
                  <p className="text-muted-foreground">
                    Finding the ideal balance of energy and focus for peak performance in any situation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mental Skills */}
          <Card className="p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Trophy className="h-6 w-6 text-green-500" />
                Key Mental Performance Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Goal Setting</h5>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      Creating SMART goals and breaking them down into actionable steps
                    </p>
                  </div>
                  
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">Concentration</h5>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Training attention and maintaining focus despite distractions
                    </p>
                  </div>
                  
                  <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                    <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Self-Talk</h5>
                    <p className="text-sm text-purple-600 dark:text-purple-400">
                      Developing positive, constructive internal dialogue
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                    <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Stress Management</h5>
                    <p className="text-sm text-orange-600 dark:text-orange-400">
                      Using pressure as energy while preventing overwhelm
                    </p>
                  </div>
                  
                  <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
                    <h5 className="font-semibold text-red-700 dark:text-red-300 mb-2">Resilience</h5>
                    <p className="text-sm text-red-600 dark:text-red-400">
                      Bouncing back from setbacks and learning from failures
                    </p>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                    <h5 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Flow States</h5>
                    <p className="text-sm text-yellow-600 dark:text-yellow-400">
                      Accessing optimal performance states where action feels effortless
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Performance Strategies */}
          <Card className="p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-purple-500" />
                Performance Enhancement Strategies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-4 text-lg">Pre-Performance Routines</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <h5 className="font-semibold mb-1">Mental Preparation</h5>
                      <p className="text-sm text-muted-foreground">
                        Visualization, positive self-talk, and focus cues
                      </p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <h5 className="font-semibold mb-1">Physical Preparation</h5>
                      <p className="text-sm text-muted-foreground">
                        Breathing exercises, progressive muscle relaxation, and activation
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-4 text-lg">During Performance</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <h5 className="font-semibold mb-1">Present Moment Focus</h5>
                      <p className="text-sm text-muted-foreground">
                        Staying in the now rather than worrying about outcomes
                      </p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <h5 className="font-semibold mb-1">Refocusing Techniques</h5>
                      <p className="text-sm text-muted-foreground">
                        Quick methods to regain concentration when distracted
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-4 text-lg">Post-Performance</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <h5 className="font-semibold mb-1">Performance Review</h5>
                      <p className="text-sm text-muted-foreground">
                        Objective analysis of what worked and what can be improved
                      </p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <h5 className="font-semibold mb-1">Recovery and Reset</h5>
                      <p className="text-sm text-muted-foreground">
                        Mental and physical recovery before the next challenge
                      </p>
                    </div>
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
                RECODE integrates performance psychology principles to help you:
              </p>
              
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Develop a growth mindset that sees challenges as opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Build confidence through systematic skill development and success experiences</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Create effective routines and habits that support consistent performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Manage performance anxiety and pressure situations effectively</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Learn from setbacks and failures to improve future performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Optimize energy and motivation for sustained high performance</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PerformancePsychology;