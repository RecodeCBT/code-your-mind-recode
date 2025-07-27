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
            {/* Massive RECODE Logo with elaborate decorative code streams */}
            <div className="relative flex justify-center mb-16">
              {/* Elaborate Code Strings Flowing From Logo - Left Side */}
              <div className="absolute left-[-300px] top-1/2 transform -translate-y-1/2 w-96 h-64 hidden lg:block">
                {/* Main code streams */}
                <div className="absolute top-0 left-0 w-56 h-3 bg-gradient-to-r from-transparent via-orange-500/40 to-orange-500/60 rounded-full transform -rotate-12 animate-pulse"></div>
                <div className="absolute top-8 left-12 w-64 h-2 bg-gradient-to-r from-transparent via-purple-600/35 to-purple-600/50 rounded-full transform -rotate-6 animate-pulse delay-100"></div>
                <div className="absolute top-16 left-6 w-52 h-2.5 bg-gradient-to-r from-transparent via-blue-600/30 to-blue-600/45 rounded-full transform -rotate-3 animate-pulse delay-200"></div>
                <div className="absolute top-24 left-18 w-48 h-2 bg-gradient-to-r from-transparent via-orange-500/25 to-orange-500/40 rounded-full transform rotate-2 animate-pulse delay-300"></div>
                <div className="absolute top-32 left-8 w-58 h-1.5 bg-gradient-to-r from-transparent via-purple-600/20 to-purple-600/35 rounded-full transform rotate-6 animate-pulse delay-150"></div>
                <div className="absolute top-40 left-16 w-44 h-1 bg-gradient-to-r from-transparent via-blue-600/15 to-blue-600/25 rounded-full transform rotate-12 animate-pulse delay-250"></div>
                <div className="absolute top-48 left-4 w-40 h-1 bg-gradient-to-r from-transparent via-orange-500/10 to-orange-500/20 rounded-full transform rotate-18 animate-pulse delay-350"></div>
                
                {/* Binary dots and particles */}
                <div className="absolute top-12 left-24 w-2 h-2 bg-primary rounded-full animate-ping"></div>
                <div className="absolute top-28 left-36 w-1.5 h-1.5 bg-secondary rounded-full animate-ping delay-100"></div>
                <div className="absolute top-36 left-14 w-2 h-2 bg-primary/70 rounded-full animate-ping delay-200"></div>
                <div className="absolute top-44 left-28 w-1 h-1 bg-secondary/70 rounded-full animate-ping delay-300"></div>
                
                {/* Code brackets and symbols */}
                <div className="absolute top-6 left-32 text-2xl text-orange-500/30 font-mono animate-pulse">{'{'}</div>
                <div className="absolute top-20 left-40 text-xl text-purple-600/30 font-mono animate-pulse delay-100">{'<'}</div>
                <div className="absolute top-34 left-22 text-lg text-blue-600/30 font-mono animate-pulse delay-200">{'>'}</div>
                <div className="absolute top-42 left-34 text-2xl text-orange-500/30 font-mono animate-pulse delay-300">{'}'}</div>
              </div>
              
              {/* Elaborate Code Strings Flowing From Logo - Right Side */}
              <div className="absolute right-[-300px] top-1/2 transform -translate-y-1/2 w-96 h-64 hidden lg:block">
                {/* Main code streams */}
                <div className="absolute top-0 right-0 w-56 h-3 bg-gradient-to-l from-transparent via-orange-500/40 to-orange-500/60 rounded-full transform rotate-12 animate-pulse"></div>
                <div className="absolute top-8 right-12 w-64 h-2 bg-gradient-to-l from-transparent via-purple-600/35 to-purple-600/50 rounded-full transform rotate-6 animate-pulse delay-100"></div>
                <div className="absolute top-16 right-6 w-52 h-2.5 bg-gradient-to-l from-transparent via-blue-600/30 to-blue-600/45 rounded-full transform rotate-3 animate-pulse delay-200"></div>
                <div className="absolute top-24 right-18 w-48 h-2 bg-gradient-to-l from-transparent via-orange-500/25 to-orange-500/40 rounded-full transform -rotate-2 animate-pulse delay-300"></div>
                <div className="absolute top-32 right-8 w-58 h-1.5 bg-gradient-to-l from-transparent via-purple-600/20 to-purple-600/35 rounded-full transform -rotate-6 animate-pulse delay-150"></div>
                <div className="absolute top-40 right-16 w-44 h-1 bg-gradient-to-l from-transparent via-blue-600/15 to-blue-600/25 rounded-full transform -rotate-12 animate-pulse delay-250"></div>
                <div className="absolute top-48 right-4 w-40 h-1 bg-gradient-to-l from-transparent via-orange-500/10 to-orange-500/20 rounded-full transform -rotate-18 animate-pulse delay-350"></div>
                
                {/* Binary dots and particles */}
                <div className="absolute top-12 right-24 w-2 h-2 bg-primary rounded-full animate-ping"></div>
                <div className="absolute top-28 right-36 w-1.5 h-1.5 bg-secondary rounded-full animate-ping delay-100"></div>
                <div className="absolute top-36 right-14 w-2 h-2 bg-primary/70 rounded-full animate-ping delay-200"></div>
                <div className="absolute top-44 right-28 w-1 h-1 bg-secondary/70 rounded-full animate-ping delay-300"></div>
                
                {/* Code brackets and symbols */}
                <div className="absolute top-6 right-32 text-2xl text-orange-500/30 font-mono animate-pulse">{'}'}</div>
                <div className="absolute top-20 right-40 text-xl text-purple-600/30 font-mono animate-pulse delay-100">{'>'}</div>
                <div className="absolute top-34 right-22 text-lg text-blue-600/30 font-mono animate-pulse delay-200">{'<'}</div>
                <div className="absolute top-42 right-34 text-2xl text-orange-500/30 font-mono animate-pulse delay-300">{'{'}</div>
              </div>

              {/* Central logo with enhanced styling and 300% bigger size */}
              <div className="relative bg-gradient-to-br from-orange-50/70 to-purple-50/70 dark:from-orange-950/30 dark:to-purple-950/30 rounded-[2rem] p-20 backdrop-blur-md border border-orange-200/30 dark:border-orange-700/30 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-purple-600/5 to-blue-600/5 rounded-[2rem]"></div>
                <img 
                  src="/lovable-uploads/79e1138e-68d4-4aea-a885-459526283014.png" 
                  alt="RECODE Logo" 
                  className="h-96 w-auto relative z-10 object-contain max-w-none sm:h-72 md:h-80 lg:h-96" 
                  style={{ backgroundColor: '#F5F5DC' }}
                />
                
                {/* Additional decorative elements around logo */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-orange-500/20 to-purple-600/20 rounded-full blur-sm animate-pulse"></div>
                <div className="absolute -top-4 -right-8 w-8 h-8 bg-gradient-to-br from-blue-600/20 to-orange-500/20 rounded-full blur-sm animate-pulse delay-100"></div>
                <div className="absolute -bottom-5 -left-7 w-10 h-10 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-sm animate-pulse delay-200"></div>
                <div className="absolute -bottom-6 -right-5 w-7 h-7 bg-gradient-to-br from-orange-500/20 to-purple-600/20 rounded-full blur-sm animate-pulse delay-300"></div>
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
            10%+ OFF Applied
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
          </div>
        </div>
      </section>
    </div>;
};
export default Index;