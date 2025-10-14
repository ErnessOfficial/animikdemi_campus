import React from 'react';

interface VideoPlayerProps {
  src: string;
  onEnded?: () => void;
}

// Detecta si la URL es de Google Drive y devuelve una URL embebible (/preview)
function toEmbeddableDriveUrl(url: string): string | null {
  try {
    const isDrive = /https?:\/\/drive\.google\.com\/file\/d\//.test(url);
    if (!isDrive) return null;
    const match = url.match(/\/file\/d\/([^/]+)/);
    const id = match?.[1];
    if (!id) return null;
    return `https://drive.google.com/file/d/${id}/preview`;
  } catch {
    return null;
  }
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, onEnded }) => {
  const drivePreview = src ? toEmbeddableDriveUrl(src) : null;
  const isMp4 = src ? /\.mp4($|\?)/i.test(src) : false;

  return (
    <div className="w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-2xl bg-black">
      <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
        {src ? (
          drivePreview ? (
            <iframe
              src={drivePreview}
              title="Video embebido"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
              onLoad={() => onEnded?.()}
            />
          ) : isMp4 || src.startsWith('/') ? (
            <video
              controls
              className="absolute inset-0 w-full h-full object-contain bg-black"
              onEnded={onEnded}
            >
              <source src={src} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          ) : (
            <iframe
              src={src}
              title="Video embebido"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
              onLoad={() => onEnded?.()}
            />
          )
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
