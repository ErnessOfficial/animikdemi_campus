import React, { useState } from 'react';
import type { Activity } from '../../types';

interface HabitTrackerBuilderProps {
  activity: Activity;
  onReadyToComplete?: (ready: boolean) => void;
}

const HabitTrackerBuilder: React.FC<HabitTrackerBuilderProps> = ({ activity, onReadyToComplete }) => {
  const rawHabits = activity.habitsToChoose || [];
  const habitsToChoose = rawHabits.map((h: any) => {
    if (typeof h === 'string') {
      return { category: 'General', text: h };
    }
    return h as { category: string; text: string; };
  });
  const maxSelection = activity.maxSelection || 3;

  // Selected habits list
  const [backpack, setBackpack] = useState<string[]>([]);

  const handleAddHabit = (text: string) => {
    if (backpack.includes(text)) return;
    if (backpack.length >= maxSelection) return;
    
    const updated = [...backpack, text];
    setBackpack(updated);
    // Ready if at least one is selected
    onReadyToComplete?.(updated.length > 0);
  };

  const handleRemoveHabit = (text: string) => {
    const updated = backpack.filter(h => h !== text);
    setBackpack(updated);
    onReadyToComplete?.(updated.length > 0);
  };

  // HTML5 Drag and Drop Handlers
  const handleDragStart = (e: React.DragEvent, text: string) => {
    e.dataTransfer.setData('text/plain', text);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault(); // Required to allow drop
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const text = e.dataTransfer.getData('text/plain');
    if (text && habitsToChoose.some(h => h.text === text)) {
      handleAddHabit(text);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Pasa de la teoría a la práctica. Diseña tu plan de acción de micro-hábitos diarios:
        </p>
        <span className="block text-xs text-[#24668e] font-extrabold">
          Selecciona un máximo de {maxSelection} hábitos para tu mochila. (Puedes arrastrar y soltar, o hacer clic en los botones).
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Left Column: Habits Bank */}
        <div className="space-y-3 bg-slate-50 border border-slate-100 p-4 rounded-2xl shadow-inner">
          <h4 className="font-extrabold text-xs sm:text-sm text-[#4c1760] uppercase tracking-wider flex items-center gap-2">
            <i className="fas fa-university text-[#6e4380]"></i>
            Banco de Hábitos Sugeridos
          </h4>
          
          <div className="space-y-2">
            {habitsToChoose.map((habit, idx) => {
              const isAdded = backpack.includes(habit.text);
              const isLimitReached = backpack.length >= maxSelection;
              return (
                <div
                  key={idx}
                  draggable={!isAdded && !isLimitReached}
                  onDragStart={(e) => handleDragStart(e, habit.text)}
                  className={`p-3 rounded-xl border flex items-center justify-between transition bg-white shadow-sm gap-2 ${
                    isAdded
                      ? 'opacity-40 border-slate-100 cursor-not-allowed'
                      : isLimitReached
                      ? 'border-slate-200 cursor-not-allowed opacity-80'
                      : 'border-slate-200 cursor-grab hover:border-[#6e4380]/40'
                  }`}
                >
                  <div className="flex flex-col items-start min-w-0 flex-1">
                    <span className="text-[9px] font-extrabold uppercase bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full mb-1 inline-block shrink-0">{habit.category}</span>
                    <span className="text-xs sm:text-sm text-slate-700 font-bold pr-2 leading-tight">{habit.text}</span>
                  </div>
                  
                  <button
                    disabled={isAdded || isLimitReached}
                    onClick={() => handleAddHabit(habit.text)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition shrink-0 ${
                      isAdded
                        ? 'bg-slate-100 text-slate-400'
                        : isLimitReached
                        ? 'bg-slate-50 text-slate-300'
                        : 'bg-[#6e4380]/10 text-[#6e4380] hover:bg-[#6e4380] hover:text-white touch-target'
                    }`}
                    title="Añadir a mi Mochila"
                  >
                    <i className="fas fa-plus text-xs"></i>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Backpack (Dropzone) */}
        <div 
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className={`space-y-4 p-4 rounded-2xl border-2 border-dashed transition-all min-h-[220px] flex flex-col justify-between ${
            backpack.length > 0
              ? 'bg-[#6e4380]/5 border-[#6e4380]/20 shadow-md'
              : 'bg-slate-50 border-slate-200'
          }`}
        >
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b border-slate-200/50 pb-2">
              <h4 className="font-extrabold text-xs sm:text-sm text-[#4c1760] uppercase tracking-wider flex items-center gap-2">
                <i className="fas fa-backpack text-[#6e4380]"></i>
                Mi Mochila de Acción
              </h4>
              <span className="text-[10px] sm:text-xs font-extrabold bg-[#6e4380]/15 text-[#6e4380] px-2 py-0.5 rounded-full">
                {backpack.length} / {maxSelection}
              </span>
            </div>

            {backpack.length > 0 ? (
              <div className="space-y-2">
                {backpack.map((habit, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white border border-slate-100 rounded-xl flex items-center justify-between shadow-sm animate-scale-in"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 text-[10px] font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-xs sm:text-sm text-slate-800 font-bold">{habit}</span>
                    </div>

                    <button
                      onClick={() => handleRemoveHabit(habit)}
                      className="w-8 h-8 rounded-full bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white flex items-center justify-center transition shrink-0 touch-target"
                      title="Quitar de mi mochila"
                    >
                      <i className="fas fa-trash text-xs"></i>
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center flex flex-col items-center justify-center space-y-2">
                <i className="fas fa-hand-holding text-slate-300 text-3xl mb-1 animate-pulse"></i>
                <p className="text-xs text-slate-400 font-bold leading-normal">
                  Suelta tus hábitos seleccionados aquí o presiona el botón "+" de la izquierda.
                </p>
              </div>
            )}
          </div>

          {backpack.length === maxSelection && (
            <div className="bg-emerald-50 text-emerald-800 p-3 rounded-xl border border-emerald-100 text-[10px] sm:text-xs font-semibold flex items-center gap-2 animate-fade-in mt-4">
              <i className="fas fa-check-circle text-emerald-600 text-sm"></i>
              <span>¡Mochila lista! Puedes marcar la actividad como completada para guardar tu plan.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HabitTrackerBuilder;
