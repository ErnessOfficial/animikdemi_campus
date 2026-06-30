import React, { useState, useEffect, useMemo, useCallback } from 'react';
import type { UserProgress } from '../types';

type KitToolId = 'respiracion' | 'diario' | 'simulador' | 'quiz' | 'validacion' | 'fortaleza' | 'ia_guide';

interface KitReflexivoPageProps {
  progress: UserProgress;
  onKitAction: (toolType: string, xpReward: number, extraData?: any) => void;
  onReflectionCompleted?: () => void;
}

const kitTools: Array<{
  id: KitToolId;
  title: string;
  description: string;
  icon: string;
  gradient: string;
}> = [
  {
    id: 'respiracion',
    title: 'Nube de Calma',
    description: 'Ejercicios guiados de respiración animada para regular el estrés y enfocar tu mente.',
    icon: 'fa-wind',
    gradient: 'from-[#5ee7df] to-[#b490ca]'
  },
  {
    id: 'diario',
    title: 'Diario Emocional',
    description: 'Registra tus emociones predominantes, sensaciones corporales e introspección diaria.',
    icon: 'fa-book-open',
    gradient: 'from-[#f5af19] to-[#f12711]'
  },
  {
    id: 'simulador',
    title: 'Simulador Social',
    description: 'Entrena tu asertividad resolviendo dilemas cotidianos de inteligencia emocional.',
    icon: 'fa-comments-dollar',
    gradient: 'from-[#ff512f] to-[#dd2476]'
  },
  {
    id: 'quiz',
    title: 'Quiz de EQ',
    description: 'Ponte a prueba con nuestra trivia de verdadero o falso estructurada por niveles.',
    icon: 'fa-trophy',
    gradient: 'from-[#11998e] to-[#38ef7d]'
  },
  {
    id: 'validacion',
    title: 'Sello de Validación',
    description: 'Recibe afirmaciones y validación psicológica específica para tus emociones de hoy.',
    icon: 'fa-heart',
    gradient: 'from-[#ea384d] to-[#d31027]'
  },
  {
    id: 'fortaleza',
    title: 'Estrellas de Fortaleza',
    description: 'Mural interactivo para registrar tus victorias personales y construir autoconfianza.',
    icon: 'fa-star',
    gradient: 'from-[#8360c3] to-[#2ebf91]'
  },
  {
    id: 'ia_guide',
    title: 'Guía con IA',
    description: 'Comparte tu situación actual y recibe micro-orientaciones guiadas por IA.',
    icon: 'fa-sparkles',
    gradient: 'from-[#4a00e0] to-[#8e2de2]'
  }
];

