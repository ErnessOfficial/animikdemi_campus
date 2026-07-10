// =============================================================================
//  ANIMIKDEMI CAMPUS · Kápsula: En el Ojo del Huracán — Conversaciones Difíciles
//  ID: kapsula-ojo-del-huracan
//  Archivo: constants/courses/kapsula-ojo-del-huracan.ts
//
//  Kápsula de microaprendizaje derivada del Módulo 5 del programa
//  "Comunicación Asertiva y Empatía" (Mikro Plus).
//  Duración estimada: < 35 minutos · Costo: 1 Krédito
// =============================================================================

import type { Course } from '../../types';
import { assetPath } from '../../utils/paths';
import { mockInstructor } from './courseData';

// ─────────────────────────────────────────────────────────────────────────────
// PALETA DE ESTILOS COMPARTIDA
// ─────────────────────────────────────────────────────────────────────────────
const CSS_BASE = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  :root{
    --p:#6e4380;--pd:#4c1760;--pl:#f5f0f8;
    --b:#24668e;--bd:#1a4a69;--bl:#e8f4f8;
    --dark:#101021;--gray:#6b7280;--lgray:#f0f2f5;--white:#fff;
    --green:#16a34a;--gl:#f0fdf4;
    --red:#dc2626;--rl:#fef2f2;
    --amber:#d97706;--al:#fffbeb;
    --r:14px;--sh:0 4px 20px rgba(16,16,33,.10);
  }
  body{font-family:'Inter',system-ui,sans-serif;color:var(--dark);background:var(--white);line-height:1.65;overflow-x:hidden}
  h1,h2,h3,h4{line-height:1.2;font-weight:700}
  p{color:#374151;font-size:15px}
  strong{color:var(--dark)}
  .chip{display:inline-block;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:2px;padding:4px 10px;border-radius:20px}
`;

// ─────────────────────────────────────────────────────────────────────────────
// A1 · Escape Room Virtual "La Crisis"
// ─────────────────────────────────────────────────────────────────────────────
const A1_HTML = `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>
${CSS_BASE}
body{background:#0a0a12;color:#e2e8f0;min-height:100vh;overflow-x:hidden}
#app{max-width:680px;margin:0 auto;padding:0 0 48px}
.room-header{background:linear-gradient(160deg,#1a0000,#0d0d2a);padding:32px 24px;border-bottom:2px solid rgba(239,68,68,.2);text-align:center;position:relative;overflow:hidden;color:#fff}
.room-header p,.room-header strong{color:#fff}
.room-header::before{content:'⚠';position:absolute;font-size:120px;opacity:.05;top:0;right:0;pointer-events:none}
.chip-danger{background:rgba(239,68,68,.15);color:#f87171;border:1px solid rgba(239,68,68,.3);padding:5px 14px;border-radius:20px;font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:2px;margin-bottom:14px;display:inline-block}
.room-header h1{font-size:26px;font-weight:800;background:linear-gradient(90deg,#f87171,#fb923c);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:8px}
.room-header p{font-size:14px;color:#94a3b8;line-height:1.65;max-width:480px;margin:0 auto}
.timer-bar{background:rgba(239,68,68,.08);border-bottom:1px solid rgba(239,68,68,.15);padding:10px 24px;display:flex;align-items:center;gap:10px;font-size:13px;color:#f87171;font-weight:700;font-family:monospace}
.progress-track{background:rgba(255,255,255,.06);height:6px;border-radius:4px;flex:1;overflow:hidden}
.progress-fill{height:100%;background:linear-gradient(90deg,#ef4444,#f97316);border-radius:4px;width:0%;transition:width .5s ease}
.stage{padding:24px;display:none}
.stage.active{display:block;animation:fadeIn .4s ease}
@keyframes fadeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
.stage-header{margin-bottom:18px}
.stage-num{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:2px;color:#64748b;margin-bottom:6px}
.stage-title{font-size:20px;font-weight:800;color:#e2e8f0;margin-bottom:6px}
.stage-desc{font-size:14px;color:#94a3b8;line-height:1.65}
.scenario-box{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:20px 22px;margin:16px 0}
.scenario-box .label{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#64748b;margin-bottom:8px}
.scenario-box p{font-size:14px;color:#cbd5e1;line-height:1.65;font-style:italic}
.options{display:flex;flex-direction:column;gap:10px;margin-top:16px}
.opt-btn{background:rgba(255,255,255,.04);border:1.5px solid rgba(255,255,255,.1);border-radius:12px;padding:14px 18px;font-size:14px;color:#e2e8f0;cursor:pointer;text-align:left;transition:all .2s;line-height:1.5}
.opt-btn:hover{border-color:rgba(165,180,252,.4);background:rgba(165,180,252,.08)}
.opt-btn.correct{border-color:#22c55e!important;background:rgba(34,197,94,.1)!important;color:#86efac}
.opt-btn.wrong{border-color:#ef4444!important;background:rgba(239,68,68,.1)!important;color:#fca5a5;cursor:default}
.feedback-box{display:none;border-radius:12px;padding:14px 18px;margin-top:12px;font-size:14px;line-height:1.6}
.feedback-box.show{display:block;animation:fadeIn .3s ease}
.fb-ok{background:rgba(34,197,94,.1);border:1px solid rgba(34,197,94,.25);color:#86efac}
.fb-err{background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.25);color:#fca5a5}
.next-btn{display:none;margin-top:16px;background:linear-gradient(135deg,#6d28d9,#2563eb);color:#fff;border:none;border-radius:12px;padding:14px 28px;font-size:15px;font-weight:700;cursor:pointer;transition:all .2s;width:100%}
.next-btn.show{display:block}
.next-btn:hover{opacity:.9;transform:translateY(-2px)}
.victory{display:none;padding:32px 24px;text-align:center}
.victory.show{display:block;animation:fadeIn .6s ease}
.trophy{font-size:72px;margin-bottom:16px}
.victory h2{font-size:26px;font-weight:800;background:linear-gradient(90deg,#fbbf24,#34d399);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:10px}
.victory p{font-size:15px;color:#94a3b8;line-height:1.7;margin-bottom:8px;max-width:480px;margin:0 auto 10px}
.skills-earned{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-top:20px}
.skill-badge{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:20px;padding:6px 16px;font-size:13px;color:#e2e8f0;font-weight:600}
</style></head>
<body>
<div id="app">
<div class="room-header">
  <span class="chip-danger">🔐 Escape Room Virtual</span>
  <h1>La Crisis</h1>
  <p>Eres el mediador. Una sociedad está a punto de romperse. Para escapar de esta sala debes aplicar todo lo aprendido. Cada elección cuenta.</p>
</div>
<div class="timer-bar">
  <span>⚡ MODO CRISIS</span>
  <div class="progress-track"><div class="progress-fill" id="progressFill"></div></div>
  <span id="stageCount">0/3</span>
</div>
<!-- FASE 1 -->
<div class="stage active" id="s1">
  <div class="stage-header">
    <div class="stage-num">🔑 Pista 1 de 3</div>
    <div class="stage-title">La sala de crisis</div>
    <div class="stage-desc">Marcos, tu socio de 5 años, entra furioso y dice que quiere abandonar el proyecto inmediatamente. ¿Cuál es la primera acción asertiva?</div>
  </div>
  <div class="scenario-box"><div class="label">Escenario</div><p>"¡Estoy harto! He hecho todo el trabajo y tú te llevas el crédito. Me voy. Este proyecto está muerto."</p></div>
  <div class="options">
    <button class="opt-btn" onclick="ans(1,0,false)">A. Responderle con la misma intensidad: "¡Pues vete entonces, no te necesito!"</button>
    <button class="opt-btn" onclick="ans(1,1,false)">B. Quedarse en silencio y esperar a que se calme solo.</button>
    <button class="opt-btn" onclick="ans(1,2,true)">C. Respirar, bajar el tono y decir: "Marcos, noto que estás muy afectado. Necesito entender qué ha pasado desde tu perspectiva. ¿Podemos sentarnos cinco minutos?"</button>
    <button class="opt-btn" onclick="ans(1,3,false)">D. Intentar convencerle de que está equivocado antes de escucharle.</button>
  </div>
  <div class="feedback-box fb-err" id="fb1_err">❌ Esa respuesta escala el conflicto o lo evita. En una crisis, el primer paso es <strong>gestionar tu propia respuesta fisiológica</strong>, bajar la intensidad y abrir espacio para ser escuchados mutuamente.</div>
  <div class="feedback-box fb-ok" id="fb1_ok">✅ <strong>¡Pista 1 desbloqueada!</strong> Respirar antes de responder activa el córtex prefrontal y desactiva la amígdala. Has aplicado la <strong>gestión de la respuesta fisiológica</strong>.</div>
  <button class="next-btn" id="n1" onclick="next(2)">Continúa hacia la Pista 2 →</button>
</div>
<!-- FASE 2 -->
<div class="stage" id="s2">
  <div class="stage-header">
    <div class="stage-num">🔑 Pista 2 de 3</div>
    <div class="stage-title">La petición asertiva</div>
    <div class="stage-desc">Marcos se ha calmado un poco. Escuchas que su queja principal es que siente que sus ideas no se reconocen. Debes hacer una petición clara para buscar un acuerdo.</div>
  </div>
  <div class="scenario-box"><div class="label">Lo que Marcos acaba de decirte</div><p>"Nadie nunca reconoce lo que aporto. En la última presentación con el cliente fue otra vez igual. Sigo aquí porque creo en el proyecto, pero así no puedo más."</p></div>
  <div class="options">
    <button class="opt-btn" onclick="ans(2,0,false)">A. "Bueno, tampoco exageres. Todo el mundo trabaja mucho aquí."</button>
    <button class="opt-btn" onclick="ans(2,1,true)">B. "Te escucho y entiendo que sentirte invisible en el trabajo es agotador. ¿Qué necesitarías de mi parte para que eso cambie de forma concreta?"</button>
    <button class="opt-btn" onclick="ans(2,2,false)">C. Prometerle que en adelante lo reconocerás sin especificar cómo ni cuándo.</button>
    <button class="opt-btn" onclick="ans(2,3,false)">D. Defenderle que la presentación fue un trabajo de equipo y que el crédito es compartido.</button>
  </div>
  <div class="feedback-box fb-err" id="fb2_err">❌ Minimizar la experiencia del otro, prometer sin concretar o ponerse defensivo son trampas comunes. Lo que necesita Marcos es sentirse <strong>validado y escuchado</strong>, y que surja una petición específica de cambio.</div>
  <div class="feedback-box fb-ok" id="fb2_ok">✅ <strong>¡Pista 2 desbloqueada!</strong> Validaste la emoción sin estar de acuerdo con todo, y luego hiciste una <strong>petición asertiva y abierta</strong> que invita al otro a co-construir la solución.</div>
  <button class="next-btn" id="n2" onclick="next(3)">Continúa hacia la Pista 3 →</button>
</div>
<!-- FASE 3 -->
<div class="stage" id="s3">
  <div class="stage-header">
    <div class="stage-num">🔑 Pista 3 de 3</div>
    <div class="stage-title">El feedback final</div>
    <div class="stage-desc">Marcos propone que cada uno presente sus partes del trabajo personalmente en las reuniones con clientes. Tú no estás totalmente de acuerdo, pero quieres dar feedback constructivo sobre su propuesta.</div>
  </div>
  <div class="scenario-box"><div class="label">Propuesta de Marcos</div><p>"Quiero que en cada reunión con clientes, cada uno presente la parte que desarrolló. Así queda claro quién hizo qué."</p></div>
  <div class="options">
    <button class="opt-btn" onclick="ans(3,0,false)">A. "Me parece bien, lo que tú digas." (aceptar sin estar convencido)</button>
    <button class="opt-btn" onclick="ans(3,1,false)">B. "Eso es una mala idea, los clientes prefieren un frente unido."</button>
    <button class="opt-btn" onclick="ans(3,2,true)">C. "Me gusta la intención detrás de tu propuesta: que cada uno tenga visibilidad. Lo que me pregunto es si podemos encontrar otra forma de que tu contribución sea reconocida tanto interna como externamente. ¿Qué opinas?"</button>
    <button class="opt-btn" onclick="ans(3,3,false)">D. "Podemos probarlo, pero sabes que no va a funcionar, ¿verdad?"</button>
  </div>
  <div class="feedback-box fb-err" id="fb3_err">❌ Aceptar sin convicción es pasivo. Rechazar directamente sin alternativa es agresivo. Predecir el fracaso socava la confianza. El feedback asertivo primero <strong>reconoce lo válido</strong> y luego abre el diálogo.</div>
  <div class="feedback-box fb-ok" id="fb3_ok">✅ <strong>¡Pista 3 desbloqueada! ¡Has escapado de la sala!</strong> Encontraste algo válido en la propuesta de Marcos y abriste el diálogo. Esto activa la reciprocidad y mantiene la relación intacta.</div>
  <button class="next-btn" id="n3" onclick="showVictory()">Ver resultado final 🏆</button>
</div>
<!-- VICTORIA -->
<div class="victory" id="victory">
  <div class="trophy">🏆</div>
  <h2>¡Sala desbloqueada!</h2>
  <p>Has navegado una crisis de sociedad usando todas las herramientas del comunicador asertivo: gestión emocional, escucha empática, petición clara y feedback constructivo.</p>
  <p>Marcos y tú no solo salvaron el proyecto. Fortalecieron la relación.</p>
  <div class="skills-earned">
    <span class="skill-badge">✅ Gestión emocional</span>
    <span class="skill-badge">✅ Escucha activa</span>
    <span class="skill-badge">✅ Petición asertiva</span>
    <span class="skill-badge">✅ Feedback constructivo</span>
  </div>
</div>
</div>
<script>
var correctCount=0;
function ans(stage,opt,isCorrect){
  var btns=document.getElementById('s'+stage).querySelectorAll('.opt-btn');
  btns.forEach(function(b){b.disabled=true;b.style.cursor='default'});
  btns[opt].classList.add(isCorrect?'correct':'wrong');
  var fb=document.getElementById('fb'+stage+'_'+(isCorrect?'ok':'err'));
  fb.classList.add('show');
  if(isCorrect){
    correctCount++;
    document.getElementById('progressFill').style.width=(correctCount/3*100)+'%';
    document.getElementById('stageCount').textContent=correctCount+'/3';
    document.getElementById('n'+stage).classList.add('show');
  }
}
function next(stage){document.getElementById('s'+(stage-1)).style.display='none';document.getElementById('s'+stage).classList.add('active')}
function showVictory(){document.getElementById('s3').style.display='none';document.getElementById('victory').classList.add('show')}
</script>
</body></html>`;

// ─────────────────────────────────────────────────────────────────────────────
// A2 · Botiquín de Primeros Auxilios Emocionales
// ─────────────────────────────────────────────────────────────────────────────
const A2_HTML = `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>
${CSS_BASE}
body{background:linear-gradient(160deg,#0f0f23,#0d2340);min-height:100vh;padding:0 0 48px;color:#e2e8f0}
.hero{padding:32px 24px;text-align:center;border-bottom:1px solid rgba(255,255,255,.06)}
.hero p,.hero strong{color:#e2e8f0}
.hero .chip{background:rgba(251,191,36,.12);color:#fbbf24;border:1px solid rgba(251,191,36,.25);margin-bottom:14px}
.hero h1{font-size:24px;font-weight:800;color:#fff;margin-bottom:10px}
.hero p{font-size:14px;color:#94a3b8;line-height:1.7;max-width:500px;margin:0 auto}
.tabs{display:flex;gap:8px;padding:20px 20px 0;overflow-x:auto;scrollbar-width:none}
.tabs::-webkit-scrollbar{display:none}
.tab{padding:8px 16px;border-radius:20px;font-size:12px;font-weight:700;cursor:pointer;border:1.5px solid rgba(255,255,255,.12);color:#94a3b8;background:transparent;white-space:nowrap;transition:all .2s;flex-shrink:0}
.tab.active{background:var(--p);border-color:var(--p);color:#fff}
.panel{display:none;padding:20px;animation:fadeIn .3s ease}
.panel.active{display:block}
@keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
/* Respiración */
.breath-container{text-align:center;padding:20px 0}
.circle-wrap{width:180px;height:180px;margin:0 auto 24px;position:relative}
#circle{width:100%;height:100%;border-radius:50%;background:radial-gradient(circle,rgba(110,67,128,.6),rgba(36,102,142,.4));border:2px solid rgba(165,180,252,.3);display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;font-size:14px;font-weight:600;color:#c4b5fd;text-align:center;line-height:1.4;transition:transform .3s ease,box-shadow .3s ease;box-shadow:0 0 30px rgba(110,67,128,.3)}
#circle.expand{transform:scale(1.35);box-shadow:0 0 60px rgba(110,67,128,.5)}
#circle.contract{transform:scale(0.85);box-shadow:0 0 15px rgba(110,67,128,.2)}
#counter{font-size:36px;font-weight:800;color:#c4b5fd;margin-bottom:4px}
#subLabel{font-size:13px;color:#94a3b8}
#cycleLabel{font-size:12px;color:#4ade80;margin-top:8px;font-weight:600;min-height:18px}
.start-btn{background:linear-gradient(135deg,var(--p),var(--b));color:#fff;border:none;padding:12px 28px;border-radius:12px;font-size:15px;font-weight:700;cursor:pointer;transition:all .2s}
.start-btn:hover{opacity:.9;transform:translateY(-2px)}
.info-steps{max-width:400px;margin:20px auto 0;text-align:left}
.info-step{display:flex;gap:12px;margin-bottom:12px;font-size:13px;color:#94a3b8}
.info-step .dot{width:8px;height:8px;border-radius:50%;margin-top:5px;flex-shrink:0}
/* Pausa Táctica */
.tactic-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:4px}
.tactic-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:16px;transition:border .2s}
.tactic-card:hover{border-color:rgba(165,180,252,.3)}
.tactic-card .tc-icon{font-size:24px;margin-bottom:8px}
.tactic-card h3{font-size:14px;font-weight:700;color:#e2e8f0;margin-bottom:4px}
.tactic-card p{font-size:12px;color:#64748b;line-height:1.55;margin:0}
/* Frases Salvavidas */
.phrase-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06);border-radius:14px;padding:16px 20px;margin-bottom:10px;cursor:pointer;transition:all .2s}
.phrase-card:hover{border-color:rgba(251,191,36,.3);background:rgba(251,191,36,.05)}
.phrase-card .emoji{font-size:20px;margin-bottom:6px}
.phrase-card h3{font-size:14px;font-weight:700;color:#e2e8f0;margin-bottom:4px;line-height:1.4}
.phrase-card p{font-size:13px;color:#64748b;margin:0}
.phrase-card .why{font-size:13px;color:#94a3b8;margin-top:10px;padding-top:10px;border-top:1px solid rgba(255,255,255,.06);line-height:1.55}
</style></head>
<body>
<div class="hero">
  <span class="chip">🩹 Kápsula · Botiquín Emocional</span>
  <h1>Primeros Auxilios Emocionales</h1>
  <p>Tres herramientas para gestionar conversaciones difíciles en tiempo real: antes de que tu amígdala tome el control.</p>
</div>
<div class="tabs">
  <button class="tab active" onclick="showTab('breath',this)">🫁 Respiración 4-7-8</button>
  <button class="tab" onclick="showTab('tactic',this)">⏸ Pausa Táctica</button>
  <button class="tab" onclick="showTab('phrases',this)">💚 Frases Salvavidas</button>
</div>
<!-- Respiración -->
<div class="panel active" id="tab-breath">
  <div class="breath-container">
    <div class="circle-wrap">
      <div id="circle" onclick="startBreath()">Toca para<br>empezar</div>
    </div>
    <div id="counter"></div>
    <div id="subLabel" style="font-size:13px;color:#94a3b8;margin-bottom:12px">Haz clic para comenzar</div>
    <div id="cycleLabel"></div>
    <br>
    <button class="start-btn" onclick="startBreath()">▶ Iniciar / Pausar</button>
    <div class="info-steps">
      <div class="info-step"><div class="dot" style="background:#a5b4fc"></div><span><strong style="color:#a5b4fc">Inhala 4s:</strong> Llena los pulmones completamente, siente el abdomen expandirse.</span></div>
      <div class="info-step"><div class="dot" style="background:#fbbf24"></div><span><strong style="color:#fbbf24">Retén 7s:</strong> El oxígeno se distribuye. Activa tu sistema parasimpático.</span></div>
      <div class="info-step"><div class="dot" style="background:#34d399"></div><span><strong style="color:#34d399">Exhala 8s:</strong> Lenta y completa. Libera tensión acumulada.</span></div>
    </div>
  </div>
</div>
<!-- Pausa Táctica -->
<div class="panel" id="tab-tactic">
  <p style="color:#94a3b8;font-size:14px;margin-bottom:20px;line-height:1.65">La Pausa Táctica no es huir del conflicto. Es una herramienta deliberada para evitar que tu amígdala tome decisiones que tu córtex prefrontal lamentará después.</p>
  <div class="tactic-grid">
    <div class="tactic-card"><div class="tc-icon">🚰</div><h3>El vaso de agua</h3><p>Pide un vaso de agua antes de responder. Da tiempo real al cerebro para reactivarse.</p></div>
    <div class="tactic-card"><div class="tc-icon">📝</div><h3>Escribe antes de hablar</h3><p>Anota lo que sientes en 3 palabras. Externalizar activa la corteza prefrontal.</p></div>
    <div class="tactic-card"><div class="tc-icon">🚶</div><h3>El paseo de 2 minutos</h3><p>Levantarte y caminar reduce la activación fisiológica en menos de 90 segundos.</p></div>
    <div class="tactic-card"><div class="tc-icon">🔄</div><h3>Reformula en tu mente</h3><p>Antes de responder pregúntate: "¿Qué quiere realmente esta persona?" Cambia el marco.</p></div>
    <div class="tactic-card"><div class="tc-icon">⏰</div><h3>Pide tiempo explícito</h3><p>"Necesito 5 minutos para pensar antes de responder." Es asertivo y efectivo.</p></div>
    <div class="tactic-card"><div class="tc-icon">🌊</div><h3>Cuenta la ola</h3><p>Observa la emoción como si fuera una ola. Llegará a su pico y bajará. No tienes que actuar en la cresta.</p></div>
  </div>
</div>
<!-- Frases Salvavidas -->
<div class="panel" id="tab-phrases">
  <p style="color:#94a3b8;font-size:14px;margin-bottom:20px;line-height:1.65">Estas frases están diseñadas para ganar tiempo, reducir la temperatura y mantener el diálogo abierto. Haz clic en cada una para ver por qué funciona.</p>
  <div class="phrase-card" onclick="toggleWhy(this)">
    <div class="emoji">🫁</div>
    <h3>"Dame un momento, quiero responderte bien."</h3>
    <p>Pide tiempo sin huir. Muestra intención de calidad en la respuesta.</p>
    <div class="why" style="display:none">✅ <strong>Por qué funciona:</strong> Comunica respeto por la conversación y por el otro. No parece una evasión porque anuncias tu intención de volver. Desactiva la urgencia agresiva del otro.</div>
  </div>
  <div class="phrase-card" onclick="toggleWhy(this)">
    <div class="emoji">🎯</div>
    <h3>"Ayúdame a entender qué es lo más importante para ti en esto."</h3>
    <p>Redirige del ataque a los intereses reales. Abre el diálogo.</p>
    <div class="why" style="display:none">✅ <strong>Por qué funciona:</strong> Cuando alguien está en modo ataque, suele ser porque se siente no escuchado. Esta frase da control al otro y mueve la conversación de posiciones a intereses.</div>
  </div>
  <div class="phrase-card" onclick="toggleWhy(this)">
    <div class="emoji">🤝</div>
    <h3>"Entiendo que esto es importante para ti. Para mí también lo es."</h3>
    <p>Valida sin rendirse. Establece igualdad de importancia.</p>
    <div class="why" style="display:none">✅ <strong>Por qué funciona:</strong> Valida la emoción del otro sin ceder en tu posición. Establece que ambos tenéis algo en juego, lo que predispone a buscar soluciones conjuntas.</div>
  </div>
  <div class="phrase-card" onclick="toggleWhy(this)">
    <div class="emoji">🌱</div>
    <h3>"Quizás ambos tenemos parte de razón. ¿Podemos buscar un punto en común?"</h3>
    <p>Encuentra algo válido en la postura contraria. Activa la reciprocidad.</p>
    <div class="why" style="display:none">✅ <strong>Por qué funciona:</strong> Encontrar algo válido en la posición del otro activa reciprocidad. El otro se abre cuando siente que no está siendo totalmente rechazado.</div>
  </div>
  <div class="phrase-card" onclick="toggleWhy(this)">
    <div class="emoji">💚</div>
    <h3>"Lo que más me importa en esta conversación es que salgamos con algo que funcione para los dos."</h3>
    <p>Declara intención Win-Win. Reencuadra el objetivo.</p>
    <div class="why" style="display:none">✅ <strong>Por qué funciona:</strong> Cuando alguien siente que no estás ahí para "ganar" sino para resolver, su sistema nervioso se calma. Declarar intención cooperativa es una de las intervenciones más poderosas en conflictos.</div>
  </div>
</div>
<script>
function showTab(id,btn){
  document.querySelectorAll('.panel').forEach(function(p){p.classList.remove('active')});
  document.querySelectorAll('.tab').forEach(function(t){t.classList.remove('active')});
  document.getElementById('tab-'+id).classList.add('active');btn.classList.add('active');
}
function toggleWhy(card){
  var why=card.querySelector('.why');
  why.style.display=why.style.display==='block'?'none':'block';
}
var isBreathing=false;var breathCycle=0;var breathTimer=null;
var phases=[{label:'Inhala...',seconds:4,action:'expand'},{label:'Retén...',seconds:7,action:'hold'},{label:'Exhala...',seconds:8,action:'contract'}];
function startBreath(){
  var circle=document.getElementById('circle');
  if(isBreathing){clearInterval(breathTimer);isBreathing=false;resetBreath();return;}
  isBreathing=true;breathCycle=0;document.getElementById('cycleLabel').textContent='';runPhase(0);
}
function runPhase(p){
  if(!isBreathing)return;
  var ph=phases[p];var circle=document.getElementById('circle');var counter=document.getElementById('counter');var sub=document.getElementById('subLabel');var cycleLabel=document.getElementById('cycleLabel');
  circle.innerHTML=ph.label;
  if(ph.action==='expand'){circle.style.transition='transform '+ph.seconds+'s ease,box-shadow '+ph.seconds+'s ease';circle.classList.add('expand');circle.classList.remove('contract');}
  else if(ph.action==='contract'){circle.style.transition='transform '+ph.seconds+'s ease,box-shadow '+ph.seconds+'s ease';circle.classList.add('contract');circle.classList.remove('expand');}
  var sec=ph.seconds;counter.textContent=sec;sub.textContent=ph.label;
  breathTimer=setInterval(function(){sec--;counter.textContent=sec;if(sec<=0){clearInterval(breathTimer);var nextP=(p+1)%3;if(nextP===0){breathCycle++;cycleLabel.textContent='Ciclo '+breathCycle+' completado';}if(breathCycle>=3){isBreathing=false;resetBreath();cycleLabel.textContent='¡Ejercicio completo! 3 ciclos realizados.';return;}runPhase(nextP);}},1000);
}
function resetBreath(){var circle=document.getElementById('circle');circle.innerHTML='Toca para<br>empezar';circle.classList.remove('expand','contract');circle.style.transition='transform 0.3s ease';document.getElementById('counter').textContent='';document.getElementById('subLabel').textContent='Haz clic para comenzar';}
</script>
</body></html>`;

// =============================================================================
//  EXPORTACIÓN DEL CURSO
// =============================================================================

export const course: Course = {
  id: 'kapsula-ojo-del-huracan',
  title: 'En el Ojo del Huracán: Conversaciones Difíciles',
  subtitle: 'Aprende a mantener la calma y comunicarte con claridad cuando la presión emocional está al máximo.',
  description: `Las conversaciones difíciles no fallan por falta de palabras, sino por falta de regulación emocional. Cuando el cerebro activa la amígdala, la parte racional "se apaga" y tomamos decisiones que lamentamos. Esta Kápsula te entrena con un Escape Room virtual de 3 fases en el que deberás aplicar todas las técnicas bajo presión, más un Botiquín de Primeros Auxilios Emocionales con herramientas inmediatas para usar en el momento de crisis.`,
  category: 'Relaciones & Comunicación con Criterio',
  broadCategories: ['Habilidades Sociales', 'Gestión Emocional'],
  coverImage: 'https://res.cloudinary.com/djybwowo6/image/upload/v1783647720/ojo-del-huracan_n7o50w.png',
  instructor: mockInstructor,
  estimatedDurationMinutes: 45,
  kreditos: 1,
  courseType: 'kapsula',
  learningObjectives: [
    'Comprender el mecanismo del "secuestro de la amígdala" en conversaciones bajo presión.',
    'Aplicar técnicas de gestión fisiológica en tiempo real ante conflictos.',
    'Practicar el Escape Room virtual aplicando escucha empática, petición asertiva y feedback.',
    'Dominar 5 frases salvavidas y 6 pausas tácticas para conversaciones difíciles.',
  ],

  modules: [
    {
      id: 'km5-mod1',
      title: '🌪️ En el Ojo del Huracán',
      activities: [
        {
          id: 'km5-a1',
          type: 'text',
          title: 'Cuando el cerebro se secuestra: la amígdala en acción',
          description: 'Aprende qué ocurre en tu cerebro cuando una conversación se calienta y por qué "responder bien" en esos momentos requiere preparación, no solo buena intención.',
          imageSrc: 'https://res.cloudinary.com/djybwowo6/image/upload/v1781761939/Gemini_Generated_Image_xstd07xstd07xstd_mgizqe.png',
          content: [
            'Cuando percibimos una amenaza en una conversación —un tono agresivo, una crítica, una acusación— nuestro cerebro activa la amígdala: el sistema de alarma. En milisegundos, el córtex prefrontal (la parte racional) queda parcialmente "desconectado".',
            'El resultado: tomamos decisiones impulsivas, decimos cosas que luego lamentamos, o nos bloqueamos completamente. Esto es el "secuestro de la amígdala".',
            'No es debilidad. Es biología. Y por eso la asertividad en conversaciones difíciles no es solo un tema de técnica: es un tema de gestión fisiológica.',
            '🔑 La buena noticia: podemos aprender a detectar cuándo estamos siendo secuestrados y usar técnicas específicas para recuperar el acceso a nuestra parte racional antes de responder.',
            'En esta Kápsula, integrarás todo lo aprendido y lo pondrás a prueba bajo presión. Bienvenido al nivel avanzado.',
          ],
        },
        {
          id: 'km5-a2',
          type: 'iframe',
          title: '🔐 Escape Room: La Crisis',
          description: 'Actividad integradora. Aplica todo lo aprendido para resolver una crisis de sociedad en 3 fases. ¿Podrás escapar de la sala con la relación intacta?',
          hideHeader: false,
          content: [A1_HTML],
        },
        {
          id: 'km5-a3',
          type: 'iframe',
          title: '🩹 Botiquín de Primeros Auxilios Emocionales',
          description: 'Técnicas de respiración, pausas tácticas y frases salvavidas para gestionar conversaciones difíciles en tiempo real.',
          hideHeader: false,
          content: [A2_HTML],
        },
        {
          id: 'km5-a4',
          type: 'evaluation',
          title: '🎯 Tu Plan de Vuelo Personal',
          description: 'Piensa en una conversación difícil que tienes pendiente en tu vida real. Construye aquí tu guion de preparación usando todo lo aprendido en esta Kápsula.',
          questions: [
            { prompt: '¿Cuál es la situación? (¿Con quién, sobre qué y por qué es difícil?) Describe el contexto brevemente.' },
            { prompt: 'Diseña tu apertura asertiva: ¿Cuál será tu primera frase? ¿Qué técnica de la Kápsula usarás si la conversación escala? ¿Cuál es el mejor resultado posible para ambas partes?' },
          ],
        },
      ],
    },
  ],
};

export default course;
