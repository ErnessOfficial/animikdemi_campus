import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

export interface CelebrationItem {
  type: 'badge' | 'achievement' | 'level' | 'streak' | 'course';
  id: string;
  title: string;
  description: string;
  icon: string;
  xpReward?: number;
  rarity?: 'Común' | 'Poco común' | 'Épico' | 'Legendario' | 'Mítico';
}

interface CelebrationOverlayProps {
  item: CelebrationItem;
  onClose: () => void;
}

export const playChimeSound = () => {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    
    const playNote = (freq: number, startDelay: number, duration: number) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + startDelay);
      
      gain.gain.setValueAtTime(0, ctx.currentTime + startDelay);
      gain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + startDelay + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + startDelay + duration);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(ctx.currentTime + startDelay);
      osc.stop(ctx.currentTime + startDelay + duration);
    };
    
    // Play a sweet ascending chime arpeggio: C5 -> E5 -> G5 -> C6
    playNote(523.25, 0, 1.0);
    playNote(659.25, 0.08, 1.0);
    playNote(783.99, 0.16, 1.0);
    playNote(1046.50, 0.24, 1.3);
  } catch (e) {
    console.warn('AudioContext not allowed or not supported:', e);
  }
};

const CelebrationOverlay: React.FC<CelebrationOverlayProps> = ({ item, onClose }) => {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setVisible(true);
    playChimeSound();
    triggerConfetti();
  }, [item.id]);

  const triggerConfetti = () => {
    const duration = 2500;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10000 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
      const particleCount = 45 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 200);

    return () => clearInterval(interval);
  };

  const handleShare = () => {
    const shareText = `¡He conseguido el logro "${item.title}" en AnImiKdemi! 🌟 ${item.description}`;
    if (navigator.share) {
      navigator.share({
        title: 'Logro en AnImiKdemi',
        text: shareText,
        url: window.location.origin
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(shareText).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  const getRarityBadgeStyle = (rarity?: string) => {
    switch (rarity) {
      case 'Mítico':
        return 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border-purple-500 shadow-purple-500/30';
      case 'Legendario':
        return 'bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 text-white border-amber-400 shadow-amber-500/30';
      case 'Épico':
        return 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-indigo-400 shadow-indigo-500/30';
      case 'Poco común':
        return 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-blue-400 shadow-blue-500/20';
      default:
        return 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white border-teal-400 shadow-teal-500/20';
    }
  };

  const getIconWrapperColor = () => {
    switch (item.type) {
      case 'course':
        return 'bg-amber-100 text-amber-600 border-amber-200';
      case 'badge':
        return 'bg-purple-100 text-purple-600 border-purple-200';
      case 'achievement':
        return 'bg-blue-100 text-blue-600 border-blue-200';
      case 'level':
        return 'bg-rose-100 text-rose-600 border-rose-200';
      case 'streak':
        return 'bg-orange-100 text-orange-600 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ${visible ? 'opacity-100 bg-[#101021]/80 backdrop-blur-md' : 'opacity-0 bg-transparent pointer-events-none'}`}>
      <div className={`bg-white rounded-2xl border border-slate-100 shadow-2xl p-8 max-w-md w-full text-center transform transition-all duration-700 delay-100 ${visible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-10'}`}>
        
        {/* Celebration Header Type */}
        <span className="text-[10px] font-bold tracking-widest uppercase bg-slate-100 text-slate-600 px-3 py-1 rounded-full mb-4 inline-block">
          {item.type === 'course' && 'Curso Completado'}
          {item.type === 'badge' && 'Nueva Insignia Obtenida'}
          {item.type === 'achievement' && '¡Logro Desbloqueado!'}
          {item.type === 'level' && '¡Subida de Nivel!'}
          {item.type === 'streak' && '¡Racha Imparable!'}
        </span>

        {/* Large Floating Icon */}
        <div className={`w-24 h-24 rounded-full border-4 flex items-center justify-center mx-auto my-4 shadow-inner ${getIconWrapperColor()}`}>
          <i className={`fas ${item.icon} text-4xl animate-bounce`}></i>
        </div>

        {/* Level Up Special Indicator */}
        {item.type === 'level' && (
          <div className="text-sm font-semibold text-rose-500 mb-2">
            Nivel {item.id} alcanzado
          </div>
        )}

        {/* Title & Description */}
        <h2 className="text-2xl font-extrabold text-[#101021] mb-2">{item.title}</h2>
        <p className="text-[#101021]/70 mb-4 text-sm leading-relaxed">{item.description}</p>

        {/* Rarity & XP Rewards display */}
        <div className="flex justify-center items-center gap-3 mb-6">
          {item.rarity && (
            <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border shadow-sm ${getRarityBadgeStyle(item.rarity)}`}>
              {item.rarity}
            </span>
          )}
          {item.xpReward && (
            <span className="bg-[#6e4380]/10 text-[#6e4380] text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-[#6e4380]/20">
              <i className="fas fa-star text-yellow-500"></i> +{item.xpReward} XP
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-[#6e4380] to-[#24668e] text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
          >
            Continuar aprendiendo
          </button>
          
          <button
            onClick={handleShare}
            className="w-full bg-slate-50 border border-slate-200 text-slate-700 font-bold py-2.5 px-6 rounded-xl hover:bg-slate-100 hover:text-[#101021] transition-all flex items-center justify-center gap-2 text-sm"
          >
            <i className="fas fa-share-nodes"></i>
            {copied ? '¡Copiado!' : 'Compartir logro'}
          </button>
        </div>

      </div>
    </div>
  );
};

export default CelebrationOverlay;
