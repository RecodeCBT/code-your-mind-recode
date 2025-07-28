import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Heart, Shield, Compass, Users, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";

const DBT = () => {
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
            <h1 className="text-4xl font-bold mb-4">Dialectical Behavior Therapy (DBT)</h1>
            <p className="text-xl text-muted-foreground">
              Building emotional resilience through acceptance and change strategies
            </p>
          </div>

          {/* What is DBT */}
          <Card className="p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Heart className="h-6 w-6 text-primary" />
                What is DBT?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg leading-relaxed">
                Dialectical Behavior Therapy (DBT) is a comprehensive therapeutic approach that combines 
                cognitive-behavioral techniques with mindfulness practices and distress tolerance skills. 
                Originally developed for individuals with intense emotional experiences, DBT is now widely 
                used for emotional regulation challenges.
              </p>
              
              <p className="text-lg leading-relaxed">
                The word "dialectical" refers to the integration of opposites - particularly the balance 
                between accepting yourself as you are while simultaneously working toward change and growth.
              </p>
            </CardContent>
          </Card>

          {/* Core Concepts */}
          <Card className="p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Shield className="h-6 w-6 text-orange-500" />
                Core DBT Concepts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Radical Acceptance</h4>
                  <p className="text-muted-foreground">
                    Fully accepting reality as it is, without approval or resignation, as the first step 
                    toward effective change.
                  </p>
                </div>
                
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Emotional Regulation</h4>
                  <p className="text-muted-foreground">
                    Learning to understand, name, and manage intense emotions without being overwhelmed by them.
                  </p>
                </div>
                
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Distress Tolerance</h4>
                  <p className="text-muted-foreground">
                    Building capacity to survive crisis situations without making them worse through 
                    impulsive actions.
                  </p>
                </div>
                
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Wise Mind</h4>
                  <p className="text-muted-foreground">
                    Integrating emotional and rational thinking to make balanced, effective decisions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Four Modules */}
          <Card className="p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Compass className="h-6 w-6 text-green-500" />
                The Four DBT Modules
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Mindfulness</h5>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      Core skills for being present, observing without judgment, and acting with awareness
                    </p>
                  </div>
                  
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">Distress Tolerance</h5>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Crisis survival skills and techniques for tolerating painful emotions
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                    <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Emotion Regulation</h5>
                    <p className="text-sm text-purple-600 dark:text-purple-400">
                      Understanding and managing emotions, reducing emotional vulnerability
                    </p>
                  </div>
                  
                  <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                    <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Interpersonal Effectiveness</h5>
                    <p className="text-sm text-orange-600 dark:text-orange-400">
                      Building healthy relationships and communicating needs effectively
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* DBT Skills */}
          <Card className="p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Users className="h-6 w-6 text-purple-500" />
                Key DBT Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-4 text-lg">Distress Tolerance Skills</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <h5 className="font-semibold mb-1">TIPP</h5>
                      <p className="text-sm text-muted-foreground">
                        Temperature, Intense exercise, Paced breathing, Paired muscle relaxation
                      </p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <h5 className="font-semibold mb-1">ACCEPTS</h5>
                      <p className="text-sm text-muted-foreground">
                        Activities, Contributing, Comparisons, Emotions, Push away, Thoughts, Sensations
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-4 text-lg">Emotion Regulation Skills</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <h5 className="font-semibold mb-1">PLEASE</h5>
                      <p className="text-sm text-muted-foreground">
                        Treat PhysicaL illness, Balance Eating, Avoid mood-Altering substances, 
                        Balance Sleep, Get Exercise
                      </p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <h5 className="font-semibold mb-1">Opposite Action</h5>
                      <p className="text-sm text-muted-foreground">
                        Acting opposite to emotional urges when emotions don't fit the facts
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
                RECODE integrates DBT skills to help you:
              </p>
              
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Build tolerance for difficult emotions without avoiding or suppressing them</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Develop healthy coping strategies for crisis situations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Learn to regulate emotions effectively without losing control</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Improve relationships through better communication and boundary-setting</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Practice radical acceptance while working toward meaningful change</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DBT;