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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section - Professional & Clean */}
      <section className="py-8 px-4 bg-gradient-to-b from-orange-50/30 via-purple-50/20 to-blue-50/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            
            {/* Enhanced Logo Section with Realistic Circuit Decals */}
            <div className="relative flex items-center justify-center mb-12 h-96 overflow-hidden">
              
              {/* Realistic Circuit Board Background - 360 degree coverage */}
              <div className="absolute inset-0 w-full h-full">
                <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="-800 -400 1600 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                  
                  {/* Enhanced gradient definitions with better mobile visibility */}
                  <defs>
                    <linearGradient id="fadeRight" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(330 81% 60%)" stopOpacity="0.9"/>
                      <stop offset="50%" stopColor="hsl(330 81% 60%)" stopOpacity="0.6"/>
                      <stop offset="100%" stopColor="hsl(330 81% 60%)" stopOpacity="0.1"/>
                    </linearGradient>
                    <linearGradient id="fadeLeft" x1="100%" y1="0%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="hsl(330 81% 60%)" stopOpacity="0.9"/>
                      <stop offset="50%" stopColor="hsl(330 81% 60%)" stopOpacity="0.6"/>
                      <stop offset="100%" stopColor="hsl(330 81% 60%)" stopOpacity="0.1"/>
                    </linearGradient>
                    <linearGradient id="fadeTop" x1="0%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="hsl(330 81% 60%)" stopOpacity="0.9"/>
                      <stop offset="50%" stopColor="hsl(330 81% 60%)" stopOpacity="0.6"/>
                      <stop offset="100%" stopColor="hsl(330 81% 60%)" stopOpacity="0.1"/>
                    </linearGradient>
                    <linearGradient id="fadeBottom" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="hsl(330 81% 60%)" stopOpacity="0.9"/>
                      <stop offset="50%" stopColor="hsl(330 81% 60%)" stopOpacity="0.6"/>
                      <stop offset="100%" stopColor="hsl(330 81% 60%)" stopOpacity="0.1"/>
                    </linearGradient>
                    <radialGradient id="fadeRadial" cx="0%" cy="0%" r="100%">
                      <stop offset="0%" stopColor="hsl(330 81% 60%)" stopOpacity="0.8"/>
                      <stop offset="30%" stopColor="hsl(330 81% 60%)" stopOpacity="0.6"/>
                      <stop offset="70%" stopColor="hsl(330 81% 60%)" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="hsl(330 81% 60%)" stopOpacity="0.1"/>
                    </radialGradient>
                  </defs>
                  
                  {/* Realistic Circuit Traces - Curved and interconnected like real circuits */}
                  
                  {/* Top radiating circuits */}
                  <g stroke="url(#fadeTop)" fill="none" strokeLinecap="round">
                    <path d="M 0 -60 Q -10 -80 0 -100 Q 15 -130 -5 -160 Q -25 -190 0 -220 Q 20 -250 -10 -280 Q -30 -310 0 -340 Q 25 -370 -15 -400" strokeWidth="3"/>
                    <path d="M -20 -80 Q -40 -110 -25 -140 Q -10 -170 -35 -200 Q -55 -230 -30 -260 Q -15 -290 -40 -320 Q -60 -350 -35 -380" strokeWidth="2"/>
                    <path d="M 20 -80 Q 40 -110 25 -140 Q 10 -170 35 -200 Q 55 -230 30 -260 Q 15 -290 40 -320 Q 60 -350 35 -380" strokeWidth="2"/>
                    <path d="M -50 -100 Q -70 -140 -55 -180 Q -40 -220 -65 -260 Q -85 -300 -60 -340 Q -45 -380 -70 -420" strokeWidth="1.5"/>
                    <path d="M 50 -100 Q 70 -140 55 -180 Q 40 -220 65 -260 Q 85 -300 60 -340 Q 45 -380 70 -420" strokeWidth="1.5"/>
                  </g>
                  
                  {/* Bottom radiating circuits */}
                  <g stroke="url(#fadeBottom)" fill="none" strokeLinecap="round">
                    <path d="M 0 60 Q -10 80 0 100 Q 15 130 -5 160 Q -25 190 0 220 Q 20 250 -10 280 Q -30 310 0 340 Q 25 370 -15 400" strokeWidth="3"/>
                    <path d="M -20 80 Q -40 110 -25 140 Q -10 170 -35 200 Q -55 230 -30 260 Q -15 290 -40 320 Q -60 350 -35 380" strokeWidth="2"/>
                    <path d="M 20 80 Q 40 110 25 140 Q 10 170 35 200 Q 55 230 30 260 Q 15 290 40 320 Q 60 350 35 380" strokeWidth="2"/>
                  </g>
                  
                  {/* Right radiating circuits */}
                  <g stroke="url(#fadeRight)" fill="none" strokeLinecap="round">
                    <path d="M 60 0 Q 90 -15 120 0 Q 150 20 180 -5 Q 210 -30 240 5 Q 270 40 300 15 Q 330 -10 360 25 Q 390 60 420 35 Q 450 10 480 45 Q 510 80 540 55 Q 570 30 600 65 Q 630 100 660 75 Q 690 50 720 85 Q 750 120 780 95" strokeWidth="4"/>
                    <path d="M 80 -25 Q 110 -50 140 -30 Q 170 -10 200 -35 Q 230 -60 260 -40 Q 290 -20 320 -45 Q 350 -70 380 -50 Q 410 -30 440 -55 Q 470 -80 500 -60 Q 530 -40 560 -65 Q 590 -90 620 -70 Q 650 -50 680 -75 Q 710 -100 740 -80" strokeWidth="3"/>
                    <path d="M 80 25 Q 110 50 140 30 Q 170 10 200 35 Q 230 60 260 40 Q 290 20 320 45 Q 350 70 380 50 Q 410 30 440 55 Q 470 80 500 60 Q 530 40 560 65 Q 590 90 620 70 Q 650 50 680 75 Q 710 100 740 80" strokeWidth="3"/>
                  </g>
                  
                  {/* Left radiating circuits */}
                  <g stroke="url(#fadeLeft)" fill="none" strokeLinecap="round">
                    <path d="M -60 0 Q -90 -15 -120 0 Q -150 20 -180 -5 Q -210 -30 -240 5 Q -270 40 -300 15 Q -330 -10 -360 25 Q -390 60 -420 35 Q -450 10 -480 45 Q -510 80 -540 55 Q -570 30 -600 65 Q -630 100 -660 75 Q -690 50 -720 85 Q -750 120 -780 95" strokeWidth="4"/>
                    <path d="M -80 -25 Q -110 -50 -140 -30 Q -170 -10 -200 -35 Q -230 -60 -260 -40 Q -290 -20 -320 -45 Q -350 -70 -380 -50 Q -410 -30 -440 -55 Q -470 -80 -500 -60 Q -530 -40 -560 -65 Q -590 -90 -620 -70 Q -650 -50 -680 -75 Q -710 -100 -740 -80" strokeWidth="3"/>
                    <path d="M -80 25 Q -110 50 -140 30 Q -170 10 -200 35 Q -230 60 -260 40 Q -290 20 -320 45 Q -350 70 -380 50 Q -410 30 -440 55 Q -470 80 -500 60 Q -530 40 -560 65 Q -590 90 -620 70 Q -650 50 -680 75 Q -710 100 -740 80" strokeWidth="3"/>
                  </g>
                  
                  {/* Diagonal circuit branches - top-right to bottom-left */}
                  <g stroke="url(#fadeRadial)" fill="none" strokeLinecap="round">
                    <path d="M 85 -85 Q 140 -140 195 -95 Q 250 -50 305 -105 Q 360 -160 415 -115 Q 470 -70 525 -125" strokeWidth="2.5"/>
                    <path d="M 120 -50 Q 170 -100 220 -60 Q 270 -20 320 -70 Q 370 -120 420 -80 Q 470 -40 520 -90" strokeWidth="2"/>
                    <path d="M 50 -120 Q 100 -170 150 -130 Q 200 -90 250 -140 Q 300 -190 350 -150 Q 400 -110 450 -160" strokeWidth="2"/>
                  </g>
                  
                  {/* Diagonal circuit branches - top-left to bottom-right */}
                  <g stroke="url(#fadeRadial)" fill="none" strokeLinecap="round">
                    <path d="M -85 -85 Q -140 -140 -195 -95 Q -250 -50 -305 -105 Q -360 -160 -415 -115 Q -470 -70 -525 -125" strokeWidth="2.5"/>
                    <path d="M -85 85 Q -140 140 -195 95 Q -250 50 -305 105 Q -360 160 -415 115 Q -470 70 -525 125" strokeWidth="2.5"/>
                    <path d="M 85 85 Q 140 140 195 95 Q 250 50 305 105 Q 360 160 415 115 Q 470 70 525 125" strokeWidth="2.5"/>
                  </g>
                  
                  {/* Circuit connection nodes and pads */}
                  <g fill="hsl(330 81% 60%)">
                    {/* Central hub nodes */}
                    <circle cx="0" cy="0" r="8" opacity="1"/>
                    <circle cx="60" cy="0" r="6" opacity="1"/>
                    <circle cx="-60" cy="0" r="6" opacity="1"/>
                    <circle cx="0" cy="60" r="6" opacity="1"/>
                    <circle cx="0" cy="-60" r="6" opacity="1"/>
                    
                    {/* Diagonal connection points */}
                    <circle cx="85" cy="85" r="5" opacity="0.9"/>
                    <circle cx="-85" cy="-85" r="5" opacity="0.9"/>
                    <circle cx="85" cy="-85" r="5" opacity="0.9"/>
                    <circle cx="-85" cy="85" r="5" opacity="0.9"/>
                    
                    {/* Secondary layer nodes */}
                    <circle cx="150" cy="0" r="4" opacity="0.8"/>
                    <circle cx="-150" cy="0" r="4" opacity="0.8"/>
                    <circle cx="0" cy="150" r="4" opacity="0.8"/>
                    <circle cx="0" cy="-150" r="4" opacity="0.8"/>
                    
                    {/* Tertiary connection points */}
                    <circle cx="240" cy="0" r="3.5" opacity="0.7"/>
                    <circle cx="-240" cy="0" r="3.5" opacity="0.7"/>
                    <circle cx="360" cy="0" r="3" opacity="0.5"/>
                    <circle cx="-360" cy="0" r="3" opacity="0.5"/>
                    <circle cx="480" cy="0" r="2.5" opacity="0.4"/>
                    <circle cx="-480" cy="0" r="2.5" opacity="0.4"/>
                    <circle cx="600" cy="0" r="2" opacity="0.3"/>
                    <circle cx="-600" cy="0" r="2" opacity="0.3"/>
                  </g>
                  
                  {/* Enhanced electrical pulses following realistic circuit paths */}
                  {/* Primary horizontal flow */}
                  <circle r="8" fill="hsl(330 81% 70%)" opacity="1">
                    <animateMotion dur="3.0s" repeatCount="indefinite" path="M 60 0 Q 90 -15 120 0 Q 150 20 180 -5 Q 210 -30 240 5 Q 270 40 300 15 Q 330 -10 360 25 Q 390 60 420 35 Q 450 10 480 45 Q 510 80 540 55 Q 570 30 600 65 Q 630 100 660 75 Q 690 50 720 85 Q 750 120 780 95"/>
                    <animate attributeName="opacity" values="1; 1; 0.5; 1; 0" dur="3.0s" repeatCount="indefinite"/>
                  </circle>
                  <circle r="8" fill="hsl(330 81% 70%)" opacity="1">
                    <animateMotion dur="3.0s" repeatCount="indefinite" path="M -60 0 Q -90 -15 -120 0 Q -150 20 -180 -5 Q -210 -30 -240 5 Q -270 40 -300 15 Q -330 -10 -360 25 Q -390 60 -420 35 Q -450 10 -480 45 Q -510 80 -540 55 Q -570 30 -600 65 Q -630 100 -660 75 Q -690 50 -720 85 Q -750 120 -780 95"/>
                    <animate attributeName="opacity" values="1; 1; 0.5; 1; 0" dur="3.0s" repeatCount="indefinite"/>
                  </circle>
                  
                  {/* Vertical flows */}
                  <circle r="6" fill="hsl(330 81% 70%)" opacity="0.9">
                    <animateMotion dur="3.5s" repeatCount="indefinite" path="M 0 -60 Q -10 -80 0 -100 Q 15 -130 -5 -160 Q -25 -190 0 -220 Q 20 -250 -10 -280 Q -30 -310 0 -340 Q 25 -370 -15 -400"/>
                    <animate attributeName="opacity" values="0.9; 0.9; 0.4; 0.9; 0" dur="3.5s" repeatCount="indefinite"/>
                  </circle>
                  <circle r="6" fill="hsl(330 81% 70%)" opacity="0.9">
                    <animateMotion dur="3.5s" repeatCount="indefinite" path="M 0 60 Q -10 80 0 100 Q 15 130 -5 160 Q -25 190 0 220 Q 20 250 -10 280 Q -30 310 0 340 Q 25 370 -15 400"/>
                    <animate attributeName="opacity" values="0.9; 0.9; 0.4; 0.9; 0" dur="3.5s" repeatCount="indefinite"/>
                  </circle>
                  
                  {/* Diagonal pulses */}
                  <circle r="5" fill="hsl(330 81% 70%)" opacity="0.8">
                    <animateMotion dur="4.0s" repeatCount="indefinite" path="M 85 -85 Q 140 -140 195 -95 Q 250 -50 305 -105 Q 360 -160 415 -115 Q 470 -70 525 -125"/>
                    <animate attributeName="opacity" values="0.8; 0.8; 0.3; 0.8; 0" dur="4.0s" repeatCount="indefinite"/>
                  </circle>
                  <circle r="5" fill="hsl(330 81% 70%)" opacity="0.8">
                    <animateMotion dur="4.2s" repeatCount="indefinite" path="M -85 -85 Q -140 -140 -195 -95 Q -250 -50 -305 -105 Q -360 -160 -415 -115 Q -470 -70 -525 -125"/>
                    <animate attributeName="opacity" values="0.8; 0.8; 0.3; 0.8; 0" dur="4.2s" repeatCount="indefinite"/>
                  </circle>
                  
                  {/* Additional branch pulses */}
                  <circle r="4" fill="hsl(330 81% 70%)" opacity="0.7">
                    <animateMotion dur="3.8s" repeatCount="indefinite" path="M 80 -25 Q 110 -50 140 -30 Q 170 -10 200 -35 Q 230 -60 260 -40 Q 290 -20 320 -45 Q 350 -70 380 -50"/>
                    <animate attributeName="opacity" values="0.7; 0.7; 0.3; 0.7; 0" dur="3.8s" repeatCount="indefinite"/>
                  </circle>
                  <circle r="4" fill="hsl(330 81% 70%)" opacity="0.7">
                    <animateMotion dur="3.6s" repeatCount="indefinite" path="M 80 25 Q 110 50 140 30 Q 170 10 200 35 Q 230 60 260 40 Q 290 20 320 45 Q 350 70 380 50"/>
                    <animate attributeName="opacity" values="0.7; 0.7; 0.3; 0.7; 0" dur="3.6s" repeatCount="indefinite"/>
                  </circle>
                  <circle r="4" fill="hsl(330 81% 70%)" opacity="0.7">
                    <animateMotion dur="3.4s" repeatCount="indefinite" path="M -80 -25 Q -110 -50 -140 -30 Q -170 -10 -200 -35 Q -230 -60 -260 -40 Q -290 -20 -320 -45 Q -350 -70 -380 -50"/>
                    <animate attributeName="opacity" values="0.7; 0.7; 0.3; 0.7; 0" dur="3.4s" repeatCount="indefinite"/>
                  </circle>
                  <circle r="4" fill="hsl(330 81% 70%)" opacity="0.7">
                    <animateMotion dur="3.9s" repeatCount="indefinite" path="M -80 25 Q -110 50 -140 30 Q -170 10 -200 35 Q -230 60 -260 40 Q -290 20 -320 45 Q -350 70 -380 50"/>
                    <animate attributeName="opacity" values="0.7; 0.7; 0.3; 0.7; 0" dur="3.9s" repeatCount="indefinite"/>
                  </circle>
                </svg>
              </div>
              
              {/* Enhanced Logo Container - responsive and properly positioned */}
              <div className="relative z-10 flex justify-center items-center">
                <img 
                  src="/recode-brain-logo-new.png" 
                  alt="ReCODE Brain Logo" 
                  className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 xl:w-52 xl:h-52 object-contain drop-shadow-lg"
                />
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
            
            {/* Professional Credentials - Grid Layout with Icons Above */}
            <div className="bg-gray-50 rounded-lg p-6 mt-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center">
                  <GraduationCap className="h-8 w-8 text-blue-600 mb-2" />
                  <p className="font-semibold text-gray-900 text-sm">Qualified GP</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <User className="h-8 w-8 text-blue-600 mb-2" />
                  <p className="font-semibold text-gray-900 text-sm">Registered Practitioner</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Shield className="h-8 w-8 text-blue-600 mb-2" />
                  <p className="font-semibold text-gray-900 text-sm">CBT Accredited</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Award className="h-8 w-8 text-blue-600 mb-2" />
                  <p className="font-semibold text-gray-900 text-sm">Professional Diploma</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <MessageSquare className="h-8 w-8 text-blue-600 mb-2" />
                  <p className="font-semibold text-gray-900 text-sm">Remote Sessions</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Stethoscope className="h-8 w-8 text-blue-600 mb-2" />
                  <p className="font-semibold text-gray-900 text-sm">Flexible Scheduling</p>
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
              return (
                <Link key={index} to={conditionLinks[index]}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                    <CardHeader>
                      <div 
                        className="h-48 bg-cover bg-center rounded-lg mb-4 group-hover:scale-105 transition-transform"
                        style={{ backgroundImage: `url(${condition.image})` }}
                      />
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {condition.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm">
                        {condition.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* RECODE Methodology Section */}
      <section className="py-8 px-4 bg-gradient-to-r from-blue-50/30 via-purple-50/20 to-orange-50/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">The RECODE Framework</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              A systematic approach to identifying, analyzing, and reprogramming the mental algorithms 
              that shape your emotional responses and behavior patterns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recodeSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${step.bgColor} flex items-center justify-center mb-4`}>
                      <Icon className={`h-6 w-6 ${step.color}`} />
                    </div>
                    <CardTitle className="text-xl">
                      {step.step}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Scientific Approaches Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Evidence-Based Approaches</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Our therapeutic framework integrates multiple validated psychological interventions 
              to provide comprehensive mental health transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approaches.map((approach, index) => {
              const Icon = approach.icon;
              const approachLinks = ["/philosophy/cbt#top", "/philosophy/dbt#top", "/philosophy/mindfulness#top", "/philosophy/neuroplasticity#top", "/philosophy/performance-psychology#top", "/philosophy/visualization#top"];
              return (
                <Link key={index} to={approachLinks[index]}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg ${approach.bgColor} flex items-center justify-center mb-4`}>
                        <Icon className={`h-6 w-6 ${approach.color}`} />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {approach.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm">
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

      {/* RECODE: Chat CBT Section */}
      <section 
        className="py-16 px-4 relative overflow-hidden"
        style={{ 
          backgroundImage: `url(${brainCodeBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/85 to-orange-900/90" />
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center text-white">
          {/* Larger icon - increased by 150% */}
          <MessageSquare className="h-36 w-36 mx-auto mb-8 text-white/90" />
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            ReCODE: Chat CBT
          </h2>
          
          <div className="space-y-6 text-xl sm:text-2xl font-light leading-relaxed">
            <p>
              Experience therapy that adapts to your schedule with our AI-powered CBT companion.
            </p>
            <p>
              Get immediate support, practice coping skills, and track your progress between sessions.
            </p>
            <p className="text-orange-300 font-medium">
              Available 24/7 to support your mental health journey.
            </p>
          </div>
          
          <div className="mt-10">
            <Link to="/chat-cbt-coming-soon#top">
              <Button 
                size="lg" 
                className="text-lg px-10 py-4 bg-white text-purple-900 hover:bg-gray-100 font-semibold shadow-lg"
              >
                Coming Soon
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Professional Credentials Footer */}
      <section className="py-6 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-center items-center gap-8 text-center">
            <div className="flex items-center space-x-2">
              <Award className="h-8 w-8 text-blue-600" />
              <div>
                <p className="font-semibold text-gray-900">Doctor-Led Treatment</p>
                <p className="text-sm text-gray-600">Professional medical oversight</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <User className="h-8 w-8 text-blue-600" />
              <div>
                <p className="font-semibold text-gray-900">Personalized Care</p>
                <p className="text-sm text-gray-600">Tailored to your specific needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;