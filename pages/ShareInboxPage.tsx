import React, { useMemo, useState } from 'react';

interface ShareInboxPageProps {
  initialData: {
    title: string;
    text: string;
    url: string;
  };
  onBack: () => void;
}

const ShareInboxPage: React.FC<ShareInboxPageProps> = ({ initialData, onBack }) => {
  const [note, setNote] = useState(initialData.text || initialData.title || '');
  const [tag, setTag] = useState('Reflexión');
  const [saved, setSaved] = useState(false);

  const summaryList = useMemo(
    () => [
      { label: 'Título', value: initialData.title || 'Sin título' },
      { label: 'Texto', value: initialData.text || 'Sin contenido' },
      { label: 'URL', value: initialData.url || 'Sin enlace' },
    ],
    [initialData]
  );

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3 text-sm text-[#6e4380]">
        <button onClick={onBack} className="inline-flex items-center gap-2 font-semibold hover:text-[#4c1760]">
          <i className="fas fa-arrow-left" />
          Volver al panel
        </button>
        <span>•</span>
        <span>Entrada compartida</span>
      </div>
      <div className="bg-white rounded-2xl shadow-md border border-[#101021]/10 p-6 space-y-6">
        <header>
          <p className="text-sm uppercase font-semibold text-[#6e4380]/70">Kit Reflexivo</p>
          <h1 className="text-2xl font-bold text-[#101021]">Contenido recibido</h1>
          <p className="text-[#101021]/70 mt-1">Guarda ideas breves cuando compartas desde otras apps.</p>
        </header>
        <div className="grid gap-4 sm:grid-cols-3">
          {summaryList.map(item => (
            <div key={item.label} className="rounded-xl border border-[#101021]/10 p-4 bg-[#f7f2fb]">
              <p className="text-xs uppercase tracking-wide text-[#6e4380]/70">{item.label}</p>
              <p className="text-sm mt-1 text-[#101021] whitespace-pre-wrap break-words">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="space-y-3">
          <label className="text-sm font-semibold text-[#101021]">Añade tu reflexión personal</label>
          <textarea
            value={note}
            onChange={e => setNote(e.target.value)}
            rows={4}
            className="w-full rounded-2xl border border-[#101021]/20 p-4 focus:border-[#6e4380] focus:ring-2 focus:ring-[#6e4380]/20"
            placeholder="Escribe aquí cómo te hace sentir esta nota o qué acción quieres tomar."
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <select
            value={tag}
            onChange={e => setTag(e.target.value)}
            className="rounded-full border border-[#101021]/20 px-4 py-2 text-sm"
          >
            <option value="Reflexión">Reflexión</option>
            <option value="Idea">Idea</option>
            <option value="Acción">Acción</option>
          </select>
          <button
            onClick={handleSave}
            className="inline-flex items-center gap-2 rounded-full bg-[#6e4380] px-6 py-2 text-white font-semibold hover:bg-[#4c1760]"
          >
            <i className="fas fa-bookmark" />
            Guardar en mi diario
          </button>
          {saved && <span className="text-xs text-[#6e4380] font-semibold">Guardado temporalmente</span>}
        </div>
      </div>
    </section>
  );
};

export default ShareInboxPage;
