import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { CheckCircle, Users, FileText, Brain, Target, Shield, MessageCircle, BookOpen, UserCheck, Zap, Building2, ArrowRight, Lightbulb, Compass, Laptop, Code, BarChart3, Search, Wrench, Link } from "lucide-react";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [showAllServices, setShowAllServices] = useState<boolean>(false);

  const services = [
    // Just Starting Out
    {
      title: "Initial Assessment & Therapy",
      duration: "65 min",
      price: "£149",
      originalPrice: "£169",
      discountTag: "£20 discount introductory offer",
      bullets: [
        "Doctor-delivered CBT",
        "Personalised formulation", 
        "Measurable outcomes",
        "Secure online booking"
      ],
      bookingUrl: "https://recodecbt.setmore.com/book?step=time-slot&products=60fdb16d-7ddb-4847-8b65-9b9db898381b&type=service&staff=db85bbb7-a975-4259-a08f-9da787569b45&staffSelected=true",
      stripeUrl: "https://buy.stripe.com/REPLACE_initial65",
      featured: true,
      category: "just-starting",
      icon: Lightbulb,
      colorTheme: "from-blue-400 to-blue-600"
    },
    {
      title: "Guided CBT Programme",
      duration: "Monthly + 20-min check-in",
      price: "£49/month",
      bullets: [
        "Weekly email lessons",
        "Worksheets included",
        "Mood tracking tools",
        "20-min monthly check-in"
      ],
      stripeUrl: "https://buy.stripe.com/REPLACE_guided",
      isSubscription: true,
      category: "just-starting",
      icon: Compass,
      colorTheme: "from-blue-400 to-blue-600"
    },
    {
      title: "Self-Help Packs",
      duration: "PDF toolkits",
      price: "£9",
      bullets: [
        "Thought diaries",
        "Behavioural activation planners",
        "Relapse-prevention guides",
        "Instant download"
      ],
      stripeUrl: "https://buy.stripe.com/REPLACE_pack",
      isDigital: true,
      category: "just-starting",
      icon: Laptop,
      colorTheme: "from-blue-400 to-blue-600"
    },
    {
      title: "ChatCBT",
      duration: "24/7 AI Support",
      price: "£8/month",
      comingSoon: true,
      bullets: [
        "AI-powered CBT conversations",
        "Available 24/7",
        "Personalized guidance"
      ],
      stripeUrl: "#",
      isSubscription: true,
      category: "just-starting",
      icon: Code,
      colorTheme: "from-blue-400 to-blue-600"
    },
    // Ready to Commit
    {
      title: "Follow-up Session",
      duration: "45 min",
      price: "£119",
      bullets: [
        "Progress reviews",
        "Skills consolidation", 
        "Outcome tracking",
        "Continuity of care"
      ],
      bookingUrl: "https://recodecbt.setmore.com/book?step=time-slot&products=0a8ad2bd-fbfd-4ad7-b998-77a02cc30537&type=service&staff=db85bbb7-a975-4259-a08f-9da787569b45&staffSelected=true",
      stripeUrl: "https://buy.stripe.com/REPLACE_follow45",
      category: "ready-to-commit",
      icon: BarChart3,
      colorTheme: "from-green-400 to-green-600"
    },
    {
      title: "Ready to commit or continue",
      duration: "Drop in session", 
      price: "£15",
      bullets: [
        "15 minute check-in or emergency session",
        "Discuss new events and help break them down for analysis",
        "Refresh aspects of the course or exercises",
        "*Previous session required"
      ],
      bookingUrl: "https://recodecbt.setmore.com/book?step=time-slot&products=5c7a5dce-69ca-428f-8921-b13cab696cc6&type=service&staff=db85bbb7-a975-4259-a08f-9da787569b45&staffSelected=true",
      stripeUrl: "https://buy.stripe.com/REPLACE_group",
      category: "ready-to-commit",
      icon: Users,
      colorTheme: "from-green-400 to-green-600"
    },
    // Intensive Support
    {
      title: "6-Session Package",
      duration: "6 × 65 min",
      price: "£780",
      originalPrice: "£1,014",
      savings: "25% discount with this option",
      bullets: [
        "Structured plan",
        "Continuity",
        "Priority scheduling",
        "Pre-paid convenience"
      ],
      bookingUrl: "https://recodecbt.setmore.com/book?step=time-slot&products=67aeddf9-e76a-43f8-8809-eac3bcc4c266&type=service&staff=db85bbb7-a975-4259-a08f-9da787569b45&staffSelected=true",
      stripeUrl: "https://buy.stripe.com/REPLACE_pkg6",
      hasDiscount: true,
      category: "intensive-support",
      icon: Wrench,
      colorTheme: "from-purple-400 to-purple-600"
    },
    {
      title: "4-Session Package",
      duration: "4 × 65 min",
      price: "£599",
      originalPrice: "£676",
      savings: "SAVE £76",
      bullets: [
        "Intermediate course approach, structured R.E.C.O.D.E. analysis and applied CBT theory, psychoanalysis, and DBT styled exercises",
        "Reports and home content issued with each session",
        "Free 15 minute drop in session included",
        "SAVE £76 on 4 session course compared to single sessions"
      ],
      bookingUrl: "https://recodecbt.setmore.com/book?step=time-slot&products=049a7c0d-e671-4731-99e1-922f8ce7b8ce&type=service&staff=db85bbb7-a975-4259-a08f-9da787569b45&staffSelected=true",
      stripeUrl: "https://buy.stripe.com/REPLACE_4pkg",
      hasDiscount: true,
      category: "intensive-support",
      icon: Wrench,
      colorTheme: "from-purple-400 to-purple-600"
    },
    {
      title: "Assessment + Written Plan",
      duration: "90 min",
      price: "£249",
      bullets: [
        "Structured intake",
        "PHQ-9/GAD-7 assessment",
        "Personalised plan",
        "Share with GP/HR"
      ],
      bookingUrl: "https://recodecbt.setmore.com",
      stripeUrl: "https://buy.stripe.com/REPLACE_assess",
      category: "intensive-support",
      icon: Search,
      colorTheme: "from-purple-400 to-purple-600"
    },
    // Corporate & Group Solutions
    {
      title: "Corporate Training",
      duration: "Half/Full day workshops",
      price: "Quote on request",
      bullets: [
        "Team mental health training",
        "Workplace resilience building",
        "Manager support skills",
        "Custom programme design"
      ],
      category: "corporate-group",
      icon: Building2,
      colorTheme: "from-orange-400 to-orange-600",
      isCorporate: true
    },
    {
      title: "Group Therapy",
      duration: "8-week programmes",
      price: "£40 per person/week",
      bullets: [
        "Structured CBT curriculum",
        "Peer support environment",
        "Professional facilitation",
        "Minimum 8 people per session required"
      ],
      category: "corporate-group",
      icon: MessageCircle,
      colorTheme: "from-orange-400 to-orange-600",
      isCorporate: true
    }
  ];

  const categories = [
    {
      id: "just-starting",
      number: "1",
      title: "Just Starting Out",
      description: "Explore tools and build foundations",
      icon: MessageCircle,
      color: "from-blue-400 to-blue-600"
    },
    {
      id: "ready-to-commit",
      number: "2",
      title: "Ready to Commit",
      description: "Begin structured therapy and skill-building",
      icon: UserCheck,
      color: "from-green-400 to-green-600"
    },
    {
      id: "intensive-support",
      number: "3",
      title: "Intensive Support",
      description: "Comprehensive assessment and treatment packages",
      icon: Zap,
      color: "from-purple-400 to-purple-600"
    },
    {
      id: "corporate-group",
      number: "4",
      title: "Group & Corporate Solutions",
      description: "Team training and group therapy options",
      icon: Building2,
      color: "from-orange-400 to-orange-600"
    }
  ];

  const filteredServices = selectedCategory 
    ? services.filter(service => service.category === selectedCategory)
    : [];

  const steps = [
    {
      icon: Target,
      title: "Assess & baseline",
      description: "PHQ-9, GAD-7 baseline measurement"
    },
    {
      icon: Brain,
      title: "Formulate your Mind Code™",
      description: "Identify patterns maintaining the problem"
    },
    {
      icon: CheckCircle,
      title: "Targeted skills & experiments",
      description: "Apply CBT techniques with behavioural practice"
    },
    {
      icon: FileText,
      title: "Track progress & prevention",
      description: "Monitor outcomes and plan relapse prevention"
    }
  ];

  const faqs = [
    {
      question: "How many sessions will I need?",
      answer: "Many benefit from 6–12 sessions; we review regularly and adjust the plan based on your progress and goals."
    },
    {
      question: "Do you prescribe medication?",
      answer: "This service focuses on CBT. Medication questions can be discussed and coordinated with your GP as needed."
    },
    {
      question: "Do you see clients outside the UK?",
      answer: "Therapy is delivered in line with jurisdictional rules. International clients can access self-help programmes."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We require 24-hour notice for cancellations. Please check our full policies for details."
    }
  ];

  useEffect(() => {
    document.title = "Services | RecodeCBT – Doctor-Delivered CBT (Online)";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'GP-led CBT with 65-minute sessions, measurable outcomes, and clear pricing. Book online or join a guided CBT programme or group cohort.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-secondary/30 to-primary/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <Navigation />
        
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl relative z-10">
          {/* Brain Logo */}
          <div className="relative inline-block mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary via-accent to-secondary p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <img 
                  src="/lovable-uploads/fe81a945-6632-4272-8a5e-b2608fc7fbb2.png" 
                  alt="RecodeCBT Brain Logo" 
                  className="w-20 h-20 object-contain"
                />
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-secondary opacity-20 blur-md animate-pulse"></div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Recode Your Mind Code™ with Doctor-Delivered CBT
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Doctor-delivered CBT with clear goals and measurable outcomes. 65-minute sessions. Introductory offer available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-2xl hover:shadow-primary/25 transition-transform duration-300"
              onClick={() => window.open('https://recodecbt.setmore.com', '_blank')}
            >
              Book Your First Session
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-2 hover:bg-primary/5"
              onClick={() => window.location.href = '/lead-magnet'}
            >
              Download the 14-Day Mind Code™ Reset
            </Button>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Choose Your Journey</h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Select the path that best matches where you are in your mental health journey
          </p>
          
          {/* Category Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {categories.map((category) => (
              <Card 
                key={category.id}
                className={`cursor-pointer transition-transform duration-300 relative overflow-hidden group ${
                  selectedCategory === category.id 
                    ? 'ring-4 ring-primary/50 bg-primary/10 scale-105 shadow-2xl' 
                    : selectedCategory && selectedCategory !== category.id
                    ? 'opacity-30 scale-95'
                    : 'hover:shadow-xl hover:scale-105'
                }`}
                onClick={() => setSelectedCategory(selectedCategory === category.id ? "" : category.id)}
              >
                {/* Number Badge */}
                <div className={`absolute top-4 left-4 w-8 h-8 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-white font-bold text-sm z-10`}>
                  {category.number}
                </div>
                
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <CardContent className="p-6 text-center relative z-10">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                  {selectedCategory === category.id && (
                    <div className="mt-4 flex items-center justify-center text-primary">
                      <ArrowRight className="w-4 h-4 animate-pulse" />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Show All Button */}
          {!selectedCategory && (
            <div className="text-center mb-12">
              <Button 
                variant={showAllServices ? "default" : "outline"}
                size="lg"
                onClick={() => setShowAllServices(!showAllServices)}
                className="text-lg px-8 py-3"
              >
                {showAllServices ? "Hide Services" : "Show All Services"}
              </Button>
            </div>
          )}

          {/* Services Grid */}
          {(selectedCategory || showAllServices) && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(selectedCategory ? filteredServices : services).map((service, index) => (
                <Card key={index} className={`relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300 ${service.featured ? 'ring-2 ring-primary' : ''}`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <CardDescription className="text-lg font-semibold">
                          {service.duration}
                        </CardDescription>
                        
                        {/* Badges */}
                        {service.featured && (
                          <div className="mt-2">
                            <span className="bg-gradient-to-r from-primary to-accent text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                              Flagship Service
                            </span>
                          </div>
                        )}
                        {service.hasDiscount && (
                          <div className="mt-2">
                            <Badge className="bg-red-500 text-white px-3 py-1 text-xs font-bold shadow-lg">
                              25% OFF
                            </Badge>
                          </div>
                        )}
                        {service.comingSoon && (
                          <div className="mt-2">
                            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                              Coming Soon
                            </span>
                          </div>
                        )}
                        
                        <div className="text-2xl font-bold text-primary mt-3">
                          {service.originalPrice && (
                            <span className="line-through text-muted-foreground text-lg mr-2">
                              {service.originalPrice}
                            </span>
                          )}
                          {service.price}
                          {service.discountTag && (
                            <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full inline-block mt-1">
                              {service.discountTag}
                            </div>
                          )}
                          {service.savings && (
                            <span className="block text-sm text-green-600">({service.savings})</span>
                          )}
                        </div>
                      </div>
                      
                      {/* Service Icon */}
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.colorTheme} flex items-center justify-center flex-shrink-0`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="space-y-2">
                      {service.isCorporate ? (
                        <Button 
                          className="w-full" 
                          onClick={() => window.location.href = '/corporate-contact'}
                        >
                          Request Corporate Quote
                        </Button>
                      ) : (
                        <Button 
                          className="w-full bg-slate-800 hover:bg-slate-700 text-white" 
                          onClick={() => service.comingSoon ? null : window.open(service.bookingUrl || 'https://recodecbt.setmore.com', '_blank')}
                          disabled={service.comingSoon}
                        >
                          {service.comingSoon ? 'Coming Soon' : service.title.includes('Group') ? 'Reserve a Seat' : 'Book'}
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How it Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-primary to-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes & Trust */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Outcomes & Trust</h2>
          <p className="text-xl mb-12 text-muted-foreground">
            We measure progress session-by-session (e.g., PHQ-9/GAD-7) and adjust the plan together.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center group">
              <div className="bg-gradient-to-r from-primary to-accent rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">GP-Led Practice</h3>
              <p className="text-sm text-muted-foreground">Doctor-delivered therapy with medical oversight</p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="bg-gradient-to-r from-primary to-accent rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Data Privacy</h3>
              <p className="text-sm text-muted-foreground">Secure, confidential sessions with GDPR compliance</p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="bg-gradient-to-r from-primary to-accent rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Measured Progress</h3>
              <p className="text-sm text-muted-foreground">Validated tools track your improvement</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-8 italic">
            CBT outcomes vary; we review progress together and adjust the plan.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-lg mb-4 px-6">
                <AccordionTrigger className="text-left hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Start Your Journey?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-2xl hover:shadow-primary/25 transition-transform duration-300"
              onClick={() => window.open('https://recodecbt.setmore.com', '_blank')}
            >
              Book Your First Session
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-2 hover:bg-primary/5"
              onClick={() => window.location.href = '/lead-magnet'}
            >
              Download the 14-Day Mind Code™ Reset
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;