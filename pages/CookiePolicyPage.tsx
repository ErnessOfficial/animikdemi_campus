import React from 'react';

interface CookiePolicyPageProps {
  onBack: () => void;
}

const CookiePolicyPage: React.FC<CookiePolicyPageProps> = ({ onBack }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-[#101021]/10 animate-fade-in my-6">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-[#6e4380] hover:text-[#4c1760] font-semibold transition mb-6 group text-sm"
      >
        <i className="fas fa-arrow-left transition-transform group-hover:-translate-x-1"></i> Volver
      </button>
      
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#101021]/10">
        <div className="w-10 h-10 bg-[#24668e]/10 text-[#24668e] flex items-center justify-center rounded-xl">
          <i className="fas fa-cookie-bite text-xl"></i>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#101021] tracking-tight">
          Política de Cookies
        </h1>
      </div>

      <div className="prose max-w-none text-[#101021]/80 space-y-4">
        <p className="font-semibold text-lg text-[#00385b]">
          Uso de Cookies y Tecnologías Similares
        </p>
        <p className="leading-relaxed">
          Esta subpágina está preparada para albergar el contenido correspondiente a la política de cookies de la plataforma. El contenido detallado será añadido próximamente.
        </p>
        
        <div className="bg-[#24668e]/5 border-l-4 border-[#24668e] p-4 rounded-r-lg mt-6">
          <p className="text-sm text-[#00385b] font-medium">
            <i className="fas fa-info-circle mr-2"></i> Gestión de Cookies
          </p>
          <p className="text-sm text-[#101021]/70 mt-1">
            Utilizamos cookies técnicas y de personalización esenciales para garantizar el correcto funcionamiento del campus y mejorar tu experiencia de usuario.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicyPage;
