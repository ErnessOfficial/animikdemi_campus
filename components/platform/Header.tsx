import React, { useState, useEffect, useRef } from 'react';
import type { User, UserProgress } from '../../types';
import type { View } from '../../App';
import { computeGamification } from '../../utils/gamification';
import { courseCatalog } from '../../constants/platformData';

interface HeaderProps {
  user: User;
  progress?: UserProgress;
  onNavigate: (view: View) => void;
  onLogout: () => void;
}

interface NotificationItem {
  id: string;
  icon: string;
  colorClass: string;
  text: string;
  time: string;
  view: View;
}

const Header: React.FC<HeaderProps> = ({ user, progress, onNavigate, onLogout }) => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isNotifDropdownOpen, setIsNotifDropdownOpen] = useState(false);
  
  const userMenuRef = useRef<HTMLDivElement>(null);
  const notifMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdowns if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserDropdownOpen(false);
      }
      if (notifMenuRef.current && !notifMenuRef.current.contains(event.target as Node)) {
        setIsNotifDropdownOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Compute active notifications depending on user preferences
  const activeNotifications: NotificationItem[] = [];
  
  if (user.notifyCourses !== false) {
    activeNotifications.push({
      id: 'notif-courses',
      icon: 'fa-book',
      colorClass: 'bg-[#24668e]/10 text-[#24668e]',
      text: '¡Nuevo curso de Autoconocimiento ya disponible!',
      time: 'Hace 2 horas',
      view: 'catalog',
    });
  }
  
  if (user.notifyCommunity !== false) {
    activeNotifications.push({
      id: 'notif-community',
      icon: 'fa-seedling',
      colorClass: 'bg-[#6e4380]/10 text-[#6e4380]',
      text: 'Un compañero reaccionó a tu Árbol de Reflexión.',
      time: 'Hace 5 horas',
      view: 'community',
    });
  }
  
  if (user.notifyProgress === true) {
    activeNotifications.push({
      id: 'notif-progress',
      icon: 'fa-graduation-cap',
      colorClass: 'bg-yellow-500/10 text-yellow-600',
      text: 'Recordatorio: Tienes un curso sin completar.',
      time: 'Hace 1 día',
      view: 'my-courses',
    });
  }

  const handleNotificationClick = (view: View) => {
    onNavigate(view);
    setIsNotifDropdownOpen(false);
  };

  const handleProfileOptionClick = (view: View) => {
    onNavigate(view);
    setIsUserDropdownOpen(false);
  };

  const stats = progress ? computeGamification(progress, courseCatalog) : null;
  const levelTitle = stats ? stats.levelTitle : 'Aprendiz de Bienestar';

  return (
    <header className="bg-white shadow-sm px-4 py-3 sm:px-6 flex flex-col gap-4 sm:gap-3 sm:flex-row sm:items-center sm:justify-between flex-shrink-0 z-20 border-b border-[#101021]/10">
      
      {/* Left Search Bar */}
      <div className="relative w-full sm:max-w-md">
        <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-[#101021]/40 text-sm"></i>
        <input
          type="text"
          placeholder="Buscar cursos, recursos..."
          className="w-full bg-[#f0f2f5] rounded-full py-2 pl-10 pr-4 border border-transparent focus:bg-white focus:border-[#6e4380] focus:ring-1 focus:ring-[#6e4380] transition text-xs sm:text-sm"
        />
      </div>

      {/* Right Controls Container */}
      <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4">
        
        {/* Notifications Icon with Dropdown */}
        <div className="relative" ref={notifMenuRef}>
          <button 
            onClick={() => {
              setIsNotifDropdownOpen(prev => !prev);
              setIsUserDropdownOpen(false);
            }}
            className="relative p-1.5 rounded-full text-[#101021]/60 hover:text-[#24668e] hover:bg-[#101021]/5 transition" 
            aria-label="Notificaciones"
          >
            <i className="fas fa-bell text-xl sm:text-2xl"></i>
            {activeNotifications.length > 0 && (
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-extrabold text-white animate-pulse">
                {activeNotifications.length}
              </span>
            )}
          </button>

          {/* Notifications Dropdown */}
          {isNotifDropdownOpen && (
            <div className="absolute right-0 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 mt-2 w-72 sm:w-80 bg-white border border-[#101021]/10 rounded-xl shadow-xl z-50 overflow-hidden animate-fade-in">
              <div className="bg-slate-50 px-4 py-2.5 border-b border-[#101021]/5 flex items-center justify-between">
                <span className="font-bold text-xs sm:text-sm text-[#101021]">Notificaciones</span>
                {activeNotifications.length > 0 && (
                  <span className="text-[10px] bg-[#24668e]/10 text-[#24668e] font-semibold px-2 py-0.5 rounded-full">
                    {activeNotifications.length} nuevas
                  </span>
                )}
              </div>
              
              <div className="max-h-64 overflow-y-auto divide-y divide-[#101021]/5">
                {activeNotifications.length > 0 ? (
                  activeNotifications.map(notif => (
                    <button
                      key={notif.id}
                      onClick={() => handleNotificationClick(notif.view)}
                      className="w-full text-left p-3 hover:bg-gray-50 flex items-start gap-3 transition"
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${notif.colorClass}`}>
                        <i className={`fas ${notif.icon} text-sm`}></i>
                      </div>
                      <div className="flex-1 space-y-0.5">
                        <p className="text-[10px] sm:text-xs text-[#101021]/90 font-medium leading-snug">
                          {notif.text}
                        </p>
                        <span className="block text-[8px] sm:text-[9px] text-[#101021]/45">
                          {notif.time}
                        </span>
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="p-5 text-center flex flex-col items-center justify-center space-y-2">
                    <i className="far fa-bell-slash text-xl text-[#101021]/30"></i>
                    <p className="text-[10px] sm:text-xs text-[#101021]/50">
                      No tienes notificaciones activas. Actívalas en tus ajustes de cuenta.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* User Account Avatar & Dropdown */}
        <div className="relative" ref={userMenuRef}>
          <div 
            onClick={() => {
              setIsUserDropdownOpen(prev => !prev);
              setIsNotifDropdownOpen(false);
            }}
            className="flex items-center space-x-3 cursor-pointer p-1.5 rounded-full hover:bg-[#101021]/5 transition select-none"
          >
            <img 
              src={user.avatarUrl} 
              alt={user.name} 
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-[#24668e]" 
            />
            <div className="leading-tight hidden sm:block">
              <span className="block text-xs sm:text-sm font-semibold text-[#101021]">{user.name}</span>
              <span className="block text-[10px] text-[#101021]/50 truncate max-w-[120px] font-medium" title={levelTitle}>{levelTitle}</span>
            </div>
            <button className="text-[#101021]/50 hover:text-[#101021] p-0.5" aria-label="Menú de usuario">
               <i className={`fas fa-chevron-down text-[10px] transition-transform duration-200 ${isUserDropdownOpen ? 'rotate-180 text-[#6e4380]' : ''}`}></i>
            </button>
          </div>

          {/* User Account Dropdown Menu */}
          {isUserDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 sm:w-52 bg-white border border-[#101021]/10 rounded-xl shadow-xl py-1.5 z-50 overflow-hidden animate-fade-in">
              <button
                onClick={() => handleProfileOptionClick('profile')}
                className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2.5 transition text-[10px] sm:text-xs text-[#101021]/80 font-medium"
              >
                <i className="fas fa-id-card text-sm text-[#101021]/40 w-4 text-center"></i>
                <span>Mis datos</span>
              </button>
              
              <button
                onClick={() => handleProfileOptionClick('profile-account')}
                className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2.5 transition text-[10px] sm:text-xs text-[#101021]/80 font-medium"
              >
                <i className="fas fa-cog text-sm text-[#101021]/40 w-4 text-center"></i>
                <span>Ajustes de cuenta</span>
              </button>
              
              <button
                onClick={() => handleProfileOptionClick('profile-certs')}
                className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2.5 transition text-[10px] sm:text-xs text-[#101021]/80 font-medium"
              >
                <i className="fas fa-graduation-cap text-sm text-[#101021]/40 w-4 text-center"></i>
                <span>Certificaciones</span>
              </button>
              
              <div className="border-t border-[#101021]/5 my-1.5"></div>
              
              <button
                onClick={() => {
                  setIsUserDropdownOpen(false);
                  onLogout();
                }}
                className="w-full text-left px-4 py-2 hover:bg-[#dd566f]/5 flex items-center gap-2.5 transition text-[10px] sm:text-xs text-[#dd566f] font-semibold"
              >
                <i className="fas fa-sign-out-alt text-sm text-[#dd566f]/70 w-4 text-center"></i>
                <span>Cerrar sesión</span>
              </button>
            </div>
          )}
        </div>

      </div>
    </header>
  );
};

export default Header;
