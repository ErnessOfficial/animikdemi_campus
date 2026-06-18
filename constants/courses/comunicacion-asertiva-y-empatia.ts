// =============================================================================
//  ANIMIKDEMI CAMPUS · Comunicación Asertiva y Empatía
//  ID: habilidades-sociales-101
//  Archivo: constants/courses/comunicacion-asertiva-y-empatia.ts
//
//  CLOUDINARY: Busca "CLOUDINARY_URL_AQUI" para localizar los marcadores
//  de posición donde debes pegar los enlaces de video / audio reales.
// =============================================================================

import type { Course } from '../../types';
import { assetPath } from '../../utils/paths';
import { mockInstructor } from './courseData';

// ─────────────────────────────────────────────────────────────────────────────
// PALETA DE ESTILOS COMPARTIDA (inyectada en cada <head> de iframe)
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
// M1 A1 · Intro + Video Vertical 9:16
// ─────────────────────────────────────────────────────────────────────────────
const M1A1_HTML = `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>
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
.screen{aspect-ratio:9/16;background:linear-gradient(160deg,#1a0d2e 0%,#0a2540 100%);border-radius:24px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;text-align:center;padding:28px;position:relative;overflow:hidden}
.screen::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 30% 20%,rgba(110,67,128,.45) 0%,transparent 65%)}
.play{width:68px;height:68px;border-radius:50%;background:rgba(255,255,255,.14);border:2px solid rgba(255,255,255,.28);display:flex;align-items:center;justify-content:center;font-size:24px;cursor:pointer;color:#fff;position:relative;z-index:1;transition:all .2s}
.play:hover{background:rgba(255,255,255,.25);transform:scale(1.07)}
.pending{font-size:12px;color:rgba(255,255,255,.5);font-style:italic;z-index:1}
.badge{background:rgba(251,191,36,.14);border:1px solid rgba(251,191,36,.35);color:#fbbf24;padding:5px 14px;border-radius:20px;font-size:10px;font-weight:700;letter-spacing:.5px;z-index:1}
.info-box{background:var(--bl);border-left:3px solid var(--b);border-radius:0 10px 10px 0;padding:14px 16px;margin-top:24px;font-size:14px;color:#1e3a5f;line-height:1.6}
.dev-note{font-size:11px;color:var(--gray);background:var(--lgray);padding:10px 14px;border-radius:8px;margin-top:16px;font-family:monospace}
</style></head><body>
<div class="hero">
  <span class="chip">📖 Parte 1 · Módulo 1</span>
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
    <p style="color: #24668e; font-size: 14px; font-weight: 700; margin: 0;">👉 Cuando termines el video, haz clic en "Marcar como completado" para elegir tu respuesta a esta situación en la siguiente pantalla.</p>
  </div>
</div>
</body></html>`;

// ─────────────────────────────────────────────────────────────────────────────
// M1 A2 · Tres Opciones de Respuesta (Tarjetas Interactivas tipo "Elige tu aventura")
// ─────────────────────────────────────────────────────────────────────────────
const M1A2_HTML = `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>
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

/* Option Styles */
.opt-0:hover{border-color:#94a3b8}
.opt-1:hover{border-color:#ef4444}
.opt-2:hover{border-color:#16a34a}

/* Feedback State */
.feedback-view{display:none}
.feedback-view.active{display:block;animation:fadeIn .4s ease}

.choice-header{text-align:center;margin-bottom:24px}
.choice-header .badge{display:inline-block;background:var(--p);color:#fff;padding:6px 16px;border-radius:20px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:12px}

.feedback-card{background:#fff;border-radius:20px;padding:32px 28px;box-shadow:var(--sh);border-top:6px solid var(--gray);margin-bottom:32px}
.feedback-card.fc-0{border-color:#64748b}
.feedback-card.fc-1{border-color:#dc2626}
.feedback-card.fc-2{border-color:#16a34a}

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

<!-- Pantalla 1: Selección inicial -->
<div id="screen1">
  <div class="intro">
    <h2>¿Qué harías en esta situación?</h2>
    <p>Basado en el escenario del video, selecciona la opción que más se parezca a lo que sería tu primera reacción instintiva.</p>
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

<!-- Pantalla 2: Feedback y exploración -->
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
  {
    id: 0,
    icon: '😶',
    title: 'La respuesta pasiva',
    desc: 'Después de la reunión le cuentas a un colega de confianza lo que pasó, te desahogas un rato, y sigues con tu día. Aunque por dentro algo sigue ahí, dando vueltas.<br><br>No te estás validando ni valorando como deberías, y a la larga eso afectará tu rendimiento, tu autoestima y tu estado de ánimo.',
    highlight: 'El silencio a veces evita un conflicto puntual... pero alimenta uno mucho más grande contigo mismo.',
    colorClass: 'fc-0',
    borderColor: '#64748b'
  },
  {
    id: 1,
    icon: '😤',
    title: 'La respuesta agresiva',
    desc: 'La sala se pone tensa. Andrés se pone rojo. La directora no sabe para dónde mirar. Y aunque en ese momento sientes que dijiste la verdad... la forma en que lo dijiste convirtió la reunión en un problema.<br><br>Tu mensaje se pierde detrás de tu tono de voz.',
    highlight: 'Cuando la rabia habla primero, la verdad llega después... y muchas veces ya nadie la quiere escuchar.',
    colorClass: 'fc-1',
    borderColor: '#dc2626'
  },
  {
    id: 2,
    icon: '🙋',
    title: 'La respuesta asertiva',
    desc: 'Sin gritos. Sin escenas. Pero tampoco en silencio. Saliste de la reunión sintiéndote tranquilo, no con rabia, no con culpa. Tranquilo. Porque dijiste lo que tenías que decir, de la forma en que se debía decir.<br><br>La directora te ve ahora como alguien profesional, claro, que sabe defender su trabajo sin dramas.',
    highlight: 'Ser asertivo no es ganar una discusión. Es cuidar tu voz sin pisar la del otro.',
    colorClass: 'fc-2',
    borderColor: '#16a34a'
  }
];

let initialChoice = -1;

function renderFeedback(id, isInitial) {
  const d = data[id];
  
  // Render Main Card
  const fbHtml = \`
    <div class="feedback-card \${d.colorClass}">
      <div class="fb-title">\${d.icon} \${d.title}</div>
      <div class="fb-desc">\${d.desc}</div>
      <div class="fb-highlight" style="border-left-color: \${d.borderColor}">💡 "\${d.highlight}"</div>
    </div>
  \`;
  document.getElementById('feedbackContainer').innerHTML = fbHtml;
  
  if(isInitial) {
    document.getElementById('choiceBadge').innerText = "Tu primera elección";
    document.getElementById('choiceBadge').style.background = "var(--p)";
  } else {
    document.getElementById('choiceBadge').innerText = "Explorando otro camino";
    document.getElementById('choiceBadge').style.background = "#64748b";
  }

  // Render Others
  let othersHtml = '';
  data.forEach(item => {
    if(item.id !== id) {
      othersHtml += \`
        <button class="other-btn" onclick="renderFeedback(\${item.id}, \${item.id === initialChoice})">
          <h4>\${item.icon} Ver: \${item.title}</h4>
          <span class="view-link">Explorar ➔</span>
        </button>
      \`;
    }
  });
  
  // Also add a button to go back to initial choice if we are exploring
  if(!isInitial) {
    othersHtml += \`
        <button class="other-btn" style="background: var(--pl); border-color: var(--p)" onclick="renderFeedback(\${initialChoice}, true)">
          <h4>↩ Volver a tu elección (\${data[initialChoice].title})</h4>
        </button>
    \`;
  }
  
  document.getElementById('otherOptionsContainer').innerHTML = othersHtml;
}

function selectOption(id) {
  initialChoice = id;
  document.getElementById('screen1').style.display = 'none';
  document.getElementById('screen2').classList.add('active');
  renderFeedback(id, true);
  
  try {
    if(window.parent && window.parent.document) {
      setTimeout(() => { window.scrollTo({top:0, behavior:'smooth'}); }, 100);
    }
  } catch(e) {}
}
</script>
</body></html>`;


// ─────────────────────────────────────────────────────────────────────────────
// M1 A3 · Texto de cierre — animado e interactivo
// ─────────────────────────────────────────────────────────────────────────────
const M1A3_HTML = `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>
${CSS_BASE}
body{padding:32px 24px 48px;max-width:700px;margin:0 auto}
.three-doors{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin:32px 0}
.door{text-align:center;padding:20px 14px;border-radius:14px;border:2px solid transparent;transition:all .3s}
.door.d1{background:#f1f5f9;border-color:#cbd5e1}
.door.d2{background:#fef2f2;border-color:#fca5a5}
.door.d3{background:#f0fdf4;border-color:#86efac}
.door .icon{font-size:32px;margin-bottom:8px}
.door h3{font-size:14px;font-weight:700;margin-bottom:6px}
.door p{font-size:12px;line-height:1.6;color:var(--gray)}
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
  <div class="door d1">
    <div class="icon">🤐</div>
    <h3>Callar</h3>
    <p>Nos hace sentir invisibles</p>
  </div>
  <div class="door d2">
    <div class="icon">💥</div>
    <h3>Explotar</h3>
    <p>Poder por un momento, mal después</p>
  </div>
  <div class="door d3">
    <div class="icon">🗣️</div>
    <h3>Hablar bien</h3>
    <p>Nos hace sentir en paz</p>
  </div>
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
// Trigger top elements immediately
setTimeout(function(){els.forEach(function(el){var r=el.getBoundingClientRect();if(r.top<window.innerHeight)el.classList.add('visible')})},100);
</script>
</body></html>`;

