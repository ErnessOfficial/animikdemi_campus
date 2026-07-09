import React, { useState } from 'react';
import type { Course, UserProgress } from '../types';
import { courseCatalog, mockAchievements } from '../constants/platformData';
import { computeGamification } from '../utils/gamification';
import AchievementBadge from '../components/profile/AchievementBadge';
import { estimateCourseDurationMinutes, getCourseCredits } from '../utils/course';
import { assetPath } from '../utils/paths';

interface MyCoursesPageProps {
  progress: UserProgress;
  onContinueCourse: (courseId: string) => void;
  onNavigateToCertificates: () => void;
}

type Tab = 'in-progress' | 'completed' | 'achievements';

const MyCoursesPage: React.FC<MyCoursesPageProps> = ({ progress, onContinueCourse, onNavigateToCertificates }) => {
  const [activeTab, setActiveTab] = useState<Tab>('in-progress');

  const getCoursesByStatus = () => {
    const inProgress: Array<{ course: Course, prog: any }> = [];
    const completed: Array<{ course: Course, prog: any }> = [];

    courseCatalog.forEach(course => {
      const prog = progress.courses[course.id];
      if (prog) {
        if (prog.percentage >= 100) {
          completed.push({ course, prog });
        } else {
          inProgress.push({ course, prog });
        }
      }
    });

    return { inProgress, completed };
  };

  const { inProgress, completed } = getCoursesByStatus();

  const formatDate = (isoString?: string) => {
    if (!isoString) return 'N/A';
    const date = new Date(isoString);
    return new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }).format(date);
  };

  const TabButton: React.FC<{ tabId: Tab; label: string }> = ({ tabId, label }) => (
    <button
      onClick={() => setActiveTab(tabId)}
      className={`px-4 py-3 font-semibold rounded-t-lg transition-colors border-b-2 ${activeTab === tabId ? 'bg-white border-[#6e4380] text-[#6e4380]' : 'border-transparent text-[#101021]/60 hover:text-[#101021]'}`}
    >
      {label}
    </button>
  );

  return (
    <div className="max-w-6xl mx-auto animate-fade-in space-y-8 p-4 sm:p-0">
      <div>
        <h1 className="text-4xl font-extrabold text-[#101021]">Mis Cursos</h1>
        <p className="mt-2 text-lg text-[#101021]/70">Retoma tu aprendizaje, revisa tus cursos completados y descubre tus logros.</p>
      </div>

      <div className="border-b border-[#101021]/10 flex overflow-x-auto hide-scrollbar">
        <TabButton tabId="in-progress" label={`En Desarrollo (${inProgress.length})`} />
        <TabButton tabId="completed" label={`Completados (${completed.length})`} />
        <TabButton tabId="achievements" label="Historial de Logros" />
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-[#101021]/10 min-h-[400px]">
        {activeTab === 'in-progress' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#101021]">Cursos en Desarrollo</h2>
            {inProgress.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {inProgress.map(({ course, prog }) => (
                  <div key={course.id} className="border border-[#101021]/10 rounded-xl p-5 shadow-sm hover:shadow-md transition bg-white flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <img src={course.coverImage} alt={course.title} className="w-16 h-16 object-cover rounded-lg" />
                        <div>
                          <h3 className="font-bold text-[#101021]">{course.title}</h3>
                          <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                            <span className="text-xs bg-[#101021]/5 text-[#101021]/70 px-2 py-1 rounded-full">{course.category}</span>
                            <span className="text-[10px] text-[#6e4380] font-extrabold flex items-center gap-1.5 bg-[#6e4380]/10 px-2.5 py-0.5 rounded-full">
                              <div className="flex items-center gap-0.5">
                                {Array.from({ length: getCourseCredits(course) }).map((_, idx) => (
                                  <img key={idx} src={assetPath('icons/credito.svg')} alt="Icono Krédito" className="w-3.5 h-3.5" />
                                ))}
                              </div>
                              <span>{getCourseCredits(course)} {getCourseCredits(course) === 1 ? 'Krédito' : 'Kréditos'}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-semibold text-[#6e4380]">Progreso</span>
                          <span className="font-bold text-[#101021]">{Math.round(prog.percentage)}%</span>
                        </div>
                        <div className="w-full bg-[#101021]/10 rounded-full h-2">
                          <div className="bg-gradient-to-r from-[#6e4380] to-[#24668e] h-2 rounded-full transition-all duration-500" style={{ width: `${prog.percentage}%` }}></div>
                        </div>
                        <p className="text-xs text-[#101021]/60 mt-2 font-medium italic">
                          "Te faltan {Math.ceil((course.estimatedDurationMinutes || (course.modules.reduce((acc, m) => acc + m.activities.length, 0) * 15)) * (1 - prog.percentage / 100))} minutos para finalizar."
                        </p>
                      </div>
                      <div className="mt-3 text-sm text-[#101021]/60">
                        <i className="far fa-calendar-alt mr-1"></i> Iniciado: {formatDate(prog.startedAt)}
                      </div>
                    </div>
                    <button onClick={() => onContinueCourse(course.id)} className="mt-5 w-full bg-[#101021]/5 text-[#101021] font-bold py-2 rounded-lg hover:bg-[#101021]/10 transition">
                      Continuar Curso
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[#101021]/70">No tienes cursos en desarrollo actualmente. ¡Explora el catálogo y comienza uno nuevo!</p>
            )}
          </div>
        )}

        {activeTab === 'completed' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#101021]">Cursos Completados</h2>
            {completed.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {completed.map(({ course, prog }) => (
                  <div key={course.id} className="border border-[#101021]/10 rounded-xl p-5 shadow-sm hover:shadow-md transition bg-gradient-to-br from-white to-[#f0f2f5] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <img src={course.coverImage} alt={course.title} className="w-16 h-16 object-cover rounded-lg border-2 border-[#6e4380]" />
                        <div>
                          <h3 className="font-bold text-[#101021]">{course.title}</h3>
                          <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                            <span className="text-xs bg-[#6e4380]/10 text-[#6e4380] px-2 py-1 rounded-full font-bold">Completado 100%</span>
                            <span className="text-[10px] text-[#6e4380] font-extrabold flex items-center gap-1.5 bg-[#6e4380]/10 px-2.5 py-0.5 rounded-full">
                              <div className="flex items-center gap-0.5">
                                {Array.from({ length: getCourseCredits(course) }).map((_, idx) => (
                                  <img key={idx} src={assetPath('icons/credito.svg')} alt="Icono Krédito" className="w-3.5 h-3.5" />
                                ))}
                              </div>
                              <span>{getCourseCredits(course)} {getCourseCredits(course) === 1 ? 'Krédito' : 'Kréditos'}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 text-sm text-[#101021]/60">
                        <div className="mb-1"><i className="far fa-calendar-check mr-1"></i> Finalizado: {formatDate(prog.completedAt)}</div>
                      </div>
                    </div>
                    <button onClick={onNavigateToCertificates} className="mt-5 w-full bg-[#6e4380] text-white font-bold py-2 rounded-lg hover:bg-[#5a3669] transition shadow">
                      <i className="fas fa-certificate mr-2"></i> Descargar Certificado
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[#101021]/70">Aún no has completado ningún curso. ¡Sigue aprendiendo y logra tus metas!</p>
            )}
          </div>
        )}

        {activeTab === 'achievements' && (() => {
          const stats = computeGamification(progress, courseCatalog);
          return (
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-[#6e4380] to-[#24668e] p-6 rounded-lg text-white shadow">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-xl font-bold">Progreso de Gamificación</h3>
                    <p className="text-sm opacity-90">Nivel {stats.level} • {stats.points} puntos</p>
                  </div>
                  <div className="min-w-[220px] w-full md:w-1/3">
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-yellow-300 h-2 rounded-full transition-all duration-500" style={{ width: `${stats.currentToNext}%` }}></div>
                    </div>
                    <div className="mt-1 text-xs opacity-90">Al siguiente nivel: {stats.currentToNext}%</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#101021] mb-3">Insignias</h4>
                {stats.badges.length > 0 ? (
                  <div className="flex items-center gap-3 flex-wrap">
                    {stats.badges.map(b => (
                      <span key={b.id} className="inline-flex items-center gap-2 bg-[#101021]/5 text-[#101021] px-3 py-1.5 rounded-full text-sm border border-[#101021]/10">
                        {b.icon.startsWith('http') ? (
                          <img src={b.icon} alt={b.label} className="w-5 h-5 object-contain" />
                        ) : (
                          <i className={`fas ${b.icon} text-[#6e4380]`}></i>
                        )}
                        {b.label}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-[#101021]/70 text-sm">Aún no has desbloqueado insignias. ¡Sigue avanzando!</p>
                )}
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#101021] mb-3">Áreas del Bienestar</h4>
                <p className="text-sm text-[#101021]/80 mb-2">Completadas: {stats.areasCompleted}/{stats.areasTotal} {stats.areasLevel === 1 && (<span className="ml-2 inline-flex items-center gap-1 bg-green-500/10 text-green-700 px-2 py-0.5 rounded-full"><i className="fas fa-layer-group"></i> Bienestar Integral</span>)}</p>
                {stats.areaBadges.length > 0 ? (
                  <div className="flex items-center gap-2 flex-wrap">
                    {stats.areaBadges.map(b => (
                      <span key={b.id} className="inline-flex items-center gap-1 bg-[#101021]/5 text-[#101021] px-2.5 py-1 rounded-full text-xs border border-[#101021]/10">
                        <i className={`fas ${b.icon} text-[#24668e]`}></i> {b.label}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-[#101021]/70 text-sm">Completa al menos un curso en cada área para desbloquear su insignia.</p>
                )}
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#101021] mb-3">Historial de Logros</h4>
                {progress.unlockedAchievements && progress.unlockedAchievements.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {progress.unlockedAchievements.map(ach => (
                      <AchievementBadge 
                        key={ach.id} 
                        achievement={{
                          id: ach.id,
                          title: ach.title,
                          description: ach.description,
                          icon: ach.icon,
                          date: new Date(ach.unlockedAt).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })
                        }} 
                      />
                    ))}
                  </div>
                ) : (
                  <p className="text-[#101021]/70 text-sm">Aún no has desbloqueado ningún logro. ¡Sigue aprendiendo para completar hitos importantes!</p>
                )}
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
};

export default MyCoursesPage;
