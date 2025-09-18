import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Download, CheckCircle, Brain, Target } from "lucide-react";

const LeadMagnet = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const navigateWithScrollToTop = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    document.title = "14-Day Mind Code™ Reset | RecodeCBT";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Download your free 14-Day Mind Code™ Reset guide with practical CBT techniques to transform your thinking patterns.');
    }
  }, []);

  const benefits = [
    "Daily thought restructuring exercises",
    "Cognitive distortion identification tools", 
    "Behavioural activation techniques",
    "Mindfulness integration practices",
    "Progress tracking templates",
    "Evidence-based CBT strategies"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real implementation, this would handle the form submission
    // and trigger the download/email delivery
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <Download className="w-16 h-16 text-primary mx-auto mb-4" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            14-Day Mind Code™ Reset
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Transform your thinking patterns with this comprehensive guide to cognitive restructuring and emotional regulation.
          </p>
          <div className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-sm rounded-lg p-6 mb-8">
            <p className="text-lg font-semibold text-primary mb-2">FREE DOWNLOAD</p>
            <p className="text-muted-foreground">
              A structured 14-day programme with daily exercises, worksheets, and CBT techniques
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Button */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <Link to="/testimonials#top">
              <Button variant="outline" size="lg" className="text-sm sm:text-lg px-4 sm:px-8 py-2 sm:py-3 border-2 border-primary/30 hover:border-primary hover:bg-primary/5">
                ⭐ Read Our Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Choose Your Journey Title */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Choose Your Journey</h2>
            <p className="text-xl text-muted-foreground">
              Start your transformation with our comprehensive guide and continue with professional support
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Side - Benefits */}
            <div>
              <h2 className="text-3xl font-bold mb-8">What You'll Get</h2>
              <div className="space-y-6 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-lg">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 text-center">
                  <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Science-Based</h3>
                  <p className="text-sm text-muted-foreground">Evidence-based CBT techniques proven effective in clinical research</p>
                </Card>
                <Card className="p-6 text-center">
                  <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Practical Tools</h3>
                  <p className="text-sm text-muted-foreground">Ready-to-use worksheets and exercises for immediate implementation</p>
                </Card>
              </div>
            </div>

            {/* Right Side - Download Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">
                    {isSubmitted ? "Thank You!" : "Get Your Free Guide"}
                  </CardTitle>
                  <CardDescription className="text-center">
                    {isSubmitted 
                      ? "Check your email for download instructions" 
                      : "Enter your details to download instantly"
                    }
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name</label>
                        <input 
                          type="text" 
                          id="firstName" 
                          name="firstName" 
                          required 
                          className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          required 
                          className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
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
                          I consent to receiving the download link and occasional updates about RecodeCBT services. 
                          View our <a href="/policies" className="underline">Privacy Policy</a>
                        </label>
                      </div>
                      <Button type="submit" size="lg" className="w-full text-lg py-6">
                        <Download className="w-5 h-5 mr-2" />
                        Download Free Guide
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center space-y-4">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                      <p className="text-lg">Your download link has been sent to your email!</p>
                      <p className="text-muted-foreground">
                        Don't see it? Check your spam folder or contact us for assistance.
                      </p>
                      <div className="space-y-2">
                        <Button 
                          size="lg" 
                          className="w-full"
                          onClick={() => window.open('https://recodecbt.setmore.com', '_blank')}
                        >
                          Book Your First Session
                        </Button>
                        <Button 
                          variant="outline" 
                          size="lg" 
                          className="w-full"
                          onClick={() => navigateWithScrollToTop('/services')}
                        >
                          View Our Services
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 bg-secondary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Trusted by Mental Health Professionals</h2>
          <p className="text-xl text-muted-foreground mb-8">
            This guide is created by Dr. Carson, a practicing GP with specialized training in CBT, 
            ensuring you receive professional-grade tools for mental health improvement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-2">14 Days</h3>
              <p className="text-muted-foreground">Structured daily programme</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-2">Evidence-Based</h3>
              <p className="text-muted-foreground">Proven CBT techniques</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-2">Doctor-Created</h3>
              <p className="text-muted-foreground">GP and CBT specialist developed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeadMagnet;