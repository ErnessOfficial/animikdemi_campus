import React from 'react';
import type { View } from '../../App';

interface SidebarProps {
  activeView: View;
  onNavigate: (view: View) => void;
  onLogout: () => void;
}

const NavItem: React.FC<{
  icon: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => (
  <li>
    <button 
      onClick={onClick}
      className={`w-full flex items-center space-x-4 px-6 py-3 text-left transition-colors duration-200 rounded-r-full ${
        isActive
          ? 'bg-[#6e4380]/10 text-[#6e4380] font-bold border-l-4 border-[#6e4380]'
          : 'text-[#101021]/70 hover:bg-[#101021]/5 hover:text-[#101021]'
      }`}
    >
      <i className={`fas ${icon} w-6 text-center text-lg`}></i>
      <span>{label}</span>
    </button>
  </li>
);

const Sidebar: React.FC<SidebarProps> = ({ activeView, onNavigate, onLogout }) => {
  return (
    <aside className="w-64 bg-white flex-shrink-0 flex flex-col border-r border-[#101021]/10">
      <div className="h-20 flex items-center justify-center border-b border-[#101021]/10">
        <img src="/images/logo_animikdemi.png" alt="AnImiKdemi Logo" className="h-12" />
      </div>
      <nav className="flex-grow pt-8">
        <ul className="space-y-3">
          <NavItem 
            icon="fa-home" 
            label="Dashboard" 
            isActive={activeView === 'dashboard'} 
            onClick={() => onNavigate('dashboard')} 
          />
          <NavItem 
            icon="fa-book" 
            label="Catálogo de Cursos" 
            isActive={activeView === 'catalog'} 
            onClick={() => onNavigate('catalog')} 
          />
          <NavItem 
            icon="fa-folder-open" 
            label="Recursos" 
            isActive={activeView === 'resources' || activeView.startsWith('resources-')}
            onClick={() => onNavigate('resources')} 
          />
          <NavItem 
            icon="fa-graduation-cap" 
            label="Mis Cursos" 
            isActive={activeView === 'my-courses'} 
            onClick={() => onNavigate('my-courses')} 
          />
          <NavItem 
            icon="fa-users" 
            label="Comunidad" 
            isActive={activeView === 'community'} 
            onClick={() => onNavigate('community')} 
          />
           <NavItem 
            icon="fa-user" 
            label="Mi Perfil" 
            isActive={activeView === 'profile'} 
            onClick={() => onNavigate('profile')} 
          />
        </ul>
      </nav>
      <div className="p-6 border-t border-[#101021]/10">
        <button 
          onClick={onLogout}
          className="w-full flex items-center space-x-4 px-6 py-3 text-left transition-colors duration-200 rounded-lg text-[#dd566f] hover:bg-[#dd566f]/10"
        >
          <i className="fas fa-sign-out-alt w-6 text-center text-lg"></i>
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
