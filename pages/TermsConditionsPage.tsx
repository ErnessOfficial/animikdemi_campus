import React from 'react';

interface TermsConditionsPageProps {
  onBack: () => void;
}

const TermsConditionsPage: React.FC<TermsConditionsPageProps> = ({ onBack }) => {
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
          <i className="fas fa-file-contract text-xl"></i>
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-[#101021] tracking-tight uppercase">
            Términos y Condiciones de Uso
          </h1>
          <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5">
            Última actualización: Junio de 2026
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="text-sm text-[#101021]/80 space-y-6 leading-relaxed">
        
        {/* Intro */}
        <p>
          Bienvenido a <strong className="font-semibold text-[#101021]">Animikro Micro-Learning</strong> (en adelante, la "Aplicación"). Los presentes Términos y Condiciones de Uso (en adelante, los "Términos") regulan el acceso y uso de la Aplicación, la cual forma parte de <strong className="font-semibold text-[#101021]">Animikdemi</strong>, el pilar de formación de <strong className="font-semibold text-[#101021]">Animikind Ecosystem</strong>.
        </p>
        <p>
          La Aplicación es propiedad de y está operada por <strong className="font-semibold text-[#101021]">Animikind Limited</strong> (en adelante, la "Compañía"), una sociedad privada de responsabilidad limitada inscrita en la <em className="italic">Companies House</em> para Inglaterra y Gales con el número de compañía <strong className="font-semibold text-[#101021]">16947887</strong>.
        </p>
        <p>
          Al registrarse, acceder o utilizar la Aplicación, usted (en adelante, el "Usuario") acepta quedar vinculado por los presentes Términos y por nuestra Política de Privacidad. Si no está de acuerdo con alguna parte de estos Términos, deberá abstenerse de utilizar la Aplicación.
        </p>

        <hr className="border-t border-[#101021]/10 my-4" />

        {/* Section 1 */}
        <div className="space-y-2">
          <h2 className="text-base font-bold text-[#00385b] flex items-center gap-2">
            <span className="text-[#6e4380]">1.</span> OBJETO DE LA APLICACIÓN Y FILOSOFÍA DE USO
          </h2>
          <p>
            La Aplicación tiene como objeto proporcionar microformación (<em className="italic">micro-learning</em>) orientada a la prevención y el fortalecimiento del bienestar emocional del público general.
          </p>
          <p>
            El Usuario reconoce y acepta que la Aplicación se rige por la filosofía corporativa <strong className="font-bold text-[#6e4380]">"Kind Intelligence - Trusted technology"</strong>. Esto implica que:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mt-1 text-[#101021]/90">
            <li>
              La tecnología de Inteligencia Artificial (IA) integrada se utiliza exclusivamente como una herramienta de soporte optimizada para mejorar los procesos formativos y de bienestar.
            </li>
            <li>
              <strong className="font-bold text-[#101021]">La intervención humana es insustituible.</strong> La Aplicación no automatiza ni reemplaza las relaciones humanas, el juicio clínico ni el soporte empático que solo un profesional o tutor humano puede brindar.
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="space-y-2">
          <h2 className="text-base font-bold text-[#00385b] flex items-center gap-2">
            <span className="text-[#6e4380]">2.</span> EXCLUSIÓN DE SERVICIOS MÉDICOS Y DE SALUD MENTAL
          </h2>
          <p>
            La Aplicación es un entorno estrictamente educativo, de divulgación y prevención.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mt-1 text-[#101021]/90">
            <li>
              <strong className="font-semibold text-[#101021]">No es una plataforma médica:</strong> La Compañía no presta servicios de psicología clínica, psiquiatría, terapia ni diagnósticos médicos.
            </li>
            <li>
              <strong className="font-semibold text-[#101021]">No sustituye a profesionales:</strong> El contenido o las interacciones basadas en IA no deben ser considerados bajo ninguna circunstancia como asesoramiento médico o terapéutico.
            </li>
            <li>
              <strong className="font-semibold text-[#101021]">Casos de emergencia:</strong> La Aplicación no está diseñada para atender crisis de salud mental, ideación suicida o emergencias médicas. En tales casos, el Usuario debe contactar inmediatamente a los servicios de emergencia de su localidad.
            </li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="space-y-2">
          <h2 className="text-base font-bold text-[#00385b] flex items-center gap-2">
            <span className="text-[#6e4380]">3.</span> REGISTRO, CUENTAS Y ELEGIBILIDAD
          </h2>
          <p>
            Para utilizar determinadas funciones de la Aplicación, el Usuario debe crear una cuenta aportando datos verídicos y actualizados.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mt-1 text-[#101021]/90">
            <li>
              <strong className="font-semibold text-[#101021]">Edad mínima:</strong> El uso general de esta versión de la Aplicación está destinado a personas mayores de 13 años (o la edad de consentimiento digital aplicable en su jurisdicción). Si el Usuario es menor de edad en su jurisdicción, declara contar con el consentimiento expreso de sus padres o tutores legales.
            </li>
            <li>
              <strong className="font-semibold text-[#101021]">Seguridad de la cuenta:</strong> El Usuario es el único responsable de mantener la confidencialidad de sus credenciales de acceso y de toda la actividad que ocurra bajo su cuenta.
            </li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="space-y-2">
          <h2 className="text-base font-bold text-[#00385b] flex items-center gap-2">
            <span className="text-[#6e4380]">4.</span> PROPIEDAD INTELECTUAL Y LICENCIA DE USO
          </h2>
          <p>
            Todo el contenido disponible en la Aplicación —incluyendo, pero no limitado a, metodologías de microlearning, textos, gráficos, interfaces visuales, códigos fuente, logotipos, marcas comerciales y la tecnología de IA subyacente— es propiedad exclusiva de <strong className="font-bold text-[#101021]">Animikind Limited</strong> o de su fundador, <strong className="font-bold text-[#101021]">Ernesto Mendoza M.</strong>, y está protegido por las leyes de propiedad intelectual internacionales y del Reino Unido.
          </p>
          <p>
            La Compañía otorga al Usuario una licencia limitada, no exclusiva, no transferible y revocable para acceder y utilizar la Aplicación estrictamente para su uso personal y no comercial. Queda expresamente prohibida la reproducción, distribución, modificación o explotación del contenido sin autorización previa por escrito.
          </p>
        </div>

        {/* Section 5 */}
        <div className="space-y-2">
          <h2 className="text-base font-bold text-[#00385b] flex items-center gap-2">
            <span className="text-[#6e4380]">5.</span> USO ACEPTABLE DE LA APLICACIÓN Y LA IA
          </h2>
          <p>
            El Usuario se compromete a utilizar la Aplicación de manera ética, respetuosa y legal. Queda estrictamente prohibido:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mt-1 text-[#101021]/90">
            <li>
              Introducir o transmitir datos con la intención de alterar, corromper o entrenar de forma maliciosa los modelos de Inteligencia Artificial de la Aplicación.
            </li>
            <li>
              Utilizar la Aplicación para acosar, difamar, intimidar o promover conductas asociadas al <em className="italic">bullying</em> o <em className="italic">cyberbullying</em> (las cuales la Compañía combate activamente en sus entornos escolares).
            </li>
            <li>
              Realizar ingeniería inversa, descompilar o intentar extraer el código fuente de la plataforma.
            </li>
          </ul>
        </div>

        {/* Section 6 */}
        <div className="space-y-2">
          <h2 className="text-base font-bold text-[#00385b] flex items-center gap-2">
            <span className="text-[#6e4380]">6.</span> LIMITACIÓN DE RESPONSABILIDAD
          </h2>
          <p>
            En la medida máxima permitida por la <em className="italic">Companies Act 2006</em> y el derecho aplicable en Inglaterra y Gales:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mt-1 text-[#101021]/90">
            <li>
              La Aplicación se proporciona "tal cual" y "según disponibilidad", sin garantías de ningún tipo, expresas o implícitas.
            </li>
            <li>
              Ni <strong className="font-bold text-[#101021]">Animikind Limited</strong> ni su dirección serán responsables de daños indirectos, incidentales o resultantes del uso o la imposibilidad de uso de la Aplicación, ni de las decisiones que el Usuario tome basándose en el contenido de microlearning proporcionado.
            </li>
          </ul>
        </div>

        {/* Section 7 */}
        <div className="space-y-2">
          <h2 className="text-base font-bold text-[#00385b] flex items-center gap-2">
            <span className="text-[#6e4380]">7.</span> MODIFICACIONES DE LOS TÉRMINOS
          </h2>
          <p>
            La Compañía se reserva el derecho de modificar o actualizar estos Términos en cualquier momento para reflejar cambios legales, técnicos o comerciales. Notificaremos al Usuario sobre cambios sustanciales mediante un aviso en la Aplicación o por correo electrónico. El uso continuado de la Aplicación tras la publicación de los cambios constituirá la aceptación de los nuevos Términos.
          </p>
        </div>

        {/* Section 8 */}
        <div className="space-y-2">
          <h2 className="text-base font-bold text-[#00385b] flex items-center gap-2">
            <span className="text-[#6e4380]">8.</span> LEY APLICABLE Y JURISDICCIÓN
          </h2>
          <p>
            Estos Términos se rigen e interpretan de conformidad con las leyes de <strong className="font-bold text-[#101021]">Inglaterra y Gales</strong>. Cualquier disputa, controversia o reclamación derivada de o relacionada con el uso de la Aplicación se someterá a la jurisdicción exclusiva de los tribunales de Inglaterra y Gales.
          </p>
        </div>

        {/* Section 9 */}
        <div className="space-y-2 text-[#101021]">
          <h2 className="text-base font-bold text-[#00385b] flex items-center gap-2">
            <span className="text-[#6e4380]">9.</span> CONTACTO Y SOPORTE
          </h2>
          <p>
            Para cualquier duda, reclamación o consulta técnica relacionada con la Aplicación o con el ecosistema digital, el Usuario puede ponerse en contacto con nosotros a través de:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mt-1 text-[#101021]/90">
            <li>
              <strong className="font-semibold text-[#101021]">Sitio Web:</strong>{' '}
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
              <strong className="font-semibold text-[#101021]">Correo Electrónico:</strong>{' '}
              <a 
                href="mailto:hello@animikind.com" 
                className="text-[#24668e] hover:underline font-semibold"
              >
                hello@animikind.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsConditionsPage;

