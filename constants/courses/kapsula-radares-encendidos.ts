// =============================================================================
//  ANIMIKDEMI CAMPUS · Kápsula: Radares Encendidos — Escucha Activa y Empatía
//  ID: kapsula-radares-encendidos
//  Archivo: constants/courses/kapsula-radares-encendidos.ts
//
//  Kápsula de microaprendizaje derivada del Módulo 2 del programa
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
// A1 · Audio Inmersivo 8D — Simulador
// ─────────────────────────────────────────────────────────────────────────────
const A1_HTML = `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>
${CSS_BASE}
body{background:#0f1117;color:#e2e8f0;padding:0 0 48px}
.hero{background:linear-gradient(160deg,#0f0f23,#0d2a40);padding:36px 28px;text-align:center;border-bottom:1px solid rgba(255,255,255,.06);color:#fff}
.hero p,.hero strong{color:#fff}
.hero .chip{background:rgba(110,67,128,.3);color:#c4b5fd;border:1px solid rgba(196,181,253,.3);margin-bottom:14px}
.hero h1{font-size:clamp(22px,5vw,30px);font-weight:800;background:linear-gradient(90deg,#c4b5fd,#93c5fd);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:10px}
.hero p{font-size:15px;color:#94a3b8;line-height:1.7;max-width:520px;margin:0 auto}
.headphone-hint{display:flex;align-items:center;gap:10px;background:rgba(196,181,253,.1);border:1px solid rgba(196,181,253,.2);border-radius:12px;padding:12px 20px;max-width:400px;margin:20px auto 0;font-size:13px;color:#c4b5fd;font-weight:500}
.player-section{padding:32px 24px;max-width:560px;margin:0 auto}
.player-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:20px;padding:28px;text-align:center}
.wave-visual{display:flex;align-items:flex-end;justify-content:center;gap:3px;height:60px;margin-bottom:24px}
.bar{width:5px;border-radius:4px;background:linear-gradient(180deg,#818cf8,#4f46e5);animation:wave 1.2s ease-in-out infinite}
.bar:nth-child(1){height:20px;animation-delay:0s}.bar:nth-child(2){height:35px;animation-delay:.1s}.bar:nth-child(3){height:50px;animation-delay:.2s}
.bar:nth-child(4){height:40px;animation-delay:.3s}.bar:nth-child(5){height:60px;animation-delay:.4s}.bar:nth-child(6){height:45px;animation-delay:.5s}
.bar:nth-child(7){height:30px;animation-delay:.4s}.bar:nth-child(8){height:50px;animation-delay:.3s}.bar:nth-child(9){height:38px;animation-delay:.2s}.bar:nth-child(10){height:22px;animation-delay:.1s}
@keyframes wave{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.4)}}
.track-name{font-size:16px;font-weight:700;color:#e2e8f0;margin-bottom:4px}
.track-sub{font-size:13px;color:#64748b;margin-bottom:20px}
.cloud-badge{background:rgba(251,191,36,.1);border:1px solid rgba(251,191,36,.25);color:#fbbf24;padding:6px 16px;border-radius:20px;font-size:11px;font-weight:700;margin:12px auto 0;display:inline-block}
.steps{padding:0 24px 0;max-width:560px;margin:0 auto}
.steps h3{font-size:16px;font-weight:700;color:#e2e8f0;margin-bottom:16px}
.step{display:flex;gap:14px;margin-bottom:14px;background:rgba(255,255,255,.03);border-radius:12px;padding:14px}
.step .num{width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#6d28d9,#2563eb);color:#fff;font-weight:800;font-size:14px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.step p{font-size:14px;color:#94a3b8;line-height:1.6}
.step p strong{color:#c4b5fd}
</style></head>
<body>
<div class="hero">
  <span class="chip">🎧 Kápsula · Radares Encendidos</span>
  <h1>Simulador de Audio Inmersivo</h1>
  <p>Una experiencia sonora diseñada para que <em>sientas</em> la diferencia entre oír y escuchar de verdad.</p>
  <div class="headphone-hint">🎧 <span>Usa auriculares para la experiencia completa</span></div>
</div>
<div class="player-section">
  <div class="player-card">
    <div class="wave-visual">
      <div class="bar"></div><div class="bar"></div><div class="bar"></div>
      <div class="bar"></div><div class="bar"></div><div class="bar"></div>
      <div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div>
    </div>
    <div class="track-name">Pista 1: El Ruido Mental</div>
    <div class="track-sub">Audio inmersivo 8D — Fase con distracciones</div>
    <audio controls style="width:100%;margin-top:4px;border-radius:8px" preload="metadata">
      <source src="https://res.cloudinary.com/djybwowo6/video/upload/v1781765348/inmersiveaudio_nsxahk.wav" type="audio/wav">
      Tu navegador no soporta audio HTML5.
    </audio>
    <div class="cloud-badge">☁ Pista 1 · Con ruido</div>
  </div>
  <div class="player-card" style="margin-top:16px">
    <div class="wave-visual" style="filter:hue-rotate(120deg)">
      <div class="bar"></div><div class="bar"></div><div class="bar"></div>
      <div class="bar"></div><div class="bar"></div><div class="bar"></div>
      <div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div>
    </div>
    <div class="track-name">Pista 2: La Escucha Empática</div>
    <div class="track-sub">Audio inmersivo 8D — Fase limpia</div>
    <audio controls style="width:100%;margin-top:4px;border-radius:8px" preload="metadata">
      <source src="https://res.cloudinary.com/djybwowo6/video/upload/v1781775271/inmersiveaudioclean_br4anv.wav" type="audio/wav">
      Tu navegador no soporta audio HTML5.
    </audio>
    <div class="cloud-badge">☁ Pista 2 · Limpia</div>
  </div>
</div>
<div class="steps">
  <h3>¿Qué acabas de experimentar?</h3>
  <div class="step"><div class="num">1</div><p>En la <strong>Pista 1</strong> escuchaste una voz rodeada de ruido mental: notificaciones, pensamientos propios, interrupciones paneadas en estéreo.</p></div>
  <div class="step"><div class="num">2</div><p>En la <strong>Pista 2</strong> el audio se limpia. Solo queda la voz del otro. Sientes la diferencia: eso es lo que experimenta alguien cuando realmente lo escuchas.</p></div>
  <div class="step"><div class="num">3</div><p>La <strong>escucha activa</strong> no es un estado pasivo. Es una decisión consciente de <em>silenciar tu propio ruido interior</em> para estar presente.</p></div>
</div>
</body></html>`;

