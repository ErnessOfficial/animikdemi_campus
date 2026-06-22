import React from 'react';
import type { View } from '../../App';

interface FooterProps {
  onNavigate: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="mt-auto w-full bg-[#f8fafc] border-t border-[#101021]/10 px-4 py-8 sm:px-6 lg:px-8 text-xs sm:text-sm text-[#101021]/60 rounded-xl shadow-sm">
      {/* Top Section: Logos, Links, Disclaimer */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[#101021]/10">
        
        {/* Left Column: Logos & Slogan (Spans 4 columns) */}
        <div className="md:col-span-4 flex flex-col items-center md:items-start space-y-4">
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
            <img 
              src="https://res.cloudinary.com/djybwowo6/image/upload/v1781974305/animikroNEWnofondo_rngry0.png" 
              alt="AnImiKro Logo" 
              className="h-10 sm:h-12 w-auto object-contain hover:opacity-80 transition"
            />
            <img 
              src="https://res.cloudinary.com/djybwowo6/image/upload/v1772859581/logogroup_f2ou5u.png" 
              alt="Group Logo" 
              className="h-8 sm:h-10 w-auto object-contain hover:opacity-80 transition"
            />
          </div>
          <p className="w-full text-center md:text-left text-[#101021]/70 font-semibold tracking-wide text-xs">
            “Kind Intelligence - Trusted Technology”
          </p>
        </div>

        {/* Center Column: Navigation Links (Spans 4 columns) */}
        <div className="md:col-span-4 flex flex-col items-center md:items-start">
          <h4 className="font-bold text-[#101021] mb-3 text-sm tracking-wide">Enlaces de interés</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 w-full text-center md:text-left">
            <button 
              onClick={() => onNavigate('medical-disclaimer')} 
              className="hover:text-[#24668e] text-left transition duration-200"
            >
              Medical Disclaimer
            </button>
            <button 
              onClick={() => onNavigate('privacy-policy')} 
              className="hover:text-[#24668e] text-left transition duration-200"
            >
              Política de Privacidad
            </button>
            <button 
              onClick={() => onNavigate('cookie-policy')} 
              className="hover:text-[#24668e] text-left transition duration-200"
            >
              Política de Cookies
            </button>
            <button 
              onClick={() => onNavigate('terms-conditions')} 
              className="hover:text-[#24668e] text-left transition duration-200"
            >
              Términos y Condiciones
            </button>
            <a 
              href="https://www.animikind.com/contact/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#24668e] text-left transition duration-200"
            >
              Contáctanos <i className="fas fa-external-link-alt text-[10px] ml-0.5"></i>
            </a>
            <a 
              href="https://www.animikind.com/about/origins/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#24668e] text-left transition duration-200"
            >
              Sobre Nosotros <i className="fas fa-external-link-alt text-[10px] ml-0.5"></i>
            </a>
          </div>
        </div>

        {/* Right Column: AI Warning/Disclaimer (Spans 4 columns) */}
        <div className="md:col-span-4 bg-[#6e4380]/5 rounded-xl p-4 border border-[#6e4380]/10 flex flex-col justify-start space-y-2">
          <div className="flex items-center gap-2 text-[#6e4380] font-bold text-xs uppercase tracking-wider">
            <i className="fas fa-triangle-exclamation text-sm"></i>
            <span>Aviso de no sustitución</span>
          </div>
          <p className="text-xs text-[#101021]/80 leading-relaxed">
            La Inteligencia Artificial no es un psicólogo, terapeuta ni sustituto de atención médica profesional. Si necesitas atención para tu salud mental, acude a un centro de salud o llama a las líneas de ayuda habilitadas para dar soporte en tu país.
          </p>
        </div>

      </div>

      {/* Bottom Section: Copyright, Contact Email, Visit Link, Social Icons */}
      <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 flex-wrap text-xs">
        
        {/* Left side: Copyright & Email */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
          <span>copyright © 2026 AnimiKind Ltd</span>
          <span className="hidden sm:inline text-[#101021]/20">|</span>
          <a href="mailto:hello@animikind.com" className="hover:text-[#6e4380] transition font-medium">
            <i className="far fa-envelope mr-1.5"></i>hello@animikind.com
          </a>
        </div>

        {/* Center/Right: Social & Visit link */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <a 
            href="https://www.animikind.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#6e4380] transition font-medium"
          >
            Visita: <span className="underline">www.animikind.com</span>
          </a>
          
          <div className="flex items-center space-x-4 text-base">
            <a 
              href="https://www.facebook.com/animikindecosystem" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook" 
              className="text-[#101021]/60 hover:text-[#1877f2] transition duration-200"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a 
              href="https://www.instagram.com/animikind" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram" 
              className="text-[#101021]/60 hover:text-[#c13584] transition duration-200"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a 
              href="https://www.linkedin.com/ernesto-mendoza-animikind" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn" 
              className="text-[#101021]/60 hover:text-[#0a66c2] transition duration-200"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
