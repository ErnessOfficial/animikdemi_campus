import React from 'react';
import type { Achievement } from '../../types';

interface AchievementBadgeProps {
  achievement: Achievement;
}

const AchievementBadge: React.FC<AchievementBadgeProps> = ({ achievement }) => {
  return (
    <div className="bg-gradient-to-br from-[#101021]/5 to-[#101021]/10 p-4 rounded-lg text-center border border-[#101021]/10 flex flex-col items-center justify-center h-full">
      <div className="w-16 h-16 rounded-full bg-[#6e4380] flex items-center justify-center mb-3 text-white">
        <i className={`fas ${achievement.icon} text-2xl`}></i>
      </div>
      <h4 className="font-bold text-[#101021]">{achievement.title}</h4>
      <p className="text-xs text-[#101021]/70 mt-1">{achievement.description}</p>
      <span className="text-xs font-semibold text-[#6e4380] mt-2">{achievement.date}</span>
    </div>
  );
};

export default AchievementBadge;