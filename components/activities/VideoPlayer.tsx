import React from 'react';

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  return (
    <div className="w-full max-w-3xl mx-auto bg-black rounded-lg overflow-hidden shadow-2xl">
      <div className="aspect-w-16 aspect-h-9">
        {src ? (
          <video controls className="w-full h-full object-contain bg-black">
            <source src={src} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        ) : (
          <div className="flex items-center justify-center h-full bg-[#101021] text-[#fffafa]">
              <i className="fas fa-video-slash fa-4x text-[#fffafa]/60"></i>
              <p className="ml-4">Video no disponible.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;