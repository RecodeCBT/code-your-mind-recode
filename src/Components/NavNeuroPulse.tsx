'use client';
import Link from "next/link";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

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
  const [path, setPath] = useState<string>("/");
  useEffect(() => { if (typeof window !== "undefined") setPath(window.location.pathname); }, []);

  const LinkItem = ({href,label}:{href:string;label:string})=>{
    const active = path === href;
    return (
      <Link href={href} className="group relative px-2 py-1">
        <Magnetic>
          <span className="text-slate-200 hover:text-white transition-colors">{label}</span>
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
  };

  return (
    <nav aria-label="Primary" className="flex items-center gap-6 text-[15px]">
      <LinkItem href="/"         label="Home" />
      <LinkItem href="/method"   label="RECODE Method" />
      <LinkItem href="/services" label="Services" />
      <LinkItem href="/pricing"  label="Pricing" />
      <LinkItem href="/book"     label="Book" />
    </nav>
  );
}