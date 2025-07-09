import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, Zap, Target, Eye, CheckCircle, Stethoscope, GraduationCap, Shield, Lightbulb, Heart, Compass, Award, User } from "lucide-react";

const Index = () => {
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
      bgColor: "bg-orange-500/10"
    },
    {
      title: "DBT Emotional Mastery", 
      description: "Build emotional resilience through powerful tools like distress tolerance and radical acceptance",
      icon: Heart,
      color: "text-purple-600",
      bgColor: "bg-purple-600/10"
    },
    {
      title: "Mindfulness Training",
      description: "Train attention, reduce overthinking, and reconnect with the present moment",
      icon: Compass,
      color: "text-blue-600",
      bgColor: "bg-blue-600/10"
    },
    {
      title: "Neuroplasticity in Action",
      description: "Rewire your brain with intentional mental habits, using repetition and structured practice",
      icon: Brain,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    },
    {
      title: "Performance Psychology",
      description: "Learn behavioural frameworks that support growth, confidence and flexible goal-setting",
      icon: Lightbulb,
      color: "text-purple-600",
      bgColor: "bg-purple-600/10"
    }
  ];

  const conditions = [
    {
      title: "Anxiety & Panic",
      description: "Decode the fear algorithms that trigger anxiety responses and build new neural pathways for calm confidence.",
      image: "photo-1581090464777-f3220bbe1b8b"
    },
    {
      title: "Depression & Low Mood",
      description: "Rewrite negative thought loops and behavioral patterns that maintain depressive cycles.",
      image: "photo-1470813740244-df37b8c1edcb"
    },
    {
      title: "Procrastination & Avoidance",
      description: "Debug the mental scripts that cause task avoidance and implement productivity algorithms.",
      image: "photo-1498050108023-c5249f4df085"
    },
    {
      title: "Anger & Emotional Dysregulation",
      description: "Master emotional triggers and develop healthy response patterns for intense feelings.",
      image: "photo-1526374965328-7f61d4dc18c5"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-orange-500/5 to-purple-600/5 py-20 px-4">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Enhanced decorative patterns around logo */}
        <div className="absolute top-8 left-8 w-40 h-40 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-orange-500 via-purple-600 to-blue-600 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
        <div className="absolute top-16 right-12 w-32 h-32 opacity-15">
          <div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-600 to-orange-500 rounded-lg rotate-45 blur-2xl animate-float"></div>
        </div>
        <div className="absolute bottom-20 left-16 w-28 h-28 opacity-15">
          <div className="w-full h-full bg-gradient-to-br from-purple-500 via-orange-600 to-blue-600 rounded-full blur-2xl animate-gradient"></div>
        </div>
        <div className="absolute bottom-32 right-8 w-36 h-36 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-blue-600 via-orange-500 to-purple-600 rounded-lg rotate-12 blur-3xl animate-pulse-slow"></div>
        </div>
        
        {/* Additional pattern elements */}
        <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-orange-500/20 rounded-full blur-sm animate-float"></div>
        <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-purple-600/25 rounded-full blur-sm animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-blue-600/20 rounded-full blur-sm animate-gradient"></div>
        <div className="absolute top-2/3 right-1/4 w-5 h-5 bg-orange-500/25 rounded-full blur-sm animate-float"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-8 relative">
              {/* Enhanced logo with better blending */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 via-purple-600/30 to-blue-600/30 rounded-full blur-3xl scale-200 animate-gradient"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-orange-500/20 to-purple-600/20 rounded-full blur-2xl scale-150 animate-pulse-slow"></div>
                <img 
                  src="/lovable-uploads/28c2c6b5-4d5b-4410-975c-19cb580468dc.png" 
                  alt="RECODE Logo" 
                  className="h-32 w-auto animate-float relative z-10 drop-shadow-2xl"
                  style={{ filter: 'drop-shadow(0 0 30px rgba(249, 115, 22, 0.3)) drop-shadow(0 0 60px rgba(147, 51, 234, 0.2))' }}
                />
              </div>
            </div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 via-purple-600/10 to-blue-600/10 border border-orange-500/20 px-4 py-2 rounded-full text-sm font-medium">
              <Stethoscope className="h-4 w-4 text-orange-500" />
              Licensed Medical Doctor • Mental Software Engineering
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-orange-500 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                RECODE
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
              Rewire Your Mind, Change Your Life
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Evidence-based therapy that treats anxiety, depression, and procrastination like outdated code. 
              Using proven CBT methodologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="text-lg px-8 py-3">
                Start Your Transformation
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Learn More
              </Button>
            </div>
            
            {/* Credentials Banner */}
            <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Licensed Medical Doctor
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Postgraduate Specialist Training in CBT Model
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
        <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-orange-500/10 to-purple-600/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-blue-600/10 to-orange-500/10 rounded-lg rotate-45 blur-xl"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Conditions We Address</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Your mind runs on patterns—some helpful, others harmful. We help you identify and rewrite 
              the mental code behind common psychological challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {conditions.map((condition, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/${condition.image}?auto=format&fit=crop&w=600&h=300`}
                    alt={condition.title}
                    className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  />
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
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-purple-600/15 to-blue-600/15 rounded-full blur-lg animate-float"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-gradient-to-br from-orange-500/15 to-purple-600/15 rounded-lg rotate-12 blur-lg animate-pulse-slow"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What is RECODE?</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              RECODE is not just therapy. It's mental software engineering for real life. 
              We don't believe in simply managing symptoms—we help you decode and redesign 
              the core algorithms that drive your thoughts, feelings and behaviours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {approaches.map((approach, index) => {
              const Icon = approach.icon;
              return (
                <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-transparent hover:border-l-orange-500/50">
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
              );
            })}
          </div>
        </div>
      </section>

      {/* RECODE Method Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-secondary/5 via-blue-600/5 to-orange-500/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-purple-600/10 to-orange-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-1/4 w-28 h-28 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-lg rotate-45 blur-2xl"></div>
        
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
              return (
                <div key={index} className="relative">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-transparent hover:border-t-orange-500/50">
                    <CardHeader className="text-center">
                      <div className={`mx-auto mb-4 p-3 ${step.bgColor} rounded-full w-fit`}>
                        <Icon className={`h-8 w-8 ${step.color}`} />
                      </div>
                      <CardTitle className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                        {index + 1}. {step.step}
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

      {/* Doctor Credentials Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-24 h-24 bg-gradient-to-br from-orange-500/10 to-blue-600/10 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-10 w-20 h-20 bg-gradient-to-br from-purple-600/10 to-orange-500/10 rounded-lg rotate-45 blur-xl animate-float"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Professional Medical Care</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center border-t-4 border-t-orange-500/50">
                <GraduationCap className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Licensed Medical Doctor</h3>
                <p className="text-muted-foreground">Fully qualified and registered medical practitioner</p>
              </Card>
              <Card className="p-6 text-center border-t-4 border-t-purple-600/50">
                <Brain className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Postgraduate Specialist Training</h3>
                <p className="text-muted-foreground">Expert training in evidence-based therapeutic modalities</p>
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

      {/* Dr. Christopher Carson Credentials Section */}
      <section className="py-20 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Dr. Christopher Carson BSc MBBS MRCGP ProfDipCBT</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A practicing General Practitioner with extensive qualifications in medicine, 
              mental health therapy, and a passion for using mindfulness meditation to reform emotional behaviour, making use of methods in dialectical behavioural therapy.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photos Section */}
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/lovable-uploads/c1b46773-b5a8-41c8-a7a3-f0f16097d31d.png"
                  alt="Dr. Christopher Carson"
                  className="w-full h-auto max-h-80 object-cover object-center transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/lovable-uploads/0ae4333b-2ae9-4aa3-803f-ed93b3dc6e41.png"
                  alt="Dr. Christopher Carson"
                  className="w-full h-auto max-h-80 object-cover object-center transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* Credentials Section */}
            <div className="space-y-8">
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">BSc - Biomedical Sciences</h3>
                      <p className="text-muted-foreground">Comprehensive foundation in human biology, physiology, and medical science</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Stethoscope className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">MBBS in Medicine</h3>
                      <p className="text-muted-foreground">Medical degree qualifying as a licensed doctor</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">MRCGP</h3>
                      <p className="text-muted-foreground">Specialist training in general practice and primary care</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Post Graduate Professional Diploma in CBT</h3>
                      <p className="text-muted-foreground">Advanced qualification in Cognitive Behavioural Therapy</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Level 3 Personal Training Qualification</h3>
                      <p className="text-muted-foreground">Certified fitness and performance coaching expertise</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="text-center pt-6">
                <p className="text-lg text-muted-foreground italic">
                  "Your mind is a biological computer that runs on automatic codes, these codes can be naive to the human brain or develop through our experiences, as they repeat the code strengthens, like learning an instrument. We can identify and re-write these codes using the same principles"
                </p>
                <p className="font-semibold mt-2">- Dr. Christopher Carson</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Statement */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">The RECODE Philosophy</h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              We believe mental health tools should be <span className="font-semibold text-foreground">practical, intelligent, and accessible</span>. 
              We don't pathologise—we empower. We don't mystify—we simplify.
            </p>
            <p>
              And most importantly, we don't just help people "cope"—we help them 
              <span className="font-semibold text-foreground"> reprogram the way they experience and respond to life</span>.
            </p>
            <p>
              Whether you're battling burnout, perfectionism, emotional volatility or just want to 
              optimise your mindset, RECODE gives you the skills and science to do it.
            </p>
          </div>
          <div className="mt-12 p-8 bg-primary/5 rounded-lg border">
            <h3 className="text-2xl font-bold mb-4">RECODE</h3>
            <p className="text-xl font-medium">
              It's not about fixing you. It's about upgrading you.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to RECODE?</h2>
          <p className="text-xl mb-8 opacity-90">
            Start your journey with a personalized consultation and discover how mental software engineering can transform your reality.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
            Book Your Session Today
          </Button>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2 font-medium">Important Disclaimer</p>
            <p>
              RECODE represents a new therapeutic approach that integrates elements of CBT and DBT methodologies 
              within an innovative framework. While based on evidence-based practices, RECODE is not classical 
              CBT or DBT therapy. All sessions are conducted by a licensed medical doctor. This service is not 
              a substitute for emergency mental health care or crisis intervention.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
