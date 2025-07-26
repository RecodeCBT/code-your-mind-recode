import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { ArrowLeft, Brain, Zap, CheckCircle, MessageSquare, Clock, Shield, Star } from "lucide-react";

const RecodeChat = () => {
  const features = [
    {
      title: "24/7 AI Therapist",
      description: "Trained on CBT and DBT models for instant psychological support",
      icon: MessageSquare,
      color: "text-blue-500"
    },
    {
      title: "Real-time Analysis",
      description: "Get immediate insights into your thought patterns and behaviors",
      icon: Brain,
      color: "text-purple-500"
    },
    {
      title: "Personalized Interventions",
      description: "Receive tailored CBT techniques based on your specific needs",
      icon: Zap,
      color: "text-orange-500"
    },
    {
      title: "Progress Tracking",
      description: "Monitor your mental health journey with detailed analytics",
      icon: CheckCircle,
      color: "text-green-500"
    }
  ];

  const plans = [
    {
      name: "Basic",
      price: "£29",
      period: "per month",
      features: [
        "Unlimited chat sessions",
        "Basic CBT techniques",
        "Mood tracking",
        "Weekly progress reports"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: "£49",
      period: "per month", 
      features: [
        "Everything in Basic",
        "Advanced DBT techniques",
        "Personalized treatment plans",
        "Crisis intervention protocols",
        "Daily check-ins",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Professional",
      price: "£89",
      period: "per month",
      features: [
        "Everything in Premium",
        "Direct access to Dr. Carson",
        "Monthly video consultations",
        "Custom behavioral interventions",
        "Advanced analytics dashboard",
        "Family therapy modules"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 mb-8 text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="mb-6">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=400" 
                alt="AI Circuit Board representing RECODE Chat CBT technology"
                className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
              />
            </div>
            <h1 className="text-4xl font-bold mb-4">RECODE Chat CBT</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your personal AI therapist trained on evidence-based CBT and DBT models. 
              Get instant psychological support, behavioral analysis, and personalized interventions 24/7.
            </p>
          </div>

          {/* Technology Analogy */}
          <Card className="mb-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
            <CardContent>
              <h2 className="text-2xl font-bold mb-4 text-center">Like Having a Therapist in Your Pocket</h2>
              <p className="text-lg text-muted-foreground text-center">
                Just as a circuit board processes electrical signals into meaningful outputs, RECODE Chat CBT 
                processes your thoughts and emotions through advanced AI algorithms trained on proven therapeutic models. 
                Think of it as mental health software that runs on your schedule, providing instant analysis and 
                evidence-based interventions whenever you need them.
              </p>
            </CardContent>
          </Card>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-secondary/10 rounded-full w-fit">
                      <IconComponent className={`h-8 w-8 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Pricing Plans */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Choose Your Plan</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">/{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${plan.popular ? '' : 'variant-outline'}`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      Start {plan.name} Plan
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <Card className="p-8 mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-center mb-6">How RECODE Chat CBT Works</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">1. Start Anytime</h3>
                  <p className="text-muted-foreground">Log in 24/7 and begin chatting with your AI therapist trained on CBT/DBT models</p>
                </div>
                <div className="text-center">
                  <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">2. Get Analysis</h3>
                  <p className="text-muted-foreground">Receive real-time insights into your thought patterns and emotional responses</p>
                </div>
                <div className="text-center">
                  <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">3. Apply Techniques</h3>
                  <p className="text-muted-foreground">Practice personalized CBT and DBT interventions tailored to your specific needs</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Notice */}
          <Card className="p-6 bg-muted/50">
            <CardContent>
              <div className="flex items-center gap-3 mb-3">
                <Shield className="h-6 w-6 text-primary" />
                <h3 className="font-bold">Privacy & Security</h3>
              </div>
              <p className="text-muted-foreground">
                All conversations are encrypted and confidential. RECODE Chat CBT is designed to complement, 
                not replace, professional therapy. For crisis situations, please contact emergency services 
                or the Samaritans immediately.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RecodeChat;