// ─────────────────────────────────────────────────────────────────────────────
// M1 A4 · Estilos de Comunicación + Notepad de Reflexión
// ─────────────────────────────────────────────────────────────────────────────
const M1A4_HTML = `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>
${CSS_BASE}
body{background:var(--lgray);padding:28px 20px 48px}
.heading{text-align:center;margin-bottom:8px}
.heading h2{font-size:22px;font-weight:800;color:var(--dark)}
.heading p{font-size:15px;color:var(--gray);margin-top:6px}
.tabs{display:flex;gap:8px;margin:20px auto 24px;max-width:700px;flex-wrap:wrap;justify-content:center}
.tab{padding:8px 18px;border-radius:24px;font-size:13px;font-weight:700;cursor:pointer;border:2px solid transparent;transition:all .2s}
.tab.t-agr{border-color:#ef4444;color:#ef4444;background:#fff}
.tab.t-agr.active{background:#ef4444;color:#fff}
.tab.t-pas{border-color:#94a3b8;color:#64748b;background:#fff}
.tab.t-pas.active{background:#94a3b8;color:#fff}
.tab.t-ase{border-color:#16a34a;color:#16a34a;background:#fff}
.tab.t-ase.active{background:#16a34a;color:#fff}
.tab.t-esq{border-color:#d97706;color:#d97706;background:#fff}
.tab.t-esq.active{background:#d97706;color:#fff}
.panel{display:none;max-width:700px;margin:0 auto;background:#fff;border-radius:16px;box-shadow:var(--sh);overflow:hidden;animation:slideIn .35s ease}
.panel.active{display:block}
@keyframes slideIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
.panel-header{padding:24px 28px 20px;border-bottom:1px solid rgba(0,0,0,.06)}
.panel-header .emoji{font-size:36px;margin-bottom:8px}
.panel-header h3{font-size:20px;font-weight:800;margin-bottom:4px}
.panel-header .tag{font-size:12px;font-weight:600;padding:3px 10px;border-radius:12px;display:inline-block}
.panel-body{padding:24px 28px}
.phrase-list{list-style:none;display:flex;flex-direction:column;gap:10px;margin-bottom:20px}
.phrase-list li{background:var(--lgray);border-radius:10px;padding:12px 16px;font-size:14px;color:var(--dark);border-left:3px solid transparent;font-style:italic}
.info-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:4px}
.info-card{padding:14px 16px;border-radius:10px;font-size:13px;line-height:1.55}
.info-card .label{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:4px}
/* Agresivo */
#p-agr .panel-header h3{color:#dc2626}
#p-agr .panel-header .tag{background:#fef2f2;color:#dc2626}
#p-agr .phrase-list li{border-color:#ef4444}
#p-agr .info-card:first-child{background:#fef2f2;color:#7f1d1d}
#p-agr .info-card:last-child{background:#fff1f2;color:#9f1239}
/* Pasivo */
#p-pas .panel-header h3{color:#475569}
#p-pas .panel-header .tag{background:#f1f5f9;color:#475569}
#p-pas .phrase-list li{border-color:#94a3b8}
#p-pas .info-card:first-child{background:#f1f5f9;color:#334155}
#p-pas .info-card:last-child{background:#e2e8f0;color:#475569}
/* Asertivo */
#p-ase .panel-header h3{color:#16a34a}
#p-ase .panel-header .tag{background:#f0fdf4;color:#16a34a}
#p-ase .phrase-list li{border-color:#16a34a}
#p-ase .info-card:first-child{background:#f0fdf4;color:#14532d}
#p-ase .info-card:last-child{background:#dcfce7;color:#166534}
/* Esquivo */
#p-esq .panel-header h3{color:#d97706}
#p-esq .panel-header .tag{background:#fffbeb;color:#d97706}
#p-esq .phrase-list li{border-color:#f59e0b}
#p-esq .info-card:first-child{background:#fffbeb;color:#78350f}
#p-esq .info-card:last-child{background:#fef3c7;color:#92400e}
/* Notepad */
.notepad-wrap{max-width:700px;margin:28px auto 0;background:#fff;border-radius:16px;box-shadow:var(--sh);padding:24px 28px}
.notepad-wrap h3{font-size:18px;font-weight:800;color:var(--pd);margin-bottom:6px}
.notepad-wrap .intro{font-size:14px;color:var(--gray);margin-bottom:18px;line-height:1.6}
.q-list{list-style:none;display:flex;flex-direction:column;gap:16px}
.q-list li{background:var(--pl);border-radius:10px;padding:14px 16px}
.q-list li p{font-size:14px;font-weight:600;color:var(--pd);margin-bottom:8px}
.q-list li textarea{width:100%;min-height:72px;border:1.5px solid rgba(110,67,128,.25);border-radius:8px;padding:10px 12px;font-family:inherit;font-size:14px;color:var(--dark);resize:vertical;transition:border .2s;line-height:1.5}
.q-list li textarea:focus{outline:none;border-color:var(--p)}
.save-btn{margin-top:18px;background:var(--p);color:#fff;border:none;padding:12px 28px;border-radius:10px;font-size:15px;font-weight:700;cursor:pointer;transition:all .2s;display:block;width:100%}
.save-btn:hover{background:var(--pd);transform:translateY(-1px)}
.saved-msg{text-align:center;font-size:14px;color:var(--green);font-weight:600;margin-top:10px;display:none}
.closing{max-width:700px;margin:24px auto 0;background:linear-gradient(135deg,var(--pd),var(--bd));color:#fff;border-radius:16px;padding:22px 28px;text-align:center}
.closing p, .closing strong, .closing .quote { color:#fff; }
.closing p{font-size:15px;opacity:.92;line-height:1.7}
.closing .quote{font-size:17px;font-weight:600;font-style:italic;margin-top:10px;opacity:.95}
</style></head>
<body>
<div class="heading">
  <h2>🔍 Estilos comunes en nuestra comunicación</h2>
  <p>¿Te suena alguna? Todos hemos usado estas frases alguna vez. Selecciona cada estilo para explorarlos.</p>
</div>

<div class="tabs">
  <button class="tab t-agr active" onclick="show('agr',this)">😤 Agresivo</button>
  <button class="tab t-pas" onclick="show('pas',this)">😶 Pasivo / Pasivo-Agresivo</button>
  <button class="tab t-ase" onclick="show('ase',this)">🙋 Asertivo</button>
  <button class="tab t-esq" onclick="show('esq',this)">🌀 Esquivo</button>
</div>

<!-- Panel Agresivo -->
<div class="panel active" id="p-agr">
  <div class="panel-header">
    <div class="emoji">😤</div>
    <h3>Estilo Agresivo</h3>
    <span class="tag">Se impone · ataca · descalifica</span>
  </div>
  <div class="panel-body">
    <ul class="phrase-list">
      <li>"¡Pues si no te gusta, es tu problema!"</li>
      <li>"¿En serio? ¿Tengo que explicarte TODO? No es tan difícil de entender."</li>
      <li>"Ya está, se hace como yo digo y se acabó la discusión."</li>
    </ul>
    <div class="info-row">
      <div class="info-card"><div class="label">🔍 Lo que comunica</div>"Yo valgo más que tú."</div>
      <div class="info-card"><div class="label">🎯 Lo que provoca</div>Miedo, distancia y resentimiento en el otro.</div>
    </div>
  </div>
</div>

<!-- Panel Pasivo -->
<div class="panel" id="p-pas">
  <div class="panel-header">
    <div class="emoji">😶</div>
    <h3>Estilo Pasivo / Pasivo-Agresivo</h3>
    <span class="tag">Calla cuando debería hablar · habla con indirectas</span>
  </div>
  <div class="panel-body">
    <ul class="phrase-list">
      <li>"No, tranquilo, no pasa nada…" (cuando claramente sí pasa algo)</li>
      <li>"Hazlo como quieras, total, mi opinión nunca cuenta."</li>
      <li>"Ah, qué bueno que te haya quedado tiempo para ayudar… después de tres días."</li>
    </ul>
    <div class="info-row">
      <div class="info-card"><div class="label">🔍 Lo que comunica</div>"Mi voz no importa… pero igual te lo voy a cobrar."</div>
      <div class="info-card"><div class="label">🎯 Lo que provoca</div>Confusión, tensión acumulada y malentendidos.</div>
    </div>
  </div>
</div>

<!-- Panel Asertivo -->
<div class="panel" id="p-ase">
  <div class="panel-header">
    <div class="emoji">🙋</div>
    <h3>Estilo Asertivo</h3>
    <span class="tag">Claro · respetuoso · firme · cuida la relación</span>
  </div>
  <div class="panel-body">
    <ul class="phrase-list">
      <li>"Entiendo tu punto, pero a mí me parece distinto, y me gustaría explicarte por qué."</li>
      <li>"Prefiero no comprometerme con eso ahora, no me alcanza el tiempo esta semana."</li>
      <li>"Cuando me hablas así, me siento incómodo. ¿Podemos hablarlo de otra forma?"</li>
    </ul>
    <div class="info-row">
      <div class="info-card"><div class="label">🔍 Lo que comunica</div>"Tú importas, y yo también."</div>
      <div class="info-card"><div class="label">🎯 Lo que provoca</div>Respeto, confianza y relaciones más sanas.</div>
    </div>
  </div>
</div>

<!-- Panel Esquivo -->
<div class="panel" id="p-esq">
  <div class="panel-header">
    <div class="emoji">🌀</div>
    <h3>Estilo Esquivo</h3>
    <span class="tag">Evita · aplaza · desvía</span>
  </div>
  <div class="panel-body">
    <ul class="phrase-list">
      <li>"Después hablamos de eso, ahora no es el momento…" (y nunca llega "ese momento")</li>
      <li>"Uy, no sé, mejor pregúntale a otro, yo no me meto en eso."</li>
      <li>"Bueno, ya veremos qué pasa, dejemos que el tiempo lo resuelva."</li>
    </ul>
    <div class="info-row">
      <div class="info-card"><div class="label">🔍 Lo que comunica</div>"Prefiero no comprometerme."</div>
      <div class="info-card"><div class="label">🎯 Lo que provoca</div>Problemas sin resolver, pérdida de confianza.</div>
    </div>
  </div>
</div>

<!-- Notepad de Reflexión -->
<div class="notepad-wrap">
  <h3>💡 Reflexiona</h3>
  <p class="intro">Lee otra vez las frases. Tranquilo, esto no es para juzgarte… es para mirarte. Apunta tus respuestas aquí — solo tú las verás.</p>
  <ul class="q-list">
    <li>
      <p>👉 ¿Cuál de estos estilos usas más seguido y en qué contextos?</p>
      <textarea placeholder="Escribe tu reflexión aquí…"></textarea>
    </li>
    <li>
      <p>👉 ¿Con qué personas tiendes a ser más pasivo… y con cuáles más agresivo?</p>
      <textarea placeholder="Escribe tu reflexión aquí…"></textarea>
    </li>
    <li>
      <p>👉 ¿En qué situaciones te toca esquivar en lugar de enfrentar?</p>
      <textarea placeholder="Escribe tu reflexión aquí…"></textarea>
    </li>
  </ul>
  <button class="save-btn" onclick="save()">Guardar mis notas ✓</button>
  <p class="saved-msg" id="savedMsg">✅ ¡Notas guardadas! Continúa con la siguiente actividad.</p>
</div>

<div class="closing">
  <p>La buena noticia es que ningún estilo es para siempre. La comunicación asertiva se aprende, se entrena y se mejora con la práctica.</p>
  <p class="quote">"No se trata de hablar más fuerte, ni de quedarse callado… se trata de hablar claro, con respeto, y en el momento justo."</p>
</div>

<script>
function show(id,btn){
  document.querySelectorAll('.panel').forEach(function(p){p.classList.remove('active')});
  document.querySelectorAll('.tab').forEach(function(t){t.classList.remove('active')});
  document.getElementById('p-'+id).classList.add('active');
  btn.classList.add('active');
}
function save(){
  document.getElementById('savedMsg').style.display='block';
  setTimeout(function(){document.getElementById('savedMsg').style.display='none'},3500);
}
</script>
</body></html>`;

// ─────────────────────────────────────────────────────────────────────────────
// M2 A1 · Audio Inmersivo 8D — descripción + reproductor (placeholder Cloudinary)
// ─────────────────────────────────────────────────────────────────────────────
const M2A1_HTML = `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>
${CSS_BASE}
body{background:#0f1117;color:#e2e8f0;padding:0 0 48px}
.hero{background:linear-gradient(160deg,#0f0f23,#0d2a40);padding:36px 28px;text-align:center;border-bottom:1px solid rgba(255,255,255,.06);color:#fff}
.hero p, .hero strong { color:#fff; }
.hero .chip{background:rgba(110,67,128,.3);color:#c4b5fd;border:1px solid rgba(196,181,253,.3);margin-bottom:14px}
.hero h1{font-size:clamp(22px,5vw,30px);font-weight:800;background:linear-gradient(90deg,#c4b5fd,#93c5fd);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:10px}
.hero p{font-size:15px;color:#94a3b8;line-height:1.7;max-width:520px;margin:0 auto}
.headphone-hint{display:flex;align-items:center;gap:10px;background:rgba(196,181,253,.1);border:1px solid rgba(196,181,253,.2);border-radius:12px;padding:12px 20px;max-width:400px;margin:20px auto 0;font-size:13px;color:#c4b5fd;font-weight:500}
.player-section{padding:32px 24px;max-width:560px;margin:0 auto}
.player-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:20px;padding:28px;text-align:center}
.wave-visual{display:flex;align-items:flex-end;justify-content:center;gap:3px;height:60px;margin-bottom:24px}
.bar{width:5px;border-radius:4px;background:linear-gradient(180deg,#818cf8,#4f46e5);animation:wave 1.2s ease-in-out infinite}
.bar:nth-child(1){height:20px;animation-delay:0s}
.bar:nth-child(2){height:35px;animation-delay:.1s}
.bar:nth-child(3){height:50px;animation-delay:.2s}
.bar:nth-child(4){height:40px;animation-delay:.3s}
.bar:nth-child(5){height:60px;animation-delay:.4s}
.bar:nth-child(6){height:45px;animation-delay:.5s}
.bar:nth-child(7){height:30px;animation-delay:.4s}
.bar:nth-child(8){height:50px;animation-delay:.3s}
.bar:nth-child(9){height:38px;animation-delay:.2s}
.bar:nth-child(10){height:22px;animation-delay:.1s}
@keyframes wave{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.4)}}
.track-name{font-size:16px;font-weight:700;color:#e2e8f0;margin-bottom:4px}
.track-sub{font-size:13px;color:#64748b;margin-bottom:20px}
.audio-el{width:100%;margin-bottom:0;border-radius:10px;filter:invert(1)}
.cloud-badge{background:rgba(251,191,36,.1);border:1px solid rgba(251,191,36,.25);color:#fbbf24;padding:6px 16px;border-radius:20px;font-size:11px;font-weight:700;margin:12px auto 0;display:inline-block}
.steps{padding:0 24px 0;max-width:560px;margin:0 auto}
.steps h3{font-size:16px;font-weight:700;color:#e2e8f0;margin-bottom:16px}
.step{display:flex;gap:14px;margin-bottom:14px;background:rgba(255,255,255,.03);border-radius:12px;padding:14px}
.step .num{width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#6d28d9,#2563eb);color:#fff;font-weight:800;font-size:14px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.step p{font-size:14px;color:#94a3b8;line-height:1.6}
.step p strong{color:#c4b5fd}
.dev-note{font-size:11px;color:#475569;background:rgba(255,255,255,.03);padding:10px 14px;border-radius:8px;margin:16px 24px;font-family:monospace}
</style></head>
<body>
<div class="hero">
  <span class="chip">🎧 Módulo 2 · Radares Encendidos</span>
  <h1>Simulador de Audio Inmersivo</h1>
  <p>Una experiencia sonora diseñada para que <em>sientas</em> la diferencia entre oír y escuchar de verdad.</p>
  <div class="headphone-hint">🎧 <span>Usa auriculares para la experiencia completa</span></div>
</div>

<div class="player-section">
  <div class="player-card">
    <div class="wave-visual">
      <div class="bar"></div><div class="bar"></div><div class="bar"></div>
      <div class="bar"></div><div class="bar"></div><div class="bar"></div>
      <div class="bar"></div><div class="bar"></div><div class="bar"></div>
      <div class="bar"></div>
    </div>
    <div class="track-name">Pista 1: El Ruido Mental</div>
    <div class="track-sub">Audio inmersivo 8D — Fase con distracciones</div>
    <!-- DESARROLLADOR: Reemplaza src="" con la URL de Cloudinary del audio.
         CLOUDINARY_URL_AQUI → audio fase 1 (con ruido/distracciones) -->
    <audio controls style="width:100%;margin-top:4px;border-radius:8px" preload="metadata">
      <source src="" type="audio/mpeg">
      Tu navegador no soporta audio HTML5.
    </audio>
    <div class="cloud-badge">☁ Cloudinary · Pendiente Pista 1</div>
  </div>

  <div class="player-card" style="margin-top:16px">
    <div class="wave-visual" style="filter:hue-rotate(120deg)"></div>
    <div class="track-name">Pista 2: La Escucha Empática</div>
    <div class="track-sub">Audio inmersivo 8D — Fase limpia</div>
    <!-- CLOUDINARY_URL_AQUI → audio fase 2 (limpio, empático) -->
    <audio controls style="width:100%;margin-top:4px;border-radius:8px" preload="metadata">
      <source src="" type="audio/mpeg">
      Tu navegador no soporta audio HTML5.
    </audio>
    <div class="cloud-badge">☁ Cloudinary · Pendiente Pista 2</div>
  </div>
</div>

<div class="dev-note">DEV: Insertar URL Cloudinary para audio 8D inmersivo del Módulo 2. Dos pistas: con ruido (pista 1) y limpia (pista 2).</div>

<div class="steps">
  <h3>¿Qué acabas de experimentar?</h3>
  <div class="step"><div class="num">1</div><p>En la <strong>Pista 1</strong> escuchaste una voz, pero rodeada de ruido mental: notificaciones, pensamientos propios, interrupciones paneadas en estéreo.</p></div>
  <div class="step"><div class="num">2</div><p>En la <strong>Pista 2</strong> el audio se limpia. Solo queda la voz del otro. Sientes la diferencia: eso es lo que experimenta alguien cuando realmente lo escuchas.</p></div>
  <div class="step"><div class="num">3</div><p>La <strong>escucha activa</strong> no es un estado pasivo. Es una decisión consciente de <em>silenciar tu propio ruido interior</em> para estar presente.</p></div>
</div>
</body></html>`;

