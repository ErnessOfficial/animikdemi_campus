import React, { useState } from 'react';
import type { View } from '../../App';
import { assetPath } from '../../utils/paths';

const navItems: Array<{ icon: string; label: string; view: View }> = [
  { icon: 'fa-home', label: 'Dashboard', view: 'dashboard' },
  { icon: 'fa-book', label: 'Catálogo', view: 'catalog' },
  { icon: 'fa-folder-open', label: 'Recursos', view: 'resources' },
  { icon: 'fa-graduation-cap', label: 'Mis Cursos', view: 'my-courses' },
  { icon: 'fa-seedling', label: 'Kit Reflexivo', view: 'community' },
  { icon: 'fa-user', label: 'Perfil', view: 'profile' }
];

interface MobileNavProps {
  activeView: View;
  onNavigate: (view: View) => void;
  onLogout: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ activeView, onNavigate, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (view: View) => {
    onNavigate(view);
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden sticky top-0 z-30 bg-white shadow-sm border-b border-[#101021]/10">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-3">
          <img src={assetPath('images/logo_animikdemi.png')} alt="AnImiKdemi Logo" className="h-10 w-10 rounded-lg object-contain border border-[#101021]/10" />
          <div>
            <p className="text-sm font-semibold text-[#101021] leading-tight">AnImiKdemi Campus</p>
            <p className="text-xs text-[#101021]/60 leading-tight">Aprendizaje emocional</p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(prev => !prev)}
          className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#101021]/20 text-[#101021]"
          aria-label="Abrir menú de navegación"
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
        </button>
      </div>
      {isOpen && (
        <div className="border-t border-[#101021]/10 bg-white">
          <ul className="flex flex-col divide-y divide-[#101021]/10">
            {navItems.map(item => (
              <li key={item.view}>
                <button
                  onClick={() => handleNavigate(item.view)}
                  className={`w-full flex items-center gap-3 px-5 py-3 text-left ${
                    activeView === item.view
                      ? 'bg-[#6e4380]/10 text-[#6e4380] font-semibold'
                      : 'text-[#101021] hover:bg-[#101021]/5'
                  }`}
                >
                  <i className={`fas ${item.icon} w-5 text-center`}></i>
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onLogout();
                }}
                className="w-full flex items-center gap-3 px-5 py-3 text-left text-[#dd566f] hover:bg-[#dd566f]/10"
              >
                <i className="fas fa-sign-out-alt w-5 text-center"></i>
                <span>Cerrar sesión</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
