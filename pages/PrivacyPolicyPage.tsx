import React from 'react';

interface PrivacyPolicyPageProps {
  onBack: () => void;
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onBack }) => {
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
        <div className="w-10 h-10 bg-[#6e4380]/10 text-[#6e4380] flex items-center justify-center rounded-xl">
          <i className="fas fa-user-shield text-xl"></i>
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-[#101021] tracking-tight uppercase">
            Política de Privacidad
          </h1>
          <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5">
            Última actualización: 20 de Junio de 2026
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="text-sm text-[#101021]/80 space-y-6 leading-relaxed">
        
        {/* Intro */}
        <div className="space-y-3">
          <h2 className="text-base font-bold text-[#00385b]">
            INTRODUCCIÓN Y RESPONSABLE DEL TRATAMIENTO
          </h2>
          <p>
            La presente Política de Privacidad describe de manera detallada y transparente cómo <strong className="font-semibold text-[#101021]">Animikind Limited</strong> (en adelante, la "Compañía") recopila, utiliza, almacena, protege y procesa los datos personales de los usuarios (en adelante, el "Usuario") al interactuar con la aplicación web <strong className="font-semibold text-[#101021]">Animikro Micro-Learning</strong> (en adelante, la "Aplicación"), integrada en el pilar formativo <strong className="font-semibold text-[#101021]">Animikdemi</strong> de <strong className="font-semibold text-[#101021]">Animikind Ecosystem</strong>.
          </p>
          <p>
            La Compañía está constituida en la <em className="italic">Companies House</em> para Inglaterra y Gales con el número de registro <strong className="font-semibold text-[#101021]">16947887</strong> y bajo las directrices de la <em className="italic">Companies Act 2006</em>. El fundador y CEO del ecosistema es <strong className="font-semibold text-[#101021]">Ernesto Mendoza M.</strong> Nuestro compromiso absoluto es garantizar que la tecnología se utilice de forma ética y segura, bajo la filosofía <strong className="font-bold text-[#6e4380]">"Kind Intelligence - Trusted technology"</strong>, reconociendo siempre que la intervención humana en el bienestar emocional es insustituible.
          </p>
        </div>

        <hr className="border-t border-[#101021]/10 my-4" />

        {/* Section 1 */}
        <div className="space-y-3">
          <h2 className="text-base font-bold text-[#00385b] flex items-center gap-2">
            <span className="text-[#6e4380]">1.</span> DATOS QUE RECOPILAMOS
          </h2>
          <p>
            Debido al propósito de prevención y fortalecimiento del bienestar emocional de la Aplicación, procesamos datos de dos categorías:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-2">
              <h3 className="font-bold text-xs text-[#00385b] uppercase tracking-wider flex items-center gap-1.5">
                <i className="fas fa-keyboard text-[#24668e]"></i> A. Datos Proporcionados por el Usuario
              </h3>
              <ul className="list-disc pl-4 space-y-1 text-xs text-[#101021]/90">
                <li><strong className="font-semibold">Datos de Registro:</strong> Nombre, dirección de correo electrónico, contraseña cifrada y rol (público general, docente o estudiante).</li>
                <li><strong className="font-semibold">Perfil y Preferencias:</strong> Idioma, objetivos de bienestar y áreas de interés dentro del microlearning.</li>
                <li><strong className="font-semibold">Interacciones y Progreso:</strong> Respuestas a cuestionarios, lecciones completadas, reflexiones voluntarias y registros de estado de ánimo.</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-2">
              <h3 className="font-bold text-xs text-[#00385b] uppercase tracking-wider flex items-center gap-1.5">
                <i className="fas fa-robot text-[#6e4380]"></i> B. Datos Recopilados e IA
              </h3>
              <ul className="list-disc pl-4 space-y-1 text-xs text-[#101021]/90">
                <li><strong className="font-semibold">Datos de Uso:</strong> Dirección IP, tipo de dispositivo, sistema operativo, secciones visitadas y tiempos de permanencia.</li>
                <li><strong className="font-semibold">Procesamiento de IA:</strong> Análisis automatizado exclusivo para personalizar las sugerencias educativas y el contenido de microlearning del alumno.</li>
              </ul>
            </div>
          </div>

          {/* Sensitive data warning callout */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl flex gap-3 mt-2">
            <i className="fas fa-circle-exclamation text-amber-600 text-lg flex-shrink-0 mt-0.5"></i>
            <div className="text-xs text-amber-900">
              <strong className="font-bold uppercase tracking-wider block mb-0.5">Nota Crítica sobre Datos Sensibles</strong>
              La Compañía <strong className="font-bold text-[#101021]">no recopila historiales clínicos ni datos médicos</strong>. La información emocional compartida se trata estrictamente bajo un contexto de formación, soporte preventivo y autoayuda, nunca como un expediente clínico de salud mental.
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="space-y-2">
          <h2 className="text-base font-bold text-[#00385b] flex items-center gap-2">
            <span className="text-[#6e4380]">2.</span> BASE LEGAL Y FINALIDAD DEL TRATAMIENTO
          </h2>
          <p>
            De conformidad con las leyes de protección de datos vigentes (incluyendo el <em className="italic">UK GDPR</em> y la <em className="italic">Data Protection Act 2018</em>), tratamos sus datos personales bajo las siguientes bases legales y finalidades:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-[#101021]/90">
            <li>
              <strong className="font-semibold text-[#101021]">Ejecución de un Contrato / Términos de Uso:</strong> Para crear su cuenta, permitir el acceso a los módulos de aprendizaje de Animikro y proveer las funciones del ecosistema digital.
            </li>
            <li>
              <strong className="font-semibold text-[#101021]">Consentimiento Explícito del Usuario:</strong> Para el análisis automatizado que realiza nuestra IA con el único fin de recomendarle contenidos pedagógicos personalizados de bienestar emocional.
            </li>
            <li>
              <strong className="font-semibold text-[#101021]">Interés Legítimo:</strong> Para optimizar las métricas internas de la plataforma, desarrollar actualizaciones de la IA y mejorar la usabilidad técnica de la interfaz web.
            </li>
            <li>
              <strong className="font-semibold text-[#101021]">Prevención y Protección Especial:</strong> En los entornos escolares del ecosistema (donde se combate activamente el <em className="italic">bullying</em> y <em className="italic">cyberbullying</em>), los datos se procesan con el fin superior de salvaguardar entornos educativos seguros.
            </li>
          </ol>
        </div>

        {/* Section 3 */}
        <div className="bg-[#6e4380]/5 border-l-4 border-[#6e4380] p-4 rounded-r-xl space-y-2">
          <h2 className="text-sm font-bold text-[#6e4380] flex items-center gap-1.5">
            <i className="fas fa-shield-halved text-xs"></i> 3. PRIVACIDAD POR DISEÑO EN LA INTELIGENCIA ARTIFICIAL
          </h2>
          <p className="text-xs text-[#101021]/95">
            Bajo nuestra premisa de <em className="italic">Trusted Technology</em> (Tecnología de Confianza), implementamos reglas estrictas en el uso de la IA:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#101021]/90">
            <li>
              <strong className="font-semibold">No comercialización:</strong> Los datos emocionales o de progreso del Usuario <strong className="font-semibold">never serán vendidos, alquilados ni compartidos con empresas de publicidad de terceros</strong>.
            </li>
            <li>
              <strong className="font-semibold">Aislamiento de Modelos:</strong> Los datos personales o reflexiones introducidas por el Usuario no se utilizan de manera directa para entrenar modelos públicos o abiertos de IA de terceros, garantizando que su privacidad permanezca hermética.
            </li>
            <li>
              <strong className="font-semibold">Intervención Humana Prevalente:</strong> El sistema está diseñado para derivar al Usuario a soporte humano o canales institucionales si detecta que las necesidades del Usuario exceden el marco educativo del microlearning.
            </li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="space-y-2">
          <h2 className="text-base font-bold text-[#00385b] flex items-center gap-2">
            <span className="text-[#6e4380]">4.</span> RETENCIÓN Y ALMACENAMIENTO DE LOS DATOS
          </h2>
          <p>
            Los datos personales se almacenarán en servidores seguros con cifrado de extremo a extremo y protocolos avanzados de ciberseguridad. Mantendremos sus datos únicamente durante el tiempo que sea necesario para cumplir con las finalidades formativas descritas en esta política, o hasta que el Usuario solicite la eliminación de su cuenta.
          </p>
        </div>

        {/* Section 5 */}
        <div className="space-y-2">
          <h2 className="text-base font-bold text-[#00385b] flex items-center gap-2">
            <span className="text-[#6e4380]">5.</span> TRANSFERENCIA Y COMPARTICIÓN DE DATOS
          </h2>
          <p>
            Sus datos solo se compartirán bajo los siguientes escenarios limitados:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-[#101021]/90">
            <li>
              <strong className="font-semibold">Proveedores de Servicios:</strong> Terceros tecnológicos de confianza que proveen el alojamiento de servidores, bases de datos o servicios de análisis técnico, quienes actúan como encargados del tratamiento bajo contratos de estricta confidencialidad.
            </li>
            <li>
              <strong className="font-semibold">Requerimientos Legales:</strong> Cuando sea estrictamente necesario para cumplir con una obligación legal, judicial o regulatoria bajo las leyes de Inglaterra y Gales o la jurisdicción correspondiente del Usuario.
            </li>
          </ul>
        </div>

        {/* Section 6 */}
        <div className="space-y-2">
          <h2 className="text-base font-bold text-[#00385b] flex items-center gap-2">
            <span className="text-[#6e4380]">6.</span> SUS DERECHOS DE PRIVACIDAD (DERECHOS ARCO+)
          </h2>
          <p>
            El Usuario es el único dueño de su información y puede ejercer en cualquier momento los siguientes derechos enviando una solicitud a la Compañía:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-[#101021]/90">
            <li>
              <strong className="font-semibold">Acceso y Rectificación:</strong> Solicitar una copia de los datos personales que almacenamos y corregir cualquier información inexacta.
            </li>
            <li>
              <strong className="font-semibold">Supresión (Derecho al Olvido):</strong> Solicitar la eliminación total de su cuenta y de sus datos asociados de nuestros servidores e historial de la IA.
            </li>
            <li>
              <strong className="font-semibold">Restricción y Oposición:</strong> Oponerse al procesamiento de sus datos analíticos o restringir ciertas formas de tratamiento automatizado.
            </li>
            <li>
              <strong className="font-semibold">Portabilidad:</strong> Solicitar la entrega de sus datos de progreso en un formato estructurado y de uso común.
            </li>
          </ul>
        </div>

        {/* Section 7 */}
        <div className="space-y-2">
          <h2 className="text-base font-bold text-[#00385b] flex items-center gap-2">
            <span className="text-[#6e4380]">7.</span> ACTUALIZACIONES DE LA POLÍTICA DE PRIVACIDAD
          </h2>
          <p>
            Nos reservamos el derecho de modificar esta política para adaptarla a nuevas regulaciones globales o mejoras en la arquitectura de nuestra Inteligencia Artificial. Publicaremos cualquier cambio sustancial en esta sección con una nueva fecha de actualización.
          </p>
        </div>

        {/* Section 8 */}
        <div className="space-y-2">
          <h2 className="text-base font-bold text-[#00385b] flex items-center gap-2">
            <span className="text-[#6e4380]">8.</span> CONTACTO Y SITIO WEB OFICIAL
          </h2>
          <p>
            Para ejercer sus derechos de privacidad, realizar consultas sobre cómo tratamos sus datos emocionales o contactar con el equipo de protección de datos del ecosistema, puede dirigirse a:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-[#101021]/90">
            <li>
              <strong className="font-semibold">Portal Oficial:</strong>{' '}
              <a 
                href="https://www.animikind.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#24668e] hover:underline font-semibold"
              >
                animikind.com
              </a>
            </li>
            <li>
              <strong className="font-semibold">Correo de Privacidad:</strong>{' '}
              <a 
                href="mailto:privacycontact@animikind.com" 
                className="text-[#24668e] hover:underline font-semibold"
              >
                privacycontact@animikind.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;

