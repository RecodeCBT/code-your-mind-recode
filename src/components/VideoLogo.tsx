interface VideoLogoProps {
  className?: string;
  style?: React.CSSProperties;
}
const VideoLogo = ({
  className = "",
  style
}: VideoLogoProps) => {
  return <div className={`relative ${className}`} style={style}>
      {/* Placeholder for video logo - replace src with actual video URL */}
      
    </div>;
};
export default VideoLogo;