import React, { useState } from 'react';
import confetti from 'canvas-confetti';

const playLocalChimeSound = () => {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    
    const playNote = (freq: number, startDelay: number, duration: number) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + startDelay);
      
      gain.gain.setValueAtTime(0, ctx.currentTime + startDelay);
      gain.gain.linearRampToValueAtTime(0.15, ctx.currentTime + startDelay + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + startDelay + duration);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(ctx.currentTime + startDelay);
      osc.stop(ctx.currentTime + startDelay + duration);
    };
    
    // ASCENDING CHIME: C5 -> E5 -> G5 -> C6
    playNote(523.25, 0, 0.8);
    playNote(659.25, 0.07, 0.8);
    playNote(783.99, 0.14, 0.8);
    playNote(1046.50, 0.21, 1.0);
  } catch (e) {
    console.warn('AudioContext not allowed or supported:', e);
  }
};

const HelpPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'philosophy' | 'xp' | 'levels' | 'streaks' | 'badges' | 'simulator'>('philosophy');
  
  // Simulator state
  const [simXp, setSimXp] = useState(0);
  const [simLevel, setSimLevel] = useState(1);
  const [simMinutes, setSimMinutes] = useState(0);
  const [simToast, setSimToast] = useState<string | null>(null);

  const triggerSimAction = (xpValue: number, minutesVal: number, actionName: string) => {
    playLocalChimeSound();
    
    // Confetti burst from target button
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 }
    });

    setSimToast(`+${xpValue} XP por tu ${actionName} 🌿`);
    setTimeout(() => setSimToast(null), 2500);

    setSimMinutes(prev => prev + minutesVal);
    setSimXp(prevXp => {
      const nextXp = prevXp + xpValue;
      if (nextXp >= 100) {
        setSimLevel(l => l + 1);
        setTimeout(() => {
          confetti({
            particleCount: 100,
            spread: 90,
            origin: { y: 0.5 }
          });
        }, 300);
        return nextXp - 100;
      }
      return nextXp;
    });
  };

  const resetSimulator = () => {
    setSimXp(0);
    setSimLevel(1);
    setSimMinutes(0);
    setSimToast(null);
  };

  return (
    <div className="animate-fade-in max-w-5xl mx-auto pb-12 space-y-8">
      {/* Page Header */}
      <div className="text-center space-y-3">
        <span className="bg-[#6e4380]/15 text-[#6e4380] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
          Guía de Crecimiento Personal
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#101021]">
          El Sentido de tu Progreso 🌿
        </h1>
        <p className="text-sm sm:text-base text-[#101021]/70 max-w-2xl mx-auto leading-relaxed">
          En AnImiKdemi, valoramos cada paso que das hacia tu bienestar emocional. Diseñamos un camino de recompensas personales, compasivo y motivador, para recordarte que cuidarte es tu mayor logro.
        </p>
      </div>

      {/* Tabs Menu */}
      <div className="flex flex-wrap gap-2 justify-center border-b border-[#101021]/10 pb-2">
        <button
          onClick={() => setActiveTab('philosophy')}
          className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
            activeTab === 'philosophy'
              ? 'bg-[#6e4380] text-white shadow-md'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <i className="fas fa-heart text-base"></i>
          <span>Filosofía</span>
        </button>

        <button
          onClick={() => setActiveTab('xp')}
          className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
            activeTab === 'xp'
              ? 'bg-[#6e4380] text-white shadow-md'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <i className="fas fa-star text-base text-yellow-500"></i>
          <span>¿Cómo ganar XP?</span>
        </button>

        <button
          onClick={() => setActiveTab('levels')}
          className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
            activeTab === 'levels'
              ? 'bg-[#6e4380] text-white shadow-md'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <i className="fas fa-angles-up text-base text-rose-500"></i>
          <span>Niveles & Etapa</span>
        </button>

        <button
          onClick={() => setActiveTab('streaks')}
          className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
            activeTab === 'streaks'
              ? 'bg-[#6e4380] text-white shadow-md'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <i className="fas fa-fire text-base text-orange-500 animate-pulse"></i>
          <span>Racha & Descanso</span>
        </button>

        <button
          onClick={() => setActiveTab('badges')}
          className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
            activeTab === 'badges'
              ? 'bg-[#6e4380] text-white shadow-md'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <i className="fas fa-award text-base text-[#6e4380]"></i>
          <span>Insignias de Logros</span>
        </button>

        <button
          onClick={() => setActiveTab('simulator')}
          className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
            activeTab === 'simulator'
              ? 'bg-[#24668e] text-white shadow-md'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <i className="fas fa-gamepad text-base"></i>
          <span>Prueba el Simulador</span>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-md p-6 sm:p-8 min-h-[350px]">
        {activeTab === 'philosophy' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-extrabold text-[#00385b] flex items-center gap-2">
              <i className="fas fa-compass text-[#6e4380]"></i>
              Crecimiento Personal, Sin Competencia 🌿
            </h2>
            <p className="text-[#101021]/80 text-sm sm:text-base leading-relaxed">
              Muchas plataformas utilizan tablas de clasificación y tablas de puntajes públicos para hacer que los usuarios compitan entre sí. Sin embargo, en **AnImiKdemi**, sabemos que cada proceso de aprendizaje emocional es completamente único, privado e invaluable.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 space-y-2">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-lg">
                  <i className="fas fa-user-shield"></i>
                </div>
                <h3 className="font-bold text-sm text-[#101021]">100% Personal</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Tus logros, insignias y progresos son solo tuyos. No hay rankings públicos, solo la celebración de tu constancia.
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#6e4380]/10 text-[#6e4380] flex items-center justify-center text-lg">
                  <i className="fas fa-spa"></i>
                </div>
                <h3 className="font-bold text-sm text-[#101021]">Enfoque Compasivo</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Te recordamos que descansar es parte de avanzar. Por eso, el sistema no te penaliza si necesitas un descanso de tus hábitos.
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#24668e]/10 text-[#24668e] flex items-center justify-center text-lg">
                  <i className="fas fa-circle-check"></i>
                </div>
                <h3 className="font-bold text-sm text-[#101021]">Celebración Activa</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Cuando logras avanzar, te premiamos con hermosos sonidos sintetizados y confetti para festejar tu dedicación.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'xp' && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-2xl font-extrabold text-[#00385b] flex items-center gap-2">
                <i className="fas fa-star text-yellow-500"></i>
                ¿Cómo funciona la Experiencia (XP)?
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Obtienes puntos de experiencia (XP) al participar en las dinámicas y módulos de AnImiK.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-[#24668e]/30 transition duration-200">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#24668e] flex items-center justify-center text-xl flex-shrink-0">
                  <i className="fas fa-video"></i>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#101021]">Cápsulas de Aprendizaje</h3>
                  <p className="text-xs text-slate-500 leading-tight mt-0.5">Completar la lectura de un artículo o un video formativo. <strong className="text-[#24668e] font-bold">+20 XP</strong></p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-[#24668e]/30 transition duration-200">
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-[#6e4380] flex items-center justify-center text-xl flex-shrink-0">
                  <i className="fas fa-spa"></i>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#101021]">Meditaciones & Prácticas</h3>
                  <p className="text-xs text-slate-500 leading-tight mt-0.5">Realizar ejercicios guiados de respiración y calma. <strong className="text-[#6e4380] font-bold">+25 XP</strong> y <strong className="font-semibold text-slate-600">+15 min</strong></p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-[#24668e]/30 transition duration-200">
                <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center text-xl flex-shrink-0">
                  <i className="fas fa-brain"></i>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#101021]">Paradas Reflexivas</h3>
                  <p className="text-xs text-slate-500 leading-tight mt-0.5">Interactuar con el Kit Reflexivo y plasmar tus ideas. <strong className="text-teal-600 font-bold">+15 XP</strong></p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-[#24668e]/30 transition duration-200">
                <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center text-xl flex-shrink-0">
                  <i className="fas fa-gamepad"></i>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#101021]">Herramientas Emocionales</h3>
                  <p className="text-xs text-slate-500 leading-tight mt-0.5">Uso de dinámicas del estanque de la mente y tarjetas. <strong className="text-rose-600 font-bold">+10 XP</strong></p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-100 flex items-start gap-3">
              <i className="fas fa-award text-lg mt-0.5 text-emerald-600"></i>
              <div className="space-y-1">
                <h4 className="font-bold text-xs">Finalización de Cursos & Certificados</h4>
                <p className="text-xs leading-relaxed text-emerald-700">
                  Completar un curso corto te otorga **+100 XP** y la obtención de tu certificado te premia con **+200 XP** adicionales. Para programas formativos integrales (de múltiples categorías), ¡recibes **+500 XP** por finalizarlos!
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'levels' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-extrabold text-[#00385b] flex items-center gap-2">
              <i className="fas fa-angles-up text-rose-500"></i>
              Niveles del Alma & Etapas Emocionales
            </h2>
            <p className="text-xs sm:text-sm text-[#101021]/80 leading-relaxed">
              Cada 100 XP subes de nivel. Estos niveles te otorgan **Títulos del Alma** que representan tu grado de maestría en tu viaje interior.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Levels Path */}
              <div className="space-y-3">
                <h3 className="font-extrabold text-sm text-slate-700 flex items-center gap-1.5">
                  <i className="fas fa-medal text-yellow-500"></i> Títulos de Nivel
                </h3>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-100">
                    <span className="font-bold text-[#6e4380]">Nivel 1+</span>
                    <span className="text-slate-600">Semilla del Bienestar</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-100">
                    <span className="font-bold text-[#6e4380]">Nivel 5+</span>
                    <span className="text-slate-600">Explorador Emocional</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-100">
                    <span className="font-bold text-[#6e4380]">Nivel 10+</span>
                    <span className="text-slate-600">Constructor de Hábitos</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-100">
                    <span className="font-bold text-[#6e4380]">Nivel 20+</span>
                    <span className="text-slate-600">Arquitecto del Equilibrio</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-100">
                    <span className="font-bold text-[#6e4380]">Nivel 50+</span>
                    <span className="text-slate-600">Embajador AnImiK</span>
                  </div>
                </div>
              </div>

              {/* Emotional Stage Explanation */}
              <div className="space-y-3">
                <h3 className="font-extrabold text-sm text-slate-700 flex items-center gap-1.5">
                  <i className="fas fa-heart-pulse text-emerald-500"></i> Etapa Emocional
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  A diferencia de los niveles tradicionales que solo suman puntos, tu <strong>Etapa Emocional</strong> (Despertar &rarr; Curiosidad &rarr; Descubrimiento &rarr; Crecimiento &rarr; Consolidación &rarr; Equilibrio &rarr; Florecimiento &rarr; Inspiración &rarr; Trascendencia) evalúa la <strong>variedad</strong> de tus acciones.
                </p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Se calcula de forma dinámica basándose en la diversidad de cursos completados en diferentes áreas, la cantidad de meditaciones realizadas y tus días activos en el calendario. ¡Representa un reflejo real de tu integración emocional!
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'streaks' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-extrabold text-[#00385b] flex items-center gap-2">
              <i className="fas fa-fire text-orange-500"></i>
              La Racha 🔥 y el Descanso Compasivo 🛌
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="space-y-4">
                <p className="text-xs sm:text-sm text-[#101021]/80 leading-relaxed">
                  Tu racha diaria mide cuántos días consecutivos has dedicado un tiempo a tu bienestar (mínimo una actividad). Cada día que continúas tu racha, obtienes un **bono de +5 XP** por cultivar la constancia.
                </p>
                <div className="p-4 bg-orange-50 border border-orange-200 text-orange-800 rounded-xl flex items-start gap-3">
                  <i className="fas fa-circle-info text-base mt-0.5"></i>
                  <div>
                    <h4 className="font-bold text-xs">¿Cómo recuperas días de descanso?</h4>
                    <p className="text-xs text-orange-700 leading-tight mt-0.5">
                      Por cada 7 días seguidos de racha, el sistema te obsequia **+1 Día de Descanso** de forma automática (puedes acumular hasta 3).
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#6e4380]/5 p-5 rounded-2xl border border-[#6e4380]/15 space-y-3">
                <h3 className="font-extrabold text-sm text-[#6e4380] flex items-center gap-1.5">
                  <i className="fas fa-bed"></i> Descanso Compasivo
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Sabemos que la vida tiene imprevistos, fatiga o días donde simplemente necesitas desconectar. En lugar de reiniciar tu racha a 0 y hacerte sentir culpable:
                </p>
                <p className="text-xs font-semibold text-slate-700 leading-relaxed">
                  Si dejas de realizar actividades durante un día, el sistema **consumirá automáticamente uno de tus Días de Descanso** para proteger tu racha. Tu esfuerzo anterior queda intacto.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'badges' && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-2xl font-extrabold text-[#00385b] flex items-center gap-2">
                <i className="fas fa-award text-[#6e4380]"></i>
                Guía de Insignias de Logro 🏆
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Aprende cómo conseguir cada una de las 9 insignias de AnImiKdemi. Tu dedicación personal es tu mejor recompensa.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              {/* Badge 1 */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex flex-col justify-between hover:bg-white hover:border-[#6e4380]/20 hover:shadow-md transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="text-[9px] font-extrabold text-teal-600 bg-teal-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-teal-100">
                      Común
                    </span>
                    <h4 className="font-bold text-sm text-slate-800 mt-2">Primer paso</h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">
                      Completa tu primer curso corto de autoestudio en el campus.
                    </p>
                  </div>
                  <div className="w-14 h-14 shrink-0 rounded-full bg-white border border-slate-100 p-1 flex items-center justify-center shadow-sm">
                    <img src="https://res.cloudinary.com/djybwowo6/image/upload/v1782611473/AVISO_DE_NO_SUSTITUCI%C3%93N_La_Inteligencia_Artificial_no_es_un_psic%C3%B3logo_terapeuta_ni_sustituto_de_atenci%C3%B3n_m%C3%A9dica_profesional._Si_necesitas_atenci%C3%B3n_para_tu_salud_mental_acude_a_un_centro_de_salud_ghztmq.svg" alt="Primer paso" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>

              {/* Badge 2 */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex flex-col justify-between hover:bg-white hover:border-[#6e4380]/20 hover:shadow-md transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="text-[9px] font-extrabold text-cyan-600 bg-cyan-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-cyan-100">
                      Poco común
                    </span>
                    <h4 className="font-bold text-sm text-slate-800 mt-2">Aprendiz constante</h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">
                      Mantén una racha de bienestar de 7 días consecutivos dedicando tiempo a ti mismo.
                    </p>
                  </div>
                  <div className="w-14 h-14 shrink-0 rounded-full bg-white border border-slate-100 p-1 flex items-center justify-center shadow-sm">
                    <img src="https://res.cloudinary.com/djybwowo6/image/upload/v1782611470/AVISO_DE_NO_SUSTITUCI%C3%93N_La_Inteligencia_Artificial_no_es_un_psic%C3%B3logo_terapeuta_ni_sustituto_de_atenci%C3%B3n_m%C3%A9dica_profesional._Si_necesitas_atenci%C3%B3n_para_tu_salud_mental_acude_a_un_centro_de_salud-2_fjivwr.svg" alt="Aprendiz constante" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>

              {/* Badge 3 */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex flex-col justify-between hover:bg-white hover:border-[#6e4380]/20 hover:shadow-md transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="text-[9px] font-extrabold text-purple-600 bg-purple-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-purple-100">
                      Épico
                    </span>
                    <h4 className="font-bold text-sm text-slate-800 mt-2">Explorador emocional</h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">
                      Completa 10 cursos finalizados en el catálogo de AnImiKdemi.
                    </p>
                  </div>
                  <div className="w-14 h-14 shrink-0 rounded-full bg-white border border-slate-100 p-1 flex items-center justify-center shadow-sm">
                    <img src="https://res.cloudinary.com/djybwowo6/image/upload/v1782611471/AVISO_DE_NO_SUSTITUCI%C3%93N_La_Inteligencia_Artificial_no_es_un_psic%C3%B3logo_terapeuta_ni_sustituto_de_atenci%C3%B3n_m%C3%A9dica_profesional._Si_necesitas_atenci%C3%B3n_para_tu_salud_mental_acude_a_un_centro_de_salud-3_fy0bs4.svg" alt="Explorador emocional" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>

              {/* Badge 4 */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex flex-col justify-between hover:bg-white hover:border-[#6e4380]/20 hover:shadow-md transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="text-[9px] font-extrabold text-purple-600 bg-purple-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-purple-100">
                      Épico
                    </span>
                    <h4 className="font-bold text-sm text-slate-800 mt-2">Mente tranquila</h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">
                      Realiza 20 meditaciones o ejercicios de calma y respiración.
                    </p>
                  </div>
                  <div className="w-14 h-14 shrink-0 rounded-full bg-white border border-slate-100 p-1 flex items-center justify-center shadow-sm">
                    <img src="https://res.cloudinary.com/djybwowo6/image/upload/v1782611469/AVISO_DE_NO_SUSTITUCI%C3%93N_La_Inteligencia_Artificial_no_es_un_psic%C3%B3logo_terapeuta_ni_sustituto_de_atenci%C3%B3n_m%C3%A9dica_profesional._Si_necesitas_atenci%C3%B3n_para_tu_salud_mental_acude_a_un_centro_de_salud-4_jt0xp5.svg" alt="Mente tranquila" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>

              {/* Badge 5 */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex flex-col justify-between hover:bg-white hover:border-[#6e4380]/20 hover:shadow-md transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="text-[9px] font-extrabold text-purple-600 bg-purple-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-purple-100">
                      Épico
                    </span>
                    <h4 className="font-bold text-sm text-slate-800 mt-2">Constructor de hábitos</h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">
                      Dedica tiempo y mantén actividad durante 30 días acumulados en tu calendario.
                    </p>
                  </div>
                  <div className="w-14 h-14 shrink-0 rounded-full bg-white border border-slate-100 p-1 flex items-center justify-center shadow-sm">
                    <img src="https://res.cloudinary.com/djybwowo6/image/upload/v1782611468/AVISO_DE_NO_SUSTITUCI%C3%93N_La_Inteligencia_Artificial_no_es_un_psic%C3%B3logo_terapeuta_ni_sustituto_de_atenci%C3%B3n_m%C3%A9dica_profesional._Si_necesitas_atenci%C3%B3n_para_tu_salud_mental_acude_a_un_centro_de_salud-5_rtfp7l.svg" alt="Constructor de hábitos" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>

              {/* Badge 6 */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex flex-col justify-between hover:bg-white hover:border-[#6e4380]/20 hover:shadow-md transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="text-[9px] font-extrabold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-amber-100">
                      Legendario
                    </span>
                    <h4 className="font-bold text-sm text-slate-800 mt-2">Maestro del aprendizaje</h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">
                      Completa un total de 50 cursos finalizados en AnImiKdemi.
                    </p>
                  </div>
                  <div className="w-14 h-14 shrink-0 rounded-full bg-white border border-slate-100 p-1 flex items-center justify-center shadow-sm">
                    <img src="https://res.cloudinary.com/djybwowo6/image/upload/v1782611467/AVISO_DE_NO_SUSTITUCI%C3%93N_La_Inteligencia_Artificial_no_es_un_psic%C3%B3logo_terapeuta_ni_sustituto_de_atenci%C3%B3n_m%C3%A9dica_profesional._Si_necesitas_atenci%C3%B3n_para_tu_salud_mental_acude_a_un_centro_de_salud-6_xjywzc.svg" alt="Maestro del aprendizaje" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>

              {/* Badge 7 */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex flex-col justify-between hover:bg-white hover:border-[#6e4380]/20 hover:shadow-md transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="text-[9px] font-extrabold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-amber-100">
                      Legendario
                    </span>
                    <h4 className="font-bold text-sm text-slate-800 mt-2">Constancia admirable</h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">
                      Logra mantener una racha récord de bienestar de 100 días consecutivos.
                    </p>
                  </div>
                  <div className="w-14 h-14 shrink-0 rounded-full bg-white border border-slate-100 p-1 flex items-center justify-center shadow-sm">
                    <img src="https://res.cloudinary.com/djybwowo6/image/upload/v1782611467/AVISO_DE_NO_SUSTITUCI%C3%93N_La_Inteligencia_Artificial_no_es_un_psic%C3%B3logo_terapeuta_ni_sustituto_de_atenci%C3%B3n_m%C3%A9dica_profesional._Si_necesitas_atenci%C3%B3n_para_tu_salud_mental_acude_a_un_centro_de_salud-7_cqx5gs.svg" alt="Constancia admirable" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>

              {/* Badge 8 */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex flex-col justify-between hover:bg-white hover:border-[#6e4380]/20 hover:shadow-md transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="text-[9px] font-extrabold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-amber-100">
                      Legendario
                    </span>
                    <h4 className="font-bold text-sm text-slate-800 mt-2">Bienestar integral</h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">
                      Completa 5 programas formativos integrales completos en el campus.
                    </p>
                  </div>
                  <div className="w-14 h-14 shrink-0 rounded-full bg-white border border-slate-100 p-1 flex items-center justify-center shadow-sm">
                    <img src="https://res.cloudinary.com/djybwowo6/image/upload/v1782611466/AVISO_DE_NO_SUSTITUCI%C3%93N_La_Inteligencia_Artificial_no_es_un_psic%C3%B3logo_terapeuta_ni_sustituto_de_atenci%C3%B3n_m%C3%A9dica_profesional._Si_necesitas_atenci%C3%B3n_para_tu_salud_mental_acude_a_un_centro_de_salud-8_rrabd8.svg" alt="Bienestar integral" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>

              {/* Badge 9 */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex flex-col justify-between hover:bg-white hover:border-[#6e4380]/20 hover:shadow-md transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="text-[9px] font-extrabold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-purple-200">
                      Mítico
                    </span>
                    <h4 className="font-bold text-sm text-slate-800 mt-2">Royal Animikind</h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">
                      Cumple tu primer año (365 días) de registro en el ecosistema AnImiK.
                    </p>
                  </div>
                  <div className="w-14 h-14 shrink-0 rounded-full bg-white border border-slate-100 p-1 flex items-center justify-center shadow-sm">
                    <img src="https://res.cloudinary.com/djybwowo6/image/upload/v1782611465/AVISO_DE_NO_SUSTITUCI%C3%93N_La_Inteligencia_Artificial_no_es_un_psic%C3%B3logo_terapeuta_ni_sustituto_de_atenci%C3%B3n_m%C3%A9dica_profesional._Si_necesitas_atenci%C3%B3n_para_tu_salud_mental_acude_a_un_centro_de_salud-9_fkc5kk.svg" alt="Royal Animikind" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'simulator' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-extrabold text-[#00385b] flex items-center gap-2">
                  <i className="fas fa-gamepad text-[#24668e]"></i>
                  Simulador de Crecimiento
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Experimenta cómo el sistema responde a tus acciones. Haz clic en las actividades ficticias para acumular XP.
                </p>
              </div>
              <button
                onClick={resetSimulator}
                className="text-xs font-bold text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full transition flex items-center gap-1"
              >
                <i className="fas fa-undo"></i> Reiniciar
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-2">
              {/* Simulator Card Render */}
              <div className="md:col-span-5 bg-gradient-to-br from-[#6e4380] to-[#24668e] p-6 rounded-2xl text-white shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[220px]">
                
                {/* Level Tag & Title */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-widest bg-white/20 px-2 py-0.5 rounded-full">
                    Nivel {simLevel}
                  </span>
                  <span className="text-xs font-semibold opacity-90">
                    {simMinutes} mins de estudio
                  </span>
                </div>

                <div className="my-4">
                  <span className="text-xs opacity-75 block">Título del Alma</span>
                  <span className="text-lg font-bold">
                    {simLevel >= 5 ? 'Explorador Emocional' : 'Semilla del Bienestar'}
                  </span>
                </div>

                {/* Progress Bar inside Simulator */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs opacity-90">
                    <span>Progreso de Experiencia</span>
                    <span>{simXp} / 100 XP</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <div
                      className="bg-white h-full transition-all duration-300"
                      style={{ width: `${simXp}%` }}
                    ></div>
                  </div>
                </div>

                {/* Simulated Floating Toast Notification */}
                {simToast && (
                  <div className="absolute inset-x-0 bottom-2 mx-4 bg-white/95 text-[#101021] text-[10px] font-bold py-1.5 px-3 rounded-full text-center shadow-lg border border-slate-100/50 animate-bounce">
                    {simToast}
                  </div>
                )}
              </div>

              {/* Simulation Controls */}
              <div className="md:col-span-7 space-y-3">
                <h3 className="font-extrabold text-xs text-slate-500 uppercase tracking-widest">
                  Simula una actividad y escucha la campana:
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => triggerSimAction(25, 15, 'Meditación 🧘')}
                    className="flex items-center justify-between p-3 rounded-xl border border-[#6e4380]/20 hover:border-[#6e4380] hover:bg-[#6e4380]/5 text-left transition duration-200 group"
                  >
                    <span className="font-bold text-xs text-slate-700 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-purple-100 text-[#6e4380] flex items-center justify-center text-xs">🧘</span>
                      Meditación
                    </span>
                    <span className="text-[10px] font-extrabold text-[#6e4380] bg-[#6e4380]/10 px-2 py-0.5 rounded-full group-hover:scale-105 transition-transform">+25 XP</span>
                  </button>

                  <button
                    onClick={() => triggerSimAction(15, 0, 'Reflexión 📓')}
                    className="flex items-center justify-between p-3 rounded-xl border border-teal-600/20 hover:border-teal-600 hover:bg-teal-600/5 text-left transition duration-200 group"
                  >
                    <span className="font-bold text-xs text-slate-700 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-xs">📓</span>
                      Parada Reflexiva
                    </span>
                    <span className="text-[10px] font-extrabold text-teal-600 bg-teal-600/10 px-2 py-0.5 rounded-full group-hover:scale-105 transition-transform">+15 XP</span>
                  </button>

                  <button
                    onClick={() => triggerSimAction(20, 10, 'Cápsula 🎬')}
                    className="flex items-center justify-between p-3 rounded-xl border border-blue-600/20 hover:border-blue-600 hover:bg-blue-600/5 text-left transition duration-200 group"
                  >
                    <span className="font-bold text-xs text-slate-700 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">🎬</span>
                      Cápsula de Video
                    </span>
                    <span className="text-[10px] font-extrabold text-blue-600 bg-blue-600/10 px-2 py-0.5 rounded-full group-hover:scale-105 transition-transform">+20 XP</span>
                  </button>

                  <button
                    onClick={() => triggerSimAction(50, 0, 'Reto Semanal 🎯')}
                    className="flex items-center justify-between p-3 rounded-xl border border-rose-600/20 hover:border-rose-600 hover:bg-rose-600/5 text-left transition duration-200 group"
                  >
                    <span className="font-bold text-xs text-slate-700 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-xs">🎯</span>
                      Reto Semanal
                    </span>
                    <span className="text-[10px] font-extrabold text-rose-600 bg-rose-600/10 px-2 py-0.5 rounded-full group-hover:scale-105 transition-transform">+50 XP</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HelpPage;
