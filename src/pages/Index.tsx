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
import recodeCircuitLogo from "@/assets/recode-circuit-logo.png";

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
            {/* Circuit Background with Proper Circuit Patterns */}
            <div className="relative flex items-center justify-center mb-12 h-96 overflow-hidden">
              
              {/* Circuit Background SVG */}
              <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                <svg className="w-full h-full max-w-none" preserveAspectRatio="xMidYMid meet" viewBox="-600 -300 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                  
                  <defs>
                    {/* Circuit gradient definitions */}
                    <linearGradient id="circuitGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(25 95% 53%)" stopOpacity="0.8"/>
                      <stop offset="50%" stopColor="hsl(280 81% 60%)" stopOpacity="0.9"/>
                      <stop offset="100%" stopColor="hsl(217 91% 60%)" stopOpacity="0.8"/>
                    </linearGradient>
                    
                    <linearGradient id="circuitGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="hsl(217 91% 60%)" stopOpacity="0.8"/>
                      <stop offset="50%" stopColor="hsl(25 95% 53%)" stopOpacity="0.9"/>
                      <stop offset="100%" stopColor="hsl(280 81% 60%)" stopOpacity="0.8"/>
                    </linearGradient>

                    <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="hsl(25 95% 53%)" stopOpacity="1"/>
                      <stop offset="50%" stopColor="hsl(280 81% 60%)" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="hsl(217 91% 60%)" stopOpacity="0.6"/>
                    </radialGradient>

                    {/* Pulse paths for circuit traces - more complex routing */}
                    <path id="circuitPath1" d="M -580 0 L -400 0 L -400 -80 L -200 -80 L -200 -160 L 0 -160 L 0 -80 L 200 -80 L 200 -160 L 400 -160 L 400 0 L 580 0" fill="none"/>
                    <path id="circuitPath2" d="M 0 -280 L 0 -200 L 120 -200 L 120 -120 L 240 -120 L 240 -40 L 360 -40 L 360 40 L 480 40 L 480 120 L 580 120" fill="none"/>
                    <path id="circuitPath3" d="M 0 280 L 0 200 L -120 200 L -120 120 L -240 120 L -240 40 L -360 40 L -360 -40 L -480 -40 L -480 -120 L -580 -120" fill="none"/>
                    <path id="circuitPath4" d="M 580 0 L 480 0 L 480 80 L 360 80 L 360 160 L 240 160 L 240 240 L 120 240 L 120 280 L 0 280" fill="none"/>
                    <path id="circuitPath5" d="M -580 0 L -480 0 L -480 -80 L -360 -80 L -360 -160 L -240 -160 L -240 -240 L -120 -240 L -120 -280 L 0 -280" fill="none"/>
                    <path id="circuitPath6" d="M 0 -280 L 140 -280 L 140 -180 L 280 -180 L 280 -80 L 420 -80 L 420 20 L 560 20 L 560 120 L 580 120" fill="none"/>
                    <path id="circuitPath7" d="M 0 280 L -140 280 L -140 180 L -280 180 L -280 80 L -420 80 L -420 -20 L -560 -20 L -560 -120 L -580 -120" fill="none"/>
                    <path id="circuitPath8" d="M 580 -160 L 440 -160 L 440 -60 L 300 -60 L 300 40 L 160 40 L 160 140 L 20 140 L 20 240 L 0 240" fill="none"/>
                    <path id="circuitPath9" d="M -580 160 L -440 160 L -440 60 L -300 60 L -300 -40 L -160 -40 L -160 -140 L -20 -140 L -20 -240 L 0 -240" fill="none"/>
                    <path id="circuitPath10" d="M 300 -280 L 300 -200 L 380 -200 L 380 -120 L 460 -120 L 460 -40 L 540 -40 L 540 40 L 580 40" fill="none"/>
                    <path id="circuitPath11" d="M -300 280 L -300 200 L -380 200 L -380 120 L -460 120 L -460 40 L -540 40 L -540 -40 L -580 -40" fill="none"/>
                    <path id="circuitPath12" d="M 0 0 L 80 0 L 80 -60 L 160 -60 L 160 -120 L 240 -120 L 240 -180 L 320 -180 L 320 -240 L 400 -240" fill="none"/>
                  </defs>
                  
                  {/* Main Circuit Traces */}
                  <g stroke="url(#circuitGradient1)" strokeWidth="3" fill="none">
                    
                    {/* Horizontal main traces */}
                    <line x1="-580" y1="0" x2="-400" y2="0"/>
                    <line x1="-400" y1="0" x2="-400" y2="-80"/>
                    <line x1="-400" y1="-80" x2="-200" y2="-80"/>
                    <line x1="-200" y1="-80" x2="-200" y2="-160"/>
                    <line x1="-200" y1="-160" x2="0" y2="-160"/>
                    <line x1="0" y1="-160" x2="0" y2="-80"/>
                    <line x1="0" y1="-80" x2="200" y2="-80"/>
                    <line x1="200" y1="-80" x2="200" y2="-160"/>
                    <line x1="200" y1="-160" x2="400" y2="-160"/>
                    <line x1="400" y1="-160" x2="400" y2="0"/>
                    <line x1="400" y1="0" x2="580" y2="0"/>
                    
                    {/* Vertical main traces */}
                    <line x1="0" y1="-280" x2="0" y2="-200"/>
                    <line x1="0" y1="-200" x2="120" y2="-200"/>
                    <line x1="120" y1="-200" x2="120" y2="-120"/>
                    <line x1="120" y1="-120" x2="240" y2="-120"/>
                    <line x1="240" y1="-120" x2="240" y2="-40"/>
                    <line x1="240" y1="-40" x2="360" y2="-40"/>
                    <line x1="360" y1="-40" x2="360" y2="40"/>
                    <line x1="360" y1="40" x2="480" y2="40"/>
                    <line x1="480" y1="40" x2="480" y2="120"/>
                    <line x1="480" y1="120" x2="580" y2="120"/>
                    
                    {/* Mirror traces */}
                    <line x1="0" y1="280" x2="0" y2="200"/>
                    <line x1="0" y1="200" x2="-120" y2="200"/>
                    <line x1="-120" y1="200" x2="-120" y2="120"/>
                    <line x1="-120" y1="120" x2="-240" y2="120"/>
                    <line x1="-240" y1="120" x2="-240" y2="40"/>
                    <line x1="-240" y1="40" x2="-360" y2="40"/>
                    <line x1="-360" y1="40" x2="-360" y2="-40"/>
                    <line x1="-360" y1="-40" x2="-480" y2="-40"/>
                    <line x1="-480" y1="-40" x2="-480" y2="-120"/>
                    <line x1="-480" y1="-120" x2="-580" y2="-120"/>
                    
                    {/* Additional routing layers */}
                    <line x1="0" y1="-280" x2="140" y2="-280"/>
                    <line x1="140" y1="-280" x2="140" y2="-180"/>
                    <line x1="140" y1="-180" x2="280" y2="-180"/>
                    <line x1="280" y1="-180" x2="280" y2="-80"/>
                    <line x1="280" y1="-80" x2="420" y2="-80"/>
                    <line x1="420" y1="-80" x2="420" y2="20"/>
                    <line x1="420" y1="20" x2="560" y2="20"/>
                    <line x1="560" y1="20" x2="560" y2="120"/>
                    <line x1="560" y1="120" x2="580" y2="120"/>
                    
                    {/* More complex routing */}
                    <line x1="300" y1="-280" x2="300" y2="-200"/>
                    <line x1="300" y1="-200" x2="380" y2="-200"/>
                    <line x1="380" y1="-200" x2="380" y2="-120"/>
                    <line x1="380" y1="-120" x2="460" y2="-120"/>
                    <line x1="460" y1="-120" x2="460" y2="-40"/>
                    <line x1="460" y1="-40" x2="540" y2="-40"/>
                    <line x1="540" y1="-40" x2="540" y2="40"/>
                    <line x1="540" y1="40" x2="580" y2="40"/>
                    
                    {/* Fine detail traces */}
                    <line x1="80" y1="0" x2="80" y2="-60"/>
                    <line x1="80" y1="-60" x2="160" y2="-60"/>
                    <line x1="160" y1="-60" x2="160" y2="-120"/>
                    <line x1="160" y1="-120" x2="240" y2="-120"/>
                    <line x1="240" y1="-120" x2="240" y2="-180"/>
                    <line x1="240" y1="-180" x2="320" y2="-180"/>
                    <line x1="320" y1="-180" x2="320" y2="-240"/>
                    <line x1="320" y1="-240" x2="400" y2="-240"/>
                    
                    {/* Peripheral branches */}
                    <line x1="480" y1="160" x2="520" y2="160"/>
                    <line x1="520" y1="160" x2="520" y2="200"/>
                    <line x1="520" y1="200" x2="560" y2="200"/>
                    <line x1="560" y1="200" x2="560" y2="240"/>
                    <line x1="560" y1="240" x2="580" y2="240"/>
                    
                    <line x1="-480" y1="160" x2="-520" y2="160"/>
                    <line x1="-520" y1="160" x2="-520" y2="200"/>
                    <line x1="-520" y1="200" x2="-560" y2="200"/>
                    <line x1="-560" y1="200" x2="-560" y2="240"/>
                    <line x1="-560" y1="240" x2="-580" y2="240"/>
                    
                    <line x1="480" y1="-160" x2="520" y2="-160"/>
                    <line x1="520" y1="-160" x2="520" y2="-200"/>
                    <line x1="520" y1="-200" x2="560" y2="-200"/>
                    <line x1="560" y1="-200" x2="560" y2="-240"/>
                    <line x1="560" y1="-240" x2="580" y2="-240"/>
                    
                    <line x1="-480" y1="-160" x2="-520" y2="-160"/>
                    <line x1="-520" y1="-160" x2="-520" y2="-200"/>
                    <line x1="-520" y1="-200" x2="-560" y2="-200"/>
                    <line x1="-560" y1="-200" x2="-560" y2="-240"/>
                    <line x1="-560" y1="-240" x2="-580" y2="-240"/>
                  </g>
                  
                  {/* Secondary layer with different stroke width */}
                  <g stroke="url(#circuitGradient2)" strokeWidth="2" fill="none" opacity="0.7">
                    <line x1="160" y1="80" x2="160" y2="160"/>
                    <line x1="160" y1="160" x2="240" y2="160"/>
                    <line x1="240" y1="160" x2="240" y2="240"/>
                    <line x1="240" y1="240" x2="320" y2="240"/>
                    <line x1="320" y1="240" x2="320" y2="280"/>
                    
                    <line x1="-160" y1="80" x2="-160" y2="160"/>
                    <line x1="-160" y1="160" x2="-240" y2="160"/>
                    <line x1="-240" y1="160" x2="-240" y2="240"/>
                    <line x1="-240" y1="240" x2="-320" y2="240"/>
                    <line x1="-320" y1="240" x2="-320" y2="280"/>
                    
                    <line x1="160" y1="-80" x2="160" y2="-160"/>
                    <line x1="160" y1="-160" x2="240" y2="-160"/>
                    <line x1="240" y1="-160" x2="240" y2="-240"/>
                    <line x1="240" y1="-240" x2="320" y2="-240"/>
                    <line x1="320" y1="-240" x2="320" y2="-280"/>
                    
                    <line x1="-160" y1="-80" x2="-160" y2="-160"/>
                    <line x1="-160" y1="-160" x2="-240" y2="-160"/>
                    <line x1="-240" y1="-160" x2="-240" y2="-240"/>
                    <line x1="-240" y1="-240" x2="-320" y2="-240"/>
                    <line x1="-320" y1="-240" x2="-320" y2="-280"/>
                  </g>
                  
                  {/* Circuit Nodes/Pads */}
                  <g fill="url(#nodeGradient)">
                    {/* Major junction nodes - square pads */}
                    <rect x="-405" y="-5" width="10" height="10" rx="2"/>
                    <rect x="-205" y="-85" width="10" height="10" rx="2"/>
                    <rect x="-5" y="-165" width="10" height="10" rx="2"/>
                    <rect x="195" y="-85" width="10" height="10" rx="2"/>
                    <rect x="395" y="-5" width="10" height="10" rx="2"/>
                    
                    <rect x="115" y="-205" width="10" height="10" rx="2"/>
                    <rect x="235" y="-125" width="10" height="10" rx="2"/>
                    <rect x="355" y="-45" width="10" height="10" rx="2"/>
                    <rect x="475" y="35" width="10" height="10" rx="2"/>
                    
                    <rect x="-125" y="195" width="10" height="10" rx="2"/>
                    <rect x="-245" y="115" width="10" height="10" rx="2"/>
                    <rect x="-365" y="35" width="10" height="10" rx="2"/>
                    <rect x="-485" y="-45" width="10" height="10" rx="2"/>
                    
                    <rect x="135" y="-285" width="10" height="10" rx="2"/>
                    <rect x="275" y="-185" width="10" height="10" rx="2"/>
                    <rect x="415" y="-85" width="10" height="10" rx="2"/>
                    <rect x="555" y="15" width="10" height="10" rx="2"/>
                    
                    <rect x="295" y="-205" width="10" height="10" rx="2"/>
                    <rect x="375" y="-125" width="10" height="10" rx="2"/>
                    <rect x="455" y="-45" width="10" height="10" rx="2"/>
                    <rect x="535" y="35" width="10" height="10" rx="2"/>
                    
                    <rect x="75" y="-5" width="10" height="10" rx="2"/>
                    <rect x="155" y="-65" width="10" height="10" rx="2"/>
                    <rect x="235" y="-125" width="10" height="10" rx="2"/>
                    <rect x="315" y="-185" width="10" height="10" rx="2"/>
                    
                    {/* Smaller round nodes */}
                    <circle cx="140" cy="-280" r="4" opacity="0.8"/>
                    <circle cx="280" cy="-180" r="4" opacity="0.8"/>
                    <circle cx="420" cy="-80" r="4" opacity="0.8"/>
                    <circle cx="560" cy="20" r="4" opacity="0.8"/>
                    
                    <circle cx="-140" cy="280" r="4" opacity="0.8"/>
                    <circle cx="-280" cy="180" r="4" opacity="0.8"/>
                    <circle cx="-420" cy="80" r="4" opacity="0.8"/>
                    <circle cx="-560" cy="-20" r="4" opacity="0.8"/>
                    
                    <circle cx="300" cy="-200" r="4" opacity="0.8"/>
                    <circle cx="380" cy="-120" r="4" opacity="0.8"/>
                    <circle cx="460" cy="-40" r="4" opacity="0.8"/>
                    <circle cx="540" cy="40" r="4" opacity="0.8"/>
                    
                    {/* Tiny connection points */}
                    <circle cx="160" cy="80" r="2" opacity="0.6"/>
                    <circle cx="240" cy="160" r="2" opacity="0.6"/>
                    <circle cx="320" cy="240" r="2" opacity="0.6"/>
                    <circle cx="-160" cy="80" r="2" opacity="0.6"/>
                    <circle cx="-240" cy="160" r="2" opacity="0.6"/>
                    <circle cx="-320" cy="240" r="2" opacity="0.6"/>
                    
                    <circle cx="160" cy="-80" r="2" opacity="0.6"/>
                    <circle cx="240" cy="-160" r="2" opacity="0.6"/>
                    <circle cx="320" cy="-240" r="2" opacity="0.6"/>
                    <circle cx="-160" cy="-80" r="2" opacity="0.6"/>
                    <circle cx="-240" cy="-160" r="2" opacity="0.6"/>
                    <circle cx="-320" cy="-240" r="2" opacity="0.6"/>
                  </g>
                  
                  {/* Electrical pulses moving along traces - More pulses with varied colors */}
                  {/* Main bright pulses */}
                  <circle r="6" fill="hsl(190 95% 50%)" opacity="0.9">
                    <animateMotion dur="4s" repeatCount="indefinite">
                      <mpath href="#circuitPath1"/>
                    </animateMotion>
                    <animate attributeName="opacity" values="0;1;0.8;0" dur="4s" repeatCount="indefinite"/>
                  </circle>
                  
                  <circle r="5" fill="hsl(280 80% 70%)" opacity="0.8">
                    <animateMotion dur="5s" repeatCount="indefinite" begin="1s">
                      <mpath href="#circuitPath2"/>
                    </animateMotion>
                    <animate attributeName="opacity" values="0;0.8;1;0" dur="5s" repeatCount="indefinite" begin="1s"/>
                  </circle>
                  
                  <circle r="5" fill="hsl(45 90% 60%)" opacity="0.9">
                    <animateMotion dur="6s" repeatCount="indefinite" begin="2s">
                      <mpath href="#circuitPath3"/>
                    </animateMotion>
                    <animate attributeName="opacity" values="0;1;0.7;0" dur="6s" repeatCount="indefinite" begin="2s"/>
                  </circle>
                  
                  <circle r="6" fill="hsl(120 70% 50%)" opacity="0.8">
                    <animateMotion dur="4.5s" repeatCount="indefinite" begin="0.5s">
                      <mpath href="#circuitPath4"/>
                    </animateMotion>
                    <animate attributeName="opacity" values="0;0.9;0.6;0" dur="4.5s" repeatCount="indefinite" begin="0.5s"/>
                  </circle>
                  
                  <circle r="5" fill="hsl(300 85% 65%)" opacity="0.9">
                    <animateMotion dur="5s" repeatCount="indefinite" begin="3s">
                      <mpath href="#circuitPath5"/>
                    </animateMotion>
                    <animate attributeName="opacity" values="0;0.8;1;0" dur="5s" repeatCount="indefinite" begin="3s"/>
                  </circle>
                  
                  <circle r="5" fill="hsl(10 95% 60%)" opacity="0.8">
                    <animateMotion dur="5.8s" repeatCount="indefinite" begin="1.5s">
                      <mpath href="#circuitPath6"/>
                    </animateMotion>
                    <animate attributeName="opacity" values="0;1;0.5;0" dur="5.8s" repeatCount="indefinite" begin="1.5s"/>
                  </circle>
                  
                  <circle r="6" fill="hsl(200 90% 55%)" opacity="0.9">
                    <animateMotion dur="4.2s" repeatCount="indefinite" begin="2.5s">
                      <mpath href="#circuitPath7"/>
                    </animateMotion>
                    <animate attributeName="opacity" values="0;0.9;0.7;0" dur="4.2s" repeatCount="indefinite" begin="2.5s"/>
                  </circle>
                  
                  <circle r="5" fill="hsl(160 85% 50%)" opacity="0.8">
                    <animateMotion dur="6.2s" repeatCount="indefinite" begin="0.8s">
                      <mpath href="#circuitPath8"/>
                    </animateMotion>
                    <animate attributeName="opacity" values="0;0.8;1;0" dur="6.2s" repeatCount="indefinite" begin="0.8s"/>
                  </circle>
                  
                  <circle r="5" fill="hsl(330 75% 60%)" opacity="0.8">
                    <animateMotion dur="5.5s" repeatCount="indefinite" begin="1.8s">
                      <mpath href="#circuitPath9"/>
                    </animateMotion>
                    <animate attributeName="opacity" values="0;0.8;0.9;0" dur="5.5s" repeatCount="indefinite" begin="1.8s"/>
                  </circle>
                  
                  <circle r="5" fill="hsl(65 85% 55%)" opacity="0.8">
                    <animateMotion dur="4.8s" repeatCount="indefinite" begin="2.2s">
                      <mpath href="#circuitPath10"/>
                    </animateMotion>
                    <animate attributeName="opacity" values="0;0.9;0.6;0" dur="4.8s" repeatCount="indefinite" begin="2.2s"/>
                  </circle>
                  
                  <circle r="5" fill="hsl(140 75% 50%)" opacity="0.8">
                    <animateMotion dur="5.2s" repeatCount="indefinite" begin="3.5s">
                      <mpath href="#circuitPath11"/>
                    </animateMotion>
                    <animate attributeName="opacity" values="0;0.8;0.7;0" dur="5.2s" repeatCount="indefinite" begin="3.5s"/>
                  </circle>
                  
                  <circle r="4" fill="hsl(25 95% 53%)" opacity="0.7">
                    <animateMotion dur="3s" repeatCount="indefinite" begin="4s">
                      <mpath href="#circuitPath12"/>
                    </animateMotion>
                    <animate attributeName="opacity" values="0;0.7;0.9;0" dur="3s" repeatCount="indefinite" begin="4s"/>
                  </circle>
                  
                  {/* Additional fast secondary pulses */}
                  <circle r="4" fill="hsl(217 91% 60%)" opacity="0.7">
                    <animateMotion dur="3.5s" repeatCount="indefinite" begin="0.5s">
                      <mpath href="#circuitPath1"/>
                    </animateMotion>
                    <animate attributeName="opacity" values="0;0.7;0.8;0" dur="3.5s" repeatCount="indefinite" begin="0.5s"/>
                  </circle>
                  
                  <circle r="4" fill="hsl(100 70% 45%)" opacity="0.7">
                    <animateMotion dur="3.2s" repeatCount="indefinite" begin="1.2s">
                      <mpath href="#circuitPath3"/>
                    </animateMotion>
                    <animate attributeName="opacity" values="0;0.7;0.9;0" dur="3.2s" repeatCount="indefinite" begin="1.2s"/>
                  </circle>
                  
                  <circle r="4" fill="hsl(320 85% 65%)" opacity="0.7">
                    <animateMotion dur="2.8s" repeatCount="indefinite" begin="2.8s">
                      <mpath href="#circuitPath5"/>
                    </animateMotion>
                    <animate attributeName="opacity" values="0;0.7;0.8;0" dur="2.8s" repeatCount="indefinite" begin="2.8s"/>
                  </circle>
                  
                  <circle r="3" fill="hsl(240 80% 60%)" opacity="0.6">
                    <animateMotion dur="2.5s" repeatCount="indefinite" begin="1.5s">
                      <mpath href="#circuitPath7"/>
                    </animateMotion>
                    <animate attributeName="opacity" values="0;0.6;0.8;0" dur="2.5s" repeatCount="indefinite" begin="1.5s"/>
                  </circle>
                  
                  <circle r="3" fill="hsl(80 75% 50%)" opacity="0.6">
                    <animateMotion dur="2.2s" repeatCount="indefinite" begin="3.2s">
                      <mpath href="#circuitPath9"/>
                    </animateMotion>
                    <animate attributeName="opacity" values="0;0.6;0.7;0" dur="2.2s" repeatCount="indefinite" begin="3.2s"/>
                  </circle>
                  
                  {/* Micro pulses for detail */}
                  <circle r="2" fill="hsl(180 90% 60%)" opacity="0.5">
                    <animateMotion dur="1.8s" repeatCount="indefinite" begin="0.8s">
                      <mpath href="#circuitPath2"/>
                    </animateMotion>
                    <animate attributeName="opacity" values="0;0.5;0.6;0" dur="1.8s" repeatCount="indefinite" begin="0.8s"/>
                  </circle>
                  
                  <circle r="2" fill="hsl(350 80% 60%)" opacity="0.5">
                    <animateMotion dur="1.5s" repeatCount="indefinite" begin="2.5s">
                      <mpath href="#circuitPath4"/>
                    </animateMotion>
                    <animate attributeName="opacity" values="0;0.5;0.7;0" dur="1.5s" repeatCount="indefinite" begin="2.5s"/>
                  </circle>
                  
                  <circle r="2" fill="hsl(120 70% 55%)" opacity="0.5">
                    <animateMotion dur="1.3s" repeatCount="indefinite" begin="4.2s">
                      <mpath href="#circuitPath6"/>
                    </animateMotion>
                    <animate attributeName="opacity" values="0;0.5;0.6;0" dur="1.3s" repeatCount="indefinite" begin="4.2s"/>
                  </circle>
                </svg>
              </div>
              
              {/* Logo */}
              <div className="relative z-10 w-64 h-64 flex-shrink-0">
                <img 
                  src={recodeCircuitLogo} 
                  alt="ReCODE CBT - Circuit Brain Logo" 
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Tagline under logo */}
            <div className="text-center mb-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 whitespace-nowrap">
                Your Coding | Can Change
              </h3>
            </div>
            
            {/* Headline */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Evidence-Based <span className="text-primary">CBT</span><br />
                for <span className="text-accent">Mental Wellness</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Transform your mental patterns with scientifically proven cognitive behavioral therapy techniques. Start your journey to better mental health today.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                asChild 
                size="lg" 
                className="text-lg px-8 py-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link to="/contact">
                  Book Free Consultation
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 border-2 hover:bg-primary/5 transition-all duration-300"
              >
                <Link to="/what-is-recode">
                  Learn More
                </Link>
              </Button>
            </div>
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
