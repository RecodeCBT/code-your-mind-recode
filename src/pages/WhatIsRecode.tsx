import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, Zap, Target, Eye, CheckCircle, Heart, Compass, Lightbulb } from "lucide-react";
import Navigation from "@/components/Navigation";

const WhatIsRecode = () => {
  const recodeSteps = [
    {
      step: "REVEAL",
      description: "Notice the hidden patterns that control your reactions and self-image",
      icon: Eye,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    },
    {
      step: "EVALUATE", 
      description: "Use structured frameworks to explore whether these patterns are useful, kind, and evidence-based",
      icon: Target,
      color: "text-purple-600",
      bgColor: "bg-purple-600/10"
    },
    {
      step: "CHALLENGE",
      description: "Interrogate old beliefs and emotional habits through guided questioning",
      icon: Zap,
      color: "text-blue-600", 
      bgColor: "bg-blue-600/10"
    },
    {
      step: "OBSERVE",
      description: "Build awareness of emotional and sensory experience without reactivity",
      icon: Brain,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    },
    {
      step: "DESIGN",
      description: "Create new thoughts, habits and perspectives that serve your goals",
      icon: Code,
      color: "text-purple-600",
      bgColor: "bg-purple-600/10"
    },
    {
      step: "EMBED",
      description: "Strengthen these upgrades through daily practice and long-term reinforcement",
      icon: CheckCircle,
      color: "text-blue-600",
      bgColor: "bg-blue-600/10"
    }
  ];

  const approaches = [
    {
      title: "CBT Precision",
      description: "Identify, challenge and rewrite cognitive distortions and limiting beliefs",
      icon: Target,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      link: "/philosophy/cbt"
    },
    {
      title: "DBT Emotional Mastery", 
      description: "Build emotional resilience through powerful tools like distress tolerance and radical acceptance",
      icon: Heart,
      color: "text-purple-600",
      bgColor: "bg-purple-600/10",
      link: "/philosophy/dbt"
    },
    {
      title: "Mindfulness Training",
      description: "Train attention, reduce overthinking, and reconnect with the present moment",
      icon: Compass,
      color: "text-blue-600",
      bgColor: "bg-blue-600/10",
      link: "/philosophy/mindfulness"
    },
    {
      title: "Neuroplasticity in Action",
      description: "Rewire your brain with intentional mental habits, using repetition and structured practice", 
      icon: Brain,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      link: "/philosophy/neuroplasticity"
    },
    {
      title: "Performance Psychology",
      description: "Learn behavioural frameworks that support growth, confidence and flexible goal-setting",
      icon: Lightbulb,
      color: "text-purple-600", 
      bgColor: "bg-purple-600/10",
      link: "/philosophy/performance-psychology"
    },
    {
      title: "Visualisation Techniques",
      description: "Harness the power of mental imagery to rehearse success and rewire limiting beliefs",
      icon: Eye,
      color: "text-blue-600",
      bgColor: "bg-blue-600/10",
      link: "/philosophy/visualization"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-orange-500/5 to-purple-600/5 py-20 px-4">
        <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-orange-500/15 to-purple-600/15 rounded-full blur-xl"></div>
        <div className="absolute top-20 right-10 w-20 h-20 bg-gradient-to-br from-blue-600/15 to-orange-500/15 rounded-lg rotate-45 blur-xl"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-orange-500 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                What is RECODE?
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              RECODE is not just therapy. It's mental software engineering for real life. 
              We don't believe in simply managing symptoms—we help you decode and redesign 
              the core algorithms that drive your thoughts, feelings and behaviours.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">The RECODE Philosophy</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Your mind runs on patterns—some helpful, others harmful. Just like debugging faulty code, 
              we identify the mental scripts that aren't serving you and systematically replace them 
              with more effective, evidence-based alternatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {approaches.map((approach, index) => {
              const Icon = approach.icon;
              return (
                <Link key={index} to={approach.link}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-transparent hover:border-l-orange-500/50 cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 ${approach.bgColor} rounded-lg`}>
                          <Icon className={`h-5 w-5 ${approach.color}`} />
                        </div>
                        <CardTitle className="text-lg">{approach.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {approach.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* RECODE Method Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-secondary/5 via-blue-600/5 to-orange-500/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-purple-600/15 to-orange-500/15 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-1/4 w-28 h-28 bg-gradient-to-br from-blue-600/15 to-purple-600/15 rounded-lg rotate-45 blur-2xl"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How Does RECODE Work?</h2>
            <p className="text-xl text-muted-foreground">
              RECODE simplifies complex psychological insights into teachable, doable steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recodeSteps.map((step, index) => {
              const Icon = step.icon;
              // Define unique colors for each step while keeping first letter colors
              const stepColors = [
                "bg-orange-500/10", // REVEAL - orange
                "bg-green-500/10",  // EVALUATE - green  
                "bg-red-500/10",    // CHALLENGE - red
                "bg-blue-500/10",   // OBSERVE - blue
                "bg-purple-500/10", // DESIGN - purple
                "bg-teal-500/10"    // EMBED - teal
              ];
              const iconColors = [
                "text-orange-500", // REVEAL
                "text-green-500",  // EVALUATE
                "text-red-500",    // CHALLENGE
                "text-blue-500",   // OBSERVE
                "text-purple-500", // DESIGN
                "text-teal-500"    // EMBED
              ];
              
              return (
                <div key={index} className="relative">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-transparent hover:border-t-orange-500/50">
                    <CardHeader className="text-center">
                      <div className={`mx-auto mb-4 p-3 ${stepColors[index]} rounded-full w-fit`}>
                        <Icon className={`h-8 w-8 ${iconColors[index]}`} />
                      </div>
                      <CardTitle className="text-2xl font-bold">
                        <span className="text-muted-foreground">{index + 1}. </span>
                        <span className="text-4xl font-extrabold text-orange-500">
                          {step.step[0]}
                        </span>
                        <span className={`${iconColors[index]}`}>
                          {step.step.slice(1)}
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-center">
                        {step.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                  {index < recodeSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-orange-500/30 via-purple-600/30 to-blue-600/30 transform -translate-y-1/2"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Evidence Base Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Evidence-Based Foundation</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Cognitive Behavioral Therapy (CBT)</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base space-y-4">
                  <p>
                    CBT is one of the most extensively researched forms of psychotherapy, with over 500 clinical trials 
                    demonstrating its effectiveness for anxiety, depression, and other mental health conditions.
                  </p>
                  <p>
                    RECODE applies CBT principles systematically, helping you identify and challenge the thought patterns 
                    that create emotional distress and behavioral problems.
                  </p>
                  <div className="mt-6">
                    <h4 className="font-semibold mb-3 text-foreground">Core CBT Principles:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Cognitive Triangle:</strong> Understanding the connection between thoughts, feelings, and behaviors</li>
                      <li>• <strong>Present-Focused:</strong> Addressing current problems and developing practical solutions</li>
                      <li>• <strong>Collaborative:</strong> Working together to identify and change unhelpful patterns</li>
                      <li>• <strong>Evidence-Based:</strong> Using proven techniques like thought records and behavioral experiments</li>
                    </ul>
                  </div>
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Dialectical Behavior Therapy (DBT)</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base space-y-4">
                  <p>
                    DBT adds powerful emotional regulation skills to the cognitive restructuring of CBT, 
                    teaching you how to tolerate distress and manage intense emotions effectively.
                  </p>
                  <p>
                    Through RECODE, you'll learn mindfulness, distress tolerance, and interpersonal effectiveness 
                    skills that create lasting change in how you respond to life's challenges.
                  </p>
                  <div className="mt-6">
                    <h4 className="font-semibold mb-3 text-foreground">Core DBT Skills:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Mindfulness:</strong> Present-moment awareness without judgment</li>
                      <li>• <strong>Distress Tolerance:</strong> Managing crisis situations without making them worse</li>
                      <li>• <strong>Emotion Regulation:</strong> Understanding and managing intense emotions effectively</li>
                      <li>• <strong>Interpersonal Effectiveness:</strong> Maintaining relationships while meeting your needs</li>
                    </ul>
                  </div>
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Basics Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500/5 via-purple-600/5 to-blue-600/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">The Importance of "The Basics"</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Through his dual expertise as both a practicing medical doctor and certified Level 3 Personal Trainer, 
              Dr. Carson emphasizes that anything affecting your energy levels directly impacts your psychological wellbeing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-orange-500/10 to-orange-600/5 border-l-4 border-l-orange-500 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-orange-500/20 rounded-full">
                  <Zap className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-orange-700">Exercise Habits</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Regular physical activity directly influences mitochondria production, boosting energy capacity in all your cells
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-l-4 border-l-purple-500 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-500/20 rounded-full">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-purple-700">Sleep Hygiene</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Quality sleep patterns are fundamental to emotional regulation and cognitive function
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-l-4 border-l-blue-500 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-500/20 rounded-full">
                  <Brain className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-700">Nutritional Impacts</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Knowledge on how blood sugar levels can influence energy and impact mental states.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-teal-500/10 to-teal-600/5 border-l-4 border-l-teal-500 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-teal-500/20 rounded-full">
                  <CheckCircle className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-teal-700">Hydration Levels</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Adequate hydration is essential for optimal brain function though essential energy pathways, removing toxic by-products of keeping the body running, and maintaining blood pressure
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Button - Bottom */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <Link to="/testimonials#top">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-2 border-primary/30 hover:border-primary hover:bg-primary/5">
                ⭐ Read Our Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatIsRecode;