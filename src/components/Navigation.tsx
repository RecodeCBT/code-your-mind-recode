import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
            {navItems.map((item, index) => {
              const effectVariants = ["circuit", "neural", "code"];
              const effectVariant = effectVariants[index % 3];
              
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={
                      item.isHighlighted 
                        ? "hero" 
                        : location.pathname === item.path 
                          ? "nav-active" 
                          : "nav-ghost"
                    }
                    size={item.isHighlighted ? "default" : "sm"}
                    className={cn(
                      "rounded-full whitespace-nowrap relative overflow-hidden",
                      item.isHighlighted 
                        ? "px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-semibold" 
                        : `px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 text-xs sm:text-sm ${effectVariant === 'circuit' ? 'btn-circuit' : effectVariant === 'neural' ? 'btn-neural' : 'btn-code'}`,
                      // Mobile optimizations
                      "min-w-0 max-w-[120px] sm:max-w-none overflow-hidden text-ellipsis"
                    )}
                  >
                    <span className="relative z-10 truncate">{item.label}</span>
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;