import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, Zap, Target, Eye, CheckCircle, Heart, Compass, Lightbulb, X } from "lucide-react";
import Navigation from "@/components/Navigation";
import NeuroDecal from "@/components/Neuro/NeuroDecal";
import rewireTheMindImage from "@/assets/rewire-the-mind.jpg";
import recodeCircuitsImage from "@/assets/recode-circuits.png";

const WhatIsRecode = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const basicsData = {
    "exercise": {
      title: "Exercise Habits",
      icon: Zap,
      color: "orange",
      content: "Regular physical activity directly influences mitochondria production, boosting energy capacity in all your cells. Exercise increases BDNF (brain-derived neurotrophic factor), which helps with neuroplasticity and mental clarity."
    },
    "sleep": {
      title: "Sleep Hygiene", 
      icon: Heart,
      color: "teal",
      content: "Quality sleep patterns are fundamental to emotional regulation and cognitive function. During sleep, your brain consolidates memories and clears metabolic waste, directly impacting your mental performance and emotional stability."
    },
    "nutrition": {
      title: "Nutritional Impacts",
      icon: Target,
      color: "purple", 
      content: "Knowledge on how blood sugar levels can influence energy and impact mental states. Stable glucose levels support consistent energy and mood, while blood sugar spikes and crashes can trigger anxiety and depression-like symptoms."
    },
    "hydration": {
      title: "Hydration Levels",
      icon: CheckCircle,
      color: "blue",
      content: "Adequate hydration is essential for optimal brain function though essential energy pathways, removing toxic by-products of keeping the body running, and maintaining blood pressure. Even mild dehydration can significantly impact concentration and mood."
    }
  };

  const closeExpanded = () => setExpandedSection(null);
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
      <NeuroDecal.TopCircuitBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-orange-500/5 to-purple-600/5 py-20 px-4">
        <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-orange-500/15 to-purple-600/15 rounded-full blur-xl"></div>
        <div className="absolute top-20 right-10 w-20 h-20 bg-gradient-to-br from-blue-600/15 to-orange-500/15 rounded-lg rotate-45 blur-xl"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6 rc-title-wrap">
            <NeuroDecal.TopTitle align="center" density="light" offsetY={-12} />
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight relative z-10">
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

      {/* What is RECODE Section */}
      <section className="pt-4 pb-20 px-4 relative overflow-hidden">
        <NeuroDecal.BodyMargins density="light" sections={4} />
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="mb-16">
            {/* RECODE Circuits Image */}
            <div className="flex justify-center">
              <img 
                src={recodeCircuitsImage} 
                alt="RECODE circuits - Brain with circuit patterns representing neural rewiring" 
                className="w-64 h-64 object-cover rounded-full"
              />
            </div>
            
            <p className="text-lg text-foreground leading-relaxed mb-12">
              ReCODE is a structured, skills-based programme that helps people (and teams) change entrenched thought–emotion–behaviour loops. It integrates core CBT methods (behavioural activation, exposure, cognitive tools), targeted DBT skills (emotion regulation, distress tolerance), and practical habit design—think of it as learning to play the brain like an instrument.
            </p>
            
            {/* Rewire the Mind Image */}
            <div className="mb-12 flex justify-center">
              <img 
                src={rewireTheMindImage} 
                alt="Rewire the mind - Brain with neural connections being rewired" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>

            {/* How it works */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-orange-500 text-center">How it works</h3>
              <div className="space-y-4 text-foreground">
                <p><strong>Map the pattern</strong> — identify triggers, label emotions, reduce reactions, increase acceptance and observation, and maintain through consistent repetition.</p>
                <p><strong>Recode the pattern</strong> — run focused behavioural experiments, apply cognitive tools, and practise micro-skills for emotion regulation.</p>
                <p><strong>Track the gains</strong> — brief measures to make improvement visible and guide next steps.</p>
              </div>
            </div>

            {/* Who it helps (individuals) */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-purple-600 text-center">For Individuals</h3>
              <p className="text-foreground">
                Anxiety (including GAD/social), low mood, avoidance/procrastination, stress-linked habits, sleep and performance-impacting patterns. High-risk or crisis presentations are signposted appropriately.
              </p>
            </div>

            {/* For organisations */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-blue-600 text-center">For organisations</h3>
              <p className="text-foreground mb-6">
                ReCODE delivers evidence-informed corporate programmes that translate clinical-grade skills into workplace results:
              </p>
              <div className="space-y-4 text-foreground">
                <p><strong>Workshops & keynotes:</strong> 60–90 minutes on resilience under pressure, attention & focus, psychological safety, and burnout prevention.</p>
                <p><strong>Training series:</strong> 4–8 week cohorts embedding CBT/DBT micro-skills (emotion regulation, cognitive bias checks, habit design).</p>
                <p><strong>Manager toolkits:</strong> practical scripts and micro-interventions for supportive, high-standards leadership.</p>
                <p><strong>Measurement:</strong> simple pre/post pulse measures with anonymised, HR-ready summaries.</p>
              </div>
            </div>

            {/* What to expect */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-orange-500 text-center">What to expect</h3>
              <p className="text-foreground">
                Flexible, and collaborative remote sessions with between-session practice tailored to real life. Many individual programmes run 4-6 sessions; corporate formats range from one-off masterclasses to cohort training with follow-ups.
              </p>
            </div>
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
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Evidence-Based Foundation</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="p-6 md:p-8 text-center">
              <div className="mb-4 md:mb-6">
                <div className="mx-auto mb-4 p-3 bg-orange-500/10 rounded-full w-fit">
                  <Target className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">Cognitive Behavioral Therapy (CBT)</h3>
              </div>
              <div className="text-sm md:text-base space-y-3 md:space-y-4">
                <p>
                  CBT is one of the most extensively researched forms of psychotherapy, with over 500 clinical trials 
                  demonstrating its effectiveness for anxiety, depression, and other mental health conditions.
                </p>
                <p>
                  RECODE applies CBT principles systematically, helping you identify and challenge the thought patterns 
                  that create emotional distress and behavioral problems.
                </p>
                <div className="mt-4 md:mt-6">
                  <h4 className="font-semibold mb-2 md:mb-3 text-sm md:text-base">Core CBT Principles:</h4>
                  <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-left max-w-md mx-auto">
                    <li>• <strong>Cognitive Triangle:</strong> Understanding the connection between thoughts, feelings, and behaviors</li>
                    <li>• <strong>Present-Focused:</strong> Addressing current problems and developing practical solutions</li>
                    <li>• <strong>Collaborative:</strong> Working together to identify and change unhelpful patterns</li>
                    <li>• <strong>Evidence-Based:</strong> Using proven techniques like thought records and behavioral experiments</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 text-center">
              <div className="mb-4 md:mb-6">
                <div className="mx-auto mb-4 p-3 bg-purple-600/10 rounded-full w-fit">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">Dialectical Behavior Therapy (DBT)</h3>
              </div>
              <div className="text-sm md:text-base space-y-3 md:space-y-4">
                <p>
                  DBT adds powerful emotional regulation skills to the cognitive restructuring of CBT, 
                  teaching you how to tolerate distress and manage intense emotions effectively.
                </p>
                <p>
                  Through RECODE, you'll learn mindfulness, distress tolerance, and interpersonal effectiveness 
                  skills that create lasting change in how you respond to life's challenges.
                </p>
                <div className="mt-4 md:mt-6">
                  <h4 className="font-semibold mb-2 md:mb-3 text-sm md:text-base">Core DBT Skills:</h4>
                  <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-left max-w-md mx-auto">
                    <li>• <strong>Mindfulness:</strong> Present-moment awareness without judgment</li>
                    <li>• <strong>Distress Tolerance:</strong> Managing crisis situations without making them worse</li>
                    <li>• <strong>Emotion Regulation:</strong> Understanding and managing intense emotions effectively</li>
                    <li>• <strong>Interpersonal Effectiveness:</strong> Maintaining relationships while meeting your needs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Button - Bottom */}
      <section className="py-16 px-4 relative z-10">
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

      {/* Book Your Session Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground relative">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Book Your Session</h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule your personalized ReCODE consultation through our secure booking system
          </p>
          
          {/* Fresha Booking Embed Placeholder */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-6">
            <p className="text-lg mb-4">Professional ReCODE Sessions</p>
            <p className="text-sm opacity-75 mb-4">It starts with one click </p>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="relative group">
                <Button size="lg" onClick={() => window.location.href = 'https://recodecbt.setmore.com'} className="text-lg px-8 py-3 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white shadow-lg">
                  Book Your Session Today
                </Button>
                
                {/* Enhanced £20 off sticker */}
                <div className="absolute -top-4 -right-12 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white rounded-full shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300 flex flex-col items-center justify-center border-4 border-white">
                    <div className="font-bold text-sm leading-none">£20</div>
                    <div className="font-bold text-xs leading-none">OFF</div>
                    <div className="font-bold text-xs leading-none opacity-90">INTRO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <Link to="/contact#top">
              <Button size="lg" className="text-lg px-8 py-3 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white shadow-lg">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatIsRecode;