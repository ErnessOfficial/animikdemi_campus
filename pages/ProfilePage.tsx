import React, { useState, useEffect } from 'react';
import type { User, UserProgress } from '../types';
import { mockAchievements, courseCatalog } from '../constants/platformData';
import { computeGamification } from '../utils/gamification';
import AchievementBadge from '../components/profile/AchievementBadge';
import CertificateCard from '../components/profile/CertificateCard';

interface ProfilePageProps {
  user: User;
  progress: UserProgress;
  onUpdateUser: (updatedUser: Partial<User>) => void;
}

type ProfileTab = 'personal' | 'account' | 'achievements' | 'certs';

const ProfilePage: React.FC<ProfilePageProps> = ({ user, progress, onUpdateUser }) => {
  const [activeTab, setActiveTab] = useState<ProfileTab>('personal');
  const [formData, setFormData] = useState({
    name: user.name,
    avatarUrl: user.avatarUrl,
    bio: user.bio || '',
  });
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    if (formData.name !== user.name || formData.avatarUrl !== user.avatarUrl || formData.bio !== (user.bio || '')) {
      setIsDirty(true);
    } else {
      setIsDirty(false);
    }
  }, [formData, user]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateUser(formData);
    setIsDirty(false);
  };

  const handleCancel = () => {
    setFormData({
      name: user.name,
      avatarUrl: user.avatarUrl,
      bio: user.bio || '',
    });
  };

  const getCompletedCourses = () => {
    return courseCatalog.filter(course => {
      const courseProgress = progress.courses[course.id];
      if (!courseProgress) return false;

      return course.modules.every(module => courseProgress.completionStatus[module.id]?.completed);
    });
  };

  const completedCourses = getCompletedCourses();

  const renderTabContent = () => {
    switch (activeTab) {
      case 'personal':
        return (
          <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="flex flex-col items-center space-y-4">
              <img src={formData.avatarUrl} alt="User Avatar" className="w-40 h-40 rounded-full object-cover border-4 border-[#24668e]" />
              <button type="button" className="w-full text-center bg-[#101021]/5 text-[#101021] font-semibold py-2 px-4 rounded-lg hover:bg-[#101021]/10 transition">
                Cambiar Foto
              </button>
            </div>
            <div className="md:col-span-2 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-[#101021] mb-2">Nombre Completo</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="w-full bg-white rounded-md py-2 px-4 border-2 border-[#101021]/20 focus:border-[#6e4380] focus:ring-1 focus:ring-[#6e4380] transition" />
              </div>
              <div>
                <label htmlFor="bio" className="block text-sm font-bold text-[#101021] mb-2">Biografía Corta</label>
                <textarea id="bio" name="bio" rows={4} value={formData.bio} onChange={handleInputChange} className="w-full bg-white rounded-md py-2 px-4 border-2 border-[#101021]/20 focus:border-[#6e4380] focus:ring-1 focus:ring-[#6e4380] transition" placeholder="Cuéntanos un poco sobre ti..."></textarea>
              </div>
              {isDirty && (
                <div className="flex justify-end items-center space-x-4 pt-4 border-t border-[#101021]/10">
                  <button type="button" onClick={handleCancel} className="text-[#101021]/80 font-semibold py-2 px-6 rounded-lg hover:bg-[#101021]/10 transition">Cancelar</button>
                  <button type="submit" className="bg-[#24668e] text-white font-bold py-2 px-6 rounded-lg hover:bg-[#1a4a69] transition shadow">Guardar Cambios</button>
                </div>
              )}
            </div>
          </form>
        );
      case 'account':
        return (
            <div className="max-w-2xl space-y-6">
                 <div>
                    <label htmlFor="email" className="block text-sm font-bold text-[#101021] mb-2">Correo Electrónico</label>
                    <input type="email" id="email" value="alex.learner@animikdemi.com" readOnly className="w-full bg-[#f0f2f5] text-[#101021]/60 rounded-md py-2 px-4 border-2 border-[#101021]/20 cursor-not-allowed" />
                </div>
                 <div>
                    <label className="block text-sm font-bold text-[#101021] mb-2">Contraseña</label>
                    <button className="text-[#24668e] font-semibold hover:underline">Cambiar contraseña</button>
                </div>
                <div className="pt-4 border-t border-[#101021]/10">
                    <h3 className="text-lg font-bold text-[#101021] mb-4">Preferencias de Notificación</h3>
                    <div className="space-y-3">
                        <label className="flex items-center justify-between"><span className="text-[#101021]/90">Nuevos cursos y eventos</span><input type="checkbox" className="toggle-checkbox" defaultChecked /></label>
                        <label className="flex items-center justify-between"><span className="text-[#101021]/90">Actividad en la comunidad</span><input type="checkbox" className="toggle-checkbox" defaultChecked /></label>
                        <label className="flex items-center justify-between"><span className="text-[#101021]/90">Recordatorios de progreso</span><input type="checkbox" className="toggle-checkbox" /></label>
                    </div>
                </div>
                <style>{`
                    .toggle-checkbox {
                        appearance: none;
                        width: 40px;
                        height: 20px;
                        background-color: #ccc;
                        border-radius: 10px;
                        position: relative;
                        cursor: pointer;
                        transition: background-color 0.3s;
                    }
                    .toggle-checkbox:checked {
                        background-color: #6e4380;
                    }
                    .toggle-checkbox::before {
                        content: '';
                        position: absolute;
                        width: 16px;
                        height: 16px;
                        border-radius: 50%;
                        background-color: white;
                        top: 2px;
                        left: 2px;
                        transition: transform 0.3s;
                    }
                    .toggle-checkbox:checked::before {
                        transform: translateX(20px);
                    }
                `}</style>
            </div>
        );
      case 'achievements':
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
                    <div className="bg-yellow-300 h-2 rounded-full" style={{ width: `${stats.currentToNext}%` }}></div>
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
                      <i className={`fas ${b.icon} text-[#6e4380]`}></i> {b.label}
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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {mockAchievements.map(ach => <AchievementBadge key={ach.id} achievement={ach} />)}
              </div>
            </div>
          </div>
        );
      case 'certs':
        return (
            <div>
                <h3 className="text-xl font-bold text-[#101021] mb-4">Mis Certificaciones</h3>
                {completedCourses.length > 0 ? (
                    <div className="space-y-4">
                        {completedCourses.map(course => {
                          const cp = progress.courses[course.id];
                          return (
                            <CertificateCard key={course.id} course={course} userName={user.name} completedAt={cp?.completedAt || null} />
                          );
                        })}
                    </div>
                ) : (
                    <p className="text-[#101021]/70">Aún no has completado ningún curso. ¡Sigue aprendiendo para ganar certificados!</p>
                )}
            </div>
        );
      default:
        return null;
    }
  };

  const TabButton: React.FC<{ tabId: ProfileTab; label: string }> = ({ tabId, label }) => (
    <button
      onClick={() => setActiveTab(tabId)}
      className={`px-4 py-2 font-semibold rounded-t-lg transition-colors ${activeTab === tabId ? 'bg-white border-b-2 border-[#6e4380] text-[#6e4380]' : 'text-[#101021]/60 hover:text-[#101021]'}`}
    >
      {label}
    </button>
  );

  return (
    <div className="max-w-6xl mx-auto animate-fade-in space-y-8">
      <div>
        <h1 className="text-4xl font-extrabold text-[#101021]">Mi Perfil</h1>
        <p className="mt-2 text-lg text-[#101021]/70">Gestiona tu información personal, logros y preferencias.</p>
      </div>
      
      <div className="border-b border-[#101021]/10">
        <TabButton tabId="personal" label="Datos Personales" />
        <TabButton tabId="account" label="Ajustes de Cuenta" />
        <TabButton tabId="achievements" label="Historial de Logros" />
        <TabButton tabId="certs" label="Certificaciones" />
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-[#101021]/10 min-h-[400px]">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ProfilePage;
