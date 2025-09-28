import React from 'react';

interface YouTubePlayerProps {
  url: string; // can be full youtu.be or youtube.com link
}

function extractYouTubeId(url: string): string | null {
  try {
    // Handle youtu.be/VIDEOID and youtube.com/watch?v=VIDEOID and shorts
    const u = new URL(url);
    if (u.hostname === 'youtu.be') {
      return u.pathname.slice(1) || null;
    }
    if (u.hostname.includes('youtube.com')) {
      const v = u.searchParams.get('v');
      if (v) return v;
      // shorts or embed pattern
      const parts = u.pathname.split('/').filter(Boolean);
      const idx = parts.findIndex(p => p === 'shorts' || p === 'embed');
      if (idx !== -1 && parts[idx + 1]) return parts[idx + 1];
    }
  } catch {}
  // If it's already an id-like string
  if (/^[a-zA-Z0-9_-]{6,}$/.test(url)) return url;
  return null;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ url }) => {
  const videoId = extractYouTubeId(url);
  if (!videoId) {
    return <div className="text-red-600">No se pudo cargar el video de YouTube.</div>;
  }
  const embed = `https://www.youtube.com/embed/${videoId}?rel=0`;
  return (
    <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
      <iframe
        className="absolute inset-0 w-full h-full rounded-lg shadow"
        src={embed}
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};

export default YouTubePlayer;