// Preloaded scenarios for Social Simulator
const socialScenarios = [
  {
    context: "Un colega de trabajo se atribuye públicamente la autoría de una idea o propuesta que diseñaste y compartiste tú originalmente en privado.",
    options: [
      { text: "Reclamarle enojado frente a todos de inmediato para ponerlo en evidencia.", isOptimal: false, consequence: "Esto escala el conflicto de manera agresiva y puede hacerte ver poco profesional y reactivo ante los superiores." },
      { text: "Hablar en privado después de la reunión, reconociendo el aporte de ambos pero aclarando asertivamente tu autoría del concepto base.", isOptimal: true, consequence: "Establece límites de manera madura, promueve el diálogo asertivo y preserva tu autoridad profesional sin generar guerras de oficina." },
      { text: "No decir nada para evitar tensiones, acumulando frustración hacia tu colega.", isOptimal: false, consequence: "Fomenta el resentimiento interno y permite que se sigan cruzando tus límites personales sin consecuencia alguna." }
    ],
    feedback: "La asertividad no busca atacar ni someter al otro, sino expresar con firmeza, verdad y tranquilidad tu perspectiva y tus límites."
  },
  {
    context: "Tu pareja llega a casa con un elevado nivel de estrés laboral y, al intentar saludarle, te contesta de manera bastante áspera y cortante.",
    options: [
      { text: "Responder de la misma manera agresiva, exigiéndole respeto inmediato.", isOptimal: false, consequence: "Genera una espiral destructiva de reproches y discusiones, empeorando el estado emocional de ambos." },
      { text: "Preguntarle con tono calmado si prefiere un momento a solas para bajar la marcha y darle su espacio temporal.", isOptimal: true, consequence: "Demuestra alta empatía y autorregulación, comprendiendo que el ataque es producto del desborde de tu pareja y no algo personal contra ti." },
      { text: "Ignorarle por completo durante el resto de la noche y aplicar la ley del hielo.", isOptimal: false, consequence: "Crea una desconexión fría y castiga de forma pasivo-agresiva, bloqueando la resolución empática del problema." }
    ],
    feedback: "Tomarse las reacciones del otro de forma personal suele ser una trampa cognitiva. Dar espacio y validar el cansancio ajeno previene roces innecesarios."
  },
  {
    context: "Tus padres o familiares insisten en planificar tu fin de semana completo sin consultarte previamente, asumiendo que tienes la obligación de ir.",
    options: [
      { text: "Ir al evento con mala gana y quejarte sutilmente durante toda la reunión.", isOptimal: false, consequence: "Daña el ambiente familiar y genera culpa pasiva, en lugar de solucionar el problema raíz." },
      { text: "Explicar con cariño pero con firmeza que ya tenías planes de descanso previstos, proponiendo vernos un día de la siguiente semana.", isOptimal: true, consequence: "Protege tu espacio personal y bienestar mental al tiempo que reafirmas el lazo familiar mediante una alternativa viable." },
      { text: "Gritarles airadamente que ya no eres un niño y que respeten tu privacidad.", isOptimal: false, consequence: "Convierte una falta de comunicación en un conflicto de autoridad y rebeldía, hiriendo a tus seres queridos." }
    ],
    feedback: "Poner límites asertivos a la familia con amor y firmeza enseña a los demás cómo tratarte sin necesidad de recurrir a la confrontación."
  },
  {
    context: "Tu jefe directo critica de manera ácida e inflexible tu última propuesta delante de todo tu equipo de trabajo en lugar de hacerlo en privado.",
    options: [
      { text: "Interrumpirle molesto para defender la calidad técnica de tu trabajo a la defensiva.", isOptimal: false, consequence: "Genera tensión jerárquica y puede ser interpretado como insubordinación ante el equipo de trabajo." },
      { text: "Escuchar con serenidad, tomar nota de los puntos válidos de crítica y pedirle al final una reunión individual breve para afinar detalles.", isOptimal: true, consequence: "Muestra alto nivel de resiliencia y profesionalismo bajo presión, abordando el trato inapropiado en un espacio seguro e individual." },
      { text: "Abandonar el salón de inmediato sintiendo que todo tu esfuerzo no vale nada.", isOptimal: false, consequence: "Reduce tu credibilidad profesional y da una imagen de fragilidad ante situaciones normales de revisión." }
    ],
    feedback: "La crítica destructiva habla del estilo del evaluador, no de tu valor. Separar el contenido técnico del ataque personal protege tu autoestima."
  },
  {
    context: "Notas que un amigo cercano al que estimas mucho te responde los mensajes de manera inusualmente fría, breve y distante en los últimos días.",
    options: [
      { text: "Asumir que se enfadó contigo y dejar de hablarle tú también para pagarle con la misma moneda.", isOptimal: false, consequence: "Crea un abismo comunicativo basado en suposiciones erróneas que desgasta la amistad." },
      { text: "Escribirle un mensaje empático preguntándole si está pasando por un momento complejo o si en algo puedes apoyarlo.", isOptimal: true, consequence: "Establece un puente seguro sin presionar, demostrando interés genuino y evitando el egocentrismo cognitivo." },
      { text: "Exigirle de inmediato una explicación por chat sobre por qué se porta mal contigo.", isOptimal: false, consequence: "Puede agobiarlo o ponerlo a la defensiva si su distancia se debe a problemas personales graves (salud, familia, finanzas)." }
    ],
    feedback: "Muchas veces el distanciamiento de los demás tiene que ver con sus propias batallas internas y no con nuestras acciones. Preguntar con cuidado siempre ayuda."
  },
  {
    context: "Un compañero de equipo con el que tienes buena relación se retrasa sistemáticamente en la entrega de su parte en un proyecto clave del campus.",
    options: [
      { text: "Hacer su parte del trabajo en silencio, asumiendo la sobrecarga tú solo.", isOptimal: false, consequence: "Fomenta la irresponsabilidad, te agota y oculta la falta de organización real del equipo." },
      { text: "Ofrecerte a revisar juntos si tiene alguna duda o bloqueo en su parte, aclarando con amabilidad que el grupo depende de su entrega.", isOptimal: true, consequence: "Combina apoyo colaborativo con responsabilidad compartida, resolviendo bloqueos de forma asertiva." },
      { text: "Reportarlo de inmediato con el docente/coordinador sin hablar antes con él.", isOptimal: false, consequence: "Quiebra la confianza mutua y crea hostilidad grupal sin indagar en las razones del retraso." }
    ],
    feedback: "El liderazgo emocional propone un balance entre la exigencia de metas compartidas y el soporte empático a las personas en dificultades."
  },
  {
    context: "Cometes un error administrativo importante por distracción y debes informarlo a un cliente que es conocido por ser sumamente exigente y reactivo.",
    options: [
      { text: "Esconder el error el mayor tiempo posible esperando que pase desapercibido.", isOptimal: false, consequence: "Daña gravemente tu credibilidad y la reputación de la empresa si el error sale a la luz de forma tardía." },
      { text: "Notificar el error con total transparencia, asumiendo la responsabilidad y planteando de inmediato dos alternativas de solución concretas.", isOptimal: true, consequence: "Genera confianza a través de la honestidad profesional y demuestra enfoque activo en soluciones en lugar de excusas." },
      { text: "Culpar al departamento de sistemas o a otro compañero por el malentendido.", isOptimal: false, consequence: "Revela falta de madurez emocional e irresponsabilidad, minando tu ética laboral ante el cliente." }
    ],
    feedback: "El error es humano, pero el profesionalismo radica en la velocidad y honestidad de la reparación. Afrontarlo de frente calma la ansiedad."
  },
  {
    context: "Un familiar te llama llorando desconsoladamente por una dolorosa e inesperada ruptura de pareja reciente.",
    options: [
      { text: "Empezar a darle múltiples consejos lógicos sobre qué hacer y por qué esa persona no le convenía.", isOptimal: false, consequence: "Invalida la necesidad primaria de catarsis y desahogo del afectado con un análisis racional prematuro." },
      { text: "Escuchar en silencio de forma activa, validar su profundo dolor e incomodidad, y preguntarle si solo necesita ser escuchado o buscar soluciones.", isOptimal: true, consequence: "Respeta el ritmo de asimilación del duelo afectivo y prioriza la contención emocional antes que la resolución práctica." },
      { text: "Decirle que no llore más, que la vida sigue y que pronto encontrará a alguien mucho mejor.", isOptimal: false, consequence: "Minimiza y bloquea la tristeza del otro, haciendo sentir que su dolor es inapropiado o exagerado." }
    ],
    feedback: "La contención emocional oportuna consiste en regalar oídos atentos y un corazón libre de juicios o consejos no solicitados."
  },
  {
    context: "Un compañero te pide ayuda urgente para sus tareas secundarias cuando tú estás al borde del colapso con tus entregas prioritarias del día.",
    options: [
      { text: "Aceptar a regañadientes y con mala cara, sumando un estrés que compromete tu propio trabajo.", isOptimal: false, consequence: "Falta de límites personales que te lleva al desgaste físico y mental y a entregar un mal resultado general." },
      { text: "Explicar amablemente que hoy estás al límite de tu capacidad y orientarlo velozmente sobre cómo resolver sus dudas clave en 5 minutos.", isOptimal: true, consequence: "Practica un sano autocuidado y asertividad sin dar la espalda al compañero, gestionando los recursos de forma equilibrada." },
      { text: "Responderle de forma cortante que cada quien tiene sus problemas y que no te moleste.", isOptimal: false, consequence: "Corta la conexión de apoyo de manera innecesariamente ruda y reduce la simpatía del equipo hacia ti." }
    ],
    feedback: "Decir 'no' a las demandas ajenas muchas veces es un acto indispensable de honestidad contigo mismo y con tu propia salud mental."
  },
  {
    context: "Un compañero de tu equipo recibe las felicitaciones y el premio por una idea creativa grupal de la cual tú fuiste parte muy importante.",
    options: [
      { text: "Ignorarlo enfadado y no felicitarlo por su logro individual.", isOptimal: false, consequence: "Muestra resentimiento y egoísmo, opacando tu propia madurez emocional ante el equipo." },
      { text: "Felicitarlo cordialmente en público y sugerirle en privado proponer una pequeña mención conjunta sobre el esfuerzo grupal en la próxima reunión.", isOptimal: true, consequence: "Combina el desapego saludable al ego y la generosidad al celebrar al otro con una gestión profesional y asertiva de tus méritos corporativos." },
      { text: "Hacer comentarios despectivos a otros colegas sobre cómo se robó las ideas del equipo.", isOptimal: false, consequence: "Crea chismes de pasillo y deteriora el clima de confianza colectiva, afectando negativamente tu reputación." }
    ],
    feedback: "El reconocimiento ajeno es agradable, pero la seguridad y el valor interior nacen de la tranquilidad de conocer tus propias capacidades."
  }
];

