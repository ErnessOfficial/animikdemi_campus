import React, { useState } from 'react';

const AccordionItem: React.FC<{ title: string; imageSrc: string; children: React.ReactNode }> = ({ title, imageSrc, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#101021]/10 rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left font-bold text-lg text-[#00385b] bg-gradient-to-r from-white to-[#24668e]/5 hover:to-[#24668e]/10 transition-colors"
      >
        <span>{title}</span>
        <i className={`fas fa-chevron-down transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#6e4380]' : 'text-gray-400'}`}></i>
      </button>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[800px] border-t border-[#101021]/10' : 'max-h-0'
        }`}
      >
        <div className="p-6 flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1 space-y-4 text-[#101021]/80 leading-relaxed">
            {children}
          </div>
          <div className="w-full md:w-80 flex-shrink-0">
            <img src={imageSrc} alt={title} className="w-full h-auto rounded-xl shadow-md border border-[#101021]/5" />
          </div>
        </div>
      </div>
    </div>
  );
};

const WhatIsAnimikroPage: React.FC = () => {
  return (
    <div className="animate-fade-in space-y-10 max-w-5xl mx-auto">
      {/* Hero Section */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-[#101021]/10 flex flex-col md:flex-row items-center gap-8">
        <div className="w-28 h-28 sm:w-36 sm:h-36 flex-shrink-0 bg-[#6e4380]/5 rounded-2xl flex items-center justify-center p-3 border border-[#6e4380]/10">
          <img
            src="https://res.cloudinary.com/djybwowo6/image/upload/v1781975254/iconoanimikroNEW_xuhue1.png"
            alt="Icono Animikro"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#101021] tracking-tight">
            ¿Qué es <span className="text-[#6e4380]">Animikro</span>?
          </h1>
          <p className="text-base sm:text-lg text-[#101021]/80 leading-relaxed">
            Animikro ofrece un catálogo especializado de micro cursos en diversas áreas relacionadas con el bienestar emocional y brinda orientación práctica sobre cómo mantener una buena salud mental. Nuestra plataforma está diseñada con un doble propósito: servir de guía para personas que desean aprender a autogestionar y mejorar su propio bienestar, y actuar como una herramienta de apoyo para profesionales y personal de soporte que buscan fortalecer conocimientos y habilidades específicas en el área de la salud mental.
          </p>
        </div>
      </div>

      {/* Methodology Section */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#00385b]">Nuestro Método Híbrido</h2>
          <p className="text-sm sm:text-base text-[#101021]/60">
            Para lograr un impacto real, profundo y adaptable a los ritmos de vida modernos, Animikro ha desarrollado una metodología única que fusiona dos pilares fundamentales:
          </p>
        </div>

        <div className="space-y-4">
          <AccordionItem
            title="La Estructura Ágil del Microlearning"
            imageSrc="https://res.cloudinary.com/djybwowo6/image/upload/v1781978305/-_visual_selection-5_v9ryw8.png"
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
          </AccordionItem>

          <AccordionItem
            title="La Profundidad del Aprendizaje Reflexivo"
            imageSrc="https://res.cloudinary.com/djybwowo6/image/upload/v1781978303/-_visual_selection-6_lwneir.png"
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
          </AccordionItem>
        </div>
      </div>

      {/* Advantages Section */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-[#101021]/10 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-6">
          <h3 className="text-2xl font-bold text-[#00385b] flex items-center gap-2">
            <i className="fas fa-star text-yellow-500"></i> Ventajas de Nuestro Método
          </h3>
          <p className="text-[#101021]/70 leading-relaxed">
            Hemos adoptado esta estructura porque la ciencia demuestra sus enormes beneficios:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <i className="fas fa-check text-green-500 mt-1"></i>
              <p className="text-[#101021]/80">
                <strong>Evita la sobrecarga cognitiva y mejora la retención:</strong> Al presentar la información en formatos reducidos, el cerebro la procesa de manera más eficiente, permitiendo que los usuarios retengan hasta un <strong>70% más</strong> de la información en comparación con los métodos tradicionales.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <i className="fas fa-check text-green-500 mt-1"></i>
              <p className="text-[#101021]/80">
                <strong>Flexibilidad y aprendizaje "Just-in-Time":</strong> Permite a los profesionales y usuarios acceder a estrategias de bienestar y aplicarlas exactamente en el momento en que las necesitan, desde cualquier dispositivo, adaptándose a sus agendas ocupadas sin interrumpir su día a día.
              </p>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-80 flex-shrink-0">
          <img
            src="https://res.cloudinary.com/djybwowo6/image/upload/v1781978301/-_visual_selection-7_rkljow.png"
            alt="Ventajas del método"
            className="w-full h-auto rounded-xl shadow-md border border-[#101021]/5"
          />
        </div>
      </div>

      {/* Wellness & Brand Focus Section */}
      <div className="bg-[#6e4380]/5 p-6 sm:p-8 rounded-2xl border border-[#6e4380]/10 flex flex-col md:flex-row-reverse items-center gap-8">
        <div className="flex-1 space-y-6">
          <h3 className="text-2xl font-bold text-[#6e4380] flex items-center gap-2">
            <i className="fas fa-spa"></i> Compromiso con tu Bienestar Emocional
          </h3>
          <p className="text-[#101021]/70 leading-relaxed">
            Dentro de nuestra plataforma y todo el ecosistema <strong>animikind</strong>, fomentamos que el usuario no sea un receptor pasivo, sino un participante activo de su bienestar:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <i className="fas fa-circle-dot text-[#6e4380] mt-1.5 text-xs flex-shrink-0"></i>
              <p className="text-[#101021]/80">
                <strong>Toma de conciencia:</strong> La reflexión actúa como un mecanismo para disminuir la velocidad de los procesos de pensamiento, permitiendo a los usuarios tomar conciencia de cómo forman sus modelos mentales y cómo estos influyen en sus emociones y acciones.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <i className="fas fa-circle-dot text-[#6e4380] mt-1.5 text-xs flex-shrink-0"></i>
              <p className="text-[#101021]/80">
                <strong>Autorregulación emocional:</strong> El aprendizaje reflexivo acompaña el desarrollo personal y profesional al ayudar a reconocer las reacciones emocionales ante las dificultades, lo que favorece enormemente el afrontamiento del estrés y la frustración.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <i className="fas fa-circle-dot text-[#6e4380] mt-1.5 text-xs flex-shrink-0"></i>
              <p className="text-[#101021]/80">
                <strong>Autoexamen constructivo:</strong> Al integrar etapas de observación reflexiva y conceptuación abstracta, impulsamos a que tanto pacientes como profesionales evalúen detenidamente sus experiencias, reconozcan sus limitaciones y potencien sus cualidades de manera constructiva.
              </p>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-80 flex-shrink-0">
          <img
            src="https://res.cloudinary.com/djybwowo6/image/upload/v1781978300/-_visual_selection-8_zn5oqd.png"
            alt="Compromiso con el bienestar"
            className="w-full h-auto rounded-xl shadow-md border border-[#101021]/5"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatIsAnimikroPage;
