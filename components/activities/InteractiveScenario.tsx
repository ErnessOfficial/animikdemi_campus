import React, { useState } from 'react';
import type { Activity } from '../../types';

interface InteractiveScenarioProps {
  activity: Activity;
  onReadyToComplete?: (ready: boolean) => void;
}

const InteractiveScenario: React.FC<InteractiveScenarioProps> = ({ activity, onReadyToComplete }) => {
  const scenarios = activity.scenarios || [];
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const activeScenario = scenarios[currentScenarioIndex];

  const handleOptionClick = (idx: number) => {
    setSelectedOptionIndex(idx);
    setShowFeedback(true);
    
    const isOptimal = activeScenario.options[idx]?.isOptimal;
    if (isOptimal && currentScenarioIndex + 1 === scenarios.length) {
      onReadyToComplete?.(true);
    }
  };

  const handleNext = () => {
    setShowFeedback(false);
    setSelectedOptionIndex(null);
    if (currentScenarioIndex + 1 < scenarios.length) {
      setCurrentScenarioIndex(prev => prev + 1);
    }
  };

  const handleRetry = () => {
    setShowFeedback(false);
    setSelectedOptionIndex(null);
  };

  if (currentScenarioIndex >= scenarios.length) {
    return (
      <div className="text-center p-6 bg-emerald-50 border border-emerald-100 rounded-2xl animate-fade-in space-y-4">
        <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto text-2xl shadow-md">
          <i className="fas fa-check-circle"></i>
        </div>
        <div className="space-y-1">
          <h3 className="font-extrabold text-slate-800 text-base sm:text-lg">¡Simulación Completada!</h3>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
            Has navegado con éxito todos los escenarios de conversación y tomado las decisiones óptimas.
          </p>
        </div>
      </div>
    );
  }

  const selectedOption = selectedOptionIndex !== null ? activeScenario.options[selectedOptionIndex] : null;
  const isOptimal = selectedOption?.isOptimal;

  return (
    <div className="space-y-6">
      <div className="w-full flex justify-between items-center px-1">
        <span className="text-[10px] uppercase font-extrabold tracking-wider text-slate-400">Simulador de Situación</span>
        <span className="text-xs font-extrabold text-[#6e4380] bg-[#6e4380]/10 px-2 py-0.5 rounded-full">
          Escenario {currentScenarioIndex + 1} de {scenarios.length}
        </span>
      </div>

      {/* Simulated Chat Dialogue Screen */}
      <div className="bg-slate-50 rounded-2xl border border-slate-100 p-4 sm:p-5 min-h-[220px] flex flex-col justify-end space-y-4 shadow-inner">
        {/* Character Context Message (Left Align) */}
        <div className="flex items-start gap-2.5 animate-slide-in-left max-w-[85%]">
          <div className="w-8 h-8 rounded-full bg-[#6e4380] text-white flex items-center justify-center text-sm shadow-md flex-shrink-0">
            <i className="fas fa-user-tie"></i>
          </div>
          <div className="bg-white border border-slate-100 p-3.5 rounded-2xl rounded-tl-none shadow-sm space-y-1">
            <span className="block text-[9px] uppercase font-extrabold text-[#6e4380] tracking-wider">Contexto de Situación</span>
            <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
              {activeScenario.context}
            </p>
          </div>
        </div>

        {/* User Choice Response (Right Align - Only show if chosen) */}
        {selectedOption && (
          <div className="flex items-start gap-2.5 justify-end max-w-[85%] ml-auto animate-slide-in-right">
            <div className="bg-[#24668e] text-white p-3.5 rounded-2xl rounded-tr-none shadow-md space-y-0.5">
              <span className="block text-[8px] uppercase font-bold text-white/70 tracking-wider">Tu Respuesta</span>
              <p className="text-xs sm:text-sm font-semibold leading-relaxed">
                {selectedOption.text}
              </p>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#24668e] text-white flex items-center justify-center text-sm shadow-md flex-shrink-0">
              <i className="fas fa-user"></i>
            </div>
          </div>
        )}

        {/* Character Reaction Consequence (Left Align - Only show if chosen) */}
        {selectedOption && (
          <div className="flex items-start gap-2.5 animate-slide-in-left max-w-[85%] pt-2">
            <div className="w-8 h-8 rounded-full bg-[#6e4380] text-white flex items-center justify-center text-sm shadow-md flex-shrink-0">
              <i className="fas fa-user-tie"></i>
            </div>
            <div className={`p-3.5 rounded-2xl rounded-tl-none shadow-sm border space-y-1 ${
              isOptimal 
                ? 'bg-emerald-50 border-emerald-100 text-emerald-800' 
                : 'bg-rose-50 border-rose-100 text-rose-800'
            }`}>
              <span className="block text-[9px] uppercase font-extrabold tracking-wider opacity-85">
                {isOptimal ? 'Resultado de Acción' : 'Reacción de Situación'}
              </span>
              <p className="text-xs sm:text-sm font-semibold leading-relaxed">
                {selectedOption.consequence}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Options Selection list (Hide when feedback is visible) */}
      {!showFeedback && (
        <div className="space-y-2.5">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider pl-1">Selecciona tu línea de acción:</p>
          <div className="space-y-2">
            {activeScenario.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionClick(idx)}
                className="w-full text-left p-3.5 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-[#24668e]/40 transition text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-800 shadow-sm touch-target flex items-center gap-3"
              >
                <span className="w-6 h-6 rounded-full bg-slate-100 text-[#4c1760] font-bold text-xs flex items-center justify-center shrink-0">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="flex-1 leading-snug">{option.text}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Scenario Feedback Actions (Next Scenario / Retry button) */}
      {showFeedback && selectedOption && (
        <div className="flex justify-end pt-2">
          {isOptimal ? (
            <button
              onClick={handleNext}
              className="bg-[#24668e] hover:bg-[#1a4a69] text-white font-bold py-2.5 px-6 rounded-xl transition shadow-md touch-target text-xs sm:text-sm flex items-center gap-1.5"
            >
              <span>{currentScenarioIndex + 1 === scenarios.length ? 'Finalizar Actividad' : 'Siguiente Escenario'}</span>
              <i className="fas fa-arrow-right"></i>
            </button>
          ) : (
            <button
              onClick={handleRetry}
              className="bg-[#101021]/10 text-slate-700 hover:bg-[#101021]/15 font-bold py-2.5 px-6 rounded-xl transition shadow-sm touch-target text-xs sm:text-sm flex items-center gap-1.5"
            >
              <i className="fas fa-undo"></i>
              <span>Probar otra respuesta</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default InteractiveScenario;