// Preloaded EQ Quiz statements by level
const quizQuestions = {
  facil: [
    { text: "La empatía requiere que estemos de acuerdo con lo que siente la otra persona en su totalidad.", isMyth: true, explanation: "Falso. La empatía es comprender y validar la emoción ajena, no necesariamente compartir sus juicios o estar de acuerdo con sus opiniones." },
    { text: "Identificar en qué parte del cuerpo sentimos una emoción (ej. opresión en pecho) ayuda a regular su intensidad.", isMyth: false, explanation: "Verdadero. La toma de conciencia corporal (interocepeción) es el primer paso indispensable para procesar y disipar la carga somática." },
    { text: "Reprimir o ignorar el enojo de forma continua hace que la emoción desaparezca con rapidez.", isMyth: true, explanation: "Falso. Evadir el enojo solo lo encapsula o lo traslada al plano subconsciente, manifestándose luego como estrés psicosomático o estallidos reactivos." },
    { text: "Las emociones secundarias (como los celos o la culpa) surgen después de procesar pensamientos sobre una emoción primaria.", isMyth: false, explanation: "Verdadero. A diferencia de las primarias (instintivas), las emociones secundarias se construyen a partir del filtro mental y cognitivo." },
    { text: "La tristeza constante carece de valor evolutivo y siempre es una señal de patología mental.", isMyth: true, explanation: "Falso. La tristeza tiene una gran función adaptativa: promueve la introspección, invita al descanso y activa redes de apoyo social." }
  ],
  medio: [
    { text: "El secuestro amigdalino ocurre cuando las respuestas instintivas anulan temporalmente el procesamiento lógico racional de la corteza prefrontal.", isMyth: false, explanation: "Verdadero. Es un mecanismo de supervivencia rápido donde el cerebro emocional toma el control absoluto ante una amenaza percibida." },
    { text: "La granularidad emocional es la capacidad para distinguir y nombrar matices emocionales sumamente específicos.", isMyth: false, explanation: "Verdadero. Tener un vocabulario emocional rico permite gestionar con mayor precisión la regulación nerviosa del cuerpo." },
    { text: "La empatía cognitiva es la capacidad de sentir en nuestro propio cuerpo el dolor físico que experimenta el otro.", isMyth: true, explanation: "Falso. Sentir el dolor físico es empatía somática o reflejo. La empatía cognitiva es comprender mentalmente la perspectiva del otro." },
    { text: "El optimismo inteligente niega las dificultades del entorno para concentrarse solo en afirmaciones positivas de optimismo ciego.", isMyth: true, explanation: "Falso. El optimismo inteligente reconoce la crudeza de la realidad pero elige conscientemente buscar soluciones activas y oportunidades." },
    { text: "Expresar un límite claro de manera asertiva suele deteriorar y dañar las relaciones interpersonales sanas a largo plazo.", isMyth: true, explanation: "Falso. Las relaciones sanas se fortalecen con los límites claros, ya que estos previenen el resentimiento y definen reglas claras de respeto." }
  ],
  dificil: [
    { text: "La reevaluación cognitiva consiste en reinterpretar el significado de un evento adverso para cambiar de raíz su impacto emocional.", isMyth: false, explanation: "Verdadero. Es una de las estrategias de regulación emocional más efectivas y saludables avaladas por la ciencia cognitiva." },
    { text: "La alexitimia es la incapacidad de origen neurológico o psicológico para identificar, nombrar y describir las propias emociones.", isMyth: false, explanation: "Verdadero. Quienes la padecen experimentan fuertes sensaciones físicas pero no logran verbalizarlas ni estructurarlas en sentimientos." },
    { text: "La autocompasión sana propone el desarrollo de tres pilares: auto-bondad, sentido de humanidad compartida y atención plena (mindfulness).", isMyth: false, explanation: "Verdadero. Investigaciones demuestran que tratarse con compasión ante el fallo activa el sistema parasimpático y reduce el cortisol." },
    { text: "El contagio emocional entre las personas en un espacio cerrado ocurre únicamente a través de la comunicación verbal explícita.", isMyth: true, explanation: "Falso. Se propaga de forma automática por la modulación de las neuronas espejo ante microexpresiones corporales y tono de voz." },
    { text: "La supresión expresiva (aparentar que nada pasa conteniendo la expresión emocional) reduce drásticamente el estrés fisiológico de la persona.", isMyth: true, explanation: "Falso. Suprimir la expresión incrementa la presión sanguínea y mantiene elevados los niveles de cortisol a nivel interno." }
  ]
};

const validationAffirmations = {
  culpa: "La culpa puede ser una brújula ética que indica que valoras el impacto de tus actos. Sin embargo, azotarte no repara el pasado. Acepta tu humanidad, aprende del error y céntrate en el presente: ¿qué micro-acción de reparación puedes realizar hoy? Eres merecedor de perdón.",
  frustracion: "La frustración nace cuando tienes un deseo genuino de avance y la realidad impone un freno. Valida tu enfado o desánimo: es el reflejo de que te importa el resultado. Respira, suelta lo que no está bajo tu control y céntrate con total paciencia en tu próximo paso posible.",
  tristeza: "La tristeza no es debilidad; es el mecanismo de tu organismo para procesar las pérdidas, asimilar el cambio y reorganizar tu energía. No fuerces la alegría hoy. Date el permiso de sentir este invierno emocional, descansa y recuerda que la vulnerabilidad sana.",
  agobio: "El agobio es tu mente y cuerpo gritando que el entorno ha superado tu capacidad actual de procesamiento. Está bien pausar y decir 'basta'. Deja a un lado la lista de pendientes gigantesca, respira profundo y ocúpate de una sola tarea pequeña a la vez.",
  inseguridad: "La inseguridad es tu mente primitiva intentando protegerte del riesgo del rechazo o del fracaso. Dudar de ti no significa que seas incapaz; significa que estás saliendo de tu zona segura para crecer. Mide tu valor por tu coraje de intentar, no por el resultado.",
  soledad: "La soledad es una llamada de atención de tu ser interno que anhela una conexión auténtica. A veces se siente incluso en la multitud. Sé infinitamente amable contigo hoy, conecta contigo a través de un autocuidado lento o contacta de forma sencilla a un viejo conocido."
};

