import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, GraduationCap, Stethoscope, Shield, Brain, Award, Users, Calendar, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";

const About = () => {
  return <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 mb-8 text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">About Dr. Christopher Carson</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Pioneering mental health re-programming through a new hybrid of therapy, modelled on evidence-based therapies, and years of medical practice in mental health.</p>
          </div>

          {/* Hero Image and Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <Card className="p-6">
                <img src="/lovable-uploads/28c2c6b5-4d5b-4410-975c-19cb580468dc.png" alt="Dr. Christopher Carson" className="w-full h-auto rounded-lg shadow-lg" />
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl">Professional Background</CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Dr. Christopher Carson is a fully qualified, registered and practicing General Practitioner 
                    with specialized training in Cognitive Behavioural Therapy. He combines medical expertise 
                    with innovative therapeutic approaches to help patients overcome mental health challenges.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    His unique approach treats mental health conditions like outdated software that needs 
                    updating, using evidence-based CBT and DBT techniques to help patients "recode" their 
                    thought patterns and behaviors.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary">Medical Doctor</Badge>
                    <Badge variant="secondary">CBT Acreditation</Badge>
                    <Badge variant="secondary">General Practitioner</Badge>
                    <Badge variant="secondary">Mental Health Expert</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Patient Impact
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">500+</div>
                      <div className="text-sm text-muted-foreground">Patients Helped</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">95%</div>
                      <div className="text-sm text-muted-foreground">Success Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">5+</div>
                      <div className="text-sm text-muted-foreground">Years Practice</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Qualifications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Professional Qualifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <div className="p-3 bg-primary/10 rounded-lg inline-block mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">BSc Biomedical Sciences</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive foundation in human biology, physiology, and medical science
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="p-3 bg-primary/10 rounded-lg inline-block mb-4">
                  <Stethoscope className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">MBBS in Medicine</h3>
                <p className="text-sm text-muted-foreground">
                  Medical degree qualifying as a licensed doctor
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="p-3 bg-primary/10 rounded-lg inline-block mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">MRCGP</h3>
                <p className="text-sm text-muted-foreground">
                  Specialist training in general practice and primary care
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="p-3 bg-primary/10 rounded-lg inline-block mb-4">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">CBT Diploma</h3>
                <p className="text-sm text-muted-foreground">
                  Accredited diploma in CBT and therapy styles in the CBT model
                </p>
              </Card>
            </div>
          </div>

          {/* The RECODE Method */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">The RECODE Method</h2>
            <Card className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    Dr. Carson's innovative RECODE methodology treats mental health conditions as 
                    software that can be updated and optimized. This approach combines traditional 
                    CBT techniques with modern understanding of neuroplasticity.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <span className="text-orange-600 font-bold">R</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Recognize</h4>
                        <p className="text-sm text-muted-foreground">Identify destructive thought patterns</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <span className="text-purple-600 font-bold">E</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Evaluate</h4>
                        <p className="text-sm text-muted-foreground">Assess the validity of these patterns</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <span className="text-blue-600 font-bold">C</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Challenge</h4>
                        <p className="text-sm text-muted-foreground">Question and reframe negative thoughts</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <span className="text-green-600 font-bold">O</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Optimize</h4>
                      <p className="text-sm text-muted-foreground">Develop healthier coping strategies</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-red-100 rounded-lg">
                      <span className="text-red-600 font-bold">D</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Deploy</h4>
                      <p className="text-sm text-muted-foreground">Implement new behavioral patterns</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <span className="text-yellow-600 font-bold">E</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Evolve</h4>
                      <p className="text-sm text-muted-foreground">Continuously improve and adapt</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <blockquote className="italic text-center">
                      "Mental health patterns are like code - these codes can be pre-loaded in the human brain. 
                      With the right approach, we can update and optimize them for better outcomes."
                    </blockquote>
                    <cite className="block text-center mt-2 text-sm text-muted-foreground">- Dr. Christopher Carson BSc MBBS MRCGP ProfDip</cite>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Call to Action */}
          <Card className="p-8 text-center bg-primary text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Transformation?</h2>
            <p className="text-xl mb-6 opacity-90">
              Experience the RECODE method with Dr. Carson's personalized approach to mental wellness
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                  Start Your Journey
                </Button>
              </Link>
              <Link to="/booking">
                <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Book Consultation
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>

      {/* Book Your Session Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground relative">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Book Your Session</h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule your personalized ReCODE consultation through our secure booking system
          </p>
          
          {/* Fresha Booking Embed Placeholder */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-6">
            <p className="text-lg mb-4">Professional ReCODE Sessions</p>
            <p className="text-sm opacity-75 mb-4">It starts with one click </p>
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
    </div>
  );
};

export default About;