// =============================================================================
//  EXPORTACIÓN DEL CURSO
// =============================================================================

export const course: Course = {
  id: 'kapsula-radares-encendidos',
  title: 'Radares Encendidos: Escucha Activa y Empatía',
  subtitle: 'Aprende a escuchar de verdad — no solo a oír — y transforma la calidad de tus relaciones.',
  description: `¿Cuántas veces estás en una conversación pensando en lo que vas a responder en lugar de escuchar lo que te dicen? Esta Kápsula te lleva a experimentar en primera persona la diferencia entre oír y escuchar. A través de un simulador de audio inmersivo 8D y tarjetas interactivas sobre los mitos de la empatía, descubrirás los 4 niveles de escucha y por qué llegar al nivel 4 lo cambia todo.`,
  category: 'Relaciones & Comunicación con Criterio',
  broadCategories: ['Habilidades Sociales', 'Gestión Emocional'],
  coverImage: 'https://res.cloudinary.com/djybwowo6/image/upload/v1783647720/radares-de-comunicacion_h1m36v.png',
  instructor: mockInstructor,
  estimatedDurationMinutes: 35,
  kreditos: 1,
  courseType: 'kapsula',
  learningObjectives: [
    'Distinguir los 4 niveles de escucha y por qué la mayoría solo opera en los primeros dos.',
    'Experimentar sensorialmente la diferencia entre oír con ruido mental y escuchar con presencia.',
    'Romper los mitos más comunes sobre la empatía.',
    'Identificar el ruido mental que te impide escuchar activamente.',
  ],

  modules: [
    {
      id: 'km2-mod1',
      title: '🎧 Radares Encendidos',
      activities: [
        {
          id: 'km2-a1',
          type: 'iframe',
          title: 'Simulador de Audio Inmersivo — El Ruido Mental vs. La Escucha Empática',
          description: 'Usa auriculares. Escucha la diferencia entre oír rodeado de ruido mental y escuchar con presencia total.',
          hideHeader: false,
          content: [A1_HTML],
        },
        {
          id: 'km2-a2',
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
        {
          id: 'km2-a3',
          type: 'flipCards',
          title: '🃏 Mitos vs. Realidades de la Empatía',
          description: 'Voltea cada tarjeta para descubrir la realidad detrás de los mitos más comunes sobre la empatía.',
          introText: 'Haz clic en cada tarjeta para voltearla y descubrir lo que hay detrás.',
          flipGroups: [
            {
              title: 'Mitos que debemos romper',
              color: '#dc2626',
              cards: [
                { front: 'Ser empático significa estar de acuerdo con el otro.', back: 'FALSO. La empatía es comprender la perspectiva y validar la emoción del otro, aunque no compartas su punto de vista. Puedo entender que estás enfadado sin necesariamente creer que tienes razón.' },
                { front: 'Las personas empáticas son más vulnerables y se dejan manipular.', back: 'FALSO. La empatía combinada con asertividad es una de las formas más sólidas de poder interpersonal. Te permite conectar sin perder tu propio terreno.' },
                { front: 'La empatía es un rasgo innato: o la tienes o no la tienes.', back: 'FALSO. La empatía es una habilidad neurológica que se puede desarrollar y fortalecer. Estudios de neuroplasticidad demuestran que la práctica consciente la amplía.' },
              ],
            },
            {
              title: 'Las realidades que cambian todo',
              color: '#16a34a',
              cards: [
                { front: 'Validar no significa aprobar.', back: 'VERDAD. "Entiendo que estés frustrado" no significa "tienes razón en estar frustrado". Validar es reconocer la experiencia del otro como real y legítima para él, sin que debas compartirla.' },
                { front: 'La escucha activa reduce la intensidad del conflicto.', back: 'VERDAD. Cuando alguien se siente genuinamente escuchado, su nivel de activación fisiológica baja. El conflicto se vuelve resoluble cuando ambas partes sienten que fueron comprendidas.' },
              ],
            },
          ],
        },
        {
          id: 'km2-a4',
          type: 'evaluation',
          title: '🎯 Reto: El Experimento de los 5 Minutos',
          description: 'Hoy, en una conversación con alguien cercano, dedica 5 minutos donde tu única participación sean preguntas abiertas y parafraseo. Sin dar tu opinión. Solo escuchar, preguntar y reflejar.',
          questions: [
            { prompt: '¿Con quién hiciste el ejercicio y en qué contexto? ¿Cómo fue para ti no poder dar tu opinión durante esos 5 minutos?' },
            { prompt: '¿Notaste algún cambio en cómo respondió la otra persona cuando sentía que era escuchada de verdad? Describe lo que observaste.' },
          ],
        },
      ],
    },
  ],
};

export default course;
