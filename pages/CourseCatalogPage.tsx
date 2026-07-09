import React, { useState } from 'react';
import { courseCatalog, courseCategories } from '../constants/platformData';
import CourseCard from '../components/platform/CourseCard';
import { estimateCourseDurationMinutes } from '../utils/course';
import type { UserProgress } from '../types';
import { assetPath } from '../utils/paths';

interface CourseCatalogPageProps {
  progress: UserProgress;
  onSelectCourse: (courseId: string) => void;
  onEnroll: (courseId: string) => void;
}

const CourseCatalogPage: React.FC<CourseCatalogPageProps> = ({ progress, onSelectCourse, onEnroll }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedLevel, setSelectedLevel] = useState<string>('');

  // Level matching logic helper
  const matchesLevel = (course: any, level: string) => {
    if (!level || level === 'Nivel') return true;
    const titleLower = course.title.toLowerCase();
    const search = level.toLowerCase();
    
    if (search === 'básico') {
      return (
        titleLower.includes('nivel 1') || 
        titleLower.includes('básico') || 
        titleLower.includes('basico') || 
        (!titleLower.includes('nivel 2') && !titleLower.includes('nivel 3') && !titleLower.includes('intermedio') && !titleLower.includes('avanzado'))
      );
    }
    if (search === 'intermedio') {
      return titleLower.includes('nivel 2') || titleLower.includes('intermedio');
    }
    if (search === 'avanzado') {
      return titleLower.includes('nivel 3') || titleLower.includes('avanzado');
    }
    return true;
  };

  // Filter courses based on user selections
  const filteredCourses = courseCatalog.filter(course => {
    const matchesCat = selectedCategory ? course.category === selectedCategory : true;
    const matchesLvl = matchesLevel(course, selectedLevel);
    return matchesCat && matchesLvl;
  });

  // Group filtered courses
  const kapsulasCourses = filteredCourses.filter(course => {
    const mins = estimateCourseDurationMinutes(course);
    return mins < 60 || mins === 0;
  });

  const mikroPlusCourses = filteredCourses.filter(course => {
    const mins = estimateCourseDurationMinutes(course);
    return mins >= 60;
  });

  return (
    <div className="animate-fade-in space-y-8">
      <div>
        <h1 className="text-4xl font-extrabold text-[#101021] tracking-tight">Catálogo de Cursos</h1>
        <p className="mt-2 text-lg text-[#101021]/70 max-w-3xl leading-relaxed">
          Explora nuestra colección de cursos para potenciar tu bienestar emocional, clasificados por duración y profundidad.
        </p>
      </div>

      {/* Filter Section */}
      <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
        <span className="font-semibold text-sm text-[#101021]/80">Filtrar por:</span>
        <select 
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
          className="w-full sm:w-auto p-2.5 sm:p-2 rounded-xl border border-[#101021]/20 focus:ring-1 focus:ring-[#6e4380] text-sm focus:outline-none bg-white font-medium text-slate-700"
        >
          <option value="">Todas las Categorías</option>
          {courseCategories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <select 
          value={selectedLevel}
          onChange={e => setSelectedLevel(e.target.value)}
          className="w-full sm:w-auto p-2.5 sm:p-2 rounded-xl border border-[#101021]/20 focus:ring-1 focus:ring-[#6e4380] text-sm focus:outline-none bg-white font-medium text-slate-700"
        >
          <option value="">Nivel (Todos)</option>
          <option value="Básico">Básico</option>
          <option value="Intermedio">Intermedio</option>
          <option value="Avanzado">Avanzado</option>
        </select>
      </div>

      {/* Group 1: Kapsulas (Free Access) */}
      <div className="space-y-6">
        <header className="flex flex-col sm:flex-row sm:items-center gap-4 p-5 bg-gradient-to-r from-teal-50/70 to-[#24668e]/5 rounded-3xl border border-[#24668e]/10 shadow-sm">
          <img 
            src="https://res.cloudinary.com/djybwowo6/image/upload/v1782796912/Logo_Featuring_Sound_Wave_in_Letter_O-17_tsz5yu.png" 
            alt="Kapsulas Logo" 
            className="w-16 h-16 object-contain rounded-2xl bg-white shadow-sm p-1.5 border border-slate-100/50 flex-shrink-0"
          />
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">Kapsulas</h2>
              <span className="text-[10px] sm:text-xs font-bold bg-[#6e4380] text-white py-1 px-3 rounded-full flex items-center gap-1.5 shadow-sm uppercase tracking-wider">
                <img src={assetPath('icons/credito.svg')} alt="Icono Krédito" className="w-3.5 h-3.5" />
                <span>1 Krédito</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1.5 leading-relaxed">
              Micro-sesiones de aprendizaje y herramientas de regulación rápida. Duración de hasta 59 minutos o autoguiados.
            </p>
          </div>
        </header>

        {kapsulasCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {kapsulasCourses.map(course => {
              const courseProgress = progress.courses[course.id];
              const isEnrolled = !!courseProgress;
              const isCompleted = courseProgress && courseProgress.percentage >= 100;
              return (
                <CourseCard 
                  key={course.id}
                  course={course}
                  onSelect={() => onSelectCourse(course.id)}
                  progress={courseProgress ? courseProgress.percentage : undefined}
                  isEnrolled={isEnrolled}
                  isCompleted={isCompleted}
                  onEnroll={onEnroll}
                />
              );
            })}
          </div>
        ) : (
          <div className="p-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <p className="text-slate-400 font-semibold text-sm">No hay cápsulas disponibles para esta selección.</p>
          </div>
        )}
      </div>

      {/* Group 2: Mikro Plus (Total Access) */}
      <div className="space-y-6 pt-4">
        <header className="flex flex-col sm:flex-row sm:items-center gap-4 p-5 bg-gradient-to-r from-purple-50/70 to-[#6e4380]/5 rounded-3xl border border-[#6e4380]/10 shadow-sm">
          <img 
            src="https://res.cloudinary.com/djybwowo6/image/upload/v1782796912/Logo_Featuring_Sound_Wave_in_Letter_O-15_kagwo7.png" 
            alt="Mikro Plus Logo" 
            className="w-16 h-16 object-contain rounded-2xl bg-white shadow-sm p-1.5 border border-slate-100/50 flex-shrink-0"
          />
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">Mikro Plus</h2>
              <span className="text-[10px] sm:text-xs font-bold bg-gradient-to-r from-[#6e4380] to-[#dd566f] text-white py-1 px-3 rounded-full uppercase tracking-wider shadow-sm">
                Micro Programas
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1.5 leading-relaxed">
              Programas de inmersión profunda, metodologías completas y laboratorios de aprendizaje de más de 1 hora.
            </p>
          </div>
        </header>

        {mikroPlusCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {mikroPlusCourses.map(course => {
              const courseProgress = progress.courses[course.id];
              const isEnrolled = !!courseProgress;
              const isCompleted = courseProgress && courseProgress.percentage >= 100;
              return (
                <CourseCard 
                  key={course.id}
                  course={course}
                  onSelect={() => onSelectCourse(course.id)}
                  progress={courseProgress ? courseProgress.percentage : undefined}
                  isEnrolled={isEnrolled}
                  isCompleted={isCompleted}
                  onEnroll={onEnroll}
                />
              );
            })}
          </div>
        ) : (
          <div className="p-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <p className="text-slate-400 font-semibold text-sm">No hay cursos Mikro Plus disponibles para esta selección.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCatalogPage;