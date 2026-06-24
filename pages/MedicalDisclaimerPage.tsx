import React from 'react';

interface MedicalDisclaimerPageProps {
  onBack: () => void;
}

const MedicalDisclaimerPage: React.FC<MedicalDisclaimerPageProps> = ({ onBack }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-[#101021]/10 animate-fade-in my-6 font-sans">
      {/* Return Button */}
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-[#6e4380] hover:text-[#4c1760] font-semibold transition mb-6 group text-sm"
      >
        <i className="fas fa-arrow-left transition-transform group-hover:-translate-x-1"></i> Volver al Campus
      </button>
      
      {/* Title Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#101021]/10">
        <div className="w-10 h-10 bg-[#dd566f]/10 text-[#dd566f] flex items-center justify-center rounded-xl">
          <i className="fas fa-file-shield text-xl"></i>
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-[#101021] tracking-tight uppercase">
            Descargo de Responsabilidad Médica y Legal
          </h1>
          <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5">
            MEDICAL DISCLAIMER &bull; Última actualización: 20 de Junio de 2026
          </p>
        </div>
      </div>

      {/* Main Legal Content */}
      <div className="text-sm text-[#101021]/80 space-y-6 leading-relaxed">
        
        {/* Section 1 */}
        <div className="space-y-2">
          <h2 className="text-base font-bold text-[#00385b] flex items-center gap-2">
            <span className="text-[#6e4380]">1.</span> NATURALEZA EDUCATIVA Y DE PREVENCIÓN (MICRO-LEARNING)
          </h2>
          <p>
            La aplicación <strong className="font-semibold text-[#101021]">Animikro Micro-Learning</strong> es una plataforma digital de formación orientada al fortalecimiento, desarrollo de habilidades y prevención en materia de bienestar emocional. Animikro forma parte de <strong className="font-semibold text-[#101021]">Animikdemi</strong>, el pilar formativo de <strong className="font-semibold text-[#101021]">Animikind Ecosystem</strong>, un entorno impulsado por Inteligencia Artificial desarrollado por <strong className="font-semibold text-[#101021]">Animikind Limited</strong>. El contenido, los módulos de aprendizaje, los ejercicios, las sugerencias y cualquier información automatizada o textual disponible en esta aplicación se proporcionan exclusivamente con fines educativos, de divulgación y de soporte preventivo general en el ámbito del bienestar emocional.
          </p>
        </div>

        {/* Section 2 */}
        <div className="space-y-2">
          <h2 className="text-base font-bold text-[#00385b] flex items-center gap-2">
            <span className="text-[#6e4380]">2.</span> EXCLUSIÓN DE ASISTENCIA SANITARIA, CLÍNICA O TERAPÉUTICA
          </h2>
          <p>
            Animikro Micro-Learning, Animikdemi y Animikind Limited <strong className="font-bold text-[#101021]">no son proveedores de servicios de salud mental, atención médica, psiquiátrica ni psicológica clínica</strong>.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mt-1 text-[#101021]/90">
            <li>
              El uso de esta aplicación <strong className="font-semibold text-[#101021]">no constituye, no sustituye ni reemplaza</strong> en ningún caso el diagnóstico, tratamiento, terapia, asesoramiento o intervención de un profesional de la salud mental cualificado (como psicólogos, psiquiatras o terapeutas licenciados).
            </li>
            <li>
              Ninguna interacción, recomendación automatizada o análisis derivado de las herramientas de Inteligencia Artificial de esta aplicación debe ser interpretada como un diagnóstico clínico ni como un plan de tratamiento médico.
            </li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="bg-[#6e4380]/5 border-l-4 border-[#6e4380] p-4 rounded-r-xl space-y-2 my-2">
          <h2 className="text-sm font-bold text-[#6e4380] flex items-center gap-1.5">
            <i className="fas fa-spa text-xs"></i> 3. FILOSOFÍA "KIND INTELLIGENCE - TRUSTED TECHNOLOGY" E INTERVENCIÓN HUMANA
          </h2>
          <p className="text-xs text-[#101021]/95">
            En estricto cumplimiento de nuestra filosofía corporativa, <em className="italic">Kind Intelligence - Trusted Technology</em>, orientada al uso de la tecnología como un catalizador para mejorar los procesos humanos, <strong className="font-bold text-[#101021]">Animikind Limited establece que la intervención humana es insustituible</strong>. Las herramientas de Inteligencia Artificial integradas en este ecosistema actúan únicamente como un soporte tecnológico complementario de carácter educativo y preventivo. El usuario reconoce que la tecnología no posee capacidad de empatía real, juicio clínico ni discernimiento médico de carácter humano.
          </p>
        </div>

        {/* Section 4 */}
        <div className="bg-[#dd566f]/5 border-l-4 border-[#dd566f] p-4 rounded-r-xl space-y-2 my-2">
          <h2 className="text-sm font-bold text-[#dd566f] flex items-center gap-1.5">
            <i className="fas fa-circle-exclamation text-xs"></i> 4. LIMITACIÓN DE RESPONSABILIDAD EN CASOS DE CRISIS O EMERGENCIAS
          </h2>
          <p className="text-xs text-[#101021]/95">
            Esta aplicación <strong className="font-bold text-[#101021]">no está diseñada para la gestión de situaciones de crisis, emergencias psiquiátricas, ideación suicida o episodios graves de alteración de la salud mental</strong>.
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-1 text-xs text-[#101021]/90">
            <li>
              Si usted o un tercero se encuentra en una situación de peligro inminente, sufre una crisis emocional grave o requiere atención urgente, <strong className="font-semibold text-[#101021]">no debe utilizar esta aplicación</strong>.
            </li>
            <li>
              Diríjase de inmediato a los servicios de emergencia médica de su localidad o comuníquese con las líneas telefónicas institucionales de ayuda en salud mental de su país.
            </li>
          </ul>
        </div>

        {/* Section 5 */}
        <div className="space-y-2">
          <h2 className="text-base font-bold text-[#00385b] flex items-center gap-2">
            <span className="text-[#6e4380]">5.</span> EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD LEGAL
          </h2>
          <p>
            Animikind Limited, bajo la dirección de su CEO y fundador Ernesto Mendoza M., implementa altos estándares de calidad técnica y pedagógica. No obstante, el acceso y uso de la aplicación se realizan bajo el propio riesgo y responsabilidad del usuario. En la medida máxima permitida por la legislación aplicable (incluyendo la <em className="italic">Companies Act 2006</em> de Inglaterra y Gales), ni Animikind Limited ni sus directivos serán responsables de cualquier decisión tomada, daño directo, indirecto o perjuicio derivado de la interpretación, mal uso o confianza depositada en la información contenida en la aplicación.
          </p>
        </div>

        {/* Section 6 */}
        <div className="space-y-2">
          <h2 className="text-base font-bold text-[#00385b] flex items-center gap-2">
            <span className="text-[#6e4380]">6.</span> DATOS DE REGISTRO DE LA ENTIDAD RESPONSABLE
          </h2>
          <p>
            De conformidad con las normativas internacionales de transparencia digital, se hace constar que el ecosistema digital y sus marcas asociadas son propiedad exclusiva de:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mt-1 text-[#101021]/90">
            <li>
              <strong className="font-semibold text-[#101021]">Entidad:</strong> Animikind Limited (Private Limited Company).
            </li>
            <li>
              <strong className="font-semibold text-[#101021]">Registro:</strong> Inscrita en la <em className="italic">Companies House</em> para Inglaterra y Gales bajo las leyes de la <em className="italic">Companies Act 2006</em>.
            </li>
            <li>
              <strong className="font-semibold text-[#101021]">Fecha de incorporación:</strong> 7 de enero de 2026.
            </li>
            <li>
              <strong className="font-semibold text-[#101021]">Número de compañía:</strong> 16947887.
            </li>
            <li>
              <strong className="font-semibold text-[#101021]">Sitio web oficial del ecosistema:</strong>{' '}
              <a 
                href="https://www.animikind.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#24668e] hover:underline font-semibold"
              >
                animikind.com
              </a>
            </li>
          </ul>
        </div>

        {/* Final Statement */}
        <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-center text-xs text-slate-600 mt-6">
          <p className="italic">
            Al utilizar la aplicación Animikro Micro-Learning, usted declara haber leído, comprendido y aceptado en su totalidad los términos de este Descargo de Responsabilidad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MedicalDisclaimerPage;