// ─────────────────────────────────────────────────────────────────────────────
// M3 A1 · Simulador de Chat estilo WhatsApp + Técnica DESC
// ─────────────────────────────────────────────────────────────────────────────
const M3A1_HTML = `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>
${CSS_BASE}
body{background:var(--lgray);padding:0 0 40px}
.page-header{background:linear-gradient(135deg,#ff6b35,#f59e0b);padding:28px 24px;color:#fff}
.page-header p, .page-header strong { color:#fff; }
.page-header .chip{background:rgba(255,255,255,.2);color:#fff;margin-bottom:10px}
.page-header h1{font-size:22px;font-weight:800;margin-bottom:6px}
.page-header p{font-size:14px;opacity:.9;line-height:1.6}
.desc-bar{background:#fff;border-radius:var(--r);margin:20px 20px 0;padding:16px 20px;border-left:4px solid #f59e0b;box-shadow:var(--sh)}
.desc-bar h3{font-size:13px;font-weight:800;text-transform:uppercase;letter-spacing:1.5px;color:#d97706;margin-bottom:10px}
.desc-pills{display:flex;flex-wrap:wrap;gap:8px}
.pill{padding:6px 14px;border-radius:20px;font-size:12px;font-weight:700;cursor:pointer;transition:all .2s;border:2px solid transparent;user-select:none}
.pill.D{background:#fffbeb;color:#d97706;border-color:#fcd34d}
.pill.E{background:#fef2f2;color:#dc2626;border-color:#fca5a5}
.pill.S{background:#f0fdf4;color:#16a34a;border-color:#86efac}
.pill.C{background:var(--bl);color:var(--b);border-color:#93c5fd}
.pill:hover{filter:brightness(.95);transform:translateY(-1px)}
.chat-wrapper{max-width:480px;margin:20px auto;background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,.12)}
.chat-top{background:#075e54;padding:14px 18px;display:flex;align-items:center;gap:12px;color:#fff}
.chat-top .avatar{width:40px;height:40px;border-radius:50%;background:#128c7e;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700}
.chat-top .info .name{font-size:15px;font-weight:700}
.chat-top .info .status{font-size:12px;opacity:.75}
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
  <span class="chip">💬 Módulo 3 · El Arte del No</span>
  <h1>Simulador de Chat DESC</h1>
  <p>Recibe un mensaje exigente y construye tu respuesta asertiva usando la técnica DESC. Elige los bloques en orden.</p>
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
  {name:'Jefe (Luis R.)',letter:'J',
   msg:'¿Puedes quedarte hoy 3 horas más para terminar mi reporte? Lo necesito urgente.',
   pills:[
     {t:'D',text:'Luis, entiendo que el reporte es urgente para ti.'},
     {t:'E',text:'Sin embargo, yo también tengo compromisos personales esta tarde que ya estaban planificados.'},
     {t:'S',text:'Lo que sí puedo hacer es dejarlo al 80% hoy y terminarlo mañana temprano, antes de las 9.'},
     {t:'C',text:'Así garantizamos calidad y yo puedo cumplir mis compromisos. ¿Te parece bien?'}
   ]},
  {name:'Colega (María)',letter:'M',
   msg:'Oye, necesito que me termines el informe del cliente. Yo tengo mucho lío hoy y no me va a dar tiempo.',
   pills:[
     {t:'D',text:'María, entiendo que estás con mucha carga hoy.'},
     {t:'E',text:'Pero yo también tengo mis propias entregas pendientes esta semana.'},
     {t:'S',text:'Podría ayudarte a revisar la estructura o a redactar una sección concreta, si me lo envías ahora.'},
     {t:'C',text:'Así avanzamos los dos sin que ninguno quede mal con sus responsabilidades.'}
   ]},
  {name:'Familiar (Carlos)',letter:'C',
   msg:'Oye, ven mañana a ayudarme con la mudanza. Llegaremos a las 7 de la mañana.',
   pills:[
     {t:'D',text:'Carlos, valoro que cuentes conmigo para algo tan importante como tu mudanza.'},
     {t:'E',text:'Pero mañana tengo un compromiso que no puedo cancelar, y un aviso con tan poca antelación me complica mucho.'},
     {t:'S',text:'Puedo ayudarte este fin de semana o en las próximas tardes que tengas libres.'},
     {t:'C',text:'Así puedo estar contigo de verdad y que resulte bien para los dos.'}
   ]}
];
var current=0;
var built=[];
var pillsUsed=[];

function setScene(idx,btn){
  current=idx;built=[];pillsUsed=[];
  document.querySelectorAll('.sc-btn').forEach(function(b){b.classList.remove('active')});
  btn.classList.add('active');
  var sc=scenes[idx];
  document.getElementById('chatName').textContent=sc.name;
  document.getElementById('avatarLetter').textContent=sc.letter;
  document.getElementById('incomingMsg').textContent=sc.msg;
  document.getElementById('builtResponse').textContent='Haz clic en los bloques DESC para construir tu respuesta asertiva…';
  document.getElementById('builtResponse').style.cssText='color:#aaa;font-style:italic';
  renderPills();
  var body=document.getElementById('chatBody');
  var existing=body.querySelectorAll('.bubble.out');
  existing.forEach(function(e){e.remove()});
}

function renderPills(){
  var container=document.getElementById('pills');
  container.innerHTML='';
  var sc=scenes[current];
  sc.pills.forEach(function(p,i){
    var btn=document.createElement('button');
    btn.className='pill '+p.t;
    btn.textContent=p.t+': '+p.text.substring(0,40)+'…';
    btn.title=p.text;
    if(pillsUsed.indexOf(i)!==-1){btn.style.opacity='.4';btn.style.cursor='default'}
    else{btn.onclick=function(){addPill(i)}}
    container.appendChild(btn);
  });
}

function addPill(i){
  if(pillsUsed.indexOf(i)!==-1)return;
  pillsUsed.push(i);built.push(i);
  var sc=scenes[current];
  var txt=built.map(function(idx){return sc.pills[idx].text}).join(' ');
  var el=document.getElementById('builtResponse');
  el.textContent=txt;el.style.cssText='color:#101021;font-style:normal';
  renderPills();
}

function sendMsg(){
  if(built.length===0){alert('¡Construye tu respuesta primero usando los bloques DESC!');return}
  var sc=scenes[current];
  var txt=built.map(function(idx){return sc.pills[idx].text}).join(' ');
  var now=new Date();
  var time=now.getHours()+':'+(now.getMinutes()<10?'0':'')+now.getMinutes();
  var sc2=scenes[current];
  var body=document.getElementById('chatBody');
  var el=document.createElement('div');el.className='bubble out';
  var labels=built.map(function(idx){return sc2.pills[idx].t}).join(' → ');
  el.innerHTML='<div class="desc-label">'+labels+'</div>'+txt+'<div class="time">'+time+' ✓✓</div>';
  body.appendChild(el);
  body.scrollTop=body.scrollHeight;
  built=[];pillsUsed=[];
  document.getElementById('builtResponse').textContent='¡Enviado! Prueba el siguiente escenario.';
  document.getElementById('builtResponse').style.cssText='color:#16a34a;font-weight:600;font-style:normal';
  renderPills();
}

function clearMsg(){built=[];pillsUsed=[];document.getElementById('builtResponse').textContent='Haz clic en los bloques DESC para construir tu respuesta asertiva…';document.getElementById('builtResponse').style.cssText='color:#aaa;font-style:italic';renderPills()}

setScene(0,document.querySelector('.sc-btn'));
</script>
</body></html>`;

// ─────────────────────────────────────────────────────────────────────────────
// M3 A2 · Cheatsheet "Cómo decir NO sin quemar puentes"
// ─────────────────────────────────────────────────────────────────────────────
const M3A2_HTML = `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>
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
.divider-text{text-align:center;font-size:13px;font-weight:700;color:#d97706;margin:28px 0 20px;text-transform:uppercase;letter-spacing:2px}
.full-card{max-width:900px;margin:0 auto 16px;background:#fff;border-radius:16px;padding:22px 28px;box-shadow:0 2px 16px rgba(0,0,0,.07);border-left:5px solid #ef4444}
.full-card h3{font-size:16px;font-weight:800;color:#dc2626;margin-bottom:14px}
.rules{list-style:none;display:flex;flex-direction:column;gap:10px}
.rules li{display:flex;gap:12px;font-size:14px;color:#374151;line-height:1.5}
.rules li .num{width:26px;height:26px;background:#ef4444;color:#fff;border-radius:50%;font-weight:800;font-size:12px;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.download-hint{text-align:center;margin-top:28px;background:linear-gradient(135deg,#7c3aed,#2563eb);color:#fff;border-radius:16px;padding:20px 28px;max-width:900px;margin:28px auto 0}
.download-hint p, .download-hint strong { color:#fff; }
.download-hint p{font-size:14px;opacity:.9}
</style></head>
<body>
<div class="cover">
  <div class="icon-wrap">🛡️</div>
  <h1>Cómo decir NO sin quemar puentes</h1>
  <p class="sub">Tu guía de plantillas asertivas para proteger tu tiempo con respeto</p>
</div>

<div class="grid">
  <div class="card" style="--top-color:#6d28d9">
    <div class="icon">🥪</div>
    <h3>Técnica del Sándwich</h3>
    <div class="desc">Empieza con algo positivo, di el NO claro, termina con algo constructivo. El "no" queda envuelto en comprensión.</div>
    <div class="example">
      <div class="label">Situación</div>
      <div class="sit">Tu colega te pide que cubras su turno mañana.</div>
      <div class="resp">"Entiendo que estás en apuros y me alegra que cuentes conmigo. <strong>Pero mañana tengo un compromiso que no puedo mover.</strong> ¿Quieres que miremos juntos quién más podría ayudarte?"</div>
    </div>
  </div>

  <div class="card" style="--top-color:#2563eb">
    <div class="icon">🏗️</div>
    <h3>Fórmula DESC</h3>
    <div class="desc"><strong>D</strong>escribir · <strong>E</strong>xpresar · <strong>S</strong>ugerir · <strong>C</strong>onsecuencia positiva.</div>
    <div class="example">
      <div class="label">Situación</div>
      <div class="sit">Tu jefe pide un entregable urgente que no es tu responsabilidad.</div>
      <div class="resp">"Entiendo que hay presión con el cliente. Yo ya estoy al límite esta semana. <strong>Lo que sí puedo es ayudarte a priorizar lo más urgente.</strong> Así sacamos lo más crítico sin comprometer calidad."</div>
    </div>
  </div>

  <div class="card" style="--top-color:#16a34a">
    <div class="icon">🌧️</div>
    <h3>El "No" con Empatía</h3>
    <div class="desc">Valida la necesidad del otro antes de negar. Hace que el "no" se sienta como un apoyo, no como un rechazo.</div>
    <div class="example">
      <div class="label">Situación</div>
      <div class="sit">Un familiar pide dinero prestado.</div>
      <div class="resp">"Sé que estás pasando un momento difícil y lo entiendo. <strong>Ahora mismo no estoy en posición de prestarte dinero,</strong> pero ¿podemos pensar juntos en otras opciones que te puedan ayudar?"</div>
    </div>
  </div>

  <div class="card" style="--top-color:#f59e0b">
    <div class="icon">⏰</div>
    <h3>El "No" con Alternativa de Tiempo</h3>
    <div class="desc">No niegas la ayuda, sino el momento. Muy útil cuando sí quieres colaborar pero no ahora.</div>
    <div class="example">
      <div class="label">Situación</div>
      <div class="sit">Te piden una reunión urgente que no puedes atender.</div>
      <div class="resp">"Ahora mismo estoy en medio de algo importante. <strong>¿Podemos vernos en 45 minutos o mañana temprano?</strong> Así te doy la atención que merece el tema."</div>
    </div>
  </div>

  <div class="card" style="--top-color:#dc2626">
    <div class="icon">🪞</div>
    <h3>El "No" sin Justificación</h3>
    <div class="desc">A veces no debes explicaciones. Practica decir NO claro y cortés, sin excusas largas que inviten a contra-argumentos.</div>
    <div class="example">
      <div class="label">Situación</div>
      <div class="sit">Te insisten en algo que ya declinaste.</div>
      <div class="resp">"Entiendo que es importante para ti. Mi respuesta es no. <strong>Si cambia algo en el futuro, te lo haré saber.</strong>"</div>
    </div>
  </div>

  <div class="card" style="--top-color:#0891b2">
    <div class="icon">🪜</div>
    <h3>El "No" Progresivo</h3>
    <div class="desc">Ofrece una versión reducida de lo que te piden. Cuidas la relación sin sobrecargarte.</div>
    <div class="example">
      <div class="label">Situación</div>
      <div class="sit">Te piden coordinar un proyecto entero.</div>
      <div class="resp">"Asumir todo el proyecto ahora no me es posible. <strong>Sí puedo encargarme de la fase de investigación inicial</strong> y luego vemos cómo distribuimos el resto."</div>
    </div>
  </div>
</div>

<div class="divider-text">🚫 Las 5 trampas del NO mal dicho</div>

<div class="full-card">
  <h3>Evita estas trampas que convierten tu NO en un problema</h3>
  <ul class="rules">
    <li><div class="num">1</div><span><strong>El NO con culpa:</strong> "Lo siento mucho, de verdad que me sabe fatal, es que…" — La disculpa excesiva socava tu mensaje.</span></li>
    <li><div class="num">2</div><span><strong>El NO con excusa inventada:</strong> Mentir te obliga a recordar la mentira. La verdad simple es más asertiva.</span></li>
    <li><div class="num">3</div><span><strong>El NO agresivo:</strong> "¿Otra vez tú? ¡No y punto!" — Cierra puertas que quizás no quieres cerrar.</span></li>
    <li><div class="num">4</div><span><strong>El NO que se convierte en sí:</strong> Cedes cuando el otro insiste. Enseña que pueden ignorar tu primer NO.</span></li>
    <li><div class="num">5</div><span><strong>El NO sin alternativa (cuando sí quieres ayudar):</strong> Si puedes ofrecer algo, hazlo. Diferencia "no puedo ahora" de "no quiero".</span></li>
  </ul>
</div>

<div class="download-hint">
  <p>💾 <strong>Guarda esta guía</strong> como referencia rápida. La próxima vez que necesites decir NO, elige la plantilla que mejor se adapte a tu situación y practícala antes de la conversación.</p>
</div>
</body></html>`;

