import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";

const Navigation = () => {
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [clickedItem, setClickedItem] = useState<string | null>(null);
  const pillRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

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

  const handleMouseEnter = (path: string, event: React.MouseEvent) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    
    setHoveredItem(path);
    const button = pillRefs.current[path];
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (event.clientX - centerX) * 0.1;
    const deltaY = (event.clientY - centerY) * 0.1;
    
    button.style.setProperty('--drift-x', `${deltaX}px`);
    button.style.setProperty('--drift-y', `${deltaY}px`);
    button.style.animation = 'magnetic-drift 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards';
  };

  const handleMouseLeave = (path: string) => {
    setHoveredItem(null);
    const button = pillRefs.current[path];
    if (!button) return;
    
    button.style.animation = 'magnetic-drift 0.3s cubic-bezier(0.4, 0, 0.2, 1) reverse forwards';
  };

  const handleClick = (path: string) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    
    setClickedItem(path);
    setTimeout(() => setClickedItem(null), 600);
  };

  useEffect(() => {
    // Cleanup function to reset animations
    return () => {
      Object.values(pillRefs.current).forEach(button => {
        if (button) {
          button.style.animation = '';
          button.style.removeProperty('--drift-x');
          button.style.removeProperty('--drift-y');
        }
      });
    };
  }, []);

  return (
    <nav className="w-full py-3 sm:py-4 px-2 sm:px-4 bg-background/95 backdrop-blur-sm border-b border-border/40">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2 bg-gradient-to-r from-secondary/10 via-orange-500/5 to-purple-600/10 rounded-full p-1.5 sm:p-2 backdrop-blur-sm border border-gradient-to-r from-orange-500/20 to-purple-600/20 max-w-full overflow-hidden">
            {navItems.map((item, index) => {
              const effectVariants = ["circuit", "neural", "code"];
              const effectVariant = effectVariants[index % 3];
              const isActive = location.pathname === item.path;
              
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    ref={(el) => (pillRefs.current[item.path] = el)}
                    variant={
                      item.isHighlighted 
                        ? "hero" 
                        : isActive 
                          ? "nav-active" 
                          : "nav-ghost"
                    }
                    size={item.isHighlighted ? "default" : "sm"}
                    onMouseEnter={(e) => handleMouseEnter(item.path, e)}
                    onMouseLeave={() => handleMouseLeave(item.path)}
                    onClick={() => handleClick(item.path)}
                    className={cn(
                      "rounded-full whitespace-nowrap relative overflow-hidden nav-pill",
                      "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                      item.isHighlighted && "healing-pulse",
                      isActive && "nav-pill-active",
                      clickedItem === item.path && "nav-pill-ripple",
                      item.isHighlighted 
                        ? "px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-semibold" 
                        : `px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 text-xs sm:text-sm ${effectVariant === 'circuit' ? 'btn-circuit' : effectVariant === 'neural' ? 'btn-neural' : 'btn-code'}`,
                      // Mobile optimizations
                      "min-w-0 max-w-[120px] sm:max-w-none overflow-hidden text-ellipsis"
                    )}
                    aria-current={isActive ? "page" : undefined}
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