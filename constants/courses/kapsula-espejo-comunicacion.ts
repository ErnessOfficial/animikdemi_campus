// =============================================================================
//  ANIMIKDEMI CAMPUS · Kápsula: El Espejo de la Comunicación
//  ID: kapsula-espejo-comunicacion
//  Archivo: constants/courses/kapsula-espejo-comunicacion.ts
//
//  Kápsula de microaprendizaje derivada del Módulo 1 del programa
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
// A1 · Intro + Video Vertical 9:16
// ─────────────────────────────────────────────────────────────────────────────
const A1_HTML = `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>
${CSS_BASE}
.hero{background:linear-gradient(135deg,var(--pd) 0%,var(--b) 100%);padding:32px 24px 36px;color:#fff;position:relative;overflow:hidden}
.hero p, .hero strong { color:#fff; }
.hero::after{content:'';position:absolute;right:-60px;top:-60px;width:220px;height:220px;border-radius:50%;background:rgba(255,255,255,.05)}
.hero .chip{background:rgba(255,255,255,.15);color:#fff;margin-bottom:12px}
.hero h1{font-size:clamp(20px,5vw,28px);font-weight:800;margin-bottom:10px}
.hero p{font-size:15px;opacity:.92;max-width:560px}
.section{padding:28px 24px}
.section h2{font-size:18px;font-weight:800;color:var(--dark);margin-bottom:4px;text-align:center}
.section .sub{text-align:center;font-size:13px;color:var(--gray);margin-bottom:22px}
.phone-wrap{display:flex;justify-content:center;align-items:center;padding:8px 0}
.phone{background:#0f0f23;border-radius:36px;padding:14px;box-shadow:0 24px 80px rgba(110,67,128,.35);max-width:300px;width:100%}
.info-box{background:var(--bl);border-left:3px solid var(--b);border-radius:0 10px 10px 0;padding:14px 16px;margin-top:24px;font-size:14px;color:#1e3a5f;line-height:1.6}
</style></head><body>
<div class="hero">
  <span class="chip">⚡ Kápsula · El Espejo de la Comunicación</span>
  <h1>El Espejo de la Comunicación</h1>
  <p>Conocer los <strong>tres vértices de la comunicación</strong> —Pasiva, Agresiva y Asertiva— te ayudará a encontrar el punto de balance donde tus respuestas sean verdaderamente asertivas.</p>
</div>
<div class="section">
  <h2>🎬 Toma el control</h2>
  <p class="sub">Observa este escenario cotidiano y reflexiona sobre cómo responderías.</p>
  <div class="phone-wrap">
    <div class="phone" style="padding: 10px;">
      <video controls playsinline style="width: 100%; border-radius: 20px; aspect-ratio: 9/16; object-fit: cover; background: #000;">
        <source src="https://res.cloudinary.com/djybwowo6/video/upload/v1781543400/video1-modulo_1_sqgnpz.mp4" type="video/mp4">
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  </div>
  <div class="info-box">
    💡 <strong>¿Qué vas a ver?</strong> Un escenario de la vida real: un compañero toma el crédito de tu trabajo en una reunión de equipo. ¿Cómo responderías tú?
  </div>
  <div style="margin-top: 24px; text-align: center; background: rgba(36, 102, 142, 0.08); padding: 18px; border-radius: 12px; border: 1px dashed rgba(36, 102, 142, 0.3);">
    <p style="color: #24668e; font-size: 14px; font-weight: 700; margin: 0;">👉 Cuando termines el video, haz clic en "Marcar como completado" para elegir tu respuesta en la siguiente pantalla.</p>
  </div>
</div>
</body></html>`;