// ─────────────────────────────────────────────────────────────────────────────
// M3 A3 · Re-ingeniería de Correos (reescritura asertiva)
// ─────────────────────────────────────────────────────────────────────────────
const M3A3_HTML = `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>
${CSS_BASE}
body{background:var(--lgray);padding:28px 20px 48px}
.header{max-width:760px;margin:0 auto 28px}
.header h2{font-size:22px;font-weight:800;color:var(--dark);margin-bottom:6px}
.header p{font-size:14px;color:var(--gray);line-height:1.65}
.email-block{background:#fff;border-radius:var(--r);box-shadow:var(--sh);margin:0 auto 24px;max-width:760px;overflow:hidden}
.email-top{padding:16px 22px;border-bottom:1px solid var(--lgray);display:flex;align-items:center;gap:12px}
.email-num{width:34px;height:34px;background:var(--p);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:15px;flex-shrink:0}
.email-meta{flex:1}
.email-meta .subject{font-size:14px;font-weight:700;color:var(--dark)}
.email-meta .from{font-size:12px;color:var(--gray)}
.badge-style{font-size:10px;font-weight:700;padding:3px 10px;border-radius:20px;letter-spacing:1px}
.bs-agr{background:var(--rl);color:var(--red)}
.bs-pas{background:#f1f5f9;color:#475569}
.original{background:#fff8f8;border-left:3px solid var(--red);margin:16px 22px;padding:14px 16px;border-radius:0 10px 10px 0;font-size:14px;line-height:1.65;color:var(--dark);white-space:pre-line}
.rewrite-area{padding:16px 22px}
.rewrite-area label{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:var(--p);display:block;margin-bottom:8px}
.rewrite-area textarea{width:100%;min-height:110px;border:1.5px solid rgba(110,67,128,.25);border-radius:10px;padding:12px 14px;font-family:inherit;font-size:14px;color:var(--dark);resize:vertical;line-height:1.6;transition:border .2s}
.rewrite-area textarea:focus{outline:none;border-color:var(--p);box-shadow:0 0 0 3px rgba(110,67,128,.1)}
.rewrite-area textarea::placeholder{color:#aaa}
.check-btn{margin-top:12px;background:var(--p);color:#fff;border:none;padding:10px 22px;border-radius:10px;font-size:14px;font-weight:700;cursor:pointer;transition:all .2s}
.check-btn:hover{background:var(--pd);transform:translateY(-1px)}
.suggestion{display:none;background:var(--gl);border-left:3px solid var(--green);border-radius:0 10px 10px 0;margin:12px 0 0;padding:14px 16px;font-size:14px;color:#14532d;line-height:1.65;white-space:pre-line}
.suggestion strong{color:#16a34a}
</style></head>
<body>
<div class="header">
  <h2>📧 Re-ingeniería de Correos</h2>
  <p>Lee cada correo con un estilo agresivo o pasivo-agresivo. Luego reescríbelo usando la <strong>fórmula de la Petición Clara</strong> y la técnica DESC. Cuando termines, compara con el modelo sugerido.</p>
</div>

<!-- EMAIL 1 -->
<div class="email-block">
  <div class="email-top">
    <div class="email-num">1</div>
    <div class="email-meta">
      <div class="subject">Re: Entrega del informe Q3</div>
      <div class="from">De: director@empresa.com</div>
    </div>
    <span class="badge-style bs-agr">😤 Agresivo</span>
  </div>
  <div class="original">Para: equipo@empresa.com

¿Dónde está el maldito informe? Os lo pedí el LUNES y hoy es jueves. Esto es una falta de profesionalidad absoluta. ¿Tengo que hacer yo todo en esta empresa? Si para mañana no está en mi bandeja, habrá consecuencias. No sé en qué estáis pensando.</div>
  <div class="rewrite-area">
    <label>✏️ Tu versión asertiva</label>
    <textarea placeholder="Reescribe este correo usando DESC: Describe la situación, Expresa el impacto, Sugiere la acción y señala la Consecuencia positiva de cumplirla..."></textarea>
    <button class="check-btn" onclick="showSugg(this)">Ver versión de referencia</button>
    <div class="suggestion"><strong>📌 Versión asertiva de referencia:</strong>
Hola equipo,

El pasado lunes os solicité el informe Q3 con fecha límite para hoy. [D] 
El no tenerlo disponible nos impide preparar la reunión con el cliente de mañana. [E]
Necesito que quien esté a cargo me envíe el documento o un avance antes de las 18:00 de hoy. [S]
Con eso podré preparar la reunión y no tendremos que retrasar la entrega al cliente. [C]

Por favor, confirmadme la recepción de este mensaje.

Gracias.</div>
  </div>
</div>

<!-- EMAIL 2 -->
<div class="email-block">
  <div class="email-top">
    <div class="email-num">2</div>
    <div class="email-meta">
      <div class="subject">Cambio de turno</div>
      <div class="from">De: colega@empresa.com</div>
    </div>
    <span class="badge-style bs-pas">😶 Pasivo-Agresivo</span>
  </div>
  <div class="original">Hola,

Mira, como tú siempre llegas tarde y parece que tu tiempo vale más que el de los demás, supongo que no te importará quedarte el viernes por la noche a cubrir mi turno, ¿no? Total, a ti qué más te da...

Si no quieres, tampoco pasa nada, ya me las arreglaré YO SOLA como siempre. No es la primera vez.</div>
  <div class="rewrite-area">
    <label>✏️ Tu versión asertiva</label>
    <textarea placeholder="Reescribe eliminando la ironía y las acusaciones. Haz una petición clara y específica..."></textarea>
    <button class="check-btn" onclick="showSugg(this)">Ver versión de referencia</button>
    <div class="suggestion"><strong>📌 Versión asertiva de referencia:</strong>
Hola,

El viernes necesito cubrir el turno de noche y me encuentro sin opción por el momento. [D]
Sé que es un cambio de último momento y que puede complicarte, lo entiendo. [E]
¿Podrías cubrirme ese turno? Yo te devolvería el favor cubriendo el tuyo el próximo lunes. [S]
Así ninguna de las dos queda descubierta y lo organizamos de forma justa. [C]

¡Gracias por considerar mi petición!</div>
  </div>
</div>

<!-- EMAIL 3 -->
<div class="email-block">
  <div class="email-top">
    <div class="email-num">3</div>
    <div class="email-meta">
      <div class="subject">Lo del proyecto</div>
      <div class="from">De: gerente@empresa.com</div>
    </div>
    <span class="badge-style bs-agr">😤 Agresivo-Vago</span>
  </div>
  <div class="original">Mira,

Esto no está funcionando. El proyecto va fatal y alguien tiene que hacer algo. No sé quién es el responsable de este desastre pero que sepa que no voy a tolerar más excusas.

Quiero resultados YA. No mañana. Ahora.

Firmado.</div>
  <div class="rewrite-area">
    <label>✏️ Tu versión asertiva</label>
    <textarea placeholder="Convierte este mensaje vago y agresivo en una comunicación clara: ¿Qué situación específica debe describirse? ¿Qué impacto tiene? ¿Qué acción concreta y con qué fecha?..."></textarea>
    <button class="check-btn" onclick="showSugg(this)">Ver versión de referencia</button>
    <div class="suggestion"><strong>📌 Versión asertiva de referencia:</strong>
Hola equipo,

El proyecto X lleva dos semanas sin actualizaciones y los hitos clave de la fase 2 no se han cumplido. [D]
Esto pone en riesgo la entrega al cliente prevista para el 30 de este mes. [E]
Necesito que cada responsable de área me envíe un informe de estado hoy antes de las 15:00 h, indicando: qué está completado, qué está pendiente y si necesitan apoyo. [S]
Con esa información podré tomar decisiones a tiempo y evitar un retraso que nos afecte a todos. [C]

Gracias por vuestra respuesta puntual.</div>
  </div>
</div>

<script>
function showSugg(btn){
  var s=btn.nextElementSibling;
  if(s.style.display==='block'){s.style.display='none';btn.textContent='Ver versión de referencia'}
  else{s.style.display='block';btn.textContent='Ocultar referencia'}
}
</script>
</body></html>`;

