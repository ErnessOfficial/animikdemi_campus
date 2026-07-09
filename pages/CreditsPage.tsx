import React, { useState, useEffect, useRef } from 'react';
import type { UserProgress } from '../types';

interface CreditsPageProps {
  progress: UserProgress;
}

const CREDIT_PLANS = [
  {
    id: 'plan-5',
    credits: 5,
    price: '4,99 €',
    originalPrice: null,
    popular: false,
    color: 'from-slate-600 to-slate-700',
    icon: 'fa-coins',
    description: 'Ideal para empezar',
    badge: null,
  },
  {
    id: 'plan-12',
    credits: 12,
    price: '9,99 €',
    originalPrice: '11,99 €',
    popular: true,
    color: 'from-[#6e4380] to-[#24668e]',
    icon: 'fa-gem',
    description: 'El más elegido',
    badge: '⭐ Más popular',
  },
  {
    id: 'plan-25',
    credits: 25,
    price: '18,99 €',
    originalPrice: '24,99 €',
    popular: false,
    color: 'from-[#24668e] to-[#1a4a69]',
    icon: 'fa-crown',
    description: 'Máximo ahorro',
    badge: null,
  },
];

// Animated counter hook
function useCountUp(target: number, duration = 1200) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (target === 0) { setCount(0); return; }
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);
  return count;
}

// Floating particle component
const FloatingParticle: React.FC<{ delay: number; size: number; x: number; y: number }> = ({ delay, size, x, y }) => (
  <div
    className="absolute rounded-full bg-yellow-400/20 pointer-events-none animate-pulse"
    style={{
      width: size,
      height: size,
      left: `${x}%`,
      top: `${y}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${2 + delay}s`,
    }}
  />
);

