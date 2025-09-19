'use client';
import { useState, useEffect, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CircuitMenu(){
  const [open,setOpen] = useState(false);
  const reduce = useReducedMotion();
  const onKey = useCallback((e: KeyboardEvent)=>{ if(e.key==="Escape") setOpen(false); },[]);
  useEffect(()=>{ document.addEventListener("keydown",onKey); return ()=>document.removeEventListener("keydown",onKey);},[onKey]);

  const items = [
    { to:"/what-is-recode", label:"What is RECODE?" },
    { to:"/services", label:"Services" },
    { to:"/testimonials", label:"Testimonials" },
    { to:"/evidence-updates", label:"Evidence Updates" },
    { to:"/contact", label:"Contact Us" }
  ];

  return (
    <>
      <button
        aria-expanded={open}
        aria-controls="circuit-menu"
        onClick={()=>setOpen(v=>!v)}
        className="z-[60] rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white hover:bg-white/10"
      >
        {open ? "Close" : "Menu"}
      </button>

      <motion.div
        id="circuit-menu"
        role="dialog" aria-modal="true"
        className="fixed inset-0 z-50 bg-[var(--rc-bg)]/95 text-white"
        initial={false}
        animate={{ opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none" }}
        transition={reduce ? {duration:0} : {duration:0.2}}
      >
        <svg className="absolute inset-0 h-full w-full opacity-60" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="rcGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%"  stopColor="var(--rc-cyan)" />
              <stop offset="100%" stopColor="var(--rc-violet)" />
            </linearGradient>
          </defs>
          {[120,240,360,480,600,720,840,960].map((y,i)=>(
            <g key={i} style={{ animation: open ? "rc-circuit-glow 2.6s ease-in-out infinite" : "none" }}>
              <path
                d={`M 50 ${y} H 1150`}
                stroke="url(#rcGrad)" strokeWidth="1.5" fill="none"
                strokeDasharray="1000" strokeDashoffset="1000"
                style={{ animation: open ? "rc-dash 1.8s ease forwards" : "none", animationDelay: `${0.1*i}s` }}
              />
              <circle cx={200+(i*80)%1000} cy={y} r="3" fill="var(--rc-cyan)"/>
            </g>
          ))}
        </svg>

        <nav className="relative z-10 mx-auto flex min-h-full max-w-4xl flex-col items-center justify-center gap-6 px-6 text-center">
          <h2 className="mb-6 text-4xl font-semibold tracking-tight">Navigate</h2>
          <ul className="space-y-4 text-2xl font-medium">
            {items.map((l)=>(
              <li key={l.to}>
                <Link to={l.to} onClick={()=>setOpen(false)} className="inline-block rounded px-3 py-1 hover:bg-white/5">{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </>
  );
}