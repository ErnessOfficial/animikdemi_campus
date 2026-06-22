import React from 'react';
import type { View } from '../../App';
import { assetPath } from '../../utils/paths';

interface FooterProps {
  onNavigate: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="mt-auto w-full bg-white border border-[#101021]/10 rounded-2xl shadow-md p-6 sm:p-8 text-[10px] sm:text-[12px] text-[#101021]/70 tracking-wide font-sans">

      {/* Top Banner: Split gradient bar with centered circular logo badge */}
      <div className="flex items-center justify-between w-full mb-10 relative">
        <div className="flex-1 h-[6px] bg-gradient-to-r from-[#6e4380] to-[#24668e] rounded-full shadow-[0_2px_4px_rgba(110,67,128,0.25)]"></div>
        <div className="mx-4 sm:mx-6 flex-shrink-0 z-10 -mt-10 sm:-mt-12">
          <img
            src={assetPath('images/footer1.png')}
            alt="AnimiKro Micro-Learning"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain rounded-full bg-white shadow-lg p-1 border border-[#101021]/5 hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex-1 h-[6px] bg-gradient-to-r from-[#6e4380] to-[#24668e] rounded-full shadow-[0_2px_4px_rgba(36,102,142,0.25)]"></div>
      </div>

      {/* Main Content Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

        {/* LEFT COLUMN: Links, separator, contact info & copyright (Spans 5 columns on desktop) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">

          {/* Inner Grid for Link Columns */}
          <div className="grid grid-cols-2 gap-6">

            {/* Col 1: Te Puede Interesar */}
            <div className="flex flex-col space-y-3">
              <h4 className="font-bold text-[#101021] text-[10px] sm:text-[12px] uppercase tracking-wider mb-2">
                Te Puede Interesar
              </h4>
              <div className="flex flex-col space-y-2 text-[#101021]/80">
                <a
                  href="https://www.animikind.com/components/animikdemi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#24668e] transition duration-200 block hover:translate-x-0.5 transform"
                >
                  Animikdemi
                </a>
                <a
                  href="https://www.animikind.es/about-thekindblog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#24668e] transition duration-200 block hover:translate-x-0.5 transform"
                >
                  The KindBlog / Artículos
                </a>
                <a
                  href="https://www.animikind.com/ecosystem/unified-safeguarding/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#24668e] transition duration-200 block hover:translate-x-0.5 transform"
                >
                  Bienestar Emocional Escolar
                </a>
                <a
                  href="https://www.animikind.com/resources/key-topics/#video-presentations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#24668e] transition duration-200 block hover:translate-x-0.5 transform"
                >
                  Videos
                </a>
                <a
                  href="https://www.animikind.com/resources/key-topics/#thematic-infographics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#24668e] transition duration-200 block hover:translate-x-0.5 transform"
                >
                  Infografías y Otros Recursos
                </a>
                <a
                  href="https://animikind-resources.vercel.app/?lang=es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#24668e] transition duration-200 block hover:translate-x-0.5 transform"
                >
                  The Kind-Kit
                </a>
                <a
                  href="https://www.animikind.com/contact/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#6e4380] transition duration-200 block font-bold text-[#101021] hover:translate-x-0.5 transform"
                >
                  Contáctanos <i className="fas fa-external-link-alt text-[8px] sm:text-[10px] ml-0.5"></i>
                </a>
              </div>
            </div>

            {/* Col 2: Empresa */}
            <div className="flex flex-col space-y-3">
              <h4 className="font-bold text-[#101021] text-[10px] sm:text-[12px] uppercase tracking-wider mb-2">
                Empresa
              </h4>
              <div className="flex flex-col space-y-2 text-[#101021]/80">
                <button
                  onClick={() => onNavigate('medical-disclaimer')}
                  className="text-left hover:text-[#24668e] transition duration-200 block hover:translate-x-0.5 transform"
                >
                  Medical Disclaimer
                </button>
                <button
                  onClick={() => onNavigate('cookie-policy')}
                  className="text-left hover:text-[#24668e] transition duration-200 block hover:translate-x-0.5 transform"
                >
                  Política de Cookies
                </button>
                <button
                  onClick={() => onNavigate('privacy-policy')}
                  className="text-left hover:text-[#24668e] transition duration-200 block hover:translate-x-0.5 transform"
                >
                  Política de Privacidad
                </button>
                <button
                  onClick={() => onNavigate('terms-conditions')}
                  className="text-left hover:text-[#24668e] transition duration-200 block hover:translate-x-0.5 transform"
                >
                  Términos y Condiciones
                </button>
                <a
                  href="https://www.animikind.com/about/cpd-accreditation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#24668e] transition duration-200 block hover:translate-x-0.5 transform"
                >
                  Acreditación CPD
                </a>
                <a
                  href="https://www.animikind.com/about/social-focusing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#24668e] transition duration-200 block hover:translate-x-0.5 transform"
                >
                  Enfoque Social
                </a>
                <a
                  href="https://www.animikind.com/about/origins/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#6e4380] transition duration-200 block font-bold text-[#101021] hover:translate-x-0.5 transform"
                >
                  Sobre Nosotros <i className="fas fa-external-link-alt text-[8px] sm:text-[10px] ml-0.5"></i>
                </a>
              </div>
            </div>

          </div>

          {/* Left Side Footer Footer (Email, Social, Copyright) */}
          <div className="flex flex-col space-y-4">

            {/* Rounded horizontal line divider */}
            <div className="h-[4px] bg-gray-200 rounded-full w-full"></div>

            {/* Email & Social Icons Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <a
                href="mailto:hello@animikind.com"
                className="hover:text-[#6e4380] transition font-semibold text-[10px] sm:text-[12px] text-[#101021]/80"
              >
                <i className="far fa-envelope mr-2 text-[#6e4380] text-sm"></i>hello@animikind.com
              </a>

              <div className="flex items-center space-x-3">
                <a
                  href="https://www.facebook.com/animikindecosystem"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#1877f2] hover:text-white transition duration-300 shadow-sm text-[10px] sm:text-[12px]"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.instagram.com/animikind"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#c13584] hover:text-white transition duration-300 shadow-sm text-[10px] sm:text-[12px]"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/ernesto-mendoza-animikind"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#0a66c2] hover:text-white transition duration-300 shadow-sm text-[10px] sm:text-[12px]"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            {/* Copyright block */}
            <p className="text-[#24668e] font-semibold text-[10px] sm:text-[12px] text-center sm:text-left mt-2">
              © 2026 AnimiKind Ltd . Todos los Derechos Reservados
            </p>

          </div>

        </div>

        {/* RIGHT COLUMN: Disclaimer box, brand logos, slogan & ecosystem text (Spans 7 columns on desktop) */}
        <div className="lg:col-span-7 flex flex-col space-y-6">

          {/* Disclaimer Box */}
          <div className="bg-[#f0f2f5] border border-[#101021]/5 rounded-2xl p-5 shadow-sm text-center">
            <h5 className="font-extrabold text-[#6e4380] text-[10px] sm:text-[12px] tracking-wider uppercase mb-2">
              Aviso de no sustitución
            </h5>
            <p className="text-[10px] sm:text-[12px] text-[#101021]/90 leading-relaxed font-normal">
              La Inteligencia Artificial no es un psicólogo, terapeuta ni sustituto de atención médica profesional. Si necesitas atención para tu salud mental, acude a un centro de salud o llama a las líneas de ayuda habilitadas para dar soporte en tu país.
            </p>
          </div>

          {/* Ecosystem Logo Array */}
          <div className="flex flex-col items-center space-y-4">
            <img
              src="https://res.cloudinary.com/djybwowo6/image/upload/v1782157346/AVISO_DE_NO_SUSTITUCI%C3%93N_La_Inteligencia_Artificial_no_es_un_psic%C3%B3logo_terapeuta_ni_sustituto_de_atenci%C3%B3n_m%C3%A9dica_profesional._Si_necesitas_atenci%C3%B3n_para_tu_salud_mental_acude_a_un_centro_de_salud_m4fgxx.png"
              alt="AnimiKind Ecosystem Logos"
              className="w-full max-w-lg object-contain h-auto hover:scale-[1.02] transition-transform duration-300"
            />
            <p className="text-center font-bold text-[#101021]/80 text-[10px] sm:text-[12px] tracking-wide">
              “El Primer Ecosistema Hibrido Proactivo de Bienestar Escolar Implusado por Inteligencia Artificial Emocional”
            </p>
          </div>

          {/* Right Side Divider & Visit links */}
          <div className="flex flex-col items-center space-y-3 pt-2">

            {/* Rounded horizontal line divider */}
            <div className="h-[4px] bg-gray-200 rounded-full w-full mb-2"></div>

            <p className="text-center font-extrabold text-[#24668e] text-[8px] sm:text-[10px] tracking-wider uppercase">
              Conoce más sobre nuestro ecosistema de bienestar emocional
            </p>

            <a
              href="https://www.animikind.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center font-bold text-[#101021]/90 hover:text-[#6e4380] text-[12px] sm:text-[14px] tracking-wide uppercase transition duration-200 hover:scale-105 transform inline-block"
            >
              Visita: <span className="underline">www.animikind.com</span>
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