// ─────────────────────────────────────────────────────────────────────────────
// A2 · Tres Opciones de Respuesta (Tarjetas Interactivas)
// ─────────────────────────────────────────────────────────────────────────────
const A2_HTML = `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>
${CSS_BASE}
body{background:var(--lgray);padding:32px 20px 48px;max-width:800px;margin:0 auto}
.intro{text-align:center;margin-bottom:28px}
.intro h2{font-size:22px;font-weight:800;color:var(--pd);margin-bottom:8px}
.intro p{font-size:15px;color:var(--dark);line-height:1.6}
.options-container{display:flex;flex-direction:column;gap:16px}
.option-btn{background:#fff;border:2px solid transparent;border-radius:16px;padding:20px 24px;text-align:left;cursor:pointer;transition:all .2s;box-shadow:var(--sh);display:flex;gap:16px;align-items:flex-start}
.option-btn:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(16,16,33,.15)}
.option-btn .icon{font-size:28px;flex-shrink:0;margin-top:-4px}
.option-btn .content{flex:1}
.option-btn h3{font-size:18px;font-weight:800;color:var(--dark);margin-bottom:6px}
.option-btn p{font-size:14px;color:var(--gray);line-height:1.5;margin:0}
.opt-0:hover{border-color:#94a3b8}.opt-1:hover{border-color:#ef4444}.opt-2:hover{border-color:#16a34a}
.feedback-view{display:none}.feedback-view.active{display:block;animation:fadeIn .4s ease}
.choice-header{text-align:center;margin-bottom:24px}
.choice-header .badge{display:inline-block;background:var(--p);color:#fff;padding:6px 16px;border-radius:20px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:12px}
.feedback-card{background:#fff;border-radius:20px;padding:32px 28px;box-shadow:var(--sh);border-top:6px solid var(--gray);margin-bottom:32px}
.feedback-card.fc-0{border-color:#64748b}.feedback-card.fc-1{border-color:#dc2626}.feedback-card.fc-2{border-color:#16a34a}
.feedback-card .fb-title{font-size:20px;font-weight:800;color:var(--dark);margin-bottom:12px;display:flex;align-items:center;gap:10px}
.feedback-card .fb-desc{font-size:15px;color:#374151;line-height:1.7;margin-bottom:20px}
.feedback-card .fb-highlight{background:var(--lgray);padding:16px 20px;border-radius:12px;font-size:14px;font-style:italic;color:var(--dark);border-left:4px solid var(--p)}
.other-options-title{font-size:16px;font-weight:800;color:var(--dark);margin-bottom:16px;text-align:center;border-bottom:1px solid #ddd;padding-bottom:16px}
.other-options{display:grid;grid-template-columns:1fr;gap:12px}
.other-btn{background:#fff;border:1px solid #ddd;border-radius:12px;padding:16px;text-align:left;cursor:pointer;display:flex;justify-content:space-between;align-items:center;transition:all .2s}
.other-btn:hover{background:var(--pl);border-color:var(--p)}
.other-btn h4{font-size:15px;font-weight:700;color:var(--dark);margin:0}
.other-btn .view-link{font-size:12px;font-weight:700;color:var(--p);text-transform:uppercase}
@keyframes fadeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
</style></head>
<body>
<div id="screen1">
  <div class="intro">
    <h2>¿Qué harías en esta situación?</h2>
    <p>Basado en el escenario del video, selecciona la opción que más se parezca a tu primera reacción instintiva.</p>
  </div>
  <div class="options-container">
    <button class="option-btn opt-0" onclick="selectOption(0)">
      <div class="icon">😶</div>
      <div class="content">
        <h3>No digo nada</h3>
        <p>Me quedo callado, bajo la mirada y dejo que la reunión continúe. Pienso "no vale la pena armar un escándalo aquí" y me lo trago.</p>
      </div>
    </button>
    <button class="option-btn opt-1" onclick="selectOption(1)">
      <div class="icon">😤</div>
      <div class="content">
        <h3>Exploto y lo enfrento</h3>
        <p>Ahí mismo, frente a todos, lo interrumpo levantando la voz: "Con todo respeto, pero tú no hiciste nada, ese trabajo lo hice todo yo."</p>
      </div>
    </button>
    <button class="option-btn opt-2" onclick="selectOption(2)">
      <div class="icon">🙋</div>
      <div class="content">
        <h3>Tomo la palabra con calma</h3>
        <p>Respiro y digo: "Sí, me alegra que menciones el informe. Quiero aprovechar para comentar cómo estuvo el proceso para tener el contexto completo."</p>
      </div>
    </button>
  </div>
</div>
<div id="screen2" class="feedback-view">
  <div class="choice-header">
    <div class="badge" id="choiceBadge">Tu primera elección</div>
  </div>
  <div id="feedbackContainer"></div>
  <div class="other-options-title">¿Qué habría pasado si elegías otro camino?</div>
  <div class="other-options" id="otherOptionsContainer"></div>
</div>
<script>
const data = [
  {id:0,icon:'😶',title:'La respuesta pasiva',desc:'Después de la reunión le cuentas a un colega de confianza lo que pasó, te desahogas un rato, y sigues con tu día. Aunque por dentro algo sigue ahí, dando vueltas.<br><br>No te estás validando ni valorando como deberías, y a la larga eso afectará tu rendimiento, tu autoestima y tu estado de ánimo.',highlight:'El silencio a veces evita un conflicto puntual... pero alimenta uno mucho más grande contigo mismo.',colorClass:'fc-0',borderColor:'#64748b'},
  {id:1,icon:'😤',title:'La respuesta agresiva',desc:'La sala se pone tensa. Andrés se pone rojo. La directora no sabe para dónde mirar. Y aunque en ese momento sientes que dijiste la verdad... la forma en que lo dijiste convirtió la reunión en un problema.<br><br>Tu mensaje se pierde detrás de tu tono de voz.',highlight:'Cuando la rabia habla primero, la verdad llega después... y muchas veces ya nadie la quiere escuchar.',colorClass:'fc-1',borderColor:'#dc2626'},
  {id:2,icon:'🙋',title:'La respuesta asertiva',desc:'Sin gritos. Sin escenas. Pero tampoco en silencio. Saliste de la reunión sintiéndote tranquilo, no con rabia, no con culpa. Tranquilo. Porque dijiste lo que tenías que decir, de la forma en que se debía decir.<br><br>La directora te ve ahora como alguien profesional, claro, que sabe defender su trabajo sin dramas.',highlight:'Ser asertivo no es ganar una discusión. Es cuidar tu voz sin pisar la del otro.',colorClass:'fc-2',borderColor:'#16a34a'}
];
let initialChoice=-1;
function renderFeedback(id,isInitial){
  const d=data[id];
  document.getElementById('feedbackContainer').innerHTML=\`<div class="feedback-card \${d.colorClass}"><div class="fb-title">\${d.icon} \${d.title}</div><div class="fb-desc">\${d.desc}</div><div class="fb-highlight" style="border-left-color:\${d.borderColor}">💡 "\${d.highlight}"</div></div>\`;
  document.getElementById('choiceBadge').innerText=isInitial?'Tu primera elección':'Explorando otro camino';
  document.getElementById('choiceBadge').style.background=isInitial?'var(--p)':'#64748b';
  let othersHtml='';
  data.forEach(item=>{if(item.id!==id)othersHtml+=\`<button class="other-btn" onclick="renderFeedback(\${item.id},\${item.id===initialChoice})"><h4>\${item.icon} Ver: \${item.title}</h4><span class="view-link">Explorar ➔</span></button>\`;});
  if(!isInitial)othersHtml+=\`<button class="other-btn" style="background:var(--pl);border-color:var(--p)" onclick="renderFeedback(\${initialChoice},true)"><h4>↩ Volver a tu elección (\${data[initialChoice].title})</h4></button>\`;
  document.getElementById('otherOptionsContainer').innerHTML=othersHtml;
}
function selectOption(id){
  initialChoice=id;
  document.getElementById('screen1').style.display='none';
  document.getElementById('screen2').classList.add('active');
  renderFeedback(id,true);
}
</script>
</body></html>`;

