import React from 'react';
import { courseCatalog, courseCategories } from '../constants/platformData';
import CourseCard from '../components/platform/CourseCard';
import type { UserProgress } from '../types';

interface CourseCatalogPageProps {
  progress: UserProgress;
  onSelectCourse: (courseId: string) => void;
  onEnroll: (courseId: string) => void;
}

const CourseCatalogPage: React.FC<CourseCatalogPageProps> = ({ progress, onSelectCourse, onEnroll }) => {
  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-[#101021]">Catálogo de Cursos</h1>
        <p className="mt-2 text-lg text-[#101021]/70">Explora nuestra colección de cursos para potenciar tu bienestar emocional.</p>
      </div>

      {/* Filter Section */}
      <div className="mb-8 p-4 bg-white rounded-lg shadow-sm flex items-center space-x-4">
        <span className="font-semibold">Filtrar por:</span>
        <select className="p-2 rounded-md border border-[#101021]/20 focus:ring-1 focus:ring-[#6e4380]">
          <option value="">Todas las Categorías</option>
          {courseCategories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <select className="p-2 rounded-md border border-[#101021]/20 focus:ring-1 focus:ring-[#6e4380]">
          <option>Nivel</option>
          <option>Básico</option>
          <option>Intermedio</option>
          <option>Avanzado</option>
        </select>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {courseCatalog.map(course => {
          const isEnrolled = !!progress.courses[course.id];
          return (
            <CourseCard 
              key={course.id}
              course={course}
              onSelect={() => onSelectCourse(course.id)}
              onEnroll={!isEnrolled ? onEnroll : undefined}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CourseCatalogPage;