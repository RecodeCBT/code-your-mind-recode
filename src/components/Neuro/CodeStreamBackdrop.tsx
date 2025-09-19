'use client';
import { useMemo } from "react";

export default function CodeStreamBackdrop(){
  const columns = 24;
  const rows = 14;
  const chars = useMemo(()=>'01<>[]{}/=+*#'.split(''),[]);
  const grid = useMemo(()=>{
    return Array.from({length: columns}, (_,c)=>(
      Array.from({length: rows}, (_,r)=> chars[(c*r + r*3 + c*7) % chars.length]).join(' ')
    ));
  },[chars,columns,rows]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="mx-auto h-full max-w-6xl px-6">
        <div className="relative h-full">
          {grid.map((col, i)=>(
            <div
              key={i}
              className="absolute top-[-120%] whitespace-pre text-sm font-mono text-white/10"
              style={{
                left: `${(i/(columns-1))*100}%`,
                animation: `rc-rain ${8 + (i%5)}s linear ${i*0.3}s infinite`,
                background: "linear-gradient(to bottom, rgba(56,189,248,0.0), rgba(56,189,248,0.12), rgba(167,139,250,0.18), rgba(56,189,248,0.0))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent"
              }}
            >
              {Array(16).fill(col).join('\\n')}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}