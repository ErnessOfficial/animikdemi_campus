import React from 'react';
import type { User, UserProgress } from '../types';
import { courseCatalog } from '../constants/platformData';
import CourseCard from '../components/platform/CourseCard';
import GamificationWidget from '../components/platform/GamificationWidget';

interface DashboardProps {
    user: User;
    progress: UserProgress;
    onContinueCourse: (courseId: string) => void;
    onExploreCourse: (courseId: string) => void;
    onEnroll: (courseId: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, progress, onContinueCourse, onExploreCourse, onEnroll }) => {
    const enrolledCourses = courseCatalog.filter(course => progress.courses[course.id]);
    
    const recommendedCategory = user.recommendedCategory;

    const recommendedCourses = courseCatalog.filter(course => {
        if (!progress.courses[course.id]) { // Not enrolled
            if (recommendedCategory) {
                return course.broadCategories?.includes(recommendedCategory as any);
            }
            return false; 
        }
        return false;
    });

    const otherCourses = courseCatalog.filter(c => 
        !progress.courses[c.id] && (!recommendedCategory || !c.broadCategories?.includes(recommendedCategory as any))
    );


    return (
        <div className="animate-fade-in space-y-10">
            {/* Welcome Header */}
            <div className="bg-gradient-to-r from-[#6e4380] to-[#24668e] p-6 md:p-8 rounded-xl shadow-lg text-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-3xl md:text-4xl font-extrabold">¡Bienvenido de nuevo, {user.name.split(' ')[0]}!</h1>
                    <p className="mt-2 text-lg opacity-80">"El conocimiento de uno mismo es el primer paso hacia la sabiduría."</p>
                </div>
                <GamificationWidget progress={progress} catalog={courseCatalog} />
            </div>

            {/* Continue Learning */}
            {enrolledCourses.length > 0 && (
                 <div>
                    <h2 className="text-2xl font-bold text-[#101021] mb-4">Continuar Aprendiendo</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {enrolledCourses.map(course => {
                            const courseProgress = progress.courses[course.id];
                            return (
                                <CourseCard
                                    key={course.id}
                                    course={course}
                                    progress={courseProgress.percentage}
                                    onSelect={() => onContinueCourse(course.id)}
                                    isContinue={true}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
            
            {/* Recommendations */}
            <div>
                <h2 className="text-2xl font-bold text-[#101021] mb-4">
                    {recommendedCategory ? `Recomendado para Ti (Área: ${recommendedCategory})` : 'Explora Nuestros Cursos'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {[...recommendedCourses, ...otherCourses].slice(0, 4).map(course => (
                         <CourseCard
                            key={course.id}
                            course={course}
                            onSelect={() => onExploreCourse(course.id)}
                            onEnroll={onEnroll}
                        />
                    ))}
                </div>
            </div>

             {/* Community Spotlight */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-[#101021]/10">
                <h3 className="font-bold text-xl text-[#101021] mb-3">Actividad en la Comunidad</h3>
                <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                        <i className="fas fa-comments text-[#24668e] mt-1"></i>
                        <p className="text-sm text-[#101021]/80"><strong>Ana S.</strong> ha compartido su "Árbol de la Reflexión" en el foro del <strong>Módulo 2</strong>. <a href="#" className="text-[#24668e] font-semibold hover:underline">Ver y comentar.</a></p>
                    </div>
                     <div className="flex items-start space-x-3">
                        <i className="fas fa-lightbulb text-[#24668e] mt-1"></i>
                        <p className="text-sm text-[#101021]/80">Nuevo artículo en el blog: <strong>"5 Maneras de Integrar el Mindfulness en tu Día a Día"</strong>. <a href="#" className="text-[#24668e] font-semibold hover:underline">Leer ahora.</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