// ─────────────────────────────────────────────────────────────────────────────
// M4 A1 · Video Roleplay "Spot the Error" + Quiz Interactivo
// ─────────────────────────────────────────────────────────────────────────────
const M4A1_HTML = `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>
${CSS_BASE}
body{background:var(--lgray);padding:0 0 48px}
.hero{background:linear-gradient(135deg,#1e1b4b,#1e3a8a);padding:32px 24px;color:#fff}
.hero p, .hero strong { color:#fff; }
.hero .chip{background:rgba(165,180,252,.2);color:#a5b4fc;border:1px solid rgba(165,180,252,.3);margin-bottom:12px}
.hero h1{font-size:22px;font-weight:800;margin-bottom:8px}
.hero p{font-size:14px;color:#a5b4fc;line-height:1.65;max-width:560px}
.video-section{padding:24px;max-width:640px;margin:0 auto}
.video-card{background:#fff;border-radius:var(--r);box-shadow:var(--sh);overflow:hidden}
.video-header{background:#1e293b;padding:14px 20px;display:flex;align-items:center;gap:10px}
.video-header .dot{width:10px;height:10px;border-radius:50%}
.r{background:#ef4444}.y{background:#fbbf24}.g{background:#22c55e}
.video-placeholder{aspect-ratio:16/9;background:linear-gradient(160deg,#0f172a,#1e3a5f);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;text-align:center;padding:24px;color:#fff}
.video-placeholder p, .video-placeholder strong { color:#fff; }
.video-placeholder .play-lg{width:80px;height:80px;border-radius:50%;background:rgba(255,255,255,.12);border:2px solid rgba(255,255,255,.25);display:flex;align-items:center;justify-content:center;font-size:30px}
.video-placeholder p{font-size:13px;color:rgba(255,255,255,.5);font-style:italic}
.badge{background:rgba(251,191,36,.12);border:1px solid rgba(251,191,36,.3);color:#fbbf24;padding:5px 14px;border-radius:20px;font-size:11px;font-weight:700}
.quiz-section{padding:0 24px 0;max-width:640px;margin:0 auto}
.quiz-section h2{font-size:18px;font-weight:800;color:var(--dark);margin-bottom:6px}
.quiz-section .sub{font-size:13px;color:var(--gray);margin-bottom:20px}
.q-card{background:#fff;border-radius:var(--r);box-shadow:var(--sh);margin-bottom:16px;overflow:hidden}
.q-header{padding:16px 20px;border-bottom:1px solid var(--lgray);display:flex;gap:12px;align-items:flex-start}
.q-num{width:30px;height:30px;background:var(--p);color:#fff;border-radius:8px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:14px;flex-shrink:0}
.q-header p{font-size:14px;color:var(--dark);line-height:1.55;font-weight:500}
.q-options{padding:14px 20px;display:flex;flex-direction:column;gap:8px}
.opt{padding:10px 14px;border-radius:10px;border:1.5px solid #e2e8f0;cursor:pointer;font-size:14px;color:var(--dark);transition:all .2s;display:flex;align-items:center;gap:8px}
.opt:hover{border-color:var(--p);background:var(--pl)}
.opt.correct{background:var(--gl);border-color:var(--green);color:#14532d}
.opt.wrong{background:var(--rl);border-color:var(--red);color:#7f1d1d}
.opt.disabled{cursor:default;opacity:.6}
.feedback{display:none;padding:12px 20px 16px;font-size:13px;border-top:1px solid var(--lgray);line-height:1.6}
.feedback.show{display:block}
.feedback.fb-ok{color:#14532d;background:var(--gl)}
.feedback.fb-err{color:#7f1d1d;background:var(--rl)}
.score-box{background:linear-gradient(135deg,var(--p),var(--b));color:#fff;border-radius:var(--r);padding:24px;text-align:center;display:none;margin-top:8px}
.score-box.show{display:block}
.score-box .num{font-size:48px;font-weight:800;margin:8px 0}
.score-box p{font-size:14px;opacity:.9}
</style></head>
<body>
<div class="hero">
  <span class="chip">🔬 Módulo 4 · El Regalo del Feedback</span>
  <h1>Spot the Error — Encuentra los Errores</h1>
  <p>Observa la evaluación de desempeño y luego identifica los errores de comunicación cometidos. ¿Cuántos puedes detectar?</p>
</div>

<div class="video-section">
  <div class="video-card">
    <div class="video-header"><div class="dot r"></div><div class="dot y"></div><div class="dot g"></div></div>
    <img src="https://res.cloudinary.com/djybwowo6/image/upload/v1781761408/-_visual_selection-2_dxtrqr.png" alt="Evaluación de Desempeño" style="width:100%; display:block;" />
  </div>
  <p style="font-size:13px;color:var(--gray);text-align:center;margin-top:10px">👆 Reflexiona sobre los fundamentos de la comunicación asertiva y luego detecta los errores</p>
</div>

<div class="quiz-section">
  <h2>🎯 ¿Cuántos errores detectaste?</h2>
  <p class="sub">Responde cada pregunta basándote en lo que viste en el video:</p>
  <div id="quiz"></div>
  <div class="score-box" id="scoreBox">
    <p>Tu puntuación</p>
    <div class="num" id="scoreNum">0/5</div>
    <p id="scoreMsg"></p>
  </div>
</div>

<script>
var qs=[
  {q:'El jefe comienza la evaluación diciendo: "Mira, seré directo, tienes muchos problemas". ¿Cuál es el error principal?',
   opts:['No hay error, la directidad es buena en feedback','No usa el modelo SBI (Situación-Comportamiento-Impacto), ataca la persona en lugar del comportamiento','Debería haberlo dicho más fuerte para que entienda'],
   ok:1,feedback:['El feedback directo es valioso, pero debe ir acompañado de ejemplos concretos, no de juicios generales.','✓ Correcto. El error es atacar a la persona ("tienes problemas") en lugar de describir comportamientos específicos ("en la reunión del martes interrumpiste al cliente tres veces").','El volumen no mejora el feedback. Lo que importa es la precisión y el respeto.']},
  {q:'El jefe da feedback diciendo: "Siempre llegas tarde y nunca entregas a tiempo". ¿Qué falla aquí?',
   opts:['Usa lenguaje absoluto ("siempre", "nunca") que generaliza y a menudo es inexacto','Es correcto, porque el empleado sí llega tarde','Debería haber esperado a la reunión anual para decirlo'],
   ok:0,feedback:['✓ Correcto. "Siempre" y "nunca" son trampas del feedback. El empleado buscará la excepción y perderá confianza en el mensaje. Mejor: "En las últimas tres semanas llegaste tarde el martes y el jueves".','El dato puede ser real, pero el lenguaje absoluto lo hace indefendible y genera defensividad.','El feedback oportuno es más efectivo. Esperar la reunión anual convierte el feedback en un juicio acumulado.']},
  {q:'Cuando el empleado intenta explicar su punto de vista, el jefe lo interrumpe diciendo: "No me des excusas". ¿Qué modelo de comunicación está rompiendo?',
   opts:['La escucha activa y la recepción de feedback bidireccional','La jerarquía organizacional','El protocolo de reuniones formales'],
   ok:0,feedback:['✓ Correcto. El feedback es un diálogo, no un monólogo. Interrumpir y deslegitimar la respuesta del otro rompe la confianza y hace que el feedback sea inútil.','La jerarquía no justifica silenciar al otro. El feedback efectivo requiere escucha real.','El feedback no es un protocolo formal: es una conversación de crecimiento.']},
  {q:'Al final de la reunión, el jefe dice: "Bueno, espero que hayas entendido todo". ¿Cuál es el problema?',
   opts:['Es demasiado amable, debería ser más firme','No verifica la comprensión de forma real ni cierra con un plan de acción conjunto','Terminar la reunión es incorrecto, debe continuar indefinidamente'],
   ok:1,feedback:['La firmeza sin verificación de comprensión es solo ruido.','✓ Correcto. Una buena sesión de feedback cierra con preguntas abiertas ("¿qué se llevas de esta conversación?") y un plan de acción concreto con fechas y métricas.','Cerrar la reunión en el momento adecuado es necesario; lo importante es cómo se cierra.']},
  {q:'Durante toda la reunión, el jefe no menciona ningún aspecto positivo del trabajo. ¿Cuál es la consecuencia?',
   opts:['Ninguna, el feedback debe centrarse solo en errores','El empleado desconecta, se defiende y pierde motivación para mejorar','El empleado agradece la honestidad brutal'],
   ok:1,feedback:['El feedback exclusivamente negativo agota la motivación. El cerebro necesita refuerzo positivo para aceptar críticas.','✓ Correcto. El feedback sin reconocimiento activa la respuesta de amenaza en el cerebro, lo que genera defensividad y cierra la receptividad al cambio.','La "honestidad brutal" sin equilibrio suele ser solo brutalidad, no honestidad.']}
];
var answers=[];
var container=document.getElementById('quiz');
qs.forEach(function(q,qi){
  var el=document.createElement('div');el.className='q-card';
  var opts=q.opts.map(function(o,oi){
    return '<div class="opt" id="opt'+qi+'_'+oi+'" onclick="answer('+qi+','+oi+')">'+o+'</div>';
  }).join('');
  var feedbacks=q.feedback.map(function(f,fi){
    return '<div class="feedback '+(fi===q.ok?'fb-ok':'fb-err')+'" id="fb'+qi+'_'+fi+'">'+f+'</div>';
  }).join('');
  el.innerHTML='<div class="q-header"><div class="q-num">'+(qi+1)+'</div><p>'+q.q+'</p></div><div class="q-options">'+opts+'</div>'+feedbacks;
  container.appendChild(el);
});
function answer(qi,oi){
  if(answers[qi]!==undefined)return;
  answers[qi]=oi;
  var q=qs[qi];
  for(var i=0;i<q.opts.length;i++){
    var el=document.getElementById('opt'+qi+'_'+i);
    el.classList.add('disabled');
    if(i===q.ok)el.classList.add('correct');
    else if(i===oi)el.classList.add('wrong');
  }
  document.getElementById('fb'+qi+'_'+oi).classList.add('show');
  if(answers.filter(function(a){return a!==undefined}).length===qs.length){
    var score=answers.filter(function(a,i){return a===qs[i].ok}).length;
    var sb=document.getElementById('scoreBox');
    sb.classList.add('show');
    document.getElementById('scoreNum').textContent=score+'/'+qs.length;
    var msgs=['Sigue practicando. Repasa el video e intenta de nuevo.','Buen trabajo, estás captando los errores clave.','¡Excelente! Tienes un ojo muy afinado para el feedback de calidad.'];
    document.getElementById('scoreMsg').textContent=msgs[score<3?0:score<5?1:2];
  }
}
</script>
</body></html>`;

// ─────────────────────────────────────────────────────────────────────────────
// M4 A2 · Laboratorio Multimedia (3 videos Cloudinary)
// ─────────────────────────────────────────────────────────────────────────────
const M4A2_HTML = `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>
${CSS_BASE}
body{background:#0f1117;color:#e2e8f0;padding:0 0 48px}
.hero{background:linear-gradient(160deg,#1e1b4b,#0f172a);padding:32px 24px;text-align:center;border-bottom:1px solid rgba(255,255,255,.06);color:#fff}
.hero p, .hero strong { color:#fff; }
.hero .chip{background:rgba(165,180,252,.15);color:#a5b4fc;border:1px solid rgba(165,180,252,.25);margin-bottom:14px}
.hero h1{font-size:24px;font-weight:800;background:linear-gradient(90deg,#a5b4fc,#7dd3fc);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:8px}
.hero p{font-size:14px;color:#94a3b8;max-width:500px;margin:0 auto;line-height:1.7}
.phrase-box{max-width:560px;margin:24px auto 0;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:18px 22px;text-align:center}
.phrase-box p{font-size:13px;color:#64748b;margin-bottom:8px}
.phrase{font-size:18px;font-weight:700;color:#e2e8f0;font-style:italic;line-height:1.4}
.players{display:flex;flex-direction:column;gap:16px;max-width:560px;margin:24px auto 0;padding:0 20px}
.player-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:20px 22px;transition:border .2s}
.player-card:hover{border-color:rgba(255,255,255,.18)}
.player-card .tone-label{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:2px;margin-bottom:8px}
.player-card h3{font-size:16px;font-weight:700;margin-bottom:6px}
.player-card .desc{font-size:13px;color:#64748b;line-height:1.55;margin-bottom:14px}
.player-card audio{width:100%;border-radius:8px}
.cloud-badge{display:inline-block;background:rgba(251,191,36,.1);border:1px solid rgba(251,191,36,.25);color:#fbbf24;padding:4px 12px;border-radius:20px;font-size:10px;font-weight:700;margin-top:8px}
.tone-cond{border-color:#ef4444!important}.tone-cond .tone-label{color:#f87171}
.tone-tim{border-color:#64748b!important}.tone-tim .tone-label{color:#94a3b8}
.tone-ase{border-color:#22c55e!important}.tone-ase .tone-label{color:#4ade80}
.compare{max-width:560px;margin:24px auto 0;padding:0 20px}
.compare h3{font-size:16px;font-weight:700;color:#e2e8f0;margin-bottom:14px}
.compare-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.cg{border-radius:12px;padding:14px;font-size:13px;line-height:1.55}
.cg .t{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px}
.cg p{color:rgba(255,255,255,.7)}
.cg-r{background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.2)}.cg-r .t{color:#f87171}
.cg-g{background:rgba(100,116,139,.1);border:1px solid rgba(100,116,139,.2)}.cg-g .t{color:#94a3b8}
.cg-a{background:rgba(34,197,94,.1);border:1px solid rgba(34,197,94,.2)}.cg-a .t{color:#4ade80}
</style></head>
<body>
<div class="hero">
  <span class="chip">🎙️ Módulo 4 · Laboratorio Multimedia</span>
  <h1>El mismo mensaje, tres tonos distintos</h1>
  <p>La forma en que decimos algo puede ser tan importante como lo que decimos. Escucha cómo cambia el impacto de una misma frase según el tono empleado.</p>
</div>

<div class="phrase-box">
  <p>La frase que escucharás en los tres audios:</p>
  <div class="phrase">"Necesito que este informe esté listo para mañana a primera hora."</div>
</div>

<div class="players">
  <div class="player-card tone-cond">
    <div class="tone-label">😤 Tono 1</div>
    <h3>Condescendiente</h3>
    <div class="desc">Deja entrever que la otra persona no es capaz, o que ya debería saberlo. Genera resentimiento aunque las palabras sean "correctas".</div>
    <!-- CLOUDINARY_URL_AQUI → audio tono condescendiente -->
    <video controls preload="metadata" style="width:100%; border-radius:8px; margin-top:4px">
      <source src="https://res.cloudinary.com/djybwowo6/video/upload/v1781759384/genera_un_video_profesional_ci_eo8rck.mp4" type="video/mp4">
    </video>
    <div class="cloud-badge">☁ Cloudinary · Tono Condescendiente</div>
  </div>

  <div class="player-card tone-tim">
    <div class="tone-label">😶 Tono 2</div>
    <h3>Tímido / Inseguro</h3>
    <div class="desc">Las palabras son las correctas, pero la voz tiembla o se apaga. Genera incertidumbre sobre si la petición es real o se puede ignorar.</div>
    <!-- CLOUDINARY_URL_AQUI → audio tono tímido -->
    <video controls preload="metadata" style="width:100%; border-radius:8px; margin-top:4px">
      <source src="https://res.cloudinary.com/djybwowo6/video/upload/v1781759455/genera_un_video_cinematografic_jtudbp.mp4" type="video/mp4">
    </video>
    <div class="cloud-badge">☁ Cloudinary · Tono Tímido</div>
  </div>

  <div class="player-card tone-ase">
    <div class="tone-label">🙋 Tono 3</div>
    <h3>Asertivo y Claro</h3>
    <div class="desc">Firme sin ser agresivo. Tranquilo sin perder autoridad. La petición se percibe como razonable y el oyente la recibe sin defensividad.</div>
    <!-- CLOUDINARY_URL_AQUI → audio tono asertivo -->
    <video controls preload="metadata" style="width:100%; border-radius:8px; margin-top:4px">
      <source src="https://res.cloudinary.com/djybwowo6/video/upload/v1781759367/kling_20260618_VIDEO_crea_un_vi_3283_0_qx3gdb.mp4" type="video/mp4">
    </video>
    <div class="cloud-badge">☁ Cloudinary · Tono Asertivo</div>
  </div>
</div>

<div class="compare">
  <h3>¿Qué marca la diferencia?</h3>
  <div class="compare-grid">
    <div class="cg cg-r"><div class="t">Condescendiente</div><p>Velocidad alta, tono descendente al final, énfasis en las palabras que señalan al otro.</p></div>
    <div class="cg cg-g"><div class="t">Tímido</div><p>Voz baja, muletillas, finales de frase ascendentes (como si fuera una pregunta).</p></div>
    <div class="cg cg-a"><div class="t">Asertivo</div><p>Ritmo moderado, voz estable, final de frase en tono neutro, pausa antes de la petición clave.</p></div>
  </div>
</div>
</body></html>`;