const KitReflexivoPage: React.FC<KitReflexivoPageProps> = ({ progress, onKitAction, onReflectionCompleted }) => {
  const [activeTool, setActiveTool] = useState<KitToolId | null>(null);

  // 1. Nube de Calma State
  const [breathingPattern, setBreathingPattern] = useState<'4-7-8' | 'box' | 'equal'>('equal');
  const [breathingRunning, setBreathingRunning] = useState(false);
  const [breathingPhase, setBreathingPhase] = useState<'Prepara' | 'Inhala' | 'Retén' | 'Exhala'>('Prepara');
  const [breathingSeconds, setBreathingSeconds] = useState(3);
  const [breathingRounds, setBreathingRounds] = useState(0);
  const [breathingCompleted, setBreathingCompleted] = useState(false);

  // 2. Diario State
  const [diaryEmotion, setDiaryEmotion] = useState('');
  const [diaryCause, setDiaryCause] = useState('');
  const [diarySomatic, setDiarySomatic] = useState<string[]>([]);
  const [diaryThoughts, setDiaryThoughts] = useState('');
  const [diarySuccess, setDiarySuccess] = useState(false);

  // 3. Simulador State
  const [simIndex, setSimIndex] = useState(0);
  const [simSelectedOption, setSimSelectedOption] = useState<number | null>(null);
  const [simChecked, setSimChecked] = useState(false);
  const [simCompletedScenarios, setSimCompletedScenarios] = useState(0);

  // 4. Quiz State
  const [quizLevel, setQuizLevel] = useState<'facil' | 'medio' | 'dificil'>('facil');
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizSelected, setQuizSelected] = useState<boolean | null>(null);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizLevelSuccess, setQuizLevelSuccess] = useState(false);

  // 5. Validación State
  const [validationEmotion, setValidationEmotion] = useState<keyof typeof validationAffirmations | ''>('');
  const [validationSubmitted, setValidationSubmitted] = useState(false);

  // 6. Fortaleza State
  const [fortalezaSelected, setFortalezaSelected] = useState('');
  const [fortalezaCustom, setFortalezaCustom] = useState('');
  const [fortalezaText, setFortalezaText] = useState('');
  const [fortalezaSuccess, setFortalezaSuccess] = useState(false);

  // 7. IA Guide State (Original)
  const [responseText, setResponseText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userQuestion, setUserQuestion] = useState('');

  // 1. Breathing Timer logic
  useEffect(() => {
    if (!breathingRunning) return;
    
    const interval = setInterval(() => {
      setBreathingSeconds(prev => {
        if (prev <= 1) {
          // Switch phase
          let nextPhase: typeof breathingPhase = 'Inhala';
          let nextSecs = 4;

          if (breathingPhase === 'Prepara') {
            nextPhase = 'Inhala';
            nextSecs = breathingPattern === 'equal' ? 5 : 4;
          } else if (breathingPhase === 'Inhala') {
            if (breathingPattern === '4-7-8') {
              nextPhase = 'Retén';
              nextSecs = 7;
            } else if (breathingPattern === 'box') {
              nextPhase = 'Retén';
              nextSecs = 4;
            } else {
              nextPhase = 'Exhala';
              nextSecs = 5;
            }
          } else if (breathingPhase === 'Retén') {
            nextPhase = 'Exhala';
            nextSecs = breathingPattern === '4-7-8' ? 8 : 4;
          } else if (breathingPhase === 'Exhala') {
            if (breathingPattern === 'box') {
              nextPhase = 'Retén'; // Hold empty in box breathing
              nextSecs = 4;
            } else {
              nextPhase = 'Inhala';
              nextSecs = breathingPattern === 'equal' ? 5 : 4;
              setBreathingRounds(r => r + 1);
            }
          }
          setBreathingPhase(nextPhase);
          return nextSecs;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [breathingRunning, breathingPhase, breathingPattern]);

  // Handle breathing completion
  useEffect(() => {
    if (breathingRounds >= 4 && !breathingCompleted) {
      setBreathingRunning(false);
      setBreathingCompleted(true);
      onKitAction('respiracion', 15);
      if (onReflectionCompleted) onReflectionCompleted();
    }
  }, [breathingRounds, breathingCompleted, onKitAction, onReflectionCompleted]);

  // Breathing pattern change handler
  const handleBreathingStart = () => {
    setBreathingRounds(0);
    setBreathingPhase('Prepara');
    setBreathingSeconds(3);
    setBreathingCompleted(false);
    setBreathingRunning(true);
  };

  const handleBreathingStop = () => {
    setBreathingRunning(false);
    setBreathingPhase('Prepara');
    setBreathingSeconds(3);
  };

  // 2. Diario handler
  const handleDiarySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!diaryEmotion) return;
    
    onKitAction('diario', 15, {
      emotion: diaryEmotion,
      cause: diaryCause,
      somaticSensation: diarySomatic.join(', '),
      thoughts: diaryThoughts
    });
    if (onReflectionCompleted) onReflectionCompleted();
    setDiarySuccess(true);
  };

  const toggleSomatic = (tag: string) => {
    setDiarySomatic(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  // 3. Simulador Handler
  const handleSimSubmit = () => {
    if (simSelectedOption === null) return;
    setSimChecked(true);
    const isOptimal = socialScenarios[simIndex].options[simSelectedOption].isOptimal;
    if (isOptimal) {
      setSimCompletedScenarios(prev => prev + 1);
    }
    // Record action and award points
    onKitAction('simulador', 15);
    if (onReflectionCompleted) onReflectionCompleted();
  };

  const handleSimNext = () => {
    setSimSelectedOption(null);
    setSimChecked(false);
    // Grab next index sequentially or wrap
    setSimIndex(prev => (prev + 1) % socialScenarios.length);
  };

  // 4. Quiz Handler
  const handleQuizAnswer = (userChoice: boolean) => {
    setQuizSelected(userChoice);
    setQuizAnswered(true);
    const question = quizQuestions[quizLevel][quizIndex];
    const isCorrect = userChoice === !question.isMyth;
    if (isCorrect) {
      setQuizScore(prev => prev + 1);
    }
  };

  const handleQuizNext = () => {
    setQuizSelected(null);
    setQuizAnswered(false);
    const currentQuestions = quizQuestions[quizLevel];
    
    if (quizIndex < currentQuestions.length - 1) {
      setQuizIndex(prev => prev + 1);
    } else {
      // Completed level
      setQuizLevelSuccess(true);
      onKitAction('quiz', 20);
      if (onReflectionCompleted) onReflectionCompleted();
    }
  };

  const promoteQuizLevel = () => {
    setQuizLevelSuccess(false);
    setQuizIndex(0);
    setQuizScore(0);
    if (quizLevel === 'facil') setQuizLevel('medio');
    else if (quizLevel === 'medio') setQuizLevel('dificil');
    else setQuizLevel('facil'); // restart
  };

  // 5. Validación Handler
  const handleValidationSubmit = () => {
    if (!validationEmotion) return;
    setValidationSubmitted(true);
    onKitAction('validacion', 10);
    if (onReflectionCompleted) onReflectionCompleted();
  };

  // 6. Fortaleza Handler
  const handleFortalezaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalStrength = fortalezaSelected === 'otra' ? fortalezaCustom : fortalezaSelected;
    if (!finalStrength || !fortalezaText) return;

    onKitAction('fortaleza', 10, {
      strength: finalStrength,
      description: fortalezaText
    });
    if (onReflectionCompleted) onReflectionCompleted();
    setFortalezaSuccess(true);
  };

  // 7. IA Guide Handlers (Original Code)
  const runPrompt = useCallback(async (prompt: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('/api/kit-reflexivo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt })
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload.error || 'No pude obtener una respuesta. Intenta nuevamente.');
      }

      const payload = await response.json();
      setResponseText(payload.text || '');
      onKitAction('reflection', 15);
      if (onReflectionCompleted) {
        onReflectionCompleted();
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'No pude obtener una respuesta. Intenta nuevamente.'
      );
    } finally {
      setLoading(false);
    }
  }, [onKitAction, onReflectionCompleted]);

  const handleIASubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userQuestion.trim()) {
      setError('Comparte tu situación para que la IA pueda orientarte.');
      return;
    }
    const prompt = `Eres mentor de aprendizaje emocional en AnImiKdemi. El usuario comparte: "${userQuestion.trim()}". Responde en español con 3 partes: 1) reflexión empática en 2 frases, 2) orientación concreta con un paso inicial (1 frase), 3) recomienda una categoría de formación AnImiKdemi (Autoconocimiento, Gestión Emocional o Habilidades Sociales) explicando por qué en 1 frase. Máximo 130 palabras.`;
    setResponseText('');
    setError(null);
    runPrompt(prompt);
  };

  // Cleanup helper
  const handleBackToGrid = () => {
    setActiveTool(null);
    // Reset states
    handleBreathingStop();
    setBreathingCompleted(false);
    setDiaryEmotion('');
    setDiaryCause('');
    setDiarySomatic([]);
    setDiaryThoughts('');
    setDiarySuccess(false);
    setSimSelectedOption(null);
    setSimChecked(false);
    setQuizIndex(0);
    setQuizScore(0);
    setQuizSelected(null);
    setQuizAnswered(false);
    setQuizLevelSuccess(false);
    setValidationEmotion('');
    setValidationSubmitted(false);
    setFortalezaSelected('');
    setFortalezaCustom('');
    setFortalezaText('');
    setFortalezaSuccess(false);
    setResponseText('');
    setUserQuestion('');
    setError(null);
  };

  // Memoized stars coordinate list for fortaleza constellation
  const starsPositions = useMemo(() => {
    const list = progress.strengthStars || [];
    return list.map((star, idx) => {
      // Seeded random coordinates based on index to keep stars stationary
      const x = 50 + ((idx * 83) % 360);
      const y = 40 + ((idx * 57) % 180);
      const scale = 0.8 + ((idx * 11) % 5) * 0.15;
      return { x, y, scale, ...star };
    });
  }, [progress.strengthStars]);

  // Main UI Grid rendering
  if (!activeTool) {
    return (
      <section className="space-y-6 animate-fade-in">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#6e4380]">Kit Reflexivo</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#101021] tracking-tight">
            Laboratorio de Bienestar Emocional
          </h1>
          <p className="text-base text-[#101021]/70 max-w-3xl leading-relaxed">
            Explora herramientas interactivas instantáneas diseñadas para regular tu sistema nervioso, canalizar tus estados internos, resolver dilemas sociales y consolidar tu autoconfianza en el día a día.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {kitTools.map(tool => (
            <button
              key={tool.id}
              onClick={() => setActiveTool(tool.id)}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${tool.gradient} p-[1px] text-left shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6e4380] flex flex-col h-full`}
            >
              <div className="h-full w-full rounded-2xl bg-white p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center text-white shadow-sm`}>
                      <i className={`fas ${tool.icon} text-lg`}></i>
                    </div>
                    <i className="fas fa-arrow-right text-[#6e4380]/60 group-hover:text-[#6e4380] group-hover:translate-x-1.5 transition-all"></i>
                  </div>
                  <h2 className="mt-5 text-lg font-bold text-[#101021] tracking-tight group-hover:text-[#6e4380] transition-colors">{tool.title}</h2>
                  <p className="mt-2 text-xs sm:text-sm text-[#101021]/65 leading-relaxed">{tool.description}</p>
                </div>
                {tool.id !== 'ia_guide' && (
                  <span className="mt-4 text-[10px] font-bold text-[#6e4380] bg-[#6e4380]/5 py-1 px-2.5 rounded-full inline-block self-start uppercase tracking-wider">
                    Herramienta
                  </span>
                )}
                {tool.id === 'ia_guide' && (
                  <span className="mt-4 text-[10px] font-bold text-[#4a00e0] bg-[#4a00e0]/5 py-1 px-2.5 rounded-full inline-block self-start uppercase tracking-wider">
                    Asistente IA
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </section>
    );
  }

  // Active Tool Detail Frame
  return (
    <section className="space-y-6 animate-fade-in">
      <button
        onClick={handleBackToGrid}
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#6e4380] hover:text-[#4c1760] transition-colors"
      >
        <i className="fas fa-arrow-left"></i>
        Volver al Laboratorio EQ
      </button>

      <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 sm:p-8 space-y-6">
        
        {/* Nube de Calma (Breathing) */}
        {activeTool === 'respiracion' && (
          <div className="space-y-6 max-w-xl mx-auto text-center">
            <header className="space-y-2">
              <span className="text-xs uppercase font-extrabold text-[#5ee7df] bg-[#5ee7df]/15 py-1 px-3 rounded-full">Nube de Calma</span>
              <h2 className="text-2xl font-bold text-[#101021]">Ejercicios de Respiración Consciente</h2>
              <p className="text-sm text-[#101021]/70">Pausa tus pensamientos acelerados y sintoniza tu frecuencia cardíaca.</p>
            </header>

            {!breathingRunning && !breathingCompleted && (
              <div className="space-y-4 text-left p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <label className="block text-sm font-bold text-slate-800">Selecciona el tipo de ejercicio:</label>
                <div className="grid gap-2.5">
                  <button 
                    onClick={() => setBreathingPattern('equal')}
                    className={`p-3 rounded-xl border text-left text-xs sm:text-sm font-semibold transition ${breathingPattern === 'equal' ? 'bg-[#5ee7df]/10 border-[#5ee7df] text-slate-900' : 'bg-white hover:bg-slate-100 text-slate-700'}`}
                  >
                    💆 Coherencia Equitativa (5s Inhala / 5s Exhala)
                    <span className="block text-[10px] text-slate-400 font-medium mt-0.5">Ideal para estabilizar el ritmo cardíaco y calmar la ansiedad general.</span>
                  </button>
                  <button 
                    onClick={() => setBreathingPattern('box')}
                    className={`p-3 rounded-xl border text-left text-xs sm:text-sm font-semibold transition ${breathingPattern === 'box' ? 'bg-[#5ee7df]/10 border-[#5ee7df] text-slate-900' : 'bg-white hover:bg-slate-100 text-slate-700'}`}
                  >
                    📦 Respiración en Caja (4s Inhala / 4s Retén / 4s Exhala / 4s Retén)
                    <span className="block text-[10px] text-slate-400 font-medium mt-0.5">Utilizada por profesionales de alto estrés para recuperar enfoque táctico.</span>
                  </button>
                  <button 
                    onClick={() => setBreathingPattern('4-7-8')}
                    className={`p-3 rounded-xl border text-left text-xs sm:text-sm font-semibold transition ${breathingPattern === '4-7-8' ? 'bg-[#5ee7df]/10 border-[#5ee7df] text-slate-900' : 'bg-white hover:bg-slate-100 text-slate-700'}`}
                  >
                    😴 Técnica 4-7-8 (4s Inhala / 7s Retén / 8s Exhala)
                    <span className="block text-[10px] text-slate-400 font-medium mt-0.5">Técnica científica diseñada para apagar el sistema simpático y propiciar el sueño.</span>
                  </button>
                </div>
                <button
                  onClick={handleBreathingStart}
                  className="w-full mt-2 bg-[#24668e] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#1a4a69] transition shadow-md"
                >
                  Comenzar Sesión (4 Ciclos)
                </button>
              </div>
            )}

            {breathingRunning && (
              <div className="space-y-8 py-6">
                <div className="flex justify-center items-center h-56 relative">
                  {/* Outer Breathing circle animator */}
                  <div 
                    className="absolute bg-[#5ee7df]/20 rounded-full transition-all duration-1000 ease-in-out"
                    style={{
                      width: breathingPhase === 'Inhala' ? '200px' : breathingPhase === 'Retén' ? '200px' : '90px',
                      height: breathingPhase === 'Inhala' ? '200px' : breathingPhase === 'Retén' ? '200px' : '90px',
                    }}
                  />
                  {/* Central solid circle */}
                  <div className="w-24 h-24 rounded-full bg-[#5ee7df] text-white flex flex-col justify-center items-center shadow-lg z-10">
                    <span className="text-2xl font-black">{breathingSeconds}</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider">{breathingPhase}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-lg font-extrabold text-[#24668e] animate-pulse">
                    {breathingPhase === 'Prepara' && 'Prepárate para inhalar...'}
                    {breathingPhase === 'Inhala' && 'Toma aire lentamente 🌬️'}
                    {breathingPhase === 'Retén' && 'Retén el aire y quédate quieto 🧘'}
                    {breathingPhase === 'Exhala' && 'Suelta el aire con calma...'}
                  </p>
                  <p className="text-xs text-[#101021]/60 font-semibold">
                    Ciclo actual: {breathingRounds + 1} / 4
                  </p>
                </div>

                <button 
                  onClick={handleBreathingStop}
                  className="bg-[#dd566f] text-white font-bold py-2 px-5 rounded-full text-xs hover:bg-[#c04359]"
                >
                  Detener Sesión
                </button>
              </div>
            )}

            {breathingCompleted && (
              <div className="space-y-4 py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl mx-auto">
                  <i className="fas fa-check"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-800">¡Sesión de Calma Completada!</h3>
                <p className="text-sm text-slate-500">Has realizado 4 ciclos de respiración consciente. Tu sistema nervioso te lo agradece. +15 XP obtenidos 🌬️</p>
                <button
                  onClick={handleBackToGrid}
                  className="bg-[#24668e] text-white font-bold py-2.5 px-6 rounded-xl hover:bg-[#1a4a69]"
                >
                  Volver al Menú
                </button>
              </div>
            )}
          </div>
        )}

        {/* Diario Emocional */}
        {activeTool === 'diario' && (
          <div className="space-y-6 max-w-2xl mx-auto">
            <header className="text-center space-y-2">
              <span className="text-xs uppercase font-extrabold text-[#f5af19] bg-[#f5af19]/15 py-1 px-3 rounded-full">Diario Emocional</span>
              <h2 className="text-2xl font-bold text-[#101021]">Tu Bitácora de Inteligencia Emocional</h2>
              <p className="text-sm text-[#101021]/70">Nombra tus emociones para disolver su peso e identificar tus desencadenantes.</p>
            </header>

            {!diarySuccess ? (
              <form onSubmit={handleDiarySubmit} className="space-y-5">
                
                {/* Emoji Select */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-800">1. ¿Qué emoción predomina en ti hoy?</label>
                  <div className="grid grid-cols-4 sm:grid-cols-7 gap-2.5">
                    {[
                      { e: '🤩', name: 'Alegría' },
                      { e: '🧘', name: 'Calma' },
                      { e: '😔', name: 'Tristeza' },
                      { e: '🤯', name: 'Agobio' },
                      { e: '😡', name: 'Ira' },
                      { e: '😰', name: 'Miedo' },
                      { e: '🥺', name: 'Nostalgia' }
                    ].map(item => (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => setDiaryEmotion(item.name)}
                        className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1 transition ${diaryEmotion === item.name ? 'bg-[#f5af19]/10 border-[#f5af19] scale-105' : 'bg-white hover:bg-slate-55 border-slate-200'}`}
                      >
                        <span className="text-xl sm:text-2xl">{item.e}</span>
                        <span className="text-[10px] font-bold text-slate-700">{item.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Cause */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-bold text-slate-800" htmlFor="diary-cause">2. ¿Qué causó o influyó en esta emoción?</label>
                  <textarea
                    id="diary-cause"
                    rows={2}
                    value={diaryCause}
                    onChange={e => setDiaryCause(e.target.value)}
                    placeholder="Ej: Recibí una crítica constructiva inesperada de mi compañero de equipo..."
                    className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-[#f5af19] focus:ring-1 focus:ring-[#f5af19]"
                    required
                  />
                </div>

                {/* Somatic Sensations */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-800">3. ¿Qué sensaciones físicas percibes en tu cuerpo?</label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Presión en el pecho', 'Nudo en la garganta', 'Músculos relajados',
                      'Hombros tensos', 'Mariposas en el estómago', 'Respiración tranquila',
                      'Respiración acelerada', 'Calor en el rostro'
                    ].map(tag => {
                      const active = diarySomatic.includes(tag);
                      return (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => toggleSomatic(tag)}
                          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${active ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                        >
                          {tag}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Thoughts */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-bold text-slate-800" htmlFor="diary-thoughts">4. ¿Qué pensamientos o interpretaciones te provocó?</label>
                  <textarea
                    id="diary-thoughts"
                    rows={2}
                    value={diaryThoughts}
                    onChange={e => setDiaryThoughts(e.target.value)}
                    placeholder="Ej: Pensé que no apreciaban mi esfuerzo, aunque luego entendí que querían mejorar el resultado..."
                    className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-[#f5af19] focus:ring-1 focus:ring-[#f5af19]"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={!diaryEmotion || !diaryCause || !diaryThoughts}
                  className="w-full bg-[#f5af19] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#da970f] transition shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Registrar en el Diario
                </button>
              </form>
            ) : (
              <div className="space-y-6 text-center py-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl mx-auto">
                  <i className="fas fa-check"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-800">Registro Exitoso</h3>
                <p className="text-sm text-slate-500">Tu introspección ha quedado registrada en tu diario personal. +15 XP obtenidos 📝</p>
                
                {/* Show current logs */}
                <div className="text-left p-4 bg-slate-50 rounded-xl border border-slate-100 max-h-48 overflow-y-auto space-y-3">
                  <h4 className="text-xs uppercase font-extrabold text-slate-400">Tus entradas anteriores:</h4>
                  {(progress.emotionLogs || []).slice().reverse().map((log, idx) => (
                    <div key={idx} className="bg-white p-3 rounded-lg border border-slate-150 text-xs">
                      <div className="flex justify-between font-bold text-slate-700">
                        <span>Emoción: {log.emotion}</span>
                        <span className="text-slate-400">{new Date(log.date).toLocaleDateString()}</span>
                      </div>
                      <p className="text-slate-600 mt-1"><span className="font-semibold text-slate-800">Causa:</span> {log.cause}</p>
                      {log.somaticSensation && <p className="text-slate-500 mt-0.5"><span className="font-semibold">Sensación:</span> {log.somaticSensation}</p>}
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleBackToGrid}
                  className="bg-[#24668e] text-white font-bold py-2.5 px-6 rounded-xl hover:bg-[#1a4a69]"
                >
                  Volver al Menú
                </button>
              </div>
            )}
          </div>
        )}

        {/* Simulador Social */}
        {activeTool === 'simulador' && (
          <div className="space-y-6 max-w-2xl mx-auto">
            <header className="text-center space-y-2">
              <span className="text-xs uppercase font-extrabold text-[#ff512f] bg-[#ff512f]/15 py-1 px-3 rounded-full">Simulador de Situaciones Sociales</span>
              <h2 className="text-2xl font-bold text-[#101021]">Entrenamiento de Asertividad y Empatía</h2>
              <p className="text-sm text-[#101021]/70">Elige la opción que mejor responda al escenario planteado y aprende su impacto psicológico.</p>
            </header>

            <div className="space-y-5">
              
              {/* Scenario Context */}
              <div className="p-5 bg-gradient-to-r from-slate-50 to-[#ff512f]/5 rounded-2xl border border-[#ff512f]/10">
                <span className="text-[10px] uppercase font-bold text-[#ff512f] block mb-2">Escenario {simIndex + 1}:</span>
                <p className="text-slate-800 text-sm font-bold leading-relaxed">
                  {socialScenarios[simIndex].context}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                {socialScenarios[simIndex].options.map((opt, oIdx) => {
                  let styleClass = "border-slate-200 bg-white hover:bg-slate-55 text-slate-700";
                  if (simChecked) {
                    if (opt.isOptimal) {
                      styleClass = "bg-emerald-50 border-emerald-500 text-emerald-900";
                    } else if (simSelectedOption === oIdx) {
                      styleClass = "bg-rose-50 border-rose-400 text-rose-900";
                    } else {
                      styleClass = "opacity-50 border-slate-100 bg-slate-50 text-slate-400";
                    }
                  } else if (simSelectedOption === oIdx) {
                    styleClass = "bg-slate-800 text-white border-slate-800 scale-[1.01]";
                  }

                  return (
                    <button
                      key={oIdx}
                      disabled={simChecked}
                      onClick={() => setSimSelectedOption(oIdx)}
                      className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm font-semibold transition flex items-start gap-3 ${styleClass}`}
                    >
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-xs mt-0.5 ${simSelectedOption === oIdx ? 'bg-white text-slate-800' : 'bg-slate-100 text-slate-500'}`}>
                        {String.fromCharCode(65 + oIdx)}
                      </span>
                      <span className="flex-1 leading-normal">{opt.text}</span>
                    </button>
                  );
                })}
              </div>

              {/* Feedback */}
              {simChecked && simSelectedOption !== null && (
                <div className="p-4 rounded-xl space-y-2 bg-[#ff512f]/5 border border-[#ff512f]/10 animate-fade-in">
                  <div className="flex items-center gap-2">
                    {socialScenarios[simIndex].options[simSelectedOption].isOptimal ? (
                      <span className="text-emerald-700 font-extrabold text-sm flex items-center gap-1">
                        <i className="fas fa-check-circle"></i> ¡Excelente Elección!
                      </span>
                    ) : (
                      <span className="text-rose-700 font-extrabold text-sm flex items-center gap-1">
                        <i className="fas fa-exclamation-triangle"></i> Elección Subóptima
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-700 font-medium">
                    <span className="font-bold text-slate-900 block mb-1">Consecuencia:</span>
                    {socialScenarios[simIndex].options[simSelectedOption].consequence}
                  </p>
                  <p className="text-xs text-[#24668e] font-semibold bg-[#24668e]/5 p-2.5 rounded-lg leading-relaxed">
                    <span className="font-bold text-[#24668e] block">Enfoque EQ:</span>
                    {socialScenarios[simIndex].feedback}
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4">
                {!simChecked ? (
                  <button
                    onClick={handleSimSubmit}
                    disabled={simSelectedOption === null}
                    className="w-full bg-[#ff512f] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#dd2476] transition shadow-md disabled:opacity-50"
                  >
                    Evaluar Elección
                  </button>
                ) : (
                  <button
                    onClick={handleSimNext}
                    className="w-full bg-[#24668e] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#1a4a69] transition shadow-md"
                  >
                    Siguiente Situación <i className="fas fa-chevron-right ml-1"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Quiz de Inteligencia Emocional */}
        {activeTool === 'quiz' && (
          <div className="space-y-6 max-w-xl mx-auto">
            <header className="text-center space-y-2">
              <span className="text-xs uppercase font-extrabold text-[#11998e] bg-[#11998e]/15 py-1 px-3 rounded-full">Quiz de EQ</span>
              <h2 className="text-2xl font-bold text-[#101021]">Trivia de Verdadero o Falso</h2>
              <p className="text-sm text-[#101021]/70">
                Supera los niveles respondiendo si los enunciados de neurociencia emocional son Verdadero o Falso.
              </p>
            </header>

            {!quizLevelSuccess ? (
              <div className="space-y-6">
                
                {/* Level Tag and progress */}
                <div className="flex justify-between items-center text-xs font-bold text-slate-500">
                  <span className="uppercase bg-slate-100 py-1 px-3 rounded-full">Nivel: {quizLevel.toUpperCase()}</span>
                  <span>Pregunta: {quizIndex + 1} / 5</span>
                </div>

                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#11998e] h-full rounded-full transition-all duration-300" style={{ width: `${(quizIndex / 5) * 100}%` }}></div>
                </div>

                {/* Statement Card */}
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-center min-h-[160px] text-center shadow-sm">
                  <p className="text-slate-800 text-sm sm:text-base font-bold leading-relaxed">
                    "{quizQuestions[quizLevel][quizIndex].text}"
                  </p>
                </div>

                {/* True/False buttons */}
                {!quizAnswered ? (
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => handleQuizAnswer(true)}
                      className="bg-emerald-500 text-white font-bold py-4 rounded-xl hover:bg-emerald-600 transition shadow flex items-center justify-center gap-1.5"
                    >
                      <i className="fas fa-check"></i> Verdadero
                    </button>
                    <button
                      onClick={() => handleQuizAnswer(false)}
                      className="bg-rose-500 text-white font-bold py-4 rounded-xl hover:bg-rose-600 transition shadow flex items-center justify-center gap-1.5"
                    >
                      <i className="fas fa-times"></i> Falso
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4 animate-fade-in">
                    
                    {/* feedback status */}
                    <div className="p-4 rounded-xl space-y-2 border" style={{
                      backgroundColor: quizSelected === !quizQuestions[quizLevel][quizIndex].isMyth ? '#ecfdf5' : '#fef2f2',
                      borderColor: quizSelected === !quizQuestions[quizLevel][quizIndex].isMyth ? '#10b981' : '#f43f5e',
                    }}>
                      <p className="font-extrabold text-sm flex items-center gap-1" style={{
                        color: quizSelected === !quizQuestions[quizLevel][quizIndex].isMyth ? '#047857' : '#be123c'
                      }}>
                        {quizSelected === !quizQuestions[quizLevel][quizIndex].isMyth ? (
                          <>
                            <i className="fas fa-check-circle"></i> ¡Respuesta Correcta!
                          </>
                        ) : (
                          <>
                            <i className="fas fa-times-circle"></i> Respuesta Incorrecta
                          </>
                        )}
                      </p>
                      <p className="text-xs text-slate-700 font-medium leading-relaxed">
                        <span className="font-bold text-slate-900 block mb-1">Explicación:</span>
                        {quizQuestions[quizLevel][quizIndex].explanation}
                      </p>
                    </div>

                    <button
                      onClick={handleQuizNext}
                      className="w-full bg-[#24668e] text-white font-bold py-3 rounded-xl hover:bg-[#1a4a69] transition"
                    >
                      Siguiente Enunciado <i className="fas fa-chevron-right ml-1"></i>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-6 text-center py-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#11998e] flex items-center justify-center text-3xl mx-auto animate-bounce">
                  <i className="fas fa-trophy"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-800">¡Nivel Completado con éxito!</h3>
                <p className="text-sm text-slate-500">
                  Has completado las 5 preguntas del nivel {quizLevel.toUpperCase()}. Puntuación: {quizScore} / 5 correctas. +20 XP obtenidos 🏆
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={promoteQuizLevel}
                    className="w-full bg-[#11998e] text-white font-bold py-3 rounded-xl hover:bg-[#0f877d] transition"
                  >
                    Avanzar de Nivel
                  </button>
                  <button
                    onClick={handleBackToGrid}
                    className="w-full bg-slate-100 text-slate-700 font-bold py-3 rounded-xl hover:bg-slate-200 transition"
                  >
                    Salir
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Sello de Validación */}
        {activeTool === 'validacion' && (
          <div className="space-y-6 max-w-xl mx-auto text-center">
            <header className="space-y-2">
              <span className="text-xs uppercase font-extrabold text-[#ea384d] bg-[#ea384d]/15 py-1 px-3 rounded-full">Sello de Validación</span>
              <h2 className="text-2xl font-bold text-[#101021]">Permiso y Validación Emocional</h2>
              <p className="text-sm text-[#101021]/70">
                Selecciona la emoción difícil que experimentas y recibe una validación psicológica que normalize tu sentir.
              </p>
            </header>

            {!validationSubmitted ? (
              <div className="space-y-5 text-left">
                <label className="block text-sm font-bold text-slate-800">¿Qué emoción incómoda o difícil sientes hoy?</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'frustracion', label: 'Frustración' },
                    { id: 'culpa', label: 'Culpa' },
                    { id: 'tristeza', label: 'Tristeza' },
                    { id: 'agobio', label: 'Agobio' },
                    { id: 'inseguridad', label: 'Inseguridad' },
                    { id: 'soledad', label: 'Soledad' }
                  ].map(emo => (
                    <button
                      key={emo.id}
                      onClick={() => setValidationEmotion(emo.id as any)}
                      className={`p-3.5 rounded-xl border text-center font-bold text-xs sm:text-sm transition ${validationEmotion === emo.id ? 'bg-[#ea384d]/10 border-[#ea384d] text-slate-900 scale-105 shadow-sm' : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'}`}
                    >
                      {emo.label}
                    </button>
                  ))}
                </div>
                <button
                  onClick={handleValidationSubmit}
                  disabled={!validationEmotion}
                  className="w-full bg-[#ea384d] text-white font-bold py-3 rounded-xl hover:bg-[#d31027] transition shadow disabled:opacity-50"
                >
                  Generar Validación Emocional
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                
                {/* Validation text container */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-[#ea384d]/5 border border-[#ea384d]/10 shadow-inner text-left space-y-4">
                  <div className="flex items-center gap-2 text-[#ea384d]">
                    <i className="fas fa-heart text-lg animate-pulse"></i>
                    <span className="text-xs uppercase font-extrabold tracking-wider">Validación para: {validationEmotion.toUpperCase()}</span>
                  </div>
                  <p className="text-slate-800 text-sm sm:text-base font-medium leading-relaxed italic">
                    "{validationAffirmations[validationEmotion as keyof typeof validationAffirmations]}"
                  </p>
                </div>

                <p className="text-xs text-slate-400 font-semibold">Tus emociones son válidas. Date espacio. +10 XP obtenidos 💙</p>

                <div className="flex gap-4 max-w-sm mx-auto">
                  <button
                    onClick={() => setValidationSubmitted(false)}
                    className="w-full bg-slate-100 text-slate-700 font-bold py-2.5 rounded-xl hover:bg-slate-200 text-xs sm:text-sm"
                  >
                    Validar Otra Emoción
                  </button>
                  <button
                    onClick={handleBackToGrid}
                    className="w-full bg-[#24668e] text-white font-bold py-2.5 rounded-xl hover:bg-[#1a4a69] text-xs sm:text-sm"
                  >
                    Finalizar
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Estrellas de Fortaleza */}
        {activeTool === 'fortaleza' && (
          <div className="space-y-6 max-w-2xl mx-auto">
            <header className="text-center space-y-2">
              <span className="text-xs uppercase font-extrabold text-[#8360c3] bg-[#8360c3]/15 py-1 px-3 rounded-full">Estrellas de Fortaleza</span>
              <h2 className="text-2xl font-bold text-[#101021]">Constelación de Autoconfianza</h2>
              <p className="text-sm text-[#101021]/70">
                Añade una fortaleza personal que utilizaste hoy y visualiza tu cielo de resiliencia creciendo estrella a estrella.
              </p>
            </header>

            {!fortalezaSuccess ? (
              <form onSubmit={handleFortalezaSubmit} className="space-y-5">
                
                {/* Select standard strengths */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-800">1. ¿Qué fortaleza pusiste en juego hoy?</label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Autocuidado', 'Paciencia', 'Asertividad', 'Disciplina', 'Creatividad',
                      'Empatía', 'Valentía', 'Gratitud', 'Resiliencia', 'Curiosidad', 'otra'
                    ].map(st => (
                      <button
                        key={st}
                        type="button"
                        onClick={() => setFortalezaSelected(st)}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition ${fortalezaSelected === st ? 'bg-[#8360c3] text-white border-[#8360c3]' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}
                      >
                        {st === 'otra' ? '✍️ Otra Fortaleza...' : st}
                      </button>
                    ))}
                  </div>
                </div>

                {fortalezaSelected === 'otra' && (
                  <div className="space-y-1 animate-fade-in">
                    <label className="block text-xs font-bold text-slate-500" htmlFor="fortaleza-custom">Escribe la fortaleza:</label>
                    <input
                      id="fortaleza-custom"
                      type="text"
                      maxLength={20}
                      value={fortalezaCustom}
                      onChange={e => setFortalezaCustom(e.target.value)}
                      placeholder="Ej: Tolerancia"
                      className="w-full rounded-xl border border-slate-200 p-2.5 text-sm focus:border-[#8360c3] focus:ring-1 focus:ring-[#8360c3]"
                      required
                    />
                  </div>
                )}

                {/* Description */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-bold text-slate-800" htmlFor="fortaleza-text">2. ¿Cómo la aplicaste concretamente en tu día?</label>
                  <textarea
                    id="fortaleza-text"
                    rows={2}
                    value={fortalezaText}
                    onChange={e => setFortalezaText(e.target.value)}
                    placeholder="Ej: Elegí pausar y respirar en vez de responder enojado en el chat grupal..."
                    className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-[#8360c3] focus:ring-1 focus:ring-[#8360c3]"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={!fortalezaSelected || (fortalezaSelected === 'otra' && !fortalezaCustom) || !fortalezaText}
                  className="w-full bg-[#8360c3] text-white font-bold py-3 rounded-xl hover:bg-[#6c48ab] transition shadow disabled:opacity-50"
                >
                  Colocar Estrella en mi Constelación
                </button>
              </form>
            ) : (
              <div className="space-y-6 text-center py-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#8360c3] flex items-center justify-center text-2xl mx-auto">
                  <i className="fas fa-star animate-spin"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-800">Estrella Agregada</h3>
                <p className="text-sm text-slate-500">
                  Has posicionado una nueva fortaleza. Tu constelación se vuelve más luminosa. +10 XP obtenidos ⭐
                </p>

                {/* Interactive constellation SVG canvas */}
                <div className="relative w-full h-64 bg-gradient-to-b from-[#101026] to-[#25254d] rounded-2xl overflow-hidden shadow-inner border border-slate-800 p-4">
                  <span className="absolute top-3 left-3 text-[9px] uppercase font-bold text-slate-400 tracking-wider">Tu Constelación de Fortaleza</span>
                  
                  <svg className="w-full h-full">
                    {/* Render stars */}
                    {starsPositions.map((star, idx) => (
                      <g key={idx} transform={`translate(${star.x}, ${star.y}) scale(${star.scale})`}>
                        <circle r="6" fill="#fff" className="animate-ping opacity-60" />
                        <circle r="4" fill="#ffdf00" />
                        {/* Lines connecting stars sequentially */}
                        {idx > 0 && (
                          <line
                            x1={-star.x + starsPositions[idx-1].x}
                            y1={-star.y + starsPositions[idx-1].y}
                            x2="0"
                            y2="0"
                            stroke="rgba(255, 255, 255, 0.2)"
                            strokeWidth="1"
                            strokeDasharray="4,4"
                          />
                        )}
                        <text y="-10" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="bold">
                          {star.strength}
                        </text>
                      </g>
                    ))}
                    {starsPositions.length === 0 && (
                      <text x="50%" y="55%" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="bold">
                        Aún no hay estrellas en tu cielo. ¡Añade tu primera fortaleza!
                      </text>
                    )}
                  </svg>
                </div>

                <div className="flex gap-4 justify-center">
                  <button
                    onClick={() => setFortalezaSuccess(false)}
                    className="bg-slate-100 text-slate-700 font-bold py-2.5 px-6 rounded-xl hover:bg-slate-200 text-xs sm:text-sm"
                  >
                    Añadir Otra Fortaleza
                  </button>
                  <button
                    onClick={handleBackToGrid}
                    className="bg-[#24668e] text-white font-bold py-2.5 px-6 rounded-xl hover:bg-[#1a4a69] text-xs sm:text-sm"
                  >
                    Volver al Menú
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Guía con IA (Original Prompt Cards & Question Assistant) */}
        {activeTool === 'ia_guide' && (
          <div className="space-y-6 max-w-2xl mx-auto">
            <header className="text-center space-y-2">
              <span className="text-xs uppercase font-extrabold text-[#4a00e0] bg-[#4a00e0]/15 py-1 px-3 rounded-full">Guía con IA</span>
              <h2 className="text-2xl font-bold text-[#101021]">Mentor de Inteligencia Emocional IA</h2>
              <p className="text-sm text-[#101021]/70">Escribe tu situación actual y recibe micro-orientaciones guiadas por nuestro mentor IA.</p>
            </header>

            <form onSubmit={handleIASubmit} className="space-y-4">
              <label className="block text-sm font-semibold text-[#101021]" htmlFor="kit-reflexivo-question">Comparte en qué necesitas apoyo:</label>
              <textarea
                id="kit-reflexivo-question"
                value={userQuestion}
                onChange={e => setUserQuestion(e.target.value)}
                rows={4}
                className="w-full rounded-xl border border-slate-200 p-4 focus:border-[#4a00e0] focus:ring-1 focus:ring-[#4a00e0] text-sm"
                placeholder="Ej. Me cuesta desconectarme del trabajo y quiero recuperar mi equilibrio emocional..."
                required
              />
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#4a00e0] px-6 py-2.5 text-white font-semibold hover:bg-[#34009c] disabled:opacity-60 text-sm"
                  disabled={loading}
                >
                  <i className="fas fa-sparkles"></i>
                  Obtener Guía Reflexiva
                </button>
                <p className="text-xs text-[#101021]/60">La IA generará una respuesta concisa y terapéutica.</p>
              </div>
            </form>

            <div className="min-h-[160px] rounded-2xl border border-dashed border-[#4a00e0]/30 bg-[#4a00e0]/5 p-5">
              {loading && (
                <div className="flex items-center gap-3 text-[#4a00e0] justify-center py-10">
                  <span className="flex h-3 w-3 rounded-full bg-current animate-pulse"></span>
                  <span className="text-sm font-medium">Analizando tu situación…</span>
                </div>
              )}
              {!loading && error && (
                <p className="text-sm text-[#dd566f] font-medium text-center py-10">{error}</p>
              )}
              {!loading && !error && responseText && (
                <div className="space-y-3 text-sm leading-relaxed text-[#101021] text-left">
                  {responseText.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              )}
              {!loading && !error && !responseText && (
                <p className="text-sm text-[#101021]/70 text-center py-10">
                  Escribe tu consulta arriba y presiona "Obtener Guía" para recibir recomendaciones personalizadas.
                </p>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default KitReflexivoPage;
