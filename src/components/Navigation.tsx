import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <>
      <nav className="w-full py-4 px-4 bg-white/95 backdrop-blur-sm border-b border-gray-200/60 sticky top-0 z-40">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Logo/Brand */}
            <Link to="/" className="flex items-center">
              {location.pathname === '/services' ? (
                <div className="w-12 h-12 rounded-full bg-orange-500 p-1">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <img src="/lovable-uploads/fe81a945-6632-4272-8a5e-b2608fc7fbb2.png" alt="RecodeCBT Logo" className="w-full h-full object-contain rounded-full" />
                  </div>
                </div>
              ) : (
                <span className="text-xl font-bold text-gray-900">RECODE CBT</span>
              )}
            </Link>

            {/* Desktop Navigation - Hidden on mobile, shown on larger screens */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                
                return (
                  <Link key={item.path} to={item.path}>
                    <Button
                      variant={item.isHighlighted ? "default" : "ghost"}
                      size="sm"
                      className={cn(
                        "text-sm font-medium transition-colors",
                        item.isHighlighted 
                          ? "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2" 
                          : isActive 
                            ? "bg-blue-50 text-blue-600" 
                            : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      )}
                    >
                      {item.label}
                    </Button>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <span className="text-sm font-medium text-orange-500">Menu</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMenu}
                className="p-2"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-orange-500" />
                ) : (
                  <Menu className="h-6 w-6 text-orange-500" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/30 backdrop-blur-sm"
            onClick={closeMenu}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <span className="text-lg font-semibold text-gray-900">Menu</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={closeMenu}
                className="p-2"
                aria-label="Close menu"
              >
                <X className="h-5 w-5 text-gray-700" />
              </Button>
            </div>
            
            <nav className="p-4">
              <ul className="space-y-2">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  
                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        onClick={closeMenu}
                        className={cn(
                          "flex items-center px-4 py-3 text-base font-medium rounded-lg transition-colors",
                          item.isHighlighted
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : isActive
                              ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                              : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;