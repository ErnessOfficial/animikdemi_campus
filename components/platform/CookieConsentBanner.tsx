import React, { useState, useEffect } from 'react';

interface CookieConsentBannerProps {
  onConsentChange?: (consent: 'all' | 'necessary') => void;
}

const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({ onConsentChange }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already made a decision
    const consent = localStorage.getItem('animik_cookie_consent');
    if (!consent) {
      // Small delay to make the entrance smooth and notice-able
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // Trigger callback with existing consent value
      if (onConsentChange) {
        onConsentChange(consent as 'all' | 'necessary');
      }
    }
  }, [onConsentChange]);

  const handleAcceptAll = () => {
    localStorage.setItem('animik_cookie_consent', 'all');
    setIsVisible(false);
    if (onConsentChange) onConsentChange('all');
  };

  const handleRejectOptional = () => {
    localStorage.setItem('animik_cookie_consent', 'necessary');
    setIsVisible(false);
    if (onConsentChange) onConsentChange('necessary');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md bg-white border border-[#101021]/15 rounded-2xl shadow-[0_10px_30px_rgba(16,16,33,0.15)] p-5 z-50 animate-fade-in font-sans">
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-xl bg-[#6e4380]/15 text-[#6e4380] flex items-center justify-center flex-shrink-0">
          <i className="fas fa-cookie-bite text-base"></i>
        </div>
        <div className="space-y-1">
          <h4 className="font-extrabold text-[#101021] text-xs sm:text-sm tracking-wide uppercase">
            Tu privacidad nos importa 🌿
          </h4>
          <p className="text-[11px] sm:text-xs text-[#101021]/70 leading-relaxed">
            Utilizamos cookies técnicas necesarias para mantener tu sesión activa y resguardar tu progreso. También te sugerimos permitir cookies analíticas opcionales para ayudarnos a entender y optimizar la efectividad de las herramientas formativas y de Inteligencia Artificial.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 mt-4 pt-3 border-t border-[#101021]/5 text-xs">
        <button
          onClick={handleRejectOptional}
          className="px-3 py-2 rounded-xl text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 transition font-bold"
        >
          Solo Necesarias
        </button>
        <button
          onClick={handleAcceptAll}
          className="px-3.5 py-2 rounded-xl bg-[#6e4380] hover:bg-[#6e4380]/90 text-white font-bold transition shadow-md hover:scale-[1.02] active:scale-[0.98]"
        >
          Aceptar Todas
        </button>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
