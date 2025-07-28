import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Building, Users, TrendingUp, Clock, Award, Shield } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const CorporateContact = () => {
  const [searchParams] = useSearchParams();
  const submitted = searchParams.get('submitted') === 'true';

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 mb-8 text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Corporate Training & Staff Wellness Enquiry</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your workplace with ReCODE methodology. Enhance team performance, reduce stress, and build resilience through evidence-based psychological training.
            </p>
          </div>

          {/* Corporate Benefits Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center border-2 border-blue-600/20 bg-gradient-to-b from-blue-50/50 to-white dark:from-blue-950/20 dark:to-background">
              <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Workplace Transformation</h3>
              <p className="text-muted-foreground text-sm">Create a more resilient, productive workplace culture through targeted psychological training</p>
            </Card>
            <Card className="p-6 text-center border-2 border-purple-600/20 bg-gradient-to-b from-purple-50/50 to-white dark:from-purple-950/20 dark:to-background">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Team Wellness Programs</h3>
              <p className="text-muted-foreground text-sm">Customized group sessions focusing on stress management and emotional resilience</p>
            </Card>
            <Card className="p-6 text-center border-2 border-orange-500/20 bg-gradient-to-b from-orange-50/50 to-white dark:from-orange-950/20 dark:to-background">
              <TrendingUp className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Performance Enhancement</h3>
              <p className="text-muted-foreground text-sm">Evidence-based techniques to improve focus, productivity and goal achievement</p>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form Section */}
            <Card className="p-8 border-2 border-primary/20 bg-gradient-to-b from-primary/5 to-white dark:to-background">
              <CardHeader className="text-center mb-6">
                <CardTitle className="text-2xl flex items-center justify-center gap-2">
                  <Building className="h-6 w-6 text-primary" />
                  Corporate Enquiry Form
                </CardTitle>
                <p className="text-muted-foreground">
                  Complete the form below and we'll get back to you within 24 hours with a customized proposal
                </p>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="mb-4 text-green-600 text-2xl">✓</div>
                    <h3 className="text-lg font-semibold mb-2">Thank you for your enquiry!</h3>
                    <p className="text-muted-foreground">
                      We've received your corporate training request and will respond within 1 working day with a tailored proposal.
                    </p>
                    <Link to="/corporate-contact">
                      <Button variant="outline" className="mt-4">
                        Send Another Enquiry
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <form method="POST" action="https://formspree.io/f/manbqker" className="space-y-4">
                    {/* Anti-spam honeypot field */}
                    <input type="text" name="_gotcha" style={{ display: 'none' }} aria-hidden="true" />
                    
                    {/* Redirect after successful submission */}
                    <input type="hidden" name="_next" value={`${window.location.origin}/corporate-contact?submitted=true`} />
                    
                    {/* Hidden field to identify corporate enquiries */}
                    <input type="hidden" name="_subject" value="Corporate Training Enquiry" />
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-name" className="block text-sm font-medium mb-2">
                          Contact Name *
                        </label>
                        <input
                          type="text"
                          id="contact-name"
                          name="contact-name"
                          required
                          className="w-full p-3 border-2 rounded-lg bg-background border-primary/20 focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="job-title" className="block text-sm font-medium mb-2">
                          Job Title
                        </label>
                        <input
                          type="text"
                          id="job-title"
                          name="job-title"
                          className="w-full p-3 border-2 rounded-lg bg-background border-primary/20 focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="HR Manager, CEO, etc."
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          className="w-full p-3 border-2 rounded-lg bg-background border-primary/20 focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="Company name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="team-size" className="block text-sm font-medium mb-2">
                          Team Size
                        </label>
                        <select
                          id="team-size"
                          name="team-size"
                          className="w-full p-3 border-2 rounded-lg bg-background border-primary/20 focus:ring-2 focus:ring-primary focus:border-primary"
                        >
                          <option value="">Select team size</option>
                          <option value="5-15">5-15 people</option>
                          <option value="16-30">16-30 people</option>
                          <option value="31-50">31-50 people</option>
                          <option value="51-100">51-100 people</option>
                          <option value="100+">100+ people</option>
                        </select>
                      </div>
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
                        className="w-full p-3 border-2 rounded-lg bg-background border-primary/20 focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="your.email@company.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="training-interest" className="block text-sm font-medium mb-2">
                        Training Focus Areas *
                      </label>
                      <div className="grid md:grid-cols-2 gap-2">
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" name="training-focus" value="stress-management" className="rounded" />
                          <span className="text-sm">Stress Management</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" name="training-focus" value="performance-psychology" className="rounded" />
                          <span className="text-sm">Performance Psychology</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" name="training-focus" value="emotional-resilience" className="rounded" />
                          <span className="text-sm">Emotional Resilience</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" name="training-focus" value="anxiety-management" className="rounded" />
                          <span className="text-sm">Anxiety Management</span>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Additional Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="w-full p-3 border-2 rounded-lg bg-background border-primary/20 focus:ring-2 focus:ring-primary focus:border-primary resize-vertical"
                        placeholder="Tell us about your team's specific needs, preferred training format (in-person/virtual), timeline, and any particular challenges you'd like to address..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg py-3 px-4 transition-all duration-300 font-medium text-lg shadow-lg"
                    >
                      Submit Corporate Training Enquiry
                    </button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Corporate Information */}
            <div className="space-y-6">
              <Card className="p-6 border-2 border-orange-500/20">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Clock className="h-5 w-5 text-orange-500" />
                    Corporate Training Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-orange-500 mb-2">Session Formats Available:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Half-day workshops (4 hours)</li>
                        <li>• Full-day intensive programs (8 hours)</li>
                        <li>• Multi-session training series</li>
                        <li>• Virtual or in-person delivery</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-500 mb-2">Typical Group Sizes:</h4>
                      <p className="text-sm text-muted-foreground">
                        Optimal groups of 8-25 participants for maximum engagement and learning outcomes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 border-2 border-purple-600/20">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Award className="h-5 w-5 text-purple-600" />
                    Professional Credentials
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-purple-600" />
                      <span>Qualified & Practicing General Practitioner</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-purple-600" />
                      <span>Accredited Diploma in CBT</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-purple-600" />
                      <span>Specialized in Corporate Wellness Training</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Action Buttons */}
              <div className="space-y-4">
                <Link to="/contact" className="block">
                  <Button variant="outline" className="w-full" size="lg">
                    Individual Sessions Enquiry
                  </Button>
                </Link>
                <Link to="/dr-carson" className="block">
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
                Employee Emergency Support
              </h3>
              <p className="text-orange-700 dark:text-orange-300 mb-4">
                Corporate training sessions are educational and do not replace individual therapy or crisis intervention. 
                For immediate mental health support, employees should contact their local emergency services or the Samaritans on 116 123.
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

export default CorporateContact;