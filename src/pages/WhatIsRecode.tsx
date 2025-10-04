import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, Zap, Target, Eye, CheckCircle, Heart, Compass, Lightbulb, X, Triangle, Focus, Users, Award, Shield, MessageCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import NeuroDecal from "@/components/Neuro/NeuroDecal";
import rewireTheMindImage from "@/assets/rewire-the-mind.jpg";
import recodeCircuitsImage from "@/assets/recode-circuits.png";

const WhatIsRecode = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const cbtPrinciplesData = {
    "cognitive-triangle": {
      title: "Cognitive Triangle",
      icon: Triangle,
      color: "orange",
      content: "Understanding the fundamental connection between thoughts, feelings, and behaviors. This core principle shows how changing one element of the triangle automatically influences the others, giving you multiple entry points for creating positive change in your life."
    },
    "present-focused": {
      title: "Present-Focused",
      icon: Focus,
      color: "orange", 
      content: "Addressing current problems and developing practical solutions for the here and now. Rather than getting lost in past regrets or future worries, CBT helps you focus your energy on what you can actually control and change today."
    },
    "collaborative": {
      title: "Collaborative",
      icon: Users,
      color: "orange",
      content: "Working together as partners to identify and change unhelpful patterns. This isn't about being told what to do—it's about developing your own insights and skills through guided discovery and shared problem-solving."
    },
    "evidence-based": {
      title: "Evidence-Based",
      icon: Award,
      color: "orange",
      content: "Using proven techniques like thought records and behavioral experiments that have been validated through decades of research. Every tool and technique has solid scientific backing, ensuring you're using methods that actually work."
    }
  };

  const dbtSkillsData = {
    "mindfulness": {
      title: "Mindfulness",
      icon: Brain,
      color: "purple",
      content: "Present-moment awareness without judgment. Learning to observe your thoughts and emotions as they arise without getting caught up in them, creating space between stimulus and response so you can choose how to act rather than react automatically."
    },
    "distress-tolerance": {
      title: "Distress Tolerance", 
      icon: Shield,
      color: "purple",
      content: "Managing crisis situations without making them worse. These skills help you survive intense emotional states without engaging in behaviors that create additional problems, using techniques like distraction, self-soothing, and radical acceptance."
    },
    "emotion-regulation": {
      title: "Emotion Regulation",
      icon: Heart,
      color: "purple",
      content: "Understanding and managing intense emotions effectively. Learning to identify what you're feeling, understand what triggered it, and use specific skills to either change the emotion or change how you respond to it."
    },
    "interpersonal-effectiveness": {
      title: "Interpersonal Effectiveness",
      icon: MessageCircle,
      color: "purple",
      content: "Maintaining relationships while meeting your needs. Balancing being assertive about your goals with maintaining important relationships, using skills like DEAR MAN, GIVE, and FAST to communicate effectively."
    }
  };

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
              Your brain is biological <em><strong>computer</strong></em> - It's coding comes from cycles of <em><strong>repetition</strong></em>.
            </p>
          </div>
        </div>
      </section>

      {/* What is RECODE Section */}
      <section className="pt-2 pb-12 px-4 relative overflow-hidden">
        <NeuroDecal.BodyMargins density="light" sections={4} />
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="mb-8 space-y-8">
            {/* RECODE Circuits Image */}
            <div className="flex justify-center">
              <img 
                src={recodeCircuitsImage} 
                alt="RECODE circuits - Brain with circuit patterns representing neural rewiring" 
                className="w-64 h-64 object-cover rounded-full"
              />
            </div>
            
            <p className="text-base sm:text-lg text-foreground leading-relaxed text-center max-w-3xl mx-auto">
              ReCODE is a structured, skills-based programme that helps people (and teams) change entrenched thought–emotion–behaviour loops. It integrates core CBT methods (behavioural activation, exposure, cognitive tools), targeted DBT skills (emotion regulation, distress tolerance), and practical habit design—think of it as learning to play the brain like an instrument.
            </p>
            
            {/* Rewire the Mind Image */}
            <div className="mb-8 flex justify-center">
              <img 
                src={rewireTheMindImage} 
                alt="Rewire the mind - Brain with neural connections being rewired" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>

            {/* How it works */}
            <div className="mb-8">
              <div className="relative flex items-center mb-6">
                <div className="flex-grow border-t border-primary/30"></div>
                <div className="flex-shrink-0 mx-4 text-2xl font-bold text-orange-500 text-center relative">
                  How it works
                  <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-6 h-6">
                    <svg viewBox="0 0 24 24" className="w-full h-full text-orange-500/50 fill-current">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-6 h-6">
                    <svg viewBox="0 0 24 24" className="w-full h-full text-orange-500/50 fill-current">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                </div>
                <div className="flex-grow border-t border-primary/30"></div>
              </div>
              <Card className="p-6 border-2 border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-transparent">
                <div className="space-y-6 text-foreground">
                  <div className="text-center">
                    <h4 className="text-lg font-bold mb-2">Map the pattern</h4>
                    <p>identify triggers, label emotions, reduce reactions, increase acceptance and observation, and maintain through consistent repetition.</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-bold mb-2">Recode the pattern</h4>
                    <p>run focused behavioural experiments, apply cognitive tools, and practise micro-skills for emotion regulation.</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-bold mb-2">Track the gains</h4>
                    <p>brief measures to make improvement visible and guide next steps.</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Who it helps (individuals) */}
            <div className="mb-8">
              <div className="relative flex items-center mb-6">
                <div className="flex-grow border-t border-primary/30"></div>
                <div className="flex-shrink-0 mx-4 text-2xl font-bold text-purple-600 text-center relative">
                  For Individuals
                  <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-6 h-6">
                    <svg viewBox="0 0 24 24" className="w-full h-full text-purple-600/50 fill-current">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-6 h-6">
                    <svg viewBox="0 0 24 24" className="w-full h-full text-purple-600/50 fill-current">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5"/>
                    </svg>
                  </div>
                </div>
                <div className="flex-grow border-t border-primary/30"></div>
              </div>
              <p className="text-foreground text-center">
                Anxiety (including GAD/social), low mood, avoidance/procrastination, stress-linked habits, sleep and performance-impacting patterns. High-risk or crisis presentations are signposted appropriately.
              </p>
            </div>

            {/* For organisations */}
            <div className="mb-8">
              <div className="relative flex items-center mb-6">
                <div className="flex-grow border-t border-primary/30"></div>
                <div className="flex-shrink-0 mx-4 text-2xl font-bold text-blue-600 text-center relative">
                  For Organisations
                  <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-6 h-6">
                    <svg viewBox="0 0 24 24" className="w-full h-full text-blue-600/50 fill-current">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-6 h-6">
                    <svg viewBox="0 0 24 24" className="w-full h-full text-blue-600/50 fill-current">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5"/>
                    </svg>
                  </div>
                </div>
                <div className="flex-grow border-t border-primary/30"></div>
              </div>
              <p className="text-foreground mb-6 text-center">
                ReCODE delivers evidence-informed corporate programmes that translate clinical-grade skills into workplace results:
              </p>
              <Card className="p-6 border-2 border-blue-600/20 bg-gradient-to-br from-blue-600/5 to-transparent">
                <div className="grid sm:grid-cols-2 gap-6 text-foreground">
                  <div className="text-center">
                    <h4 className="text-lg font-bold mb-2">Workshops & keynotes</h4>
                    <p>1 to 3 hours on resilience under pressure, attention & focus, psychological safety, and burnout prevention.</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-bold mb-2">Training series</h4>
                    <p>4–8 week cohorts embedding CBT/DBT micro-skills (emotion regulation, cognitive bias checks, habit design).</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-bold mb-2">Manager toolkits</h4>
                    <p>practical scripts and micro-interventions for supportive, high-standards leadership.</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-bold mb-2">Measurement</h4>
                    <p>simple pre/post pulse measures with anonymised, HR-ready summaries.</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* What to expect */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-orange-500 text-center">What to expect</h3>
              <p className="text-foreground text-center">
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
                      <CardTitle className="text-2xl font-bold text-center">
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
      <section className="py-12 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Evidence-Based Foundation</h2>
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
                  <div className="grid grid-cols-2 gap-2 md:gap-3 max-w-md mx-auto">
                    {Object.entries(cbtPrinciplesData).map(([key, principle]) => {
                      const Icon = principle.icon;
                      return (
                        <Card 
                          key={key}
                          className="p-2 md:p-3 cursor-pointer hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 bg-gradient-to-br from-orange-500/5 to-orange-500/10 border border-orange-500/20 hover:border-orange-500/40"
                          onClick={() => setExpandedSection(key)}
                        >
                          <div className="text-center space-y-1 md:space-y-2">
                            <div className="mx-auto mb-1 p-1.5 md:p-2 bg-orange-500/10 rounded-full w-fit">
                              <Icon className="h-3 w-3 md:h-4 md:w-4 text-orange-500" />
                            </div>
                            <h5 className="text-xs md:text-sm font-medium text-orange-600">{principle.title}</h5>
                            <p className="text-xs text-muted-foreground">Read more...</p>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
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
                  <div className="grid grid-cols-2 gap-2 md:gap-3 max-w-md mx-auto">
                    {Object.entries(dbtSkillsData).map(([key, skill]) => {
                      const Icon = skill.icon;
                      return (
                        <Card 
                          key={key}
                          className="p-2 md:p-3 cursor-pointer hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 bg-gradient-to-br from-purple-600/5 to-purple-600/10 border border-purple-600/20 hover:border-purple-600/40"
                          onClick={() => setExpandedSection(key)}
                        >
                          <div className="text-center space-y-1 md:space-y-2">
                            <div className="mx-auto mb-1 p-1.5 md:p-2 bg-purple-600/10 rounded-full w-fit">
                              <Icon className="h-3 w-3 md:h-4 md:w-4 text-purple-600" />
                            </div>
                            <h5 className="text-xs md:text-sm font-medium text-purple-600">{skill.title}</h5>
                            <p className="text-xs text-muted-foreground">Read more...</p>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Button - Bottom */}
      <section className="py-8 px-4 relative z-10">
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

      {/* Expanded content overlay for all data */}
      {expandedSection && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={closeExpanded}>
          <div className="bg-card rounded-lg max-w-md w-full p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-card-foreground">
                {basicsData[expandedSection as keyof typeof basicsData]?.title ||
                 cbtPrinciplesData[expandedSection as keyof typeof cbtPrinciplesData]?.title ||
                 dbtSkillsData[expandedSection as keyof typeof dbtSkillsData]?.title}
              </h3>
              <button onClick={closeExpanded} className="text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mb-4">
              {(basicsData[expandedSection as keyof typeof basicsData] ||
                cbtPrinciplesData[expandedSection as keyof typeof cbtPrinciplesData] ||
                dbtSkillsData[expandedSection as keyof typeof dbtSkillsData]) && (
                <div className={`mx-auto mb-4 p-3 rounded-full w-fit ${
                  (basicsData[expandedSection as keyof typeof basicsData] || 
                   cbtPrinciplesData[expandedSection as keyof typeof cbtPrinciplesData] ||
                   dbtSkillsData[expandedSection as keyof typeof dbtSkillsData])?.color === 'orange' ? 'bg-orange-500/10' :
                  (basicsData[expandedSection as keyof typeof basicsData] || 
                   cbtPrinciplesData[expandedSection as keyof typeof cbtPrinciplesData] ||
                   dbtSkillsData[expandedSection as keyof typeof dbtSkillsData])?.color === 'teal' ? 'bg-teal-500/10' :
                  (basicsData[expandedSection as keyof typeof basicsData] || 
                   cbtPrinciplesData[expandedSection as keyof typeof cbtPrinciplesData] ||
                   dbtSkillsData[expandedSection as keyof typeof dbtSkillsData])?.color === 'purple' ? 'bg-purple-500/10' :
                  'bg-blue-500/10'
                }`}>
                  {React.createElement((basicsData[expandedSection as keyof typeof basicsData] ||
                                     cbtPrinciplesData[expandedSection as keyof typeof cbtPrinciplesData] ||
                                     dbtSkillsData[expandedSection as keyof typeof dbtSkillsData])?.icon, {
                    className: `h-8 w-8 ${
                      (basicsData[expandedSection as keyof typeof basicsData] || 
                       cbtPrinciplesData[expandedSection as keyof typeof cbtPrinciplesData] ||
                       dbtSkillsData[expandedSection as keyof typeof dbtSkillsData])?.color === 'orange' ? 'text-orange-500' :
                      (basicsData[expandedSection as keyof typeof basicsData] || 
                       cbtPrinciplesData[expandedSection as keyof typeof cbtPrinciplesData] ||
                       dbtSkillsData[expandedSection as keyof typeof dbtSkillsData])?.color === 'teal' ? 'text-teal-500' :
                      (basicsData[expandedSection as keyof typeof basicsData] || 
                       cbtPrinciplesData[expandedSection as keyof typeof cbtPrinciplesData] ||
                       dbtSkillsData[expandedSection as keyof typeof dbtSkillsData])?.color === 'purple' ? 'text-purple-500' :
                      'text-blue-500'
                    }`
                  })}
                </div>
              )}
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {basicsData[expandedSection as keyof typeof basicsData]?.content ||
               cbtPrinciplesData[expandedSection as keyof typeof cbtPrinciplesData]?.content ||
               dbtSkillsData[expandedSection as keyof typeof dbtSkillsData]?.content}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatIsRecode;