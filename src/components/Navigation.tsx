import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "What is RECODE?", path: "/what-is-recode" },
    { label: "Learn about Dr Carson", path: "/dr-carson" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "Evidence Updates", path: "/evidence-updates" },
    { label: "Contact Us", path: "/contact" },
    { label: "Book a session", path: "/booking" }
  ];

  return (
    <nav className="w-full py-4 px-4 bg-background/95 backdrop-blur-sm border-b border-border/40">
      <div className="container mx-auto max-w-7xl">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-center">
          <div className="flex space-x-1 bg-secondary/10 rounded-full p-2 backdrop-blur-sm border border-border/20">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={location.pathname === item.path ? "default" : "ghost"}
                  size="sm"
                  className={cn(
                    "px-4 py-2 rounded-full transition-all duration-300 border border-transparent text-sm whitespace-nowrap",
                    location.pathname === item.path
                      ? "bg-primary text-primary-foreground shadow-md border-primary/20"
                      : "hover:bg-secondary/20 border-gradient-to-r from-orange-500/20 to-purple-600/20"
                  )}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Dropdown Navigation */}
        <div className="lg:hidden flex justify-center">
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 px-6 py-3 bg-secondary/10 rounded-full backdrop-blur-sm border border-border/20 text-foreground hover:bg-secondary/20 transition-all duration-300"
              type="button"
            >
              Menu
              <ChevronDown className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")} />
            </button>

            {/* Dropdown menu */}
            {isOpen && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50 bg-background border border-border rounded-lg shadow-lg w-64 backdrop-blur-sm">
                <ul className="py-2">
                  {navItems.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "block px-4 py-3 text-sm transition-colors hover:bg-secondary/20",
                          location.pathname === item.path
                            ? "bg-primary/10 text-primary font-medium border-l-4 border-primary"
                            : "text-foreground"
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;