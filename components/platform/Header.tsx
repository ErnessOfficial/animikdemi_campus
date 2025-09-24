import React from 'react';
import type { User } from '../../types';

interface HeaderProps {
  user: User;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header className="bg-white shadow-sm p-4 flex items-center justify-between flex-shrink-0 z-10 border-b border-[#101021]/10">
      {/* Search Bar */}
      <div className="relative w-full max-w-md">
        <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-[#101021]/40"></i>
        <input 
          type="text" 
          placeholder="Buscar cursos, recursos..."
          className="w-full bg-[#f0f2f5] rounded-full py-2 pl-10 pr-4 border border-transparent focus:bg-white focus:border-[#6e4380] focus:ring-1 focus:ring-[#6e4380] transition"
        />
      </div>

      {/* User Area */}
      <div className="flex items-center space-x-6">
        <button className="text-[#101021]/60 hover:text-[#24668e] transition">
          <i className="fas fa-bell text-xl"></i>
        </button>
        <div className="flex items-center space-x-3">
          <img src={user.avatarUrl} alt={user.name} className="w-10 h-10 rounded-full object-cover border-2 border-[#24668e]" />
          <div>
            <span className="font-semibold text-[#101021]">{user.name}</span>
          </div>
          <button className="text-[#101021]/60 hover:text-[#101021]">
             <i className="fas fa-chevron-down text-xs"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;