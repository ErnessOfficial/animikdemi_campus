// =============================================================================
//  ANIMIKDEMI CAMPUS · Kápsula: El Arte del "No" Saludable
//  ID: kapsula-arte-del-no
//  Archivo: constants/courses/kapsula-arte-del-no.ts
//
//  Kápsula de microaprendizaje derivada del Módulo 3 del programa
//  "Comunicación Asertiva y Empatía" (Mikro Plus).
//  Duración estimada: < 30 minutos · Costo: 1 Krédito
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
// A1 · Simulador de Chat DESC
// ─────────────────────────────────────────────────────────────────────────────
const A1_HTML = `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>
${CSS_BASE}
body{background:var(--lgray);padding:0 0 40px}
.page-header{background:linear-gradient(135deg,#ff6b35,#f59e0b);padding:28px 24px;color:#fff}
.page-header p,.page-header strong{color:#fff}
.page-header .chip{background:rgba(255,255,255,.2);color:#fff;margin-bottom:10px}
.page-header h1{font-size:22px;font-weight:800;margin-bottom:6px}
.page-header p{font-size:14px;opacity:.9;line-height:1.6}
.desc-bar{background:#fff;border-radius:var(--r);margin:20px 20px 0;padding:16px 20px;border-left:4px solid #f59e0b;box-shadow:var(--sh)}
.desc-bar h3{font-size:13px;font-weight:800;text-transform:uppercase;letter-spacing:1.5px;color:#d97706;margin-bottom:10px}
.desc-pills{display:flex;flex-wrap:wrap;gap:8px}
.pill{padding:6px 14px;border-radius:20px;font-size:12px;font-weight:700;cursor:pointer;transition:all .2s;border:2px solid transparent;user-select:none}
.pill.D{background:#fffbeb;color:#d97706;border-color:#fcd34d}.pill.E{background:#fef2f2;color:#dc2626;border-color:#fca5a5}
.pill.S{background:#f0fdf4;color:#16a34a;border-color:#86efac}.pill.C{background:var(--bl);color:var(--b);border-color:#93c5fd}
.pill:hover{filter:brightness(.95);transform:translateY(-1px)}
.chat-wrapper{max-width:480px;margin:20px auto;background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,.12)}
.chat-top{background:#075e54;padding:14px 18px;display:flex;align-items:center;gap:12px;color:#fff}
.chat-top .avatar{width:40px;height:40px;border-radius:50%;background:#128c7e;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700}
.chat-top .info .name{font-size:15px;font-weight:700}.chat-top .info .status{font-size:12px;opacity:.75}
.chat-body{background:#ece5dd;min-height:280px;padding:16px;display:flex;flex-direction:column;gap:10px;max-height:380px;overflow-y:auto}
.bubble{max-width:80%;padding:10px 14px;border-radius:12px;font-size:14px;line-height:1.5}
.bubble.in{background:#fff;border-radius:12px 12px 12px 0;align-self:flex-start}
.bubble.in .time{font-size:10px;color:#999;text-align:right;margin-top:4px}
.bubble.out{background:#dcf8c6;border-radius:12px 12px 0 12px;align-self:flex-end}
.bubble.out .time{font-size:10px;color:#999;text-align:right;margin-top:4px}
.bubble.out .desc-label{font-size:9px;font-weight:700;text-transform:uppercase;color:#075e54;opacity:.7;margin-bottom:2px}
.chat-input-area{background:#f0f0f0;padding:12px 14px;display:flex;flex-direction:column;gap:10px}
.built-response{min-height:44px;background:#fff;border-radius:10px;padding:10px 14px;font-size:13px;color:var(--dark);border:1.5px dashed #ccc;line-height:1.5;word-break:break-word}
.action-row{display:flex;gap:8px}
.send-btn{flex:1;background:#25d366;color:#fff;border:none;border-radius:10px;padding:10px;font-weight:700;font-size:14px;cursor:pointer;transition:all .2s}
.send-btn:hover{background:#1aab54}
.clear-btn{background:#f0f0f0;border:1.5px solid #ddd;color:#666;border-radius:10px;padding:10px 16px;font-size:13px;cursor:pointer}
.scenario-selector{background:#fff;border-radius:var(--r);margin:0 20px 0;padding:16px 20px;box-shadow:var(--sh)}
.scenario-selector h3{font-size:13px;font-weight:700;color:var(--gray);text-transform:uppercase;letter-spacing:1px;margin-bottom:10px}
.sc-btn{width:100%;text-align:left;background:var(--lgray);border:1.5px solid transparent;border-radius:10px;padding:10px 14px;font-size:13px;cursor:pointer;margin-bottom:8px;transition:all .2s;color:var(--dark)}
.sc-btn:hover,.sc-btn.active{background:var(--pl);border-color:var(--p);color:var(--pd)}
.tip{font-size:12px;color:var(--gray);text-align:center;margin:12px 20px 0;line-height:1.5}
</style></head>
<body>
<div class="page-header">
  <span class="chip">💬 Kápsula · El Arte del No</span>
  <h1>Simulador DESC — Construye tu respuesta asertiva</h1>
  <p>Recibe un mensaje exigente y construye tu respuesta usando la técnica DESC. Elige los bloques en orden.</p>
</div>
<div class="scenario-selector">
  <h3>Elige un escenario</h3>
  <button class="sc-btn active" onclick="setScene(0,this)">📋 Jefe pide 3 horas extra urgentes</button>
  <button class="sc-btn" onclick="setScene(1,this)">🤝 Colega pide que termines su informe</button>
  <button class="sc-btn" onclick="setScene(2,this)">👨‍👩‍👧 Familiar pide un gran favor sin avisar</button>
</div>
<div class="desc-bar">
  <h3>🧱 Construye tu respuesta DESC — haz clic en orden</h3>
  <div class="desc-pills" id="pills"></div>
</div>
<div class="chat-wrapper">
  <div class="chat-top">
    <div class="avatar" id="avatarLetter">J</div>
    <div class="info">
      <div class="name" id="chatName">Jefe (Luis R.)</div>
      <div class="status">en línea</div>
    </div>
  </div>
  <div class="chat-body" id="chatBody">
    <div class="bubble in"><span id="incomingMsg">¿Puedes quedarte hoy 3 horas más para terminar mi reporte? Lo necesito urgente.</span><div class="time">17:42</div></div>
  </div>
  <div class="chat-input-area">
    <div class="built-response" id="builtResponse" style="color:#aaa;font-style:italic">Haz clic en los bloques DESC para construir tu respuesta asertiva…</div>
    <div class="action-row">
      <button class="clear-btn" onclick="clearMsg()">↺ Borrar</button>
      <button class="send-btn" onclick="sendMsg()">Enviar ✓</button>
    </div>
  </div>
</div>
<p class="tip">💡 D = Describir la situación · E = Expresar cómo te afecta · S = Sugerir alternativa · C = Consecuencia positiva</p>
<script>
var scenes=[
  {name:'Jefe (Luis R.)',letter:'J',msg:'¿Puedes quedarte hoy 3 horas más para terminar mi reporte? Lo necesito urgente.',pills:[{t:'D',text:'Luis, entiendo que el reporte es urgente para ti.'},{t:'E',text:'Sin embargo, yo también tengo compromisos personales esta tarde que ya estaban planificados.'},{t:'S',text:'Lo que sí puedo hacer es dejarlo al 80% hoy y terminarlo mañana temprano, antes de las 9.'},{t:'C',text:'Así garantizamos calidad y yo puedo cumplir mis compromisos. ¿Te parece bien?'}]},
  {name:'Colega (María)',letter:'M',msg:'Oye, necesito que me termines el informe del cliente. Yo tengo mucho lío hoy y no me va a dar tiempo.',pills:[{t:'D',text:'María, entiendo que estás con mucha carga hoy.'},{t:'E',text:'Pero yo también tengo mis propias entregas pendientes esta semana.'},{t:'S',text:'Podría ayudarte a revisar la estructura o a redactar una sección concreta, si me lo envías ahora.'},{t:'C',text:'Así avanzamos los dos sin que ninguno quede mal con sus responsabilidades.'}]},
  {name:'Familiar (Carlos)',letter:'C',msg:'Oye, ven mañana a ayudarme con la mudanza. Llegaremos a las 7 de la mañana.',pills:[{t:'D',text:'Carlos, valoro que cuentes conmigo para algo tan importante como tu mudanza.'},{t:'E',text:'Pero mañana tengo un compromiso que no puedo cancelar, y un aviso con tan poca antelación me complica.'},{t:'S',text:'¿Qué te parece si te ayudo el sábado siguiente o busco a alguien más para mañana?'},{t:'C',text:'Así puedo darte apoyo real sin que ninguno de los dos quede mal.'}]}
];
var current=0;var built=[];var pillsUsed=[];
function setScene(idx,btn){
  current=idx;var sc=scenes[idx];
  document.getElementById('avatarLetter').textContent=sc.letter;
  document.getElementById('chatName').textContent=sc.name;
  document.getElementById('incomingMsg').textContent=sc.msg;
  var body=document.getElementById('chatBody');
  body.innerHTML='<div class="bubble in"><span>'+sc.msg+'</span><div class="time">17:42</div></div>';
  document.querySelectorAll('.sc-btn').forEach(function(b){b.classList.remove('active')});
  btn.classList.add('active');
  built=[];pillsUsed=[];
  document.getElementById('builtResponse').textContent='Haz clic en los bloques DESC para construir tu respuesta asertiva…';
  document.getElementById('builtResponse').style.cssText='color:#aaa;font-style:italic';
  renderPills();
}
function renderPills(){
  var sc=scenes[current];
  var html='';
  sc.pills.forEach(function(p,i){
    var used=pillsUsed.indexOf(i)!==-1;
    html+='<span class="pill '+p.t+(used?' disabled':'\')+\'" style="opacity:'+(used?'.4':'1')+';cursor:'+(used?'default':'pointer')+'\" onclick="addPill('+i+')" title="'+p.text+'">'+p.t+': '+p.text.substring(0,30)+'…</span>';
  });
  document.getElementById('pills').innerHTML=html;
}
function addPill(idx){
  if(pillsUsed.indexOf(idx)!==-1)return;
  var sc=scenes[current];
  built.push(idx);pillsUsed.push(idx);
  var txt=built.map(function(i){return sc.pills[i].text}).join(' ');
  var br=document.getElementById('builtResponse');
  br.textContent=txt;br.style.cssText='color:var(--dark);font-style:normal';
  renderPills();
}
function sendMsg(){
  var br=document.getElementById('builtResponse');
  var txt=br.textContent;
  if(!txt||built.length===0){br.style.borderColor='var(--red)';return;}
  var sc2=scenes[current];
  var now=new Date();var time=now.getHours()+':'+String(now.getMinutes()).padStart(2,'0');
  var body=document.getElementById('chatBody');
  var el=document.createElement('div');el.className='bubble out';
  var labels=built.map(function(idx){return sc2.pills[idx].t}).join(' → ');
  el.innerHTML='<div class="desc-label">'+labels+'</div>'+txt+'<div class="time">'+time+' ✓✓</div>';
  body.appendChild(el);body.scrollTop=body.scrollHeight;
  built=[];pillsUsed=[];
  br.textContent='¡Enviado! Prueba el siguiente escenario.';
  br.style.cssText='color:#16a34a;font-weight:600;font-style:normal';
  renderPills();
}
function clearMsg(){built=[];pillsUsed=[];document.getElementById('builtResponse').textContent='Haz clic en los bloques DESC para construir tu respuesta asertiva…';document.getElementById('builtResponse').style.cssText='color:#aaa;font-style:italic';renderPills()}
setScene(0,document.querySelector('.sc-btn'));
</script>
</body></html>`;

