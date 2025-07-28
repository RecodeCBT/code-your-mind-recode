import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Compass, Brain, Clock, Eye, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";

const Mindfulness = () => {
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
            <h1 className="text-4xl font-bold mb-4">Mindfulness Training</h1>
            <p className="text-xl text-muted-foreground">
              Cultivating present-moment awareness and reducing mental autopilot
            </p>
          </div>

          {/* What is Mindfulness */}
          <Card className="p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Compass className="h-6 w-6 text-primary" />
                What is Mindfulness?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg leading-relaxed">
                Mindfulness is the practice of purposeful, non-judgmental awareness of the present moment. 
                It involves observing your thoughts, feelings, bodily sensations, and surrounding environment 
                without getting caught up in them or trying to change them.
              </p>
              
              <p className="text-lg leading-relaxed">
                Rather than being lost in mental autopilot or caught up in worries about the future or 
                regrets about the past, mindfulness helps you develop a different relationship with your 
                internal experience - one of curiosity and acceptance rather than struggle.
              </p>
            </CardContent>
          </Card>

          {/* Core Elements */}
          <Card className="p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Brain className="h-6 w-6 text-orange-500" />
                Core Elements of Mindfulness
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Present-Moment Awareness</h4>
                  <p className="text-muted-foreground">
                    Bringing attention to what is happening right now, rather than being lost in 
                    thoughts about the past or future.
                  </p>
                </div>
                
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Non-Judgmental Observation</h4>
                  <p className="text-muted-foreground">
                    Noticing experiences without immediately labeling them as good or bad, right or wrong.
                  </p>
                </div>
                
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Acceptance</h4>
                  <p className="text-muted-foreground">
                    Allowing experiences to be present without trying to push them away or cling to them.
                  </p>
                </div>
                
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Beginner's Mind</h4>
                  <p className="text-muted-foreground">
                    Approaching each moment with fresh curiosity, as if experiencing it for the first time.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mindfulness Practices */}
          <Card className="p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Clock className="h-6 w-6 text-green-500" />
                Common Mindfulness Practices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Breath Awareness</h5>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      Using the breath as an anchor to bring attention back to the present moment
                    </p>
                  </div>
                  
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">Body Scan</h5>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Systematically noticing sensations throughout the body with curiosity
                    </p>
                  </div>
                  
                  <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                    <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Walking Meditation</h5>
                    <p className="text-sm text-purple-600 dark:text-purple-400">
                      Bringing mindful awareness to the physical experience of walking
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                    <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Mindful Observation</h5>
                    <p className="text-sm text-orange-600 dark:text-orange-400">
                      Watching thoughts and emotions arise and pass without getting caught up in them
                    </p>
                  </div>
                  
                  <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
                    <h5 className="font-semibold text-red-700 dark:text-red-300 mb-2">Loving-Kindness</h5>
                    <p className="text-sm text-red-600 dark:text-red-400">
                      Cultivating compassion and goodwill toward yourself and others
                    </p>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                    <h5 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Mindful Daily Activities</h5>
                    <p className="text-sm text-yellow-600 dark:text-yellow-400">
                      Bringing full attention to routine activities like eating, washing, or listening
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card className="p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Eye className="h-6 w-6 text-purple-500" />
                Benefits of Mindfulness Practice
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Regular mindfulness practice has been shown to provide numerous benefits:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Mental Benefits</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Reduced anxiety and worry</li>
                      <li>• Improved emotional regulation</li>
                      <li>• Better focus and concentration</li>
                      <li>• Decreased rumination</li>
                      <li>• Enhanced self-awareness</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Physical Benefits</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Lower blood pressure</li>
                      <li>• Reduced chronic pain</li>
                      <li>• Improved sleep quality</li>
                      <li>• Strengthened immune system</li>
                      <li>• Decreased inflammation markers</li>
                    </ul>
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
                In RECODE sessions, mindfulness training helps you:
              </p>
              
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Develop awareness of automatic thought patterns and emotional reactions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Create space between triggers and responses for more conscious choices</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Break free from mental rumination and overthinking cycles</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Build tolerance for difficult emotions without being overwhelmed</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Cultivate self-compassion and reduce harsh self-criticism</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Mindfulness;