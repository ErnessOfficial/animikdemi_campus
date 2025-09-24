import React from 'react';

interface AudioPlayerProps {
  src: string;
  transcript?: string[];
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, transcript }) => {
  return (
    <div>
      <div className="w-full max-w-3xl mx-auto bg-white p-4 rounded-lg shadow-lg border border-[#101021]/10">
        {src ? (
          <audio controls className="w-full">
            <source src={src} type="audio/mpeg" />
            Tu navegador no soporta el elemento de audio.
          </audio>
        ) : (
          <div className="flex items-center justify-center p-4 bg-[#101021]/10 text-[#101021]/70 rounded-md">
            <i className="fas fa-volume-mute fa-2x"></i>
            <p className="ml-4 font-semibold">Audio no disponible.</p>
          </div>
        )}
      </div>
      {transcript && (
        <div className="mt-6 p-6 bg-[#101021]/5 rounded-lg">
          <h4 className="font-bold text-lg mb-4 text-[#101021]">Transcripción del Audio</h4>
          <div className="space-y-2 text-sm text-[#101021]/80 italic">
            {transcript.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;