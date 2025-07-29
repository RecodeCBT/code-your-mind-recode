import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Booking from "./pages/Booking";
import About from "./pages/About";
import DrCarsonBackground from "./pages/DrCarsonBackground";
import Contact from "./pages/Contact";
import CorporateContact from "./pages/CorporateContact";
import AnxietyPanic from "./pages/conditions/AnxietyPanic";
import DepressionMood from "./pages/conditions/DepressionMood";
import ProcrastinationAvoidance from "./pages/conditions/ProcrastinationAvoidance";
import AngerEmotional from "./pages/conditions/AngerEmotional";
import WhatIsRecode from "./pages/WhatIsRecode";
import Testimonials from "./pages/Testimonials";
import EvidenceUpdates from "./pages/EvidenceUpdates";
import ChatCBTComingSoon from "./pages/ChatCBTComingSoon";
import CBT from "./pages/philosophy/CBT";
import DBT from "./pages/philosophy/DBT";
import Mindfulness from "./pages/philosophy/Mindfulness";
import Neuroplasticity from "./pages/philosophy/Neuroplasticity";
import PerformancePsychology from "./pages/philosophy/PerformancePsychology";
import Visualization from "./pages/philosophy/Visualization";
import Policies from "./pages/Policies";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <SpeedInsights />
      <Analytics />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<About />} />
          <Route path="/dr-carson" element={<DrCarsonBackground />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/corporate-contact" element={<CorporateContact />} />
          <Route path="/what-is-recode" element={<WhatIsRecode />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/evidence-updates" element={<EvidenceUpdates />} />
          <Route path="/conditions/anxiety-panic" element={<AnxietyPanic />} />
          <Route path="/conditions/depression-mood" element={<DepressionMood />} />
          <Route path="/conditions/procrastination" element={<ProcrastinationAvoidance />} />
          <Route path="/conditions/anger-emotional" element={<AngerEmotional />} />
          <Route path="/philosophy/cbt" element={<CBT />} />
          <Route path="/philosophy/dbt" element={<DBT />} />
          <Route path="/philosophy/mindfulness" element={<Mindfulness />} />
          <Route path="/philosophy/neuroplasticity" element={<Neuroplasticity />} />
          <Route path="/philosophy/performance-psychology" element={<PerformancePsychology />} />
          <Route path="/philosophy/visualization" element={<Visualization />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/chatcbt-coming-soon" element={<ChatCBTComingSoon />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
