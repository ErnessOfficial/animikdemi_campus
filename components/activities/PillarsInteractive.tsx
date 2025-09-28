import React, { useEffect, useMemo, useRef, useState } from 'react';

const PillarsInteractive: React.FC<{ onReadyToComplete?: (ready: boolean) => void }>=({ onReadyToComplete }) =>{
  const [open, setOpen] = useState<null | 'p1'|'p2'|'p3'|'p4'>(null);
  const [interacted, setInteracted] = useState(false);
  useEffect(()=>{ onReadyToComplete?.(interacted); },[interacted, onReadyToComplete]);

  const bubbles = [
    { id:'p1', title:'Sueño de Calidad', color:'blue', bg:'bg-blue-100', text:'text-blue-800', hover:'hover:bg-blue-200', icon:'fa-moon' },
    { id:'p2', title:'Pausa Activa y Desconexión', color:'green', bg:'bg-green-100', text:'text-green-800', hover:'hover:bg-green-200', icon:'fa-power-off' },
    { id:'p3', title:'Movimiento y Relax', color:'purple', bg:'bg-purple-100', text:'text-purple-800', hover:'hover:bg-purple-200', icon:'fa-child' },
    { id:'p4', title:'Nutrición Mental y Emocional', color:'yellow', bg:'bg-yellow-100', text:'text-yellow-800', hover:'hover:bg-yellow-200', icon:'fa-brain' },
  ] as const;

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10">
      <header className="text-center mb-8">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-indigo-800 mb-1">Los 4 Pilares del <span className="text-purple-600">Descanso Consciente</span></h3>
        <p className="text-gray-600">Explora cada pilar para desbloquear herramientas y conceptos clave.</p>
      </header>

      <div className="grid grid-cols-2 gap-6 sm:gap-10 place-items-center">
        {bubbles.map(b => (
          <button key={b.id} onClick={()=>{ setOpen(b.id as any); setInteracted(true); }} className={`bubble ${b.bg} ${b.text} ${b.hover} rounded-full`} style={{width:150, height:150, boxShadow:'0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05)'}}>
            <i className={`fas ${b.icon} text-2xl mb-2`}></i>
            <span className="font-bold text-sm sm:text-base px-2">{b.title}</span>
          </button>
        ))}
      </div>
      <p className="text-center text-gray-400 mt-8 text-sm italic">Haz clic en una burbuja para iniciar la exploración.</p>

      {open && (
        <Modal onClose={()=>setOpen(null)}>
          {open==='p1' && <P1/>}
          {open==='p2' && <P2/>}
          {open==='p3' && <P3/>}
          {open==='p4' && <P4/>}
        </Modal>
      )}
    </div>
  );
}

