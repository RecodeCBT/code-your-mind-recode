interface VideoLogoProps {
  className?: string;
  style?: React.CSSProperties;
}

const VideoLogo = ({ className = "", style }: VideoLogoProps) => {
  return (
    <div className={`relative ${className}`} style={style}>
      {/* Placeholder for video logo - replace src with actual video URL */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="w-full h-auto"
        poster="/lovable-uploads/0ae4333b-2ae9-4aa3-803f-ed93b3dc6e41.png"
      >
        {/* Add your video source here */}
        <source src="/path-to-your-logo-video.mp4" type="video/mp4" />
        {/* Fallback image if video doesn't load */}
        <img 
          src="/lovable-uploads/0ae4333b-2ae9-4aa3-803f-ed93b3dc6e41.png" 
          alt="RECODE CBT Logo" 
          className="w-full h-auto"
        />
      </video>
    </div>
  );
};

export default VideoLogo;