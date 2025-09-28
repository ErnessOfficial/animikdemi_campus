import React from 'react';
import type { Course, UserProgress } from '../types';
import { estimateCourseDurationMinutes, formatDuration } from '../utils/course';

interface CourseDetailPageProps {
  course: Course;
  progress: UserProgress;
  onEnroll: (courseId: string) => void;
  onGoToCourse: (courseId: string) => void;
  onBack: () => void;
}

const CourseDetailPage: React.FC<CourseDetailPageProps> = ({ course, progress, onEnroll, onGoToCourse, onBack }) => {
  const isEnrolled = !!progress.courses[course.id];

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <button onClick={onBack} className="text-sm text-[#24668e] hover:underline mb-6">
        <i className="fas fa-arrow-left mr-2"></i>Volver al Catálogo
      </button>

      {/* Header Section */}
      <header className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <span className="font-bold text-[#6e4380]">{course.category.toUpperCase()}</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-[#101021] mt-2">{course.title}</h1>
          <p className="mt-4 text-lg text-[#101021]/80">{course.subtitle}</p>
          {estimateCourseDurationMinutes(course) > 0 && (
            <div className="mt-2 text-sm text-[#101021]/70 flex items-center gap-2">
              <i className="far fa-clock text-[#24668e]"></i>
              <span>Duración estimada: {formatDuration(estimateCourseDurationMinutes(course))}</span>
            </div>
          )}
          {isEnrolled ? (
            <button 
                onClick={() => onGoToCourse(course.id)}
                className="mt-6 w-full md:w-auto bg-[#24668e] text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-[#1a4a69] transition shadow-lg transform hover:scale-105"
            >
                Ir al Curso
            </button>
          ) : (
            <button 
                onClick={() => onEnroll(course.id)}
                className="mt-6 w-full md:w-auto bg-[#dd566f] text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-[#c04359] transition shadow-lg transform hover:scale-105"
            >
                Inscribirse Ahora
            </button>
          )}
        </div>
        <div className="order-first md:order-last">
            <img src={course.coverImage} alt={course.title} className="rounded-xl shadow-2xl w-full h-auto object-cover" />
        </div>
      </header>

      {/* Main Content */}
      <div className="mt-12 lg:mt-16 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
            {/* What you'll learn */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-[#101021]/10">
                <h2 className="text-2xl font-bold text-[#101021] mb-4">Lo que aprenderás</h2>
                <ul className="space-y-3">
                    {course.learningObjectives.map((objective, index) => (
                        <li key={index} className="flex items-start">
                            <i className="fas fa-check-circle text-[#24668e] mr-3 mt-1"></i>
                            <span className="text-[#101021]/90">{objective}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Course Description */}
            <div className="mt-8">
                <h2 className="text-2xl font-bold text-[#101021] mb-4">Descripción del Curso</h2>
                <p className="text-[#101021]/80 whitespace-pre-wrap leading-relaxed">{course.description}</p>
            </div>

            {/* Curriculum */}
            <div className="mt-8">
                <h2 className="text-2xl font-bold text-[#101021] mb-4">Currículo del Curso</h2>
                <div className="space-y-4">
                    {course.modules.map(module => (
                        <div key={module.id} className="bg-white rounded-lg border border-[#101021]/10 overflow-hidden">
                           <div className="p-4 bg-[#101021]/5">
                                <h3 className="font-bold text-[#101021]">{module.title}</h3>
                           </div>
                           <ul className="divide-y divide-[#101021]/10">
                                {module.activities.map(activity => (
                                    <li key={activity.id} className="px-4 py-3 flex items-center">
                                        <i className="far fa-file-alt text-[#6e4380] mr-4"></i>
                                        <span className="text-sm text-[#101021]/80">{activity.title}</span>
                                    </li>
                                ))}
                           </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Instructor Sidebar */}
        <aside>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-[#101021]/10 sticky top-8">
                <h3 className="text-xl font-bold text-[#101021] mb-4">Tu Instructor</h3>
                <div className="flex items-center space-x-4">
                    <img src={course.instructor.avatarUrl} alt={course.instructor.name} className="w-16 h-16 rounded-full object-cover" />
                    <div>
                        <h4 className="font-bold text-[#101021]">{course.instructor.name}</h4>
                        <p className="text-sm text-[#6e4380] font-semibold">{course.instructor.title}</p>
                    </div>
                </div>
                <p className="mt-4 text-sm text-[#101021]/80">{course.instructor.bio}</p>
            </div>
        </aside>
      </div>
    </div>
  );
};

export default CourseDetailPage;
