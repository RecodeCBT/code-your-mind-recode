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
      style={{ 
        transform: `translateY(${offsetY}px)`,
        opacity: 0.35
      }}
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
        
        {/* Ultra dense circuit traces around title area */}
        <g stroke="url(#neuro-gradient)" strokeWidth="1.8" fill="none">
          {/* Top border traces - ultra dense */}
          <path d="M20 15 L120 15 L130 25 L250 25 L260 15 L380 15 L390 25 L520 25 L530 15 L650 15" />
          <path d="M680 15 L780 15 L790 25 L920 25 L930 15 L1050 15 L1060 25 L1180 25" />
          <path d="M40 35 L140 35 L150 45 L280 45 L290 35 L420 35 L430 45 L560 45 L570 35 L700 35" />
          <path d="M730 35 L830 35 L840 45 L970 45 L980 35 L1120 35 L1130 45 L1180 45" />
          <path d="M60 55 L160 55 L170 65 L300 65 L310 55 L450 55 L460 65 L590 65 L600 55 L740 55" />
          <path d="M770 55 L870 55 L880 65 L1010 65 L1020 55 L1150 55" />
          
          {/* Side traces - extremely complex */}
          <path d="M15 80 L15 140 L25 150 L85 150 L95 160 L135 160 L145 170 L185 170" />
          <path d="M1185 80 L1185 140 L1175 150 L1115 150 L1105 160 L1065 160 L1055 170 L1015 170" />
          <path d="M45 200 L45 260 L55 270 L115 270 L125 280 L165 280 L175 290 L215 290" />
          <path d="M1155 200 L1155 260 L1145 270 L1085 270 L1075 280 L1035 280 L1025 290 L985 290" />
          <path d="M25 320 L25 380 L35 390 L95 390 L105 400 L145 400" />
          <path d="M1175 320 L1175 380 L1165 390 L1105 390 L1095 400 L1055 400" />
          
          {/* Central network paths - much denser */}
          <path d="M180 340 L280 340 L290 330 L420 330 L430 320 L560 320 L570 310 L700 310" />
          <path d="M720 340 L820 340 L830 330 L960 330 L970 320 L1100 320" />
          <path d="M200 300 L300 300 L310 290 L440 290 L450 280 L580 280 L590 270 L720 270" />
          <path d="M740 300 L840 300 L850 290 L980 290 L990 280 L1120 280" />
          <path d="M220 260 L320 260 L330 250 L460 250 L470 240 L600 240 L610 230 L740 230" />
          <path d="M760 260 L860 260 L870 250 L1000 250 L1010 240 L1140 240" />
          
          {pathCount > 6 && (
            <>
              <path d="M120 380 L220 380 L230 370 L360 370 L370 360 L500 360" />
              <path d="M700 380 L800 380 L810 370 L940 370 L950 360 L1080 360" />
              <path d="M240 120 L340 120 L350 110 L480 110 L490 100 L620 100" />
              <path d="M580 120 L680 120 L690 110 L820 110 L830 100 L960 100" />
              <path d="M80 220 L180 220 L190 210 L320 210 L330 200 L460 200" />
              <path d="M740 220 L840 220 L850 210 L980 210 L990 200 L1120 200" />
              <path d="M100 180 L200 180 L210 170 L340 170 L350 160 L480 160" />
              <path d="M720 180 L820 180 L830 170 L960 170 L970 160 L1100 160" />
              <path d="M140 320 L240 320 L250 310 L380 310 L390 300 L520 300" />
              <path d="M680 320 L780 320 L790 310 L920 310 L930 300 L1060 300" />
            </>
          )}
        </g>
        
        
        {/* Ultra dense neuron nodes */}
        <g fill="url(#neuro-gradient)">
          <circle cx="130" cy="25" r="2.5" />
          <circle cx="260" cy="15" r="2" />
          <circle cx="390" cy="25" r="2.5" />
          <circle cx="530" cy="15" r="2" />
          <circle cx="790" cy="25" r="2.5" />
          <circle cx="930" cy="15" r="2" />
          <circle cx="1060" cy="25" r="2.5" />
          <circle cx="25" cy="150" r="2.5" />
          <circle cx="95" cy="160" r="2" />
          <circle cx="145" cy="170" r="2.5" />
          <circle cx="1175" cy="150" r="2.5" />
          <circle cx="1105" cy="160" r="2" />
          <circle cx="1055" cy="170" r="2.5" />
          <circle cx="290" cy="330" r="2.5" />
          <circle cx="430" cy="320" r="2" />
          <circle cx="570" cy="310" r="2.5" />
          <circle cx="830" cy="330" r="2.5" />
          <circle cx="970" cy="320" r="2" />
          
          {nodeCount > 8 && (
            <>
              <circle cx="310" cy="290" r="2" />
              <circle cx="450" cy="280" r="2.5" />
              <circle cx="590" cy="270" r="2" />
              <circle cx="850" cy="290" r="2" />
              <circle cx="990" cy="280" r="2.5" />
              <circle cx="230" cy="370" r="2.5" />
              <circle cx="810" cy="370" r="2.5" />
              <circle cx="350" cy="110" r="2" />
              <circle cx="490" cy="100" r="2.5" />
              <circle cx="690" cy="110" r="2" />
              <circle cx="830" cy="100" r="2.5" />
              <circle cx="190" cy="210" r="2.5" />
              <circle cx="330" cy="200" r="2" />
              <circle cx="850" cy="210" r="2.5" />
              <circle cx="990" cy="200" r="2" />
              <circle cx="170" cy="65" r="1.8" />
              <circle cx="310" cy="55" r="1.8" />
              <circle cx="460" cy="65" r="1.8" />
              <circle cx="600" cy="55" r="1.8" />
              <circle cx="880" cy="65" r="1.8" />
              <circle cx="1020" cy="55" r="1.8" />
            </>
          )}
        </g>
        
        
        {/* Ultra dense dendrite branches */}
        <g stroke="url(#neuro-gradient)" strokeWidth="1.2" fill="none">
          <path d="M130 25 L135 20 M130 25 L125 20 M130 25 L135 30 M130 25 L125 30 M130 25 L138 22 M130 25 L122 28" />
          <path d="M390 25 L395 20 M390 25 L385 20 M390 25 L395 30 M390 25 L385 30 M390 25 L398 22 M390 25 L382 28" />
          <path d="M790 25 L795 20 M790 25 L785 20 M790 25 L795 30 M790 25 L785 30 M790 25 L798 22 M790 25 L782 28" />
          <path d="M1060 25 L1065 20 M1060 25 L1055 20 M1060 25 L1065 30 M1060 25 L1055 30" />
          <path d="M290 330 L295 325 M290 330 L285 325 M290 330 L295 335 M290 330 L285 335 M290 330 L298 327 M290 330 L282 333" />
          <path d="M570 310 L575 305 M570 310 L565 305 M570 310 L575 315 M570 310 L565 315 M570 310 L578 307 M570 310 L562 313" />
          <path d="M830 330 L835 325 M830 330 L825 325 M830 330 L835 335 M830 330 L825 335 M830 330 L838 327 M830 330 L822 333" />
          
          {nodeCount > 8 && (
            <>
              <path d="M450 280 L455 275 M450 280 L445 275 M450 280 L455 285 M450 280 L445 285 M450 280 L458 277 M450 280 L442 283" />
              <path d="M990 280 L995 275 M990 280 L985 275 M990 280 L995 285 M990 280 L985 285 M990 280 L998 277 M990 280 L982 283" />
              <path d="M230 370 L235 365 M230 370 L225 365 M230 370 L235 375 M230 370 L225 375 M230 370 L238 367 M230 370 L222 373" />
              <path d="M810 370 L815 365 M810 370 L805 365 M810 370 L815 375 M810 370 L805 375 M810 370 L818 367 M810 370 L802 373" />
              <path d="M490 100 L495 95 M490 100 L485 95 M490 100 L495 105 M490 100 L485 105 M490 100 L498 97 M490 100 L482 103" />
              <path d="M830 100 L835 95 M830 100 L825 95 M830 100 L835 105 M830 100 L825 105 M830 100 L838 97 M830 100 L822 103" />
              <path d="M190 210 L195 205 M190 210 L185 205 M190 210 L195 215 M190 210 L185 215 M190 210 L198 207 M190 210 L182 213" />
              <path d="M850 210 L855 205 M850 210 L845 205 M850 210 L855 215 M850 210 L845 215 M850 210 L858 207 M850 210 L842 213" />
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
  const elementCount = isLight ? sections * 20 : sections * 35; // Ultra dense
  
  
  const decalElements = Array.from({ length: elementCount }, (_, i) => {
    const isLeft = i % 2 === 0;
    const sectionIndex = Math.floor(i / 20);
    // Ultra concentrated at the top (0-25% of screen) with some spread
    const topPosition = sectionIndex < 3 ? 
      2 + (sectionIndex * 6) + (Math.random() * 8) : 
      25 + ((sectionIndex - 3) * 15) + (Math.random() * 10);
    const sidePosition = isLeft ? 0.5 + Math.random() * 6 : 93.5 + Math.random() * 6;
    
    return (
      <g key={i} transform={`translate(${sidePosition}, ${topPosition})`}>
        {/* Much larger and more complex circuit elements */}
        <path
          d="M0 0 L18 0 L22 4 L35 4 L39 0 L50 0 M12 0 L12 -8 L18 -8 L18 -12 M25 4 L25 12 L31 12 L31 16 M40 0 L40 -6"
          stroke="url(#body-gradient)"
          strokeWidth="1.4"
          fill="none"
        />
        <circle cx="22" cy="4" r="2" fill="url(#body-gradient)" />
        <circle cx="12" cy="-8" r="1.5" fill="url(#body-gradient)" />
        <circle cx="25" cy="12" r="1.5" fill="url(#body-gradient)" />
        <circle cx="40" cy="-6" r="1.2" fill="url(#body-gradient)" />
        <circle cx="50" cy="0" r="1.8" fill="url(#body-gradient)" />
        
        {/* Much more frequent and complex dendrites */}
        <g stroke="url(#body-gradient)" strokeWidth="1.0" fill="none">
          <path d="M22 4 L26 0 M22 4 L18 0 M22 4 L26 8 M22 4 L18 8 M22 4 L28 2 M22 4 L16 6" />
          {i % 3 === 0 && (
            <path d="M12 -8 L16 -12 M12 -8 L8 -12 M12 -8 L15 -5 M12 -8 L9 -5" />
          )}
          {i % 4 === 0 && (
            <path d="M25 12 L29 16 M25 12 L21 16 M25 12 L28 8 M25 12 L22 8" />
          )}
        </g>
        
        {/* Additional connector paths for ultra density */}
        {i % 5 === 0 && (
          <path
            d="M50 0 L60 0 L64 -4 L74 -4 M55 0 L55 8 M64 -4 L64 -10"
            stroke="url(#body-gradient)"
            strokeWidth="1.2"
            fill="none"
          />
        )}
      </g>
    );
  });
  
  
  return (
    <div 
      className="rc-decal rc-decal-body hidden sm:block fixed inset-0 pointer-events-none" 
      aria-hidden="true" 
      style={{ 
        zIndex: -1,
        opacity: 0.4
      }}
    >
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