// ─────────────────────────────────────────────────────────────────────────────
// M5 A1 · Escape Room Virtual "La Crisis"
// ─────────────────────────────────────────────────────────────────────────────
const M5A1_HTML = `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>
${CSS_BASE}
body{background:#0a0a12;color:#e2e8f0;min-height:100vh;overflow-x:hidden}
#app{max-width:680px;margin:0 auto;padding:0 0 48px}
.room-header{background:linear-gradient(160deg,#1a0000,#0d0d2a);padding:32px 24px;border-bottom:2px solid rgba(239,68,68,.2);text-align:center;position:relative;overflow:hidden;color:#fff}
.room-header p, .room-header strong { color:#fff; }
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
  <p>Eres el mediador. Una sociedad está a punto de romperse. Para escapar de esta sala debes aplicar todo lo aprendido en el curso. Cada elección cuenta.</p>
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
    <div class="stage-desc">Marcos, tu socio de 5 años, entra furioso y dice que quiere abandonar el proyecto inmediatamente. Tú debes responder. ¿Cuál es la primera acción asertiva?</div>
  </div>
  <div class="scenario-box">
    <div class="label">Escenario</div>
    <p>"¡Estoy harto! He hecho todo el trabajo y tú te llevas el crédito. Me voy. Este proyecto está muerto."</p>
  </div>
  <div class="options">
    <button class="opt-btn" onclick="ans(1,0,false)">A. Responderle con la misma intensidad: "¡Pues vete entonces, no te necesito!"</button>
    <button class="opt-btn" onclick="ans(1,1,false)">B. Quedarse en silencio y esperar a que se calme solo.</button>
    <button class="opt-btn" onclick="ans(1,2,true)">C. Respirar, bajar el tono y decir: "Marcos, noto que estás muy afectado. Necesito entender qué ha pasado desde tu perspectiva. ¿Podemos sentarnos cinco minutos?"</button>
    <button class="opt-btn" onclick="ans(1,3,false)">D. Intentar convencerle de que está equivocado antes de escucharle.</button>
  </div>
  <div class="feedback-box fb-err" id="fb1_err">❌ Esa respuesta escala el conflicto o lo evita. En una crisis, el primer paso es <strong>gestionar tu propia respuesta fisiológica</strong>, bajar la intensidad y abrir espacio para ser escuchados mutuamente.</div>
  <div class="feedback-box fb-ok" id="fb1_ok">✅ <strong>¡Pista 1 desbloqueada!</strong> Respirar antes de responder activa el córtex prefrontal y desactiva la amígdala. Bajar el tono y pedir espacio para escuchar es la respuesta asertiva. Has aplicado la <strong>gestión de la respuesta fisiológica</strong>.</div>
  <button class="next-btn" id="n1" onclick="next(2)">Continúa hacia la Pista 2 →</button>
</div>

<!-- FASE 2 -->
<div class="stage" id="s2">
  <div class="stage-header">
    <div class="stage-num">🔑 Pista 2 de 3</div>
    <div class="stage-title">La petición asertiva</div>
    <div class="stage-desc">Marcos se ha calmado un poco. Ahora escuchas que su queja principal es que siente que sus ideas no se reconocen. Debes hacer una petición clara para buscar un acuerdo.</div>
  </div>
  <div class="scenario-box">
    <div class="label">Lo que Marcos acaba de decirte</div>
    <p>"Nadie nunca reconoce lo que aporto. En la última presentación con el cliente fue otra vez igual. Sigo aquí porque creo en el proyecto, pero así no puedo más."</p>
  </div>
  <div class="options">
    <button class="opt-btn" onclick="ans(2,0,false)">A. "Bueno, tampoco exageres. Todo el mundo trabaja mucho aquí."</button>
    <button class="opt-btn" onclick="ans(2,1,true)">B. "Te escucho y entiendo que sentirte invisible en el trabajo es agotador. ¿Qué necesitarías de mi parte para que eso cambie de forma concreta?"</button>
    <button class="opt-btn" onclick="ans(2,2,false)">C. Prometerle que en adelante lo reconocerás sin especificar cómo ni cuándo.</button>
    <button class="opt-btn" onclick="ans(2,3,false)">D. Defenderle que la presentación fue un trabajo de equipo y que el crédito es compartido.</button>
  </div>
  <div class="feedback-box fb-err" id="fb2_err">❌ Minimizar la experiencia del otro, prometer sin concretar o ponerse defensivo son trampas comunes. Lo que necesita Marcos es sentirse <strong>validado y escuchado</strong>, y que surja una petición específica de cambio.</div>
  <div class="feedback-box fb-ok" id="fb2_ok">✅ <strong>¡Pista 2 desbloqueada!</strong> Validaste la emoción sin estar de acuerdo con todo, y luego hiciste una <strong>petición asertiva y abierta</strong> que invita al otro a co-construir la solución. Escucha activa + empatía en acción.</div>
  <button class="next-btn" id="n2" onclick="next(3)">Continúa hacia la Pista 3 →</button>
</div>

<!-- FASE 3 -->
<div class="stage" id="s3">
  <div class="stage-header">
    <div class="stage-num">🔑 Pista 3 de 3</div>
    <div class="stage-title">El feedback final</div>
    <div class="stage-desc">Marcos propone que, de ahora en adelante, cada uno presente sus partes del trabajo personalmente en las reuniones con clientes. Tú no estás totalmente de acuerdo, pero quieres dar feedback constructivo sobre su propuesta.</div>
  </div>
  <div class="scenario-box">
    <div class="label">Propuesta de Marcos</div>
    <p>"Quiero que en cada reunión con clientes, cada uno presente la parte que desarrolló. Así queda claro quién hizo qué."</p>
  </div>
  <div class="options">
    <button class="opt-btn" onclick="ans(3,0,false)">A. "Me parece bien, lo que tú digas." (aceptar sin estar convencido)</button>
    <button class="opt-btn" onclick="ans(3,1,false)">B. "Eso es una mala idea, los clientes prefieren un frente unido."</button>
    <button class="opt-btn" onclick="ans(3,2,true)">C. "Me gusta la intención detrás de tu propuesta: que cada uno tenga visibilidad. Lo que me pregunto es si un cliente necesita ver esa división interna o si podemos encontrar otra forma de que tu contribución sea reconocida tanto interna como externamente. ¿Qué opinas?"</button>
    <button class="opt-btn" onclick="ans(3,3,false)">D. "Podemos probarlo, pero si sale mal, no digas que no te avisé."</button>
  </div>
  <div class="feedback-box fb-err" id="fb3_err">❌ Ceder sin convicción, atacar la idea o añadir advertencias no es feedback constructivo. El modelo SBI (Situación-Comportamiento-Impacto) y el <strong>respeto por la propuesta del otro</strong> son clave.</div>
  <div class="feedback-box fb-ok" id="fb3_ok">✅ <strong>¡Pista 3 desbloqueada!</strong> Reconociste el valor de la propuesta, expresaste tu perspectiva sin atacarla y abriste un espacio de <strong>búsqueda Win-Win</strong>. Eso es feedback asertivo de alto nivel.</div>
  <button class="next-btn" id="n3" onclick="victory()">🚪 ¡Salir de la sala! →</button>
</div>

<!-- VICTORIA -->
<div class="victory" id="victoryScreen">
  <div class="trophy">🏆</div>
  <h2>¡Has escapado de la crisis!</h2>
  <p>Has aplicado con éxito las herramientas de comunicación asertiva bajo presión emocional real. Eso es exactamente lo que distingue a un comunicador de alto nivel.</p>
  <p><strong>Lo que demostraste en esta sala:</strong></p>
  <div class="skills-earned">
    <span class="skill-badge">🧘 Gestión fisiológica</span>
    <span class="skill-badge">👂 Escucha activa</span>
    <span class="skill-badge">💬 Petición asertiva</span>
    <span class="skill-badge">🎁 Feedback constructivo</span>
    <span class="skill-badge">🤝 Búsqueda Win-Win</span>
  </div>
</div>
</div>

<script>
var stage=1;
var attempts={1:0,2:0,3:0};
function ans(stg,idx,correct){
  var opts=document.querySelectorAll('#s'+stg+' .opt-btn');
  opts.forEach(function(o){o.style.pointerEvents='none'});
  if(correct){
    opts[idx].classList.add('correct');
    document.getElementById('fb'+stg+'_ok').classList.add('show');
    document.getElementById('n'+stg).classList.add('show');
    updateProgress(stg);
  } else {
    opts[idx].classList.add('wrong');
    document.getElementById('fb'+stg+'_err').classList.add('show');
    setTimeout(function(){
      opts.forEach(function(o){o.style.pointerEvents='auto';o.classList.remove('wrong')});
      document.getElementById('fb'+stg+'_err').classList.remove('show');
    },2200);
  }
}
function next(s){
  document.getElementById('s'+(s-1)).classList.remove('active');
  document.getElementById('s'+s).classList.add('active');
}
function victory(){
  document.getElementById('s3').classList.remove('active');
  document.getElementById('victoryScreen').classList.add('show');
  document.getElementById('progressFill').style.width='100%';
  document.getElementById('stageCount').textContent='3/3';
}
function updateProgress(s){
  var pct=Math.round((s/3)*100);
  document.getElementById('progressFill').style.width=pct+'%';
  document.getElementById('stageCount').textContent=s+'/3';
}
</script>
</body></html>`;

