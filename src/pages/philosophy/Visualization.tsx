import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Eye, Brain, Target, Play, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";

const Visualization = () => {
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
            <h1 className="text-4xl font-bold mb-4">Visualization Techniques</h1>
            <p className="text-xl text-muted-foreground">
              Harnessing the power of mental imagery to rehearse success and rewire limiting beliefs
            </p>
          </div>

          {/* What is Visualization */}
          <Card className="p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Eye className="h-6 w-6 text-primary" />
                What is Visualization?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg leading-relaxed">
                Visualization, also known as mental imagery or mental rehearsal, is the practice of 
                creating detailed mental images and scenarios to achieve specific psychological or 
                performance goals. It involves using your imagination to simulate experiences, 
                outcomes, and behaviors in your mind.
              </p>
              
              <p className="text-lg leading-relaxed">
                Research shows that the brain responds to vividly imagined experiences similarly to 
                real experiences, activating many of the same neural pathways. This makes visualization 
                a powerful tool for learning, preparation, confidence-building, and behavioral change.
              </p>
            </CardContent>
          </Card>

          {/* How It Works */}
          <Card className="p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Brain className="h-6 w-6 text-orange-500" />
                How Visualization Works
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Neural Activation</h4>
                  <p className="text-muted-foreground">
                    Mental imagery activates the same brain regions involved in actual perception and action, 
                    creating real neural changes.
                  </p>
                </div>
                
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Motor Programming</h4>
                  <p className="text-muted-foreground">
                    Visualizing movements helps program motor patterns, improving actual physical performance 
                    without physical practice.
                  </p>
                </div>
                
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Emotional Conditioning</h4>
                  <p className="text-muted-foreground">
                    Repeated visualization can reduce anxiety about future events and build confidence 
                    through mental rehearsal of success.
                  </p>
                </div>
                
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Memory Enhancement</h4>
                  <p className="text-muted-foreground">
                    Mental imagery creates stronger, more vivid memories and helps encode information 
                    for better recall.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Types of Visualization */}
          <Card className="p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Target className="h-6 w-6 text-green-500" />
                Types of Visualization Techniques
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Mental Rehearsal</h5>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      Practicing skills, scenarios, or performances in your mind before doing them in reality
                    </p>
                  </div>
                  
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">Outcome Visualization</h5>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Imagining successful achievement of goals to build motivation and confidence
                    </p>
                  </div>
                  
                  <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                    <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Relaxation Imagery</h5>
                    <p className="text-sm text-purple-600 dark:text-purple-400">
                      Using calming mental images to reduce stress and promote relaxation
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                    <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Cognitive Rehearsal</h5>
                    <p className="text-sm text-orange-600 dark:text-orange-400">
                      Practicing new thought patterns and responses to challenging situations
                    </p>
                  </div>
                  
                  <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
                    <h5 className="font-semibold text-red-700 dark:text-red-300 mb-2">Healing Imagery</h5>
                    <p className="text-sm text-red-600 dark:text-red-400">
                      Visualizing physical or emotional healing processes and recovery
                    </p>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                    <h5 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Identity Visualization</h5>
                    <p className="text-sm text-yellow-600 dark:text-yellow-400">
                      Imagining yourself as the person you want to become to guide behavior change
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Effective Visualization Practices */}
          <Card className="p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Play className="h-6 w-6 text-purple-500" />
                Elements of Effective Visualization
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Sensory Details</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Visual details (colors, shapes, lighting)</li>
                      <li>• Auditory elements (sounds, voices, music)</li>
                      <li>• Physical sensations (touch, temperature)</li>
                      <li>• Emotional feelings and responses</li>
                      <li>• Movement and kinesthetic awareness</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Quality Factors</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Vivid and realistic imagery</li>
                      <li>• First-person perspective</li>
                      <li>• Regular, consistent practice</li>
                      <li>• Positive, successful outcomes</li>
                      <li>• Calm, focused mental state</li>
                    </ul>
                  </div>
                </div>
                
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                  <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">The PETTLEP Model</h4>
                  <p className="text-sm text-green-600 dark:text-green-400">
                    <strong>P</strong>hysical, <strong>E</strong>nvironment, <strong>T</strong>ask, <strong>T</strong>iming, 
                    <strong>L</strong>earning, <strong>E</strong>motion, <strong>P</strong>erspective - a framework for 
                    creating maximally effective visualization experiences.
                  </p>
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
                In RECODE sessions, visualization techniques help you:
              </p>
              
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Mentally rehearse new behaviors and responses before using them in real situations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Build confidence by experiencing success scenarios in your imagination</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Reduce anxiety about future challenges through systematic mental preparation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Rewrite limiting beliefs by repeatedly imagining yourself succeeding</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Create calming mental spaces for stress relief and emotional regulation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Strengthen motivation by regularly connecting with your goals and desired outcomes</span>
                </li>
              </ul>
              
              <div className="bg-purple-50 dark:bg-purple-950/20 p-6 rounded-lg mt-6">
                <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Visualization in Practice</h4>
                <p className="text-purple-600 dark:text-purple-400">
                  RECODE teaches you how to create powerful, personalized visualization scripts that target 
                  your specific goals and challenges. Through guided practice, you'll learn to use mental 
                  imagery as a reliable tool for preparation, confidence-building, and positive change.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Visualization;