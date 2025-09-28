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
      className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer group"
      onClick={onSelect}
    >
      <div className="relative">
        <img src={course.coverImage} alt={course.title} className="w-full h-40 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300"></div>
        <span className="absolute top-3 left-3 bg-[#dd566f] text-white text-xs font-bold px-2 py-1 rounded-full">{course.category}</span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-[#101021] truncate">{course.title}</h3>
        <p className="text-sm text-[#101021]/70 mt-1 h-10">{course.subtitle}</p>
        {estimateCourseDurationMinutes(course) > 0 && (
          <div className="mt-2 text-xs text-[#101021]/70 flex items-center gap-2">
            <i className="far fa-clock text-[#24668e]"></i>
            <span>{formatDuration(estimateCourseDurationMinutes(course))}</span>
          </div>
        )}
        
        {progress !== undefined && (
          <div className="mt-4">
            <div className="w-full bg-[#101021]/10 rounded-full h-2">
                <div 
                    className="bg-gradient-to-r from-[#24668e] to-[#6e4380] h-2 rounded-full" 
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <p className="text-xs text-right mt-1 text-[#101021]/60">{Math.round(progress)}% completado</p>
          </div>
        )}

        {isContinue ? (
           <button className="mt-4 w-full bg-[#24668e] text-white font-bold py-2 rounded-lg hover:bg-[#1a4a69] transition">
            Continuar
          </button>
        ) : onEnroll ? (
           <button onClick={handleEnrollClick} className="mt-4 w-full bg-[#dd566f] text-white font-bold py-2 rounded-lg hover:bg-[#c04359] transition">
            Inscribirse
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default CourseCard;
