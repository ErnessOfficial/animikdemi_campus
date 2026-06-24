import React from 'react';

interface CookiePolicyPageProps {
  onBack: () => void;
}

const CookiePolicyPage: React.FC<CookiePolicyPageProps> = ({ onBack }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-[#101021]/10 animate-fade-in my-6 font-sans">
      {/* Return Button */}
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-[#6e4380] hover:text-[#4c1760] font-semibold transition mb-6 group text-sm"
      >
        <i className="fas fa-arrow-left transition-transform group-hover:-translate-x-1"></i> Volver al Campus
      </button>
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#101021]/10">
        <div className="w-10 h-10 bg-[#24668e]/10 text-[#24668e] flex items-center justify-center rounded-xl">
          <i className="fas fa-cookie-bite text-xl"></i>
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-[#101021] tracking-tight uppercase">
            Política de Cookies y Seguimiento
          </h1>
          <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5">
            Última actualización: 20 de Junio de 2026
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="text-sm text-[#101021]/80 space-y-6 leading-relaxed">
        
        <p>
          El acceso y uso de la aplicación <strong className="font-semibold text-[#101021]">Animikro Micro-Learning</strong> (en adelante, la "Aplicación") y del sitio web del ecosistema <strong className="font-semibold text-[#101021]">Animikind Ecosystem</strong> implica la utilización de cookies y tecnologías similares.
        </p>
        <p>
          Esta política ha sido desarrollada por <strong className="font-semibold text-[#101021]">Animikind Limited</strong> (con número de compañía <strong className="font-semibold text-[#101021]">16947887</strong>, inscrita en la <em className="italic">Companies House</em> de Inglaterra y Gales) para informarle de manera transparente sobre qué son estas tecnologías, cómo las utilizamos en nuestra plataforma impulsada por Inteligencia Artificial y cómo puede gestionarlas.
        </p>

        <hr className="border-t border-[#101021]/10 my-4" />

        {/* Section 1 */}
        <div className="space-y-2">
          <h2 className="text-base font-bold text-[#00385b] flex items-center gap-2">
            <span className="text-[#6e4380]">1.</span> ¿QUÉ SON LAS COOKIES Y LAS TECNOLOGÍAS SIMILARES?
          </h2>
          <p>
            Las cookies son pequeños archivos de texto que se descargan y almacenan en el navegador o dispositivo del Usuario al acceder a determinadas páginas web o aplicaciones de aprendizaje.
          </p>
          <p>
            Además de las cookies, podemos utilizar "almacenamiento local" (<em className="italic">Local Storage</em> y <em className="italic">Session Storage</em>), <em className="italic">web beacons</em> o píxeles. Estas tecnologías nos permiten reconocer su dispositivo, almacenar sus preferencias de formación y garantizar el correcto funcionamiento del ecosistema digital.
          </p>
        </div>

        {/* Section 2 */}
        <div className="space-y-2">
          <h2 className="text-base font-bold text-[#00385b] flex items-center gap-2">
            <span className="text-[#6e4380]">2.</span> ¿CÓMO UTILIZA LAS COOKIES ESTA APLICACIÓN?
          </h2>
          <p>
            En consonancia con nuestra filosofía <strong className="font-bold text-[#6e4380]">"Kind Intelligence - Trusted technology"</strong>, optimizamos el uso de datos para priorizar siempre la privacidad del Usuario. No utilizamos cookies para rastrear actividades fuera de nuestro ecosistema ni para comercializar sus datos personales.
          </p>
          <p>
            Utilizamos las cookies con las siguientes finalidades:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mt-1 text-[#101021]/90">
            <li>
              <strong className="font-semibold text-[#101021]">Cookies Técnicas y Estrictamente Necesarias:</strong> Son fundamentales para permitir la navegación, el acceso seguro a su cuenta de microlearning y el funcionamiento básico de las herramientas de asistencia automatizada. Sin ellas, la Aplicación no puede operar correctamente.
            </li>
            <li>
              <strong className="font-semibold text-[#101021]">Cookies de Personalización y Preferencias:</strong> Permiten que la Aplicación recuerde información que modifica el aspecto o comportamiento de la plataforma, como su idioma de preferencia, su progreso en los módulos de bienestar o la configuración de la interfaz visual.
            </li>
            <li>
              <strong className="font-semibold text-[#101021]">Cookies de Rendimiento y Análisis:</strong> Nos ayudan a comprender de forma agregada y anónima cómo interactúan los Usuarios con los contenidos formativos. Esto nos permite identificar qué módulos de bienestar son más efectivos y mejorar los algoritmos de recomendación educativa de nuestra IA.
            </li>
          </ul>
        </div>

        {/* Section 3 - Table */}
        <div className="space-y-3">
          <h2 className="text-base font-bold text-[#00385b] flex items-center gap-2">
            <span className="text-[#6e4380]">3.</span> TIPOS DE COOKIES UTILIZADAS EN ANIMIKRO
          </h2>
          <div className="overflow-x-auto border border-[#101021]/10 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-[#101021]/10 text-[#00385b]">
                  <th className="p-3 font-bold">Tipo de Cookie</th>
                  <th className="p-3 font-bold">Origen</th>
                  <th className="p-3 font-bold">Duración</th>
                  <th className="p-3 font-bold">Finalidad Específica</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#101021]/10">
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="p-3 font-semibold text-[#101021]">Esenciales</td>
                  <td className="p-3">Propias</td>
                  <td className="p-3">Sesión / Persistente</td>
                  <td className="p-3 text-slate-600">Mantener la sesión activa del alumno y proteger la transferencia de datos.</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="p-3 font-semibold text-[#101021]">De IA y Progreso</td>
                  <td className="p-3">Propias</td>
                  <td className="p-3">Persistente</td>
                  <td className="p-3 text-slate-600">Guardar el estado de las lecciones completadas y las respuestas del ecosistema formativo.</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="p-3 font-semibold text-[#101021]">Analíticas</td>
                  <td className="p-3">Terceros (ej. Google Analytics)</td>
                  <td className="p-3">Persistente</td>
                  <td className="p-3 text-slate-600">Medir de forma anónima las secciones de la app con mayor tráfico y tiempos de permanencia.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 4 */}
        <div className="space-y-2">
          <h2 className="text-base font-bold text-[#00385b] flex items-center gap-2">
            <span className="text-[#6e4380]">4.</span> GESTIÓN Y CONFIGURACIÓN DE COOKIES POR EL USUARIO
          </h2>
          <p>
            De conformidad con las normativas internacionales de protección de datos (incluyendo el <em className="italic">UK GDPR</em> y la <em className="italic">Data Protection Act 2018</em>), el Usuario tiene el derecho de decidir si acepta o rechaza la mayoría de las cookies.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mt-1 text-[#101021]/90">
            <li>
              <strong className="font-semibold text-[#101021]">Panel de Configuración de la App:</strong> Al ingresar por primera vez a la Aplicación, se le mostrará un banner informativo que le permitirá activar o desactivar las cookies analíticas y de personalización a su elección.
            </li>
            <li>
              <strong className="font-semibold text-[#101021]">Configuración del Navegador:</strong> El Usuario puede restringir, bloquear o borrar las cookies de esta Aplicación modificando las opciones de su navegador web (Safari, Chrome, Firefox, etc.).
            </li>
          </ul>
          <p className="text-xs text-slate-500 italic mt-2">
            Nota: Si se deshabilitan las cookies técnicas o estrictamente necesarias, es posible que algunas funciones pedagógicas o de interacción inteligente de la Aplicación dejen de funcionar de manera óptima.
          </p>
        </div>

        {/* Section 5 */}
        <div className="space-y-2">
          <h2 className="text-base font-bold text-[#00385b] flex items-center gap-2">
            <span className="text-[#6e4380]">5.</span> PRIVACIDAD Y PROCESAMIENTO DE DATOS SENSIBLES
          </h2>
          <p>
            Es importante destacar que las cookies de rendimiento o analíticas <strong className="font-bold text-[#101021]">no almacenan información confidencial del bienestar emocional del usuario</strong> (como estados de ánimo o reflexiones personales introducidas en la app). El tratamiento detallado de esos datos específicos de la Inteligencia Artificial está regulado estrictamente en nuestra <strong className="font-semibold text-[#24668e] hover:underline">Política de Privacidad</strong>.
          </p>
        </div>

        {/* Section 6 */}
        <div className="space-y-2">
          <h2 className="text-base font-bold text-[#00385b] flex items-center gap-2">
            <span className="text-[#6e4380]">6.</span> ACTUALIZACIONES DE ESTA POLÍTICA
          </h2>
          <p>
            Animikind Limited, bajo la dirección de su fundador Ernesto Mendoza M., se reserva el derecho de modificar la presente Política de Cookies para adaptarla a novedades legislativas o a cambios en las funcionalidades de la IA de la plataforma. Cualquier modificación sustancial será comunicada a través de la interfaz de la Aplicación.
          </p>
        </div>

        {/* Section 7 */}
        <div className="space-y-2">
          <h2 className="text-base font-bold text-[#00385b] flex items-center gap-2">
            <span className="text-[#6e4380]">7.</span> CONTACTO
          </h2>
          <p>
            Si tiene alguna pregunta sobre el uso que hacemos de las cookies o sobre la protección de su privacidad dentro de nuestro ecosistema escolar y general, puede visitar nuestra web oficial{' '}
            <a 
              href="https://www.animikind.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#24668e] hover:underline font-semibold"
            >
              animikind.com
            </a>{' '}
            o escribirnos a nuestro canal de soporte técnico.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicyPage;

