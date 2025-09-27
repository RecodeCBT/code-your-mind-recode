import React from 'react';

const CircuitPattern = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
      {/* Circuit SVG Pattern */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Circuit paths radiating from center */}
        {/* Horizontal paths */}
        <path
          d="M400 300 L200 300 L180 280 L160 300 L120 300 L100 280 L80 300 L40 300"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          fill="none"
          className="opacity-60"
        />
        <path
          d="M400 300 L600 300 L620 280 L640 300 L680 300 L700 280 L720 300 L760 300"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          fill="none"
          className="opacity-60"
        />
        
        {/* Vertical paths */}
        <path
          d="M400 300 L400 150 L380 130 L400 110 L400 70 L380 50 L400 30"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          fill="none"
          className="opacity-60"
        />
        <path
          d="M400 300 L400 450 L380 470 L400 490 L400 530 L380 550 L400 570"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          fill="none"
          className="opacity-60"
        />
        
        {/* Diagonal paths */}
        <path
          d="M400 300 L280 180 L260 160 L240 180 L200 140 L180 120 L160 140 L120 100"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          fill="none"
          className="opacity-50"
        />
        <path
          d="M400 300 L520 180 L540 160 L560 180 L600 140 L620 120 L640 140 L680 100"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          fill="none"
          className="opacity-50"
        />
        <path
          d="M400 300 L280 420 L260 440 L240 420 L200 460 L180 480 L160 460 L120 500"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          fill="none"
          className="opacity-50"
        />
        <path
          d="M400 300 L520 420 L540 440 L560 420 L600 460 L620 480 L640 460 L680 500"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          fill="none"
          className="opacity-50"
        />
        
        {/* Circuit nodes */}
        <circle cx="400" cy="300" r="4" fill="hsl(var(--primary))" className="opacity-80" />
        <circle cx="200" cy="300" r="3" fill="hsl(var(--primary))" className="opacity-70" />
        <circle cx="600" cy="300" r="3" fill="hsl(var(--primary))" className="opacity-70" />
        <circle cx="400" cy="150" r="3" fill="hsl(var(--primary))" className="opacity-70" />
        <circle cx="400" cy="450" r="3" fill="hsl(var(--primary))" className="opacity-70" />
        <circle cx="280" cy="180" r="2" fill="hsl(var(--primary))" className="opacity-60" />
        <circle cx="520" cy="180" r="2" fill="hsl(var(--primary))" className="opacity-60" />
        <circle cx="280" cy="420" r="2" fill="hsl(var(--primary))" className="opacity-60" />
        <circle cx="520" cy="420" r="2" fill="hsl(var(--primary))" className="opacity-60" />
        
        {/* Additional circuit nodes */}
        <circle cx="160" cy="300" r="2" fill="hsl(var(--accent))" className="opacity-50" />
        <circle cx="640" cy="300" r="2" fill="hsl(var(--accent))" className="opacity-50" />
        <circle cx="400" cy="110" r="2" fill="hsl(var(--accent))" className="opacity-50" />
        <circle cx="400" cy="490" r="2" fill="hsl(var(--accent))" className="opacity-50" />
        
        {/* Animated electrical impulses */}
        <circle r="3" fill="hsl(var(--primary))" className="opacity-90">
          <animateMotion
            dur="4s"
            repeatCount="indefinite"
            path="M400,300 L200,300 L180,280 L160,300 L120,300 L100,280 L80,300 L40,300"
          />
        </circle>
        
        <circle r="3" fill="hsl(var(--accent))" className="opacity-90">
          <animateMotion
            dur="5s"
            repeatCount="indefinite"
            path="M400,300 L600,300 L620,280 L640,300 L680,300 L700,280 L720,300 L760,300"
          />
        </circle>
        
        <circle r="2" fill="hsl(var(--primary))" className="opacity-80">
          <animateMotion
            dur="6s"
            repeatCount="indefinite"
            path="M400,300 L400,150 L380,130 L400,110 L400,70 L380,50 L400,30"
          />
        </circle>
        
        <circle r="2" fill="hsl(var(--accent))" className="opacity-80">
          <animateMotion
            dur="7s"
            repeatCount="indefinite"
            path="M400,300 L400,450 L380,470 L400,490 L400,530 L380,550 L400,570"
          />
        </circle>
        
        <circle r="2" fill="hsl(var(--secondary))" className="opacity-70">
          <animateMotion
            dur="8s"
            repeatCount="indefinite"
            path="M400,300 L280,180 L260,160 L240,180 L200,140 L180,120 L160,140 L120,100"
          />
        </circle>
        
        <circle r="2" fill="hsl(var(--secondary))" className="opacity-70">
          <animateMotion
            dur="9s"
            repeatCount="indefinite"
            path="M400,300 L520,180 L540,160 L560,180 L600,140 L620,120 L640,140 L680,100"
          />
        </circle>
      </svg>
    </div>
  );
};

export default CircuitPattern;