import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/manbqker', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              Ready to start your transformation? Contact us to begin your RECODE journey
            </p>
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
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="mb-4 text-green-600 text-2xl">✓</div>
                    <h3 className="text-lg font-semibold mb-2">Thank you!</h3>
                    <p className="text-muted-foreground">
                      Your enquiry has been sent. We'll reply within 1 working day.
                    </p>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      variant="outline" 
                      className="mt-4"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form method="POST" action="https://formspree.io/f/manbqker" onSubmit={handleSubmit} className="space-y-4">
                    {/* Anti-spam honeypot field */}
                    <input type="text" name="_gotcha" style={{ display: 'none' }} aria-hidden="true" />
                    
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
                      disabled={isSubmitting}
                      className="w-full bg-pink-600 text-white rounded py-2 px-4 hover:opacity-90 disabled:opacity-50 transition-opacity font-medium"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
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
                    <Mail className="h-5 w-5 text-primary" />
                    Email Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">info@recode-therapy.com</p>
                  <p className="text-muted-foreground">
                    We typically respond within 24 hours
                  </p>
                </CardContent>
              </Card>

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
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
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

              {/* Quick Action Buttons */}
              <div className="space-y-4">
                <Link to="/booking" className="block">
                  <Button className="w-full" size="lg">
                    Book a Session
                  </Button>
                </Link>
                <Link to="/about" className="block">
                  <Button variant="outline" className="w-full" size="lg">
                    Learn More About Dr. Carson
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Emergency Notice */}
          <Card className="mt-12 p-6 border-orange-200 bg-orange-50 dark:bg-orange-950/20">
            <CardContent className="text-center">
              <h3 className="text-lg font-semibold mb-2 text-orange-800 dark:text-orange-200">
                Emergency Support
              </h3>
              <p className="text-orange-700 dark:text-orange-300">
                If you're experiencing a mental health crisis, please contact your local emergency services 
                or call the Samaritans on 116 123 (free from any phone).
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;