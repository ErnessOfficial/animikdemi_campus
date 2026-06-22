import React from 'react';

interface TermsConditionsPageProps {
  onBack: () => void;
}

const TermsConditionsPage: React.FC<TermsConditionsPageProps> = ({ onBack }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-[#101021]/10 animate-fade-in my-6">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-[#6e4380] hover:text-[#4c1760] font-semibold transition mb-6 group text-sm"
      >
        <i className="fas fa-arrow-left transition-transform group-hover:-translate-x-1"></i> Volver
      </button>
      
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#101021]/10">
        <div className="w-10 h-10 bg-[#6e4380]/10 text-[#6e4380] flex items-center justify-center rounded-xl">
          <i className="fas fa-file-contract text-xl"></i>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#101021] tracking-tight">
          Términos y Condiciones
        </h1>
      </div>

      <div className="prose max-w-none text-[#101021]/80 space-y-4">
        <p className="font-semibold text-lg text-[#00385b]">
          Condiciones de Uso del Campus
        </p>
        <p className="leading-relaxed">
          Esta subpágina está preparada para albergar el contenido correspondiente a los términos y condiciones de uso de la plataforma. El contenido detallado será añadido próximamente.
        </p>
        
        <div className="bg-[#6e4380]/5 border-l-4 border-[#6e4380] p-4 rounded-r-lg mt-6">
          <p className="text-sm text-[#4c1760] font-medium">
            <i className="fas fa-handshake mr-2"></i> Acuerdo de Usuario
          </p>
          <p className="text-sm text-[#101021]/70 mt-1">
            Al acceder y utilizar el campus virtual, aceptas cumplir con nuestras normas comunitarias y términos de servicio para fomentar un espacio seguro de aprendizaje.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsConditionsPage;
