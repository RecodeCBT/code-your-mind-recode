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
import circuitBoardImage from "@/assets/circuit-board.jpg";
import javaCodeImage from "@/assets/java-code.jpg";
import colorfulCodeImage from "@/assets/colorful-code.jpg";
import macbookCodeImage from "@/assets/macbook-code.jpg";
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
    title: "Anxiety & Panic",
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
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-orange-500/5 to-purple-600/5 py-20 px-4">
        <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-orange-500/15 to-purple-600/15 rounded-full blur-xl"></div>
        <div className="absolute top-20 right-10 w-20 h-20 bg-gradient-to-br from-blue-600/15 to-orange-500/15 rounded-lg rotate-45 blur-xl"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6">
            {/* Code-themed hero with circular logo */}
            <div className="relative flex items-center justify-center mb-16 gap-8">
              
              {/* Left Side Code Images */}
              <div className="hidden lg:flex flex-col gap-4">
                <div className="relative group">
                  <img 
                    src={circuitBoardImage} 
                    alt="Circuit Board" 
                    className="w-32 h-32 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-purple-600/20 rounded-lg"></div>
                </div>
                <div className="relative group">
                  <img 
                    src={javaCodeImage} 
                    alt="Java Code" 
                    className="w-32 h-32 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-orange-500/20 rounded-lg"></div>
                </div>
              </div>

              {/* Central Circular Logo */}
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-orange-50/90 to-purple-50/90 dark:from-orange-950/40 dark:to-purple-950/40 rounded-full p-8 backdrop-blur-md shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-purple-600/10 to-blue-600/10 rounded-full"></div>
                  <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full p-6 flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/79e1138e-68d4-4aea-a885-459526283014.png" 
                      alt="RECODE Logo" 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                </div>
                
                {/* Floating particles around logo */}
                <div className="absolute -top-4 -left-4 w-6 h-6 bg-gradient-to-br from-orange-500/30 to-purple-600/30 rounded-full blur-sm animate-pulse"></div>
                <div className="absolute -top-2 -right-6 w-4 h-4 bg-gradient-to-br from-blue-600/30 to-orange-500/30 rounded-full blur-sm animate-pulse delay-100"></div>
                <div className="absolute -bottom-3 -left-5 w-5 h-5 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-full blur-sm animate-pulse delay-200"></div>
                <div className="absolute -bottom-4 -right-4 w-3 h-3 bg-gradient-to-br from-orange-500/30 to-purple-600/30 rounded-full blur-sm animate-pulse delay-300"></div>
              </div>

              {/* Right Side Code Images */}
              <div className="hidden lg:flex flex-col gap-4">
                <div className="relative group">
                  <img 
                    src={colorfulCodeImage} 
                    alt="Colorful Code" 
                    className="w-32 h-32 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-lg"></div>
                </div>
                <div className="relative group">
                  <img 
                    src={macbookCodeImage} 
                    alt="MacBook Code" 
                    className="w-32 h-32 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg"></div>
                </div>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">Your coding, can change</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">Evidence-based therapy that treats anxiety, depression, and procrastination like errors in Mindcode. 
This code can be revealed and re-written using a combination of techniques based on established CBT and DBT models.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link to="/contact">
                <Button size="lg" className="text-lg px-8 py-3">
                  Start Your Transformation
                </Button>
              </Link>
              <Link to="/dr-carson">
                <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                  Learn More
                </Button>
              </Link>
            </div>
            
            {/* Credentials Banner */}
            <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Fully Qualified, Registered and Practicing General Practitioner
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Accredited Diploma in CBT
              </div>
              <div className="flex items-center gap-2">
                <Stethoscope className="h-4 w-4" />
                Flexible Remote Consultations
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mental Health Conditions Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-secondary/5 via-orange-500/5 to-purple-600/5 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-orange-500/15 to-purple-600/15 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-blue-600/15 to-orange-500/15 rounded-lg rotate-45 blur-xl"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Conditions We Address</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Your mind runs on patterns—some helpful, others harmful. We help you identify and rewrite 
              the mental code behind common psychological challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {conditions.map((condition, index) => {
            const conditionLinks = ["/conditions/anxiety-panic", "/conditions/depression-mood", "/conditions/procrastination", "/conditions/anger-emotional"];
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
                        {condition.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>;
          })}
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
                <h3 className="font-bold mb-2">Fully Qualified, Registered and Practicing General Practitioner</h3>
                <p className="text-muted-foreground">Comprehensive medical training and ongoing clinical practice</p>
              </Card>
              <Card className="p-6 text-center border-t-4 border-t-purple-600/50">
                <Brain className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Accredited Diploma in CBT</h3>
                <p className="text-muted-foreground">Therapy styled using the CBT model, taking advantage of the brains natural neuroplastic abilities </p>
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
        <div className="absolute top-4 right-4">
          <div className="bg-green-500 text-white text-sm px-4 py-2 rounded-full font-semibold flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Limited time offer £20 off at checkout
          </div>
        </div>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Book Your Session</h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule your personalized RECODE consultation through our secure booking system
          </p>
          
          {/* Fresha Booking Embed Placeholder */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-6">
            <p className="text-lg mb-4">Professional RECODE Sessions</p>
            <p className="text-sm opacity-75 mb-4">It starts with one click </p>
            <a href="https://recodecbt.setmore.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="text-lg px-12 py-4 hover:scale-105 transition-transform">
                Book Your Session Now
              </Button>
            </a>
          </div>
          
          <p className="text-sm opacity-75">
            Or explore our conditions and pricing on the booking page
          </p>
          <Link to="/booking">
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 mt-4 text-primary border-white hover:bg-white hover:text-primary">
              View All Services
            </Button>
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2 font-medium">Important Disclaimer</p>
            <p className="mb-4">
              RECODE represents a new therapeutic approach that integrates elements of CBT and DBT methodologies 
              within an innovative framework. While based on evidence-based practices, RECODE is not classical 
              CBT or DBT therapy. All sessions are conducted by a licensed medical doctor. This service is not 
              a substitute for emergency mental health care or crisis intervention.
            </p>
            <p className="mb-4">If you are thinking about hurting yourself please click below:</p>
            <a href="https://www.samaritans.org" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button variant="destructive" size="sm">
                Get Crisis Support - Samaritans
              </Button>
            </a>
            <div className="mt-6 pt-4 border-t border-muted-foreground/20">
              <Link to="/policies" className="text-xs text-muted-foreground hover:text-primary underline-offset-4 hover:underline">
                Privacy Policy & Terms
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;