// ─────────────────────────────────────────────────────────────────────────────
// A2 · Cheatsheet Cómo decir NO sin quemar puentes
// ─────────────────────────────────────────────────────────────────────────────
const A2_HTML = `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>
${CSS_BASE}
body{background:linear-gradient(135deg,#fff7ed 0%,#fffbeb 100%);padding:32px 20px 48px;min-height:100vh}
.cover{text-align:center;max-width:600px;margin:0 auto 36px}
.cover .icon-wrap{width:72px;height:72px;background:linear-gradient(135deg,#f59e0b,#ef4444);border-radius:20px;display:flex;align-items:center;justify-content:center;font-size:32px;margin:0 auto 16px;box-shadow:0 8px 24px rgba(239,68,68,.25)}
.cover h1{font-size:26px;font-weight:800;color:#7c2d12;margin-bottom:6px}
.cover .sub{font-size:15px;color:#9a3412;opacity:.8}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px;max-width:900px;margin:0 auto}
.card{background:#fff;border-radius:16px;padding:22px 24px;box-shadow:0 2px 16px rgba(0,0,0,.07);border-top:4px solid var(--top-color,#f59e0b);transition:transform .2s,box-shadow .2s}
.card:hover{transform:translateY(-4px);box-shadow:0 8px 32px rgba(0,0,0,.12)}
.card .icon{font-size:24px;margin-bottom:10px}
.card h3{font-size:15px;font-weight:800;color:#1c1917;margin-bottom:8px}
.card .desc{font-size:13px;color:#78716c;line-height:1.6;margin-bottom:14px}
.example{background:#fafaf9;border-radius:10px;padding:12px 14px;border-left:3px solid var(--top-color,#f59e0b)}
.example .label{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#a78bfa;margin-bottom:6px}
.example .sit{font-size:12px;color:#78716c;margin-bottom:6px;font-style:italic}
.example .resp{font-size:13px;color:#1c1917;font-weight:500;line-height:1.55}
.download-hint{text-align:center;margin-top:28px;background:linear-gradient(135deg,#7c3aed,#2563eb);color:#fff;border-radius:16px;padding:20px 28px;max-width:900px;margin:28px auto 0}
.download-hint p,.download-hint strong{color:#fff}
.download-hint p{font-size:14px;opacity:.9}
</style></head>
<body>
<div class="cover">
  <div class="icon-wrap">🛡️</div>
  <h1>Cómo decir NO sin quemar puentes</h1>
  <p class="sub">Tu guía de plantillas asertivas para proteger tu tiempo con respeto</p>
</div>
<div class="grid">
  <div class="card" style="--top-color:#6d28d9"><div class="icon">🥪</div><h3>Técnica del Sándwich</h3><div class="desc">Empieza con algo positivo, di el NO claro, termina con algo constructivo.</div><div class="example"><div class="label">Situación</div><div class="sit">Tu colega te pide que cubras su turno mañana.</div><div class="resp">"Entiendo que estás en apuros y me alegra que cuentes conmigo. <strong>Pero mañana tengo un compromiso que no puedo mover.</strong> ¿Quieres que miremos juntos quién más podría ayudarte?"</div></div></div>
  <div class="card" style="--top-color:#2563eb"><div class="icon">🏗️</div><h3>Fórmula DESC</h3><div class="desc"><strong>D</strong>escribir · <strong>E</strong>xpresar · <strong>S</strong>ugerir · <strong>C</strong>onsecuencia positiva.</div><div class="example"><div class="label">Situación</div><div class="sit">Tu jefe pide un entregable urgente que no es tu responsabilidad.</div><div class="resp">"Entiendo que hay presión con el cliente. Yo ya estoy al límite esta semana. <strong>Lo que sí puedo es ayudarte a priorizar lo más urgente.</strong>"</div></div></div>
  <div class="card" style="--top-color:#16a34a"><div class="icon">🌧️</div><h3>El "No" con Empatía</h3><div class="desc">Valida la necesidad del otro antes de negar. Hace que el "no" se sienta como un apoyo.</div><div class="example"><div class="label">Situación</div><div class="sit">Un familiar pide dinero prestado.</div><div class="resp">"Sé que estás pasando un momento difícil y lo entiendo. <strong>Ahora mismo no estoy en posición de prestarte dinero,</strong> pero ¿podemos pensar juntos en otras opciones?"</div></div></div>
  <div class="card" style="--top-color:#f59e0b"><div class="icon">⏰</div><h3>El "No" con Alternativa de Tiempo</h3><div class="desc">No niegas la ayuda, sino el momento. Muy útil cuando sí quieres colaborar pero no ahora.</div><div class="example"><div class="label">Situación</div><div class="sit">Te piden una reunión urgente que no puedes atender.</div><div class="resp">"Ahora mismo estoy en medio de algo importante. <strong>¿Podemos vernos en 45 minutos?</strong> Así te doy la atención que merece el tema."</div></div></div>
  <div class="card" style="--top-color:#dc2626"><div class="icon">🪞</div><h3>El "No" sin Justificación</h3><div class="desc">A veces no debes explicaciones. Practica decir NO claro y cortés, sin excusas largas.</div><div class="example"><div class="label">Situación</div><div class="sit">Te insisten en algo que ya declinaste.</div><div class="resp">"Entiendo que es importante para ti. Mi respuesta es no. <strong>Si cambia algo en el futuro, te lo haré saber.</strong>"</div></div></div>
  <div class="card" style="--top-color:#0891b2"><div class="icon">🪜</div><h3>El "No" Progresivo</h3><div class="desc">Ofrece una versión reducida de lo que te piden. Cuidas la relación sin sobrecargarte.</div><div class="example"><div class="label">Situación</div><div class="sit">Te piden coordinar un proyecto entero.</div><div class="resp">"Asumir todo el proyecto ahora no me es posible. <strong>Sí puedo encargarme de la fase inicial</strong> y luego vemos cómo distribuimos el resto."</div></div></div>
</div>
<div class="download-hint">
  <p>💾 <strong>Guarda esta guía</strong> como referencia rápida. La próxima vez que necesites decir NO, elige la plantilla que mejor se adapte a tu situación.</p>
</div>
</body></html>`;

