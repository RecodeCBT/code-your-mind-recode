
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, Zap, Target, Eye, CheckCircle } from "lucide-react";

const Index = () => {
  const recodeSteps = [
    {
      step: "REVEAL",
      description: "Notice the hidden patterns that control your reactions and self-image",
      icon: Eye
    },
    {
      step: "EVALUATE", 
      description: "Use structured frameworks to explore whether these patterns are useful, kind, and evidence-based",
      icon: Target
    },
    {
      step: "CHALLENGE",
      description: "Interrogate old beliefs and emotional habits through guided questioning", 
      icon: Zap
    },
    {
      step: "OBSERVE",
      description: "Build awareness of emotional and sensory experience without reactivity",
      icon: Brain
    },
    {
      step: "DESIGN",
      description: "Create new thoughts, habits and perspectives that serve your goals",
      icon: Code
    },
    {
      step: "EMBED", 
      description: "Strengthen these upgrades through daily practice and long-term reinforcement",
      icon: CheckCircle
    }
  ];

  const approaches = [
    {
      title: "CBT Precision",
      description: "Identify, challenge and rewrite cognitive distortions and limiting beliefs"
    },
    {
      title: "DBT Emotional Mastery", 
      description: "Build emotional resilience through powerful tools like distress tolerance and radical acceptance"
    },
    {
      title: "Mindfulness Training",
      description: "Train attention, reduce overthinking, and reconnect with the present moment"
    },
    {
      title: "Neuroplasticity in Action",
      description: "Rewire your brain with intentional mental habits, using repetition and structured practice"
    },
    {
      title: "Performance Psychology",
      description: "Learn behavioural frameworks that support growth, confidence and flexible goal-setting"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/10 py-20 px-4">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-medium">
              <Code className="h-4 w-4" />
              Mental Software Engineering
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-primary">RECODE</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
              Rewire Your Mind, Change Your Life
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your brain is not broken. It's coded. RECODE helps you understand and rewrite 
              the outdated scripts that cause anxiety, depression, and limiting behaviors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="text-lg px-8 py-3">
                Start Your Transformation
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What is RECODE?</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              RECODE is not just therapy. It's mental software engineering for real life. 
              We don't believe in simply managing symptoms—we help you decode and redesign 
              the core algorithms that drive your thoughts, feelings and behaviours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {approaches.map((approach, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{approach.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {approach.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* RECODE Method Section */}
      <section className="py-20 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-6xl">
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
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-primary">
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
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 transform -translate-y-1/2"></div>
                  )}
                </div>
              );
            })}
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
          <h2 className="text-4xl font-bold mb-6">Ready to RECODE Your Life?</h2>
          <p className="text-xl mb-8 opacity-90">
            Start your journey with a personalized consultation and discover how mental software engineering can transform your reality.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
            Book Your Session Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
