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
    <div className="bg-white/15 backdrop-blur-sm rounded-lg p-4 min-w-[260px] text-white border border-white/20">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <i className="fas fa-medal"></i>
          <span className="font-bold">Nivel {stats.level}</span>
        </div>
        <div className="text-sm opacity-90">
          <i className="fas fa-star text-yellow-300 mr-1"></i>
          {stats.points} pts
        </div>
      </div>
      <div className="w-full bg-white/20 rounded-full h-2">
        <div className="bg-yellow-300 h-2 rounded-full transition-all" style={{ width: `${pct}%` }}></div>
      </div>
      <div className="mt-2 text-xs opacity-90">Progreso al siguiente nivel: {pct}%</div>
      {stats.badges.length > 0 && (
        <div className="mt-3 flex items-center gap-3 flex-wrap">
          {stats.badges.map(b => (
            <span key={b.id} className="inline-flex items-center gap-1 bg-white/10 px-2 py-1 rounded-full text-xs">
              <i className={`fas ${b.icon}`}></i>
              {b.label}
            </span>
          ))}
        </div>
      )}
      <div className="mt-3 text-xs opacity-90">Cursos completados: <strong>{stats.completedCourses}</strong></div>
      <div className="mt-2 text-xs opacity-90 flex items-center gap-2">
        <i className="fas fa-heart"></i>
        Áreas del bienestar: <strong>{stats.areasCompleted}/{stats.areasTotal}</strong>
        {stats.areasLevel === 1 && (
          <span className="ml-2 inline-flex items-center gap-1 bg-green-400/20 text-green-100 px-2 py-0.5 rounded-full">
            <i className="fas fa-layer-group"></i> Bienestar Integral
          </span>
        )}
      </div>
      {stats.areaBadges.length > 0 && (
        <div className="mt-2 flex items-center gap-2 flex-wrap">
          {stats.areaBadges.slice(0, 6).map(b => (
            <span key={b.id} className="inline-flex items-center gap-1 bg-white/10 px-2 py-1 rounded-full text-[10px]">
              <i className={`fas ${b.icon}`}></i>
              {b.label}
            </span>
          ))}
          {stats.areaBadges.length > 6 && (
            <span className="text-[10px] opacity-90">+{stats.areaBadges.length - 6} más</span>
          )}
        </div>
      )}
    </div>
  );
};

export default GamificationWidget;
