import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HealingPulseButton({to,children}:{to:string;children:React.ReactNode}){
  const reduce = useReducedMotion();
  return (
    <div className="relative inline-block">
      {!reduce && (
        <motion.span
          aria-hidden
          className="absolute inset-0 rounded-2xl"
          style={{ filter:"blur(10px)" }}
          animate={{ opacity:[0.5,1,0.5] }}
          transition={{ duration:3, repeat:Infinity, ease:"easeInOut" }}
        >
          <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--rc-emerald)]/25 via-[var(--rc-cyan)]/20 to-[var(--rc-violet)]/25" />
        </motion.span>
      )}
      <Link
        to={to}
        className="relative z-10 rounded-2xl bg-gradient-to-r from-[var(--rc-cyan)] to-[var(--rc-violet)] px-6 py-3 font-semibold text-slate-900 shadow-lg"
        style={{ animation: "rc-glow 3.2s ease-in-out infinite" }}
      >
        {children}
      </Link>
      {!reduce && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 rounded-full border border-[var(--rc-emerald)]/20"
          initial={{ scale:1, opacity:0.35 }}
          animate={{ scale:1.25, opacity:0 }}
          transition={{ duration:2, repeat:Infinity, ease:"easeOut" }}
        />
      )}
    </div>
  );
}