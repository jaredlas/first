
// components/VideoBackground.tsx
import React from "react";

const VideoBackground: React.FC = () => {
  return (
    <div className="bg-cover h-screen w-full">
      <video autoPlay loop muted className="video">
        <source src="/23.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
