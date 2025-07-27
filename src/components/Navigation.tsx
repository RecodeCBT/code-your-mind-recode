import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

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
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2 bg-secondary/10 rounded-full p-2 backdrop-blur-sm border border-border/20 max-w-full">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={location.pathname === item.path ? "default" : "ghost"}
                  size="sm"
                  className={cn(
                    "px-2 sm:px-3 md:px-4 py-2 rounded-full transition-all duration-300 border border-transparent text-xs sm:text-sm whitespace-nowrap",
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
      </div>
    </nav>
  );
};

export default Navigation;