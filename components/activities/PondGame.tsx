import React, { useEffect, useRef } from 'react';

interface PondGameProps { onReadyToComplete?: (ready: boolean) => void; }

const PondGame: React.FC<PondGameProps> = ({ onReadyToComplete }) => {
  const [showFull, setShowFull] = React.useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const startBtnRef = useRef<HTMLButtonElement>(null);
  const resetBtnRef = useRef<HTMLButtonElement>(null);
  const releaseBtnRef = useRef<HTMLButtonElement>(null);
  const reflectionPanelRef = useRef<HTMLDivElement>(null);
  const reflectionTextRef = useRef<HTMLParagraphElement>(null);
  const clarityRef = useRef<HTMLDivElement>(null);
  const peaceRef = useRef<HTMLDivElement>(null);
  const streakRef = useRef<HTMLDivElement>(null);
  const gameModalRef = useRef<HTMLDivElement>(null);
  const modalTitleRef = useRef<HTMLHeadingElement>(null);
  const modalTextRef = useRef<HTMLParagraphElement>(null);

  // Game state (imperative)
  let thoughts: any[] = [];
  let clarityScore = 0;
  let innerPeace = 100;
  let streak = 0;
  let isRunning = false;
  let selectedThought: any = null;
  let lastSpawnTime = 0;
  let spawnInterval = 3000;
  let animationFrameId = 0;

  const NEGATIVE_THOUGHTS = [
    'Tengo que hacer X', 'El pasado me persigue', 'Necesito ser perfecto',
    '¿Qué pasa si...?', 'Miedo al cambio', 'No soy suficiente',
    'El tiempo no alcanza', 'Esa conversación pendiente', 'Ruido mental'
  ];

  function Thought(label: string, width: number, height: number) {
    this.radius = 25;
    this.x = Math.random() * (width - this.radius * 2) + this.radius;
    this.y = height + this.radius;
    this.speed = 0.5 + (Math.random() * 0.2);
    this.label = label;
    this.color = '#e0f2fe';
    this.textColor = '#1e3a8a';
    this.opacity = 0.9;
  }

  const updateDisplay = () => {
    if (!clarityRef.current || !peaceRef.current || !streakRef.current) return;
    clarityRef.current.textContent = `Claridad: ${clarityScore}`;
    streakRef.current.textContent = `Racha: ${streak}`;
    let colorClass = 'text-red-300';
    if (innerPeace > 60) colorClass = 'text-green-300'; else if (innerPeace > 30) colorClass = 'text-yellow-300';
    peaceRef.current.innerHTML = `Paz Interior: <span class="${colorClass} font-extrabold">${innerPeace}%</span>`;
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current; const container = containerRef.current; if (!canvas || !container) return;
    const newWidth = container.clientWidth;
    const newHeight = Math.min(Math.floor(window.innerHeight * 0.6), Math.max(newWidth * 0.7, 320));
    canvas.width = newWidth; canvas.height = newHeight;
  };

  const startGame = () => {
    if (isRunning) return;
    const canvas = canvasRef.current; if (!canvas) return;
    isRunning = true;
    clarityScore = 0; innerPeace = 100; streak = 0; thoughts = []; selectedThought = null; lastSpawnTime = 0; spawnInterval = 3000;
    startBtnRef.current?.classList.add('hidden');
    resetBtnRef.current?.classList.remove('hidden');
    gameModalRef.current?.classList.add('hidden','opacity-0');
    reflectionPanelRef.current?.classList.add('hidden');
    updateDisplay();
    animationFrameId = requestAnimationFrame(animate);
  };

  const gameOver = (message: string) => {
    isRunning = false;
    cancelAnimationFrame(animationFrameId);
    if (modalTitleRef.current) modalTitleRef.current.textContent = 'Meditación Terminada 🧘';
    if (modalTextRef.current) modalTextRef.current.innerHTML = `${message}<br><br>Puntuación de Claridad final: <strong class="text-indigo-700">${clarityScore} puntos</strong>`;
    const gm = gameModalRef.current; if (gm) { gm.classList.remove('hidden','opacity-0'); gm.classList.add('opacity-100'); }
    resetBtnRef.current?.classList.add('hidden');
    if (startBtnRef.current) { startBtnRef.current.textContent = 'Volver a la Calma'; startBtnRef.current.classList.remove('hidden'); }
  };

  const animate = (currentTime: number) => {
    if (!isRunning) return;
    const canvas = canvasRef.current; const ctx = canvas?.getContext('2d'); if (!canvas || !ctx) return;

    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = '#ef4444'; ctx.globalAlpha = 0.2; ctx.fillRect(0,0,canvas.width,10); ctx.globalAlpha = 1;

    if (!selectedThought) {
      if (currentTime - lastSpawnTime > spawnInterval) {
        const label = NEGATIVE_THOUGHTS[Math.floor(Math.random()*NEGATIVE_THOUGHTS.length)];
        thoughts.push(new (Thought as any)(label, canvas.width, canvas.height));
        spawnInterval = Math.max(1500, spawnInterval * 0.99);
        lastSpawnTime = currentTime;
      }
    }

    for (let i = thoughts.length - 1; i >= 0; i--) {
      const t = thoughts[i];
      if (!selectedThought) t.y -= t.speed;
      ctx.beginPath(); ctx.arc(t.x, t.y, t.radius, 0, Math.PI*2); ctx.fillStyle = t.color; ctx.globalAlpha = t.opacity; ctx.fill();
      ctx.strokeStyle = '#60a5fa'; ctx.lineWidth = 2; ctx.stroke(); ctx.closePath(); ctx.globalAlpha = 1;
      ctx.fillStyle = t.textColor; ctx.font = '10px Inter'; ctx.textAlign = 'center'; ctx.fillText(t.label, t.x, t.y + 4);
      if (t.y - t.radius < 0) { thoughts.splice(i,1); innerPeace = Math.max(0, innerPeace - 10); streak = 0; updateDisplay(); }
    }

    if (innerPeace <= 0) { gameOver('Tu estanque se ha agitado demasiado. Es momento de tomar un descanso real.'); return; }
    animationFrameId = requestAnimationFrame(animate);
  };

  const enterReflectionMode = (thought: any) => {
    if (selectedThought || !isRunning) return;
    selectedThought = thought;
    if (reflectionTextRef.current && reflectionPanelRef.current) {
      reflectionTextRef.current.innerHTML = `**${thought.label}**. Reconoce esta emoción/tarea sin juzgarla. Es solo un pensamiento.`;
      reflectionPanelRef.current.classList.remove('hidden');
    }
    thought.color = '#fcd34d'; thought.textColor = '#b45309'; thought.opacity = 1.0;
  };

  const releaseThought = () => {
    if (!selectedThought || !isRunning) return;
    clarityScore += 5; streak += 1; updateDisplay();
    thoughts = thoughts.filter(t => !(t === selectedThought));
    selectedThought = null; reflectionPanelRef.current?.classList.add('hidden');
    if (onReadyToComplete) onReadyToComplete(true);
  };

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (selectedThought || !isRunning) return;
    const canvas = canvasRef.current; if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width; const scaleY = canvas.height / rect.height;
    const x = (e.clientX - rect.left) * scaleX; const y = (e.clientY - rect.top) * scaleY;
    for (const t of thoughts) {
      const d = Math.hypot(t.x - x, t.y - y);
      if (d < t.radius) { enterReflectionMode(t); return; }
    }
  };

  useEffect(() => {
    resizeCanvas();
    const onResize = () => resizeCanvas();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <header className="text-center mb-4 max-w-xl">
        <h4 className="text-2xl font-extrabold text-gray-800 mb-1">El Estanque Mental</h4>
        <p className="text-gray-700">Reconoce tus pensamientos, acéptalos y <strong>suéltalos conscientemente</strong>.</p>
      </header>
      <div className="mb-3 text-sm text-gray-600 flex flex-wrap items-center justify-center gap-4">
        <span className="flex items-center gap-2"><i className="fas fa-star text-yellow-500"></i><span><strong>Claridad</strong>: puntos por liberar</span></span>
        <span className="flex items-center gap-2"><i className="fas fa-heart text-rose-500"></i><span><strong>Paz Interior</strong>: estado de calma</span></span>
        <span className="flex items-center gap-2"><i className="fas fa-fire text-orange-500"></i><span><strong>Racha</strong>: liberaciones consecutivas</span></span>
      </div>
      {!showFull && (
        <button onClick={()=> setShowFull(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded">Entrar al juego (pantalla completa)</button>
      )}
      {showFull && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={()=>{ setShowFull(false); }}>
          <div className="relative bg-white rounded-xl w-full max-w-3xl max-h-[95vh] overflow-auto p-4" onClick={(e)=> e.stopPropagation()}>
            <button onClick={()=>{ setShowFull(false); }} className="absolute top-3 right-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center"><i className="fas fa-times"></i></button>
            <div id="game-container" ref={containerRef} className="w-full rounded-xl overflow-hidden shadow">
              <div className="bg-indigo-700 text-white p-4 flex justify-between items-center rounded-t-xl">
                <div ref={clarityRef} className="text-xl font-bold text-green-300">Claridad: 0</div>
                <div ref={peaceRef} className="text-xl font-bold">Paz Interior: 100%</div>
                <div ref={streakRef} className="text-xl font-bold text-yellow-300">Racha: 0</div>
              </div>
              <div ref={reflectionPanelRef} className="bg-indigo-50 p-4 border-b border-indigo-200 hidden">
                <p className="text-indigo-800 font-semibold mb-3">Reconocimiento:</p>
                <p ref={reflectionTextRef} className="text-gray-800 text-lg italic mb-4"></p>
                <button ref={releaseBtnRef} onClick={releaseThought} className="game-button bg-indigo-600 text-white hover:bg-indigo-700 w-full sm:w-auto px-4 py-2 rounded">Soltar y Liberar Conscientemente</button>
              </div>
              <canvas ref={canvasRef} onClick={handleCanvasClick} className="w-full" style={{ backgroundColor:'#93c5fd', borderTop:'4px solid #60a5fa' }} />
            </div>
            <div className="mt-4 flex gap-3">
              <button ref={startBtnRef} onClick={startGame} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded">Comenzar la Meditación</button>
              <button ref={resetBtnRef} onClick={startGame} className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded hidden">Reiniciar</button>
            </div>
            <div ref={gameModalRef} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 hidden transition-opacity duration-300 opacity-0">
              <div className="bg-white rounded-xl p-8 w-full max-w-sm text-center shadow-2xl transform scale-90 transition-transform duration-300">
                <h3 ref={modalTitleRef} className="text-3xl font-extrabold text-indigo-700 mb-4"></h3>
                <p ref={modalTextRef} className="text-gray-600 mb-6"></p>
                <button onClick={startGame} className="game-button bg-indigo-500 text-white hover:bg-indigo-600 px-6 py-2 rounded font-bold">Volver a la Calma</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PondGame;