// ─────────────────────────────────────────────────────────────────────────────
// M5 A2 · Botiquín de Primeros Auxilios Emocionales
// ─────────────────────────────────────────────────────────────────────────────
const M5A2_HTML = `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>
${CSS_BASE}
body{background:linear-gradient(160deg,#f0f9ff,#f5f0f8);padding:28px 20px 48px}
.header{text-align:center;max-width:600px;margin:0 auto 32px}
.header .icon{font-size:48px;margin-bottom:12px}
.header h1{font-size:24px;font-weight:800;color:var(--pd);margin-bottom:8px}
.header p{font-size:15px;color:var(--gray);line-height:1.7}
.tabs{display:flex;gap:8px;max-width:700px;margin:0 auto 24px;border-bottom:2px solid rgba(110,67,128,.12);padding-bottom:0}
.tab{padding:10px 18px;font-size:14px;font-weight:700;cursor:pointer;color:var(--gray);border-bottom:3px solid transparent;margin-bottom:-2px;transition:all .2s;border-radius:8px 8px 0 0}
.tab:hover{color:var(--p);background:var(--pl)}
.tab.active{color:var(--p);border-bottom-color:var(--p);background:var(--pl)}
.panel{display:none;max-width:700px;margin:0 auto;animation:fadeIn .35s ease}
.panel.active{display:block}
@keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
/* Respiración */
.breath-circle{width:180px;height:180px;border-radius:50%;background:linear-gradient(135deg,var(--p),var(--b));margin:24px auto;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#fff;text-align:center;transition:transform 4s ease;box-shadow:0 0 0 0 rgba(110,67,128,.4);cursor:pointer}
.breath-circle.expand{transform:scale(1.35);box-shadow:0 0 0 24px rgba(110,67,128,.1)}
.breath-circle.contract{transform:scale(1);box-shadow:0 0 0 0 rgba(110,67,128,.4)}
.breath-label{text-align:center;font-size:14px;color:var(--gray);margin-bottom:16px}
.breath-counter{text-align:center;font-size:36px;font-weight:800;color:var(--p);margin-bottom:4px}
.breath-sub{text-align:center;font-size:13px;color:var(--gray);margin-bottom:20px}
.start-btn{display:block;margin:0 auto;background:var(--p);color:#fff;border:none;padding:12px 32px;border-radius:12px;font-size:15px;font-weight:700;cursor:pointer;transition:all .2s}
.start-btn:hover{background:var(--pd)}
.technique-card{background:#fff;border-radius:var(--r);padding:20px 24px;box-shadow:var(--sh);margin-bottom:14px;border-left:4px solid var(--p)}
.technique-card h3{font-size:16px;font-weight:800;color:var(--pd);margin-bottom:6px}
.technique-card p{font-size:14px;color:var(--gray);line-height:1.65}
/* Frases salvavidas */
.phrase-card{background:#fff;border-radius:var(--r);padding:18px 22px;box-shadow:var(--sh);margin-bottom:12px;display:flex;gap:14px;align-items:flex-start;cursor:pointer;transition:all .2s;border:1.5px solid transparent}
.phrase-card:hover{border-color:var(--p);transform:translateX(4px)}
.phrase-card .emoji{font-size:24px;flex-shrink:0;margin-top:2px}
.phrase-card .content h3{font-size:14px;font-weight:700;color:var(--dark);margin-bottom:4px}
.phrase-card .content p{font-size:13px;color:var(--gray);line-height:1.55}
.phrase-card .content .why{font-size:12px;color:var(--b);font-weight:600;margin-top:6px}
.copied{display:none;font-size:11px;color:var(--green);font-weight:600;margin-top:4px}
.copy-hint{font-size:12px;color:var(--gray);text-align:center;margin-bottom:16px}
</style></head>
<body>
<div class="header">
  <div class="icon">🩹</div>
  <h1>Botiquín de Primeros Auxilios Emocionales</h1>
  <p>Herramientas de acción rápida para cuando una conversación se calienta. Úsalas antes, durante o después de un momento difícil.</p>
</div>

<div class="tabs">
  <button class="tab active" onclick="showTab('breath',this)">🌬️ Respiración</button>
  <button class="tab" onclick="showTab('tech',this)">🧰 Técnicas Rápidas</button>
  <button class="tab" onclick="showTab('phrases',this)">💬 Frases Salvavidas</button>
</div>

<!-- Panel Respiración -->
<div class="panel active" id="tab-breath">
  <div class="technique-card">
    <h3>Respiración 4-7-8 (anti-amígdala)</h3>
    <p>Inhala 4 segundos, retén 7, exhala 8. Activa el sistema nervioso parasimpático en menos de 2 minutos. Haz clic en el círculo para comenzar.</p>
  </div>
  <div class="breath-counter" id="counter">4</div>
  <div class="breath-sub" id="subLabel">Haz clic para comenzar</div>
  <div class="breath-circle" id="circle" onclick="startBreath()">Toca para<br>empezar</div>
  <div class="breath-label" id="cycleLabel"></div>
  <div class="technique-card" style="margin-top:24px;border-left-color:var(--b)">
    <h3>Respiración cuadrada (4-4-4-4)</h3>
    <p>Inhala 4s → retén 4s → exhala 4s → retén 4s. Ideal para momentos de alta presión profesional. Más sencilla que la 4-7-8 y muy efectiva en 3-4 ciclos.</p>
  </div>
  <div class="technique-card" style="border-left-color:#22c55e">
    <h3>La respiración fisiológica de urgencia</h3>
    <p>Doble inhalación rápida por la nariz (sniff-sniff) seguida de una larga exhalación por la boca. Una sola vez baja el estado de alarma de inmediato. Úsala justo antes de una conversación difícil.</p>
  </div>
</div>

<!-- Panel Técnicas -->
<div class="panel" id="tab-tech">
  <div class="technique-card">
    <h3>⏸️ La Pausa Táctica</h3>
    <p>Cuando notes que estás perdiendo el control o que la conversación escala, pide formalmente una pausa: <em>"Noto que estamos escalando. Propongo que retomemos esto en 15 minutos con la cabeza más fría."</em> No es huir, es responsabilidad emocional.</p>
  </div>
  <div class="technique-card" style="border-left-color:var(--b)">
    <h3>🔄 El Reset del Cuerpo</h3>
    <p>Antes de una conversación difícil: levántate, camina 2 minutos, sacude los brazos suavemente. El movimiento físico limpia el cortisol residual del cuerpo y resetea tu estado de ánimo basal.</p>
  </div>
  <div class="technique-card" style="border-left-color:#22c55e">
    <h3>📝 El Volcado Mental</h3>
    <p>Antes de entrar a la conversación, escribe en papel (o en notas del móvil) durante 2 minutos todo lo que piensas y sientes sobre la situación. Sin filtro. Esto "vacía" el ruido mental y te permite entrar más centrado.</p>
  </div>
  <div class="technique-card" style="border-left-color:#d97706">
    <h3>🎭 El Cambio de Perspectiva</h3>
    <p>Antes de reaccionar, hazte esta pregunta: <em>"¿Cuál es la interpretación más generosa que puedo hacer de lo que esta persona acaba de decir o hacer?"</em> Reduce la respuesta de amenaza y abre la empatía.</p>
  </div>
  <div class="technique-card" style="border-left-color:#6d28d9">
    <h3>🌡️ El Termómetro Emocional</h3>
    <p>Pon una escala del 1 al 10 en tu cabeza. Si estás por encima de 7: <strong>no es el momento de resolver el conflicto</strong>. Baja a menos de 6 antes de continuar la conversación importante.</p>
  </div>
</div>

<!-- Panel Frases -->
<div class="panel" id="tab-phrases">
  <p class="copy-hint">👆 Haz clic en una tarjeta para ver por qué funciona</p>
  <div class="phrase-card" onclick="toggleWhy(this)">
    <div class="emoji">⏸️</div>
    <div class="content">
      <h3>"Noto que ambos estamos muy activados. ¿Podemos tomar 10 minutos?"</h3>
      <p>Pausa la escalada sin culpar a nadie. Neutra y efectiva.</p>
      <div class="why" style="display:none">✅ <strong>Por qué funciona:</strong> No señala al otro como el problema ("tú te estás poniendo así"), sino que describe un estado compartido. Invita a la pausa sin generar vergüenza ni confrontación adicional.</div>
    </div>
  </div>
  <div class="phrase-card" onclick="toggleWhy(this)">
    <div class="emoji">🔍</div>
    <div class="content">
      <h3>"Quiero asegurarme de entenderte bien. ¿Lo que estás diciendo es…?"</h3>
      <p>Parafrasear antes de responder. Baja la defensividad del otro.</p>
      <div class="why" style="display:none">✅ <strong>Por qué funciona:</strong> Sentirse comprendido reduce la necesidad de "pelear" por ser escuchado. El parafraseo activo comunica respeto e interés genuino.</div>
    </div>
  </div>
  <div class="phrase-card" onclick="toggleWhy(this)">
    <div class="emoji">🫱</div>
    <div class="content">
      <h3>"Entiendo tu perspectiva aunque la mía sea diferente. ¿Podemos buscar un punto en común?"</h3>
      <p>Valida sin ceder. Abre negociación sin rendirse.</p>
      <div class="why" style="display:none">✅ <strong>Por qué funciona:</strong> Separa "escucharte" de "estar de acuerdo contigo". Muchos conflictos escalan porque alguien siente que para ser comprendido, el otro debe capitular.</div>
    </div>
  </div>
  <div class="phrase-card" onclick="toggleWhy(this)">
    <div class="emoji">🧩</div>
    <div class="content">
      <h3>"Hay algo en lo que dices que tiene sentido para mí. ¿Puedes contarme más?"</h3>
      <p>Desarma la confrontación encontrando el punto de acuerdo mínimo.</p>
      <div class="why" style="display:none">✅ <strong>Por qué funciona:</strong> Encontrar algo válido en la posición del otro (aunque no compartas el todo) activa reciprocidad. El otro se abre cuando siente que no está siendo totalmente rechazado.</div>
    </div>
  </div>
  <div class="phrase-card" onclick="toggleWhy(this)">
    <div class="emoji">💚</div>
    <div class="content">
      <h3>"Lo que más me importa en esta conversación es que salgamos con algo que funcione para los dos."</h3>
      <p>Declara intención Win-Win. Reencuadra el objetivo.</p>
      <div class="why" style="display:none">✅ <strong>Por qué funciona:</strong> Cuando alguien siente que no estás ahí para "ganar" sino para resolver, su sistema nervioso se calma. Declarar intención cooperativa es una de las intervenciones más poderosas en conflictos.</div>
    </div>
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
var breathing=false;var cycle=0;var phase=0;var timer=null;
var phases=[
  {label:'Inhala...',seconds:4,action:'expand'},
  {label:'Retén...',seconds:7,action:'hold'},
  {label:'Exhala...',seconds:8,action:'contract'}
];
function startBreath(){
  if(breathing){clearInterval(timer);breathing=false;resetBreath();return}
  breathing=true;cycle=0;runPhase(0);
}
function runPhase(p){
  if(!breathing)return;
  var ph=phases[p];
  var circle=document.getElementById('circle');
  var counter=document.getElementById('counter');
  var sub=document.getElementById('subLabel');
  var cycleLabel=document.getElementById('cycleLabel');
  circle.textContent=ph.label;
  if(ph.action==='expand'){circle.classList.add('expand');circle.classList.remove('contract')}
  else if(ph.action==='contract'){circle.classList.add('contract');circle.classList.remove('expand')}
  var sec=ph.seconds;counter.textContent=sec;sub.textContent=ph.label;
  timer=setInterval(function(){
    sec--;counter.textContent=sec;
    if(sec<=0){
      clearInterval(timer);
      var nextP=(p+1)%3;
      if(nextP===0){cycle++;cycleLabel.textContent='Ciclo '+cycle+' completado'}
      if(cycle>=3){clearInterval(timer);breathing=false;resetBreath();cycleLabel.textContent='¡Ejercicio completo! 3 ciclos realizados.';return}
      runPhase(nextP);
    }
  },1000);
}
function resetBreath(){
  var circle=document.getElementById('circle');
  circle.textContent='Toca para\nempezar';circle.classList.remove('expand','contract');
  document.getElementById('counter').textContent='';
  document.getElementById('subLabel').textContent='Haz clic para comenzar';
}
</script>
</body></html>`;

// =============================================================================
//  EXPORTACIÓN DEL CURSO
// =============================================================================

