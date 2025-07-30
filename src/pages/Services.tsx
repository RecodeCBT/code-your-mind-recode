import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import { CheckCircle, Users, FileText, Brain, Target, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Initial Assessment & Therapy",
      duration: "65 min",
      price: "£169",
      introPrice: "Intro £149",
      bullets: [
        "Doctor-delivered CBT",
        "Personalised formulation", 
        "Measurable outcomes",
        "Secure online booking"
      ],
      bookingUrl: "https://recodecbt.setmore.com",
      stripeUrl: "https://buy.stripe.com/REPLACE_initial65",
      featured: true
    },
    {
      title: "Follow-up Session",
      duration: "45 min",
      price: "£119–£129",
      bullets: [
        "Progress reviews",
        "Skills consolidation", 
        "Outcome tracking",
        "Continuity of care"
      ],
      bookingUrl: "https://recodecbt.setmore.com",
      stripeUrl: "https://buy.stripe.com/REPLACE_follow45"
    },
    {
      title: "6-Session Package",
      duration: "6 × 65 min",
      price: "£949–£969",
      savings: "save 5–7%",
      bullets: [
        "Structured plan",
        "Continuity",
        "Priority scheduling",
        "Pre-paid convenience"
      ],
      bookingUrl: "https://recodecbt.setmore.com",
      stripeUrl: "https://buy.stripe.com/REPLACE_pkg6"
    },
    {
      title: "Guided CBT Programme",
      duration: "Monthly + 20-min check-in",
      price: "£49–£69/month",
      bullets: [
        "Weekly email lessons",
        "Worksheets included",
        "Mood tracking tools",
        "20-min monthly check-in"
      ],
      stripeUrl: "https://buy.stripe.com/REPLACE_guided",
      isSubscription: true
    },
    {
      title: "Anxiety Reset Group",
      duration: "4 × 60-min sessions",
      price: "£25–£40 per person/week",
      bullets: [
        "Skills + practice",
        "Community support",
        "Workbook included",
        "8 seats, Zoom format"
      ],
      bookingUrl: "https://recodecbt.setmore.com",
      stripeUrl: "https://buy.stripe.com/REPLACE_group"
    },
    {
      title: "Assessment + Written Plan",
      duration: "90 min",
      price: "£249–£295",
      bullets: [
        "Structured intake",
        "PHQ-9/GAD-7 assessment",
        "Personalised plan",
        "Share with GP/HR"
      ],
      bookingUrl: "https://recodecbt.setmore.com",
      stripeUrl: "https://buy.stripe.com/REPLACE_assess"
    },
    {
      title: "Self-Help Packs",
      duration: "PDF toolkits",
      price: "£9–£29",
      bullets: [
        "Thought diaries",
        "Behavioural activation planners",
        "Relapse-prevention guides",
        "Instant download"
      ],
      stripeUrl: "https://buy.stripe.com/REPLACE_pack",
      isDigital: true
    }
  ];

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
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">

      <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Recode Your Mind Code™ with Doctor-Delivered CBT
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Doctor-delivered CBT with clear goals and measurable outcomes. 65-minute sessions. Introductory offer available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => window.open('https://recodecbt.setmore.com', '_blank')}
              >
                Book Your First Session
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => window.location.href = '/lead-magnet'}
              >
                Download the 14-Day Mind Code™ Reset
              </Button>
            </div>
          </div>
        </section>

        {/* Services at a Glance */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Services at a Glance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className={`relative ${service.featured ? 'ring-2 ring-primary' : ''}`}>
                  {service.featured && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                        Flagship Service
                      </span>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-lg font-semibold">
                      {service.duration}
                    </CardDescription>
                    <div className="text-2xl font-bold text-primary">
                      {service.price}
                      {service.introPrice && (
                        <span className="block text-sm text-green-600">{service.introPrice}</span>
                      )}
                      {service.savings && (
                        <span className="block text-sm text-green-600">({service.savings})</span>
                      )}
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
                      {service.bookingUrl && (
                        <Button 
                          className="w-full" 
                          onClick={() => window.open(service.bookingUrl, '_blank')}
                        >
                          {service.title.includes('Group') ? 'Reserve a Seat' : 'Book'}
                        </Button>
                      )}
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => window.open(service.stripeUrl, '_blank')}
                      >
                        {service.isSubscription ? 'Join' : 'Buy Now'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-20 px-4 bg-secondary/10">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How it Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes & Trust */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Outcomes & Trust</h2>
            <p className="text-xl mb-12 text-muted-foreground">
              We measure progress session-by-session (e.g., PHQ-9/GAD-7) and adjust the plan together.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-semibold mb-2">GP-Led Practice</h3>
                <p className="text-sm text-muted-foreground">Doctor-delivered therapy with medical oversight</p>
              </div>
              <div className="flex flex-col items-center">
                <FileText className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Data Privacy</h3>
                <p className="text-sm text-muted-foreground">Secure, confidential sessions with GDPR compliance</p>
              </div>
              <div className="flex flex-col items-center">
                <Target className="w-12 h-12 text-primary mb-4" />
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
        <section className="py-20 px-4 bg-secondary/10">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Start Your Journey?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => window.open('https://recodecbt.setmore.com', '_blank')}
              >
                Book Your First Session
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => window.location.href = '/lead-magnet'}
              >
                Download the 14-Day Mind Code™ Reset
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Form Sidebar - Right Rail */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-4">Have Questions?</h2>
                <p className="text-muted-foreground">
                  Our services are designed to provide effective, evidence-based CBT with clear outcomes. 
                  Each session is structured to help you understand and change the patterns that maintain your difficulties.
                </p>
              </div>
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle>Get in Touch</CardTitle>
                    <CardDescription>Send us a message and we'll get back to you</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form action="https://formspree.io/f/manbqker" method="POST" className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          required 
                          className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          required 
                          className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                        <textarea 
                          id="message" 
                          name="message" 
                          rows={4} 
                          required 
                          className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        ></textarea>
                      </div>
                      <div className="flex items-start space-x-2">
                        <input 
                          type="checkbox" 
                          id="consent" 
                          name="consent" 
                          required 
                          className="mt-1"
                        />
                        <label htmlFor="consent" className="text-xs text-muted-foreground">
                          I consent to my data being processed in accordance with the{" "}
                          <a href="/policies" className="underline">Privacy Policy</a>
                        </label>
                      </div>
                      <Button type="submit" className="w-full">Send Message</Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default Services;