const Modal: React.FC<{ onClose: ()=>void, children: React.ReactNode }> = ({ onClose, children }) => {
  useEffect(()=>{
    const onKey=(e:KeyboardEvent)=>{ if(e.key==='Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return ()=>window.removeEventListener('keydown', onKey);
  },[onClose]);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60" onClick={onClose}>
      <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl transform scale-100" onClick={e=>e.stopPropagation()}>
        <div className="p-6 sm:p-8">
          <div className="flex justify-end mb-2">
            <button onClick={onClose} className="text-gray-600 hover:text-gray-900 p-1 rounded-full bg-gray-100 hover:bg-gray-200"><i className="fas fa-times"></i></button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

const Card: React.FC<{ className?: string, children: React.ReactNode }> = ({ className, children }) => (
  <div className={`rounded-lg p-4 ${className || ''}`}>{children}</div>
);

const P1: React.FC = () => (
  <div className="space-y-6">
    <h4 className="text-2xl font-bold text-blue-800">Pilar 1: Sueño de Calidad</h4>
    <Card className="bg-blue-50 border-l-4 border-blue-400">
      <p><strong className="text-blue-800">Concepto Clave:</strong> No se trata solo de la cantidad de horas, sino de la calidad y la gestión de tus ciclos de sueño. Una buena higiene del sueño prepara tu cuerpo para un descanso reparador.</p>
    </Card>
    <div>
      <h5 className="text-xl font-semibold text-blue-700 mb-3"><i className="fas fa-check-square mr-2"></i>Monitor de Higiene de Sueño</h5>
      <div className="space-y-2 bg-blue-50 p-4 rounded-lg">
        {[
          'Evité pantallas 1 hora antes de dormir.',
          'Mantuve la habitación oscura y fresca.',
          'No consumí cafeína después de las 2 p.m.',
          'Establecí una rutina de relajación (lectura, meditación).'
        ].map((t,i)=> (
          <label key={i} className="flex items-center text-gray-800 cursor-pointer">
            <input type="checkbox" className="mr-3" />{t}
          </label>
        ))}
      </div>
    </div>
  </div>
);

const P2: React.FC = () => {
  const [running, setRunning] = useState(false);
  const [secs, setSecs] = useState(5*60);
  const itRef = useRef<number | null>(null);
  useEffect(()=>{
    if(!running) return;
    itRef.current = window.setInterval(()=> setSecs(s => s>0 ? s-1 : 0), 1000);
    return ()=>{ if(itRef.current) window.clearInterval(itRef.current); };
  },[running]);
  useEffect(()=>{ if(secs===0 && running){ setRunning(false); } },[secs, running]);
  const fmt = useMemo(()=>{
    const m = String(Math.floor(secs/60)).padStart(2,'0');
    const s = String(secs%60).padStart(2,'0');
    return `${m}:${s}`;
  },[secs]);
  const start=()=>{ setSecs(5*60); setRunning(true); };
  const stop=()=>{ setRunning(false); setSecs(5*60); };
  return (
    <div className="space-y-6">
      <h4 className="text-2xl font-bold text-green-800">Pilar 2: Pausa Activa y Desconexión</h4>
      <Card className="bg-green-50 border-l-4 border-green-400"><p><strong className="text-green-800">Concepto Clave:</strong> Las micro-pausas y la desconexión digital son tan vitales como el sueño nocturno. Permiten a tu mente consolidar información y evitar la fatiga por sobrecarga.</p></Card>
      <div className="text-center p-4 bg-green-50 rounded-lg">
        <div className="text-5xl font-mono font-extrabold text-green-800 mb-4">{fmt}</div>
        {!running ? (
          <button onClick={start} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition">Iniciar Pausa</button>
        ) : (
          <button onClick={stop} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition">Detener</button>
        )}
        <p className="mt-3 text-green-700 font-medium">¡A estirar las piernas y desconectar!</p>
      </div>
    </div>
  );
};

const P3: React.FC = () => (
  <div className="space-y-6">
    <h4 className="text-2xl font-bold text-purple-800">Pilar 3: Movimiento y Relax</h4>
    <Card className="bg-purple-50 border-l-4 border-purple-400"><p><strong className="text-purple-800">Concepto Clave:</strong> El movimiento suave libera la tensión acumulada. Técnicas de relajación profunda calman el sistema nervioso.</p></Card>
    <div>
      <h5 className="text-xl font-semibold text-purple-700 mb-3"><i className="fas fa-running mr-2"></i>Mini Guía de Estiramientos de Escritorio</h5>
      <ul className="list-disc list-inside space-y-2 ml-4 p-4 bg-purple-50 rounded-lg">
        <li><strong>Estiramiento de cuello:</strong> Inclina suavemente la oreja hacia el hombro 15 s por lado.</li>
        <li><strong>Estiramiento de hombros:</strong> Cruza un brazo sobre el pecho y sujétalo 20 s por lado.</li>
        <li><strong>Estiramiento de muñecas:</strong> Con el brazo extendido, jala los dedos hacia el cuerpo 15 s.</li>
        <li><strong>Respiración profunda:</strong> Inhala 4, mantén 4, exhala 6. Repite 5 veces.</li>
      </ul>
      <p className="mt-2 italic text-purple-600">Recuerda: El movimiento es una forma de descanso activo.</p>
    </div>
  </div>
);

const P4: React.FC = () => {
  const [text, setText] = useState('');
  const [msg, setMsg] = useState<string | null>(null);
  const save=()=>{
    if(text.trim().length===0){ setMsg('Por favor, escribe al menos una cosa.'); setTimeout(()=>setMsg(null), 2000); return; }
    setMsg('¡Gracias por reflexionar! Tu registro ha sido anotado.'); setText(''); setTimeout(()=>setMsg(null), 3000);
  };
  return (
    <div className="space-y-6">
      <h4 className="text-2xl font-bold text-yellow-800">Pilar 4: Nutrición Mental y Emocional</h4>
      <Card className="bg-yellow-50 border-l-4 border-yellow-400"><p><strong className="text-yellow-800">Concepto Clave:</strong> Descansar la mente implica gestionar la carga cognitiva mediante mindfulness, gratitud y reducción de decisiones.</p></Card>
      <div>
        <h5 className="text-xl font-semibold text-yellow-700 mb-3"><i className="fas fa-feather mr-2"></i>Registro Rápido de Gratitud</h5>
        <textarea rows={4} className="w-full p-3 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 bg-yellow-50" placeholder="1. Escribe algo simple y positivo...&#10;2. Algo que te haya gustado del día...&#10;3. Un pequeño momento de paz..." value={text} onChange={e=>setText(e.target.value)} />
        <div className="mt-3 flex items-center gap-3">
          <button onClick={save} className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition">Guardar Registro</button>
          {msg && <span className={`text-sm ${msg.startsWith('Por favor') ? 'text-red-600' : 'text-yellow-700'}`}>{msg}</span>}
        </div>
      </div>
    </div>
  );
};

export default PillarsInteractive;

