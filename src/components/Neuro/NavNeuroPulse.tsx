import { Link, useLocation } from "react-router-dom";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

function Magnetic({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0); const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness:300, damping:20, mass:0.3 });
  const sy = useSpring(y, { stiffness:300, damping:20, mass:0.3 });

  return (
    <motion.span
      className="relative inline-block"
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        if (reduce) return;
        const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width/2)) * 0.25);
        y.set((e.clientY - (r.top + r.height/2)) * 0.25);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
    >
      {children}
    </motion.span>
  );
}

export default function NavNeuroPulse(){
  const { pathname } = useLocation();

  const items = [
    { label: "Home", to: "/" },
    { label: "What is RECODE?", to: "/what-is-recode" },
    { label: "ChatCBT", to: "/chatcbt" },
    { label: "Book a Session", to: "/services" },
    { label: "Learn about Dr Carson", to: "/dr-carson" },
    { label: "Testimonials", to: "/testimonials" },
    { label: "Evidence Updates", to: "/evidence-updates" },
    { label: "Contact Us", to: "/contact" },
  ];

  return (
    <nav aria-label="Primary" className="flex flex-wrap items-center justify-center gap-2 text-[15px]">
      {items.map((it)=> {
        const active = pathname === it.to;
        return (
          <Link key={it.to} to={it.to} className="group relative px-2 py-1 rounded-full">
            <Magnetic>
              <span className="text-slate-200 hover:text-white transition-colors">{it.label}</span>
              <span className="block h-[2px] w-full overflow-hidden">
                <span className={`block h-full origin-left scale-x-0 bg-gradient-to-r from-[var(--rc-cyan)] to-[var(--rc-violet)] transition-transform duration-300 group-hover:scale-x-100 ${active ? 'scale-x-100' : ''}`} />
              </span>
              {active && (
                <span aria-hidden className="pointer-events-none absolute -bottom-0.5 left-0 h-[2px] w-full overflow-hidden">
                  <span className="h-full w-1/3 bg-[var(--rc-cyan)]/60 animate-[rc-scan_1.8s_linear_infinite]" />
                </span>
              )}
            </Magnetic>
          </Link>
        );
      })}
    </nav>
  );
}