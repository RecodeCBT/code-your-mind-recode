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
      <section className="py-4 sm:py-8 px-4 bg-gradient-to-b from-orange-50/30 via-purple-50/20 to-blue-50/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            {/* Enhanced Logo Section with Complete 360-degree Neural Network */}
            <div className="relative flex items-center justify-center mb-4 sm:mb-12 h-64 sm:h-96 overflow-hidden">
              
              {/* Uniform 360-degree neural network expanding from center */}
              <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                <svg className="w-full h-full max-w-none" preserveAspectRatio="xMidYMid meet" viewBox="-600 -300 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                  
                  {/* Enhanced gradient definitions */}
                  <defs>
                    <radialGradient id="neuralFade" cx="50%" cy="50%" r="80%">
                      <stop offset="0%" stopColor="hsl(330 81% 60%)" stopOpacity="1" />
                      <stop offset="30%" stopColor="hsl(330 81% 60%)" stopOpacity="0.8" />
                      <stop offset="60%" stopColor="hsl(330 81% 60%)" stopOpacity="0.4" />
                      <stop offset="85%" stopColor="hsl(330 81% 60%)" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="hsl(330 81% 60%)" stopOpacity="0.05" />
                    </radialGradient>
                    
                    {/* Path definitions for impulse animations */}
                    <path id="neuralPath1" d="M 0 0 Q 60 -20 120 -10 Q 180 -30 240 -20 Q 300 -40 360 -30 Q 420 -50 480 -40 Q 540 -60 600 -50" fill="none" />
                    <path id="neuralPath2" d="M 0 0 Q 42 42 84 84 Q 126 126 168 168 Q 210 210 252 252 Q 294 294 336 336 Q 378 378 420 420" fill="none" />
                    <path id="neuralPath3" d="M 0 0 Q 0 60 0 120 Q 0 180 0 240 Q 0 300 0 360 Q 0 420 0 480" fill="none" />
                    <path id="neuralPath4" d="M 0 0 Q -42 42 -84 84 Q -126 126 -168 168 Q -210 210 -252 252 Q -294 294 -336 336" fill="none" />
                    <path id="neuralPath5" d="M 0 0 Q -60 0 -120 0 Q -180 0 -240 0 Q -300 0 -360 0 Q -420 0 -480 0 Q -540 0 -600 0" fill="none" />
                    <path id="neuralPath6" d="M 0 0 Q -42 -42 -84 -84 Q -126 -126 -168 -168 Q -210 -210 -252 -252 Q -294 -294 -336 -336" fill="none" />
                    <path id="neuralPath7" d="M 0 0 Q 0 -60 0 -120 Q 0 -180 0 -240 Q 0 -300 0 -360 Q 0 -420 0 -480" fill="none" />
                    <path id="neuralPath8" d="M 0 0 Q 42 -42 84 -84 Q 126 -126 168 -168 Q 210 -210 252 -252 Q 294 -294 336 -336" fill="none" />
                  </defs>
                  
                  {/* Complete 360-degree Neural Network */}
                  <g stroke="url(#neuralFade)" fill="none">
                    
                    {/* Organic Neurone-like Pathways - 8 main dendrites */}
                    {/* 0° - East - Branching dendrite */}
                    <path d="M 15 0 Q 40 -12 65 -8 Q 90 -15 115 -5 Q 140 -18 170 -12 Q 200 -25 235 -15 Q 270 -30 305 -18 Q 340 -35 380 -22 Q 420 -40 465 -28 Q 510 -45 560 -32 Q 600 -38 600 -38" strokeWidth="2.8" />
                    <path d="M 35 8 Q 60 5 85 12 Q 110 8 135 15 Q 160 10 190 18 Q 220 12 250 22 Q 280 15 315 25 Q 350 18 385 28 Q 420 20 460 30 Q 500 22 545 32 Q 590 25 600 28" strokeWidth="2.2" />
                    
                    {/* 45° - Northeast - Circuit-like angular path */}
                    <path d="M 11 11 L 35 25 Q 50 35 65 55 L 85 75 Q 100 95 120 100 L 140 120 Q 160 140 175 165 L 195 185 Q 215 205 230 190 L 250 210 Q 270 230 285 255 L 305 275 Q 325 295 340 280 L 360 300 Q 380 320 395 345 L 415 365 Q 435 385 450 370 L 470 390 Q 490 410 505 435 L 525 455 Q 545 475 560 460" strokeWidth="2.8" />
                    <path d="M 18 5 Q 42 28 58 48 L 78 68 Q 98 88 115 93 L 135 113 Q 155 133 172 158 L 192 178 Q 212 198 228 183 L 248 203 Q 268 223 283 248 L 303 268 Q 323 288 338 273 L 358 293 Q 378 313 393 338 L 413 358 Q 433 378 448 363 L 468 383 Q 488 403 503 428 L 523 448 Q 543 468 558 453" strokeWidth="2.2" />
                    
                    {/* 90° - North - Neurone dendrite with branches */}
                    <path d="M 0 15 Q -8 45 -5 75 Q -12 105 -8 135 Q -15 165 -10 195 Q -18 225 -12 255 Q -20 285 -15 315 Q -22 345 -18 375 Q -25 405 -20 435 Q -28 465 -22 495 Q -30 525 -25 555 Q -32 585 -28 600" strokeWidth="2.8" />
                    <path d="M 8 25 Q 5 55 8 85 Q 3 115 6 145 Q 0 175 3 205 Q -3 235 0 265 Q -5 295 -2 325 Q -8 355 -5 385 Q -10 415 -7 445 Q -12 475 -9 505 Q -15 535 -12 565 Q -18 595 -15 600" strokeWidth="2.2" />
                    
                    {/* 135° - Northwest - Mixed circuit-neurone */}
                    <path d="M -11 11 Q -25 35 -45 55 L -65 75 Q -85 95 -100 120 L -120 140 Q -140 160 -165 175 L -185 195 Q -205 215 -190 230 L -210 250 Q -230 270 -255 285 L -275 305 Q -295 325 -280 340 L -300 360 Q -320 380 -345 395 L -365 415 Q -385 435 -370 450 L -390 470 Q -410 490 -435 505 L -455 525 Q -475 545 -460 560" strokeWidth="2.8" />
                    
                    {/* 180° - West - Branching dendrite */}
                    <path d="M -15 0 Q -45 -8 -75 -5 Q -105 -12 -135 -8 Q -165 -15 -195 -10 Q -225 -18 -255 -12 Q -285 -20 -315 -15 Q -345 -22 -375 -18 Q -405 -25 -435 -20 Q -465 -28 -495 -22 Q -525 -30 -555 -25 Q -585 -32 -600 -28" strokeWidth="2.8" />
                    
                    {/* 225° - Southwest - Circuit angular */}
                    <path d="M -11 -11 L -35 -25 Q -50 -35 -65 -55 L -85 -75 Q -100 -95 -120 -100 L -140 -120 Q -160 -140 -175 -165 L -195 -185 Q -215 -205 -230 -190 L -250 -210 Q -270 -230 -285 -255 L -305 -275 Q -325 -295 -340 -280 L -360 -300 Q -380 -320 -395 -345 L -415 -365 Q -435 -385 -450 -370 L -470 -390 Q -490 -410 -505 -435 L -525 -455 Q -545 -475 -560 -460" strokeWidth="2.8" />
                    
                    {/* 270° - South - Neurone with synaptic branches */}
                    <path d="M 0 -15 Q 8 -45 5 -75 Q 12 -105 8 -135 Q 15 -165 10 -195 Q 18 -225 12 -255 Q 20 -285 15 -315 Q 22 -345 18 -375 Q 25 -405 20 -435 Q 28 -465 22 -495 Q 30 -525 25 -555 Q 32 -585 28 -600" strokeWidth="2.8" />
                    
                    {/* 315° - Southeast - Mixed circuit-neurone */}
                    <path d="M 11 -11 Q 25 -35 45 -55 L 65 -75 Q 85 -95 100 -120 L 120 -140 Q 140 -160 165 -175 L 185 -195 Q 205 -215 190 -230 L 210 -250 Q 230 -270 255 -285 L 275 -305 Q 295 -325 280 -340 L 300 -360 Q 320 -380 345 -395 L 365 -415 Q 385 -435 370 -450 L 390 -470 Q 410 -490 435 -505 L 455 -525 Q 475 -545 460 -560" strokeWidth="2.8" />
                    
                    {/* Secondary neurone branches - filling gaps */}
                    <path d="M 14 6 Q 35 20 58 35 Q 80 50 105 65 L 128 88 Q 150 110 175 125 Q 200 140 225 155 L 248 178 Q 270 200 295 215 Q 320 230 345 245 L 368 268 Q 390 290 415 305 Q 440 320 465 335 L 488 358 Q 510 380 535 395 Q 560 410 585 425" strokeWidth="2.2" />
                    <path d="M 6 14 Q 20 35 35 58 Q 50 80 65 105 L 88 128 Q 110 150 125 175 Q 140 200 155 225 L 178 248 Q 200 270 215 295 Q 230 320 245 345 L 268 368 Q 290 390 305 415 Q 320 440 335 465 L 358 488 Q 380 510 395 535 Q 410 560 425 585" strokeWidth="2.2" />
                    <path d="M -6 14 Q -20 35 -35 58 Q -50 80 -65 105 L -88 128 Q -110 150 -125 175 Q -140 200 -155 225 L -178 248 Q -200 270 -215 295 Q -230 320 -245 345 L -268 368 Q -290 390 -305 415 Q -320 440 -335 465 L -358 488 Q -380 510 -395 535 Q -410 560 -425 585" strokeWidth="2.2" />
                    <path d="M -14 6 Q -35 20 -58 35 Q -80 50 -105 65 L -128 88 Q -150 110 -175 125 Q -200 140 -225 155 L -248 178 Q -270 200 -295 215 Q -320 230 -345 245 L -368 268 Q -390 290 -415 305 Q -440 320 -465 335 L -488 358 Q -510 380 -535 395 Q -560 410 -585 425" strokeWidth="2.2" />
                    <path d="M -14 -6 Q -35 -20 -58 -35 Q -80 -50 -105 -65 L -128 -88 Q -150 -110 -175 -125 Q -200 -140 -225 -155 L -248 -178 Q -270 -200 -295 -215 Q -320 -230 -345 -245 L -368 -268 Q -390 -290 -415 -305 Q -440 -320 -465 -335 L -488 -358 Q -510 -380 -535 -395 Q -560 -410 -585 -425" strokeWidth="2.2" />
                    <path d="M -6 -14 Q -20 -35 -35 -58 Q -50 -80 -65 -105 L -88 -128 Q -110 -150 -125 -175 Q -140 -200 -155 -225 L -178 -248 Q -200 -270 -215 -295 Q -230 -320 -245 -345 L -268 -368 Q -290 -390 -305 -415 Q -320 -440 -335 -465 L -358 -488 Q -380 -510 -395 -535 Q -410 -560 -425 -585" strokeWidth="2.2" />
                    <path d="M 6 -14 Q 20 -35 35 -58 Q 50 -80 65 -105 L 88 -128 Q 110 -150 125 -175 Q 140 -200 155 -225 L 178 -248 Q 200 -270 215 -295 Q 230 -320 245 -345 L 268 -368 Q 290 -390 305 -415 Q 320 -440 335 -465 L 358 -488 Q 380 -510 395 -535 Q 410 -560 425 -585" strokeWidth="2.2" />
                    <path d="M 14 -6 Q 35 -20 58 -35 Q 80 -50 105 -65 L 128 -88 Q 150 -110 175 -125 Q 200 -140 225 -155 L 248 -178 Q 270 -200 295 -215 Q 320 -230 345 -245 L 368 -268 Q 390 -290 415 -305 Q 440 -320 465 -335 L 488 -358 Q 510 -380 535 -395 Q 560 -410 585 -425" strokeWidth="2.2" />
                    
                    {/* Synaptic connections and dendritic branches */}
                    <path d="M 60 20 Q 80 40 100 60 L 120 80 Q 140 100 160 120 L 180 140 Q 200 160 220 180" strokeWidth="1.8" />
                    <path d="M 60 -20 Q 80 -40 100 -60 L 120 -80 Q 140 -100 160 -120 L 180 -140 Q 200 -160 220 -180" strokeWidth="1.8" />
                    <path d="M 20 60 Q 40 80 60 100 L 80 120 Q 100 140 120 160 L 140 180 Q 160 200 180 220" strokeWidth="1.8" />
                    <path d="M -20 60 Q -40 80 -60 100 L -80 120 Q -100 140 -120 160 L -140 180 Q -160 200 -180 220" strokeWidth="1.8" />
                    <path d="M -60 20 Q -80 40 -100 60 L -120 80 Q -140 100 -160 120 L -180 140 Q -200 160 -220 180" strokeWidth="1.8" />
                    <path d="M -60 -20 Q -80 -40 -100 -60 L -120 -80 Q -140 -100 -160 -120 L -180 -140 Q -200 -160 -220 -180" strokeWidth="1.8" />
                    <path d="M -20 -60 Q -40 -80 -60 -100 L -80 -120 Q -100 -140 -120 -160 L -140 -180 Q -160 -200 -180 -220" strokeWidth="1.8" />
                    <path d="M 20 -60 Q 40 -80 60 -100 L 80 -120 Q 100 -140 120 -160 L 140 -180 Q 160 -200 180 -220" strokeWidth="1.8" />
                    
                    {/* Dense interconnection network */}
                    <path d="M 40 40 Q 60 60 80 80 L 100 100 Q 120 120 140 140 L 160 160 Q 180 180 200 200 L 220 220 Q 240 240 260 260 L 280 280" strokeWidth="1.5" />
                    <path d="M 40 -40 Q 60 -60 80 -80 L 100 -100 Q 120 -120 140 -140 L 160 -160 Q 180 -180 200 -200 L 220 -220 Q 240 -240 260 -260 L 280 -280" strokeWidth="1.5" />
                    <path d="M -40 40 Q -60 60 -80 80 L -100 100 Q -120 120 -140 140 L -160 160 Q -180 180 -200 200 L -220 220 Q -240 240 -260 260 L -280 280" strokeWidth="1.5" />
                    <path d="M -40 -40 Q -60 -60 -80 -80 L -100 -100 Q -120 -120 -140 -140 L -160 -160 Q -180 -180 -200 -200 L -220 -220 Q -240 -240 -260 -260 L -280 -280" strokeWidth="1.5" />
                    
                    {/* Cross-network connections */}
                    <path d="M 70 0 Q 105 15 140 0 Q 175 -15 210 0 Q 245 15 280 0 Q 315 -15 350 0 Q 385 15 420 0 Q 455 -15 490 0" strokeWidth="1.2" />
                    <path d="M 0 70 Q 15 105 0 140 Q -15 175 0 210 Q 15 245 0 280 Q -15 315 0 350 Q 15 385 0 420 Q -15 455 0 490" strokeWidth="1.2" />
                    <path d="M -70 0 Q -105 15 -140 0 Q -175 -15 -210 0 Q -245 15 -280 0 Q -315 -15 -350 0 Q -385 15 -420 0 Q -455 -15 -490 0" strokeWidth="1.2" />
                    <path d="M 0 -70 Q 15 -105 0 -140 Q -15 -175 0 -210 Q 15 -245 0 -280 Q -15 -315 0 -350 Q 15 -385 0 -420 Q -15 -455 0 -490" strokeWidth="1.2" />
                    
                    {/* Fine capillary-like connections */}
                    <path d="M 85 35 Q 95 45 105 55 Q 115 65 125 75 Q 135 85 145 95" strokeWidth="1" />
                    <path d="M 85 -35 Q 95 -45 105 -55 Q 115 -65 125 -75 Q 135 -85 145 -95" strokeWidth="1" />
                    <path d="M 35 85 Q 45 95 55 105 Q 65 115 75 125 Q 85 135 95 145" strokeWidth="1" />
                    <path d="M -35 85 Q -45 95 -55 105 Q -65 115 -75 125 Q -85 135 -95 145" strokeWidth="1" />
                    <path d="M -85 35 Q -95 45 -105 55 Q -115 65 -125 75 Q -135 85 -145 95" strokeWidth="1" />
                    <path d="M -85 -35 Q -95 -45 -105 -55 Q -115 -65 -125 -75 Q -135 -85 -145 -95" strokeWidth="1" />
                    <path d="M -35 -85 Q -45 -95 -55 -105 Q -65 -115 -75 -125 Q -85 -135 -95 -145" strokeWidth="1" />
                    <path d="M 35 -85 Q 45 -95 55 -105 Q 65 -115 75 -125 Q 85 -135 95 -145" strokeWidth="1" />
                    
                    {/* Extended peripheral dendrites and circuits - filling outer gaps */}
                    {/* Far-reaching spiculated dendrites */}
                    <path d="M 420 50 Q 450 35 480 45 Q 510 30 540 40 Q 570 25 600 35" strokeWidth="1.8" />
                    <path d="M 420 -50 Q 450 -65 480 -55 Q 510 -70 540 -60 Q 570 -75 600 -65" strokeWidth="1.8" />
                    <path d="M 50 420 Q 35 450 45 480 Q 30 510 40 540 Q 25 570 35 600" strokeWidth="1.8" />
                    <path d="M -50 420 Q -65 450 -55 480 Q -70 510 -60 540 Q -75 570 -65 600" strokeWidth="1.8" />
                    <path d="M -420 50 Q -450 35 -480 45 Q -510 30 -540 40 Q -570 25 -600 35" strokeWidth="1.8" />
                    <path d="M -420 -50 Q -450 -65 -480 -55 Q -510 -70 -540 -60 Q -570 -75 -600 -65" strokeWidth="1.8" />
                    <path d="M 50 -420 Q 35 -450 45 -480 Q 30 -510 40 -540 Q 25 -570 35 -600" strokeWidth="1.8" />
                    <path d="M -50 -420 Q -65 -450 -55 -480 Q -70 -510 -60 -540 Q -75 -570 -65 -600" strokeWidth="1.8" />
                    
                    {/* Diagonal peripheral spikes */}
                    <path d="M 350 350 Q 380 380 410 410 Q 440 440 470 470 Q 500 500 530 530" strokeWidth="1.6" />
                    <path d="M -350 350 Q -380 380 -410 410 Q -440 440 -470 470 Q -500 500 -530 530" strokeWidth="1.6" />
                    <path d="M -350 -350 Q -380 -380 -410 -410 Q -440 -440 -470 -470 Q -500 -500 -530 -530" strokeWidth="1.6" />
                    <path d="M 350 -350 Q 380 -380 410 -410 Q 440 -440 470 -470 Q 500 -500 530 -530" strokeWidth="1.6" />
                    
                    {/* Coding-themed circuit patterns */}
                    {/* Binary-like dendrite patterns */}
                    <path d="M 380 150 L 400 150 Q 420 155 440 150 L 460 150 Q 480 155 500 150 L 520 150 Q 540 155 560 150 L 580 150" strokeWidth="1.4" />
                    <path d="M 380 170 L 400 170 L 400 180 L 420 180 L 420 170 L 440 170 L 440 180 L 460 180 L 460 170 L 480 170" strokeWidth="1.4" />
                    <path d="M 150 380 L 150 400 Q 155 420 150 440 L 150 460 Q 155 480 150 500 L 150 520 Q 155 540 150 560 L 150 580" strokeWidth="1.4" />
                    <path d="M 170 380 L 170 400 L 180 400 L 180 420 L 170 420 L 170 440 L 180 440 L 180 460 L 170 460 L 170 480" strokeWidth="1.4" />
                    
                    {/* Code bracket-like structures */}
                    <path d="M -380 150 L -400 150 L -400 170 L -420 170 L -420 190 L -400 190 L -400 210 L -380 210" strokeWidth="1.4" />
                    <path d="M -150 380 L -150 400 L -170 400 L -170 420 L -190 420 L -190 400 L -210 400 L -210 380" strokeWidth="1.4" />
                    <path d="M -380 -150 L -400 -150 L -400 -170 L -420 -170 L -420 -190 L -400 -190 L -400 -210 L -380 -210" strokeWidth="1.4" />
                    <path d="M 150 -380 L 150 -400 L 170 -400 L 170 -420 L 190 -420 L 190 -400 L 210 -400 L 210 -380" strokeWidth="1.4" />
                    
                    {/* Terminal-like pathway structures */}
                    <path d="M 480 200 Q 500 180 520 200 Q 540 180 560 200 Q 580 180 600 200" strokeWidth="1.2" />
                    <path d="M 200 480 Q 180 500 200 520 Q 180 540 200 560 Q 180 580 200 600" strokeWidth="1.2" />
                    <path d="M -200 480 Q -180 500 -200 520 Q -180 540 -200 560 Q -180 580 -200 600" strokeWidth="1.2" />
                    <path d="M -480 200 Q -500 180 -520 200 Q -540 180 -560 200 Q -580 180 -600 200" strokeWidth="1.2" />
                    <path d="M -480 -200 Q -500 -220 -520 -200 Q -540 -220 -560 -200 Q -580 -220 -600 -200" strokeWidth="1.2" />
                    <path d="M 200 -480 Q 180 -500 200 -520 Q 180 -540 200 -560 Q 180 -580 200 -600" strokeWidth="1.2" />
                    <path d="M -200 -480 Q -180 -500 -200 -520 Q -180 -540 -200 -560 Q -180 -580 -200 -600" strokeWidth="1.2" />
                    <path d="M 480 -200 Q 500 -220 520 -200 Q 540 -220 560 -200 Q 580 -220 600 -200" strokeWidth="1.2" />
                    
                    {/* Additional spiculated micro-dendrites */}
                    <path d="M 450 100 Q 470 95 490 105 Q 510 100 530 110 Q 550 105 570 115" strokeWidth="1" />
                    <path d="M 100 450 Q 95 470 105 490 Q 100 510 110 530 Q 105 550 115 570" strokeWidth="1" />
                    <path d="M -100 450 Q -95 470 -105 490 Q -100 510 -110 530 Q -105 550 -115 570" strokeWidth="1" />
                    <path d="M -450 100 Q -470 95 -490 105 Q -510 100 -530 110 Q -550 105 -570 115" strokeWidth="1" />
                    <path d="M -450 -100 Q -470 -105 -490 -95 Q -510 -100 -530 -90 Q -550 -95 -570 -85" strokeWidth="1" />
                    <path d="M 100 -450 Q 95 -470 105 -490 Q 100 -510 110 -530 Q 105 -550 115 -570" strokeWidth="1" />
                    <path d="M -100 -450 Q -95 -470 -105 -490 Q -100 -510 -110 -530 Q -105 -550 -115 -570" strokeWidth="1" />
                    <path d="M 450 -100 Q 470 -105 490 -95 Q 510 -100 530 -90 Q 550 -95 570 -85" strokeWidth="1" />
                    
                    {/* Network bridging connections */}
                    <path d="M 300 220 Q 320 240 340 220 Q 360 240 380 220 Q 400 240 420 220" strokeWidth="1" />
                    <path d="M 220 300 Q 240 320 220 340 Q 240 360 220 380 Q 240 400 220 420" strokeWidth="1" />
                    <path d="M -220 300 Q -240 320 -220 340 Q -240 360 -220 380 Q -240 400 -220 420" strokeWidth="1" />
                    <path d="M -300 220 Q -320 240 -340 220 Q -360 240 -380 220 Q -400 240 -420 220" strokeWidth="1" />
                    <path d="M -300 -220 Q -320 -240 -340 -220 Q -360 -240 -380 -220 Q -400 -240 -420 -220" strokeWidth="1" />
                    <path d="M 220 -300 Q 240 -320 220 -340 Q 240 -360 220 -380 Q 240 -400 220 -420" strokeWidth="1" />
                    <path d="M -220 -300 Q -240 -320 -220 -340 Q -240 -360 -220 -380 Q -240 -400 -220 -420" strokeWidth="1" />
                    <path d="M 300 -220 Q 320 -240 340 -220 Q 360 -240 380 -220 Q 400 -240 420 -220" strokeWidth="1" />
                  </g>
                  
                  {/* Neural Network Nodes - Complete 360-degree coverage */}
                  <g fill="hsl(330 81% 60%)">
                    {/* Central hub - main cell body */}
                    <circle cx="0" cy="0" r="7" opacity="1" />
                    
                    {/* Primary neurone cell bodies and circuit junction nodes */}
                    <circle cx="70" cy="0" r="5" opacity="0.95" />
                    <circle cx="65" cy="25" r="4" opacity="0.9" />
                    <circle cx="49" cy="49" r="5" opacity="0.95" />
                    <circle cx="25" cy="65" r="4" opacity="0.9" />
                    <circle cx="0" cy="70" r="5" opacity="0.95" />
                    <circle cx="-25" cy="65" r="4" opacity="0.9" />
                    <circle cx="-49" cy="49" r="5" opacity="0.95" />
                    <circle cx="-65" cy="25" r="4" opacity="0.9" />
                    <circle cx="-70" cy="0" r="5" opacity="0.95" />
                    <circle cx="-65" cy="-25" r="4" opacity="0.9" />
                    <circle cx="-49" cy="-49" r="5" opacity="0.95" />
                    <circle cx="-25" cy="-65" r="4" opacity="0.9" />
                    <circle cx="0" cy="-70" r="5" opacity="0.95" />
                    <circle cx="25" cy="-65" r="4" opacity="0.9" />
                    <circle cx="49" cy="-49" r="5" opacity="0.95" />
                    <circle cx="65" cy="-25" r="4" opacity="0.9" />
                    
                    {/* Circuit junction nodes and neurone dendrite tips */}
                    <circle cx="140" cy="0" r="4.5" opacity="0.8" />
                    <circle cx="35" cy="25" r="3" opacity="0.75" /> 
                    <circle cx="65" cy="75" r="3.5" opacity="0.8" />
                    <circle cx="85" cy="75" r="3" opacity="0.75" />
                    <circle cx="120" cy="100" r="4" opacity="0.85" />
                    <circle cx="140" cy="120" r="3" opacity="0.75" />
                    <circle cx="175" cy="165" r="3.5" opacity="0.8" />
                    <circle cx="195" cy="185" r="3" opacity="0.75" />
                    <circle cx="230" cy="190" r="4" opacity="0.85" />
                    <circle cx="250" cy="210" r="3" opacity="0.75" />
                    <circle cx="285" cy="255" r="3.5" opacity="0.8" />
                    <circle cx="305" cy="275" r="3" opacity="0.75" />
                    <circle cx="340" cy="280" r="4" opacity="0.85" />
                    
                    {/* Mirror nodes for complete 360° coverage */}
                    <circle cx="0" cy="140" r="4.5" opacity="0.8" />
                    <circle cx="-35" cy="25" r="3" opacity="0.75" />
                    <circle cx="-65" cy="75" r="3.5" opacity="0.8" />
                    <circle cx="-85" cy="75" r="3" opacity="0.75" />
                    <circle cx="-120" cy="100" r="4" opacity="0.85" />
                    <circle cx="-140" cy="120" r="3" opacity="0.75" />
                    <circle cx="-175" cy="165" r="3.5" opacity="0.8" />
                    <circle cx="-195" cy="185" r="3" opacity="0.75" />
                    <circle cx="-230" cy="190" r="4" opacity="0.85" />
                    <circle cx="-250" cy="210" r="3" opacity="0.75" />
                    <circle cx="-285" cy="255" r="3.5" opacity="0.8" />
                    <circle cx="-305" cy="275" r="3" opacity="0.75" />
                    <circle cx="-340" cy="280" r="4" opacity="0.85" />
                    
                    <circle cx="-140" cy="0" r="4.5" opacity="0.8" />
                    <circle cx="0" cy="-140" r="4.5" opacity="0.8" />
                    <circle cx="35" cy="-25" r="3" opacity="0.75" />
                    <circle cx="65" cy="-75" r="3.5" opacity="0.8" />
                    <circle cx="85" cy="-75" r="3" opacity="0.75" />
                    <circle cx="120" cy="-100" r="4" opacity="0.85" />
                    <circle cx="140" cy="-120" r="3" opacity="0.75" />
                    <circle cx="175" cy="-165" r="3.5" opacity="0.8" />
                    <circle cx="195" cy="-185" r="3" opacity="0.75" />
                    <circle cx="230" cy="-190" r="4" opacity="0.85" />
                    <circle cx="250" cy="-210" r="3" opacity="0.75" />
                    <circle cx="285" cy="-255" r="3.5" opacity="0.8" />
                    <circle cx="305" cy="-275" r="3" opacity="0.75" />
                    <circle cx="340" cy="-280" r="4" opacity="0.85" />
                    
                    <circle cx="-35" cy="-25" r="3" opacity="0.75" />
                    <circle cx="-65" cy="-75" r="3.5" opacity="0.8" />
                    <circle cx="-85" cy="-75" r="3" opacity="0.75" />
                    <circle cx="-120" cy="-100" r="4" opacity="0.85" />
                    <circle cx="-140" cy="-120" r="3" opacity="0.75" />
                    <circle cx="-175" cy="-165" r="3.5" opacity="0.8" />
                    <circle cx="-195" cy="-185" r="3" opacity="0.75" />
                    <circle cx="-230" cy="-190" r="4" opacity="0.85" />
                    <circle cx="-250" cy="-210" r="3" opacity="0.75" />
                    <circle cx="-285" cy="-255" r="3.5" opacity="0.8" />
                    <circle cx="-305" cy="-275" r="3" opacity="0.75" />
                    <circle cx="-340" cy="-280" r="4" opacity="0.85" />
                    
                    {/* Synaptic terminals and connection nodes */}
                    <circle cx="198" cy="198" r="3" opacity="0.7" />
                    <circle cx="-198" cy="198" r="3" opacity="0.7" />
                    <circle cx="-198" cy="-198" r="3" opacity="0.7" />
                    <circle cx="198" cy="-198" r="3" opacity="0.7" />
                    <circle cx="280" cy="115" r="2.5" opacity="0.65" />
                    <circle cx="115" cy="280" r="2.5" opacity="0.65" />
                    <circle cx="-115" cy="280" r="2.5" opacity="0.65" />
                    <circle cx="-280" cy="115" r="2.5" opacity="0.65" />
                    <circle cx="-280" cy="-115" r="2.5" opacity="0.65" />
                    <circle cx="-115" cy="-280" r="2.5" opacity="0.65" />
                    <circle cx="115" cy="-280" r="2.5" opacity="0.65" />
                    <circle cx="280" cy="-115" r="2.5" opacity="0.65" />
                    
                    {/* Additional junction nodes for interconnections */}
                    <circle cx="40" cy="40" r="2.5" opacity="0.6" />
                    <circle cx="80" cy="80" r="2.5" opacity="0.6" />
                    <circle cx="120" cy="120" r="2.5" opacity="0.6" />
                    <circle cx="160" cy="160" r="2.5" opacity="0.6" />
                    <circle cx="200" cy="200" r="2.5" opacity="0.6" />
                    <circle cx="-40" cy="40" r="2.5" opacity="0.6" />
                    <circle cx="-80" cy="80" r="2.5" opacity="0.6" />
                    <circle cx="-120" cy="120" r="2.5" opacity="0.6" />
                    <circle cx="-160" cy="160" r="2.5" opacity="0.6" />
                    <circle cx="-200" cy="200" r="2.5" opacity="0.6" />
                    <circle cx="-40" cy="-40" r="2.5" opacity="0.6" />
                    <circle cx="-80" cy="-80" r="2.5" opacity="0.6" />
                    <circle cx="-120" cy="-120" r="2.5" opacity="0.6" />
                    <circle cx="-160" cy="-160" r="2.5" opacity="0.6" />
                    <circle cx="-200" cy="-200" r="2.5" opacity="0.6" />
                    <circle cx="40" cy="-40" r="2.5" opacity="0.6" />
                    <circle cx="80" cy="-80" r="2.5" opacity="0.6" />
                    <circle cx="120" cy="-120" r="2.5" opacity="0.6" />
                    <circle cx="160" cy="-160" r="2.5" opacity="0.6" />
                    <circle cx="200" cy="-200" r="2.5" opacity="0.6" />
                    
                    {/* Extended peripheral nodes for coding-themed elements */}
                    <circle cx="420" cy="50" r="2.8" opacity="0.55" />
                    <circle cx="450" cy="35" r="2.2" opacity="0.5" />
                    <circle cx="480" cy="45" r="2.5" opacity="0.52" />
                    <circle cx="510" cy="30" r="2.3" opacity="0.48" />
                    <circle cx="540" cy="40" r="2.6" opacity="0.53" />
                    <circle cx="570" cy="25" r="2.1" opacity="0.45" />
                    
                    <circle cx="50" cy="420" r="2.8" opacity="0.55" />
                    <circle cx="35" cy="450" r="2.2" opacity="0.5" />
                    <circle cx="45" cy="480" r="2.5" opacity="0.52" />
                    <circle cx="30" cy="510" r="2.3" opacity="0.48" />
                    <circle cx="40" cy="540" r="2.6" opacity="0.53" />
                    <circle cx="25" cy="570" r="2.1" opacity="0.45" />
                    
                    <circle cx="-420" cy="50" r="2.8" opacity="0.55" />
                    <circle cx="-450" cy="35" r="2.2" opacity="0.5" />
                    <circle cx="-480" cy="45" r="2.5" opacity="0.52" />
                    <circle cx="-510" cy="30" r="2.3" opacity="0.48" />
                    <circle cx="-540" cy="40" r="2.6" opacity="0.53" />
                    <circle cx="-570" cy="25" r="2.1" opacity="0.45" />
                    
                    <circle cx="-50" cy="420" r="2.8" opacity="0.55" />
                    <circle cx="-35" cy="450" r="2.2" opacity="0.5" />
                    <circle cx="-45" cy="480" r="2.5" opacity="0.52" />
                    <circle cx="-30" cy="510" r="2.3" opacity="0.48" />
                    <circle cx="-40" cy="540" r="2.6" opacity="0.53" />
                    <circle cx="-25" cy="570" r="2.1" opacity="0.45" />
                    
                    {/* Diagonal spiculated nodes */}
                    <circle cx="350" cy="350" r="3" opacity="0.6" />
                    <circle cx="380" cy="380" r="2.5" opacity="0.55" />
                    <circle cx="410" cy="410" r="2.8" opacity="0.58" />
                    <circle cx="440" cy="440" r="2.3" opacity="0.52" />
                    <circle cx="470" cy="470" r="2.6" opacity="0.56" />
                    <circle cx="500" cy="500" r="2.1" opacity="0.48" />
                    <circle cx="530" cy="530" r="2.4" opacity="0.5" />
                    
                    <circle cx="-350" cy="350" r="3" opacity="0.6" />
                    <circle cx="-380" cy="380" r="2.5" opacity="0.55" />
                    <circle cx="-410" cy="410" r="2.8" opacity="0.58" />
                    <circle cx="-440" cy="440" r="2.3" opacity="0.52" />
                    <circle cx="-470" cy="470" r="2.6" opacity="0.56" />
                    <circle cx="-500" cy="500" r="2.1" opacity="0.48" />
                    <circle cx="-530" cy="530" r="2.4" opacity="0.5" />
                    
                    <circle cx="-350" cy="-350" r="3" opacity="0.6" />
                    <circle cx="-380" cy="-380" r="2.5" opacity="0.55" />
                    <circle cx="-410" cy="-410" r="2.8" opacity="0.58" />
                    <circle cx="-440" cy="-440" r="2.3" opacity="0.52" />
                    <circle cx="-470" cy="-470" r="2.6" opacity="0.56" />
                    <circle cx="-500" cy="-500" r="2.1" opacity="0.48" />
                    <circle cx="-530" cy="-530" r="2.4" opacity="0.5" />
                    
                    <circle cx="350" cy="-350" r="3" opacity="0.6" />
                    <circle cx="380" cy="-380" r="2.5" opacity="0.55" />
                    <circle cx="410" cy="-410" r="2.8" opacity="0.58" />
                    <circle cx="440" cy="-440" r="2.3" opacity="0.52" />
                    <circle cx="470" cy="-470" r="2.6" opacity="0.56" />
                    <circle cx="500" cy="-500" r="2.1" opacity="0.48" />
                    <circle cx="530" cy="-530" r="2.4" opacity="0.5" />
                    
                    {/* Coding-themed junction nodes */}
                    <circle cx="400" cy="150" r="2.5" opacity="0.5" />
                    <circle cx="440" cy="150" r="2.2" opacity="0.47" />
                    <circle cx="480" cy="150" r="2.3" opacity="0.48" />
                    <circle cx="520" cy="150" r="2.1" opacity="0.45" />
                    <circle cx="560" cy="150" r="2.4" opacity="0.49" />
                    
                    <circle cx="150" cy="400" r="2.5" opacity="0.5" />
                    <circle cx="150" cy="440" r="2.2" opacity="0.47" />
                    <circle cx="150" cy="480" r="2.3" opacity="0.48" />
                    <circle cx="150" cy="520" r="2.1" opacity="0.45" />
                    <circle cx="150" cy="560" r="2.4" opacity="0.49" />
                    
                    <circle cx="-400" cy="150" r="2.5" opacity="0.5" />
                    <circle cx="-400" cy="170" r="2.2" opacity="0.47" />
                    <circle cx="-400" cy="190" r="2.3" opacity="0.48" />
                    <circle cx="-400" cy="210" r="2.1" opacity="0.45" />
                    
                    <circle cx="-150" cy="400" r="2.5" opacity="0.5" />
                    <circle cx="-170" cy="400" r="2.2" opacity="0.47" />
                    <circle cx="-190" cy="400" r="2.3" opacity="0.48" />
                    <circle cx="-210" cy="400" r="2.1" opacity="0.45" />
                  </g>
                  
                  {/* Varied Electrical Impulse Animations - Multiple Colors */}
                  <g>
                    {/* Primary neurone impulses - Blue/Cyan family */}
                    <circle r="3.5" fill="hsl(200 90% 60%)" opacity="0.9">
                      <animateMotion dur="3.8s" repeatCount="indefinite" begin="0s">
                        <mpath href="#neuralPath1" />
                      </animateMotion>
                      <animate attributeName="opacity" values="0.9;1;0.6;0.9;0.3" dur="3.8s" repeatCount="indefinite" />
                    </circle>
                    
                    <circle r="3" fill="hsl(180 85% 55%)" opacity="0.8">
                      <animateMotion dur="4.2s" repeatCount="indefinite" begin="0.8s">
                        <mpath href="#neuralPath2" />
                      </animateMotion>
                      <animate attributeName="opacity" values="0.8;0.9;0.5;0.8;0.2" dur="4.2s" repeatCount="indefinite" />
                    </circle>
                    
                    <circle r="3.2" fill="hsl(160 80% 50%)" opacity="0.85">
                      <animateMotion dur="3.5s" repeatCount="indefinite" begin="1.5s">
                        <mpath href="#neuralPath3" />
                      </animateMotion>
                      <animate attributeName="opacity" values="0.85;1;0.6;0.85;0.3" dur="3.5s" repeatCount="indefinite" />
                    </circle>
                    
                    {/* Secondary impulses - Purple/Magenta family */}
                    <circle r="2.8" fill="hsl(280 75% 65%)" opacity="0.75">
                      <animateMotion dur="4.5s" repeatCount="indefinite" begin="2.2s">
                        <mpath href="#neuralPath4" />
                      </animateMotion>
                      <animate attributeName="opacity" values="0.75;0.9;0.4;0.75;0.2" dur="4.5s" repeatCount="indefinite" />
                    </circle>
                    
                    <circle r="3.1" fill="hsl(300 80% 60%)" opacity="0.8">
                      <animateMotion dur="3.9s" repeatCount="indefinite" begin="0.5s">
                        <mpath href="#neuralPath5" />
                      </animateMotion>
                      <animate attributeName="opacity" values="0.8;0.95;0.5;0.8;0.25" dur="3.9s" repeatCount="indefinite" />
                    </circle>
                    
                    <circle r="2.5" fill="hsl(320 85% 55%)" opacity="0.7">
                      <animateMotion dur="4.1s" repeatCount="indefinite" begin="1.8s">
                        <mpath href="#neuralPath6" />
                      </animateMotion>
                      <animate attributeName="opacity" values="0.7;0.85;0.4;0.7;0.2" dur="4.1s" repeatCount="indefinite" />
                    </circle>
                    
                    {/* Tertiary impulses - Orange/Yellow family */}
                    <circle r="2.9" fill="hsl(45 90% 55%)" opacity="0.8">
                      <animateMotion dur="3.7s" repeatCount="indefinite" begin="2.5s">
                        <mpath href="#neuralPath7" />
                      </animateMotion>
                      <animate attributeName="opacity" values="0.8;0.95;0.5;0.8;0.3" dur="3.7s" repeatCount="indefinite" />
                    </circle>
                    
                    <circle r="2.7" fill="hsl(25 85% 60%)" opacity="0.75">
                      <animateMotion dur="4.3s" repeatCount="indefinite" begin="1.2s">
                        <mpath href="#neuralPath8" />
                      </animateMotion>
                      <animate attributeName="opacity" values="0.75;0.9;0.45;0.75;0.25" dur="4.3s" repeatCount="indefinite" />
                    </circle>
                    
                    {/* Additional branching impulses - Green family */}
                    <circle r="2.3" fill="hsl(120 70% 50%)" opacity="0.65">
                      <animateMotion dur="5.2s" repeatCount="indefinite" path="M 60 20 Q 80 40 100 60 L 120 80 Q 140 100 160 120 L 180 140 Q 200 160 220 180" />
                      <animate attributeName="opacity" values="0.65;0.8;0.3;0.65;0.1" dur="5.2s" repeatCount="indefinite" />
                    </circle>
                    
                    <circle r="2.1" fill="hsl(140 75% 45%)" opacity="0.6">
                      <animateMotion dur="4.8s" repeatCount="indefinite" path="M 20 60 Q 40 80 60 100 L 80 120 Q 100 140 120 160 L 140 180 Q 160 200 180 220" />
                      <animate attributeName="opacity" values="0.6;0.75;0.25;0.6;0.1" dur="4.8s" repeatCount="indefinite" />
                    </circle>
                    
                    <circle r="2.4" fill="hsl(100 80% 55%)" opacity="0.7">
                      <animateMotion dur="4.6s" repeatCount="indefinite" path="M -20 60 Q -40 80 -60 100 L -80 120 Q -100 140 -120 160 L -140 180 Q -160 200 -180 220" />
                      <animate attributeName="opacity" values="0.7;0.85;0.35;0.7;0.15" dur="4.6s" repeatCount="indefinite" />
                    </circle>
                    
                    <circle r="2.2" fill="hsl(80 75% 60%)" opacity="0.65">
                      <animateMotion dur="5.1s" repeatCount="indefinite" path="M -60 20 Q -80 40 -100 60 L -120 80 Q -140 100 -160 120 L -180 140 Q -200 160 -220 180" />
                      <animate attributeName="opacity" values="0.65;0.8;0.3;0.65;0.1" dur="5.1s" repeatCount="indefinite" />
                    </circle>
                    
                    {/* Network interconnection impulses - Red family */}
                    <circle r="1.8" fill="hsl(0 80% 60%)" opacity="0.55">
                      <animateMotion dur="6.2s" repeatCount="indefinite" path="M 40 40 Q 60 60 80 80 L 100 100 Q 120 120 140 140 L 160 160 Q 180 180 200 200 L 220 220 Q 240 240 260 260 L 280 280" />
                      <animate attributeName="opacity" values="0.55;0.7;0.2;0.55;0.05" dur="6.2s" repeatCount="indefinite" />
                    </circle>
                    
                    <circle r="1.9" fill="hsl(15 85% 55%)" opacity="0.6">
                      <animateMotion dur="5.8s" repeatCount="indefinite" path="M -40 40 Q -60 60 -80 80 L -100 100 Q -120 120 -140 140 L -160 160 Q -180 180 -200 200 L -220 220 Q -240 240 -260 260 L -280 280" />
                      <animate attributeName="opacity" values="0.6;0.75;0.25;0.6;0.08" dur="5.8s" repeatCount="indefinite" />
                    </circle>
                    
                    <circle r="1.7" fill="hsl(340 75% 65%)" opacity="0.5">
                      <animateMotion dur="6.5s" repeatCount="indefinite" path="M -40 -40 Q -60 -60 -80 -80 L -100 -100 Q -120 -120 -140 -140 L -160 -160 Q -180 -180 -200 -200 L -220 -220 Q -240 -240 -260 -260 L -280 -280" />
                      <animate attributeName="opacity" values="0.5;0.65;0.18;0.5;0.05" dur="6.5s" repeatCount="indefinite" />
                    </circle>
                    
                    <circle r="2.0" fill="hsl(355 80% 58%)" opacity="0.58">
                      <animateMotion dur="5.5s" repeatCount="indefinite" path="M 40 -40 Q 60 -60 80 -80 L 100 -100 Q 120 -120 140 -140 L 160 -160 Q 180 -180 200 -200 L 220 -220 Q 240 -240 260 -260 L 280 -280" />
                      <animate attributeName="opacity" values="0.58;0.73;0.22;0.58;0.07" dur="5.5s" repeatCount="indefinite" />
                    </circle>
                    
                    {/* Extended peripheral impulses - coding-themed colors */}
                    <circle r="1.6" fill="hsl(220 70% 50%)" opacity="0.45">
                      <animateMotion dur="7.2s" repeatCount="indefinite" path="M 420 50 Q 450 35 480 45 Q 510 30 540 40 Q 570 25 600 35" />
                      <animate attributeName="opacity" values="0.45;0.6;0.15;0.45;0.05" dur="7.2s" repeatCount="indefinite" />
                    </circle>
                    
                    <circle r="1.5" fill="hsl(240 75% 55%)" opacity="0.42">
                      <animateMotion dur="6.8s" repeatCount="indefinite" path="M 50 420 Q 35 450 45 480 Q 30 510 40 540 Q 25 570 35 600" />
                      <animate attributeName="opacity" values="0.42;0.57;0.12;0.42;0.03" dur="6.8s" repeatCount="indefinite" />
                    </circle>
                    
                    <circle r="1.7" fill="hsl(260 80% 60%)" opacity="0.48">
                      <animateMotion dur="7.5s" repeatCount="indefinite" path="M -50 420 Q -65 450 -55 480 Q -70 510 -60 540 Q -75 570 -65 600" />
                      <animate attributeName="opacity" values="0.48;0.63;0.18;0.48;0.06" dur="7.5s" repeatCount="indefinite" />
                    </circle>
                    
                    <circle r="1.4" fill="hsl(200 85% 45%)" opacity="0.4">
                      <animateMotion dur="6.5s" repeatCount="indefinite" path="M -420 50 Q -450 35 -480 45 Q -510 30 -540 40 Q -570 25 -600 35" />
                      <animate attributeName="opacity" values="0.4;0.55;0.1;0.4;0.02" dur="6.5s" repeatCount="indefinite" />
                    </circle>
                    
                    {/* Diagonal spiculated impulses */}
                    <circle r="1.8" fill="hsl(170 70% 50%)" opacity="0.5">
                      <animateMotion dur="8.2s" repeatCount="indefinite" path="M 350 350 Q 380 380 410 410 Q 440 440 470 470 Q 500 500 530 530" />
                      <animate attributeName="opacity" values="0.5;0.65;0.2;0.5;0.08" dur="8.2s" repeatCount="indefinite" />
                    </circle>
                    
                    <circle r="1.6" fill="hsl(190 75% 55%)" opacity="0.46">
                      <animateMotion dur="7.8s" repeatCount="indefinite" path="M -350 350 Q -380 380 -410 410 Q -440 440 -470 470 Q -500 500 -530 530" />
                      <animate attributeName="opacity" values="0.46;0.61;0.16;0.46;0.06" dur="7.8s" repeatCount="indefinite" />
                    </circle>
                    
                    <circle r="1.9" fill="hsl(150 80% 48%)" opacity="0.52">
                      <animateMotion dur="8.5s" repeatCount="indefinite" path="M -350 -350 Q -380 -380 -410 -410 Q -440 -440 -470 -470 Q -500 -500 -530 -530" />
                      <animate attributeName="opacity" values="0.52;0.67;0.22;0.52;0.09" dur="8.5s" repeatCount="indefinite" />
                    </circle>
                    
                    <circle r="1.5" fill="hsl(130 75% 52%)" opacity="0.43">
                      <animateMotion dur="7.1s" repeatCount="indefinite" path="M 350 -350 Q 380 -380 410 -410 Q 440 -440 470 -470 Q 500 -500 530 -530" />
                      <animate attributeName="opacity" values="0.43;0.58;0.13;0.43;0.04" dur="7.1s" repeatCount="indefinite" />
                    </circle>
                    
                    {/* Coding pattern impulses - binary-like */}
                    <circle r="1.3" fill="hsl(60 80% 55%)" opacity="0.38">
                      <animateMotion dur="4.8s" repeatCount="indefinite" path="M 380 150 L 400 150 Q 420 155 440 150 L 460 150 Q 480 155 500 150 L 520 150 Q 540 155 560 150 L 580 150" />
                      <animate attributeName="opacity" values="0.38;0.53;0.08;0.38;0.02" dur="4.8s" repeatCount="indefinite" />
                    </circle>
                    
                    <circle r="1.2" fill="hsl(40 85% 60%)" opacity="0.35">
                      <animateMotion dur="4.5s" repeatCount="indefinite" path="M 150 380 L 150 400 Q 155 420 150 440 L 150 460 Q 155 480 150 500 L 150 520 Q 155 540 150 560 L 150 580" />
                      <animate attributeName="opacity" values="0.35;0.5;0.05;0.35;0.01" dur="4.5s" repeatCount="indefinite" />
                    </circle>
                    
                    {/* Terminal-like impulses */}
                    <circle r="1.4" fill="hsl(90 70% 48%)" opacity="0.4">
                      <animateMotion dur="5.8s" repeatCount="indefinite" path="M 480 200 Q 500 180 520 200 Q 540 180 560 200 Q 580 180 600 200" />
                      <animate attributeName="opacity" values="0.4;0.55;0.1;0.4;0.02" dur="5.8s" repeatCount="indefinite" />
                    </circle>
                    
                    <circle r="1.3" fill="hsl(110 75% 45%)" opacity="0.37">
                      <animateMotion dur="5.5s" repeatCount="indefinite" path="M 200 480 Q 180 500 200 520 Q 180 540 200 560 Q 180 580 200 600" />
                      <animate attributeName="opacity" values="0.37;0.52;0.07;0.37;0.01" dur="5.5s" repeatCount="indefinite" />
                    </circle>
                    
                    {/* Micro-dendrite impulses */}
                    <circle r="1.1" fill="hsl(310 60% 55%)" opacity="0.3">
                      <animateMotion dur="6.2s" repeatCount="indefinite" path="M 450 100 Q 470 95 490 105 Q 510 100 530 110 Q 550 105 570 115" />
                      <animate attributeName="opacity" values="0.3;0.45;0.05;0.3;0.01" dur="6.2s" repeatCount="indefinite" />
                    </circle>
                    
                    <circle r="1.0" fill="hsl(330 65% 50%)" opacity="0.28">
                      <animateMotion dur="5.9s" repeatCount="indefinite" path="M 100 450 Q 95 470 105 490 Q 100 510 110 530 Q 105 550 115 570" />
                      <animate attributeName="opacity" values="0.28;0.43;0.03;0.28;0.005" dur="5.9s" repeatCount="indefinite" />
                    </circle>
                  </g>
                 </svg>
               </div>
               
            {/* Enhanced Logo Container - optimized size for mobile visibility */}
            <div className="relative z-10">
            <div className="w-72 h-72 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center mx-auto">
              <div className="w-full h-full rounded-full overflow-hidden bg-transparent border-none shadow-none">
                <img src="/recode-circuit-logo-new.png" alt="RECODE CBT - Evidence-Based Therapy" className="w-full h-full object-contain rounded-full" style={{
                  filter: 'drop-shadow(0 0 30px rgba(0,0,0,0.1))'
                }} />
              </div>
            </div>
          </div>
            </div>
            
            {/* Tagline under logo - reduced mobile spacing */}
            <div className="text-center mb-3 sm:mb-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 whitespace-nowrap">
                Your Coding | Can Change
              </h3>
            </div>
            
            {/* Professional Headline - reduced mobile spacing */}
            <div className="space-y-2 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight text-center">
                <div className="flex flex-col items-center">
                  <span className="text-2xl">Neural-recoding</span>
                  <span className="text-2xl">through</span>
                  <span className="text-2xl">Behavioural Science</span>
                </div>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 font-light max-w-4xl mx-auto">
                Evidence-based therapy styled on CBT + DBT models, to transform automatic thoughts, feelings, and emotional reactions - practiced like a new skill, to re-program the mind.<br />
                <span className="font-medium text-gray-800">
