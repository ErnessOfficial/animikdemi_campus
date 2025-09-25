import React, { useEffect, useState } from 'react';
import { assetPath } from '../../utils/paths';

interface Props {
  initial?: any;
  onSave?: (data: any) => void;
  onReadyToComplete?: (ready: boolean) => void;
}

const InvisibleWall: React.FC<Props> = ({ initial, onSave, onReadyToComplete }) => {
  const [answered, setAnswered] = useState(false);
  const [answer, setAnswer] = useState<string | null>(null);
  const [form, setForm] = useState<{ pastSituation?: string; felt?: string; thought?: string }>(initial || {});
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setForm(initial || {});
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
    const ready = !!(form.pastSituation && form.felt && form.thought);
    onReadyToComplete?.(ready);
  }, [form, onReadyToComplete]);

  return (
    <div className="space-y-6">
      <div className="p-4 bg-[#4c1760]/10 border-l-4 border-[#4c1760] rounded-r-lg">
        <p className="text-[#00385b] font-semibold">¿Sientes a veces que hay una fuerza invisible que te impide avanzar?</p>
        {!answered && (
          <div className="mt-3 flex gap-3">
            {['Sí', 'A veces', 'No'].map(opt => (
              <button
                key={opt}
                onClick={() => { setAnswer(opt); setAnswered(true); }}
                className="bg-white border border-[#101021]/20 rounded-full px-4 py-2 hover:bg-[#4c1760]/10 hover:border-[#4c1760] transition"
              >
                {opt}
              </button>
            ))}
          </div>
        )}
        {answered && (
          <div className="mt-4 flex items-center gap-4 animate-fade-in">
            <div className="w-28 h-20 bg-[#101021] rounded-md flex items-center justify-center shadow-md">
              <i className="fas fa-running text-white text-2xl mr-2"></i>
              <div className="w-2 h-16 bg-white/90"></div>
            </div>
            <p className="text-[#101021] text-sm">{answer === 'No' ? 'Genial. Aun así, conocer las trampas mentales te hará más fuerte.' : 'Esa barrera suele ser un “muro interno”: una creencia que limita tu avance.'}</p>
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-4 shadow border border-[#101021]/10">
          <div className="flex items-center gap-2 mb-2 text-[#4c1760] font-bold"><i className="fas fa-brain"></i> ¿Qué son?</div>
          <p className="text-sm text-[#101021]">Muros mentales que te detienen.</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow border border-[#101021]/10">
          <div className="flex items-center gap-2 mb-2 text-[#4c1760] font-bold"><i className="fas fa-seedling"></i> ¿De dónde vienen?</div>
          <p className="text-sm text-[#101021]">Infancia, experiencias pasadas y presiones sociales.</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow border border-[#101021]/10">
          <div className="flex items-center gap-2 mb-2 text-[#4c1760] font-bold"><i className="fas fa-route"></i> ¿Cómo te afectan?</div>
          <p className="text-sm text-[#101021]">Influyen en emociones, decisiones y acciones (auto-sabotaje).</p>
        </div>
      </div>

      <div className="bg-[#00385b]/5 p-4 rounded-lg border border-[#00385b]/20">
        <h4 className="font-bold text-[#00385b] mb-2"><i className="fas fa-wall mr-2"></i> El muro de mi pasado</h4>
        <p className="text-sm text-[#101021] mb-4">Identifica una situación pasada que te hizo sentir “no soy suficiente”. Escribe qué sentiste y qué pensaste en ese momento.</p>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-semibold text-[#101021] mb-1">Situación</label>
            <textarea rows={4} className="w-full p-3 border border-[#101021]/30 rounded-md focus:ring-2 focus:ring-[#4c1760] focus:border-[#4c1760]" value={form.pastSituation || ''} onChange={e => setForm(prev => ({ ...prev, pastSituation: e.target.value }))}></textarea>
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#101021] mb-1">Lo que sentí</label>
            <textarea rows={4} className="w-full p-3 border border-[#101021]/30 rounded-md focus:ring-2 focus:ring-[#4c1760] focus:border-[#4c1760]" value={form.felt || ''} onChange={e => setForm(prev => ({ ...prev, felt: e.target.value }))}></textarea>
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#101021] mb-1">Lo que pensé</label>
            <textarea rows={4} className="w-full p-3 border border-[#101021]/30 rounded-md focus:ring-2 focus:ring-[#4c1760] focus:border-[#4c1760]" value={form.thought || ''} onChange={e => setForm(prev => ({ ...prev, thought: e.target.value }))}></textarea>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-3">
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
    </div>
  );
};

export default InvisibleWall;
