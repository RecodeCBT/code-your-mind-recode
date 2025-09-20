import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, Zap, Target, Eye, CheckCircle, Stethoscope, GraduationCap, Shield, Lightbulb, Heart, Compass, Award, User, MessageSquare } from "lucide-react";
import VideoLogo from "@/components/VideoLogo";
import Navigation from "@/components/Navigation";
import anxietyImage from "@/assets/anxiety-brain.jpg";
import depressionImage from "@/assets/depression-cloud.jpg";
import procrastinationImage from "@/assets/procrastination-clock.jpg";
import angerImage from "@/assets/anger-volcano.jpg";
import brainCodeBackground from "@/assets/brain-code-background.jpg";
const Index = () => {
  const recodeSteps = [{
    step: "REVEAL",
    description: "Notice the hidden patterns that control your reactions and self-image",
    icon: Eye,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10"
  }, {
    step: "EVALUATE",
    description: "Use structured frameworks to explore whether these patterns are useful, kind, and evidence-based",
    icon: Target,
    color: "text-purple-600",
    bgColor: "bg-purple-600/10"
  }, {
    step: "CHALLENGE",
    description: "Interrogate old beliefs and emotional habits through guided questioning",
    icon: Zap,
    color: "text-blue-600",
    bgColor: "bg-blue-600/10"
  }, {
    step: "OBSERVE",
    description: "Build awareness of emotional and sensory experience without reactivity",
    icon: Brain,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10"
  }, {
    step: "DESIGN",
    description: "Create new thoughts, habits and perspectives that serve your goals",
    icon: Code,
    color: "text-purple-600",
    bgColor: "bg-purple-600/10"
  }, {
    step: "EMBED",
    description: "Strengthen these upgrades through daily practice and long-term reinforcement",
    icon: CheckCircle,
    color: "text-blue-600",
    bgColor: "bg-blue-600/10"
  }];
  const approaches = [{
    title: "CBT Precision",
    description: "Identify, challenge and rewrite cognitive distortions and limiting beliefs",
    icon: Target,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10"
  }, {
    title: "DBT Emotional Mastery",
    description: "Build emotional resilience through powerful tools like distress tolerance and radical acceptance",
    icon: Heart,
    color: "text-purple-600",
    bgColor: "bg-purple-600/10"
  }, {
    title: "Mindfulness Training",
    description: "Train attention, reduce overthinking, and reconnect with the present moment",
    icon: Compass,
    color: "text-blue-600",
    bgColor: "bg-blue-600/10"
  }, {
    title: "Neuroplasticity in Action",
    description: "Rewire your brain with intentional mental habits, using repetition and structured practice",
    icon: Brain,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10"
  }, {
    title: "Performance Psychology",
    description: "Learn behavioural frameworks that support growth, confidence and flexible goal-setting",
    icon: Lightbulb,
    color: "text-purple-600",
    bgColor: "bg-purple-600/10"
  }, {
    title: "Visualisation Techniques",
    description: "Harness the power of mental imagery to rehearse success and rewire limiting beliefs",
    icon: Eye,
    color: "text-blue-600",
    bgColor: "bg-blue-600/10"
  }];
  const conditions = [{
    title: "Anxiety & Stress",
    description: "Decode the fear algorithms that trigger anxiety responses and build new neural pathways for calm confidence.",
    image: anxietyImage
  }, {
    title: "Depression & Low Mood",
    description: "Rewrite negative thought loops and behavioral patterns that maintain depressive cycles.",
    image: depressionImage
  }, {
    title: "Procrastination & Avoidance",
    description: "Debug the mental scripts that cause task avoidance and implement productivity algorithms.",
    image: procrastinationImage
  }, {
    title: "Anger & Emotional Dysregulation",
    description: "Master emotional triggers and develop healthy response patterns for intense feelings.",
    image: angerImage
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section - Professional & Clean */}
      <section className="py-8 px-4 bg-gradient-to-b from-orange-50/30 via-purple-50/20 to-blue-50/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            {/* Enhanced Logo Section with Full-Width Circuitry */}
            <div className="relative flex items-center justify-center mb-12 h-96 overflow-hidden">
              
              {/* 360-degree circuitry background with enhanced mobile visibility */}
              <div className="absolute inset-0 w-full h-full">
                <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="-800 -400 1600 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                  
                  {/* Enhanced gradient definitions for better mobile visibility */}
                  <defs>
                    <linearGradient id="fadeRight" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(330 81% 60%)" stopOpacity="0.9"/>
                      <stop offset="40%" stopColor="hsl(330 81% 60%)" stopOpacity="0.7"/>
                      <stop offset="70%" stopColor="hsl(330 81% 60%)" stopOpacity="0.4"/>
                      <stop offset="100%" stopColor="hsl(330 81% 60%)" stopOpacity="0.1"/>
                    </linearGradient>
                    <linearGradient id="fadeLeft" x1="100%" y1="0%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="hsl(330 81% 60%)" stopOpacity="0.9"/>
                      <stop offset="40%" stopColor="hsl(330 81% 60%)" stopOpacity="0.7"/>
                      <stop offset="70%" stopColor="hsl(330 81% 60%)" stopOpacity="0.4"/>
                      <stop offset="100%" stopColor="hsl(330 81% 60%)" stopOpacity="0.1"/>
                    </linearGradient>
                    <linearGradient id="fadeTop" x1="0%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="hsl(330 81% 60%)" stopOpacity="0.9"/>
                      <stop offset="40%" stopColor="hsl(330 81% 60%)" stopOpacity="0.7"/>
                      <stop offset="70%" stopColor="hsl(330 81% 60%)" stopOpacity="0.4"/>
                      <stop offset="100%" stopColor="hsl(330 81% 60%)" stopOpacity="0.1"/>
                    </linearGradient>
                    <linearGradient id="fadeBottom" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="hsl(330 81% 60%)" stopOpacity="0.9"/>
                      <stop offset="40%" stopColor="hsl(330 81% 60%)" stopOpacity="0.7"/>
                      <stop offset="70%" stopColor="hsl(330 81% 60%)" stopOpacity="0.4"/>
                      <stop offset="100%" stopColor="hsl(330 81% 60%)" stopOpacity="0.1"/>
                    </linearGradient>
                    <linearGradient id="fadeDiagonal1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(330 81% 60%)" stopOpacity="0.6"/>
                      <stop offset="50%" stopColor="hsl(330 81% 60%)" stopOpacity="0.4"/>
                      <stop offset="100%" stopColor="hsl(330 81% 60%)" stopOpacity="0.1"/>
                    </linearGradient>
                    <linearGradient id="fadeDiagonal2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="hsl(330 81% 60%)" stopOpacity="0.6"/>
                      <stop offset="50%" stopColor="hsl(330 81% 60%)" stopOpacity="0.4"/>
                      <stop offset="100%" stopColor="hsl(330 81% 60%)" stopOpacity="0.1"/>
                    </linearGradient>
                  </defs>
                  
                  {/* Top circuits - vertical lines extending upward */}
                  <g stroke="url(#fadeTop)" fill="none">
                    <path d="M 0 -60 L 0 -120 L -15 -140 L 0 -160 L 0 -200 L -20 -220 L 0 -240 L 0 -300 L -25 -320 L 0 -360 L 0 -450 L -10 -520 L 0 -600 L -15 -680 L 0 -750 L 0 -800" strokeWidth="3"/>
                    <path d="M -20 -80 L -35 -130 L -15 -155 L -30 -180 L -45 -220 L -20 -245 L -40 -280 L -25 -340 L -50 -380 L -60 -450 L -45 -520 L -70 -600 L -55 -680 L -80 -750 L -60 -800" strokeWidth="2"/>
                    <path d="M 20 -80 L 35 -130 L 15 -155 L 30 -180 L 45 -220 L 20 -245 L 40 -280 L 25 -340 L 50 -380 L 60 -450 L 45 -520 L 70 -600 L 55 -680 L 80 -750 L 60 -800" strokeWidth="2"/>
                    <path d="M -5 -100 L -12 -170 L -8 -210 L -18 -260 L -12 -310 L -22 -380 L -15 -440 L -28 -520 L -20 -590 L -35 -670 L -25 -740 L -40 -800" strokeWidth="1.5"/>
                    <path d="M 5 -100 L 12 -170 L 8 -210 L 18 -260 L 12 -310 L 22 -380 L 15 -440 L 28 -520 L 20 -590 L 35 -670 L 25 -740 L 40 -800" strokeWidth="1.5"/>
                  </g>
                  
                  {/* Bottom circuits - vertical lines extending downward */}
                  <g stroke="url(#fadeBottom)" fill="none">
                    <path d="M 0 60 L 0 120 L -15 140 L 0 160 L 0 200 L -20 220 L 0 240 L 0 300 L -25 320 L 0 360 L 0 450 L -10 520 L 0 600 L -15 680 L 0 750 L 0 800" strokeWidth="3"/>
                    <path d="M -20 80 L -35 130 L -15 155 L -30 180 L -45 220 L -20 245 L -40 280 L -25 340 L -50 380 L -60 450 L -45 520 L -70 600 L -55 680 L -80 750 L -60 800" strokeWidth="2"/>
                    <path d="M 20 80 L 35 130 L 15 155 L 30 180 L 45 220 L 20 245 L 40 280 L 25 340 L 50 380 L 60 450 L 45 520 L 70 600 L 55 680 L 80 750 L 60 800" strokeWidth="2"/>
                  </g>
                  
                  {/* Right side circuits extending to screen edge */}
                  <g stroke="url(#fadeRight)" fill="none">
                    <path d="M 60 0 L 120 0 L 140 -15 L 160 0 L 200 0 L 220 -20 L 240 0 L 300 0 L 320 -25 L 360 0 L 450 0 L 520 -10 L 600 0 L 680 -15 L 750 0 L 800 0" strokeWidth="4"/>
                    <path d="M 60 -20 L 130 -40 L 155 -55 L 180 -35 L 220 -50 L 245 -65 L 280 -40 L 340 -60 L 380 -45 L 450 -70 L 520 -80 L 600 -65 L 680 -90 L 750 -75 L 800 -100" strokeWidth="3"/>
                    <path d="M 60 20 L 130 40 L 155 55 L 180 35 L 220 50 L 245 65 L 280 40 L 340 60 L 380 45 L 450 70 L 520 80 L 600 65 L 680 90 L 750 75 L 800 100" strokeWidth="3"/>
                    <path d="M 80 -35 L 150 -60 L 180 -75 L 220 -65 L 280 -80 L 320 -95 L 360 -70 L 420 -100 L 480 -80 L 550 -110 L 620 -95 L 700 -120 L 780 -105 L 800 -140" strokeWidth="2.5"/>
                    <path d="M 80 35 L 150 60 L 180 75 L 220 65 L 280 80 L 320 95 L 360 70 L 420 100 L 480 80 L 550 110 L 620 95 L 700 120 L 780 105 L 800 140" strokeWidth="2.5"/>
                  </g>
                  
                  {/* Left side circuits extending to screen edge */}
                  <g stroke="url(#fadeLeft)" fill="none">
                    <path d="M -60 0 L -120 0 L -140 -15 L -160 0 L -200 0 L -220 -20 L -240 0 L -300 0 L -320 -25 L -360 0 L -450 0 L -520 -10 L -600 0 L -680 -15 L -750 0 L -800 0" strokeWidth="4"/>
                    <path d="M -60 -20 L -130 -40 L -155 -55 L -180 -35 L -220 -50 L -245 -65 L -280 -40 L -340 -60 L -380 -45 L -450 -70 L -520 -80 L -600 -65 L -680 -90 L -750 -75 L -800 -100" strokeWidth="3"/>
                    <path d="M -60 20 L -130 40 L -155 55 L -180 35 L -220 50 L -245 65 L -280 40 L -340 60 L -380 45 L -450 70 L -520 80 L -600 65 L -680 90 L -750 75 L -800 100" strokeWidth="3"/>
                    <path d="M -80 -35 L -150 -60 L -180 -75 L -220 -65 L -280 -80 L -320 -95 L -360 -70 L -420 -100 L -480 -80 L -550 -110 L -620 -95 L -700 -120 L -780 -105 L -800 -140" strokeWidth="2.5"/>
                    <path d="M -80 35 L -150 60 L -180 75 L -220 65 L -280 80 L -320 95 L -360 70 L -420 100 L -480 80 L -550 110 L -620 95 L -700 120 L -780 105 L -800 140" strokeWidth="2.5"/>
                  </g>
                  
                  {/* Diagonal circuits - top-left to bottom-right */}
                  <g stroke="url(#fadeDiagonal1)" fill="none">
                    <path d="M -400 -300 L -300 -200 L -200 -100 L -100 0 L 0 100 L 100 200 L 200 300 L 400 400" strokeWidth="2"/>
                    <path d="M -350 -350 L -250 -250 L -150 -150 L -50 -50 L 50 50 L 150 150 L 250 250 L 350 350" strokeWidth="1.5"/>
                    <path d="M -300 -400 L -180 -280 L -60 -160 L 60 -40 L 180 80 L 300 200 L 420 320" strokeWidth="1.5"/>
                  </g>
                  
                  {/* Diagonal circuits - top-right to bottom-left */}
                  <g stroke="url(#fadeDiagonal2)" fill="none">
                    <path d="M 400 -300 L 300 -200 L 200 -100 L 100 0 L 0 100 L -100 200 L -200 300 L -400 400" strokeWidth="2"/>
                    <path d="M 350 -350 L 250 -250 L 150 -150 L 50 -50 L -50 50 L -150 150 L -250 250 L -350 350" strokeWidth="1.5"/>
                    <path d="M 300 -400 L 180 -280 L 60 -160 L -60 -40 L -180 80 L -300 200 L -420 320" strokeWidth="1.5"/>
                  </g>
                  
                  {/* Enhanced circuit nodes with better mobile visibility */}
                  <g fill="hsl(330 81% 60%)">
                    {/* Core nodes near center */}
                    <circle cx="120" cy="0" r="5" opacity="1"/>
                    <circle cx="-120" cy="0" r="5" opacity="1"/>
                    <circle cx="0" cy="120" r="5" opacity="1"/>
                    <circle cx="0" cy="-120" r="5" opacity="1"/>
                    
                    {/* Secondary ring */}
                    <circle cx="200" cy="0" r="4" opacity="0.9"/>
                    <circle cx="-200" cy="0" r="4" opacity="0.9"/>
                    <circle cx="0" cy="200" r="4" opacity="0.9"/>
                    <circle cx="0" cy="-200" r="4" opacity="0.9"/>
                    
                    {/* Diagonal nodes */}
                    <circle cx="85" cy="85" r="3.5" opacity="0.8"/>
                    <circle cx="-85" cy="-85" r="3.5" opacity="0.8"/>
                    <circle cx="85" cy="-85" r="3.5" opacity="0.8"/>
                    <circle cx="-85" cy="85" r="3.5" opacity="0.8"/>
                    
                    {/* Outer ring with fading */}
                    <circle cx="300" cy="0" r="3" opacity="0.7"/>
                    <circle cx="-300" cy="0" r="3" opacity="0.7"/>
                    <circle cx="450" cy="0" r="2.5" opacity="0.5"/>
                    <circle cx="-450" cy="0" r="2.5" opacity="0.5"/>
                    <circle cx="600" cy="0" r="2" opacity="0.3"/>
                    <circle cx="-600" cy="0" r="2" opacity="0.3"/>
                  </g>
                  
                  {/* Enhanced electrical pulses - 360 degree movement */}
                  {/* Horizontal pulses */}
                  <circle r="8" fill="hsl(330 81% 70%)" opacity="1">
                    <animateMotion dur="3.0s" repeatCount="indefinite" path="M 60 0 L 800 0"/>
                    <animate attributeName="opacity" values="1; 1; 0.5; 1; 0" dur="3.0s" repeatCount="indefinite"/>
                  </circle>
                  <circle r="8" fill="hsl(330 81% 70%)" opacity="1">
                    <animateMotion dur="3.0s" repeatCount="indefinite" path="M -60 0 L -800 0"/>
                    <animate attributeName="opacity" values="1; 1; 0.5; 1; 0" dur="3.0s" repeatCount="indefinite"/>
                  </circle>
                  
                  {/* Vertical pulses */}
                  <circle r="6" fill="hsl(330 81% 70%)" opacity="0.9">
                    <animateMotion dur="3.5s" repeatCount="indefinite" path="M 0 -60 L 0 -800"/>
                    <animate attributeName="opacity" values="0.9; 0.9; 0.4; 0.9; 0" dur="3.5s" repeatCount="indefinite"/>
                  </circle>
                  <circle r="6" fill="hsl(330 81% 70%)" opacity="0.9">
                    <animateMotion dur="3.5s" repeatCount="indefinite" path="M 0 60 L 0 800"/>
                    <animate attributeName="opacity" values="0.9; 0.9; 0.4; 0.9; 0" dur="3.5s" repeatCount="indefinite"/>
                  </circle>
                  
                  {/* Diagonal pulses */}
                  <circle r="5" fill="hsl(330 81% 70%)" opacity="0.8">
                    <animateMotion dur="4.0s" repeatCount="indefinite" path="M -400 -300 L 400 400"/>
                    <animate attributeName="opacity" values="0.8; 0.8; 0.3; 0.8; 0" dur="4.0s" repeatCount="indefinite"/>
                  </circle>
                  <circle r="5" fill="hsl(330 81% 70%)" opacity="0.8">
                    <animateMotion dur="4.2s" repeatCount="indefinite" path="M 400 -300 L -400 400"/>
                    <animate attributeName="opacity" values="0.8; 0.8; 0.3; 0.8; 0" dur="4.2s" repeatCount="indefinite"/>
                  </circle>
                  
                  {/* Additional angled pulses for full coverage */}
                  <circle r="6" fill="hsl(330 81% 70%)" opacity="0.7">
                    <animateMotion dur="3.8s" repeatCount="indefinite" path="M 80 -25 L 800 -120"/>
                    <animate attributeName="opacity" values="0.7; 0.7; 0.3; 0.7; 0" dur="3.8s" repeatCount="indefinite"/>
                  </circle>
                  <circle r="6" fill="hsl(330 81% 70%)" opacity="0.7">
                    <animateMotion dur="3.6s" repeatCount="indefinite" path="M 80 25 L 800 120"/>
                    <animate attributeName="opacity" values="0.7; 0.7; 0.3; 0.7; 0" dur="3.6s" repeatCount="indefinite"/>
                  </circle>
                  <circle r="6" fill="hsl(330 81% 70%)" opacity="0.7">
                    <animateMotion dur="3.4s" repeatCount="indefinite" path="M -80 -25 L -800 -120"/>
                    <animate attributeName="opacity" values="0.7; 0.7; 0.3; 0.7; 0" dur="3.4s" repeatCount="indefinite"/>
                  </circle>
                  <circle r="6" fill="hsl(330 81% 70%)" opacity="0.7">
                    <animateMotion dur="3.9s" repeatCount="indefinite" path="M -80 25 L -800 120"/>
                    <animate attributeName="opacity" values="0.7; 0.7; 0.3; 0.7; 0" dur="3.9s" repeatCount="indefinite"/>
                  </circle>
                </svg>
              </div>
              
            {/* Enhanced Logo Container - responsive sizing */}
            <div className="relative z-10">
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-108 md:h-108 flex items-center justify-center mx-auto">
                <div className="w-full h-full rounded-full overflow-hidden bg-transparent">
                  <img 
                    src="/src/assets/recode-brain-logo.png" 
                    alt="RECODE CBT - Evidence-Based Therapy"
                    className="w-full h-full object-cover" 
                    style={{ filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.1))' }}
                  />
                </div>
              </div>
            </div>
            </div>
            
            {/* Tagline under logo */}
            <div className="text-center mb-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 whitespace-nowrap">
                Your Coding | Can Change
              </h3>
            </div>
            
            {/* Professional Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight text-center">
                <div className="flex flex-col items-center">
                  <span>Neural-recoding</span>
                  <span>through</span>
                  <span>Behavioural Science</span>
                </div>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 font-light max-w-4xl mx-auto">
                Evidence-based therapy styled on CBT + DBT models, to transform automatic thoughts, feelings, and emotional reactions - practiced like a new skill, to re-program the mind.<br/>
                <span className="font-medium text-gray-800">One on One and Doctor-delivered.</span>
              </h2>
            </div>
            
            {/* Professional CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 px-2">
              <Link to="/services#top">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto text-base px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                >
                  Book a Session
                </Button>
              </Link>
              <Link to="/dr-carson#top">
                <Button 
                  variant="outline"
                  size="lg" 
                  className="w-full sm:w-auto text-base px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold"
                >
                  Learn More
                </Button>
              </Link>
            </div>
            
            {/* Professional Credentials - Single Row */}
            <div className="bg-gray-50 rounded-lg p-4 mt-8 max-w-3xl mx-auto">
              <div className="flex justify-center items-center gap-8">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                  <div className="text-center">
                    <p className="font-semibold text-gray-900 text-sm">Qualified GP</p>
                    <p className="text-xs text-gray-600">Registered Practitioner</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <div className="text-center">
                    <p className="font-semibold text-gray-900 text-sm">CBT Accredited</p>
                    <p className="text-xs text-gray-600">Professional Diploma</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Stethoscope className="h-6 w-6 text-blue-600" />
                  <div className="text-center">
                    <p className="font-semibold text-gray-900 text-sm">Remote Sessions</p>
                    <p className="text-xs text-gray-600">Flexible Scheduling</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Button - Top */}
      <section className="py-4 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <Link to="/testimonials#top">
              <Button variant="secondary" size="lg" className="text-sm sm:text-lg px-4 sm:px-8 py-2 sm:py-3">
                ⭐ Read Our Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Us Button - Between Hero and Conditions */}
      <section className="py-6 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <Link to="/contact#top">
              <Button size="lg" className="text-sm sm:text-lg px-4 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white shadow-lg">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mental Health Conditions Section */}
      <section className="py-8 px-4 bg-gradient-to-r from-secondary/5 via-orange-500/5 to-purple-600/5 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-orange-500/15 to-purple-600/15 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-blue-600/15 to-orange-500/15 rounded-lg rotate-45 blur-xl"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Conditions We Address</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Your mind runs on patterns—some helpful, others harmful. We help you identify and rewrite 
              the mental code behind common psychological challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {conditions.map((condition, index) => {
            const conditionLinks = ["/conditions/anxiety-panic#top", "/conditions/depression-mood#top", "/conditions/procrastination#top", "/conditions/anger-emotional#top"];
            return <Link key={index} to={conditionLinks[index]}>
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    <div className="relative h-48 overflow-hidden">
                      <img src={condition.image} alt={condition.title} className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-white font-bold text-xl">{condition.title}</h3>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <CardDescription className="text-base">
                        {condition.description} <span className="text-primary font-medium">...read more</span>
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>;
          })}
          </div>
        </div>
      </section>

      {/* Corporate Seminars Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-muted/10 via-orange-500/5 to-purple-600/10 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-600/15 to-orange-500/15 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-purple-600/15 to-orange-500/15 rounded-lg rotate-45 blur-xl"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 border-4 border-double border-gradient-to-r from-orange-500 via-purple-600 to-blue-600 bg-gradient-to-r from-orange-500/10 via-purple-600/10 to-blue-600/10 rounded-xl px-6 py-4 inline-block shadow-lg">
              New: Corporate Training & Staff Wellness
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Transform your workplace culture with ReCODE methodology. We offer specialized corporate seminars 
              and staff wellness sessions designed to enhance mental resilience, reduce workplace stress, and 
              improve team performance through evidence-based psychological training.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 text-center">
                <Brain className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Stress Management Workshops</h3>
                <p className="text-muted-foreground text-sm">Team sessions focused on practical stress reduction techniques</p>
              </Card>
              <Card className="p-6 text-center">
                <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Performance Psychology</h3>
                <p className="text-muted-foreground text-sm">Enhance focus, productivity and goal achievement strategies</p>
              </Card>
              <Card className="p-6 text-center">
                <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Emotional Resilience Training</h3>
                <p className="text-muted-foreground text-sm">Build team emotional intelligence and workplace wellbeing</p>
              </Card>
            </div>
            <Link to="/corporate-contact#top">
              <Button size="lg" className="text-sm sm:text-lg px-4 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg">
                Enquire About Corporate Training
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ChatCBT Coming Soon Section - Compact & Distinct */}
      <section className="py-12 px-4 border-y-2 border-gradient-to-r from-orange-500/20 via-purple-600/20 to-blue-600/20 bg-gradient-to-r from-orange-500/10 via-purple-600/10 to-blue-600/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-purple-600/5 to-blue-600/5"></div>
        <div className="absolute top-5 right-10 w-16 h-16 bg-gradient-to-br from-orange-500/20 to-purple-600/20 rounded-full blur-lg"></div>
        <div className="absolute bottom-5 left-10 w-16 h-16 bg-gradient-to-br from-blue-600/20 to-orange-500/20 rounded-lg rotate-45 blur-lg"></div>
        
        <div className="container mx-auto max-w-3xl relative z-10">
          <div className="text-center">
            {/* Compact circular logo */}
            <div className="w-36 h-36 mx-auto mb-4 bg-gradient-to-br from-orange-50/90 to-purple-50/90 dark:from-orange-950/60 dark:to-purple-950/60 rounded-full p-4 backdrop-blur-md shadow-xl border-2 border-gradient-to-br from-orange-500/30 to-purple-600/30">
              <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full p-3 flex items-center justify-center">
                <img src="/lovable-uploads/b976013c-0e4b-4791-b936-9d3f45544770.png" alt="ReCODE: ChatCBT Logo" className="w-full h-full object-contain" />
              </div>
            </div>
            
            {/* Compact title with distinct styling */}
            <div className="bg-gradient-to-r from-white/80 to-white/60 dark:from-gray-900/80 dark:to-gray-900/60 backdrop-blur-sm rounded-xl p-6 mb-4 border border-gradient-to-r from-orange-500/30 to-purple-600/30 shadow-lg">
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                ReCODE: ChatCBT
              </h2>
              <div className="flex items-center justify-center gap-2 mb-3">
                <MessageSquare className="h-5 w-5 text-orange-500" />
                <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent font-semibold">
                  COMING SOON
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                AI-powered CBT support for real-time cognitive distortion assessment
              </p>
              <Link to="/chatcbt-coming-soon#top">
                <Button size="sm" className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white shadow-md">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Credentials Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-24 h-24 bg-gradient-to-br from-orange-500/15 to-blue-600/15 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-10 w-20 h-20 bg-gradient-to-br from-purple-600/15 to-orange-500/15 rounded-lg rotate-45 blur-xl animate-float"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Professional Care from a Practicing Physician</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center border-t-4 border-t-orange-500/50">
                <GraduationCap className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Fully Qualified, GMC Registered and Practicing General Practitioner</h3>
                <p className="text-muted-foreground">Comprehensive medical training and ongoing clinical practice</p>
              </Card>
              <Card className="p-6 text-center border-t-4 border-t-purple-600/50">
                <Brain className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Accredited Diploma in CBT</h3>
                <p className="text-muted-foreground">Therapy styled using the CBT model, using neuroscience and taking advantage of the brains natural neuroplastic abilities </p>
              </Card>
              <Card className="p-6 text-center border-t-4 border-t-blue-600/50">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Secure & Confidential</h3>
                <p className="text-muted-foreground">Professional standards and patient privacy guaranteed</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Fresha Booking Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground relative">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Book Your Session</h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule your personalized ReCODE consultation through our secure booking system
          </p>
          
          {/* Fresha Booking Embed Placeholder */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-6">
            <p className="text-lg mb-4">Professional ReCODE Sessions</p>
            <p className="text-sm opacity-75 mb-4">It starts with one click </p>
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

      {/* Disclaimer */}
      <section className="py-12 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2 font-medium">Important Disclaimer</p>
            <p className="mb-4">
              ReCODE represents a new therapeutic approach that integrates elements of CBT and DBT methodologies 
              within an innovative framework. While based on evidence-based practices, ReCODE is not classical 
              CBT or DBT therapy. All sessions are conducted by a licensed medical doctor. This service is not 
              a substitute for emergency mental health care or crisis intervention.
            </p>
            <p className="mb-4">If you are thinking about hurting yourself please click below:</p>
            <a href="https://www.samaritans.org" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button variant="destructive" size="sm">
                Get Crisis Support - Samaritans
              </Button>
            </a>
            <div className="border-t border-muted-foreground/20">
            <Link to="/policies#top" className="text-xs text-muted-foreground hover:text-primary underline-offset-4 hover:underline">
              Privacy Policy & Terms
            </Link>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;