import React from 'react';
import type { User } from '../../types';

interface HeaderProps {
  user: User;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header className="bg-white shadow-sm px-4 py-3 sm:px-6 flex flex-col gap-4 sm:gap-3 sm:flex-row sm:items-center sm:justify-between flex-shrink-0 z-10 border-b border-[#101021]/10">
      <div className="relative w-full sm:max-w-md">
        <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-[#101021]/40"></i>
        <input
          type="text"
          placeholder="Buscar cursos, recursos..."
          className="w-full bg-[#f0f2f5] rounded-full py-2 pl-10 pr-4 border border-transparent focus:bg-white focus:border-[#6e4380] focus:ring-1 focus:ring-[#6e4380] transition text-sm sm:text-base"
        />
      </div>
      <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4">
        <button className="text-[#101021]/60 hover:text-[#24668e] transition" aria-label="Notificaciones">
          <i className="fas fa-bell text-xl"></i>
        </button>
        <div className="flex items-center space-x-3">
          <img src={user.avatarUrl} alt={user.name} className="w-10 h-10 rounded-full object-cover border-2 border-[#24668e]" />
          <div className="leading-tight">
            <span className="block text-sm font-semibold text-[#101021]">{user.name}</span>
            <span className="block text-xs text-[#101021]/60">Aprendiz</span>
          </div>
          <button className="text-[#101021]/60 hover:text-[#101021]" aria-label="Menú de usuario">
             <i className="fas fa-chevron-down text-xs"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
