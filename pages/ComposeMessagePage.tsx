import React, { useState } from 'react';

interface ComposeMessagePageProps {
  defaultTo?: string;
  onBack: () => void;
}

const ComposeMessagePage: React.FC<ComposeMessagePageProps> = ({ defaultTo = '', onBack }) => {
  const [to, setTo] = useState(defaultTo);
  const [subject, setSubject] = useState('Reflexión AnImiKdemi');
  const [body, setBody] = useState('Quiero compartir...');

  const handleSend = () => {
    const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <section className="space-y-6">
      <button onClick={onBack} className="inline-flex items-center gap-2 text-sm font-semibold text-[#6e4380] hover:text-[#4c1760]">
        <i className="fas fa-arrow-left" /> Volver al panel
      </button>
      <div className="bg-white rounded-2xl shadow-md border border-[#101021]/10 p-6 space-y-5">
        <header>
          <p className="text-sm uppercase font-semibold text-[#6e4380]/70">Mensajería</p>
          <h1 className="text-2xl font-bold text-[#101021]">Redactar mensaje</h1>
          <p className="text-[#101021]/70">Este módulo se activa cuando el sistema maneja enlaces mailto.</p>
        </header>
        <div className="space-y-4">
          <label className="text-sm font-semibold text-[#101021]">Destinatario</label>
          <input
            value={to}
            onChange={e => setTo(e.target.value)}
            type="email"
            placeholder="persona@ejemplo.com"
            className="w-full rounded-full border border-[#101021]/20 px-4 py-2"
          />
        </div>
        <div className="space-y-4">
          <label className="text-sm font-semibold text-[#101021]">Asunto</label>
          <input
            value={subject}
            onChange={e => setSubject(e.target.value)}
            className="w-full rounded-full border border-[#101021]/20 px-4 py-2"
          />
        </div>
        <div className="space-y-4">
          <label className="text-sm font-semibold text-[#101021]">Mensaje</label>
          <textarea
            value={body}
            onChange={e => setBody(e.target.value)}
            rows={6}
            className="w-full rounded-2xl border border-[#101021]/20 p-4"
          />
        </div>
        <button
          onClick={handleSend}
          className="inline-flex items-center gap-2 rounded-full bg-[#24668e] px-6 py-2 text-white font-semibold hover:bg-[#1a4a69]"
        >
          <i className="fas fa-paper-plane" /> Enviar con tu cliente de correo
        </button>
      </div>
    </section>
  );
};

export default ComposeMessagePage;
