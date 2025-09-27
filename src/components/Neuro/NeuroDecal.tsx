import React from "react";

interface TopTitleProps {
  density?: "light" | "medium";
  align?: "center" | "left";
  offsetY?: number;
}

interface BodyMarginsProps {
  density?: "light" | "medium";
  sections?: number;
}

const TopTitle: React.FC<TopTitleProps> = ({ 
  density = "light", 
  align = "center", 
  offsetY = 0 
}) => {
  const nodeCount = density === "light" ? 4 : 8;
  const pathCount = density === "light" ? 3 : 6;
  
  return (
    <div 
      className="rc-decal rc-decal-top" 
      style={{ top: offsetY }}
      aria-hidden="true"
    >
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 800 200"
        className="absolute inset-0"
      >
        <defs>
          <linearGradient id="rc-gradient-top" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(0, 186, 248)" />
            <stop offset="100%" stopColor="hsl(167, 139, 250)" />
          </linearGradient>
        </defs>
        
        {/* Circuit traces around title area */}
        {Array.from({ length: pathCount }, (_, i) => {
          const y = 40 + (i * 30);
          const x1 = align === "center" ? 50 + (i * 100) : 20 + (i * 120);
          const x2 = x1 + 100 + Math.random() * 80;
          
          return (
            <g key={`trace-${i}`}>
              <path
                d={`M ${x1} ${y} L ${x2} ${y} L ${x2 + 20} ${y + 15}`}
                stroke="url(#rc-gradient-top)"
                strokeWidth="0.5"
                fill="none"
              />
              {/* Via node */}
              <circle
                cx={x2}
                cy={y}
                r="1.5"
                fill="url(#rc-gradient-top)"
              />
            </g>
          );
        })}
        
        {/* Neurone nodes */}
        {Array.from({ length: nodeCount }, (_, i) => {
          const x = 100 + (i * 150) + Math.random() * 50;
          const y = 60 + Math.random() * 80;
          
          return (
            <g key={`node-${i}`}>
              {/* Central soma */}
              <circle
                cx={x}
                cy={y}
                r="2"
                fill="url(#rc-gradient-top)"
              />
              {/* Dendrites */}
              <path
                d={`M ${x} ${y} L ${x - 15} ${y - 10} M ${x} ${y} L ${x + 15} ${y - 8} M ${x} ${y} L ${x - 8} ${y + 12}`}
                stroke="url(#rc-gradient-top)"
                strokeWidth="0.3"
                fill="none"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

const BodyMargins: React.FC<BodyMarginsProps> = ({ 
  density = "light", 
  sections = 3 
}) => {
  const decalsPerSection = density === "light" ? 2 : 4;
  
  return (
    <div className="rc-decal rc-decal-margins" aria-hidden="true">
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 1200 800"
        className="absolute inset-0"
      >
        <defs>
          <linearGradient id="rc-gradient-body" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(0, 186, 248)" />
            <stop offset="100%" stopColor="hsl(167, 139, 250)" />
          </linearGradient>
        </defs>
        
        {/* Left margin decals */}
        {Array.from({ length: sections }, (_, sectionIndex) => {
          const sectionY = (sectionIndex + 1) * (800 / (sections + 1));
          
          return Array.from({ length: decalsPerSection }, (_, decalIndex) => {
            const y = sectionY + (decalIndex * 40) - 60;
            const x = 20 + Math.random() * 30;
            
            return (
              <g key={`left-${sectionIndex}-${decalIndex}`}>
                {/* Small circuit trace */}
                <path
                  d={`M ${x} ${y} L ${x + 25} ${y} L ${x + 30} ${y + 8}`}
                  stroke="url(#rc-gradient-body)"
                  strokeWidth="0.4"
                  fill="none"
                />
                {/* Node */}
                <circle
                  cx={x + 25}
                  cy={y}
                  r="1"
                  fill="url(#rc-gradient-body)"
                />
              </g>
            );
          });
        })}
        
        {/* Right margin decals */}
        {Array.from({ length: sections }, (_, sectionIndex) => {
          const sectionY = (sectionIndex + 1) * (800 / (sections + 1));
          
          return Array.from({ length: decalsPerSection }, (_, decalIndex) => {
            const y = sectionY + (decalIndex * 45) - 70;
            const x = 1150 - Math.random() * 30;
            
            return (
              <g key={`right-${sectionIndex}-${decalIndex}`}>
                {/* Small neural branch */}
                <path
                  d={`M ${x} ${y} L ${x - 20} ${y - 5} M ${x} ${y} L ${x - 15} ${y + 8}`}
                  stroke="url(#rc-gradient-body)"
                  strokeWidth="0.3"
                  fill="none"
                />
                {/* Synapse */}
                <circle
                  cx={x}
                  cy={y}
                  r="0.8"
                  fill="url(#rc-gradient-body)"
                />
              </g>
            );
          });
        })}
      </svg>
    </div>
  );
};

const NeuroDecal = {
  TopTitle,
  BodyMargins
};

export default NeuroDecal;