// ─────────────────────────────────────────────────────────────────────────────
// A3 · Texto de cierre animado + Estilos de comunicación con notepad
// ─────────────────────────────────────────────────────────────────────────────
const A3_HTML = `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>
${CSS_BASE}
body{padding:32px 24px 48px;max-width:700px;margin:0 auto}
.three-doors{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin:32px 0}
.door{text-align:center;padding:20px 14px;border-radius:14px;border:2px solid transparent;transition:all .3s}
.door.d1{background:#f1f5f9;border-color:#cbd5e1}.door.d2{background:#fef2f2;border-color:#fca5a5}.door.d3{background:#f0fdf4;border-color:#86efac}
.door .icon{font-size:32px;margin-bottom:8px}.door h3{font-size:14px;font-weight:700;margin-bottom:6px}.door p{font-size:12px;line-height:1.6;color:var(--gray)}
.msg{font-size:16px;line-height:1.75;color:var(--dark);margin-bottom:18px}
.msg:first-of-type{font-size:18px;font-weight:500;color:var(--pd)}
.divider{height:3px;background:linear-gradient(90deg,var(--p),var(--b));border-radius:4px;margin:28px 0}
.callout{background:linear-gradient(135deg,var(--pl),var(--bl));border-radius:var(--r);padding:24px 28px;border:1px solid rgba(110,67,128,.2)}
.callout h2{font-size:20px;font-weight:800;color:var(--pd);margin-bottom:14px}
.callout p{font-size:15px;line-height:1.75;color:#374151;margin-bottom:12px}
.callout .big{font-size:17px;font-weight:600;color:var(--p);font-style:italic}
.appear{opacity:0;transform:translateY(16px);transition:opacity .5s ease,transform .5s ease}
.appear.visible{opacity:1;transform:none}
</style></head>
<body>
<div class="three-doors appear">
  <div class="door d1"><div class="icon">🤐</div><h3>Callar</h3><p>Nos hace sentir invisibles</p></div>
  <div class="door d2"><div class="icon">💥</div><h3>Explotar</h3><p>Poder por un momento, mal después</p></div>
  <div class="door d3"><div class="icon">🗣️</div><h3>Hablar bien</h3><p>Nos hace sentir en paz</p></div>
</div>
<p class="msg appear">En el día a día vamos a vivir muchas situaciones como esta. Algunas más grandes, otras más pequeñas. Y casi siempre vamos a tener esas mismas <strong>tres puertas</strong> frente a nosotros: callar, explotar… o hablar bien.</p>
<p class="msg appear"><strong>Callar</strong> nos hace sentir invisibles. <strong>Explotar</strong> nos hace sentir poderosos por un momento, y mal después. Y <strong>hablar con asertividad</strong>… nos hace sentir, sencillamente, en paz.</p>
<div class="divider appear"></div>
<div class="callout appear">
  <h2>💡 La asertividad se entrena</h2>
  <p>La buena noticia es que la asertividad <strong>no es un don con el que se nace</strong>. Es una habilidad. Se entrena, se practica, se mejora. Y empieza con algo muy simple:</p>
  <p><em>La próxima vez que algo no te parezca, en lugar de tragártelo o de explotarlo… <strong>respira, ordena tu idea, y dila.</strong></em></p>
  <p class="big">"Vas a ver que el mundo no se acaba. Y que tu voz, cuando se usa bien, pesa mucho más de lo que crees."</p>
</div>
<script>
var els=document.querySelectorAll('.appear');
var io=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.15});
els.forEach(function(el){io.observe(el)});
setTimeout(function(){els.forEach(function(el){var r=el.getBoundingClientRect();if(r.top<window.innerHeight)el.classList.add('visible')})},100);
</script>
</body></html>`;

