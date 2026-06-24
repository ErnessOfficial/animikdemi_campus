import React from 'react';
import type { User, UserProgress } from '../types';
import { courseCatalog } from '../constants/platformData';
import GamificationWidget from '../components/platform/GamificationWidget';
import WellnessCalendar from '../components/platform/WellnessCalendar';
import { computeGamification } from '../utils/gamification';

interface DashboardProps {
    user: User;
    progress: UserProgress;
    onContinueCourse: (courseId: string) => void;
    onExploreCourse: (courseId: string) => void;
    onEnroll: (courseId: string) => void;
    onNavigate: (view: any) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ 
    user, 
    progress, 
    onContinueCourse, 
    onExploreCourse, 
    onEnroll, 
    onNavigate 
}) => {
    const stats = computeGamification(progress, courseCatalog);
    const enrolledCourses = courseCatalog.filter(course => progress.courses[course.id]);
    const activeEnrolled = enrolledCourses.slice(0, 2);

    const notEnrolled = courseCatalog.filter(course => !progress.courses[course.id]);
    // Take up to 2 of the non-enrolled courses (prioritizing the detailed ones which appear first)
    const recentCourses = notEnrolled.slice(0, 2);

    return (
        <div className="animate-fade-in space-y-10">
            {/* Welcome Header */}
            <div className="bg-gradient-to-r from-[#6e4380] to-[#24668e] p-6 md:p-8 rounded-xl shadow-lg text-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-3xl md:text-4xl font-extrabold">¡Bienvenido de nuevo, {user.name.split(' ')[0]}!</h1>
                    <p className="mt-2 text-lg opacity-85">"El conocimiento de uno mismo es el primer paso hacia la sabiduría."</p>
                </div>
                <GamificationWidget progress={progress} catalog={courseCatalog} />
            </div>

            {/* Gamification Dashboard Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Weekly Challenges & Emotional Level Card */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <h3 className="font-extrabold text-slate-800 text-lg flex items-center gap-2">
                                    <i className="fas fa-tasks text-[#24668e]"></i>
                                    Retos Semanales
                                </h3>
                                <p className="text-xs text-slate-500 mt-0.5">Completa estas metas semanales y obtén recompensas</p>
                            </div>
                            <span className="text-[10px] font-bold text-[#6e4380] bg-[#6e4380]/10 px-3 py-1 rounded-full uppercase">
                                Semana activa
                            </span>
                        </div>
                        
                        <div className="space-y-4">
                            {stats.weeklyChallenges.map(challenge => {
                                const isChallengeCompleted = challenge.current >= challenge.target;
                                return (
                                    <div key={challenge.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 gap-3">
                                        <div className="flex items-start gap-3">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs mt-0.5 ${isChallengeCompleted ? 'bg-emerald-100 text-emerald-600 animate-pulse' : 'bg-slate-200 text-slate-500'}`}>
                                                {challenge.type === 'capsule' && <i className="fas fa-book-open"></i>}
                                                {challenge.type === 'meditation' && <i className="fas fa-spa"></i>}
                                                {challenge.type === 'reflection' && <i className="fas fa-brain"></i>}
                                            </div>
                                            <div>
                                                <h4 className={`text-sm font-bold text-slate-800 ${isChallengeCompleted ? 'line-through opacity-60' : ''}`}>{challenge.title}</h4>
                                                <span className="text-[10px] text-slate-400 font-semibold block mt-0.5">
                                                    Progreso: {challenge.current} / {challenge.target} • Recompensa: +{challenge.xpReward} XP
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            {isChallengeCompleted ? (
                                                <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200">
                                                    <i className="fas fa-check"></i> Completado
                                                </span>
                                            ) : (
                                                <button
                                                    onClick={() => {
                                                        if (challenge.type === 'capsule') onNavigate('catalog');
                                                        if (challenge.type === 'meditation') onNavigate('my-courses');
                                                        if (challenge.type === 'reflection') onNavigate('community');
                                                    }}
                                                    className="w-full sm:w-auto bg-[#24668e]/10 text-[#24668e] hover:bg-[#24668e] hover:text-white text-xs font-bold px-4 py-1.5 rounded-full transition-all duration-200 flex items-center justify-center gap-1.5"
                                                >
                                                    Realizar <i className="fas fa-chevron-right text-[10px]"></i>
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        
                        {stats.weeklyChallenges.every(c => c.current >= c.target) && (
                            <div className="mt-4 p-3 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-xl border border-emerald-100 flex items-center gap-2">
                                <i className="fas fa-gift text-sm animate-bounce"></i>
                                ¡Felicidades! Has completado todos los retos de esta semana. +125 XP adicionales otorgados.
                            </div>
                        )}
                    </div>

                    {/* Emotional Stage Card */}
                    <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 p-5 rounded-2xl border border-emerald-500/20 flex flex-col sm:flex-row items-center gap-4 justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20 text-xl flex-shrink-0">
                                <i className="fas fa-heart-pulse animate-pulse"></i>
                            </div>
                            <div>
                                <h4 className="font-extrabold text-slate-800 text-sm">Etapa Emocional Actual</h4>
                                <p className="text-[11px] text-slate-500">Representa tu constancia, autoexamen y meditación</p>
                            </div>
                        </div>
                        <div className="text-center sm:text-right">
                            <span className="text-xl font-extrabold text-emerald-700 block">
                                {stats.emotionalStage}
                            </span>
                            <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-100/50 px-2 py-0.5 rounded-full mt-1 inline-block">
                                {stats.emotionalStage === 'Trascendencia' && 'Sabiduría Compartida'}
                                {stats.emotionalStage === 'Inspiración' && 'Guía y Luz'}
                                {stats.emotionalStage === 'Florecimiento' && 'Fruto Emocional'}
                                {stats.emotionalStage === 'Equilibrio' && 'Armonía y Templanza'}
                                {stats.emotionalStage === 'Consolidación' && 'Hábitos Firmes'}
                                {stats.emotionalStage === 'Crecimiento' && 'Integración Activa'}
                                {stats.emotionalStage === 'Descubrimiento' && 'Reconocimiento'}
                                {stats.emotionalStage === 'Curiosidad' && 'Exploración Activa'}
                                {stats.emotionalStage === 'Despertar' && 'Primeros Pasos'}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Calendar Column */}
                <div className="lg:col-span-1">
                    <WellnessCalendar history={stats.activityHistory} />
                </div>
            </div>

            {/* Welcome Summary & Methodology Section */}
            <div className="bg-white rounded-xl shadow-md border border-[#101021]/10 overflow-hidden">
                <div className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1 space-y-4">
                        <span className="bg-[#6e4380]/10 text-[#6e4380] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                            Sobre Nosotros
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#101021] leading-tight">
                            Bienvenidos a Animikro - MicroLearning
                        </h2>
                        <p className="text-[#101021]/80 text-sm md:text-base leading-relaxed">
                            La aplicación multiplataforma que funciona como el complemento esencial de Animikdemi y que es una pieza clave dentro de nuestro ecosistema integral de bienestar emocional, <strong>Animkind</strong>.
                        </p>
                        <p className="text-[#101021]/80 text-sm md:text-base leading-relaxed">
                            En Animikro, creemos que la fusión de lecciones interactivas, dinámicas y altamente focalizadas junto con un espacio seguro para el autoexamen y la reflexión crítica, crea el ecosistema perfecto para la transformación personal.
                        </p>
                        <p className="text-[#101021]/80 text-sm md:text-base leading-relaxed">
                            Únete a Animikro y descubre una forma accesible, rápida y profunda de cultivar tu salud mental, construyendo tu bienestar emocional una pequeña reflexión a la vez.
                        </p>
                    </div>
                    <div className="w-full md:w-5/12 flex justify-center">
                        <img 
                            src="https://res.cloudinary.com/djybwowo6/image/upload/v1781978309/Microlearning_vs._Capacitaci%C3%B3n_Tradicional_ys9uc9.png" 
                            alt="Microlearning vs Capacitación Tradicional" 
                            className="max-h-64 md:max-h-80 w-auto object-contain rounded-lg shadow-sm border border-slate-100 hover:scale-[1.02] transition-transform duration-300"
                        />
                    </div>
                </div>
            </div>

            {/* Courses Redirect Sections (Miniatures) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Section 1: Ir a tus cursos */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-[#101021] flex items-center gap-2">
                            <i className="fas fa-graduation-cap text-[#6e4380]"></i>
                            Ir a tus cursos
                        </h2>
                        {enrolledCourses.length > 0 && (
                            <button
                                onClick={() => onNavigate('my-courses')}
                                className="text-sm font-semibold text-[#24668e] hover:text-[#1a4a69] flex items-center gap-1 transition"
                            >
                                Ver todos ({enrolledCourses.length}) <i className="fas fa-chevron-right text-xs"></i>
                            </button>
                        )}
                    </div>

                    <div className="space-y-4">
                        {activeEnrolled.length > 0 ? (
                            activeEnrolled.map(course => {
                                const courseProgress = progress.courses[course.id];
                                const percentage = courseProgress?.percentage || 0;
                                return (
                                    <div
                                        key={course.id}
                                        onClick={() => onContinueCourse(course.id)}
                                        className="flex gap-4 p-4 bg-white rounded-xl border border-[#101021]/10 hover:border-[#24668e]/30 hover:shadow-md transition-all duration-300 cursor-pointer group"
                                    >
                                        <img
                                            src={course.coverImage}
                                            alt={course.title}
                                            className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                                        />
                                        <div className="flex-1 min-w-0 flex flex-col justify-between">
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-[9px] font-bold text-[#6e4380] uppercase tracking-wider bg-[#6e4380]/10 px-2 py-0.5 rounded truncate">
                                                        {course.category}
                                                    </span>
                                                </div>
                                                <h3 className="font-bold text-[#101021] text-sm mt-1 truncate group-hover:text-[#24668e] transition-colors">
                                                    {course.title}
                                                </h3>
                                                <p className="text-xs text-[#101021]/60 truncate mt-0.5">{course.subtitle}</p>
                                            </div>
                                            <div className="mt-2">
                                                <div className="flex items-center justify-between text-[10px] text-[#101021]/60 mb-1">
                                                    <span>Progreso</span>
                                                    <span className="font-semibold">{Math.round(percentage)}%</span>
                                                </div>
                                                <div className="w-full bg-[#101021]/5 rounded-full h-1.5 overflow-hidden">
                                                    <div
                                                        className="bg-gradient-to-r from-[#24668e] to-[#6e4380] h-full rounded-full transition-all duration-500"
                                                        style={{ width: `${percentage}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="p-8 bg-white rounded-xl border border-dashed border-[#101021]/20 text-center space-y-4">
                                <p className="text-sm text-[#101021]/60">Aún no estás inscrito en ningún curso.</p>
                                <button
                                    onClick={() => onNavigate('catalog')}
                                    className="inline-flex items-center gap-2 bg-[#24668e] text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#1a4a69] transition"
                                >
                                    Explorar Catálogo <i className="fas fa-arrow-right"></i>
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Section 2: Lo más reciente */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-[#101021] flex items-center gap-2">
                            <i className="fas fa-sparkles text-[#dd566f]"></i>
                            Lo más reciente
                        </h2>
                        <button
                            onClick={() => onNavigate('catalog')}
                            className="text-sm font-semibold text-[#dd566f] hover:text-[#c04359] flex items-center gap-1 transition"
                        >
                            Ver catálogo <i className="fas fa-chevron-right text-xs"></i>
                        </button>
                    </div>

                    <div className="space-y-4">
                        {recentCourses.length > 0 ? (
                            recentCourses.map(course => (
                                <div
                                    key={course.id}
                                    onClick={() => onExploreCourse(course.id)}
                                    className="flex gap-4 p-4 bg-white rounded-xl border border-[#101021]/10 hover:border-[#dd566f]/30 hover:shadow-md transition-all duration-300 cursor-pointer group"
                                >
                                    <img
                                        src={course.coverImage}
                                        alt={course.title}
                                        className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                                    />
                                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[9px] font-bold text-[#dd566f] uppercase tracking-wider bg-[#dd566f]/10 px-2 py-0.5 rounded truncate">
                                                    {course.category}
                                                </span>
                                            </div>
                                            <h3 className="font-bold text-[#101021] text-sm mt-1 truncate group-hover:text-[#dd566f] transition-colors">
                                                {course.title}
                                            </h3>
                                            <p className="text-xs text-[#101021]/60 line-clamp-2 mt-0.5">{course.subtitle}</p>
                                        </div>
                                        <div className="flex items-center justify-between mt-2 pt-1">
                                            <span className="text-[10px] font-semibold text-[#24668e] bg-[#24668e]/10 px-2 py-0.5 rounded-full">
                                                Nuevo
                                            </span>
                                            <span className="text-xs font-bold text-[#dd566f] group-hover:underline flex items-center gap-1">
                                                Explorar <i className="fas fa-arrow-right text-[10px]"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="p-8 bg-white rounded-xl border border-dashed border-[#101021]/20 text-center">
                                <p className="text-sm text-[#101021]/60">¡Has completado o estás inscrito en todos los cursos!</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Section 3: Accesos Directos */}
            <div className="space-y-4">
                <h2 className="text-xl font-bold text-[#101021] flex items-center gap-2">
                    <i className="fas fa-compass text-[#24668e]"></i>
                    Accesos directos
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div 
                        onClick={() => onNavigate('resources')}
                        className="bg-gradient-to-br from-[#24668e]/5 to-[#24668e]/10 p-5 rounded-xl border border-[#24668e]/10 hover:border-[#24668e]/40 hover:shadow-md cursor-pointer transition-all duration-300 group flex items-start gap-4"
                    >
                        <div className="p-3 bg-[#24668e]/10 rounded-lg text-[#24668e] group-hover:bg-[#24668e] group-hover:text-white transition-colors duration-300">
                            <i className="fas fa-folder-open text-xl"></i>
                        </div>
                        <div>
                            <h3 className="font-bold text-[#101021] text-sm group-hover:text-[#24668e] transition-colors">Biblioteca de Recursos</h3>
                            <p className="text-xs text-[#101021]/70 mt-1">Guías, manuales e infografías descargables para tu bienestar.</p>
                        </div>
                    </div>

                    <div 
                        onClick={() => onNavigate('community')}
                        className="bg-gradient-to-br from-[#6e4380]/5 to-[#6e4380]/10 p-5 rounded-xl border border-[#6e4380]/10 hover:border-[#6e4380]/40 hover:shadow-md cursor-pointer transition-all duration-300 group flex items-start gap-4"
                    >
                        <div className="p-3 bg-[#6e4380]/10 rounded-lg text-[#6e4380] group-hover:bg-[#6e4380] group-hover:text-white transition-colors duration-300">
                            <i className="fas fa-comments text-xl"></i>
                        </div>
                        <div>
                            <h3 className="font-bold text-[#101021] text-sm group-hover:text-[#6e4380] transition-colors">Kit Reflexivo</h3>
                            <p className="text-xs text-[#101021]/70 mt-1">Comparte reflexiones, conecta con la comunidad y abre tus archivos.</p>
                        </div>
                    </div>

                    <div 
                        onClick={() => onNavigate('profile')}
                        className="bg-gradient-to-br from-teal-600/5 to-teal-600/10 p-5 rounded-xl border border-teal-600/10 hover:border-teal-600/40 hover:shadow-md cursor-pointer transition-all duration-300 group flex items-start gap-4"
                    >
                        <div className="p-3 bg-teal-600/10 rounded-lg text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                            <i className="fas fa-user text-xl"></i>
                        </div>
                        <div>
                            <h3 className="font-bold text-[#101021] text-sm group-hover:text-teal-600 transition-colors">Mi Perfil</h3>
                            <p className="text-xs text-[#101021]/70 mt-1">Revisa tu progreso general, gestiona tu avatar y tus logros.</p>
                        </div>
                    </div>

                    <div 
                        onClick={() => onNavigate('about')}
                        className="bg-gradient-to-br from-[#dd566f]/5 to-[#dd566f]/10 p-5 rounded-xl border border-[#dd566f]/10 hover:border-[#dd566f]/40 hover:shadow-md cursor-pointer transition-all duration-300 group flex items-start gap-4"
                    >
                        <div className="p-3 bg-[#dd566f]/10 rounded-lg text-[#dd566f] group-hover:bg-[#dd566f] group-hover:text-white transition-colors duration-300">
                            <i className="fas fa-circle-info text-xl"></i>
                        </div>
                        <div>
                            <h3 className="font-bold text-[#101021] text-sm group-hover:text-[#dd566f] transition-colors">¿Qué es Animikro?</h3>
                            <p className="text-xs text-[#101021]/70 mt-1">Explora nuestra metodología interactiva de microaprendizaje.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Community Spotlight */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-[#101021]/10">
                <h3 className="font-bold text-xl text-[#101021] mb-3">Actividad en la Comunidad</h3>
                <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                        <i className="fas fa-comments text-[#24668e] mt-1"></i>
                        <p className="text-sm text-[#101021]/80"><strong>Ana S.</strong> ha compartido su "Árbol de la Reflexión" en el foro del <strong>Módulo 2</strong>. <span onClick={() => onNavigate('community')} className="text-[#24668e] font-semibold hover:underline cursor-pointer">Ver y comentar.</span></p>
                    </div>
                    <div className="flex items-start space-x-3">
                        <i className="fas fa-lightbulb text-[#24668e] mt-1"></i>
                        <p className="text-sm text-[#101021]/80">Nuevo artículo en el blog: <strong>"5 Maneras de Integrar el Mindfulness en tu Día a Día"</strong>. <span onClick={() => onNavigate('resources')} className="text-[#24668e] font-semibold hover:underline cursor-pointer">Leer ahora.</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
