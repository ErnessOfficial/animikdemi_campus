import React from 'react';
import type { Course } from '../../types';
import { estimateCourseDurationMinutes, formatDuration } from '../../utils/course';

interface CourseCardProps {
  course: Course;
  progress?: number;
  onSelect: () => void;
  isContinue?: boolean;
  onEnroll?: (courseId: string) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, progress, onSelect, isContinue = false, onEnroll }) => {
  const handleEnrollClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if(onEnroll) {
      onEnroll(course.id);
    }
  };
  
  return (
    <div 
      className="bg-white rounded-2xl border border-slate-100 shadow-md overflow-hidden transform hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
      onClick={onSelect}
    >
      <div className="relative overflow-hidden">
        <img 
          src={course.coverImage} 
          alt={course.title} 
          className="w-full h-48 md:h-40 object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent"></div>
        <span className="absolute top-3 left-3 bg-[#dd566f] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">{course.category}</span>
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-[#101021] group-hover:text-[#24668e] transition-colors leading-snug">{course.title}</h3>
          <p className="text-xs sm:text-sm text-[#101021]/60 mt-1.5 hidden md:block h-10 leading-relaxed overflow-hidden text-ellipsis line-clamp-2">{course.subtitle}</p>
          {estimateCourseDurationMinutes(course) > 0 && (
            <div className="mt-2 text-[11px] text-[#101021]/60 font-semibold flex items-center gap-1.5">
              <i className="far fa-clock text-[#24668e]"></i>
              <span>{formatDuration(estimateCourseDurationMinutes(course))}</span>
            </div>
          )}
        </div>
        
        {progress !== undefined && (
          <div className="mt-4">
            <div className="w-full bg-[#101021]/10 rounded-full h-2 overflow-hidden">
                <div 
                    className="bg-gradient-to-r from-[#24668e] to-[#6e4380] h-full rounded-full transition-all duration-500" 
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <p className="text-[10px] text-right mt-1 text-[#101021]/50 font-bold">{Math.round(progress)}% completado</p>
          </div>
        )}

        <div className="mt-4">
          {isContinue ? (
             <button className="w-full bg-[#24668e] text-white font-bold rounded-xl hover:bg-[#1a4a69] hover:shadow transition-all touch-target sm:min-h-0 sm:py-2">
              Continuar
            </button>
          ) : onEnroll ? (
             <button onClick={handleEnrollClick} className="w-full bg-[#dd566f] text-white font-bold rounded-xl hover:bg-[#c04359] hover:shadow transition-all touch-target sm:min-h-0 sm:py-2">
              Inscribirse
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
