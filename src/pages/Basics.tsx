import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Target, CheckCircle, Heart, X } from "lucide-react";
import Navigation from "@/components/Navigation";
import NeuroDecal from "@/components/Neuro/NeuroDecal";
const Basics = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const basicsData = {
    "exercise": {
      title: "Exercise Habits",
      icon: Zap,
      color: "orange",
      content: "Regular physical activity directly influences mitochondria production, boosting energy capacity in all your cells. Exercise increases BDNF (brain-derived neurotrophic factor), which helps with neuroplasticity and mental clarity."
    },
    "sleep": {
      title: "Sleep Hygiene",
      icon: Heart,
      color: "teal",
      content: "Quality sleep patterns are fundamental to emotional regulation and cognitive function. During sleep, your brain consolidates memories and clears metabolic waste, directly impacting your mental performance and emotional stability."
    },
    "nutrition": {
      title: "Nutritional Impacts",
      icon: Target,
      color: "purple",
      content: "Knowledge on how blood sugar levels can influence energy and impact mental states. Stable glucose levels support consistent energy and mood, while blood sugar spikes and crashes can trigger anxiety and depression-like symptoms."
    },
    "hydration": {
      title: "Hydration Levels",
      icon: CheckCircle,
      color: "blue",
      content: "Adequate hydration is essential for optimal brain function though essential energy pathways, removing toxic by-products of keeping the body running, and maintaining blood pressure. Even mild dehydration can significantly impact concentration and mood."
    }
  };
  const closeExpanded = () => setExpandedSection(null);
  return <div className="min-h-screen bg-background overflow-x-hidden">
      <NeuroDecal.TopCircuitBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-orange-500/5 to-purple-600/5 px-4 py-[20px] pt-28">
        <div className="absolute top-10 left-4 w-24 h-24 bg-gradient-to-br from-orange-500/15 to-purple-600/15 rounded-full blur-xl"></div>
        <div className="absolute top-20 right-4 w-20 h-20 bg-gradient-to-br from-blue-600/15 to-orange-500/15 rounded-lg rotate-45 blur-xl"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6 rc-title-wrap">
            <NeuroDecal.TopTitle align="center" density="light" offsetY={-12} />
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight relative z-10">
              <span className="bg-gradient-to-r from-orange-500 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                The Basics
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Through his dual expertise as both a practicing medical doctor and certified Level 3 Personal Trainer, 
              Dr. Carson emphasizes that anything affecting your energy levels directly impacts your psychological wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* The Basics Section */}
      <section className="px-4 bg-gradient-to-r from-orange-500/5 via-purple-600/5 to-blue-600/5 relative py-px">
        <NeuroDecal.BodyMargins density="light" sections={3} />
        <div className="container mx-auto max-w-6xl relative z-10 my-px py-[40px]">
          
          {/* Four Quarters Grid */}
          <div className="relative max-w-4xl mx-auto overflow-hidden">
            <div className="grid grid-cols-2 gap-4 md:gap-8">
            
            {/* Exercise Habits - Top Left */}
            <Card className="p-4 md:p-6 bg-gradient-to-br from-orange-500/15 to-orange-600/10 border-2 border-orange-500/30 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02]" onClick={() => setExpandedSection('exercise')}>
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Zap className="h-6 w-6 md:h-8 md:w-8 text-orange-600" />
                </div>
                <h3 className="text-base md:text-xl font-bold text-orange-700 mb-2 md:mb-3">Exercise Habits</h3>
                <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-700 hover:bg-orange-500/10 text-xs md:text-sm" onClick={e => {
                  e.stopPropagation();
                  setExpandedSection('exercise');
                }}>
                  Read more...
                </Button>
              </div>
            </Card>

            {/* Sleep Hygiene - Top Right */}
            <Card className="p-4 md:p-6 bg-gradient-to-br from-teal-500/15 to-teal-600/10 border-2 border-teal-500/30 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02]" onClick={() => setExpandedSection('sleep')}>
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Heart className="h-6 w-6 md:h-8 md:w-8 text-teal-600" />
                </div>
                <h3 className="text-base md:text-xl font-bold text-teal-700 mb-2 md:mb-3">Sleep Hygiene</h3>
                <Button variant="ghost" size="sm" className="text-teal-600 hover:text-teal-700 hover:bg-teal-500/10 text-xs md:text-sm" onClick={e => {
                  e.stopPropagation();
                  setExpandedSection('sleep');
                }}>
                  Read more...
                </Button>
              </div>
            </Card>

            {/* Nutritional Impacts - Bottom Left */}
            <Card className="p-4 md:p-6 bg-gradient-to-br from-purple-500/15 to-purple-600/10 border-2 border-purple-500/30 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02]" onClick={() => setExpandedSection('nutrition')}>
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Target className="h-6 w-6 md:h-8 md:w-8 text-purple-600" />
                </div>
                <h3 className="text-base md:text-xl font-bold text-purple-700 mb-2 md:mb-3">Nutritional Impacts</h3>
                <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700 hover:bg-purple-500/10 text-xs md:text-sm" onClick={e => {
                  e.stopPropagation();
                  setExpandedSection('nutrition');
                }}>
                  Read more...
                </Button>
              </div>
            </Card>

            {/* Hydration Levels - Bottom Right */}
            <Card className="p-4 md:p-6 bg-gradient-to-br from-blue-500/15 to-blue-600/10 border-2 border-blue-500/30 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02]" onClick={() => setExpandedSection('hydration')}>
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
                </div>
                <h3 className="text-base md:text-xl font-bold text-blue-700 mb-2 md:mb-3">Hydration Levels</h3>
                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-500/10 text-xs md:text-sm" onClick={e => {
                  e.stopPropagation();
                  setExpandedSection('hydration');
                }}>
                  Read more...
                </Button>
              </div>
            </Card>
            </div>

            {/* Central "The Basics" Icon */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-500 via-purple-600 to-blue-600 rounded-full shadow-lg flex items-center justify-center">
                <div className="w-14 h-14 md:w-18 md:h-18 bg-white rounded-full flex items-center justify-center shadow-inner">
                  <div className="text-center">
                    <p className="text-xs md:text-sm font-bold text-gray-800 leading-tight">The<br />Basics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expanded Content Overlay */}
          {expandedSection && <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in" onClick={closeExpanded}>
              <Card className="max-w-lg w-full max-h-[80vh] overflow-y-auto bg-white backdrop-blur-sm border-2 shadow-2xl animate-scale-in" onClick={e => e.stopPropagation()}>
                <CardHeader className="text-center">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${expandedSection === 'exercise' ? 'bg-orange-500/20' : expandedSection === 'sleep' ? 'bg-teal-500/20' : expandedSection === 'nutrition' ? 'bg-purple-500/20' : 'bg-blue-500/20'}`}>
                      {React.createElement(basicsData[expandedSection].icon, {
                      className: `h-6 w-6 ${expandedSection === 'exercise' ? 'text-orange-600' : expandedSection === 'sleep' ? 'text-teal-600' : expandedSection === 'nutrition' ? 'text-purple-600' : 'text-blue-600'}`
                    })}
                    </div>
                      <CardTitle className="text-2xl font-bold">
                        {basicsData[expandedSection].title}
                      </CardTitle>
                    </div>
                    <Button variant="ghost" size="sm" onClick={closeExpanded} className="hover:bg-gray-100">
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {basicsData[expandedSection].content}
                  </p>
                  <div className="text-center">
                    <Button onClick={closeExpanded} variant="outline">
                      Close
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>}
        </div>
      </section>

      {/* Book Your Session Section */}
      <section className="px-4 bg-primary text-primary-foreground relative py-[20px] overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Book Your Session</h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule your personalized ReCODE consultation through our secure booking system
          </p>
          
          {/* Fresha Booking Embed Placeholder */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-6">
            <p className="text-lg mb-4">Professional ReCODE Sessions</p>
            <p className="text-sm opacity-75 mb-4">It starts with one click </p>
            <div className="flex flex-col items-center justify-center gap-4 overflow-hidden">
              <div className="relative group inline-block">
                <Button size="lg" onClick={() => window.location.href = 'https://recodecbt.setmore.com'} className="text-lg px-8 py-3 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white shadow-lg">
                  Book Your Session Today
                </Button>
                
                {/* Enhanced £20 off sticker - repositioned to stay within bounds */}
                <div className="absolute -top-4 -right-8 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white rounded-full shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300 flex flex-col items-center justify-center border-2 border-white">
                    <div className="font-bold text-xs leading-none">£20</div>
                    <div className="font-bold text-xs leading-none">OFF</div>
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
    </div>;
};
export default Basics;