// =============================================================================
//  EXPORTACIÓN DEL CURSO
// =============================================================================

export const course: Course = {
  id: 'kapsula-arte-del-no',
  title: 'El Arte del "No" Saludable y la Petición Clara',
  subtitle: 'Aprende a decir no con respeto y a hacer peticiones claras que las personas realmente escuchan.',
  description: `Decir "no" sin sentir culpa ni quemar puentes es una de las habilidades más poderosas —y menos practicadas— en la vida adulta. Esta Kápsula te entrega la técnica DESC para construir respuestas asertivas en tiempo real, un simulador de chat interactivo con 3 escenarios reales, y una guía de 6 plantillas para proteger tu tiempo con respeto. Saldrás con las frases exactas para usar desde hoy.`,
  category: 'Relaciones & Comunicación con Criterio',
  broadCategories: ['Habilidades Sociales', 'Gestión Emocional'],
  coverImage: 'https://res.cloudinary.com/djybwowo6/image/upload/v1783647723/El_arte_del_no_inr5a2.png',
  instructor: mockInstructor,
  estimatedDurationMinutes: 40,
  kreditos: 1,
  courseType: 'kapsula',
  learningObjectives: [
    'Aplicar la fórmula DESC para hacer peticiones claras y negarse asertivamente.',
    'Practicar el "no" en tres escenarios reales: jefe, colega y familiar.',
    'Conocer 6 plantillas de rechazo asertivo para diferentes contextos.',
    'Identificar las 5 trampas del "no" mal dicho para evitarlas.',
  ],

  modules: [
    {
      id: 'km3-mod1',
      title: '💬 El Arte del No Saludable',
      activities: [
        {
          id: 'km3-a1',
          type: 'youtube',
          title: 'Barreras de la Comunicación',
          description: 'Reproduce el video y observa con atención las dinámicas de comunicación que ocurren. ¿Reconoces alguna en tus propias conversaciones?',
          videoSrc: 'https://youtu.be/f-glZkwlE1U?si=wcz5s7lFQSKO2kkt',
          content: [
            'A lo largo de nuestras interacciones diarias nos encontramos con diversos obstáculos que impiden que el mensaje llegue tal y como queríamos. A esto le llamamos "barreras de la comunicación".',
            'La falta de asertividad, el ruido, las distracciones o los prejuicios pueden alterar completamente el significado de una conversación. Identificar estas barreras es el primer paso para poder derribarlas.',
          ],
        },
        {
          id: 'km3-a2',
          type: 'iframe',
          title: '💬 Simulador DESC — Construye tu respuesta asertiva',
          description: 'Recibe mensajes exigentes y construye tu respuesta usando los bloques de la técnica DESC. 3 escenarios para practicar.',
          hideHeader: false,
          content: [A1_HTML],
        },
        {
          id: 'km3-a3',
          type: 'iframe',
          title: '🛡️ Caja de Herramientas: Cómo decir NO sin quemar puentes',
          description: 'Seis plantillas asertivas para proteger tu tiempo con respeto. Guarda esta referencia para cuando la necesites.',
          hideHeader: false,
          content: [A2_HTML],
        },
        {
          id: 'km3-a4',
          type: 'evaluation',
          title: '🎯 Práctica Real: Tu primer NO asertivo',
          description: 'Piensa en una situación real próxima o reciente en la que necesites (o hayas necesitado) decir no. Construye tu respuesta usando la técnica DESC.',
          questions: [
            { prompt: '¿Cuál es la situación concreta? (¿Quién te pide qué y cuándo?) Describe el contexto brevemente.' },
            { prompt: 'Escribe tu respuesta completa usando la técnica DESC: D (describe la situación), E (expresa el impacto), S (sugiere una alternativa), C (consecuencia positiva de aceptarla).' },
          ],
        },
      ],
    },
  ],
};

export default course;
