import React from 'react';
import circuitBg from '@/assets/circuit-background.png';
import brainBg from '@/assets/brain-background.png';
import codeBg from '@/assets/code-background.png';

interface BodyMarginsProps {
  pattern?: 'circuit' | 'brain' | 'code';
  intensity?: 'subtle' | 'medium';
}

const BodyMargins: React.FC<BodyMarginsProps> = ({ 
  pattern = 'circuit', 
  intensity = 'subtle' 
}) => {
  const backgroundImages = {
    circuit: circuitBg,
    brain: brainBg,
    code: codeBg
  };

  const backgroundImage = backgroundImages[pattern];
  const opacity = intensity === 'subtle' ? 0.15 : 0.25;

  return (
    <div 
      className="rc-decal rc-decal-body hidden sm:block fixed inset-0 pointer-events-none" 
      aria-hidden="true" 
      style={{ 
        zIndex: -1,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        opacity: opacity,
        backgroundAttachment: 'fixed'
      }}
    />
  );
};

const NeuroDecal = {
  BodyMargins,
};

export default NeuroDecal;