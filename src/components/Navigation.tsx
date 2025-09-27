import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [{
    label: "Home",
    path: "/"
  }, {
    label: "What is RECODE?",
    path: "/what-is-recode"
  }, {
    label: "The Basics",
    path: "/basics"
  }, {
    label: "ChatCBT",
    path: "/chatcbt"
  }, {
    label: "Book a Session",
    path: "/services",
    isHighlighted: true
  }, {
    label: "Learn about Dr Carson",
    path: "/dr-carson"
  }, {
    label: "Testimonials",
    path: "/testimonials"
  }, {
    label: "Evidence Updates",
    path: "/evidence-updates"
  }, {
    label: "Contact Us",
    path: "/contact"
  }];
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);
  return <>
      <nav className="fixed top-0 left-0 right-0 w-full py-3 px-4 z-40 bg-transparent my-[10px]">
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-center">
            {/* Central Menu Button with Electric Pulse */}
            <Button variant="ghost" size="lg" onClick={toggleMenu} className="relative px-6 py-3 rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 hover:scale-105 transition-transform duration-300 shadow-lg" aria-label="Toggle menu" aria-expanded={isMenuOpen}>
              <div className="flex items-center gap-3">
                {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
                <span className="text-base font-medium text-white">Menu</span>
              </div>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Navigation menu">
          {/* Enhanced Backdrop with radial gradient animation */}
          <div 
            className="fixed inset-0 backdrop-blur-sm animate-backdrop-radial" 
            style={{
              background: 'radial-gradient(circle at 90% 10%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 100%)'
            }}
            onClick={closeMenu} 
          />
          
          {/* Menu Panel - emerges from top-right */}
          <div className="fixed top-4 right-4 w-80 max-w-[calc(100vw-2rem)] bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-white/20 overflow-hidden animate-menu-slide-in origin-top-right">
            {/* Header with electric gradient */}
            <div className="flex items-center justify-between p-6 bg-gradient-to-r from-orange-400/10 via-pink-500/10 to-purple-600/10 border-b border-gradient-to-r border-orange-400/20">
              <span className="text-lg font-semibold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Menu</span>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={closeMenu} 
                className="p-2 hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-purple-600/20 rounded-full transition-all duration-300" 
                aria-label="Close menu"
              >
                <X className="h-5 w-5 text-gray-700" />
              </Button>
            </div>
            
            {/* Navigation items with cascade animation */}
            <nav className="p-4">
              <ul className="space-y-1">
                {navItems.map((item, index) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <li 
                      key={item.path}
                      className="animate-menu-item-cascade"
                      style={{ 
                        animationDelay: `${index * 50}ms`,
                        animationFillMode: 'both'
                      }}
                    >
                      <Link 
                        to={item.path} 
                        onClick={closeMenu} 
                        className={cn(
                          "flex items-center px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 group",
                          item.isHighlighted 
                            ? "bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white hover:from-orange-600 hover:via-pink-600 hover:to-purple-700 shadow-lg hover:shadow-xl hover:scale-[1.02]" 
                            : isActive 
                            ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 border-l-4 border-blue-600 shadow-sm" 
                            : "text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:text-gray-900 hover:scale-[1.01]"
                        )}
                      >
                        <span className="relative">
                          {item.label}
                          {/* Electric underline effect for highlighted item */}
                          {item.isHighlighted && (
                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white/30 animate-electric-pulse"></span>
                          )}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>}
    </>;
};
export default Navigation;