One on One
Doctor-delivered</span>
              </h2>
            </div>
            
            {/* Professional CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 px-2">
              <Link to="/services#top">
                <Button size="lg" className="w-full sm:w-auto text-base px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                  Book a Session
                </Button>
              </Link>
              <Link to="/dr-carson#top">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-base px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold">
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

      {/* Main Introduction Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <p className="text-xl leading-relaxed text-foreground">
                <span className="font-semibold">Your brain isn't broken—it's coded.</span> At Recode CBT, we show people and organisations how to identify the hidden scripts that drive anxiety, stress, or low motivation, and how to reprogram them for growth.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Using practical, evidence-based techniques from CBT, DBT, and mindfulness, we help individuals build emotional balance, and equip teams with skills that foster focus, resilience, and collaboration. Whether you're working on personal change or designing a healthier workplace, Recode CBT makes advanced psychology accessible, practical, and effective.
              </p>
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
            <h2 className="font-bold mb-6 border-4 border-double border-gradient-to-r from-orange-500 via-purple-600 to-blue-600 bg-gradient-to-r from-orange-500/10 via-purple-600/10 to-blue-600/10 rounded-xl px-6 py-4 inline-block shadow-lg text-xl">New:
Corporate Training
 & Staff Wellness
Packages
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
              <Button size="lg" className="text-sm sm:text-lg px-4 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg">Enquire About Corporate Training 
Here</Button>
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
              <p className="text-sm text-muted-foreground mb-3">AI-powered CBT support for 
real-time assessment and help
24/7</p>
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
            <h2 className="font-bold mb-6 text-2xl">Professional Care 
from a 
Practicing Physician</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center border-t-4 border-t-orange-500/50">
                <GraduationCap className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Fully Qualified, GMC Registered and Practicing General Practitioner</h3>
                <p className="text-muted-foreground">Comprehensive medical training and ongoing clinical practice</p>
              </Card>
              <Card className="p-6 text-center border-t-4 border-t-purple-600/50">
                <Brain className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Accredited Diploma in CBT</h3>
                <p className="text-muted-foreground">Therapy styled using the CBT model, explained using neuroscience, and taking advantage of the brains natural neuroplastic abilities </p>
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
      <section className="px-4 bg-muted/20 py-[12px]">
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

Privacy Policy & Terms</Link>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;