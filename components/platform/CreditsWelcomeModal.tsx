import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { playChimeSound } from './CelebrationOverlay';

interface CreditsWelcomeModalProps {
  onClose: () => void;
  onViewCredits: () => void;
  creditsAmount?: number;
}

const CreditsWelcomeModal: React.FC<CreditsWelcomeModalProps> = ({ onClose, onViewCredits, creditsAmount = 3 }) => {
  const [visible, setVisible] = useState(false);
  const [coinAnimDone, setCoinAnimDone] = useState(false);

  useEffect(() => {
    // Small delay so animation feels intentional
    const t = setTimeout(() => {
      setVisible(true);
      playChimeSound();
      triggerCoinConfetti();
    }, 150);

    const t2 = setTimeout(() => setCoinAnimDone(true), 1200);

    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, []);

  const triggerCoinConfetti = () => {
    const duration = 2000;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);

      const particleCount = 30 * (timeLeft / duration);
      // Gold-tinted confetti
      confetti({
        particleCount,
        startVelocity: 25,
        spread: 270,
        ticks: 60,
        zIndex: 10010,
        colors: ['#f59e0b', '#fbbf24', '#fde68a', '#6e4380', '#24668e', '#ffffff'],
        origin: { x: 0.5, y: 0.3 },
      });
    }, 200);
  };

  const handleViewCredits = () => {
    onViewCredits();
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-500 ${
        visible ? 'opacity-100 bg-[#101021]/85 backdrop-blur-md' : 'opacity-0 bg-transparent pointer-events-none'
      }`}
    >
      <div
        className={`relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden transform transition-all duration-700 delay-100 ${
          visible ? 'scale-100 translate-y-0' : 'scale-90 translate-y-12'
        }`}
      >
        {/* Gradient top bar */}
        <div className="h-2 w-full bg-gradient-to-r from-[#fbbf24] via-[#6e4380] to-[#24668e]" />

        {/* Decorative background blobs */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-400/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#6e4380]/10 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="relative p-8 flex flex-col items-center text-center">

          {/* Animated coin icon */}
          <div
            className={`w-24 h-24 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center shadow-xl shadow-amber-400/40 mb-5 border-4 border-amber-300 transition-all duration-700 ${
              coinAnimDone ? 'scale-100 rotate-0' : 'scale-125 -rotate-12'
            }`}
          >
            <i className="fas fa-coins text-white text-4xl drop-shadow" />
          </div>

          {/* Tag */}
          <span className="text-[10px] font-bold tracking-widest uppercase bg-amber-100 text-amber-700 px-3 py-1 rounded-full mb-4">
            {creditsAmount >= 50 ? '¡Bienvenido/a de nuevo!' : '¡Bienvenido/a a AnImiKdemi!'}
          </span>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101021] mb-2 leading-tight">
            🎁 Tienes{' '}
            <span className="bg-gradient-to-r from-[#6e4380] to-[#24668e] bg-clip-text text-transparent">
              {creditsAmount} Kréditos
            </span>{' '}
            {creditsAmount >= 50 ? 'disponibles' : 'gratis'}
          </h2>
          <p className="text-sm text-[#101021]/65 leading-relaxed mb-6 max-w-sm">
            {creditsAmount >= 50 ? (
              <>Hemos añadido <strong>{creditsAmount} Kréditos</strong> a tu cuenta como usuario registrado. Úsalos para comenzar cualquier curso de la plataforma desde hoy. <strong>Tus cursos actuales no se ven afectados.</strong></>
            ) : (
              <>Como regalo de bienvenida, hemos añadido <strong>{creditsAmount} Kréditos</strong> a tu cuenta. Úsalos para comenzar hasta <strong>{creditsAmount} Kapsulas</strong> de tu elección, ¡sin coste alguno!</>
            )}
          </p>

          {/* Credit pills */}
          <div className="flex items-center gap-2 mb-7 flex-wrap justify-center">
            {creditsAmount >= 50 ? (
              // Para 50 créditos, mostrar representación visual diferente
              <div className="flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-2xl px-6 py-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-amber-400 to-yellow-500 shadow-md border-2 border-amber-300">
                  <i className="fas fa-coins text-white text-sm" />
                </div>
                <div className="text-left">
                  <div className="text-3xl font-black text-amber-600">{creditsAmount}</div>
                  <div className="text-xs text-amber-700/70 font-medium">Kréditos disponibles</div>
                </div>
              </div>
            ) : (
              [1, 2, 3].map(n => (
                <div
                  key={n}
                  className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md border-2 border-amber-300 bg-gradient-to-br from-amber-400 to-yellow-500 transition-all duration-500`}
                  style={{ transitionDelay: `${n * 150}ms`, transform: visible ? 'scale(1) translateY(0)' : 'scale(0) translateY(20px)' }}
                >
                  <i className="fas fa-coins text-white text-sm" />
                </div>
              ))
            )}
          </div>

          {/* Info box */}
          <div className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6 text-left space-y-2.5">
            {[
              { icon: 'fa-book-open', color: 'text-[#24668e]', text: '1 Krédito = 1 Kápsula desbloqueada' },
              { icon: 'fa-clock', color: 'text-[#6e4380]', text: 'Sin fecha de caducidad, úsalos cuando quieras' },
              { icon: 'fa-plus-circle', color: 'text-amber-600', text: 'Puedes comprar más Kréditos en cualquier momento' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-xs text-[#101021]/70">
                <i className={`fas ${item.icon} ${item.color} w-4 text-center`} />
                {item.text}
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="w-full space-y-2.5">
            <button
              id="credits-welcome-view-btn"
              onClick={handleViewCredits}
              className="w-full bg-gradient-to-r from-[#6e4380] to-[#24668e] text-white font-bold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-xl hover:from-[#4c1760] hover:to-[#1a4a69] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
            >
              <i className="fas fa-coins" />
              Ver mis Kréditos
            </button>
            <button
              onClick={onClose}
              className="w-full bg-slate-100 border border-slate-200 text-[#101021]/70 font-semibold py-2.5 px-6 rounded-xl hover:bg-slate-200 active:scale-[0.98] transition-all text-sm"
            >
              Empezar a explorar cursos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditsWelcomeModal;
