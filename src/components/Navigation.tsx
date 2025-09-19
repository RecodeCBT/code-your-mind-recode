import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import NavNeuroPulse from "@/components/Neuro/NavNeuroPulse";
import CircuitMenu from "@/components/Neuro/CircuitMenu";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "What is RECODE?", path: "/what-is-recode" },
    { label: "ChatCBT", path: "/chatcbt" },
    { label: "Book a Session", path: "/services", isHighlighted: true },
    { label: "Learn about Dr Carson", path: "/dr-carson" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "Evidence Updates", path: "/evidence-updates" },
    { label: "Contact Us", path: "/contact" }
  ];

  return (
    <nav className="w-full py-3 sm:py-4 px-2 sm:px-4 bg-background/95 backdrop-blur-sm border-b border-border/40">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2 bg-gradient-to-r from-secondary/10 via-orange-500/5 to-purple-600/10 rounded-full p-1.5 sm:p-2 backdrop-blur-sm border border-gradient-to-r from-orange-500/20 to-purple-600/20 max-w-full overflow-hidden">
            <div className="hidden md:block">
              <NavNeuroPulse />
            </div>
            <div className="md:hidden flex justify-center">
              <CircuitMenu />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;