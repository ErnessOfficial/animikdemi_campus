import React, { useState, useEffect } from 'react';
import type { User, UserProgress } from '../types';
import { mockAchievements, courseCatalog } from '../constants/platformData';
import { computeGamification, BADGE_CONFIGS } from '../utils/gamification';
import AchievementBadge from '../components/profile/AchievementBadge';
import CertificateCard from '../components/profile/CertificateCard';

interface ProfilePageProps {
  user: User;
  progress: UserProgress;
  onUpdateUser: (updatedUser: Partial<User>) => void;
  initialTab?: ProfileTab;
}

type ProfileTab = 'personal' | 'account' | 'certs' | 'badges';

const ALL_SYSTEM_BADGES = Object.entries(BADGE_CONFIGS).map(([id, config]) => ({
  id,
  label: config.label,
  icon: config.icon,
  description: config.description,
  rarity: config.rarity,
}));


const ProfilePage: React.FC<ProfilePageProps> = ({ user, progress, onUpdateUser, initialTab = 'personal' }) => {
  const [activeTab, setActiveTab] = useState<ProfileTab>(initialTab);
  const [selectedBadge, setSelectedBadge] = useState<any | null>(null);
  const [formData, setFormData] = useState({
    name: user.name,
    avatarUrl: user.avatarUrl,
    bio: user.bio || '',
  });
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

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
              <button type="button" className="w-full text-center bg-[#101021]/5 text-[#101021] font-semibold rounded-xl hover:bg-[#101021]/10 transition touch-target sm:min-h-0 sm:py-2">
                Cambiar Foto
              </button>
            </div>
            <div className="md:col-span-2 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-[#101021] mb-2">Nombre Completo</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="w-full bg-white rounded-xl py-3 px-4 border-2 border-[#101021]/20 focus:border-[#6e4380] focus:ring-1 focus:ring-[#6e4380] transition text-sm" />
              </div>
              <div>
                <label htmlFor="bio" className="block text-sm font-bold text-[#101021] mb-2">Biografía Corta</label>
                <textarea id="bio" name="bio" rows={4} value={formData.bio} onChange={handleInputChange} className="w-full bg-white rounded-xl py-3 px-4 border-2 border-[#101021]/20 focus:border-[#6e4380] focus:ring-1 focus:ring-[#6e4380] transition text-sm" placeholder="Cuéntanos un poco sobre ti..."></textarea>
              </div>
              {isDirty && (
                <div className="flex flex-col sm:flex-row justify-end items-center gap-3 pt-4 border-t border-[#101021]/10">
                  <button type="button" onClick={handleCancel} className="w-full sm:w-auto text-[#101021]/80 font-semibold rounded-xl hover:bg-[#101021]/10 transition touch-target sm:min-h-0 sm:py-2 sm:px-6">Cancelar</button>
                  <button type="submit" className="w-full sm:w-auto bg-[#24668e] text-white font-bold rounded-xl hover:bg-[#1a4a69] transition shadow touch-target sm:min-h-0 sm:py-2 sm:px-6">Guardar Cambios</button>
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
                    <input type="email" id="email" value="alex.learner@animikdemi.com" readOnly className="w-full bg-[#f0f2f5] text-[#101021]/60 rounded-xl py-3 px-4 border-2 border-[#101021]/20 cursor-not-allowed text-sm" />
                </div>
                 <div className="flex flex-col items-start gap-2">
                    <label className="block text-sm font-bold text-[#101021]">Contraseña</label>
                    <button className="text-[#24668e] font-semibold hover:underline touch-target sm:min-h-0 sm:py-1">Cambiar contraseña</button>
                </div>
                <div className="pt-4 border-t border-[#101021]/10">
                    <h3 className="text-lg font-bold text-[#101021] mb-4">Preferencias de Notificación</h3>
                    <div className="space-y-4 divide-y divide-[#101021]/5">
                        <label className="flex items-center justify-between py-2 cursor-pointer" htmlFor="notify-courses">
                          <span className="text-[#101021]/90 text-sm">Nuevos cursos y eventos</span>
                          <input 
                            id="notify-courses" 
                            name="notifyCourses" 
                            type="checkbox" 
                            className="toggle-checkbox" 
                            checked={user.notifyCourses !== false} 
                            onChange={(e) => onUpdateUser({ notifyCourses: e.target.checked })}
                          />
                        </label>
                        <label className="flex items-center justify-between py-3 cursor-pointer" htmlFor="notify-community">
                          <span className="text-[#101021]/90 text-sm">Actividad en la comunidad</span>
                          <input 
                            id="notify-community" 
                            name="notifyCommunity" 
                            type="checkbox" 
                            className="toggle-checkbox" 
                            checked={user.notifyCommunity !== false} 
                            onChange={(e) => onUpdateUser({ notifyCommunity: e.target.checked })}
                          />
                        </label>
                        <label className="flex items-center justify-between py-3 cursor-pointer" htmlFor="notify-progress">
                          <span className="text-[#101021]/90 text-sm">Recordatorios de progreso</span>
                          <input 
                            id="notify-progress" 
                            name="notifyProgress" 
                            type="checkbox" 
                            className="toggle-checkbox" 
                            checked={user.notifyProgress === true} 
                            onChange={(e) => onUpdateUser({ notifyProgress: e.target.checked })}
                          />
                        </label>
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
      case 'badges':
        const stats = computeGamification(progress, courseCatalog);
        const unlockedCount = stats.badges.filter(b => ALL_SYSTEM_BADGES.some(sb => sb.id === b.id)).length;
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-[#101021]">Colección de Insignias</h3>
              <span className="text-xs bg-[#6e4380]/10 text-[#6e4380] font-bold px-3 py-1.5 rounded-full">
                Obtenidas: {unlockedCount} de {ALL_SYSTEM_BADGES.length}
              </span>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {ALL_SYSTEM_BADGES.map(badge => {
                const unlocked = stats.badges.find(b => b.id === badge.id);
                const dateText = unlocked
                  ? new Date(unlocked.unlockedAt).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })
                  : null;
                  
                return (
                  <div
                    key={badge.id}
                    onClick={() => setSelectedBadge({ ...badge, unlockedAt: dateText })}
                    className={`p-4 rounded-xl border flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 ${
                      unlocked
                        ? 'bg-white border-[#6e4380]/20 shadow-sm hover:shadow-md hover:scale-[1.03] text-slate-800'
                        : 'bg-slate-50 border-slate-200 opacity-60 hover:opacity-80 text-slate-400'
                    }`}
                  >
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 shadow-inner overflow-hidden ${
                      unlocked
                        ? 'bg-[#6e4380]/10 text-[#6e4380]'
                        : 'bg-slate-200 text-slate-400'
                    }`}>
                      {badge.icon.startsWith('http') ? (
                        <img 
                          src={badge.icon} 
                          alt={badge.label} 
                          className={`w-10 h-10 object-contain transition-all duration-300 ${unlocked ? '' : 'grayscale opacity-40'}`} 
                        />
                      ) : (
                        <i className={`fas ${badge.icon} text-lg`}></i>
                      )}
                    </div>
                    <span className="text-xs font-bold truncate w-full">{badge.label}</span>
                    <span className="text-[9px] text-slate-400 font-semibold mt-1">
                      {unlocked ? 'Desbloqueado' : 'Bloqueado'}
                    </span>
                  </div>
                );
              })}
            </div>
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

  const getRarityStyle = (rarity?: string) => {
    switch (rarity) {
      case 'Mítico': return 'from-purple-600 to-pink-600 text-white';
      case 'Legendario': return 'from-amber-500 via-orange-500 to-yellow-500 text-white';
      case 'Épico': return 'from-indigo-500 to-purple-500 text-white';
      case 'Poco común': return 'from-blue-500 to-cyan-500 text-white';
      default: return 'from-teal-500 to-emerald-500 text-white';
    }
  };

  return (
    <div className="max-w-6xl mx-auto animate-fade-in space-y-8">
      <div>
        <h1 className="text-4xl font-extrabold text-[#101021]">Mi Perfil</h1>
        <p className="mt-2 text-lg text-[#101021]/70">Gestiona tu información personal, logros y preferencias.</p>
      </div>
      
      <div className="border-b border-[#101021]/10 flex overflow-x-auto hide-scrollbar">
        <TabButton tabId="personal" label="Datos Personales" />
        <TabButton tabId="account" label="Ajustes de Cuenta" />
        <TabButton tabId="certs" label="Certificaciones" />
        <TabButton tabId="badges" label="Insignias" />
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-[#101021]/10 min-h-[400px]">
        {renderTabContent()}
      </div>

      {/* Badge Detail Modal */}
      {selectedBadge && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#101021]/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-2xl p-6 max-w-sm w-full text-center relative">
            <button
              onClick={() => setSelectedBadge(null)}
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 p-2.5 touch-target flex items-center justify-center rounded-full hover:bg-slate-100 transition"
              aria-label="Cerrar"
            >
              <i className="fas fa-times text-lg"></i>
            </button>
            <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 border ${selectedBadge.unlockedAt ? 'bg-[#6e4380]/10 border-[#6e4380]/20' : 'bg-slate-200 border-slate-300'}`}>
              {selectedBadge.icon.startsWith('http') ? (
                <img 
                  src={selectedBadge.icon} 
                  alt={selectedBadge.label} 
                  className={`w-20 h-20 object-contain ${selectedBadge.unlockedAt ? '' : 'grayscale opacity-40'}`} 
                />
              ) : (
                <i className={`fas ${selectedBadge.icon} text-3xl`}></i>
              )}
            </div>
            <h4 className="text-lg font-bold text-slate-800 mb-1">{selectedBadge.label}</h4>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r ${getRarityStyle(selectedBadge.rarity)} inline-block mb-3`}>
              {selectedBadge.rarity}
            </span>
            <p className="text-sm text-slate-600 mb-4 leading-relaxed">{selectedBadge.description}</p>
            <div className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              {selectedBadge.unlockedAt ? (
                <span>Obtenida el: <strong>{selectedBadge.unlockedAt}</strong></span>
              ) : (
                <span className="flex items-center justify-center gap-1"><i className="fas fa-lock"></i> Aún bloqueada. ¡Sigue adelante!</span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
