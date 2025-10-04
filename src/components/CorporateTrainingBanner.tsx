import corporateTrainingImage from "@/assets/corporate-training-banner.png";

const CorporateTrainingBanner = () => {
  return (
    <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto mb-6">
      {/* Banner Image */}
      <img 
        src={corporateTrainingImage} 
        alt="Corporate Training & Staff Wellness Packages"
        className="w-full h-auto rounded-xl relative z-10"
      />
      
      {/* Animated electrical pulses overlay */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none z-20" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient definitions for pulses */}
          <radialGradient id="pulse-orange" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(25, 85%, 60%)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="hsl(25, 85%, 60%)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="pulse-pink" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(330, 80%, 65%)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="hsl(330, 80%, 65%)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="pulse-purple" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(280, 75%, 65%)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="hsl(280, 75%, 65%)" stopOpacity="0" />
          </radialGradient>
          
          {/* Circuit path animations - horizontal traces */}
          <path id="circuit-path-1" d="M 10 30 L 90 30" fill="none" />
          <path id="circuit-path-2" d="M 10 50 L 90 50" fill="none" />
          <path id="circuit-path-3" d="M 10 70 L 90 70" fill="none" />
          
          {/* Vertical circuit paths */}
          <path id="circuit-path-4" d="M 30 10 L 30 90" fill="none" />
          <path id="circuit-path-5" d="M 50 10 L 50 90" fill="none" />
          <path id="circuit-path-6" d="M 70 10 L 70 90" fill="none" />
        </defs>
        
        {/* Animated pulse circles - horizontal paths */}
        <circle r="2" fill="url(#pulse-orange)">
          <animateMotion dur="4s" repeatCount="indefinite">
            <mpath href="#circuit-path-1" />
          </animateMotion>
          <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" repeatCount="indefinite" />
        </circle>
        
        <circle r="2.5" fill="url(#pulse-pink)">
          <animateMotion dur="5s" repeatCount="indefinite" begin="0.5s">
            <mpath href="#circuit-path-2" />
          </animateMotion>
          <animate attributeName="opacity" values="0.4;1;0.4" dur="5s" repeatCount="indefinite" begin="0.5s" />
        </circle>
        
        <circle r="2" fill="url(#pulse-purple)">
          <animateMotion dur="4.5s" repeatCount="indefinite" begin="1s">
            <mpath href="#circuit-path-3" />
          </animateMotion>
          <animate attributeName="opacity" values="0.3;1;0.3" dur="4.5s" repeatCount="indefinite" begin="1s" />
        </circle>
        
        {/* Vertical path pulses */}
        <circle r="2" fill="url(#pulse-orange)">
          <animateMotion dur="5.5s" repeatCount="indefinite" begin="0.3s">
            <mpath href="#circuit-path-4" />
          </animateMotion>
          <animate attributeName="opacity" values="0.3;1;0.3" dur="5.5s" repeatCount="indefinite" begin="0.3s" />
        </circle>
        
        <circle r="2.5" fill="url(#pulse-pink)">
          <animateMotion dur="4.2s" repeatCount="indefinite" begin="0.8s">
            <mpath href="#circuit-path-5" />
          </animateMotion>
          <animate attributeName="opacity" values="0.4;1;0.4" dur="4.2s" repeatCount="indefinite" begin="0.8s" />
        </circle>
        
        <circle r="2" fill="url(#pulse-purple)">
          <animateMotion dur="4.8s" repeatCount="indefinite" begin="1.2s">
            <mpath href="#circuit-path-6" />
          </animateMotion>
          <animate attributeName="opacity" values="0.3;1;0.3" dur="4.8s" repeatCount="indefinite" begin="1.2s" />
        </circle>
        
        {/* Additional diagonal pulses for more dynamic effect */}
        <circle r="2" fill="url(#pulse-orange)">
          <animateMotion dur="3.8s" repeatCount="indefinite" begin="0.2s">
            <mpath href="#circuit-path-1" />
          </animateMotion>
          <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3.8s" repeatCount="indefinite" begin="0.2s" />
        </circle>
        
        <circle r="2" fill="url(#pulse-purple)">
          <animateMotion dur="5.2s" repeatCount="indefinite" begin="1.5s">
            <mpath href="#circuit-path-4" />
          </animateMotion>
          <animate attributeName="opacity" values="0.3;0.9;0.3" dur="5.2s" repeatCount="indefinite" begin="1.5s" />
        </circle>
      </svg>
    </div>
  );
};

export default CorporateTrainingBanner;
