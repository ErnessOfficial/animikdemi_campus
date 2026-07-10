// =============================================================================
//  ANIMIKDEMI CAMPUS · Kápsula: El Regalo del Feedback
//  ID: kapsula-regalo-del-feedback
//  Archivo: constants/courses/kapsula-regalo-del-feedback.ts
//
//  Kápsula de microaprendizaje derivada del Módulo 4 del programa
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
// A1 · Video Roleplay "Spot the Error" + Quiz Interactivo
// ─────────────────────────────────────────────────────────────────────────────
const A1_HTML = `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>
${CSS_BASE}
body{background:var(--lgray);padding:0 0 48px}
.hero{background:linear-gradient(135deg,#1e1b4b,#1e3a8a);padding:32px 24px;color:#fff}
.hero p,.hero strong{color:#fff}
.hero .chip{background:rgba(165,180,252,.2);color:#a5b4fc;border:1px solid rgba(165,180,252,.3);margin-bottom:12px}
.hero h1{font-size:22px;font-weight:800;margin-bottom:8px}
.hero p{font-size:14px;color:#a5b4fc;line-height:1.65;max-width:560px}
.video-section{padding:24px;max-width:640px;margin:0 auto}
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
  <span class="chip">🔬 Kápsula · El Regalo del Feedback</span>
  <h1>Spot the Error — Encuentra los Errores</h1>
  <p>Observa la evaluación de desempeño e identifica los errores de comunicación cometidos. ¿Cuántos puedes detectar?</p>
</div>
<div class="video-section" style="padding-top:16px;">
  <img src="https://res.cloudinary.com/djybwowo6/image/upload/v1781761408/-_visual_selection-2_dxtrqr.png" alt="Evaluación de Desempeño" style="width:100%; display:block; border-radius:12px; box-shadow:var(--sh);" />
  <p style="font-size:13px;color:var(--gray);text-align:center;margin-top:10px">👆 Reflexiona sobre los fundamentos del feedback asertivo y luego detecta los errores</p>
</div>
<div class="quiz-section">
  <h2>🎯 ¿Cuántos errores detectaste?</h2>
  <p class="sub">Responde cada pregunta basándote en el escenario:</p>
  <div id="quiz"></div>
  <div class="score-box" id="scoreBox">
    <p>Tu puntuación</p>
    <div class="num" id="scoreNum">0/5</div>
    <p id="scoreMsg"></p>
  </div>
</div>
<script>
var qs=[
  {q:'El jefe comienza la evaluación diciendo: "Mira, seré directo, tienes muchos problemas". ¿Cuál es el error principal?',opts:['No hay error, la directidad es buena en feedback','No usa el modelo SBI (Situación-Comportamiento-Impacto), ataca la persona en lugar del comportamiento','Debería haberlo dicho más fuerte para que entienda'],ok:1,feedback:['El feedback directo es valioso, pero debe ir acompañado de ejemplos concretos, no de juicios generales.','✓ Correcto. El error es atacar a la persona ("tienes problemas") en lugar de describir comportamientos específicos.','El volumen no mejora el feedback. Lo que importa es la precisión y el respeto.']},
  {q:'El jefe da feedback diciendo: "Siempre llegas tarde y nunca entregas a tiempo". ¿Qué falla aquí?',opts:['Usa lenguaje absoluto ("siempre", "nunca") que generaliza y a menudo es inexacto','Es correcto, porque el empleado sí llega tarde','Debería haber esperado a la reunión anual para decirlo'],ok:0,feedback:['✓ Correcto. "Siempre" y "nunca" son trampas del feedback. El empleado buscará la excepción y perderá confianza en el mensaje.','El dato puede ser real, pero el lenguaje absoluto lo hace indefendible y genera defensividad.','El feedback oportuno es más efectivo. Esperar la reunión anual convierte el feedback en un juicio acumulado.']},
  {q:'Cuando el empleado intenta explicar su punto de vista, el jefe lo interrumpe diciendo: "No me des excusas". ¿Qué modelo de comunicación está rompiendo?',opts:['La escucha activa y la recepción de feedback bidireccional','La jerarquía organizacional','El protocolo de reuniones formales'],ok:0,feedback:['✓ Correcto. El feedback es un diálogo, no un monólogo. Interrumpir y deslegitimar la respuesta del otro rompe la confianza.','La jerarquía no justifica silenciar al otro. El feedback efectivo requiere escucha real.','El feedback no es un protocolo formal: es una conversación de crecimiento.']},
  {q:'Al final de la reunión, el jefe dice: "Bueno, espero que hayas entendido todo". ¿Cuál es el problema?',opts:['Es demasiado amable, debería ser más firme','No verifica la comprensión de forma real ni cierra con un plan de acción conjunto','Terminar la reunión es incorrecto, debe continuar indefinidamente'],ok:1,feedback:['La firmeza sin verificación de comprensión es solo ruido.','✓ Correcto. Una buena sesión de feedback cierra con preguntas abiertas y un plan de acción concreto con fechas y métricas.','Cerrar la reunión en el momento adecuado es necesario; lo importante es cómo se cierra.']},
  {q:'Durante toda la reunión, el jefe no menciona ningún aspecto positivo del trabajo. ¿Cuál es la consecuencia?',opts:['Ninguna, el feedback debe centrarse solo en errores','El empleado desconecta, se defiende y pierde motivación para mejorar','El empleado agradece la honestidad brutal'],ok:1,feedback:['El feedback exclusivamente negativo agota la motivación. El cerebro necesita refuerzo positivo para aceptar críticas.','✓ Correcto. El feedback sin reconocimiento activa la respuesta de amenaza en el cerebro, generando defensividad.','La "honestidad brutal" sin equilibrio suele ser solo brutalidad, no honestidad.']}
];
var answers=[];
var container=document.getElementById('quiz');
qs.forEach(function(q,qi){
  var el=document.createElement('div');el.className='q-card';
  var opts=q.opts.map(function(o,oi){return '<div class="opt" id="opt'+qi+'_'+oi+'" onclick="answer('+qi+','+oi+')">'+o+'</div>';}).join('');
  var feedbacks=q.feedback.map(function(f,fi){return '<div class="feedback '+(fi===q.ok?'fb-ok':'fb-err')+'" id="fb'+qi+'_'+fi+'">'+f+'</div>';}).join('');
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
    var msgs=['Sigue practicando. Repasa y vuelve a intentarlo.','Buen trabajo, estás captando los errores clave.','¡Excelente! Tienes un ojo muy afinado para el feedback de calidad.'];
    document.getElementById('scoreMsg').textContent=msgs[score<3?0:score<5?1:2];
  }
}
</script>
</body></html>`;

