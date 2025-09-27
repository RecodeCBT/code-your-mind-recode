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
  const nodeCount = isLight ? 3 : 5;
  const pathCount = isLight ? 2 : 4;
  
  console.log('NeuroDecal TopTitle rendering:', { density, align, offsetY });
  
  return (
    <div 
      className="rc-decal rc-decal-top"
      style={{ 
        transform: `translateY(${offsetY}px)`,
        border: '1px solid red' // Temporary debug border
      }}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 800 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="neuro-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--rc-cyan)" />
            <stop offset="100%" stopColor="var(--rc-violet)" />
          </linearGradient>
        </defs>
        
        {/* Circuit traces around title area */}
        <g stroke="url(#neuro-gradient)" strokeWidth="0.5" fill="none">
          {/* Top border traces */}
          <path d="M50 20 L200 20 L210 30 L250 30" />
          <path d="M550 20 L600 20 L610 30 L750 30" />
          
          {/* Side traces */}
          <path d="M30 40 L30 80 L40 90 L80 90" />
          <path d="M770 40 L770 80 L760 90 L720 90" />
          
          {pathCount > 2 && (
            <>
              <path d="M150 160 L200 160 L210 150 L300 150" />
              <path d="M500 160 L550 160 L560 150 L650 150" />
            </>
          )}
        </g>
        
        {/* Neuron nodes */}
        <g fill="url(#neuro-gradient)">
          <circle cx="210" cy="30" r="1.5" />
          <circle cx="610" cy="30" r="1.5" />
          <circle cx="40" cy="90" r="1.5" />
          
          {nodeCount > 3 && (
            <>
              <circle cx="760" cy="90" r="1.5" />
              <circle cx="210" cy="150" r="1.5" />
            </>
          )}
        </g>
        
        {/* Dendrite branches */}
        <g stroke="url(#neuro-gradient)" strokeWidth="0.3" fill="none">
          <path d="M210 30 L215 25 M210 30 L205 25 M210 30 L215 35" />
          <path d="M610 30 L615 25 M610 30 L605 25 M610 30 L615 35" />
          
          {nodeCount > 3 && (
            <path d="M760 90 L765 85 M760 90 L755 85 M760 90 L765 95" />
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
  const elementCount = isLight ? sections * 2 : sections * 3;
  
  console.log('NeuroDecal BodyMargins rendering:', { density, sections, elementCount });
  
  const decalElements = Array.from({ length: elementCount }, (_, i) => {
    const isLeft = i % 2 === 0;
    const sectionIndex = Math.floor(i / 2);
    const topPosition = 20 + (sectionIndex * 25) + (Math.random() * 10 - 5);
    const sidePosition = isLeft ? 2 + Math.random() * 3 : 95 + Math.random() * 3;
    
    return (
      <g key={i} transform={`translate(${sidePosition}, ${topPosition})`}>
        {/* Small circuit element */}
        <path
          d="M0 0 L8 0 L10 2 L15 2"
          stroke="url(#body-gradient)"
          strokeWidth="0.3"
          fill="none"
        />
        <circle cx="10" cy="2" r="0.8" fill="url(#body-gradient)" />
        
        {/* Occasional dendrite */}
        {i % 3 === 0 && (
          <g stroke="url(#body-gradient)" strokeWidth="0.2" fill="none">
            <path d="M10 2 L12 0 M10 2 L8 0 M10 2 L12 4" />
          </g>
        )}
      </g>
    );
  });
  
  return (
    <div className="rc-decal rc-decal-body hidden sm:block" aria-hidden="true">
      <svg
        className="fixed inset-0 w-full h-full"
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