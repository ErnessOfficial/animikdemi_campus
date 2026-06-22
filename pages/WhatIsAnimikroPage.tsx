import React, { useState } from 'react';
import { assetPath } from '../utils/paths';

// MethodologyCard component for collapsible explanation blocks below infographies
const MethodologyCard: React.FC<{ 
  title: string; 
  imageSrc: string; 
  onZoom: (src: string) => void; 
  children: React.ReactNode 
}> = ({ title, imageSrc, onZoom, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-[#101021]/10 rounded-2xl shadow-sm overflow-hidden p-4 sm:p-5 space-y-4 max-w-3xl mx-auto hover:shadow-md transition duration-300">
      {/* Infography Image Panel */}
      <div 
        onClick={() => onZoom(imageSrc)}
        className="w-full flex justify-center bg-[#f8fafc] rounded-xl p-3 border border-[#101021]/5 overflow-hidden cursor-zoom-in group relative"
      >
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-auto max-h-[300px] object-contain rounded-lg group-hover:scale-[1.01] transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-2">
          <i className="fas fa-search-plus text-base"></i> Ampliar infografía
        </div>
      </div>
      
      {/* Title & Accordion Trigger below the image */}
      <div className="flex flex-col space-y-2">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-base sm:text-lg font-bold text-[#00385b]">{title}</h3>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1.5 text-[11px] font-bold text-[#6e4380] hover:text-[#4c1760] transition-colors py-1 px-3 rounded-full bg-[#6e4380]/5 hover:bg-[#6e4380]/10 flex-shrink-0"
          >
            <span>{isOpen ? 'Ocultar explicación' : 'Leer explicación'}</span>
            <i className={`fas fa-chevron-down text-[9px] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
          </button>
        </div>

        {/* Collapsible Content block with smaller size to remain aesthetic */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-[500px] mt-2 opacity-100 animate-fade-in' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="pt-3 border-t border-[#101021]/5 text-xs sm:text-sm text-[#101021]/80 leading-relaxed space-y-2.5">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const WhatIsAnimikroPage: React.FC = () => {
  const [zoomSrc, setZoomSrc] = useState<string | null>(null);

  return (
    <div className="animate-fade-in space-y-10 max-w-5xl mx-auto pb-10">
      
      {/* 1. Top Centered Platform Logo Header */}
      <div className="flex flex-col items-center justify-center pt-2 pb-1">
        <img
          src="https://res.cloudinary.com/djybwowo6/image/upload/v1781974305/animikroNEWnofondo_rngry0.png"
          alt="AnimiKro AnImiKdemi Logo"
          className="h-20 sm:h-28 md:h-36 w-auto object-contain hover:scale-105 transition-transform duration-300 drop-shadow-sm cursor-zoom-in"
          onClick={() => setZoomSrc('https://res.cloudinary.com/djybwowo6/image/upload/v1781974305/animikroNEWnofondo_rngry0.png')}
        />
      </div>

      {/* Hero Section */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-[#101021]/10 flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
        <div className="w-28 h-28 sm:w-36 sm:h-36 flex-shrink-0 bg-[#6e4380]/5 rounded-2xl flex items-center justify-center p-3 border border-[#6e4380]/10 shadow-inner">
          <img
            src="https://res.cloudinary.com/djybwowo6/image/upload/v1781975254/iconoanimikroNEW_xuhue1.png"
            alt="Icono Animikro"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#101021] tracking-tight">
            ¿Qué es <span className="text-[#6e4380]">Animikro</span>?
          </h1>
          <p className="text-sm sm:text-base text-[#101021]/80 leading-relaxed">
            Animikro ofrece un catálogo especializado de micro cursos en diversas áreas relacionadas con el bienestar emocional y brinda orientación práctica sobre cómo mantener una buena salud mental. Nuestra plataforma está diseñada con un doble propósito: servir de guía para personas que desean aprender a autogestionar y mejorar su propio bienestar, y actuar como una herramienta de apoyo para profesionales y personal de soporte que buscan fortalecer conocimientos y habilidades específicas en el área de la salud mental.
          </p>
        </div>
      </div>

      {/* Methodology Section (2. Accordion Items visual redesign) */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-[#00385b]">Nuestro Método Híbrido</h2>
          <p className="text-xs sm:text-sm text-[#101021]/60">
            Para lograr un impacto real, profundo y adaptable a los ritmos de vida modernos, Animikro ha desarrollado una metodología única que fusiona dos pilares fundamentales:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <MethodologyCard
            title="La Estructura Ágil del Microlearning"
            imageSrc="https://res.cloudinary.com/djybwowo6/image/upload/v1781978305/-_visual_selection-5_v9ryw8.png"
            onZoom={setZoomSrc}
          >
            <p>
              El microlearning es una estrategia formativa que consiste en dividir el conocimiento en unidades pequeñas y manejables, comúnmente conocidas como <strong>"píldoras de aprendizaje"</strong>.
            </p>
            <p>
              En Animikro, los contenidos se entregan en cápsulas breves sobre cada temática en forma de módulos que el usuario gestiona a su ritmo y dependiendo de sus necesidades.
            </p>
            <p>
              Esto permite que puedas dedicar por cápsula entre <strong>3 y 10 minutos</strong> y guardar tu progreso para continuar luego, enfocándote en un solo objetivo a la vez para recibir valor de inmediato.
            </p>
          </MethodologyCard>

          <MethodologyCard
            title="La Profundidad del Aprendizaje Reflexivo"
            imageSrc="https://res.cloudinary.com/djybwowo6/image/upload/v1781978303/-_visual_selection-6_lwneir.png"
            onZoom={setZoomSrc}
          >
            <p>
              Sabemos que consumir información rápida no es suficiente cuando se trata de salud mental; es necesario interiorizarla. Por ello, el microaprendizaje en Animikro está guiado por los lineamientos del <strong>aprendizaje reflexivo</strong>.
            </p>
            <p>
              La teoría educativa postula que no existe un verdadero aprendizaje humano ni desarrollo sin reflexión sobre la experiencia.
            </p>
            <p>
              A través de actividades interactivas como diarios de sueño, cuestionarios de reencuadre cognitivo y árboles de reflexión, te acompañamos a interiorizar cada concepto y aplicarlo en ti mismo.
            </p>
          </MethodologyCard>
        </div>
      </div>

      {/* 3. Advantages Section Redesign (Split layout grid + integrated image card + mini-cards) */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-[#101021]/10 max-w-5xl mx-auto hover:shadow-lg transition duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-[#00385b] flex items-center gap-2">
              <i className="fas fa-star text-yellow-500"></i> Ventajas de Nuestro Método
            </h3>
            <p className="text-xs sm:text-sm text-[#101021]/60 leading-relaxed">
              Hemos adoptado esta estructura porque la ciencia demuestra sus enormes beneficios:
            </p>
            
            <div className="space-y-3">
              {/* Point 1 Mini-Card */}
              <div className="bg-[#f8fafc] border border-[#101021]/5 hover:bg-white hover:border-[#24668e]/30 hover:shadow-sm p-4 rounded-xl transition duration-200 space-y-1">
                <div className="flex items-center gap-2 text-[#24668e] font-bold text-xs sm:text-sm">
                  <i className="fas fa-brain text-sm"></i>
                  <span>Evita la sobrecarga cognitiva y mejora la retención</span>
                </div>
                <p className="text-xs sm:text-sm text-[#101021]/80 leading-relaxed pl-6">
                  Al presentar la información en formatos reducidos, el cerebro la procesa de manera más eficiente, permitiendo que los usuarios retengan hasta un <strong>70% más</strong> de la información en comparación con los métodos tradicionales.
                </p>
              </div>

              {/* Point 2 Mini-Card */}
              <div className="bg-[#f8fafc] border border-[#101021]/5 hover:bg-white hover:border-[#24668e]/30 hover:shadow-sm p-4 rounded-xl transition duration-200 space-y-1">
                <div className="flex items-center gap-2 text-[#24668e] font-bold text-xs sm:text-sm">
                  <i className="fas fa-clock text-sm"></i>
                  <span>Flexibilidad y aprendizaje &quot;Just-in-Time&quot;</span>
                </div>
                <p className="text-xs sm:text-sm text-[#101021]/80 leading-relaxed pl-6">
                  Permite a los profesionales y usuarios acceder a estrategias de bienestar y aplicarlas exactamente en el momento en que las necesitan, desde cualquier dispositivo, adaptándose a sus agendas ocupadas sin interrumpir su día a día.
                </p>
              </div>
            </div>
          </div>

          {/* Integrated Image Panel with Zoom Hover */}
          <div className="lg:col-span-5 flex justify-center">
            <div 
              onClick={() => setZoomSrc('https://res.cloudinary.com/djybwowo6/image/upload/v1781978301/-_visual_selection-7_rkljow.png')}
              className="bg-[#f8fafc] border border-[#101021]/5 rounded-2xl p-2.5 relative group cursor-zoom-in overflow-hidden shadow-sm hover:shadow-md transition duration-300 w-full max-w-sm"
            >
              <img
                src="https://res.cloudinary.com/djybwowo6/image/upload/v1781978301/-_visual_selection-7_rkljow.png"
                alt="Ventajas del método"
                className="w-full h-auto object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-2">
                <i className="fas fa-search-plus text-base"></i> Ampliar imagen
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Wellness & Brand Focus Section Redesign (Split layout grid + integrated image card + mini-cards) */}
      <div className="bg-[#6e4380]/5 p-6 sm:p-8 rounded-2xl border border-[#6e4380]/15 max-w-5xl mx-auto hover:shadow-lg transition duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Integrated Image Panel with Zoom Hover */}
          <div className="lg:col-span-5 flex justify-center order-last lg:order-first">
            <div 
              onClick={() => setZoomSrc('https://res.cloudinary.com/djybwowo6/image/upload/v1781978300/-_visual_selection-8_zn5oqd.png')}
              className="bg-white border border-[#101021]/5 rounded-2xl p-2.5 relative group cursor-zoom-in overflow-hidden shadow-sm hover:shadow-md transition duration-300 w-full max-w-sm"
            >
              <img
                src="https://res.cloudinary.com/djybwowo6/image/upload/v1781978300/-_visual_selection-8_zn5oqd.png"
                alt="Compromiso con el bienestar"
                className="w-full h-auto object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-2">
                <i className="fas fa-search-plus text-base"></i> Ampliar imagen
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-[#6e4380] flex items-center gap-2">
              <i className="fas fa-spa"></i> Compromiso con tu Bienestar Emocional
            </h3>
            <p className="text-xs sm:text-sm text-[#101021]/60 leading-relaxed">
              Dentro de nuestra plataforma y todo el ecosistema <strong>animikind</strong>, fomentamos que el usuario no sea un receptor pasivo, sino un participante activo de su bienestar:
            </p>
            
            <div className="space-y-3">
              {/* Point 1 Mini-Card */}
              <div className="bg-white/60 border border-[#6e4380]/10 hover:bg-white hover:border-[#6e4380]/35 hover:shadow-sm p-4 rounded-xl transition duration-200 space-y-1">
                <div className="flex items-center gap-2 text-[#6e4380] font-bold text-xs sm:text-sm">
                  <i className="fas fa-eye text-sm"></i>
                  <span>Toma de conciencia</span>
                </div>
                <p className="text-xs sm:text-sm text-[#101021]/80 leading-relaxed pl-6">
                  La reflexión actúa como un mecanismo para disminuir la velocidad de los procesos de pensamiento, permitiendo a los usuarios tomar conciencia de cómo forman sus modelos mentales y cómo estos influyen en sus emociones y acciones.
                </p>
              </div>

              {/* Point 2 Mini-Card */}
              <div className="bg-white/60 border border-[#6e4380]/10 hover:bg-white hover:border-[#6e4380]/35 hover:shadow-sm p-4 rounded-xl transition duration-200 space-y-1">
                <div className="flex items-center gap-2 text-[#6e4380] font-bold text-xs sm:text-sm">
                  <i className="fas fa-scale-balanced text-sm"></i>
                  <span>Autorregulación emocional</span>
                </div>
                <p className="text-xs sm:text-sm text-[#101021]/80 leading-relaxed pl-6">
                  El aprendizaje reflexivo acompaña el desarrollo personal y profesional al ayudar a reconocer las reacciones emocionales ante las dificultades, lo que favorece enormemente el afrontamiento del estrés y la frustración.
                </p>
              </div>

              {/* Point 3 Mini-Card */}
              <div className="bg-white/60 border border-[#6e4380]/10 hover:bg-white hover:border-[#6e4380]/35 hover:shadow-sm p-4 rounded-xl transition duration-200 space-y-1">
                <div className="flex items-center gap-2 text-[#6e4380] font-bold text-xs sm:text-sm">
                  <i className="fas fa-clipboard-question text-sm"></i>
                  <span>Autoexamen constructivo</span>
                </div>
                <p className="text-xs sm:text-sm text-[#101021]/80 leading-relaxed pl-6">
                  Al integrar etapas de observación reflexiva y conceptuación abstracta, impulsamos a que tanto pacientes como profesionales evalúen detenidamente sus experiencias, reconozcan sus limitaciones y potencien sus cualidades de manera constructiva.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Global Interactive Zoom Modal popup for high-resolution readability */}
      {zoomSrc && (
        <div 
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4 animate-fade-in cursor-zoom-out"
          onClick={() => setZoomSrc(null)}
        >
          <div 
            className="relative max-w-[95vw] max-h-[90vh] bg-white p-2 sm:p-3 rounded-2xl shadow-2xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={zoomSrc} 
              alt="Infografía ampliada de Animikro" 
              className="w-auto h-auto max-w-[90vw] max-h-[82vh] rounded-xl shadow-inner object-contain"
            />
            <button
              aria-label="Cerrar vista"
              onClick={() => setZoomSrc(null)}
              className="absolute -top-3 -right-3 bg-white text-[#101021] rounded-full w-9 h-9 shadow-md flex items-center justify-center hover:bg-[#f0f2f5] hover:text-[#6e4380] transition-colors duration-200 border border-[#101021]/10 text-sm font-bold"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default WhatIsAnimikroPage;
