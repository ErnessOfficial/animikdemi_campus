import React from 'react';

interface VideoPlayerProps {
  src: string;
  onEnded?: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, onEnded }) => {
  return (
    <div className="w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-2xl bg-black">
      <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
        {src ? (
          <video
            controls
            className="absolute inset-0 w-full h-full object-contain bg-black"
            onEnded={onEnded}
          >
            <source src={src} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-[#101021] text-[#fffafa]">
            <i className="fas fa-video-slash fa-4x text-[#fffafa]/60"></i>
            <p className="ml-4">Video no disponible.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
