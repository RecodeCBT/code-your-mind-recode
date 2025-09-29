import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import NeuroDecal from "@/components/Neuro/NeuroDecal";
const Contact = () => {
  const [searchParams] = useSearchParams();
  const submitted = searchParams.get('submitted') === 'true';
  return <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <Navigation />
      <div className="container mx-auto px-4 py-8">

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 rc-title-wrap">
            <NeuroDecal.TopTitle align="center" density="light" offsetY={-8} />
            <h1 className="text-4xl font-bold mb-4 relative z-10">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              Ready to start your transformation? Contact us to begin your RECODE journey
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 relative">
            <NeuroDecal.BodyMargins density="light" sections={3} />
            {/* Contact Form Section */}
            <Card className="p-8">
              <CardHeader className="text-center mb-6">
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </CardHeader>
              <CardContent>
                {submitted ? <div className="text-center py-8">
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
                  </div> : <form method="POST" action="https://formspree.io/f/manbqker" className="space-y-4">
                    {/* Anti-spam honeypot field */}
                    <input type="text" name="_gotcha" style={{
                  display: 'none'
                }} aria-hidden="true" />
                    
                    {/* Redirect after successful submission */}
                    <input type="hidden" name="_next" value={`${window.location.origin}/contact?submitted=true`} />
                    
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input type="text" id="name" name="name" required className="w-full p-3 border rounded-lg bg-background border-border focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Your full name" />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input type="email" id="email" name="email" required className="w-full p-3 border rounded-lg bg-background border-border focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="your.email@example.com" />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <textarea id="message" name="message" required rows={6} className="w-full p-3 border rounded-lg bg-background border-border focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical" placeholder="Tell us about your goals and how we can help..." />
                    </div>
                    
                    <button type="submit" className="w-full bg-pink-600 text-white rounded py-2 px-4 hover:opacity-90 transition-opacity font-medium">
                      Send Message
                    </button>
                  </form>}
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

              {/* Quick Action Buttons */}
              <div className="space-y-4">
                <Link to="/services" className="block">
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
            <CardContent className="text-center py-0">
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
              <a href="https://www.samaritans.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                Get Help Now - Samaritans
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Book Your Session Section */}
        <section className="py-20 px-4 bg-primary text-primary-foreground relative mt-12">
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
    </div>;
};
export default Contact;