const CreditsPage: React.FC<CreditsPageProps> = ({ progress }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'history' | 'buy'>('overview');
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const credits = progress.credits;
  const creditHistory = progress.creditHistory || [];
  const isLegacyUser = credits === undefined;
  const animatedCredits = useCountUp(credits ?? 0, 1000);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });

  const particles = [
    { delay: 0, size: 8, x: 10, y: 20 }, { delay: 0.5, size: 12, x: 85, y: 15 },
    { delay: 1, size: 6, x: 50, y: 70 }, { delay: 1.5, size: 10, x: 25, y: 80 },
    { delay: 0.8, size: 7, x: 70, y: 60 }, { delay: 0.3, size: 9, x: 90, y: 75 },
  ];

  const formationTypes = [
    {
      icon: 'fa-capsules',
      name: 'Kapsulas',
      color: 'from-[#6e4380] to-[#9b59b6]',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-700',
      tagColor: 'bg-purple-100 text-purple-700',
      duration: '< 60 minutos',
      kreditos: '1 Krédito',
      kreditsNum: 1,
      description: 'Micro-sesiones de formación: herramientas de aprendizaje y regulación emocional rápida y efectiva.',
    },
    {
      icon: 'fa-layer-group',
      name: 'Mikro Plus',
      color: 'from-[#24668e] to-[#1a9bd1]',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-700',
      tagColor: 'bg-blue-100 text-blue-700',
      duration: '1 h – 5 horas',
      kreditos: '3 o 5 Kréditos',
      kreditsNum: 3,
      description: 'Micro-programas de inmersión profunda, metodologías completas y laboratorios de aprendizaje. Conformados por varias Kapsulas seleccionadas para abordar temáticas de forma amplia y ordenada.',
    },
  ];

  const howToGet = [
    {
      icon: 'fa-gift',
      color: 'bg-emerald-100 text-emerald-700',
      borderColor: 'border-emerald-200',
      title: '🎁 Regalo de Bienvenida',
      kreditos: '3 Kréditos gratis',
      desc: 'Solo por registrarte, obtienes tus primeros 3 Kréditos totalmente gratis al acceder por primera vez. Úsalos para 3 Kapsulas o un programa de hasta 3 Kréditos. Válidos durante 20 días desde el registro.',
    },
    {
      icon: 'fa-bag-shopping',
      color: 'bg-amber-100 text-amber-700',
      borderColor: 'border-amber-200',
      title: '🛒 Compra Directa',
      kreditos: 'Paquetes flexibles',
      desc: 'Adquiere Kréditos adicionales desde la sección "Mis Kréditos" de forma segura. Sin suscripciones ni permanencias. Tus Kréditos no tienen fecha de caducidad.',
    },
    {
      icon: 'fa-medal',
      color: 'bg-[#6e4380]/15 text-[#6e4380]',
      borderColor: 'border-[#6e4380]/20',
      title: '🏅 Insignias y Logros',
      kreditos: 'Kréditos gratuitos',
      desc: 'Al completar diferentes niveles de formación obtienes insignias y puntos que puedes convertir en Kréditos gratis para seguir aprendiendo en Animikro.',
    },
  ];

  const guarantees = [
    { icon: 'fa-lock', text: 'Pago 100% seguro con cifrado SSL' },
    { icon: 'fa-rotate-left', text: 'Reembolso en 14 días sin preguntas' },
    { icon: 'fa-infinity', text: 'Kréditos sin fecha de caducidad' },
    { icon: 'fa-headset', text: 'Soporte prioritario para clientes' },
  ];

  const faqs = [
    {
      q: '¿Cuándo se descuenta el Krédito?',
      a: 'El Krédito se descuenta al momento de iniciar el curso, no al terminarlo. Una vez iniciado, el contenido queda disponible para ti sin límite de tiempo.',
    },
    {
      q: '¿Los Kréditos tienen fecha de caducidad?',
      a: 'Los Kréditos comprados no tienen fecha de caducidad. Solo los 3 Kréditos de bienvenida deben usarse en los primeros 20 días desde el registro.',
    },
    {
      q: '¿Puedo usar los Kréditos en cualquier curso?',
      a: 'Sí. Las Kapsulas cuestan 1 Krédito cada una. Los programas Mikro Plus cuestan 3 o 5 Kréditos dependiendo de su contenido y duración.',
    },
    {
      q: '¿Qué diferencia hay entre Kapsulas y Mikro Plus?',
      a: 'Las Kapsulas son micro-sesiones de menos de 60 minutos, perfectas para aprendizaje puntual. Mikro Plus son programas de inmersión profunda (1-5 horas) que combinan varias Kapsulas con una lógica ordenada.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">

      {/* ====== PAGE HEADER — animated gradient hero ====== */}
      <div
        ref={headerRef}
        className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#101021] via-[#1a1a3e] to-[#24668e] p-8 text-white shadow-2xl transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        {/* Floating particles */}
        {particles.map((p, i) => <FloatingParticle key={i} {...p} />)}

        {/* Large decorative blobs */}
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#6e4380]/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-52 h-52 rounded-full bg-[#24668e]/25 blur-2xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 rounded-full bg-yellow-400/5 blur-3xl pointer-events-none" />

        <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center shadow-lg shadow-amber-400/30 border-2 border-amber-300">
                <i className="fas fa-coins text-white text-xl" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Mis Kréditos</h1>
                <p className="text-yellow-400/80 text-xs font-semibold tracking-widest uppercase">Sistema Animikro</p>
              </div>
            </div>
            <p className="text-white/65 text-sm max-w-md leading-relaxed mt-2">
              Gestiona tu saldo de Kréditos, consulta tu historial y descubre cómo obtener más para seguir aprendiendo a tu ritmo.
            </p>
          </div>

          {/* Animated credit balance */}
          <div className="flex-shrink-0">
            {isLegacyUser ? (
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl px-7 py-5 text-center shadow-lg">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <i className="fas fa-infinity text-yellow-400 text-3xl" />
                </div>
                <p className="text-white/60 text-xs font-bold uppercase tracking-widest mt-2">Acceso completo</p>
                <p className="text-white/45 text-[11px] mt-1">Usuario con acceso ilimitado</p>
              </div>
            ) : (
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl px-7 py-5 text-center shadow-lg group hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center justify-center gap-3 mb-1">
                  <i className="fas fa-coins text-yellow-400 text-2xl animate-pulse" />
                  <span className="text-5xl font-black tracking-tight tabular-nums">
                    {animatedCredits}
                  </span>
                </div>
                <p className="text-white/55 text-[11px] font-bold uppercase tracking-widest">Kréditos disponibles</p>
                <p className="text-white/40 text-[11px] mt-1.5">
                  {credits === 0 ? '⚠️ Sin Kréditos — compra más' :
                   credits === 1 ? 'Para 1 Kápsula' :
                   `Para ${credits} Kapsulas o programas`}
                </p>
                {/* Mini bar */}
                <div className="mt-3 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full transition-all duration-1000"
                    style={{ width: `${Math.min(100, ((credits ?? 0) / 10) * 100)}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ====== TABS ====== */}
      <div className={`flex bg-white rounded-2xl border border-[#101021]/10 p-1.5 gap-1 shadow-sm transition-all duration-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        {[
          { id: 'overview', label: 'Cómo funciona', icon: 'fa-info-circle' },
          { id: 'history', label: 'Historial', icon: 'fa-clock-rotate-left' },
          { id: 'buy', label: 'Obtener Kréditos', icon: 'fa-bag-shopping' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-[#6e4380] to-[#24668e] text-white shadow-lg shadow-[#6e4380]/20 scale-[1.02]'
                : 'text-[#101021]/55 hover:text-[#101021] hover:bg-slate-50'
            }`}
          >
            <i className={`fas ${tab.icon} text-xs`} />
            <span className="hidden sm:inline">{tab.label}</span>
            <span className="sm:hidden">{tab.id === 'overview' ? 'Info' : tab.id === 'history' ? 'Historial' : 'Obtener'}</span>
          </button>
        ))}
      </div>

      {/* ====== TAB: OVERVIEW ====== */}
      {activeTab === 'overview' && (
        <div className="space-y-5 animate-fade-in">

          {/* How it works intro */}
          <div className="bg-white rounded-2xl border border-[#101021]/8 shadow-sm p-6">
            <h2 className="text-lg font-bold text-[#101021] mb-1 flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-yellow-100 flex items-center justify-center">
                <i className="fas fa-lightbulb text-yellow-500 text-sm" />
              </span>
              El Sistema de Kréditos Animikro
            </h2>
            <p className="text-sm text-[#101021]/60 leading-relaxed mb-6">
              El acceso a nuestra plataforma es sencillo y accesible para todos. Sin suscripciones ni permanencias — aprende a tu ritmo con total flexibilidad.
            </p>

            {/* Formation types — interactive cards */}
            <h3 className="text-xs font-bold text-[#101021]/50 uppercase tracking-widest mb-3">Tipos de Formación</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {formationTypes.map((type, i) => (
                <div
                  key={i}
                  className={`relative rounded-2xl border-2 ${type.borderColor} ${type.bgColor} p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-default group overflow-hidden`}
                >
                  {/* Gradient top strip */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${type.color} opacity-60`} />

                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${type.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                      <i className={`fas ${type.icon} text-white text-lg`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <p className="text-sm font-extrabold text-[#101021]">{type.name}</p>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${type.tagColor}`}>
                          {type.kreditos}
                        </span>
                      </div>
                      <p className={`text-[10px] font-semibold ${type.textColor} mb-2`}>
                        <i className="fas fa-clock mr-1" />{type.duration}
                      </p>
                      <p className="text-xs text-[#101021]/60 leading-relaxed">{type.description}</p>
                    </div>
                  </div>

                  {/* Coin icons decoration */}
                  <div className="flex items-center gap-1 mt-4 pt-3 border-t border-black/5">
                    {Array.from({ length: type.kreditsNum }).map((_, k) => (
                      <div key={k} className={`w-6 h-6 rounded-full bg-gradient-to-br ${type.color} flex items-center justify-center shadow-sm opacity-80`}>
                        <i className="fas fa-coins text-white text-[9px]" />
                      </div>
                    ))}
                    <span className="text-[10px] text-[#101021]/40 font-medium ml-1">= 1 acceso</span>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ accordion */}
            <h3 className="text-xs font-bold text-[#101021]/50 uppercase tracking-widest mb-3">Preguntas Frecuentes</h3>
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                    openFaq === i ? 'border-[#6e4380]/30 shadow-sm' : 'border-[#101021]/8 hover:border-[#101021]/15'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-sm font-semibold text-[#101021] pr-4">{faq.q}</span>
                    <i className={`fas fa-chevron-down text-[#6e4380] text-xs flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-4 pb-4 text-xs text-[#101021]/65 leading-relaxed border-t border-[#101021]/5 pt-3 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Current status (non-legacy) */}
          {!isLegacyUser && (
            <div className="bg-gradient-to-r from-[#6e4380]/8 to-[#24668e]/8 border border-[#6e4380]/15 rounded-2xl p-6">
              <h3 className="text-sm font-bold text-[#101021] mb-4 flex items-center gap-2">
                <i className="fas fa-chart-pie text-[#6e4380]" />
                Estado actual de tus Kréditos
              </h3>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-4xl font-black text-[#6e4380] tabular-nums">{credits}</div>
                  <div className="text-[10px] text-[#101021]/50 font-bold uppercase tracking-wider mt-1">Disponibles</div>
                </div>
                <div className="flex-1">
                  <div className="h-3 bg-slate-200 rounded-full overflow-hidden shadow-inner">
                    <div
                      className="h-full bg-gradient-to-r from-[#6e4380] to-[#24668e] rounded-full transition-all duration-1000"
                      style={{ width: `${Math.min(100, ((credits ?? 0) / 10) * 100)}%` }}
                    />
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-[10px] text-[#101021]/40">0</span>
                    <span className="text-[10px] text-[#101021]/40">10 Kréditos</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-[#101021]/50 mt-3 flex items-center gap-1.5">
                <i className={`fas ${credits === 0 ? 'fa-exclamation-triangle text-orange-400' : 'fa-circle-check text-emerald-500'}`} />
                {credits === 0 && 'Has usado todos tus Kréditos. Obtén más para continuar tu aprendizaje.'}
                {credits === 1 && '¡Solo te queda 1 Krédito! Aprovéchalo al máximo.'}
                {(credits ?? 0) >= 2 && (credits ?? 0) <= 3 && `Tienes ${credits} Kréditos disponibles. ¡A seguir aprendiendo!`}
                {(credits ?? 0) > 3 && `¡Tienes ${credits} Kréditos disponibles! Mucho por explorar.`}
              </p>
            </div>
          )}

          {/* Legacy user notice */}
          {isLegacyUser && (
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-shield-check text-emerald-600 text-xl" />
                </div>
                <div>
                  <p className="text-sm font-bold text-emerald-800">Acceso completo garantizado</p>
                  <p className="text-xs text-emerald-700 mt-0.5 leading-relaxed">Como usuario registrado con anterioridad, tienes acceso ilimitado a todos los cursos sin necesidad de Kréditos.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ====== TAB: HISTORY ====== */}
      {activeTab === 'history' && (
        <div className="bg-white rounded-2xl border border-[#101021]/8 shadow-sm overflow-hidden animate-fade-in">
          <div className="px-6 py-4 border-b border-[#101021]/5 flex items-center justify-between">
            <h2 className="text-base font-bold text-[#101021] flex items-center gap-2">
              <i className="fas fa-clock-rotate-left text-[#6e4380]" />
              Historial de Kréditos
            </h2>
            {creditHistory.length > 0 && (
              <span className="text-xs bg-[#6e4380]/10 text-[#6e4380] font-semibold px-2.5 py-0.5 rounded-full">
                {creditHistory.length} movimiento{creditHistory.length !== 1 ? 's' : ''}
              </span>
            )}
          </div>

          {creditHistory.length === 0 ? (
            <div className="py-20 text-center flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-slate-100 flex items-center justify-center">
                <i className="fas fa-receipt text-3xl text-slate-300" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#101021]/50">Sin movimientos aún</p>
                <p className="text-xs text-[#101021]/35 mt-1">Aquí verás el historial de tus Kréditos cuando comiences a usarlos.</p>
              </div>
            </div>
          ) : (
            <div className="divide-y divide-[#101021]/5">
              {[...creditHistory].reverse().map((item, i) => (
                <div key={i} className="flex items-center gap-4 px-6 py-4 hover:bg-slate-50/70 transition-colors group">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm ${
                    item.type === 'earned' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-500'
                  }`}>
                    <i className={`fas ${item.type === 'earned' ? 'fa-plus' : 'fa-minus'} text-sm`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-[#101021] truncate">{item.reason}</p>
                    <p className="text-[10px] text-[#101021]/40 mt-0.5">{formatDate(item.date)}</p>
                  </div>
                  <div className={`text-sm font-black flex items-baseline gap-1 ${item.type === 'earned' ? 'text-emerald-600' : 'text-red-500'}`}>
                    <span>{item.type === 'earned' ? '+' : '-'}{item.amount}</span>
                    <span className="text-[10px] font-normal opacity-70">Krédito{item.amount !== 1 ? 's' : ''}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ====== TAB: BUY / GET KREDITOS ====== */}
      {activeTab === 'buy' && (
        <div className="space-y-5 animate-fade-in">

          {/* Coming soon notice */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
              <i className="fas fa-wrench text-amber-600 text-sm" />
            </div>
            <p className="text-xs text-amber-800 font-medium">
              <strong>Próximamente:</strong> La pasarela de pago estará disponible muy pronto. Por ahora puedes explorar los paquetes disponibles y cómo obtener Kréditos gratis.
            </p>
          </div>

          {/* How to get — animated cards */}
          <div className="bg-white rounded-2xl border border-[#101021]/8 shadow-sm p-6">
            <h2 className="text-base font-bold text-[#101021] mb-4 flex items-center gap-2">
              <i className="fas fa-hand-sparkles text-[#6e4380]" />
              ¿Cómo obtener Kréditos?
            </h2>
            <div className="space-y-4">
              {howToGet.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 p-4 rounded-2xl border-2 ${item.borderColor} ${item.color.replace('bg-', 'bg-').replace('-100', '-50')} hover:shadow-sm transition-all duration-300 group`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${item.color} shadow-sm group-hover:scale-110 transition-transform duration-200`}>
                    <i className={`fas ${item.icon} text-lg`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <p className="text-sm font-extrabold text-[#101021]">{item.title}</p>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.color.replace('bg-', 'bg-').replace('-100', '-100')} ${item.color.split(' ')[1]}`}>
                        {item.kreditos}
                      </span>
                    </div>
                    <p className="text-xs text-[#101021]/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Credit plans */}
          <div>
            <h2 className="text-base font-bold text-[#101021] mb-4 flex items-center gap-2">
              <i className="fas fa-bag-shopping text-[#24668e]" />
              Paquetes de Kréditos
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {CREDIT_PLANS.map(plan => (
                <div
                  key={plan.id}
                  onMouseEnter={() => setHoveredPlan(plan.id)}
                  onMouseLeave={() => setHoveredPlan(null)}
                  className={`relative rounded-2xl border overflow-hidden transition-all duration-300 cursor-default ${
                    plan.popular
                      ? 'border-[#6e4380]/50 shadow-lg shadow-[#6e4380]/10'
                      : 'border-[#101021]/10 shadow-sm'
                  } ${hoveredPlan === plan.id ? '-translate-y-2 shadow-xl' : ''}`}
                >
                  {plan.badge && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#6e4380] to-[#24668e] text-white text-[10px] font-extrabold text-center py-1 tracking-widest uppercase">
                      {plan.badge}
                    </div>
                  )}
                  <div className={`bg-gradient-to-br ${plan.color} p-6 text-white ${plan.badge ? 'pt-8' : ''} relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2" />
                    <i className={`fas ${plan.icon} text-3xl opacity-80 mb-3`} />
                    <div className="text-5xl font-black">{plan.credits}</div>
                    <div className="text-white/70 text-xs font-bold uppercase tracking-wider mt-1">Kréditos</div>
                  </div>
                  <div className="bg-white p-5">
                    <p className="text-xs text-[#101021]/50 font-medium mb-3">{plan.description}</p>
                    <div className="mb-4 flex items-baseline gap-2">
                      {plan.originalPrice && (
                        <span className="text-xs text-[#101021]/35 line-through">{plan.originalPrice}</span>
                      )}
                      <span className="text-2xl font-extrabold text-[#101021]">{plan.price}</span>
                    </div>
                    <button
                      disabled
                      className="w-full py-2.5 rounded-xl font-bold text-sm bg-slate-100 text-[#101021]/35 cursor-not-allowed"
                    >
                      Próximamente
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantees */}
          <div className="bg-white rounded-2xl border border-[#101021]/8 shadow-sm p-6">
            <h3 className="text-sm font-bold text-[#101021] mb-4 flex items-center gap-2">
              <i className="fas fa-shield-halved text-[#24668e]" />
              Garantías y Seguridad
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {guarantees.map((g, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#24668e]/20 hover:bg-[#24668e]/5 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-[#24668e]/10 flex items-center justify-center flex-shrink-0">
                    <i className={`fas ${g.icon} text-[#24668e] text-sm`} />
                  </div>
                  <span className="text-xs text-[#101021]/70 font-medium">{g.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreditsPage;