// =============================================================================
//  EXPORTACIÓN DEL CURSO
// =============================================================================

export const course: Course = {
  id: 'kapsula-espejo-comunicacion',
  title: 'El Espejo de la Comunicación',
  subtitle: 'Descubre los tres estilos de comunicación y aprende cuál usar en cada momento.',
  description: `¿Alguna vez te has tragado lo que querías decir? ¿O has explotado y luego lamentaste cómo lo dijiste? Esta Kápsula te enseña a reconocer los tres vértices de la comunicación —Pasiva, Agresiva y Asertiva— a través de un escenario real interactivo. En menos de 30 minutos, saldrás con una comprensión clara de tu estilo comunicativo habitual y con las primeras herramientas para comenzar a transformarlo.`,
  category: 'Relaciones & Comunicación con Criterio',
  broadCategories: ['Habilidades Sociales', 'Gestión Emocional'],
  coverImage: 'https://res.cloudinary.com/djybwowo6/image/upload/v1783647722/espejo-de-comunicacion_w1dcqp.png',
  instructor: mockInstructor,
  estimatedDurationMinutes: 40,
  kreditos: 1,
  courseType: 'kapsula',
  learningObjectives: [
    'Identificar los tres estilos de comunicación: pasivo, agresivo y asertivo.',
    'Reconocer cuál es tu estilo más habitual en situaciones de conflicto.',
    'Comprender las consecuencias de cada respuesta en las relaciones.',
    'Dar el primer paso consciente hacia una comunicación más asertiva.',
  ],

  modules: [
    {
      id: 'km1-mod1',
      title: '⚡ El Espejo de la Comunicación',
      activities: [
        {
          id: 'km1-a1',
          type: 'iframe',
          title: 'Toma el control',
          description: 'Observa este escenario cotidiano: un compañero toma el crédito de tu trabajo en una reunión. ¿Cómo responderías?',
          hideHeader: true,
          content: [A1_HTML],
        },
        {
          id: 'km1-a2',
          type: 'iframe',
          title: 'Elige tu respuesta',
          description: 'Tres caminos posibles. Haz clic en cada tarjeta para descubrir qué hay detrás de cada forma de responder.',
          hideHeader: false,
          content: [A2_HTML],
        },
        {
          id: 'km1-a3',
          type: 'iframe',
          title: 'La asertividad se entrena',
          description: 'Reflexión de cierre: las tres puertas de la comunicación y cómo cultivar la respuesta asertiva desde hoy.',
          hideHeader: false,
          content: [A3_HTML],
        },
        {
          id: 'km1-a4',
          type: 'evaluation',
          title: '🎯 Reflexión Personal: El Diario del Observador',
          description: 'Durante las próximas 24 horas, observa 2 interacciones de tu entorno. Identifica el estilo comunicativo sin intervenir y registra tus observaciones.',
          questions: [
            { prompt: 'Interacción 1: Describe la situación y qué estilo comunicativo identificaste (pasivo, agresivo, asertivo). ¿Qué señales te llevaron a esa conclusión?' },
            { prompt: 'Reflexión personal: ¿En qué situaciones de tu propia vida tiendes a usar la respuesta pasiva o agresiva en lugar de la asertiva? ¿Qué lo desencadena?' },
          ],
        },
      ],
    },
  ],
};

export default course;
