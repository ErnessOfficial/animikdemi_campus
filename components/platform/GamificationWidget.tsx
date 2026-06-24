import React from 'react';
import type { Course, UserProgress } from '../../types';
import { computeGamification } from '../../utils/gamification';

interface Props {
  progress: UserProgress;
  catalog: Course[];
}

const GamificationWidget: React.FC<Props> = ({ progress, catalog }) => {
  const stats = computeGamification(progress, catalog);
  const pct = stats.currentToNext;

  return (
    <div className="bg-gradient-to-br from-[#6e4380]/70 to-[#24668e]/70 backdrop-blur-md rounded-2xl p-4 sm:p-5 min-w-[280px] text-white border border-white/20 shadow-lg flex flex-col justify-between">
      {/* Header Level & XP */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
              <i className="fas fa-medal text-yellow-300"></i>
            </div>
            <div className="leading-tight">
              <span className="block text-xs text-white/70">Nivel {stats.level}</span>
              <span className="block text-sm font-extrabold truncate max-w-[140px]" title={stats.levelTitle}>
                {stats.levelTitle}
              </span>
            </div>
          </div>
          <div className="text-right">
            <span className="block text-[10px] text-white/75 font-semibold">Experiencia</span>
            <span className="text-sm font-extrabold text-yellow-300 flex items-center justify-end gap-1">
              <i className="fas fa-star text-xs"></i>
              {stats.points} XP
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-3">
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-yellow-300 to-amber-300 h-2 rounded-full transition-all duration-700" 
              style={{ width: `${pct}%` }}
            ></div>
          </div>
          <div className="flex justify-between items-center text-[10px] text-white/80 mt-1.5 font-medium">
            <span>Siguiente nivel: {pct}%</span>
            <span>{100 - pct} XP restantes</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 my-3"></div>

      {/* Row Stats: Streak & Emotional Level */}
      <div className="grid grid-cols-2 gap-2 text-center text-xs">
        {/* Streak */}
        <div className="bg-white/10 p-2 rounded-xl border border-white/10 flex flex-col justify-center items-center">
          <div className="flex items-center gap-1 text-orange-400">
            <i className="fas fa-fire text-sm animate-pulse"></i>
            <span className="font-extrabold text-sm text-white">{stats.streak} {stats.streak === 1 ? 'día' : 'días'}</span>
          </div>
          <span className="text-[9px] text-white/70 mt-0.5">Racha Actual</span>
        </div>

        {/* Emotional Level */}
        <div className="bg-white/10 p-2 rounded-xl border border-white/10 flex flex-col justify-center items-center">
          <div className="flex items-center gap-1 text-emerald-300">
            <i className="fas fa-heart text-xs"></i>
            <span className="font-extrabold text-[11px] text-white truncate max-w-[90px]" title={stats.emotionalStage}>
              {stats.emotionalStage}
            </span>
          </div>
          <span className="text-[9px] text-white/70 mt-0.5">Nivel Emocional</span>
        </div>
      </div>

      {/* Compassionate Rest Days status */}
      <div className="mt-3 flex items-center justify-between text-[10px] text-white/85">
        <span className="flex items-center gap-1">
          <i className="fas fa-bed text-white/80"></i>
          Días de descanso:
        </span>
        <span className="font-bold flex gap-1">
          {Array.from({ length: 3 }).map((_, idx) => (
            <i 
              key={idx} 
              className={`fas fa-circle text-[7px] ${idx < stats.restDays ? 'text-green-300' : 'text-white/20'}`}
            ></i>
          ))}
        </span>
      </div>
    </div>
  );
};

export default GamificationWidget;
