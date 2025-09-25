import React, { useEffect, useState } from 'react';

interface Props {
  initial?: any;
  onSave?: (data: any) => void;
  onReadyToComplete?: (ready: boolean) => void;
}

const ReframeWall: React.FC<Props> = ({ initial, onSave, onReadyToComplete }) => {
  const [form, setForm] = useState<any>(initial || { limiting: '', empowering: '', counterExample: '', commitment: { belief: '', action: '' } });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setForm(initial || { limiting: '', empowering: '', counterExample: '', commitment: { belief: '', action: '' } });
  }, [initial]);

  useEffect(() => {
    if (!onSave) return;
    const t = setTimeout(() => {
      onSave(form);
      setSaved(true);
      setTimeout(() => setSaved(false), 800);
    }, 600);
    return () => clearTimeout(t);
  }, [form, onSave]);

  useEffect(() => {
    const ready = !!(form.limiting && form.empowering && (form.commitment?.action || '').trim().length > 0);
    onReadyToComplete?.(ready);
  }, [form, onReadyToComplete]);
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-lg shadow border border-[#101021]/10">
          <h4 className="font-bold text-[#4c1760] mb-2"><i className="fas fa-door-open mr-2"></i> De muro a ventana</h4>
          <p className="text-sm text-[#101021] mb-3">Toma una creencia limitante y conviértela en una creencia potenciadora.</p>
          <label className="block text-sm font-semibold text-[#00385b]">Creencia limitante</label>
          <input type="text" className="w-full p-3 mt-1 mb-3 border border-[#101021]/30 rounded-md focus:ring-2 focus:ring-[#4c1760] focus:border-[#4c1760]" placeholder="Ej: No soy lo suficientemente bueno para hablar en público" value={form.limiting || ''} onChange={e => setForm((prev: any) => ({ ...prev, limiting: e.target.value }))} />
          <label className="block text-sm font-semibold text-[#00385b]">Creencia potenciadora</label>
          <input type="text" className="w-full p-3 mt-1 border border-[#101021]/30 rounded-md focus:ring-2 focus:ring-[#4c1760] focus:border-[#4c1760]" placeholder="Ej: Puedo prepararme y practicar para comunicar mis ideas con claridad" value={form.empowering || ''} onChange={e => setForm((prev: any) => ({ ...prev, empowering: e.target.value }))} />
        </div>
        <div className="bg-white p-5 rounded-lg shadow border border-[#101021]/10">
          <h4 className="font-bold text-[#4c1760] mb-2"><i className="fas fa-shield-alt mr-2"></i> El contra-ejemplo</h4>
          <p className="text-sm text-[#101021] mb-3">Recuerda una situación en la que superaste un obstáculo, contradiciendo esa creencia limitante.</p>
          <textarea rows={6} className="w-full p-3 border border-[#101021]/30 rounded-md focus:ring-2 focus:ring-[#4c1760] focus:border-[#4c1760]" placeholder="Describe el momento en el que te demostraste capaz" value={form.counterExample || ''} onChange={e => setForm((prev: any) => ({ ...prev, counterExample: e.target.value }))}></textarea>
        </div>
      </div>

      <div className="bg-[#e0f2fe] p-5 rounded-lg border border-[#1a4a69]/20">
        <h4 className="font-bold text-[#00385b] mb-2"><i className="fas fa-pen-fancy mr-2"></i> Compromiso de Reescritura</h4>
        <p className="text-sm text-[#101021] mb-3">Elige una de tus nuevas creencias potenciadoras y escribe una acción pequeña y concreta que realizarás en los próximos días para ponerla en práctica.</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-[#00385b]">Mi nueva creencia</label>
            <input type="text" className="w-full p-3 mt-1 border border-[#101021]/30 rounded-md focus:ring-2 focus:ring-[#4c1760] focus:border-[#4c1760]" value={form.commitment?.belief || ''} onChange={e => setForm((prev: any) => ({ ...prev, commitment: { ...(prev.commitment || {}), belief: e.target.value } }))} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#00385b]">Acción concreta</label>
            <input type="text" className="w-full p-3 mt-1 border border-[#101021]/30 rounded-md focus:ring-2 focus:ring-[#4c1760] focus:border-[#4c1760]" placeholder="Ej: Practicar 10 min al día frente al espejo" value={form.commitment?.action || ''} onChange={e => setForm((prev: any) => ({ ...prev, commitment: { ...(prev.commitment || {}), action: e.target.value } }))} />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => { if (onSave) { onSave(form); } setSaved(true); setTimeout(() => setSaved(false), 800); }}
          className="bg-[#24668e] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#1a4a69] transition"
        >
          Guardar ahora
        </button>
        {saved && <span className="text-xs text-[#1a4a69]">Guardado</span>}
      </div>
    </div>
  );
};

export default ReframeWall;