export const course: Course = {
  id: 'habilidades-sociales-101',
  title: 'Comunicación Asertiva y Empatía',
  subtitle: 'Aprende a expresarte con claridad, respeto y confianza en cualquier situación de la vida.',
  description: `¿Cuántas veces te has tragado lo que realmente querías decir? ¿O has explotado y luego lamentaste cómo lo dijiste? Este curso te enseña el arte de comunicarte con asertividad: con claridad, sin agresividad, sin silencio. A través de 5 módulos progresivos con simuladores interactivos, audios inmersivos, un escape room virtual y herramientas descargables, aprenderás a manejar conversaciones difíciles, dar y recibir feedback constructivo, decir "no" sin culpa y construir relaciones basadas en el respeto mutuo.`,
  category: 'Relaciones & Comunicación con Criterio',
  broadCategories: ['Habilidades Sociales', 'Gestión Emocional'],
  coverImage: assetPath('images/course_cover_3.png'),
  instructor: mockInstructor,
  estimatedDurationMinutes: 270,
  learningObjectives: [
    'Identificar los tres estilos de comunicación (pasivo, agresivo, asertivo) y su impacto en las relaciones.',
    'Aplicar la escucha activa y la empatía para comprender antes de responder.',
    'Usar la fórmula DESC para hacer peticiones claras y decir "no" sin culpa.',
    'Dar y recibir feedback constructivo usando el modelo SBI.',
    'Gestionar conversaciones difíciles bajo presión emocional con técnicas probadas.',
  ],

  modules: [

    // =========================================================================
    //  MÓDULO 1: El Espejo de la Comunicación
    // =========================================================================
    {
      id: 'm1',
      title: 'Módulo 1: El Espejo de la Comunicación',
      activities: [

        // ── M1·A1 · Intro + Video vertical 9:16 ─────────────────────────────
        {
          id: 'm1a1',
          type: 'iframe',
          title: 'Toma el control',
          description: 'Observa este escenario cotidiano: un compañero toma el crédito de tu trabajo en una reunión. ¿Cómo responderías?',
          hideHeader: true,
          content: [M1A1_HTML],
        },

        // ── M1·A2 · Tres Opciones Interactivas (Elige tu aventura) ──────────
        {
          id: 'm1a2',
          type: 'iframe',
          title: 'Elige tu respuesta',
          description: 'Tres caminos posibles. Haz clic en cada tarjeta para descubrir qué hay detrás de cada forma de responder.',
          hideHeader: false,
          content: [M1A2_HTML],
        },

        // ── M1·A3 · Texto de cierre con presentación animada ────────────────
        {
          id: 'm1a3',
          type: 'iframe',
          title: 'La asertividad se entrena',
          description: 'Reflexión de cierre sobre las tres puertas de la comunicación y cómo cultivar la respuesta asertiva.',
          hideHeader: false,
          content: [M1A3_HTML],
        },

        // ── M1·A4 · Estilos comunes + Notepad de reflexión ─────────────────
        {
          id: 'm1a4',
          type: 'iframe',
          title: 'Parte 2: Estilos comunes en nuestra comunicación',
          description: 'Explora los cuatro estilos comunicativos y reflexiona sobre cuál usas más en tu día a día.',
          hideHeader: false,
          content: [M1A4_HTML],
        },

        // ── M1·A5 · Misión de Campo 1 (evaluación abierta) ──────────────────
        {
          id: 'm1a5',
          type: 'evaluation',
          title: '🎯 Misión de Campo 1: El Diario del Observador',
          description: 'Durante las próximas 24 horas, observa 3 interacciones de tu entorno (casa, trabajo, TV, redes sociales). Identifica el estilo comunicativo de cada una sin intervenir. Registra tus observaciones aquí.',
          questions: [
            { prompt: 'Interacción 1: Describe la situación y qué estilo identificaste (pasivo, agresivo, asertivo o esquivo). ¿Qué claves te llevaron a esa conclusión?' },
            { prompt: 'Interacción 2: Describe la situación y qué estilo identificaste. ¿Qué impacto tuvo ese estilo en la dinámica de la conversación?' },
            { prompt: 'Interacción 3: Describe la situación y el estilo observado. Si hubieras podido intervenir asertivamente, ¿cómo lo habrías hecho?' },
          ],
        },

      ],
    }, // Fin Módulo 1

    // =========================================================================
    //  MÓDULO 2: Radares Encendidos (Escucha Activa y Empatía)
    // =========================================================================
    {
      id: 'm2',
      title: 'Módulo 2: Radares Encendidos — Escucha Activa y Empatía',
      activities: [

        // ── M2·A1 · Audio inmersivo 8D + descripción de la experiencia ──────
        {
          id: 'm2a1',
          type: 'iframe',
          title: 'Simulador de Audio Inmersivo — El Ruido Mental vs. La Escucha Empática',
          description: 'Usa auriculares. Escucha la diferencia entre oír rodeado de ruido mental y escuchar con presencia total.',
          hideHeader: false,
          content: [M2A1_HTML],
        },

        // ── M2·A2 · Texto + Niveles de escucha ──────────────────────────────
        {
          id: 'm2a2',
          type: 'text',
          title: 'Los 4 Niveles de la Escucha',
          description: 'Comprender en qué nivel estamos escuchando cambia por completo la calidad de nuestras conversaciones.',
          content: [
            '¿Sabías que no toda escucha es igual? Existen cuatro niveles, y la mayoría de las personas solo opera en los dos primeros:',
            '🔇 NIVEL 1 — Escucha ignorante: Aparentas escuchar pero estás en otro mundo. Tu mente está en la lista del súper, en el partido de anoche o en lo que vas a responder.',
            '🗣️ NIVEL 2 — Escucha selectiva: Escuchas las partes que te interesan o confirman lo que ya piensas. Filtras sin darte cuenta.',
            '👂 NIVEL 3 — Escucha atenta: Prestas atención real a las palabras. Escuchas el qué. Es la escucha que generalmente reconocemos como "buena".',
            '❤️ NIVEL 4 — Escucha empática: Vas más allá de las palabras. Escuchas el cómo: el tono, el ritmo, las pausas, lo que NO se dice. Captas la emoción detrás del mensaje. Este es el nivel que transforma las relaciones.',
            '¿Cuál es la barrera principal para llegar al Nivel 4? El ruido mental: nuestros propios pensamientos, prejuicios, urgencias internas y el impulso de formular nuestra respuesta mientras el otro aún habla.',
            '🔑 La clave no es callarte a ti mismo. Es aprender a observar ese ruido sin seguirlo. La escucha empática es una decisión activa que se entrena.',
          ],
          imageSrc: 'https://res.cloudinary.com/djybwowo6/image/upload/v1781760691/-_visual_selection_vmbmjt.png',
        },

        // ── M2·A3 · Mitos vs Realidades de la Empatía (flipCards) ───────────
        {
          id: 'm2a3',
          type: 'flipCards',
          title: '🃏 Mitos vs. Realidades de la Empatía',
          description: 'Voltea cada tarjeta para descubrir la realidad detrás de los mitos más comunes sobre la empatía.',
          introText: 'Haz clic en cada tarjeta para voltearla y descubrir lo que hay detrás.',
          flipGroups: [
            {
              title: 'Mitos que debemos romper',
              color: '#dc2626',
              cards: [
                {
                  front: 'Ser empático significa estar de acuerdo con el otro.',
                  back: 'FALSO. La empatía es comprender la perspectiva y validar la emoción del otro, aunque no compartas su punto de vista. Puedo entender que estás enfadado sin necesariamente creer que tienes razón.',
                },
                {
                  front: 'Las personas empáticas son más vulnerables y se dejan manipular.',
                  back: 'FALSO. La empatía combinada con asertividad es una de las formas más sólidas de poder interpersonal. Te permite conectar sin perder tu propio terreno.',
                },
                {
                  front: 'La empatía es un rasgo innato: o la tienes o no la tienes.',
                  back: 'FALSO. La empatía es una habilidad neurológica que se puede desarrollar y fortalecer. Estudios de neuroplasticidad demuestran que la práctica consciente la amplía.',
                },
                {
                  front: 'Escuchar es lo mismo que oír.',
                  back: 'FALSO. Oír es un proceso físico y pasivo. Escuchar es un acto consciente y activo que requiere presencia, atención e intención. Puedes oír sin escuchar nada.',
                },
                {
                  front: 'Para dar buen feedback hay que ser duro y directo sin filtros.',
                  back: 'FALSO. El feedback sin empatía activa la respuesta de amenaza en el cerebro, cerrando la receptividad. La empatía no suaviza el mensaje, lo hace más efectivo.',
                },
              ],
            },
            {
              title: 'Las realidades que cambian todo',
              color: '#16a34a',
              cards: [
                {
                  front: 'Validar no significa aprobar.',
                  back: 'VERDAD. "Entiendo que estés frustrado" no significa "tienes razón en estar frustrado". Validar es reconocer la experiencia del otro como real y legítima para él, sin que debas compartirla.',
                },
                {
                  front: 'La escucha activa reduce la intensidad del conflicto.',
                  back: 'VERDAD. Cuando alguien se siente genuinamente escuchado, su nivel de activación fisiológica baja. El conflicto se vuelve resoluble cuando ambas partes sienten que fueron comprendidas.',
                },
                {
                  front: 'Las preguntas abiertas son más poderosas que los consejos inmediatos.',
                  back: 'VERDAD. Preguntar "¿cómo te sientes con eso?" o "¿qué necesitas?" en lugar de dar soluciones inmediatas comunica respeto por la autonomía del otro y genera más apertura.',
                },
              ],
            },
          ],
        },

        // ── M2·A4 · Misión de Campo 2 ────────────────────────────────────────
        {
          id: 'm2a4',
          type: 'evaluation',
          title: '🎯 Misión de Campo 2: El Reto de los 5 Minutos',
          description: 'Hoy, en una conversación con alguien cercano, dedica 5 minutos donde tu única participación sean preguntas abiertas y parafraseo. Sin dar tu opinión. Solo escuchar, preguntar y reflejar. Luego responde aquí.',
          questions: [
            { prompt: '¿Con quién hiciste el ejercicio y en qué contexto? ¿Cómo fue para ti no poder dar tu opinión durante esos 5 minutos?' },
            { prompt: '¿Notaste algún cambio en cómo respondió la otra persona cuando sentía que era escuchada de verdad? Describe lo que observaste.' },
            { prompt: '¿Qué fue lo más difícil de mantener la escucha activa sin intervenir? ¿Qué "ruido mental" experimentaste?' },
          ],
        },

      ],
    }, // Fin Módulo 2

    // =========================================================================
    //  MÓDULO 3: El Arte del "No" Saludable y la Petición Clara
    // =========================================================================
    {
      id: 'm3',
      title: 'Módulo 3: El Arte del "No" Saludable y la Petición Clara',
      activities: [

        // ── M3·A1 · Texto intro + video ─────────────────────────────────────
        {
          id: 'm3a1',
          type: 'youtube',
          title: 'Barreras de la Comunicación',
          description: 'Reproduzca el video y observe con atención las dinámicas de comunicación que ocurren y reflexione al respecto.',
          videoSrc: 'https://youtu.be/f-glZkwlE1U?si=wcz5s7lFQSKO2kkt',
          content: [
            'A lo largo de nuestras interacciones diarias nos encontramos con diversos obstáculos que impiden que el mensaje llegue o se entienda tal y como queríamos. A esto le llamamos "barreras de la comunicación".',
            'Como pudiste observar en el video, la falta de asertividad, el ruido, las distracciones o los prejuicios pueden alterar completamente el significado de una conversación. Identificar estas barreras es el primer paso para poder derribarlas.',
            'Reflexiona: ¿Cuáles de estas dinámicas reconoces en tus propias conversaciones? ¿Qué puedes hacer hoy para comenzar a ser más asertivo y claro?',
          ],
        },

        // ── M3·A2 · Simulador de Chat WhatsApp + DESC ────────────────────────
        {
          id: 'm3a2',
          type: 'iframe',
          title: '💬 Simulador DESC — Construye tu respuesta asertiva',
          description: 'Recibe mensajes exigentes y construye tu respuesta usando los bloques de la técnica DESC.',
          hideHeader: false,
          content: [M3A1_HTML],
        },

        // ── M3·A3 · Cheatsheet "Cómo decir NO" ──────────────────────────────
        {
          id: 'm3a3',
          type: 'iframe',
          title: '🛡️ Caja de Herramientas: Cómo decir NO sin quemar puentes',
          description: 'Seis plantillas asertivas para proteger tu tiempo con respeto. Guarda esta referencia para usarla cuando la necesites.',
          hideHeader: false,
          content: [M3A2_HTML],
        },

        // ── M3·A4 · Re-ingeniería de correos ─────────────────────────────────
        {
          id: 'm3a4',
          type: 'iframe',
          title: '📧 Misión de Campo 3: Re-ingeniería de Correos',
          description: 'Tres correos reales redactados de forma agresiva o pasivo-agresiva. Reescríbelos usando la fórmula de la Petición Clara.',
          hideHeader: false,
          content: [M3A3_HTML],
        },

      ],
    }, // Fin Módulo 3

    // =========================================================================
    //  MÓDULO 4: El Regalo del Feedback
    // =========================================================================
    {
      id: 'm4',
      title: 'Módulo 4: El Regalo del Feedback',
      activities: [

        // ── M4·A1 · Texto introductorio al feedback ──────────────────────────
        {
          id: 'm4a1',
          type: 'text',
          title: '¿Qué es realmente el feedback?',
          description: 'Desmontando el miedo a dar y recibir retroalimentación constructiva.',
          content: [
            'El feedback tiene mala fama. En muchas organizaciones se asocia con la crítica, con el juicio, con la "llamada al despacho". Y eso no es casualidad: es que históricamente se ha dado mal.',
            'El feedback real —el que genera cambio y no solo defensividad— no es una evaluación de la persona. Es información sobre un comportamiento específico y su impacto observable. Nada más.',
            '🔑 El modelo SBI (Situación-Comportamiento-Impacto):',
            '• SITUACIÓN: Cuándo y dónde ocurrió. "En la reunión del martes con el cliente…"',
            '• COMPORTAMIENTO: Qué hizo o dijo concretamente. "…interrumpiste al cliente tres veces mientras explicaba su problema."',
            '• IMPACTO: Qué efecto tuvo ese comportamiento. "…el cliente pareció incómodo y cortó la reunión antes de lo previsto."',
            'Esto no es un ataque. Es datos. Y cuando el feedback es datos, el otro puede escucharlo sin sentir que está siendo juzgado como persona.',
            '🎭 ¿Y cuando eres TÚ quien recibe el feedback? La tentación natural es defenderte. Pero recuerda: la defensa no es información, es ruido. Tu misión cuando recibes feedback es escuchar, agradecer y decidir después (con la cabeza fría) qué harás con esa información.',
          ],
        },

        // ── M4·A2 · Video Roleplay "Spot the Error" + Quiz ──────────────────
        {
          id: 'm4a2',
          type: 'iframe',
          title: '🔬 Spot the Error — Evaluación de Desempeño',
          description: 'Observa una evaluación de desempeño desastrosa e identifica los errores de comunicación. ¿Cuántos puedes detectar?',
          hideHeader: false,
          content: [M4A1_HTML],
        },

        // ── M4·A3 · Laboratorio Multimedia ─────────────────────────────
        {
          id: 'm4a3',
          type: 'iframe',
          title: '🎙️ Laboratorio Multimedia: El mismo mensaje, tres tonos distintos',
          description: 'Escucha cómo el tono de voz cambia por completo la forma en que se recibe un mensaje asertivo.',
          hideHeader: false,
          content: [M4A2_HTML],
        },

        // ── M4·A4 · Misión: El Espejo de Voz ────────────────────────────────
        {
          id: 'm4a4',
          type: 'evaluation',
          title: '🎯 Misión de Campo 4: El Espejo de Voz',
          description: 'Caso de estudio: tu colaborador Nico ha entregado tres veces seguidas sus informes con errores de formato que afectan a la presentación al cliente. Debes darle feedback usando el modelo SBI. Escribe aquí tu mensaje y autoevalúate.',
          questions: [
            { prompt: 'Escribe el feedback completo que le darías a Nico usando el modelo SBI (Situación · Comportamiento · Impacto). Sé tan específico como puedas.' },
            { prompt: 'Autoevaluación de tono: ¿Tu mensaje suena condescendiente, tímido o asertivo? ¿Qué cambiarías para que fuera más equilibrado?' },
            { prompt: '¿Cómo cerrarías la conversación de feedback? ¿Qué pregunta harías a Nico para asegurar que el mensaje fue recibido correctamente y que tiene un plan de acción?' },
          ],
        },

      ],
    }, // Fin Módulo 4

    // =========================================================================
    //  MÓDULO 5: En el Ojo del Huracán (Conversaciones Difíciles)
    // =========================================================================
    {
      id: 'm5',
      title: 'Módulo 5: En el Ojo del Huracán — Conversaciones Difíciles',
      activities: [

        // ── M5·A1 · Texto + Video intro al módulo ────────────────────────────
        {
          id: 'm5a1',
          type: 'video',
          title: 'Cuando el cerebro se secuestra: la amígdala en acción',
          description: 'Aprende qué ocurre en tu cerebro cuando una conversación se calienta y por qué "responder bien" en esos momentos requiere preparación, no solo buena intención.',
          videoSrc: 'CLOUDINARY_URL_AQUI_M5_VIDEO_AMIGDALA',
          // DESARROLLADOR: Reemplaza con:
          // https://res.cloudinary.com/TU_CLOUD/video/upload/m5_amigdala_conversaciones.mp4
          content: [
            'Cuando percibimos una amenaza en una conversación —un tono agresivo, una crítica, una acusación— nuestro cerebro activa la amígdala: el sistema de alarma. En milisegundos, el córtex prefrontal (la parte racional) queda parcialmente "desconectado".',
            'El resultado: tomamos decisiones impulsivas, decimos cosas que luego lamentamos, o nos bloqueamos completamente. Esto es el "secuestro de la amígdala".',
            'No es debilidad. Es biología. Y por eso la asertividad en conversaciones difíciles no es solo un tema de técnica: es un tema de gestión fisiológica.',
            '🔑 La buena noticia: podemos aprender a detectar cuándo estamos siendo secuestrados y usar técnicas específicas para recuperar el acceso a nuestra parte racional antes de responder.',
            'En este módulo final, integrarás todo lo aprendido y lo pondrás a prueba bajo presión. Bienvenido al nivel avanzado.',
          ],
        },

        // ── M5·A2 · Escape Room Virtual "La Crisis" ──────────────────────────
        {
          id: 'm5a2',
          type: 'iframe',
          title: '🔐 Escape Room: La Crisis',
          description: 'Actividad final integradora. Aplica todo lo aprendido en el curso para resolver una crisis real en 3 fases. ¿Podrás escapar de la sala?',
          hideHeader: false,
          content: [M5A1_HTML],
        },

        // ── M5·A3 · Botiquín de Primeros Auxilios Emocionales ────────────────
        {
          id: 'm5a3',
          type: 'iframe',
          title: '🩹 Botiquín de Primeros Auxilios Emocionales',
          description: 'Técnicas de respiración, pausa táctica y frases salvavidas para gestionar conversaciones difíciles en tiempo real.',
          hideHeader: false,
          content: [M5A2_HTML],
        },

        // ── M5·A4 · Proyecto Final: Plan de Vuelo Personal ───────────────────
        {
          id: 'm5a4',
          type: 'finalChallenge',
          title: '🗺️ Proyecto Final: Tu Plan de Vuelo Personal',
          description: `En lugar de un examen tipo test, este curso termina con algo más valioso: un documento que te llevas contigo.

Piensa en una conversación difícil que tienes pendiente en tu vida real — con tu pareja, tu jefe, un amigo, un familiar. Puede ser sobre un límite que necesitas establecer, un feedback que tienes que dar, un conflicto sin resolver.

Redacta aquí tu guion de preparación usando todo lo aprendido en el curso:

✦ ¿Cuál es la situación? (Contexto breve)
✦ ¿Cuál es tu objetivo en esa conversación? ¿Qué quieres que cambie?
✦ ¿Cuál es tu apertura asertiva? (Primera frase que dirás)
✦ ¿Cuál es el posible obstáculo más grande? ¿Cómo lo gestionarás?
✦ ¿Qué frase salvavidas usarás si la conversación escala?
✦ ¿Cuál es el mejor resultado posible para ambas partes?

No existe una respuesta correcta. Solo existe la tuya.`,
        },

      ],
    }, // Fin Módulo 5

  ], // Fin modules[]
};

export default course;
