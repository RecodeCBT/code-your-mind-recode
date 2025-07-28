import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Brain, Zap, RefreshCw, Target, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";

const Neuroplasticity = () => {
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
            <h1 className="text-4xl font-bold mb-4">Neuroplasticity in Action</h1>
            <p className="text-xl text-muted-foreground">
              How your brain can rewire itself through intentional practice and repetition
            </p>
          </div>

          {/* What is Neuroplasticity */}
          <Card className="p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Brain className="h-6 w-6 text-primary" />
                What is Neuroplasticity?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg leading-relaxed">
                Neuroplasticity is the brain's remarkable ability to reorganize, adapt, and form new neural 
                connections throughout life. This means that the patterns of thinking, feeling, and behaving 
                that feel automatic and unchangeable can actually be modified through focused practice.
              </p>
              
              <p className="text-lg leading-relaxed">
                Your brain is constantly creating and strengthening neural pathways based on what you 
                repeatedly think, feel, and do. This process continues throughout your entire life, 
                making positive change possible at any age.
              </p>
            </CardContent>
          </Card>

          {/* How It Works */}
          <Card className="p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Zap className="h-6 w-6 text-orange-500" />
                How Neuroplasticity Works
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Neurons That Fire Together, Wire Together</h4>
                  <p className="text-muted-foreground">
                    When brain cells activate simultaneously repeatedly, they form stronger connections, 
                    making that pattern more likely to occur in the future.
                  </p>
                </div>
                
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Use It or Lose It</h4>
                  <p className="text-muted-foreground">
                    Neural pathways that aren't used regularly become weaker over time, while frequently 
                    used pathways become stronger and more automatic.
                  </p>
                </div>
                
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Repetition Creates Habits</h4>
                  <p className="text-muted-foreground">
                    Through consistent practice, new behaviors and thought patterns can become as automatic 
                    as the old ones you're trying to change.
                  </p>
                </div>
                
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Focus Matters</h4>
                  <p className="text-muted-foreground">
                    Attention and intention direct neuroplastic change - what you focus on literally 
                    shapes your brain structure.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Types of Neuroplasticity */}
          <Card className="p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <RefreshCw className="h-6 w-6 text-green-500" />
                Types of Neuroplastic Change
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Structural Plasticity</h5>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      Physical changes in brain structure, including new neural connections and increased 
                      brain tissue density
                    </p>
                  </div>
                  
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">Functional Plasticity</h5>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Changes in how brain regions work together and communicate with each other
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                    <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Synaptic Plasticity</h5>
                    <p className="text-sm text-purple-600 dark:text-purple-400">
                      Strengthening or weakening of connections between brain cells based on activity patterns
                    </p>
                  </div>
                  
                  <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                    <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Neurogenesis</h5>
                    <p className="text-sm text-orange-600 dark:text-orange-400">
                      The creation of new brain cells, particularly in areas related to learning and memory
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Factors That Promote Neuroplasticity */}
          <Card className="p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Target className="h-6 w-6 text-purple-500" />
                Factors That Enhance Neuroplasticity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Mental Factors</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Focused attention and mindfulness</li>
                      <li>• Learning new skills and information</li>
                      <li>• Mental challenges and problem-solving</li>
                      <li>• Positive emotions and motivation</li>
                      <li>• Repetition and consistent practice</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Physical Factors</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Regular physical exercise</li>
                      <li>• Quality sleep and rest</li>
                      <li>• Proper nutrition and hydration</li>
                      <li>• Stress management and relaxation</li>
                      <li>• Social connection and interaction</li>
                    </ul>
                  </div>
                </div>
                
                <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                  <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">The Neuroplasticity Window</h4>
                  <p className="text-sm text-yellow-600 dark:text-yellow-400">
                    Change happens most effectively when you're in a state of focused attention without 
                    overwhelming stress - alert but not anxious, engaged but not overwhelmed.
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
                RECODE leverages neuroplasticity principles to help you:
              </p>
              
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Weaken old neural pathways associated with negative thoughts and behaviors</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Strengthen new pathways that support healthier responses and habits</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Use focused attention and repetition to make positive changes stick</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Create optimal conditions for brain change through structured practice</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Build confidence in your ability to change by understanding the science behind it</span>
                </li>
              </ul>
              
              <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg mt-6">
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">The RECODE Advantage</h4>
                <p className="text-blue-600 dark:text-blue-400">
                  By understanding neuroplasticity, you can approach change with realistic expectations, 
                  patience for the process, and confidence that consistent effort will create lasting results. 
                  Your brain is your ally in transformation, not an obstacle.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Neuroplasticity;