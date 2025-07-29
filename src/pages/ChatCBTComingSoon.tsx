import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Brain, MessageSquare, Clock, Check, Users, Lightbulb } from "lucide-react";
import Navigation from "@/components/Navigation";
const ChatCBTComingSoon = () => {
  const features = [{
    icon: Brain,
    title: "Real-time Assessment",
    description: "AI quickly identifies cognitive distortions and mind-code errors as they occur"
  }, {
    icon: MessageSquare,
    title: "Interactive Learning",
    description: "Engage with AI-powered conversations that educate and reinforce CBT principles"
  }, {
    icon: Lightbulb,
    title: "Instant Guidance",
    description: "Get immediate, evidence-based methods to address distortions without delay"
  }, {
    icon: Users,
    title: "Consolidate Learning",
    description: "Strengthen and reinforce therapeutic insights through guided practice"
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Back Navigation */}
      <div className="container mx-auto max-w-6xl px-4 pt-8">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-orange-500/15 to-purple-600/15 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-gradient-to-br from-blue-600/15 to-orange-500/15 rounded-lg rotate-45 blur-xl"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-16">
            {/* Round ChatCBT Logo */}
            <div className="w-48 h-48 mx-auto mb-8 bg-gradient-to-br from-orange-50/90 to-purple-50/90 dark:from-orange-950/40 dark:to-purple-950/40 rounded-full p-4 backdrop-blur-md shadow-2xl">
              <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full p-4 flex items-center justify-center">
                <img src="/lovable-uploads/b976013c-0e4b-4791-b936-9d3f45544770.png" alt="ReCODE: ChatCBT Logo" className="w-full h-full object-contain" />
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 mb-6">
              <Clock className="h-6 w-6 text-orange-500" />
              <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent font-semibold text-lg">
                COMING SOON
              </span>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">ReCODE: ChatCBT</h1>
            <h2 className="text-2xl text-muted-foreground mb-8">Interactive AI for Cognitive Behavioral Therapy</h2>
            
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>An AI companion designed and highly trained to quickly assess for signs of cognitive distortions and other mind-code errors, offering evidence-based methods to address them in real-time.</p>
              <p>
                This interactive tool helps educate clients on addressing cognitive distortions without delay, 
                consolidating therapeutic learning through immediate, personalized feedback and guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-secondary/5 via-orange-500/5 to-purple-600/5 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-purple-600/15 to-blue-600/15 rounded-full blur-xl"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">How ChatCBT Will Transform Your Practice</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bridging the gap between therapy sessions with AI-powered support that's available whenever you need it
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => {
            const Icon = feature.icon;
            return <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-orange-500/10 to-purple-600/10 rounded-full w-fit">
                      <Icon className="h-8 w-8 text-orange-500" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>;
          })}
          </div>

          {/* Subscription Model */}
          <div className="text-center">
            <Card className="max-w-2xl mx-auto p-8 border-2 border-orange-500/20">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Flexible Subscription Model - £8 per month</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-center gap-3 text-lg">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Month-by-month subscription</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-lg">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>No long-term commitments</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-lg">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Cancel anytime</span>
                </div>
                <p className="text-muted-foreground mt-6">
                  Affordable, accessible support that complements your therapeutic journey
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Be the first to know when ReCODE: ChatCBT launches
          </p>
          <Link to="/contact">
            <Button size="lg" className="text-lg px-8 py-3 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white shadow-lg">
              Contact Us for Updates
            </Button>
          </Link>
        </div>
      </section>
    </div>;
};
export default ChatCBTComingSoon;