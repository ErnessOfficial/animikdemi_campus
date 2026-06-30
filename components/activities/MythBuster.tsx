import React, { useState } from 'react';
import type { Activity } from '../../types';

interface MythBusterProps {
  activity: Activity;
  onReadyToComplete?: (ready: boolean) => void;
}

const MythBuster: React.FC<MythBusterProps> = ({ activity, onReadyToComplete }) => {
  const statements = activity.statements || activity.swipeStatements || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [userSelection, setUserSelection] = useState<boolean | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const activeStatement = statements[currentIndex];
  const isMyth = activeStatement?.isMyth;

  const handleDecision = (choiceIsMyth: boolean) => {
    setUserSelection(choiceIsMyth);
    setShowFeedback(true);
  };

  const handleNext = () => {
    setShowFeedback(false);
    setUserSelection(null);
    setDragOffset(0);
    if (currentIndex + 1 < statements.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Completed all cards!
      onReadyToComplete?.(true);
      setCurrentIndex(statements.length); // Out of bounds, shows completed screen
    }
  };

  // Drag Swiping Mechanics for Mobile/Mouse
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const offset = clientX - startX;
    setDragOffset(offset);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    // Swipe threshold (100px)
    if (dragOffset > 100) {
      // Swipe Right -> Hecho (not myth)
      handleDecision(false);
    } else if (dragOffset < -100) {
      // Swipe Left -> Mito (is myth)
      handleDecision(true);
    } else {
      // Reset
      setDragOffset(0);
    }
  };

  if (currentIndex >= statements.length) {
    return (
      <div className="text-center p-6 bg-emerald-50 border border-emerald-100 rounded-2xl animate-fade-in space-y-4">
        <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto text-2xl shadow-md">
          <i className="fas fa-check"></i>
        </div>
        <div className="space-y-1">
          <h3 className="font-extrabold text-slate-800 text-base sm:text-lg">¡Felicidades!</h3>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
            Has completado todas las tarjetas y desmitificado las falsas creencias sobre este tema.
          </p>
        </div>
      </div>
    );
  }

  const isCorrect = userSelection === isMyth;
  const rotation = dragOffset * 0.08; // subtle card tilt rotation on drag

  return (
    <div className="space-y-6 flex flex-col items-center select-none">
      <div className="w-full flex justify-between items-center px-1">
        <span className="text-[10px] uppercase font-extrabold tracking-wider text-slate-400">Desmitificador de Creencias</span>
        <span className="text-xs font-extrabold text-[#6e4380] bg-[#6e4380]/10 px-2 py-0.5 rounded-full">
          Tarjeta {currentIndex + 1} de {statements.length}
        </span>
      </div>

      {/* Swipe/Interactive Card Container */}
      <div className="relative w-full max-w-[340px] h-[240px] flex items-center justify-center">
        {/* Next Card preview shadow backdrop */}
        {currentIndex + 1 < statements.length && (
          <div className="absolute inset-0 bg-white rounded-2xl border border-slate-100 shadow-sm scale-95 translate-y-3 opacity-60 pointer-events-none" />
        )}

        {/* Active interactive card */}
        <div
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
          onTouchEnd={handleDragEnd}
          style={{
            transform: `translateX(${dragOffset}px) rotate(${rotation}deg)`,
            transition: isDragging ? 'none' : 'transform 0.3s ease, rotate 0.3s ease',
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
          className={`absolute w-full h-full bg-white border rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg border-slate-100 ${
            dragOffset > 30 
              ? 'bg-emerald-50/20 border-emerald-200' 
              : dragOffset < -30 
              ? 'bg-rose-50/20 border-rose-200' 
              : ''
          }`}
        >
          {/* Quick indicators in corners on swipe */}
          {dragOffset > 40 && (
            <span className="absolute top-4 right-4 bg-emerald-500 text-white font-extrabold text-[10px] px-2 py-0.5 rounded uppercase tracking-wider shadow">HECHO</span>
          )}
          {dragOffset < -40 && (
            <span className="absolute top-4 left-4 bg-rose-500 text-white font-extrabold text-[10px] px-2 py-0.5 rounded uppercase tracking-wider shadow">MITO</span>
          )}

          <div className="text-2xl text-slate-300 mb-4">
            <i className="fas fa-quote-left"></i>
          </div>
          <p className="text-sm sm:text-base text-slate-700 font-extrabold leading-snug">
            {activeStatement.text}
          </p>
        </div>
      </div>

      {/* Decision Buttons (Highly accessible alternative to swipes) */}
      {!showFeedback && (
        <div className="flex justify-center items-center gap-6 w-full max-w-[340px]">
          <button
            onClick={() => handleDecision(true)}
            className="flex-1 bg-white hover:bg-rose-50 text-rose-600 border border-rose-200 font-bold px-4 py-3 rounded-2xl transition shadow-md touch-target flex items-center justify-center gap-2"
          >
            <i className="fas fa-times-circle text-lg"></i>
            <span>Mito</span>
          </button>
          <button
            onClick={() => handleDecision(false)}
            className="flex-1 bg-white hover:bg-emerald-50 text-emerald-600 border border-emerald-200 font-bold px-4 py-3 rounded-2xl transition shadow-md touch-target flex items-center justify-center gap-2"
          >
            <i className="fas fa-check-circle text-lg"></i>
            <span>Hecho</span>
          </button>
        </div>
      )}

      {/* Explanation Feedback Modal/Popup */}
      {showFeedback && (
        <div className="w-full max-w-[340px] bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-inner animate-fade-in space-y-4">
          <div className="flex items-center gap-2.5">
            {isCorrect ? (
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm shadow">
                <i className="fas fa-check"></i>
              </div>
            ) : (
              <div className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center text-sm shadow">
                <i className="fas fa-times"></i>
              </div>
            )}
            <h4 className={`font-extrabold text-sm sm:text-base ${isCorrect ? 'text-emerald-700' : 'text-rose-700'}`}>
              {isCorrect ? '¡Has acertado! 🎉' : '¡Casi lo logras! 💡'}
            </h4>
          </div>

          <div className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed bg-white border border-slate-100 p-3 rounded-xl shadow-sm">
            {activeStatement.explanation}
          </div>

          <button
            onClick={handleNext}
            className="w-full bg-[#6e4380] hover:bg-[#5b376a] text-white font-bold py-2.5 px-4 rounded-xl transition shadow-md touch-target text-xs sm:text-sm flex items-center justify-center gap-1.5"
          >
            <span>{currentIndex + 1 === statements.length ? 'Finalizar' : 'Siguiente Creación'}</span>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default MythBuster;
