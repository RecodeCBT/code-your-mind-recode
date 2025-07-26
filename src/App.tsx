import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Booking from "./pages/Booking";
import About from "./pages/About";
import DrCarsonBackground from "./pages/DrCarsonBackground";
import Contact from "./pages/Contact";
import AnxietyPanic from "./pages/conditions/AnxietyPanic";
import DepressionMood from "./pages/conditions/DepressionMood";
import ProcrastinationAvoidance from "./pages/conditions/ProcrastinationAvoidance";
import AngerEmotional from "./pages/conditions/AngerEmotional";
import WhatIsRecode from "./pages/WhatIsRecode";
import Testimonials from "./pages/Testimonials";
import RecodeChat from "./pages/RecodeChat";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<About />} />
          <Route path="/dr-carson" element={<DrCarsonBackground />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/what-is-recode" element={<WhatIsRecode />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/recode-chat" element={<RecodeChat />} />
          <Route path="/conditions/anxiety-panic" element={<AnxietyPanic />} />
          <Route path="/conditions/depression-mood" element={<DepressionMood />} />
          <Route path="/conditions/procrastination" element={<ProcrastinationAvoidance />} />
          <Route path="/conditions/anger-emotional" element={<AngerEmotional />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
