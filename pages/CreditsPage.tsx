import React, { useState } from 'react';
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
  },
];

const CreditsPage: React.FC<CreditsPageProps> = ({ progress }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'history' | 'buy'>('overview');
  const credits = progress.credits;
  const creditHistory = progress.creditHistory || [];
  const isLegacyUser = credits === undefined;

  // Format date helper
  const formatDate = (iso: string) => {
    return new Date(iso).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-8">

      {/* === PAGE HEADER === */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#101021] via-[#1a1a3e] to-[#24668e] p-8 text-white shadow-xl">
        {/* Decorative blobs */}
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#6e4380]/30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-[#24668e]/30 blur-2xl pointer-events-none" />

        <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center border border-white/20">
                <i className="fas fa-coins text-yellow-400 text-lg" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Mis Créditos</h1>
            </div>
            <p className="text-white/70 text-sm max-w-md">
              Gestiona tu saldo de créditos, consulta tu historial y descubre cómo obtener más.
            </p>
          </div>

          {/* Credit Balance Card */}
          <div className="flex-shrink-0">
            {isLegacyUser ? (
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl px-6 py-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <i className="fas fa-infinity text-yellow-400 text-2xl" />
                  <span className="text-4xl font-black tracking-tight">∞</span>
                </div>
                <p className="text-white/60 text-xs font-medium uppercase tracking-wider">Acceso completo</p>
                <p className="text-white/50 text-[11px] mt-1">Usuario con acceso ilimitado</p>
              </div>
            ) : (
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl px-6 py-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <i className="fas fa-coins text-yellow-400 text-2xl" />
                  <span className="text-4xl font-black tracking-tight">{credits}</span>
                </div>
                <p className="text-white/60 text-xs font-medium uppercase tracking-wider">Créditos disponibles</p>
                <p className="text-white/50 text-[11px] mt-1">
                  {credits === 0 ? 'Sin créditos — compra más abajo' :
                   credits === 1 ? 'Para 1 curso' :
                   `Para ${credits} curso${(credits ?? 0) > 1 ? 's' : ''}`}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* === TABS === */}
      <div className="flex bg-white rounded-xl border border-[#101021]/10 p-1 gap-1 shadow-sm">
        {[
          { id: 'overview', label: 'Cómo funciona', icon: 'fa-info-circle' },
          { id: 'history', label: 'Historial', icon: 'fa-clock-rotate-left' },
          { id: 'buy', label: 'Comprar créditos', icon: 'fa-bag-shopping' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-[#6e4380] to-[#24668e] text-white shadow-md'
                : 'text-[#101021]/60 hover:text-[#101021] hover:bg-slate-50'
            }`}
          >
            <i className={`fas ${tab.icon} text-xs`} />
            <span className="hidden sm:inline">{tab.label}</span>
            <span className="sm:hidden">{tab.id === 'overview' ? 'Info' : tab.id === 'history' ? 'Historial' : 'Comprar'}</span>
          </button>
        ))}
      </div>

      {/* === TAB: OVERVIEW === */}
      {activeTab === 'overview' && (
        <div className="space-y-4">

          {/* How it works */}
          <div className="bg-white rounded-2xl border border-[#101021]/8 shadow-sm p-6">
            <h2 className="text-lg font-bold text-[#101021] mb-5 flex items-center gap-2">
              <i className="fas fa-lightbulb text-yellow-500" />
              ¿Cómo funciona el sistema de créditos?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: 'fa-gift',
                  color: 'bg-emerald-100 text-emerald-700',
                  title: '3 créditos de bienvenida',
                  desc: 'Al registrarte, recibes 3 créditos completamente gratis para explorar la plataforma.',
                },
                {
                  icon: 'fa-book-open',
                  color: 'bg-blue-100 text-blue-700',
                  title: '1 crédito = 1 curso',
                  desc: 'Cada crédito te permite iniciar un curso. Se descuenta al comenzar, no al terminar.',
                },
                {
                  icon: 'fa-rotate',
                  color: 'bg-purple-100 text-purple-700',
                  title: 'Usa a tu ritmo',
                  desc: 'No hay caducidad. Tus créditos permanecen disponibles hasta que decidas usarlos.',
                },
                {
                  icon: 'fa-bag-shopping',
                  color: 'bg-orange-100 text-orange-700',
                  title: 'Compra más cuando quieras',
                  desc: 'Cuando termines tus créditos, puedes adquirir más paquetes en cualquier momento.',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
                    <i className={`fas ${item.icon}`} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#101021] mb-1">{item.title}</p>
                    <p className="text-xs text-[#101021]/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Current status */}
          {!isLegacyUser && (
            <div className="bg-gradient-to-r from-[#6e4380]/5 to-[#24668e]/5 border border-[#6e4380]/15 rounded-2xl p-6">
              <h3 className="text-sm font-bold text-[#101021] mb-4 flex items-center gap-2">
                <i className="fas fa-chart-pie text-[#6e4380]" />
                Estado actual de tus créditos
              </h3>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-3xl font-black text-[#6e4380]">{credits}</div>
                  <div className="text-xs text-[#101021]/50 font-medium mt-1">Disponibles</div>
                </div>
                <div className="flex-1 h-3 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#6e4380] to-[#24668e] rounded-full transition-all duration-700"
                    style={{ width: `${Math.min(100, ((credits ?? 0) / 3) * 100)}%` }}
                  />
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-[#101021]/30">3</div>
                  <div className="text-xs text-[#101021]/50 font-medium mt-1">Iniciales</div>
                </div>
              </div>
              <p className="text-xs text-[#101021]/50 mt-3">
                {credits === 3 && 'Tienes todos tus créditos disponibles. ¡Empieza a aprender!'}
                {credits === 2 && 'Usaste 1 crédito. Te quedan 2 para seguir explorando.'}
                {credits === 1 && 'Solo te queda 1 crédito. ¡Aprovéchalo al máximo!'}
                {credits === 0 && 'Has usado todos tus créditos. Compra más para continuar tu aprendizaje.'}
              </p>
            </div>
          )}

          {/* Legacy user notice */}
          {isLegacyUser && (
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <i className="fas fa-shield-check text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-emerald-800">Acceso completo garantizado</p>
                  <p className="text-xs text-emerald-700 mt-0.5">Como usuario registrado con anterioridad, tienes acceso ilimitado a todos los cursos sin necesidad de créditos.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* === TAB: HISTORY === */}
      {activeTab === 'history' && (
        <div className="bg-white rounded-2xl border border-[#101021]/8 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-[#101021]/5 flex items-center justify-between">
            <h2 className="text-base font-bold text-[#101021] flex items-center gap-2">
              <i className="fas fa-clock-rotate-left text-[#6e4380]" />
              Historial de créditos
            </h2>
            {creditHistory.length > 0 && (
              <span className="text-xs bg-[#6e4380]/10 text-[#6e4380] font-semibold px-2 py-0.5 rounded-full">
                {creditHistory.length} movimiento{creditHistory.length !== 1 ? 's' : ''}
              </span>
            )}
          </div>

          {creditHistory.length === 0 ? (
            <div className="py-16 text-center flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center">
                <i className="fas fa-receipt text-2xl text-slate-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#101021]/60">Sin movimientos aún</p>
                <p className="text-xs text-[#101021]/40 mt-1">Aquí verás el historial de tus créditos cuando comiences a usarlos.</p>
              </div>
            </div>
          ) : (
            <div className="divide-y divide-[#101021]/5">
              {[...creditHistory].reverse().map((item, i) => (
                <div key={i} className="flex items-center gap-4 px-6 py-4 hover:bg-slate-50 transition">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${
                    item.type === 'earned'
                      ? 'bg-emerald-100 text-emerald-600'
                      : 'bg-red-100 text-red-500'
                  }`}>
                    <i className={`fas ${item.type === 'earned' ? 'fa-plus' : 'fa-minus'} text-sm`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-[#101021]">{item.reason}</p>
                    <p className="text-[10px] text-[#101021]/45 mt-0.5">{formatDate(item.date)}</p>
                  </div>
                  <div className={`text-sm font-black ${item.type === 'earned' ? 'text-emerald-600' : 'text-red-500'}`}>
                    {item.type === 'earned' ? '+' : '-'}{item.amount}
                    <span className="text-[10px] font-normal ml-1 opacity-70">crédito{item.amount !== 1 ? 's' : ''}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* === TAB: BUY === */}
      {activeTab === 'buy' && (
        <div className="space-y-4">

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-4 flex items-center gap-3">
            <i className="fas fa-wrench text-amber-600" />
            <p className="text-xs text-amber-800 font-medium">
              <strong>Próximamente:</strong> La pasarela de pago estará disponible muy pronto. Por ahora puedes explorar los paquetes disponibles.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {CREDIT_PLANS.map(plan => (
              <div
                key={plan.id}
                className={`relative rounded-2xl border overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                  plan.popular
                    ? 'border-[#6e4380]/50 shadow-md shadow-[#6e4380]/10'
                    : 'border-[#101021]/10 shadow-sm'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#6e4380] to-[#24668e] text-white text-[10px] font-extrabold text-center py-1 tracking-widest uppercase">
                    ⭐ Más popular
                  </div>
                )}

                <div className={`bg-gradient-to-br ${plan.color} p-5 text-white ${plan.popular ? 'pt-7' : ''}`}>
                  <i className={`fas ${plan.icon} text-2xl opacity-90 mb-2`} />
                  <div className="text-4xl font-black">{plan.credits}</div>
                  <div className="text-white/70 text-xs font-medium">créditos</div>
                </div>

                <div className="bg-white p-5">
                  <p className="text-xs text-[#101021]/60 mb-3">{plan.description}</p>
                  <div className="mb-4">
                    {plan.originalPrice && (
                      <span className="text-xs text-[#101021]/40 line-through mr-2">{plan.originalPrice}</span>
                    )}
                    <span className="text-xl font-extrabold text-[#101021]">{plan.price}</span>
                  </div>
                  <button
                    disabled
                    className="w-full py-2.5 rounded-xl font-bold text-sm bg-slate-100 text-[#101021]/40 cursor-not-allowed"
                  >
                    Próximamente
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-[#101021]/8 shadow-sm p-6">
            <h3 className="text-sm font-bold text-[#101021] mb-4 flex items-center gap-2">
              <i className="fas fa-shield-halved text-[#24668e]" />
              Garantías y seguridad
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { icon: 'fa-lock', text: 'Pago 100% seguro con cifrado SSL' },
                { icon: 'fa-rotate-left', text: 'Reembolso en 14 días sin preguntas' },
                { icon: 'fa-infinity', text: 'Créditos sin fecha de caducidad' },
                { icon: 'fa-headset', text: 'Soporte prioritario para clientes' },
              ].map((g, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-[#101021]/70">
                  <i className={`fas ${g.icon} text-[#24668e] w-4 text-center`} />
                  {g.text}
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
