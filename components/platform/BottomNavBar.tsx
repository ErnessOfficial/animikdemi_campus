import React from 'react';
import type { View } from '../../App';

interface BottomNavBarProps {
  activeView: View;
  onNavigate: (view: View) => void;
}

const BottomNavBar: React.FC<BottomNavBarProps> = ({ activeView, onNavigate }) => {
  const items = [
    { icon: 'fa-home', label: 'Inicio', view: 'dashboard' as View },
    { icon: 'fa-book', label: 'Explorar', view: 'catalog' as View },
    { icon: 'fa-graduation-cap', label: 'Aprendizaje', view: 'my-courses' as View },
    { icon: 'fa-folder-open', label: 'Premium', view: 'resources' as View },
    { icon: 'fa-user', label: 'Perfil', view: 'profile' as View }
  ];

  const isTabActive = (view: View) => {
    if (view === 'dashboard' && activeView === 'dashboard') return true;
    if (view === 'catalog' && activeView === 'catalog') return true;
    if (view === 'my-courses' && activeView === 'my-courses') return true;
    if (view === 'resources' && (activeView === 'resources' || activeView.startsWith('resources-'))) return true;
    if (view === 'profile' && (activeView === 'profile' || activeView.startsWith('profile-'))) return true;
    return false;
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-[#101021]/10 z-40 shadow-lg px-2">
      <div className="flex justify-around items-center h-16">
        {items.map((item) => {
          const active = isTabActive(item.view);
          return (
            <button
              key={item.view}
              onClick={() => onNavigate(item.view)}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-all duration-200 ${
                active ? 'text-[#6e4380] font-bold' : 'text-[#101021]/50 hover:text-[#101021]/80'
              }`}
            >
              <div className={`p-1 rounded-lg transition-transform duration-200 ${active ? 'scale-110' : ''}`}>
                <i className={`fas ${item.icon} text-lg`}></i>
              </div>
              <span className="text-[10px] tracking-wide mt-0.5">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavBar;
