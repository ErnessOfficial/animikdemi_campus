import React from 'react';

interface WelcomeReflectionModalProps {
  phrase: string;
  onClose: () => void;
}

const WelcomeReflectionModal: React.FC<WelcomeReflectionModalProps> = ({ phrase, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white/95 rounded-2xl shadow-2xl w-full max-w-xl border border-white/20 transform transition-all max-h-[90vh] flex flex-col overflow-hidden animate-scale-in">
        
        {/* Decorative Top Accent Line */}
        <div className="h-2 bg-gradient-to-r from-[#24668e] via-[#6e4380] to-[#dd566f] w-full" />
        
        <div className="p-8 flex flex-col items-center text-center space-y-6">
          {/* Header Icon with subtle animation */}
          <div className="w-16 h-16 bg-gradient-to-tr from-[#24668e] to-[#6e4380] text-white flex items-center justify-center rounded-2xl shadow-lg transform rotate-3 hover:rotate-12 transition-transform duration-300">
            <i className="fas fa-quote-left text-2xl animate-pulse"></i>
          </div>

          {/* Title block */}
          <div className="space-y-2">
            <h2 className="text-2xl font-extrabold text-[#101021] tracking-tight bg-gradient-to-r from-[#24668e] to-[#6e4380] bg-clip-text text-transparent">
              Micro Reflexión de Bienestar
            </h2>
            <p className="text-xs text-[#101021]/50 uppercase tracking-widest font-bold">Un respiro consciente para iniciar tu día</p>
          </div>

          {/* Quote container */}
          <div className="relative py-6 px-8 w-full bg-[#f8fafc] rounded-xl border border-slate-100 shadow-inner flex items-center justify-center min-h-[140px]">
            {/* Background Quote Mark */}
            <span className="absolute top-2 left-4 text-7xl font-serif text-[#6e4380]/10 select-none pointer-events-none">“</span>
            
            <p className="text-base md:text-lg font-serif italic text-slate-800 leading-relaxed z-10 font-medium">
              {phrase}
            </p>

            <span className="absolute bottom-2 right-4 text-7xl font-serif text-[#6e4380]/10 select-none pointer-events-none">”</span>
          </div>

          {/* Action button */}
          <button
            onClick={onClose}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#24668e] to-[#6e4380] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:shadow-lg hover:from-[#1a4a69] hover:to-[#4c1760] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            Comenzar mi día <i className="fas fa-arrow-right text-xs"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeReflectionModal;
