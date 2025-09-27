import React from 'react';

interface TopTitleProps {
  density?: 'light' | 'medium';
  align?: 'center' | 'left';
  offsetY?: number;
}

interface BodyMarginsProps {
  density?: 'light' | 'medium';
  sections?: number;
}

const TopTitle: React.FC<TopTitleProps> = ({ 
  density = 'light', 
  align = 'center', 
  offsetY = -8 
}) => {
  const isLight = density === 'light';
  const nodeCount = isLight ? 8 : 15;
  const pathCount = isLight ? 6 : 12;
  
  return (
    <div 
      className="rc-decal rc-decal-top"
      style={{ transform: `translateY(${offsetY}px)` }}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="neuro-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--rc-cyan)" />
            <stop offset="100%" stopColor="var(--rc-violet)" />
          </linearGradient>
        </defs>
        
        {/* Dense circuit traces around title area */}
        <g stroke="url(#neuro-gradient)" strokeWidth="0.8" fill="none">
          {/* Top border traces - much more dense */}
          <path d="M50 20 L180 20 L190 30 L320 30 L330 20 L450 20" />
          <path d="M750 20 L850 20 L860 30 L980 30 L990 20 L1150 20" />
          <path d="M100 40 L200 40 L210 50 L340 50 L350 40 L500 40" />
          <path d="M700 40 L800 40 L810 50 L940 50 L950 40 L1100 40" />
          
          {/* Side traces - more complex */}
          <path d="M30 60 L30 120 L40 130 L100 130 L110 140 L150 140" />
          <path d="M1170 60 L1170 120 L1160 130 L1100 130 L1090 140 L1050 140" />
          <path d="M60 180 L60 240 L70 250 L130 250 L140 260 L180 260" />
          <path d="M1140 180 L1140 240 L1130 250 L1070 250 L1060 260 L1020 260" />
          
          {/* Central network paths */}
          <path d="M200 320 L300 320 L310 310 L450 310 L460 300 L600 300" />
          <path d="M600 320 L700 320 L710 310 L850 310 L860 300 L1000 300" />
          <path d="M250 280 L350 280 L360 270 L500 270 L510 260 L650 260" />
          <path d="M550 280 L650 280 L660 270 L800 270 L810 260 L950 260" />
          
          {pathCount > 6 && (
            <>
              <path d="M150 360 L250 360 L260 350 L400 350" />
              <path d="M800 360 L900 360 L910 350 L1050 350" />
              <path d="M300 100 L400 100 L410 90 L550 90" />
              <path d="M650 100 L750 100 L760 90 L900 90" />
              <path d="M100 200 L200 200 L210 190 L350 190" />
              <path d="M850 200 L950 200 L960 190 L1100 190" />
            </>
          )}
        </g>
        
        
        {/* Dense neuron nodes */}
        <g fill="url(#neuro-gradient)">
          <circle cx="190" cy="30" r="2" />
          <circle cx="330" cy="20" r="1.5" />
          <circle cx="860" cy="30" r="2" />
          <circle cx="990" cy="20" r="1.5" />
          <circle cx="40" cy="130" r="2" />
          <circle cx="110" cy="140" r="1.5" />
          <circle cx="1160" cy="130" r="2" />
          <circle cx="1090" cy="140" r="1.5" />
          <circle cx="310" cy="310" r="2" />
          <circle cx="460" cy="300" r="1.5" />
          <circle cx="710" cy="310" r="2" />
          <circle cx="860" cy="300" r="1.5" />
          
          {nodeCount > 8 && (
            <>
              <circle cx="360" cy="270" r="1.5" />
              <circle cx="510" cy="260" r="2" />
              <circle cx="660" cy="270" r="1.5" />
              <circle cx="810" cy="260" r="2" />
              <circle cx="260" cy="350" r="2" />
              <circle cx="910" cy="350" r="2" />
              <circle cx="410" cy="90" r="1.5" />
              <circle cx="760" cy="90" r="1.5" />
              <circle cx="210" cy="190" r="2" />
              <circle cx="960" cy="190" r="2" />
            </>
          )}
        </g>
        
        
        {/* Dense dendrite branches */}
        <g stroke="url(#neuro-gradient)" strokeWidth="0.4" fill="none">
          <path d="M190 30 L195 25 M190 30 L185 25 M190 30 L195 35 M190 30 L185 35" />
          <path d="M860 30 L865 25 M860 30 L855 25 M860 30 L865 35 M860 30 L855 35" />
          <path d="M310 310 L315 305 M310 310 L305 305 M310 310 L315 315 M310 310 L305 315" />
          <path d="M710 310 L715 305 M710 310 L705 305 M710 310 L715 315 M710 310 L705 315" />
          
          {nodeCount > 8 && (
            <>
              <path d="M260 350 L265 345 M260 350 L255 345 M260 350 L265 355" />
              <path d="M910 350 L915 345 M910 350 L905 345 M910 350 L915 355" />
              <path d="M210 190 L215 185 M210 190 L205 185 M210 190 L215 195" />
              <path d="M960 190 L965 185 M960 190 L955 185 M960 190 L965 195" />
            </>
          )}
        </g>
      </svg>
    </div>
  );
};

const BodyMargins: React.FC<BodyMarginsProps> = ({ 
  density = 'light', 
  sections = 3 
}) => {
  const isLight = density === 'light';
  const elementCount = isLight ? sections * 6 : sections * 10; // Much more dense
  
  
  const decalElements = Array.from({ length: elementCount }, (_, i) => {
    const isLeft = i % 2 === 0;
    const sectionIndex = Math.floor(i / 6);
    // Concentrate more elements at the top (0-30% of screen)
    const topPosition = sectionIndex < 2 ? 
      5 + (sectionIndex * 8) + (Math.random() * 15) : 
      30 + ((sectionIndex - 2) * 20) + (Math.random() * 15);
    const sidePosition = isLeft ? 1 + Math.random() * 4 : 95 + Math.random() * 4;
    
    return (
      <g key={i} transform={`translate(${sidePosition}, ${topPosition})`}>
        {/* Larger circuit elements */}
        <path
          d="M0 0 L12 0 L15 3 L25 3 M8 0 L8 -5 M17 3 L17 8"
          stroke="url(#body-gradient)"
          strokeWidth="0.4"
          fill="none"
        />
        <circle cx="15" cy="3" r="1.2" fill="url(#body-gradient)" />
        <circle cx="8" cy="-5" r="0.8" fill="url(#body-gradient)" />
        <circle cx="17" cy="8" r="0.8" fill="url(#body-gradient)" />
        
        {/* More frequent dendrites and connections */}
        {i % 2 === 0 && (
          <g stroke="url(#body-gradient)" strokeWidth="0.3" fill="none">
            <path d="M15 3 L18 0 M15 3 L12 0 M15 3 L18 6 M15 3 L12 6" />
          </g>
        )}
      </g>
    );
  });
  
  return (
    <div className="rc-decal rc-decal-body hidden sm:block fixed inset-0 pointer-events-none" aria-hidden="true" style={{ zIndex: -1 }}>
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="body-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--rc-cyan)" />
            <stop offset="100%" stopColor="var(--rc-violet)" />
          </linearGradient>
        </defs>
        
        {decalElements}
      </svg>
    </div>
  );
};

const NeuroDecal = {
  TopTitle,
  BodyMargins,
};

export default NeuroDecal;