// =============================================================================
//  EXPORTACIÓN DEL CURSO
// =============================================================================

export const course: Course = {
  id: 'kapsula-regalo-del-feedback',
  title: 'El Regalo del Feedback',
  subtitle: 'Aprende a dar y recibir feedback que genera cambio real, no defensividad.',
  description: `El feedback tiene mala fama porque históricamente se ha dado mal. Esta Kápsula te enseña el modelo SBI (Situación-Comportamiento-Impacto) para dar información concreta sobre comportamientos —no juicios sobre personas—. Con un quiz interactivo "Spot the Error" y ejercicios prácticos, dominarás el arte de la retroalimentación constructiva en menos de 30 minutos.`,
  category: 'Relaciones & Comunicación con Criterio',
  broadCategories: ['Habilidades Sociales', 'Gestión Emocional'],
  coverImage: 'https://res.cloudinary.com/djybwowo6/image/upload/v1783647718/regalo-del-feedback_ajwgca.png',
  instructor: mockInstructor,
  estimatedDurationMinutes: 30,
  kreditos: 1,
  courseType: 'kapsula',
  learningObjectives: [
    'Aplicar el modelo SBI para dar feedback específico y no personal.',
    'Identificar los errores más comunes al dar feedback en una evaluación.',
    'Desarrollar una mentalidad de crecimiento al recibir retroalimentación.',
    'Cerrar conversaciones de feedback con comprensión verificada y plan de acción.',
  ],

  modules: [
    {
      id: 'km4-mod1',
      title: '🔬 El Regalo del Feedback',
      activities: [
        {
          id: 'km4-a1',
          type: 'text',
          title: '¿Qué es realmente el feedback?',
          description: 'Desmontando el miedo a dar y recibir retroalimentación constructiva.',
          content: [
            'img: https://res.cloudinary.com/djybwowo6/image/upload/v1781790109/-_visual_selection-3_gv17y2.png',
            'El feedback tiene mala fama. En muchas organizaciones se asocia con la crítica, con el juicio, con la "llamada al despacho". Y eso no es casualidad: es que históricamente se ha dado mal.',
            'El feedback real —el que genera cambio y no solo defensividad— no es una evaluación de la persona. Es información sobre un comportamiento específico y su impacto observable. Nada más.',
            '🔑 El modelo SBI (Situación-Comportamiento-Impacto):',
            '• SITUACIÓN: Cuándo y dónde ocurrió. "En la reunión del martes con el cliente…"',
            '• COMPORTAMIENTO: Qué hizo o dijo concretamente. "…interrumpiste al cliente tres veces mientras explicaba su problema."',
            '• IMPACTO: Qué efecto tuvo ese comportamiento. "…el cliente pareció incómodo y cortó la reunión antes de lo previsto."',
            'img: https://res.cloudinary.com/djybwowo6/image/upload/v1781790108/-_visual_selection-4_qelxtn.png',
            'Esto no es un ataque. Es datos. Y cuando el feedback es datos, el otro puede escucharlo sin sentir que está siendo juzgado como persona.',
            '🎭 ¿Y cuando eres TÚ quien recibe el feedback? La tentación natural es defenderte. Pero recuerda: la defensa no es información, es ruido. Tu misión cuando recibes feedback es escuchar, agradecer y decidir después (con la cabeza fría) qué harás con esa información.',
          ],
        },
        {
          id: 'km4-a2',
          type: 'iframe',
          title: '🔬 Spot the Error — Evaluación de Desempeño',
          description: 'Observa una evaluación de desempeño desastrosa e identifica los errores de comunicación. ¿Cuántos puedes detectar?',
          hideHeader: false,
          content: [A1_HTML],
        },
        {
          id: 'km4-a3',
          type: 'evaluation',
          title: '🎯 Misión: El Espejo de Voz',
          description: 'Caso de estudio: tu colaborador ha entregado tres veces seguidas sus informes con errores de formato que afectan la presentación al cliente. Redacta tu feedback usando el modelo SBI.',
          questions: [
            { prompt: 'Escribe el feedback completo usando el modelo SBI (Situación · Comportamiento · Impacto). Sé tan específico como puedas.' },
            { prompt: 'Autoevaluación de tono: ¿Tu mensaje suena condescendiente, tímido o asertivo? ¿Qué cambiarías para que fuera más equilibrado y efectivo?' },
          ],
        },
      ],
    },
  ],
};

export default course;
