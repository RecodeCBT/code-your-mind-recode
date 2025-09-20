import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Phone, Mail, MapPin, Clock } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const submitted = searchParams.get('submitted') === 'true';

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 mb-8 text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="relative inline-block mb-4">
              <h1 className="text-4xl font-bold px-8 py-4 relative z-10">Get in Touch</h1>
              <div className="absolute inset-0 border-2 border-primary/30 rounded-lg bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 shadow-lg"></div>
              <div className="absolute inset-2 border border-primary/20 rounded-md bg-background/50"></div>
              {/* Circuitry corners */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-primary/40"></div>
              <div className="absolute -top-1 -right-1 w-4 h-4 border-r-2 border-t-2 border-primary/40"></div>
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-l-2 border-b-2 border-primary/40"></div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-primary/40"></div>
            </div>
            <p className="text-xl text-muted-foreground mb-6">
              Ready to start your transformation? Contact us to begin your RECODE journey
            </p>
            <div className="flex justify-center">
              <Link to="/services">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-3 text-lg font-semibold shadow-lg">
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form Section */}
            <Card className="p-8">
              <CardHeader className="text-center mb-6">
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="mb-4 text-green-600 text-2xl">✓</div>
                    <h3 className="text-lg font-semibold mb-2">Thank you!</h3>
                    <p className="text-muted-foreground">
                      Your enquiry has been sent. We'll reply within 1 working day.
                    </p>
                    <Link to="/contact">
                      <Button variant="outline" className="mt-4">
                        Send Another Message
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <form method="POST" action="https://formspree.io/f/manbqker" className="space-y-4">
                    {/* Anti-spam honeypot field */}
                    <input type="text" name="_gotcha" style={{ display: 'none' }} aria-hidden="true" />
                    
                    {/* Redirect after successful submission */}
                    <input type="hidden" name="_next" value={`${window.location.origin}/contact?submitted=true`} />
                    
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full p-3 border rounded-lg bg-background border-border focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full p-3 border rounded-lg bg-background border-border focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="w-full p-3 border rounded-lg bg-background border-border focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
                        placeholder="Tell us about your goals and how we can help..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-pink-600 text-white rounded py-2 px-4 hover:opacity-90 transition-opacity font-medium"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Consultation Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Tuesday</span>
                      <span>7:30 PM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Wednesday - Friday</span>
                      <span>3:30 PM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday - Sunday</span>
                      <span>10:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Remote Consultations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    All RECODE sessions are conducted via secure video conferencing, 
                    allowing you to access therapy from the comfort of your own space.
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>

          {/* Emergency Notice */}
          <Card className="mt-12 p-6 border-orange-200 bg-orange-50 dark:bg-orange-950/20">
            <CardContent className="text-center">
              <h3 className="text-lg font-semibold mb-2 text-orange-800 dark:text-orange-200">
                Emergency Support
              </h3>
              <p className="text-orange-700 dark:text-orange-300 mb-4">
                If you're experiencing a mental health crisis, please contact your local emergency services 
                or call the Samaritans on 116 123 (free from any phone).
              </p>
              <p className="text-orange-700 dark:text-orange-300 mb-4">
                If you are thinking about hurting yourself, please reach out for immediate support:
              </p>
              <a 
                href="https://www.samaritans.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
              >
                Get Help Now - Samaritans
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;