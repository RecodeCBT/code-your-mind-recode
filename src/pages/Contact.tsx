import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Phone, Mail, MapPin, Clock } from "lucide-react";
const Contact = () => {
  return <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
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
                {/* FormSpree Form Placeholder */}
                <div className="space-y-6">
                  <div className="p-6 border-2 border-dashed border-muted rounded-lg text-center">
                    <h3 className="text-lg font-semibold mb-2">FormSpree Integration Area</h3>
                    <p className="text-muted-foreground mb-4">
                      This is where you can easily embed your FormSpree form code.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Simply replace this section with your FormSpree form HTML code to enable contact form functionality.
                    </p>
                  </div>
                  
                  {/* Example form structure for reference */}
                  <div className="space-y-4 opacity-50">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <input type="text" className="w-full p-3 border rounded-lg bg-background" placeholder="Your full name" disabled />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input type="email" className="w-full p-3 border rounded-lg bg-background" placeholder="your.email@example.com" disabled />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone (Optional)</label>
                      <input type="tel" className="w-full p-3 border rounded-lg bg-background" placeholder="+44 (0) 123 456 7890" disabled />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <textarea className="w-full p-3 border rounded-lg bg-background h-32" placeholder="Tell us about your goals and how we can help..." disabled />
                    </div>
                    <Button className="w-full" disabled>
                      Send Message (FormSpree Integration Required)
                    </Button>
                  </div>
                </div>
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
    </div>;
};
export default Contact;