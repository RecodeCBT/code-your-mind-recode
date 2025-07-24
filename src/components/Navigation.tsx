import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "What is RECODE?", path: "/what-is-recode" },
    { label: "Learn about Dr Carson", path: "/dr-carson" },
    { label: "Sign in", path: "/auth" }
  ];

  return (
    <nav className="w-full py-6 px-4 bg-background/95 backdrop-blur-sm border-b border-border/40">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-center">
          <div className="flex space-x-2 bg-secondary/10 rounded-full p-2 backdrop-blur-sm border border-border/20">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={location.pathname === item.path ? "default" : "ghost"}
                  size="sm"
                  className={cn(
                    "px-6 py-2 rounded-full transition-all duration-300",
                    location.pathname === item.path
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "hover:bg-secondary/20"
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