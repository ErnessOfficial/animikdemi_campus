import type { Course } from '../../types';
import { mockInstructor } from './courseData';
import { assetPath } from '../../utils/paths';

export const course: Course = {
  id: 'el-arte-del-descanso',
  title: 'El Arte del Descanso',
  subtitle: 'Transforma tu percepción del descanso y crea rituales para un bienestar integral.',
  description: 'Este curso te guía a través de un viaje reflexivo para entender el descanso no como un lujo, sino como una habilidad esencial. Aprenderás a diferenciar sueño y descanso, explorarás los pilares del descanso consciente y diseñarás rituales personalizados para mejorar tu salud emocional y física.',
  category: 'Autoconciencia & Regulación emocional',
  broadCategories: ['Gestión Emocional'],
  coverImage: assetPath('images/cover_el_arte_del_descanso.png'),
  instructor: mockInstructor,
  estimatedDurationMinutes: 180,
  learningObjectives: [
    'Cambiar la percepción del descanso de recompensa a necesidad fundamental.',
    'Diferenciar sueño, descanso y sueño reparador, y su impacto en la salud.',
    'Explorar y aplicar los pilares del descanso consciente.',
    'Diseñar rituales personalizados de descanso para la vida diaria.',
    'Implementar estrategias para mejorar la higiene del sueño y la regulación emocional.'
  ],
  modules: [
    {
      id: 'm1',
      title: 'Módulo 1: El Descanso no es un Lujo, es una Habilidad',
      activities: [
        {
          id: 'm1a1',
          type: 'flipCards',
          hideHeader: true,
          title: 'Contexto y Recursos Teóricos',
          description: 'Explora las diferencias entre sueño y descanso, y su importancia para el bienestar.',
          imageSrc: assetPath('images/cover_el_arte_del_descanso.png'),
          introText: 'Haz clic en cada tarjeta para girarla y descubrir la definición completa del concepto.',
          flipGroups: [
            {
              title: 'Diferenciando Sueño y Descanso',
              color: '#26c6da',
              cards: [
                { front: 'Sueño', back: 'Se define como un estado de inconsciencia del que se puede sacar a la persona mediante estímulos. Es un estado activo con cambios hormonales, metabólicos y bioquímicos esenciales para el buen funcionamiento diurno.' },
                { front: 'Descanso', back: 'Momento del día en que se reduce o cesa la actividad física y/o mental. No implica necesariamente estar dormido. Se puede descansar sin dormir, y dormir sin descansar.' },
                { front: 'Sueño Reparador', back: 'Combinación de dormir y descansar que da la sensación de haber dormido y descansado al mismo tiempo.' }
              ]
            },
            {
              title: 'Tipos de Descanso',
              color: '#6e4380',
              cards: [
                { front: 'Los 7 tipos', back: 'Físico (pasivo/activo), Mental, Sensorial, Creativo, Emocional, Social y Espiritual.' }
              ]
            },
            {
              title: 'El Sueño como Pilar de la Salud',
              color: '#dd566f',
              cards: [
                { front: 'Impacto en el Cerebro', back: 'Consolida la memoria, procesa experiencias, potencia la plasticidad, limpia subproductos (sistema glinfático) y regenera neuronas.' },
                { front: 'Duración del Sueño', back: 'Los adultos necesitan entre 7 y 9 horas por noche para una buena salud.' }
              ]
            },
            {
              title: 'La Conexión Emocional',
              color: '#1a4a69',
              cards: [
                { front: 'Falta de sueño', back: 'Favorece el desarrollo de múltiples problemas de salud.' },
                { front: 'Regulación Emocional (REM)', back: 'Durante la fase REM, el cerebro procesa y regula las emociones, reduciendo la carga de eventos negativos.' },
                { front: 'Privación del sueño', back: 'Incrementa la reactividad emocional: irritabilidad, ansiedad, depresión y menor disfrute.' }
              ]
            }
          ]
        },
        {
          id: 'm1a2',
          type: 'quiz',
          title: 'Actividad Inicial Interactiva: Tu Frasco de Energía',
          description: 'Reflexiona sobre cómo recargas tu energía cuando está baja.',
          imageSrc: assetPath('images/infografia_frasco_energia_copy.png'),
          questions: [
            {
              question: '¿Qué haces cuando tu frasco de energía está casi vacío?',
              options: [
                { text: 'Sigo trabajando hasta terminar.', feedback: 'Esto puede llevar al agotamiento. Considera actividades de descanso para recargar.' },
                { text: 'Tomo un descanso breve, como meditar.', feedback: 'Excelente elección. El descanso mental ayuda a recargar rápidamente.' },
                { text: 'Duermo una siesta.', feedback: 'Buena opción para el descanso físico pasivo.' },
                { text: 'Hago ejercicio ligero o estiramientos.', feedback: 'Perfecto para el descanso físico activo.' }
              ]
            },
            {
              question: 'Cuando te encuentras en un estado de energía muy baja y tienes poco tiempo, ¿cuál de las siguientes acciones es la más efectiva para iniciar una verdadera recarga, en lugar de solo distraerte temporalmente?',
              options: [
                { text: 'Consumir una bebida con cafeína o azúcar', feedback: 'Ofrece un impulso rápido, pero generalmente provoca una caída (crash) de energía poco después.' },
                { text: 'Hacer una "micro-pausa" de 5 minutos al aire libre o cerca de una ventana', feedback: 'Recomendado: rompe el ciclo de fatiga, cambia el enfoque sensorial y promueve una breve oxigenación cerebral.' },
                { text: 'Empezar una tarea pendiente muy fácil para sentir la satisfacción de terminar algo', feedback: 'Aunque da un pequeño impulso de logro, sigue consumiendo la energía que intentas recargar.' },
                { text: 'Ver 10 minutos de contenido gracioso en redes sociales', feedback: 'Es una distracción válida, pero a menudo no permite un descanso profundo y puede llevar a fatiga digital.' }
              ]
            },
            {
              question: 'Si tu baja energía se debe principalmente a una sobrecarga mental (mucho pensamiento, toma de decisiones o estrés cognitivo), ¿cuál de estas estrategias apunta mejor a descansar tu cerebro de forma activa?',
              options: [
                { text: 'Continuar revisando tu lista de pendientes, pero reorganizándola por colores', feedback: 'Mantiene el cerebro en modo analítico; no permite un descanso real de la toma de decisiones.' },
                { text: 'Escuchar un pódcast educativo complejo sobre un tema nuevo', feedback: 'Sigue exigiendo esfuerzo cognitivo y atención concentrada.' },
                { text: 'Realizar una actividad manual sencilla y repetitiva (tejer, garabatear, lavar platos sin música)', feedback: 'Recomendado: permite que la mente divague (modo por defecto) y reduce el esfuerzo cognitivo.' },
                { text: 'Planificar detalladamente tu próxima semana de trabajo o estudio', feedback: 'Activa intensamente las funciones ejecutivas, profundizando la fatiga mental.' }
              ]
            },
            {
              question: 'Si sientes que tu cansancio está ligado a la fatiga digital y la constante conexión, ¿cuál es la mejor manera de restablecer tus límites con la tecnología para una recarga profunda?',
              options: [
                { text: 'Limitar tu uso de pantalla a solo una hora antes de dormir', feedback: 'Ayuda, pero sigue permitiendo conexión durante la mayor parte del día.' },
                { text: 'Desactivar el Wi-Fi o los datos móviles en tu dispositivo principal por 2 a 4 horas', feedback: 'Recomendado: barrera física y temporal que fuerza un verdadero descanso de notificaciones y estímulos.' },
                { text: 'Cambiar el fondo de pantalla del teléfono a un color calmante', feedback: 'Cambio estético superficial que no aborda la necesidad de desconexión.' },
                { text: 'Revisar el correo electrónico una vez cada dos horas', feedback: 'Mejora el enfoque, pero mantiene interrupciones y expectativas de respuesta.' }
              ]
            }
          ]
        },
        {
          id: 'm1a3',
          type: 'video',
          title: 'Video Animado: El Mito del "Siempre Ocupado"',
          description: 'Explora cómo la cultura actual glorifica el agotamiento y por qué es contraproducente.',
          videoSrc: assetPath('videos/mito_siempre_ocupado.mp4'),
          content: [
            '• Transcripción del Video',
            'i:"¿Alguna vez has escuchado esa frase silenciosa que ronda en nuestra mente… “ya descansaré cuando termine todo”? Ese es el mito del agotamiento: la creencia de que solo podemos parar cuando no damos más, cuando el cuerpo colapsa, cuando la mente ya no responde. Pero piensa… ¿no es absurdo? Es como esperar a que el coche se quede sin gasolina en medio de la autopista para recién ir a la gasolinera. Como beber agua solo cuando la sed ya duele en la garganta. Nos han enseñado a confundir agotamiento con productividad. A sentir culpa por cerrar los ojos cinco minutos, por apagar el móvil, por decir “hoy no puedo más”. El mito nos dice que descansar es un premio, cuando en realidad es una necesidad biológica y emocional. El descanso no es el final del camino después del cansancio extremo. El descanso es parte del camino. Es el aire que sostiene el fuego, no la ceniza que queda después de quemarnos. Romper con este mito es un acto de rebeldía. Es aprender a escucharnos antes de que el cuerpo grite, antes de que la mente se fracture, antes de que la emoción nos desborde. Porque descansar no es rendirse. Descansar es resistir. Es cuidar el motor que nos mantiene vivos, creativos y humanos. La pregunta es… ¿quieres seguir creyendo en el mito del agotamiento… o empezar a escribir una nueva historia con tu descanso como protagonista?"'
          ]
        },
        {
          id: 'm1a4',
          type: 'evaluation',
          title: 'Reflexión Guiada: ¿Qué Significa Descanso para Ti?',
          description: 'Responde para crear tu nube de palabras personal.',
          content: [
            'Para conocer el significado de descanso para ti es importante que exploremos dentro de tus más profundas reflexiones, por eso es momento de que hagamos un ejercicio de reflexión guiada. Busca un lugar tranquilo, donde nada pueda perturbarte ni interrumpirte, ponte unos audífonos, ya que ayudará a que la experiencia sea mucho más relajante y cuando esté todo listo reproduce el audio y escúchalo atentamente siguiendo las instrucciones. Una vez que hayas terminado de escuchar el audio, continúa con la pregunta de abajo.'
          ],
          audioSrc: assetPath('audios/reflexion_guiada.mp3'),
          questions: [
            { prompt: '¿Qué significa para ti la palabra "descanso"?' }
          ]
        },
      ]
    },
    {
      id: 'm2',
      title: 'Módulo 2: Los 4 Pilares del Descanso Consciente',
      activities: [
        {
          id: 'm2a1',
          type: 'flipCards',
          hideHeader: true,
          title: 'Contexto y Recursos Teóricos',
          description: 'Aprende sobre ritmos circadianos, higiene del sueño y estrategias conductuales.',
          introText: 'Haz clic en cada tarjeta para girarla y descubrir las claves prácticas.',
          flipGroups: [
            {
              title: 'Ritmos Circadianos y Sincronización',
              color: '#1e88e5',
              cards: [
                { front: 'Ritmos Circadianos', back: 'Ciclos de ~24 horas regulados por el núcleo supraquiasmático.' },
                { front: 'Luz Matinal', back: 'Exposición a luz natural al levantarte sincroniza el reloj interno y regula cortisol y melatonina.' },
                { front: 'Evitar Luz Azul', back: 'Reduce pantallas y luces LED 1-2 h antes de dormir para no inhibir la melatonina.' }
              ]
            },
            {
              title: 'Control Conductual del Sueño',
              color: '#6e4380',
              cards: [
                { front: 'Rutinas Regulares', back: 'Horario consistente para acostarse y levantarse, incluidos fines de semana.' },
                { front: 'Control de Estímulos', back: 'Usa la cama solo para dormir o sexo. Si no concilias en 10-15 min, sal y realiza una actividad relajante.' },
                { front: 'Manejo de Siestas', back: 'Evita siestas largas y al final de la tarde para no reducir la presión de sueño.' }
              ]
            },
            {
              title: 'Dieta y Estilo de Vida',
              color: '#dd566f',
              cards: [
                { front: 'Estimulantes y Depresores', back: 'Evita cafeína después del mediodía y alcohol/nicotina cerca de dormir.' },
                { front: 'Alimentación Nocturna', back: 'Cenas ligeras; evitar comer/beber en grandes cantidades 2-3 h antes de acostarse.' }
              ]
            },
            {
              title: 'Ejercicio',
              color: '#1a4a69',
              cards: [
                { front: 'Momento del Ejercicio', back: 'Realiza actividad física regularmente, preferiblemente por la mañana/tarde. Evita ejercicio intenso 3-6 h antes de dormir.' }
              ]
            }
          ]
        },
        {
          id: 'm2a2',
          type: 'pillarsInteractive',
          title: 'Diagrama de los 4 Pilares',
          description: 'Explora los cuatro pilares del descanso consciente haciendo clic en cada burbuja.'
        },
        {
          id: 'm2a3',
          type: 'youtube',
          title: 'Video Tutorial: Estiramientos de Cuello y Espalda',
          description: 'Sigue este tutorial para que que aprendas ejercicios de estiramiento de cuello y espalda para hcerlos por la noche y mejorar tu decanso',
          videoSrc: 'https://youtu.be/extbVp9F7sE?si=TURRYtlrvtzmCpt6'
        },
        {
          id: 'm2a4',
          type: 'pondGame',
          title: 'El Estanque Mental',
          description: 'Juego de atención plena para reconocer y soltar pensamientos conscientemente.',
          content: [
            'Nota: Haz clic en una burbuja de pensamiento para iniciar. Lee el texto de reconocimiento y pulsa "Soltar y Liberar Conscientemente" para sumar Claridad.',
            'Este juego esta enfocdo en estilmular la atencio  plena.Reflexión Obligatoria: Al hacer clic en una "burbuja de pensamiento", el juego se detiene y tienes que leer y presionar el botón "Soltar y Liberar Conscientemente" para ganar puntos. Esto obliga a una pausa y a la aceptación del pensamiento antes de liberarlo.',
            'Métrica Terapéutica: La barra de vida se llama "Paz Interior", y la puntuación es "Claridad".',
            'Logro de "Racha": Se recompensa la capacidad de mantener la concentración y liberar pensamientos continuamente (racha), incentivando un estado de flujo mental.',
            '¡Espero que este juego sea una herramienta valiosa en tu formación sobre el arte del descanso!'
          ]
        }
      ]
    },
    {
      id: 'm3',
      title: 'Módulo 3: Crea tu Ritual de Descanso',
      activities: [
        {
          id: 'm3a1',
          type: 'text',
          title: 'Contexto y Recursos Teóricos',
          description: 'Aprende estrategias para desacelerar la mente y crear rituales efectivos.',
          content: [
            'La Mente Activa y el Insomnio:',
            'El insomnio puede estar relacionado con una mente demasiado agitada (sistema nervioso simpático activo), en modo lucha o huida, impidiendo conciliar el sueño.',
            'El estrés crónico incrementa el cortisol, que si se mantiene elevado por la noche, interfiere con el sueño profundo y favorece síntomas de ansiedad.',
            'La preocupación excesiva y el malestar emocional agravan los problemas de sueño.',
            'Estrategias de Desaceleración y Relajación:',
            'Ritual de Desaceleración: Establecer rutinas previas al sueño (ducha relajante, cena ligera, ocio distractor) para indicarle al cerebro que es momento de relajarse.',
            'Activación del Sistema Parasimpático: Aprender y practicar técnicas de relajación (mindfulness, yoga, meditación, relajación muscular progresiva) para reducir la activación fisiológica.',
            'Respiración Diafragmática: Ejercicios de respiración lenta y rítmica (p.ej., 4 segundos inspirar, 6 segundos exhalar) son extraordinarios para regular la ansiedad, calmar la mente e incrementar la variabilidad de la tasa cardíaca (asociada a mejor salud emocional y resiliencia).',
            'Intervenciones Cognitivas (Reestructuración Cognitiva y TCC-I):',
            'Diario de Preocupaciones / Tiempo Basura: Escribir las preocupaciones y la lista de problemas/tareas pendientes, con medidas a tomar, en un tiempo limitado (15 minutos, dos veces al día), lejos de la hora de acostarse (preferiblemente 2 horas antes). Esto saca los pensamientos de la cabeza y disminuye el tiempo necesario para conciliar el sueño hasta en un 50%.',
            'Reestructuración Cognitiva: Identificar y desafiar pensamientos disfuncionales sobre el sueño (p.ej., catastrofismo como "nunca volveré a dormir bien" o pensamiento polarizado como "debería dormir 8 horas") y reemplazarlos por interpretaciones más adaptativas.',
            'Intención Paradójica (Mantenerse Pasivamente Despierto): En la cama, intentar no pensar en quedarse dormido (lo que genera preocupación), sino concentrarse en pensamientos relajantes y placenteros para facilitar el descanso.'
          ]
        },
        {
          id: 'm3a2',
          type: 'finalChallenge',
          title: 'Constructor de Ritual',
          description: 'Arrastra y suelta actividades para crear tu ritual de mañana, tarde y antes de dormir.'
        },
        {
          id: 'm3a3',
          type: 'iframe',
          title: 'Paso a Paso: Incorpora los Pilares',
          description: 'Guía para elegir actividades de cada pilar y formar una rutina diaria.',
          content: [
            `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Rutina de Descanso Consciente - Guía Interactiva</title>
  <style>
    :root {
      --primary: #4a6fa5;
      --secondary: #6b8cbc;
      --accent: #ff9f43;
      --light: #f8f9fa;
      --dark: #343a40;
      --success: #28a745;
      --warning: #ffc107;
      --danger: #dc3545;
      --card-bg: #ffffff;
      --shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f0f4f8;
      color: var(--dark);
      line-height: 1.6;
      padding: 20px;
    }

    .container {
      max-width: 900px;
      margin: 0 auto;
    }

    header {
      text-align: center;
      margin-bottom: 30px;
      padding: 20px;
      background: linear-gradient(to right, var(--primary), var(--secondary));
      color: white;
      border-radius: 12px;
      box-shadow: var(--shadow);
    }

    h1 {
      font-size: 1.8rem;
      margin-bottom: 10px;
    }

    .step {
      background: var(--card-bg);
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 25px;
      box-shadow: var(--shadow);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .step:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 12px rgba(0,0,0,0.15);
    }

    .step-title {
      display: flex;
      align-items: center;
      cursor: pointer;
      font-weight: bold;
      font-size: 1.3rem;
      color: var(--primary);
      margin-bottom: 15px;
      padding-bottom: 10px;
      border-bottom: 2px solid #e9ecef;
    }

    .step-title::before {
      content: "▶";
      margin-right: 10px;
      transition: transform 0.3s ease;
    }

    .step.active .step-title::before {
      content: "▼";
    }

    .step-content {
      display: none;
      animation: fadeIn 0.5s ease-in-out;
    }

    .step.active .step-content {
      display: block;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .pillar-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 15px;
      margin: 20px 0;
    }

    .pillar-card {
      background: #eef4ff;
      border-left: 4px solid var(--primary);
      padding: 15px;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .pillar-card:hover {
      background: #dde9ff;
      transform: scale(1.02);
    }

    .pillar-card.selected {
      background: #d0e4ff;
      border-left: 4px solid var(--accent);
      box-shadow: 0 0 8px rgba(255,159,67,0.4);
    }

    .pillar-card h4 {
      color: var(--primary);
      margin-bottom: 8px;
    }

    .activity-table {
      width: 100%;
      border-collapse: collapse;
      margin: 15px 0;
    }

    .activity-table th,
    .activity-table td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }

    .activity-table th {
      background-color: var(--primary);
      color: white;
    }

    .time-block {
      background: #f8f9fa;
      padding: 15px;
      border-radius: 8px;
      margin: 15px 0;
      border-left: 4px solid var(--secondary);
    }

    .time-block h4 {
      color: var(--secondary);
      margin-bottom: 10px;
    }

    .example-routine {
      background: #fff8e1;
      padding: 15px;
      border-radius: 8px;
      margin-top: 20px;
      border-left: 4px solid var(--warning);
    }

    .example-routine h4 {
      color: #e6a000;
      margin-bottom: 10px;
    }

    .example-routine ul {
      padding-left: 20px;
    }

    .commitment-box {
      background: #d4edda;
      padding: 15px;
      border-radius: 8px;
      margin-top: 20px;
      border-left: 4px solid var(--success);
    }

    .commitment-box h4 {
      color: #155724;
      margin-bottom: 10px;
    }

    footer {
      text-align: center;
      margin-top: 30px;
      color: #6c757d;
      font-size: 0.9rem;
    }

    @media (max-width: 600px) {
      .pillar-grid {
        grid-template-columns: 1fr;
      }
      h1 {
        font-size: 1.5rem;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>Guía Interactiva: Rutina de Descanso Consciente</h1>
      <p>Diseña tu rutina diaria basada en los 4 pilares del descanso integral</p>
    </header>

    <!-- Paso 1 -->
    <div class="step active" id="step1">
      <div class="step-title" onclick="toggleStep('step1')">PASO 1: Identificar los 4 Pilares del Descanso Consciente</div>
      <div class="step-content">
        <p>El descanso consciente abarca cuatro dimensiones esenciales. Comprende cada pilar y sus necesidades:</p>
        <div class="pillar-grid">
          <div class="pillar-card" onclick="selectPillar(this)">
            <h4>1. Físico / Movimiento</h4>
            <p><strong>Necesidad:</strong> Reposo y activación del cuerpo.</p>
            <p><em>Carencia:</em> Tensión muscular, fatiga, rigidez.</p>
          </div>
          <div class="pillar-card" onclick="selectPillar(this)">
            <h4>2. Mental / Cognitivo</h4>
            <p><strong>Necesidad:</strong> Desconexión de tareas y enfoque.</p>
            <p><em>Carencia:</em> Niebla mental, estrés por sobrecarga.</p>
          </div>
          <div class="pillar-card" onclick="selectPillar(this)">
            <h4>3. Emocional / Social</h4>
            <p><strong>Necesidad:</strong> Procesamiento de sentimientos y conexión.</p>
            <p><em>Carencia:</em> Irritabilidad, soledad, emociones reprimidas.</p>
          </div>
          <div class="pillar-card" onclick="selectPillar(this)">
            <h4>4. Espiritual / Propósito</h4>
            <p><strong>Necesidad:</strong> Conexión con valores o algo más grande.</p>
            <p><em>Carencia:</em> Vacío, falta de motivación o dirección.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Paso 2 -->
    <div class="step" id="step2">
      <div class="step-title" onclick="toggleStep('step2')">PASO 2: Elegir Actividades Clave para Cada Pilar</div>
      <div class="step-content">
        <p>Selecciona una actividad <strong>Micro</strong> (<5 min) y una <strong>Macro</strong> (15-30 min) para cada pilar:</p>
        <table class="activity-table">
          <thead>
            <tr>
              <th>Pilar</th>
              <th>Actividad Micro (5 min)</th>
              <th>Actividad Macro (15-30 min)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Físico</strong></td>
              <td>Estiramiento rápido o Pausa Fisiológica (2-2-4)</td>
              <td>Caminata de 20 min, yoga suave o rodillo de espuma</td>
            </tr>
            <tr>
              <td><strong>Mental</strong></td>
              <td>Anclaje Sensorial Rápido (nombrar 3 objetos)</td>
              <td>Leer un libro, pintar, armar rompecabezas</td>
            </tr>
            <tr>
              <td><strong>Emocional</strong></td>
              <td>Enviar mensaje de voz positivo</td>
              <td>Diario de desahogo o llamada social intencional</td>
            </tr>
            <tr>
              <td><strong>Espiritual</strong></td>
              <td>Práctica de gratitud (3 cosas buenas)</td>
              <td>Meditación guiada o planificar acción con propósito</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Paso 3 -->
    <div class="step" id="step3">
      <div class="step-title" onclick="toggleStep('step3')">PASO 3: Diseñar la Estructura de la Rutina Diaria</div>
      <div class="step-content">
        <div class="time-block">
          <h4>☀️ Mañana (Activación y Establecimiento)</h4>
          <p><strong>Objetivo:</strong> Comenzar con intención antes de la carga cognitiva.</p>
          <ul>
            <li>Físico/Espiritual (Macro): 15 min de yoga + gratitud</li>
            <li>Mental: Planificar 3 tareas importantes</li>
          </ul>
        </div>

        <div class="time-block">
          <h4>⏸️ Pausas Diurnas (Micro-Regulación)</h4>
          <p><strong>Objetivo:</strong> Interrumpir el estrés cognitivo y la rigidez física (mínimo 3 pausas).</p>
          <ul>
            <li><strong>Mañana (Físico):</strong> 3 ciclos de Pausa Fisiológica (2-2-4)</li>
            <li><strong>Tarde (Mental):</strong> Anclaje Sensorial Rápido</li>
            <li><strong>Almuerzo (Emocional):</strong> Mensaje positivo a un ser querido</li>
          </ul>
        </div>

        <div class="time-block">
          <h4>🌙 Noche (Desconexión Profunda)</h4>
          <p><strong>Objetivo:</strong> Señalizar al cuerpo y mente que terminó el trabajo.</p>
          <ul>
            <li>Mental (Macro): Apagar pantallas 60 min antes + leer</li>
            <li>Emocional/Espiritual (Macro): Diario + meditación de 10 min</li>
            <li>Físico: Estiramiento o ducha caliente</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Paso 4 -->
    <div class="step" id="step4">
      <div class="step-title" onclick="toggleStep('step4')">PASO 4: Evaluación y Compromiso (Ajuste Semanal)</div>
      <div class="step-content">
        <div class="commitment-box">
          <h4>✅ Monitoreo Diario</h4>
          <p>Al final del día, pregúntate: <em>“¿Tuve un momento para cada uno de los cuatro pilares hoy?”</em></p>
        </div>

        <div class="commitment-box">
          <h4>🔄 Ajuste Semanal</h4>
          <p>Si un pilar (ej: Emocional) se quedó atrás, planifica intencionalmente su Actividad Macro para el día siguiente.</p>
        </div>

        <div class="commitment-box">
          <h4>💡 Compromiso Clave</h4>
          <p><strong>La consistencia (hacer algo pequeño cada día) es más importante que la perfección (hacer mucho de vez en cuando).</strong></p>
        </div>

        <div class="example-routine">
          <h4>Ejemplo de Rutina Rápida (1 minuto por pilar)</h4>
          <ul>
            <li><strong>8:00 – Físico:</strong> 3 ciclos de Pausa Fisiológica al levantarse</li>
            <li><strong>11:00 – Mental:</strong> Anclaje Sensorial Rápido</li>
            <li><strong>14:00 – Emocional:</strong> Enviar mensaje positivo</li>
            <li><strong>21:00 – Espiritual:</strong> 1 minuto de gratitud antes de acostarse</li>
          </ul>
        </div>
      </div>
    </div>

    <footer>
      Recurso interactivo creado por AnImiKdemi como parte del Aprendizaje Reflexivo Emocional • MicroLearning de Descanso Consciente
    </footer>
  </div>

  <script>
    // Toggle steps
    function toggleStep(stepId) {
      const step = document.getElementById(stepId);
      step.classList.toggle('active');
    }

    // Select pillar cards (visual feedback)
    function selectPillar(card) {
      // Remove selection from all
      document.querySelectorAll('.pillar-card').forEach(c => c.classList.remove('selected'));
      // Add to clicked
      card.classList.add('selected');
      
      // Optional: scroll to next step after selection
      if (step1.classList.contains('active')) {
        setTimeout(() => {
          document.getElementById('step2').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 500);
      }
    }

    // Initialize: only first step open
    document.querySelectorAll('.step').forEach((step, index) => {
      if (index === 0) {
        step.classList.add('active');
      } else {
        step.classList.remove('active');
      }
    });
  </script>
</body>
</html>`
          ]
        },
        {
          id: 'm3a4',
          type: 'upload',
          title: 'Ejercicio Final: Guarda tu Ritual',
          description: 'Sube tu ritual personalizado para guardarlo en tu perfil.',
          introText: 'Siguiendo la Guía de la sección anterior, crea tu plan personalizado  en un documento de texto o siguiendo el modelo que encontraras en la sección RECURSOS y sube tu ritual de descanso.',
          closingText: 'Activa los recordatorios para completar tu ritual diario.'
        },
        {
          id: 'm3a5',
          type: 'evaluation',
          title: 'Reflexión de Cierre',
          description: 'Reflexiona sobre tu cambio de mentalidad y priorización del bienestar.',
          questions: [
            { prompt: '¿Cómo te sientes al priorizar tu bienestar y haber adquirido esta habilidad?' }
          ]
        }
      ]
    }
  ]
};

export default course;
