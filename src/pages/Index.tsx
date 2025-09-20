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
            {/* Enhanced Logo Section with 360-degree Circuitry */}
            <div className="relative flex items-center justify-center mb-12 h-96 overflow-hidden">
              
              {/* Full 360-degree circuitry background with edge-to-edge coverage */}
              <div className="absolute inset-0 w-full h-full">
                <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="-800 -400 1600 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                  
                  {/* Enhanced gradient definitions for 360-degree fading */}
                  <defs>
                    <radialGradient id="circuitFade" cx="50%" cy="50%" r="70%">
                      <stop offset="0%" stopColor="hsl(330 81% 60%)" stopOpacity="1"/>
                      <stop offset="20%" stopColor="hsl(330 81% 60%)" stopOpacity="0.9"/>
                      <stop offset="40%" stopColor="hsl(330 81% 60%)" stopOpacity="0.7"/>
                      <stop offset="60%" stopColor="hsl(330 81% 60%)" stopOpacity="0.5"/>
                      <stop offset="80%" stopColor="hsl(330 81% 60%)" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="hsl(330 81% 60%)" stopOpacity="0.05"/>
                    </radialGradient>
                    <linearGradient id="fadeTop" x1="0%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="hsl(330 81% 60%)" stopOpacity="1"/>
                      <stop offset="50%" stopColor="hsl(330 81% 60%)" stopOpacity="0.6"/>
                      <stop offset="100%" stopColor="hsl(330 81% 60%)" stopOpacity="0.05"/>
                    </linearGradient>
                    <linearGradient id="fadeBottom" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="hsl(330 81% 60%)" stopOpacity="1"/>
                      <stop offset="50%" stopColor="hsl(330 81% 60%)" stopOpacity="0.6"/>
                      <stop offset="100%" stopColor="hsl(330 81% 60%)" stopOpacity="0.05"/>
                    </linearGradient>
                  </defs>
                  
                  {/* Complete 360-degree Neural Network - No gaps, full coverage */}
                  <g stroke="url(#circuitFade)" fill="none">
                    
                    {/* Inner Ring - 12 neural pathways every 30 degrees */}
                    <path d="M 60 0 Q 100 -20 140 -10 Q 180 -25 220 -15 Q 260 -30 300 -20 Q 340 -35 380 -25 Q 420 -40 460 -30 Q 500 -45 540 -35 Q 580 -50 620 -40 Q 660 -55 700 -45 Q 740 -60 780 -50 Q 800 -55 800 -55" strokeWidth="2"/>
                    <path d="M 52 30 Q 92 10 132 20 Q 172 5 212 15 Q 252 0 292 10 Q 332 -5 372 5 Q 412 -10 452 0 Q 492 -15 532 -5 Q 572 -20 612 -10 Q 652 -25 692 -15 Q 732 -30 772 -20 Q 800 -25 800 -25" strokeWidth="2"/>
                    <path d="M 30 52 Q 70 32 110 42 Q 150 27 190 37 Q 230 22 270 32 Q 310 17 350 27 Q 390 12 430 22 Q 470 7 510 17 Q 550 2 590 12 Q 630 -3 670 7 Q 710 -8 750 2 Q 780 -5 800 0" strokeWidth="2"/>
                    <path d="M 0 60 Q 40 40 80 50 Q 120 35 160 45 Q 200 30 240 40 Q 280 25 320 35 Q 360 20 400 30 Q 440 15 480 25 Q 520 10 560 20 Q 600 5 640 15 Q 680 0 720 10 Q 760 -5 800 5" strokeWidth="2"/>
                    <path d="M -30 52 Q 10 32 50 42 Q 90 27 130 37 Q 170 22 210 32 Q 250 17 290 27 Q 330 12 370 22 Q 410 7 450 17 Q 490 2 530 12 Q 570 -3 610 7 Q 650 -8 690 2 Q 730 -5 770 5 Q 800 0 800 10" strokeWidth="2"/>
                    <path d="M -52 30 Q -12 10 28 20 Q 68 5 108 15 Q 148 0 188 10 Q 228 -5 268 5 Q 308 -10 348 0 Q 388 -15 428 -5 Q 468 -20 508 -10 Q 548 -25 588 -15 Q 628 -30 668 -20 Q 708 -35 748 -25 Q 780 -30 800 -20" strokeWidth="2"/>
                    <path d="M -60 0 Q -20 -20 20 -10 Q 60 -25 100 -15 Q 140 -30 180 -20 Q 220 -35 260 -25 Q 300 -40 340 -30 Q 380 -45 420 -35 Q 460 -50 500 -40 Q 540 -55 580 -45 Q 620 -60 660 -50 Q 700 -65 740 -55 Q 780 -60 800 -50" strokeWidth="2"/>
                    <path d="M -52 -30 Q -12 -50 28 -40 Q 68 -55 108 -45 Q 148 -60 188 -50 Q 228 -65 268 -55 Q 308 -70 348 -60 Q 388 -75 428 -65 Q 468 -80 508 -70 Q 548 -85 588 -75 Q 628 -90 668 -80 Q 708 -95 748 -85 Q 780 -90 800 -80" strokeWidth="2"/>
                    <path d="M -30 -52 Q 10 -72 50 -62 Q 90 -77 130 -67 Q 170 -82 210 -72 Q 250 -87 290 -77 Q 330 -92 370 -82 Q 410 -97 450 -87 Q 490 -102 530 -92 Q 570 -107 610 -97 Q 650 -112 690 -102 Q 730 -117 770 -107 Q 800 -112 800 -100" strokeWidth="2"/>
                    <path d="M 0 -60 Q 40 -80 80 -70 Q 120 -85 160 -75 Q 200 -90 240 -80 Q 280 -95 320 -85 Q 360 -100 400 -90 Q 440 -105 480 -95 Q 520 -110 560 -100 Q 600 -115 640 -105 Q 680 -120 720 -110 Q 760 -125 800 -115" strokeWidth="2"/>
                    <path d="M 30 -52 Q 70 -72 110 -62 Q 150 -77 190 -67 Q 230 -82 270 -72 Q 310 -87 350 -77 Q 390 -92 430 -82 Q 470 -97 510 -87 Q 550 -102 590 -92 Q 630 -107 670 -97 Q 710 -112 750 -102 Q 780 -107 800 -95" strokeWidth="2"/>
                    <path d="M 52 -30 Q 92 -50 132 -40 Q 172 -55 212 -45 Q 252 -60 292 -50 Q 332 -65 372 -55 Q 412 -70 452 -60 Q 492 -75 532 -65 Q 572 -80 612 -70 Q 652 -85 692 -75 Q 732 -90 772 -80 Q 800 -85 800 -75" strokeWidth="2"/>

                    {/* Middle Ring - Dense neural connections */}
                    <path d="M 100 0 Q 150 -30 200 -15 Q 250 -45 300 -30 Q 350 -60 400 -45 Q 450 -75 500 -60 Q 550 -90 600 -75 Q 650 -105 700 -90 Q 750 -120 800 -105" strokeWidth="1.5"/>
                    <path d="M 86 50 Q 136 20 186 35 Q 236 5 286 20 Q 336 -10 386 5 Q 436 -25 486 -10 Q 536 -40 586 -25 Q 636 -55 686 -40 Q 736 -70 786 -55 Q 800 -60 800 -50" strokeWidth="1.5"/>
                    <path d="M 50 86 Q 100 56 150 71 Q 200 41 250 56 Q 300 26 350 41 Q 400 11 450 26 Q 500 -4 550 11 Q 600 -19 650 -4 Q 700 -34 750 -19 Q 800 -39 800 -25" strokeWidth="1.5"/>
                    <path d="M 0 100 Q 50 70 100 85 Q 150 55 200 70 Q 250 40 300 55 Q 350 25 400 40 Q 450 10 500 25 Q 550 -5 600 10 Q 650 -20 700 -5 Q 750 -35 800 -20" strokeWidth="1.5"/>
                    <path d="M -50 86 Q 0 56 50 71 Q 100 41 150 56 Q 200 26 250 41 Q 300 11 350 26 Q 400 -4 450 11 Q 500 -19 550 -4 Q 600 -34 650 -19 Q 700 -49 750 -34 Q 800 -54 800 -40" strokeWidth="1.5"/>
                    <path d="M -86 50 Q -36 20 14 35 Q 64 5 114 20 Q 164 -10 214 5 Q 264 -25 314 -10 Q 364 -40 414 -25 Q 464 -55 514 -40 Q 564 -70 614 -55 Q 664 -85 714 -70 Q 764 -100 800 -85" strokeWidth="1.5"/>
                    <path d="M -100 0 Q -50 -30 0 -15 Q 50 -45 100 -30 Q 150 -60 200 -45 Q 250 -75 300 -60 Q 350 -90 400 -75 Q 450 -105 500 -90 Q 550 -120 600 -105 Q 650 -135 700 -120 Q 750 -150 800 -135" strokeWidth="1.5"/>
                    <path d="M -86 -50 Q -36 -80 14 -65 Q 64 -95 114 -80 Q 164 -110 214 -95 Q 264 -125 314 -110 Q 364 -140 414 -125 Q 464 -155 514 -140 Q 564 -170 614 -155 Q 664 -185 714 -170 Q 764 -200 800 -185" strokeWidth="1.5"/>
                    <path d="M -50 -86 Q 0 -116 50 -101 Q 100 -131 150 -116 Q 200 -146 250 -131 Q 300 -161 350 -146 Q 400 -176 450 -161 Q 500 -191 550 -176 Q 600 -206 650 -191 Q 700 -221 750 -206 Q 800 -236 800 -220" strokeWidth="1.5"/>
                    <path d="M 0 -100 Q 50 -130 100 -115 Q 150 -145 200 -130 Q 250 -160 300 -145 Q 350 -175 400 -160 Q 450 -190 500 -175 Q 550 -205 600 -190 Q 650 -220 700 -205 Q 750 -235 800 -220" strokeWidth="1.5"/>
                    <path d="M 50 -86 Q 100 -116 150 -101 Q 200 -131 250 -116 Q 300 -146 350 -131 Q 400 -161 450 -146 Q 500 -176 550 -161 Q 600 -191 650 -176 Q 700 -206 750 -191 Q 800 -221 800 -205" strokeWidth="1.5"/>
                    <path d="M 86 -50 Q 136 -80 186 -65 Q 236 -95 286 -80 Q 336 -110 386 -95 Q 436 -125 486 -110 Q 536 -140 586 -125 Q 636 -155 686 -140 Q 736 -170 786 -155 Q 800 -175 800 -160" strokeWidth="1.5"/>

                    {/* Outer Ring - Extended neural network */}
                    <path d="M 150 0 Q 200 -40 250 -25 Q 300 -65 350 -50 Q 400 -90 450 -75 Q 500 -115 550 -100 Q 600 -140 650 -125 Q 700 -165 750 -150 Q 800 -175 800 -160" strokeWidth="1.2"/>
                    <path d="M 129 75 Q 179 35 229 50 Q 279 10 329 25 Q 379 -15 429 0 Q 479 -40 529 -25 Q 579 -65 629 -50 Q 679 -90 729 -75 Q 779 -115 800 -100" strokeWidth="1.2"/>
                    <path d="M 75 129 Q 125 89 175 104 Q 225 64 275 79 Q 325 39 375 54 Q 425 14 475 29 Q 525 -11 575 4 Q 625 -36 675 -21 Q 725 -61 775 -46 Q 800 -66 800 -50" strokeWidth="1.2"/>
                    <path d="M 0 150 Q 50 110 100 125 Q 150 85 200 100 Q 250 60 300 75 Q 350 35 400 50 Q 450 10 500 25 Q 550 -15 600 0 Q 650 -40 700 -25 Q 750 -65 800 -50" strokeWidth="1.2"/>

                    {/* Mirror all paths for complete 360 coverage */}
                    <path d="M -75 129 Q -25 89 25 104 Q 75 64 125 79 Q 175 39 225 54 Q 275 14 325 29 Q 375 -11 425 4 Q 475 -36 525 -21 Q 575 -61 625 -46 Q 675 -86 725 -71 Q 775 -111 800 -96" strokeWidth="1.2"/>
                    <path d="M -129 75 Q -79 35 -29 50 Q 21 10 71 25 Q 121 -15 171 0 Q 221 -40 271 -25 Q 321 -65 371 -50 Q 421 -90 471 -75 Q 521 -115 571 -100 Q 621 -140 671 -125 Q 721 -165 771 -150 Q 800 -170 800 -155" strokeWidth="1.2"/>
                    <path d="M -150 0 Q -100 -40 -50 -25 Q 0 -65 50 -50 Q 100 -90 150 -75 Q 200 -115 250 -100 Q 300 -140 350 -125 Q 400 -165 450 -150 Q 500 -190 550 -175 Q 600 -215 650 -200 Q 700 -240 750 -225 Q 800 -260 800 -245" strokeWidth="1.2"/>
                    <path d="M -129 -75 Q -79 -115 -29 -100 Q 21 -140 71 -125 Q 121 -165 171 -150 Q 221 -190 271 -175 Q 321 -215 371 -200 Q 421 -240 471 -225 Q 521 -265 571 -250 Q 621 -290 671 -275 Q 721 -315 771 -300 Q 800 -335 800 -320" strokeWidth="1.2"/>
                    <path d="M -75 -129 Q -25 -169 25 -154 Q 75 -194 125 -179 Q 175 -219 225 -204 Q 275 -244 325 -229 Q 375 -269 425 -254 Q 475 -294 525 -279 Q 575 -319 625 -304 Q 675 -344 725 -329 Q 775 -369 800 -354" strokeWidth="1.2"/>
                    <path d="M 0 -150 Q 50 -190 100 -175 Q 150 -215 200 -200 Q 250 -240 300 -225 Q 350 -265 400 -250 Q 450 -290 500 -275 Q 550 -315 600 -300 Q 650 -340 700 -325 Q 750 -365 800 -350" strokeWidth="1.2"/>
                    <path d="M 75 -129 Q 125 -169 175 -154 Q 225 -194 275 -179 Q 325 -219 375 -204 Q 425 -244 475 -229 Q 525 -269 575 -254 Q 625 -294 675 -279 Q 725 -319 775 -304 Q 800 -324 800 -310" strokeWidth="1.2"/>
                    <path d="M 129 -75 Q 179 -115 229 -100 Q 279 -140 329 -125 Q 379 -165 429 -150 Q 479 -190 529 -175 Q 579 -215 629 -200 Q 679 -240 729 -225 Q 779 -265 800 -250" strokeWidth="1.2"/>

                    {/* Dense neuron-like branching connections - filling all gaps */}
                    <path d="M 80 20 Q 120 40 160 30 Q 200 50 240 40" strokeWidth="1"/>
                    <path d="M 80 -20 Q 120 -40 160 -30 Q 200 -50 240 -40" strokeWidth="1"/>
                    <path d="M 20 80 Q 40 120 30 160 Q 50 200 40 240" strokeWidth="1"/>
                    <path d="M -20 80 Q -40 120 -30 160 Q -50 200 -40 240" strokeWidth="1"/>
                    <path d="M -80 20 Q -120 40 -160 30 Q -200 50 -240 40" strokeWidth="1"/>
                    <path d="M -80 -20 Q -120 -40 -160 -30 Q -200 -50 -240 -40" strokeWidth="1"/>
                    <path d="M -20 -80 Q -40 -120 -30 -160 Q -50 -200 -40 -240" strokeWidth="1"/>
                    <path d="M 20 -80 Q 40 -120 30 -160 Q 50 -200 40 -240" strokeWidth="1"/>

                    {/* Cross-connections between rings */}
                    <path d="M 100 50 Q 150 25 200 50 Q 250 25 300 50" strokeWidth="1"/>
                    <path d="M 100 -50 Q 150 -75 200 -50 Q 250 -75 300 -50" strokeWidth="1"/>
                    <path d="M 50 100 Q 25 150 50 200 Q 25 250 50 300" strokeWidth="1"/>
                    <path d="M -50 100 Q -75 150 -50 200 Q -75 250 -50 300" strokeWidth="1"/>
                    <path d="M -100 50 Q -150 25 -200 50 Q -250 25 -300 50" strokeWidth="1"/>
                    <path d="M -100 -50 Q -150 -75 -200 -50 Q -250 -75 -300 -50" strokeWidth="1"/>
                    <path d="M -50 -100 Q -25 -150 -50 -200 Q -25 -250 -50 -300" strokeWidth="1"/>
                    <path d="M 50 -100 Q 25 -150 50 -200 Q 25 -250 50 -300" strokeWidth="1"/>

                    {/* Diagonal cross-connections */}
                    <path d="M 70 70 Q 105 105 140 140 Q 175 175 210 210 Q 245 245 280 280" strokeWidth="1"/>
                    <path d="M 70 -70 Q 105 -105 140 -140 Q 175 -175 210 -210 Q 245 -245 280 -280" strokeWidth="1"/>
                    <path d="M -70 70 Q -105 105 -140 140 Q -175 175 -210 210 Q -245 245 -280 280" strokeWidth="1"/>
                    <path d="M -70 -70 Q -105 -105 -140 -140 Q -175 -175 -210 -210 Q -245 -245 -280 -280" strokeWidth="1"/>
                  </g>
                  
                  {/* Dense neural network nodes - complete 360-degree coverage */}
                  <g fill="hsl(330 81% 60%)">
                    {/* Central hub - main connection point */}
                    <circle cx="0" cy="0" r="6" opacity="1"/>
                    
                    {/* Inner ring nodes - every 30 degrees (12 nodes) */}
                    <circle cx="60" cy="0" r="4" opacity="1"/>
                    <circle cx="52" cy="30" r="4" opacity="1"/>
                    <circle cx="30" cy="52" r="4" opacity="1"/>
                    <circle cx="0" cy="60" r="4" opacity="1"/>
                    <circle cx="-30" cy="52" r="4" opacity="1"/>
                    <circle cx="-52" cy="30" r="4" opacity="1"/>
                    <circle cx="-60" cy="0" r="4" opacity="1"/>
                    <circle cx="-52" cy="-30" r="4" opacity="1"/>
                    <circle cx="-30" cy="-52" r="4" opacity="1"/>
                    <circle cx="0" cy="-60" r="4" opacity="1"/>
                    <circle cx="30" cy="-52" r="4" opacity="1"/>
                    <circle cx="52" cy="-30" r="4" opacity="1"/>
                    
                    {/* Middle ring nodes - every 15 degrees (24 nodes) */}
                    <circle cx="100" cy="0" r="3.5" opacity="0.9"/>
                    <circle cx="96" cy="26" r="3.5" opacity="0.9"/>
                    <circle cx="86" cy="50" r="3.5" opacity="0.9"/>
                    <circle cx="71" cy="71" r="3.5" opacity="0.9"/>
                    <circle cx="50" cy="86" r="3.5" opacity="0.9"/>
                    <circle cx="26" cy="96" r="3.5" opacity="0.9"/>
                    <circle cx="0" cy="100" r="3.5" opacity="0.9"/>
                    <circle cx="-26" cy="96" r="3.5" opacity="0.9"/>
                    <circle cx="-50" cy="86" r="3.5" opacity="0.9"/>
                    <circle cx="-71" cy="71" r="3.5" opacity="0.9"/>
                    <circle cx="-86" cy="50" r="3.5" opacity="0.9"/>
                    <circle cx="-96" cy="26" r="3.5" opacity="0.9"/>
                    <circle cx="-100" cy="0" r="3.5" opacity="0.9"/>
                    <circle cx="-96" cy="-26" r="3.5" opacity="0.9"/>
                    <circle cx="-86" cy="-50" r="3.5" opacity="0.9"/>
                    <circle cx="-71" cy="-71" r="3.5" opacity="0.9"/>
                    <circle cx="-50" cy="-86" r="3.5" opacity="0.9"/>
                    <circle cx="-26" cy="-96" r="3.5" opacity="0.9"/>
                    <circle cx="0" cy="-100" r="3.5" opacity="0.9"/>
                    <circle cx="26" cy="-96" r="3.5" opacity="0.9"/>
                    <circle cx="50" cy="-86" r="3.5" opacity="0.9"/>
                    <circle cx="71" cy="-71" r="3.5" opacity="0.9"/>
                    <circle cx="86" cy="-50" r="3.5" opacity="0.9"/>
                    <circle cx="96" cy="-26" r="3.5" opacity="0.9"/>
                    
                    {/* Outer ring nodes - every 10 degrees (36 nodes) */}
                    <circle cx="150" cy="0" r="3" opacity="0.8"/>
                    <circle cx="147" cy="26" r="3" opacity="0.8"/>
                    <circle cx="139" cy="51" r="3" opacity="0.8"/>
                    <circle cx="129" cy="75" r="3" opacity="0.8"/>
                    <circle cx="116" cy="96" r="3" opacity="0.8"/>
                    <circle cx="101" cy="115" r="3" opacity="0.8"/>
                    <circle cx="83" cy="130" r="3" opacity="0.8"/>
                    <circle cx="64" cy="141" r="3" opacity="0.8"/>
                    <circle cx="43" cy="149" r="3" opacity="0.8"/>
                    <circle cx="21" cy="153" r="3" opacity="0.8"/>
                    <circle cx="0" cy="150" r="3" opacity="0.8"/>
                    <circle cx="-21" cy="153" r="3" opacity="0.8"/>
                    <circle cx="-43" cy="149" r="3" opacity="0.8"/>
                    <circle cx="-64" cy="141" r="3" opacity="0.8"/>
                    <circle cx="-83" cy="130" r="3" opacity="0.8"/>
                    <circle cx="-101" cy="115" r="3" opacity="0.8"/>
                    <circle cx="-116" cy="96" r="3" opacity="0.8"/>
                    <circle cx="-129" cy="75" r="3" opacity="0.8"/>
                    <circle cx="-139" cy="51" r="3" opacity="0.8"/>
                    <circle cx="-147" cy="26" r="3" opacity="0.8"/>
                    <circle cx="-150" cy="0" r="3" opacity="0.8"/>
                    <circle cx="-147" cy="-26" r="3" opacity="0.8"/>
                    <circle cx="-139" cy="-51" r="3" opacity="0.8"/>
                    <circle cx="-129" cy="-75" r="3" opacity="0.8"/>
                    <circle cx="-116" cy="-96" r="3" opacity="0.8"/>
                    <circle cx="-101" cy="-115" r="3" opacity="0.8"/>
                    <circle cx="-83" cy="-130" r="3" opacity="0.8"/>
                    <circle cx="-64" cy="-141" r="3" opacity="0.8"/>
                    <circle cx="-43" cy="-149" r="3" opacity="0.8"/>
                    <circle cx="-21" cy="-153" r="3" opacity="0.8"/>
                    <circle cx="0" cy="-150" r="3" opacity="0.8"/>
                    <circle cx="21" cy="-153" r="3" opacity="0.8"/>
                    <circle cx="43" cy="-149" r="3" opacity="0.8"/>
                    <circle cx="64" cy="-141" r="3" opacity="0.8"/>
                    <circle cx="83" cy="-130" r="3" opacity="0.8"/>
                    <circle cx="101" cy="-115" r="3" opacity="0.8"/>
                    <circle cx="116" cy="-96" r="3" opacity="0.8"/>
                    <circle cx="129" cy="-75" r="3" opacity="0.8"/>
                    <circle cx="139" cy="-51" r="3" opacity="0.8"/>
                    <circle cx="147" cy="-26" r="3" opacity="0.8"/>
                    
                    {/* Extended outer nodes - filling all spaces */}
                    <circle cx="200" cy="0" r="2.5" opacity="0.7"/>
                    <circle cx="196" cy="35" r="2.5" opacity="0.7"/>
                    <circle cx="185" cy="68" r="2.5" opacity="0.7"/>
                    <circle cx="168" cy="98" r="2.5" opacity="0.7"/>
                    <circle cx="147" cy="125" r="2.5" opacity="0.7"/>
                    <circle cx="121" cy="147" r="2.5" opacity="0.7"/>
                    <circle cx="92" cy="165" r="2.5" opacity="0.7"/>
                    <circle cx="61" cy="179" r="2.5" opacity="0.7"/>
                    <circle cx="28" cy="188" r="2.5" opacity="0.7"/>
                    <circle cx="0" cy="200" r="2.5" opacity="0.7"/>
                    <circle cx="-28" cy="188" r="2.5" opacity="0.7"/>
                    <circle cx="-61" cy="179" r="2.5" opacity="0.7"/>
                    <circle cx="-92" cy="165" r="2.5" opacity="0.7"/>
                    <circle cx="-121" cy="147" r="2.5" opacity="0.7"/>
                    <circle cx="-147" cy="125" r="2.5" opacity="0.7"/>
                    <circle cx="-168" cy="98" r="2.5" opacity="0.7"/>
                    <circle cx="-185" cy="68" r="2.5" opacity="0.7"/>
                    <circle cx="-196" cy="35" r="2.5" opacity="0.7"/>
                    <circle cx="-200" cy="0" r="2.5" opacity="0.7"/>
                    <circle cx="-196" cy="-35" r="2.5" opacity="0.7"/>
                    <circle cx="-185" cy="-68" r="2.5" opacity="0.7"/>
                    <circle cx="-168" cy="-98" r="2.5" opacity="0.7"/>
                    <circle cx="-147" cy="-125" r="2.5" opacity="0.7"/>
                    <circle cx="-121" cy="-147" r="2.5" opacity="0.7"/>
                    <circle cx="-92" cy="-165" r="2.5" opacity="0.7"/>
                    <circle cx="-61" cy="-179" r="2.5" opacity="0.7"/>
                    <circle cx="-28" cy="-188" r="2.5" opacity="0.7"/>
                    <circle cx="0" cy="-200" r="2.5" opacity="0.7"/>
                    <circle cx="28" cy="-188" r="2.5" opacity="0.7"/>
                    <circle cx="61" cy="-179" r="2.5" opacity="0.7"/>
                    <circle cx="92" cy="-165" r="2.5" opacity="0.7"/>
                    <circle cx="121" cy="-147" r="2.5" opacity="0.7"/>
                    <circle cx="147" cy="-125" r="2.5" opacity="0.7"/>
                    <circle cx="168" cy="-98" r="2.5" opacity="0.7"/>
                    <circle cx="185" cy="-68" r="2.5" opacity="0.7"/>
                    <circle cx="196" cy="-35" r="2.5" opacity="0.7"/>
                    
                    {/* Far peripheral nodes */}
                    <circle cx="250" cy="0" r="2" opacity="0.6"/>
                    <circle cx="245" cy="44" r="2" opacity="0.6"/>
                    <circle cx="231" cy="85" r="2" opacity="0.6"/>
                    <circle cx="210" cy="123" r="2" opacity="0.6"/>
                    <circle cx="184" cy="156" r="2" opacity="0.6"/>
                    <circle cx="151" cy="184" r="2" opacity="0.6"/>
                    <circle cx="115" cy="206" r="2" opacity="0.6"/>
                    <circle cx="76" cy="224" r="2" opacity="0.6"/>
                    <circle cx="35" cy="235" r="2" opacity="0.6"/>
                    <circle cx="0" cy="250" r="2" opacity="0.6"/>
                    <circle cx="-35" cy="235" r="2" opacity="0.6"/>
                    <circle cx="-76" cy="224" r="2" opacity="0.6"/>
                    <circle cx="-115" cy="206" r="2" opacity="0.6"/>
                    <circle cx="-151" cy="184" r="2" opacity="0.6"/>
                    <circle cx="-184" cy="156" r="2" opacity="0.6"/>
                    <circle cx="-210" cy="123" r="2" opacity="0.6"/>
                    <circle cx="-231" cy="85" r="2" opacity="0.6"/>
                    <circle cx="-245" cy="44" r="2" opacity="0.6"/>
                    <circle cx="-250" cy="0" r="2" opacity="0.6"/>
                    <circle cx="-245" cy="-44" r="2" opacity="0.6"/>
                    <circle cx="-231" cy="-85" r="2" opacity="0.6"/>
                    <circle cx="-210" cy="-123" r="2" opacity="0.6"/>
                    <circle cx="-184" cy="-156" r="2" opacity="0.6"/>
                    <circle cx="-151" cy="-184" r="2" opacity="0.6"/>
                    <circle cx="-115" cy="-206" r="2" opacity="0.6"/>
                    <circle cx="-76" cy="-224" r="2" opacity="0.6"/>
                    <circle cx="-35" cy="-235" r="2" opacity="0.6"/>
                    <circle cx="0" cy="-250" r="2" opacity="0.6"/>
                    <circle cx="35" cy="-235" r="2" opacity="0.6"/>
                    <circle cx="76" cy="-224" r="2" opacity="0.6"/>
                    <circle cx="115" cy="-206" r="2" opacity="0.6"/>
                    <circle cx="151" cy="-184" r="2" opacity="0.6"/>
                    <circle cx="184" cy="-156" r="2" opacity="0.6"/>
                    <circle cx="210" cy="-123" r="2" opacity="0.6"/>
                    <circle cx="231" cy="-85" r="2" opacity="0.6"/>
                    <circle cx="245" cy="-44" r="2" opacity="0.6"/>
                    
                    {/* Extreme peripheral nodes - reaching edge */}
                    <circle cx="300" cy="0" r="1.5" opacity="0.5"/>
                    <circle cx="294" cy="52" r="1.5" opacity="0.5"/>
                    <circle cx="277" cy="102" r="1.5" opacity="0.5"/>
                    <circle cx="252" cy="148" r="1.5" opacity="0.5"/>
                    <circle cx="220" cy="187" r="1.5" opacity="0.5"/>
                    <circle cx="181" cy="221" r="1.5" opacity="0.5"/>
                    <circle cx="138" cy="247" r="1.5" opacity="0.5"/>
                    <circle cx="91" cy="269" r="1.5" opacity="0.5"/>
                    <circle cx="42" cy="283" r="1.5" opacity="0.5"/>
                    <circle cx="0" cy="300" r="1.5" opacity="0.5"/>
                    <circle cx="-42" cy="283" r="1.5" opacity="0.5"/>
                    <circle cx="-91" cy="269" r="1.5" opacity="0.5"/>
                    <circle cx="-138" cy="247" r="1.5" opacity="0.5"/>
                    <circle cx="-181" cy="221" r="1.5" opacity="0.5"/>
                    <circle cx="-220" cy="187" r="1.5" opacity="0.5"/>
                    <circle cx="-252" cy="148" r="1.5" opacity="0.5"/>
                    <circle cx="-277" cy="102" r="1.5" opacity="0.5"/>
                    <circle cx="-294" cy="52" r="1.5" opacity="0.5"/>
                    <circle cx="-300" cy="0" r="1.5" opacity="0.5"/>
                    <circle cx="-294" cy="-52" r="1.5" opacity="0.5"/>
                    <circle cx="-277" cy="-102" r="1.5" opacity="0.5"/>
                    <circle cx="-252" cy="-148" r="1.5" opacity="0.5"/>
                    <circle cx="-220" cy="-187" r="1.5" opacity="0.5"/>
                    <circle cx="-181" cy="-221" r="1.5" opacity="0.5"/>
                    <circle cx="-138" cy="-247" r="1.5" opacity="0.5"/>
                    <circle cx="-91" cy="-269" r="1.5" opacity="0.5"/>
                    <circle cx="-42" cy="-283" r="1.5" opacity="0.5"/>
                    <circle cx="0" cy="-300" r="1.5" opacity="0.5"/>
                    <circle cx="42" cy="-283" r="1.5" opacity="0.5"/>
                    <circle cx="91" cy="-269" r="1.5" opacity="0.5"/>
                    <circle cx="138" cy="-247" r="1.5" opacity="0.5"/>
                    <circle cx="181" cy="-221" r="1.5" opacity="0.5"/>
                    <circle cx="220" cy="-187" r="1.5" opacity="0.5"/>
                    <circle cx="252" cy="-148" r="1.5" opacity="0.5"/>
                    <circle cx="277" cy="-102" r="1.5" opacity="0.5"/>
                    <circle cx="294" cy="-52" r="1.5" opacity="0.5"/>
                  </g>
                  
                  {/* Complete neural network electrical pulses - following all 360-degree paths */}
                  
                  {/* Inner ring pulses - 12 directions */}
                  <circle r="5" fill="hsl(330 81% 70%)" opacity="1">
                    <animateMotion dur="4.0s" repeatCount="indefinite" path="M 60 0 Q 100 -20 140 -10 Q 180 -25 220 -15 Q 260 -30 300 -20 Q 340 -35 380 -25 Q 420 -40 460 -30 Q 500 -45 540 -35 Q 580 -50 620 -40 Q 660 -55 700 -45 Q 740 -60 780 -50 Q 800 -55 800 -55"/>
                    <animate attributeName="opacity" values="1; 1; 0.5; 1; 0" dur="4.0s" repeatCount="indefinite"/>
                  </circle>
                  <circle r="5" fill="hsl(330 81% 70%)" opacity="1">
                    <animateMotion dur="4.1s" repeatCount="indefinite" path="M 52 30 Q 92 10 132 20 Q 172 5 212 15 Q 252 0 292 10 Q 332 -5 372 5 Q 412 -10 452 0 Q 492 -15 532 -5 Q 572 -20 612 -10 Q 652 -25 692 -15 Q 732 -30 772 -20 Q 800 -25 800 -25"/>
                    <animate attributeName="opacity" values="1; 1; 0.5; 1; 0" dur="4.1s" repeatCount="indefinite"/>
                  </circle>
                  <circle r="5" fill="hsl(330 81% 70%)" opacity="1">
                    <animateMotion dur="4.2s" repeatCount="indefinite" path="M 30 52 Q 70 32 110 42 Q 150 27 190 37 Q 230 22 270 32 Q 310 17 350 27 Q 390 12 430 22 Q 470 7 510 17 Q 550 2 590 12 Q 630 -3 670 7 Q 710 -8 750 2 Q 780 -5 800 0"/>
                    <animate attributeName="opacity" values="1; 1; 0.5; 1; 0" dur="4.2s" repeatCount="indefinite"/>
                  </circle>
                  <circle r="5" fill="hsl(330 81% 70%)" opacity="1">
                    <animateMotion dur="4.3s" repeatCount="indefinite" path="M 0 60 Q 40 40 80 50 Q 120 35 160 45 Q 200 30 240 40 Q 280 25 320 35 Q 360 20 400 30 Q 440 15 480 25 Q 520 10 560 20 Q 600 5 640 15 Q 680 0 720 10 Q 760 -5 800 5"/>
                    <animate attributeName="opacity" values="1; 1; 0.5; 1; 0" dur="4.3s" repeatCount="indefinite"/>
                  </circle>
                  <circle r="5" fill="hsl(330 81% 70%)" opacity="1">
                    <animateMotion dur="4.4s" repeatCount="indefinite" path="M -30 52 Q 10 32 50 42 Q 90 27 130 37 Q 170 22 210 32 Q 250 17 290 27 Q 330 12 370 22 Q 410 7 450 17 Q 490 2 530 12 Q 570 -3 610 7 Q 650 -8 690 2 Q 730 -5 770 5 Q 800 0 800 10"/>
                    <animate attributeName="opacity" values="1; 1; 0.5; 1; 0" dur="4.4s" repeatCount="indefinite"/>
                  </circle>
                  <circle r="5" fill="hsl(330 81% 70%)" opacity="1">
                    <animateMotion dur="4.5s" repeatCount="indefinite" path="M -52 30 Q -12 10 28 20 Q 68 5 108 15 Q 148 0 188 10 Q 228 -5 268 5 Q 308 -10 348 0 Q 388 -15 428 -5 Q 468 -20 508 -10 Q 548 -25 588 -15 Q 628 -30 668 -20 Q 708 -35 748 -25 Q 780 -30 800 -20"/>
                    <animate attributeName="opacity" values="1; 1; 0.5; 1; 0" dur="4.5s" repeatCount="indefinite"/>
                  </circle>
                  <circle r="5" fill="hsl(330 81% 70%)" opacity="1">
                    <animateMotion dur="4.6s" repeatCount="indefinite" path="M -60 0 Q -20 -20 20 -10 Q 60 -25 100 -15 Q 140 -30 180 -20 Q 220 -35 260 -25 Q 300 -40 340 -30 Q 380 -45 420 -35 Q 460 -50 500 -40 Q 540 -55 580 -45 Q 620 -60 660 -50 Q 700 -65 740 -55 Q 780 -60 800 -50"/>
                    <animate attributeName="opacity" values="1; 1; 0.5; 1; 0" dur="4.6s" repeatCount="indefinite"/>
                  </circle>
                  <circle r="5" fill="hsl(330 81% 70%)" opacity="1">
                    <animateMotion dur="4.7s" repeatCount="indefinite" path="M -52 -30 Q -12 -50 28 -40 Q 68 -55 108 -45 Q 148 -60 188 -50 Q 228 -65 268 -55 Q 308 -70 348 -60 Q 388 -75 428 -65 Q 468 -80 508 -70 Q 548 -85 588 -75 Q 628 -90 668 -80 Q 708 -95 748 -85 Q 780 -90 800 -80"/>
                    <animate attributeName="opacity" values="1; 1; 0.5; 1; 0" dur="4.7s" repeatCount="indefinite"/>
                  </circle>
                  <circle r="5" fill="hsl(330 81% 70%)" opacity="1">
                    <animateMotion dur="4.8s" repeatCount="indefinite" path="M -30 -52 Q 10 -72 50 -62 Q 90 -77 130 -67 Q 170 -82 210 -72 Q 250 -87 290 -77 Q 330 -92 370 -82 Q 410 -97 450 -87 Q 490 -102 530 -92 Q 570 -107 610 -97 Q 650 -112 690 -102 Q 730 -117 770 -107 Q 800 -112 800 -100"/>
                    <animate attributeName="opacity" values="1; 1; 0.5; 1; 0" dur="4.8s" repeatCount="indefinite"/>
                  </circle>
                  <circle r="5" fill="hsl(330 81% 70%)" opacity="1">
                    <animateMotion dur="4.9s" repeatCount="indefinite" path="M 0 -60 Q 40 -80 80 -70 Q 120 -85 160 -75 Q 200 -90 240 -80 Q 280 -95 320 -85 Q 360 -100 400 -90 Q 440 -105 480 -95 Q 520 -110 560 -100 Q 600 -115 640 -105 Q 680 -120 720 -110 Q 760 -125 800 -115"/>
                    <animate attributeName="opacity" values="1; 1; 0.5; 1; 0" dur="4.9s" repeatCount="indefinite"/>
                  </circle>
                  <circle r="5" fill="hsl(330 81% 70%)" opacity="1">
                    <animateMotion dur="5.0s" repeatCount="indefinite" path="M 30 -52 Q 70 -72 110 -62 Q 150 -77 190 -67 Q 230 -82 270 -72 Q 310 -87 350 -77 Q 390 -92 430 -82 Q 470 -97 510 -87 Q 550 -102 590 -92 Q 630 -107 670 -97 Q 710 -112 750 -102 Q 780 -107 800 -95"/>
                    <animate attributeName="opacity" values="1; 1; 0.5; 1; 0" dur="5.0s" repeatCount="indefinite"/>
                  </circle>
                  <circle r="5" fill="hsl(330 81% 70%)" opacity="1">
                    <animateMotion dur="5.1s" repeatCount="indefinite" path="M 52 -30 Q 92 -50 132 -40 Q 172 -55 212 -45 Q 252 -60 292 -50 Q 332 -65 372 -55 Q 412 -70 452 -60 Q 492 -75 532 -65 Q 572 -80 612 -70 Q 652 -85 692 -75 Q 732 -90 772 -80 Q 800 -85 800 -75"/>
                    <animate attributeName="opacity" values="1; 1; 0.5; 1; 0" dur="5.1s" repeatCount="indefinite"/>
                  </circle>
                  
                  {/* Middle ring pulses */}
                  <circle r="4" fill="hsl(330 81% 70%)" opacity="0.8">
                    <animateMotion dur="5.2s" repeatCount="indefinite" path="M 100 0 Q 150 -30 200 -15 Q 250 -45 300 -30 Q 350 -60 400 -45 Q 450 -75 500 -60 Q 550 -90 600 -75 Q 650 -105 700 -90 Q 750 -120 800 -105"/>
                    <animate attributeName="opacity" values="0.8; 0.8; 0.3; 0.8; 0" dur="5.2s" repeatCount="indefinite"/>
                  </circle>
                  <circle r="4" fill="hsl(330 81% 70%)" opacity="0.8">
                    <animateMotion dur="5.3s" repeatCount="indefinite" path="M 86 50 Q 136 20 186 35 Q 236 5 286 20 Q 336 -10 386 5 Q 436 -25 486 -10 Q 536 -40 586 -25 Q 636 -55 686 -40 Q 736 -70 786 -55 Q 800 -60 800 -50"/>
                    <animate attributeName="opacity" values="0.8; 0.8; 0.3; 0.8; 0" dur="5.3s" repeatCount="indefinite"/>
                  </circle>
                  <circle r="4" fill="hsl(330 81% 70%)" opacity="0.8">
                    <animateMotion dur="5.4s" repeatCount="indefinite" path="M 50 86 Q 100 56 150 71 Q 200 41 250 56 Q 300 26 350 41 Q 400 11 450 26 Q 500 -4 550 11 Q 600 -19 650 -4 Q 700 -34 750 -19 Q 800 -39 800 -25"/>
                    <animate attributeName="opacity" values="0.8; 0.8; 0.3; 0.8; 0" dur="5.4s" repeatCount="indefinite"/>
                  </circle>
                  <circle r="4" fill="hsl(330 81% 70%)" opacity="0.8">
                    <animateMotion dur="5.5s" repeatCount="indefinite" path="M 0 100 Q 50 70 100 85 Q 150 55 200 70 Q 250 40 300 55 Q 350 25 400 40 Q 450 10 500 25 Q 550 -5 600 10 Q 650 -20 700 -5 Q 750 -35 800 -20"/>
                    <animate attributeName="opacity" values="0.8; 0.8; 0.3; 0.8; 0" dur="5.5s" repeatCount="indefinite"/>
                  </circle>
                  
                  {/* Outer ring pulses */}
                  <circle r="3" fill="hsl(330 81% 70%)" opacity="0.6">
                    <animateMotion dur="5.6s" repeatCount="indefinite" path="M 150 0 Q 200 -40 250 -25 Q 300 -65 350 -50 Q 400 -90 450 -75 Q 500 -115 550 -100 Q 600 -140 650 -125 Q 700 -165 750 -150 Q 800 -175 800 -160"/>
                    <animate attributeName="opacity" values="0.6; 0.6; 0.2; 0.6; 0" dur="5.6s" repeatCount="indefinite"/>
                  </circle>
                  <circle r="3" fill="hsl(330 81% 70%)" opacity="0.6">
                    <animateMotion dur="5.7s" repeatCount="indefinite" path="M 129 75 Q 179 35 229 50 Q 279 10 329 25 Q 379 -15 429 0 Q 479 -40 529 -25 Q 579 -65 629 -50 Q 679 -90 729 -75 Q 779 -115 800 -100"/>
                    <animate attributeName="opacity" values="0.6; 0.6; 0.2; 0.6; 0" dur="5.7s" repeatCount="indefinite"/>
                  </circle>
                  <circle r="3" fill="hsl(330 81% 70%)" opacity="0.6">
                    <animateMotion dur="5.8s" repeatCount="indefinite" path="M 75 129 Q 125 89 175 104 Q 225 64 275 79 Q 325 39 375 54 Q 425 14 475 29 Q 525 -11 575 4 Q 625 -36 675 -21 Q 725 -61 775 -46 Q 800 -66 800 -50"/>
                    <animate attributeName="opacity" values="0.6; 0.6; 0.2; 0.6; 0" dur="5.8s" repeatCount="indefinite"/>
                  </circle>
                  <circle r="3" fill="hsl(330 81% 70%)" opacity="0.6">
                    <animateMotion dur="5.9s" repeatCount="indefinite" path="M 0 150 Q 50 110 100 125 Q 150 85 200 100 Q 250 60 300 75 Q 350 35 400 50 Q 450 10 500 25 Q 550 -15 600 0 Q 650 -40 700 -25 Q 750 -65 800 -50"/>
                    <animate attributeName="opacity" values="0.6; 0.6; 0.2; 0.6; 0" dur="5.9s" repeatCount="indefinite"/>
                  </circle>
                  
                  {/* Cross-connection pulses */}
                  <circle r="3" fill="hsl(280 81% 70%)" opacity="0.5">
                    <animateMotion dur="3.5s" repeatCount="indefinite" path="M 100 50 Q 150 25 200 50 Q 250 25 300 50"/>
                    <animate attributeName="opacity" values="0.5; 0.7; 0.3; 0.5; 0" dur="3.5s" repeatCount="indefinite"/>
                  </circle>
                  <circle r="3" fill="hsl(280 81% 70%)" opacity="0.5">
                    <animateMotion dur="3.6s" repeatCount="indefinite" path="M 50 100 Q 25 150 50 200 Q 25 250 50 300"/>
                    <animate attributeName="opacity" values="0.5; 0.7; 0.3; 0.5; 0" dur="3.6s" repeatCount="indefinite"/>
                  </circle>
                  <circle r="3" fill="hsl(280 81% 70%)" opacity="0.5">
                    <animateMotion dur="3.7s" repeatCount="indefinite" path="M -100 50 Q -150 25 -200 50 Q -250 25 -300 50"/>
                    <animate attributeName="opacity" values="0.5; 0.7; 0.3; 0.5; 0" dur="3.7s" repeatCount="indefinite"/>
                  </circle>
                  <circle r="3" fill="hsl(280 81% 70%)" opacity="0.5">
                    <animateMotion dur="3.8s" repeatCount="indefinite" path="M -50 100 Q -25 150 -50 200 Q -25 250 -50 300"/>
                    <animate attributeName="opacity" values="0.5; 0.7; 0.3; 0.5; 0" dur="3.8s" repeatCount="indefinite"/>
                  </circle>
                  
                  {/* Diagonal cross-connection pulses */}
                  <circle r="2" fill="hsl(220 81% 70%)" opacity="0.4">
                    <animateMotion dur="4.0s" repeatCount="indefinite" path="M 70 70 Q 105 105 140 140 Q 175 175 210 210 Q 245 245 280 280"/>
                    <animate attributeName="opacity" values="0.4; 0.6; 0.2; 0.4; 0" dur="4.0s" repeatCount="indefinite"/>
                  </circle>
                  <circle r="2" fill="hsl(220 81% 70%)" opacity="0.4">
                    <animateMotion dur="4.1s" repeatCount="indefinite" path="M 70 -70 Q 105 -105 140 -140 Q 175 -175 210 -210 Q 245 -245 280 -280"/>
                    <animate attributeName="opacity" values="0.4; 0.6; 0.2; 0.4; 0" dur="4.1s" repeatCount="indefinite"/>
                  </circle>
                  <circle r="2" fill="hsl(220 81% 70%)" opacity="0.4">
                    <animateMotion dur="4.2s" repeatCount="indefinite" path="M -70 70 Q -105 105 -140 140 Q -175 175 -210 210 Q -245 245 -280 280"/>
                    <animate attributeName="opacity" values="0.4; 0.6; 0.2; 0.4; 0" dur="4.2s" repeatCount="indefinite"/>
                  </circle>
                  <circle r="2" fill="hsl(220 81% 70%)" opacity="0.4">
                    <animateMotion dur="4.3s" repeatCount="indefinite" path="M -70 -70 Q -105 -105 -140 -140 Q -175 -175 -210 -210 Q -245 -245 -280 -280"/>
                    <animate attributeName="opacity" values="0.4; 0.6; 0.2; 0.4; 0" dur="4.3s" repeatCount="indefinite"/>
                  </circle>
                </svg>
              </div>
              
            {/* Enhanced Logo Container - smaller on mobile for better circuitry visibility */}
            <div className="relative z-10">
              <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center mx-auto">
                <div className="w-full h-full rounded-full overflow-hidden bg-transparent">
                  <img 
                    src="/recode-logo.png" 
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
                <div className="flex flex-col items-center space-y-2">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                  <div className="text-center">
                    <p className="font-semibold text-gray-900 text-sm">Qualified GP</p>
                    <p className="text-xs text-gray-600">Registered Practitioner</p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <div className="text-center">
                    <p className="font-semibold text-gray-900 text-sm">CBT Accredited</p>
                    <p className="text-xs text-gray-600">Professional Diploma</p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-2">
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