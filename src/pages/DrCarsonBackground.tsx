import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Stethoscope, Brain, Award, Dumbbell, Heart, Activity, Shield } from "lucide-react";
import Navigation from "@/components/Navigation";
import NeuroDecal from "@/components/Neuro/NeuroDecal";
const DrCarsonBackground = () => {
  return <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <Navigation />
      <div className="container mx-auto px-4 py-8 pt-20">

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 rc-title-wrap">
            <NeuroDecal.TopTitle align="center" density="light" offsetY={-8} />
            <h1 className="mb-2 text-3xl sm:text-4xl font-bold relative z-10 whitespace-nowrap">Dr. Christopher Carson</h1>
            <p className="text-sm italic text-muted-foreground mb-4">BSc MBBS MRCGP ProfDipCBT</p>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The journey from medical practice to creating ReCODE - A new approach to mental health treatment
            </p>
          </div>

          {/* Professional Introduction Section */}
          <div className="relative">
            <NeuroDecal.BodyMargins density="light" sections={4} />
          <Card className="p-8 mb-12 border-2 border-primary/20 bg-gradient-to-r from-background via-muted/10 to-primary/5 relative z-10">
            <div className="grid lg:grid-cols-5 gap-8 items-start">
              <div className="lg:col-span-2 space-y-6">
                {/* Photo */}
                <div className="flex justify-center">
                  <div className="relative overflow-hidden rounded-lg shadow-lg border-2 border-muted/30">
                    <img src="/lovable-uploads/c1b46773-b5a8-41c8-a7a3-f0f16097d31d.png" alt="Dr. Christopher Carson" className="w-48 h-64 object-cover transition-transform duration-300 hover:scale-105" />
                  </div>
                </div>
                
                {/* Professional Credentials Summary */}
                <Card className="bg-white border border-gray-200 shadow-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Award className="h-5 w-5 text-blue-600" />
                      Professional Qualifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <GraduationCap className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-sm">MBBS Medicine</p>
                          <p className="text-xs text-gray-600">University of East Anglia</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Stethoscope className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-sm">MRCGP</p>
                          <p className="text-xs text-gray-600">Royal College of General Practitioners</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Brain className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-sm">Professional Diploma CBT</p>
                          <p className="text-xs text-gray-600">Accredited Cognitive Behavioural Therapy</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Activity className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-sm">Level 3 Personal Training</p>
                          <p className="text-xs text-gray-600">Certified Fitness Professional</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <GraduationCap className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-sm">BSc (Hons) Biomedical Sciences</p>
                          <p className="text-xs text-gray-600">Queen's University Belfast</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-green-600" />
                        <div>
                          <p className="text-xs font-medium text-green-700">GMC Registered Practitioner</p>
                          <p className="text-xs text-gray-600">Current practicing status</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="lg:col-span-3">
                <CardContent className="space-y-4 text-sm sm:text-base leading-relaxed">
                  <p>
                    Dr. Christopher Carson is a medical doctor and General Practitioner with a long-standing interest in how the brain and body influence mental wellbeing. His journey began with a <strong>degree in Biomedical Sciences at Queen's University Belfast</strong>, where he focused on neuroscience and neuropsychopharmacology. This early grounding in how the brain works and what influences it, this continues to inform his therapeutic approach today.
                  </p>
                  
                  <p>
                    Alongside medicine, he has always valued the link between physical health and mental resilience. He trained as a <strong>Level 3 Personal Trainer</strong> and <strong>represented Ireland in American Football</strong> with the Irish Wolfhounds in 2018 and 2019. These experiences gave him first-hand insight into how exercise, lifestyle, and mindset shape psychological health.
                  </p>
                  
                  <p>
                    He went on to complete his medical training at the <strong>University of East Anglia</strong>, qualifying as a doctor in 2015 and later gaining his <strong>MRCGP in Belfast in 2020</strong>, granting him a position on the specialist GP register. Working across <strong>Northern Ireland and London</strong>, Dr. Carson developed a strong interest in mental health. He also recognised that NHS services, while vital, are often overstretched - leaving people waiting too long for help, and sometimes presenting information in a way that feels overwhelming rather than practical.
                  </p>
                  
                  <p>
                    To address this gap, he completed a <strong>postgraduate diploma in Cognitive Behavioural Therapy (CBT)</strong>, adding advanced, evidence-based psychological skills to his medical expertise. After seeing how many patients benefited from these techniques within the limits of a brief GP consultation, he created a dedicated service where this approach could be given the time and space it deserves.
                  </p>
                  
                  <p>
                    In 2025, out of this combination of neuroscience, lifestyle medicine, and CBT grew <strong>ReCODE</strong> - a practical, evidence-informed approach designed to help people understand and "recode" the patterns that hold them back - with overwhelmingly positive feedback from his users.
                  </p>
                </CardContent>
              </div>
            </div>
          </Card>
          </div>

          {/* RECODE Methodology Section */}
          <Card className="p-8 mb-12 border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <div className="flex items-center gap-3">
                  <img src="/lovable-uploads/0ae4333b-2ae9-4aa3-803f-ed93b3dc6e41.png" alt="RECODE Logo" className="w-8 h-8 object-contain" />
                  <span>The ReCODE Approach</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dr. Carson developed ReCODE as a systematic method to identify and reprogram the automatic thought patterns and emotional responses that keep people stuck in cycles of mental health challenges. His approach treats the mind like software that can be debugged and optimized, drawing from his comprehensive medical training and specialized CBT qualifications.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through years of treating patients with anxiety, depression, and stress-related disorders, he recognized that traditional approaches often focused on symptom management rather than addressing the underlying mental patterns that drive psychological distress. ReCODE represents a consolidation and simplification towards understanding and restructuring these fundamental patterns.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                The ReCODE approach involves highlighting your mental algorithms, testing their validity against established "cognitive distortions," then deviating from programmed "reactions" using DBT-styled exercises to delay them. Your brain learns by practice. When you repeat new responses, it rewires itself, just like learning to play an instrument. With steady practice, these new codes become your natural default.
              </p>
            </CardContent>
          </Card>

          {/* Quote Section */}
          <Card className="p-8 text-center bg-gradient-to-r from-primary/10 via-orange-500/10 to-purple-600/10 border-2 border-primary/20">
            <blockquote className="text-2xl italic mb-4">"Mental health patterns are like code - they can be pre-loaded in the human brain or they can develop. With the right approach, we can reveal this code, update and re-write them for better outcomes."</blockquote>
            <cite className="text-lg text-muted-foreground">
              - Dr. Christopher Carson<br />
              <span className="text-sm italic">BSc MBBS MRCGP ProfDipCBT</span>
            </cite>
          </Card>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Link to="/contact">
              <Button size="lg" className="text-lg px-8 py-3">
                Get Started with ReCODE
              </Button>
            </Link>
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
      </div>
    </div>;
};
export default DrCarsonBackground;