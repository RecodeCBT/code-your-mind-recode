import { Shield, FileText, Clock, Mail, Download, Lock, Eye, UserCheck, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/Navigation";
const Policies = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-orange-500/5 to-purple-600/5 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-purple-600/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-blue-600/10 to-orange-500/10 rounded-lg rotate-45 blur-xl"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold">Privacy & Policies</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Clear, honest policies that put your privacy and peace of mind first. 
            No legalese—just straightforward information about how we protect and serve you.
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-4 py-12">
        
        {/* Privacy Policy Section */}
        <Card className="mb-12">
          <CardHeader className="text-center pb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Lock className="h-6 w-6 text-primary" />
              <CardTitle className="text-3xl">RECODE CBT · Privacy Policy</CardTitle>
            </div>
            <p className="text-muted-foreground">Effective: 1 July 2025</p>
          </CardHeader>
          
          <CardContent className="space-y-8">
            <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-l-primary">
              <p className="text-lg leading-relaxed">Welcome to RECODE CBT. This isn't just therapy—it's a blueprint for mental 
re-programming . 
We honour your trust and take privacy seriously. This policy explains how your data is collected, stored and protected when you interact with our wellness services.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Eye className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-3">What We Do</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    RECODE CBT is a remote-only service focused on psychoeducation, emotional fitness, 
                    and cognitive reprogramming—inspired by CBT, shaped by neuroscience, and powered by mindfulness.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-2">
                    Our sessions are educational, reflective, and skills-based—not clinical diagnosis or psychiatric treatment.
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex items-start gap-4">
                <FileText className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-3">What We Hold (and Why)</h3>
                  <p className="text-muted-foreground mb-4">We keep things minimal and meaningful:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Contact basics (name, email—so we can reach you)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Session reflections (topics discussed, exercises used—so we can build on them)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Booking info (session times, changes—so we stay organised)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Tech logs (browser/device data—only if access troubleshooting is needed)
                    </li>
                  </ul>
                  <p className="text-muted-foreground mt-4 font-medium">
                    We do not collect diagnostic or sensitive medical health data.
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex items-start gap-4">
                <UserCheck className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-3">Your Data Stays With Us</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      We do not share personal or session info with any third parties—ever.
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      We don't run ads. We don't sell data.
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      If the law demands it (e.g., safety risk), we comply—but never beyond that.
                    </li>
                  </ul>
                  <p className="text-muted-foreground mt-4 font-medium italic">
                    Your thoughts, your words, your journey—remain yours.
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex items-start gap-4">
                <Shield className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-3">How We Store It</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Data is encrypted and secured on GDPR-compliant platforms.
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Access is limited to your practitioner—no team, no third-party review.
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Data is retained up to 7 years if required for professional standards, then permanently deleted.
                    </li>
                  </ul>
                </div>
              </div>

              <Separator />

              <div className="flex items-start gap-4">
                <AlertCircle className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-3">Your Rights</h3>
                  <p className="text-muted-foreground mb-4">UK GDPR says: you're in control. You can:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      View the information we hold
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Request edits or deletion (unless legally required to retain it)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Pause or limit how we use your details
                    </li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    Simply email us at <a href="mailto:ReCodeCBT@gmail.com" className="text-primary hover:underline font-medium">ReCodeCBT@gmail.com</a> to make a request.
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-3">Questions?</h3>
                  <p className="text-muted-foreground mb-2">We welcome curiosity.</p>
                  <p className="text-muted-foreground">
                    Reach out: <a href="mailto:ReCodeCBT@gmail.com" className="text-primary hover:underline font-medium">ReCodeCBT@gmail.com</a>
                  </p>
                  <p className="text-muted-foreground">
                    Visit: <a href="https://www.recodecbt.com" className="text-primary hover:underline font-medium">www.recodecbt.com</a>
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Booking & Cancellation Policy Section */}
        <Card className="mb-12">
          <CardHeader className="text-center pb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="h-6 w-6 text-primary" />
              <CardTitle className="text-3xl">RECODE CBT · Booking & Cancellation Policy</CardTitle>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-8">
            <div className="bg-gradient-to-r from-orange-500/5 to-purple-600/5 rounded-lg p-6 border-l-4 border-l-orange-500">
              <p className="text-lg leading-relaxed">
                RECODE isn't a one-size-fits-all therapy hour. Each session is adaptive, neuro-informed, 
                and grounded in practical tools for rewiring patterns. We honour your time—and ask the same in return.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FileText className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-3">Booking</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      All sessions are remote and booked via our scheduling platform Setmore.
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Session length and structure vary by need.
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      You'll receive confirmation and details immediately after booking.
                    </li>
                  </ul>
                </div>
              </div>

              <Separator />

              <div className="flex items-start gap-4">
                <Shield className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-3">Payment</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Full payment is due at the time of booking.
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Secure payments are handled via our booking platform.
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Sliding scale or special requests? Contact us—we'll do our best to help.
                    </li>
                  </ul>
                </div>
              </div>

              <Separator />

              <div className="flex items-start gap-4">
                <Clock className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-3">Changes & Cancellations</h3>
                  <p className="text-muted-foreground mb-4">We get it—life happens. Here's the structure:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Cancel/reschedule 24+ hours in advance: No charge.
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      Cancel within 24 hours: 30% of session fee applies.
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      No-shows: Same 30% applies.
                    </li>
                  </ul>
                  <p className="text-muted-foreground mt-4 italic">
                    This policy respects both your time and ours, and helps keep our sessions sustainable.
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex items-start gap-4">
                <AlertCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-3">Late to Session?</h3>
                  <p className="text-muted-foreground">
                    Your session will still end at the original scheduled time to respect others booked after you.
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex items-start gap-4">
                <Lock className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-3">Confidentiality</h3>
                  <p className="text-muted-foreground mb-4 font-medium">Your privacy isn't a clause—it's a cornerstone.</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Everything said in session is confidential.
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      No session notes are shared, ever.
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      We are not affiliated with insurers or referral networks.
                    </li>
                  </ul>
                </div>
              </div>

              <Separator />

              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-3">Let's Stay In Touch</h3>
                  <p className="text-muted-foreground mb-2">Need to change a session or ask something?</p>
                  <p className="text-muted-foreground">
                    Email: <a href="mailto:ReCodeCBT@gmail.com" className="text-primary hover:underline font-medium">ReCodeCBT@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Download PDF Section */}
        <div className="text-center">
          <Card className="inline-block p-6 bg-gradient-to-r from-primary/5 to-orange-500/5">
            <div className="flex items-center gap-3 mb-4">
              <Download className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Download PDF Version</h3>
            </div>
            <p className="text-muted-foreground mb-4">Save a copy of our policies for your records</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Download className="h-4 w-4 mr-2" />
              Download Policies PDF
            </Button>
          </Card>
        </div>
      </div>
    </div>;
};
export default Policies;