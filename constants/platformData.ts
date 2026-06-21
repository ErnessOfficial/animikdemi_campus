import type { Course, User, UserProgress, Achievement, Instructor, DiagnosticQuestion } from '../types';
import { assetPath } from '../utils/paths';
import { mockInstructor } from './courses/courseData';

// Descubre automáticamente cursos detallados en constants/courses/*
const discoveredModules = import.meta.glob('./courses/*.ts', { eager: true });
const discoveredCourses: Course[] = Object.values(discoveredModules).flatMap((mod: any) => {
  const one = (mod?.default ?? mod?.course ?? mod?.courseData) as Course | undefined;
  return one && typeof one === 'object' && 'id' in one && 'title' in one && 'modules' in one ? [one] : [];
});

export const mockUser: User = {
  name: 'Alex Quiroz',
  avatarUrl: assetPath('images/instructor_avatar.png'),
  bio: 'Aprendiz de por vida y entusiasta del crecimiento personal. Buscando siempre nuevas formas de entenderme a mí mismo y al mundo que me rodea.',
  hasTakenDiagnostic: false,
};

export const diagnosticTestQuestions: DiagnosticQuestion[] = [
  { 
    question: 'Cuando te enfrentas a una emoción intensa como la frustración o la tristeza, ¿cuál es tu reacción más habitual?', 
    options: [
      { text: 'Intento analizar por qué me siento así, buscando la raíz del sentimiento.', category: 'Autoconocimiento'},
      { text: 'Busco una forma de calmarme, como respirar hondo o dar un paseo.', category: 'Gestión Emocional'},
      { text: 'Suelo hablar con alguien de confianza sobre lo que me está pasando.', category: 'Habilidades Sociales'},
      { text: 'Me distraigo con otras actividades para no pensar en ello.', category: 'Gestión Emocional'},
    ]
  },
  { 
    question: '¿Qué frase describe mejor tu principal objetivo de desarrollo personal en este momento?', 
    options: [
      { text: 'Quiero entender mejor mis valores y lo que realmente me motiva en la vida.', category: 'Autoconocimiento'},
      { text: 'Necesito aprender a manejar mejor el estrés y la ansiedad en mi día a día.', category: 'Gestión Emocional'},
      { text: 'Me gustaría mejorar la forma en que me comunico y conecto con los demás.', category: 'Habilidades Sociales'},
      { text: 'Deseo ser más consciente de mis patrones de pensamiento automáticos.', category: 'Autoconocimiento'},
    ]
  },
  { 
    question: 'En una conversación difícil, ¿qué te resulta más complicado?', 
    options: [
        { text: 'Expresar mis propias necesidades y opiniones de forma clara y respetuosa.', category: 'Habilidades Sociales'},
        { text: 'Mantener la calma y no dejarme llevar por mis emociones durante la discusión.', category: 'Gestión Emocional'},
        { text: 'Entender realmente el punto de vista de la otra persona, aunque no esté de acuerdo.', category: 'Habilidades Sociales'},
        { text: 'Saber qué es lo que realmente quiero o necesito decir en ese momento.', category: 'Autoconocimiento'},
    ]
  },
];

export const courseCategories = [
  "Autoconciencia & Regulación emocional",
  "Ansiedad, Estrés y Calma",
  "Sueño & Descanso consciente",
  "Relaciones & Comunicación con Criterio",
  "Familia, Crianza & Adolescencia",
  "Bienestar en el Trabajo - Especial \"PILAR\"",
  "Mujer, Hombre & Etapas vitales",
  "Migración & Cambio de vida",
  "Duelo, Pérdida & Crisis",
  "Digital & Autocuidado en la era de pantallas"
];


// Placeholders que aparecen en catálogo (sin contenido detallado)
const placeholderCourses: Course[] = [
  {
    id: 'gestion-emocional-101',
    title: 'Inteligencia Emocional Aplicada',
    subtitle: 'Aprende a gestionar tus emociones para una vida más plena.',
    description: 'Este curso te proporciona herramientas prácticas para navegar tu paisaje emocional. Aprenderás a identificar, comprender y regular tus emociones, transformando tu relación con el estrés, la ansiedad y la alegría. A través de ejercicios basados en la ciencia, mejorarás tu toma de decisiones y fortalecerás tu resiliencia.',
    category: 'Autoconciencia & Regulación emocional',
    broadCategories: ['Gestión Emocional'],
    coverImage: assetPath('images/course_cover_2.png'),
    instructor: mockInstructor,
    learningObjectives: [
      'Identificar emociones básicas en ti mismo y en los demás.',
      'Aplicar técnicas de regulación emocional en momentos de estrés.',
      'Comprender el impacto de las emociones en la toma de decisiones.',
      'Desarrollar la capacidad de responder en lugar de reaccionar.',
      'Mejorar la comunicación de tus estados emocionales.'
    ],
    modules: [], // Simplified for catalog view
  },
  {
    id: 'habilidades-sociales-101',
    title: 'Comunicación Asertiva y Empatía',
    subtitle: 'Mejora tus relaciones interpersonales y profesionales.',
    description: 'Fortalece tus conexiones con los demás a través del poder de la comunicación consciente. Este curso se enfoca en dos pilares: la asertividad para expresar tus necesidades con respeto y la empatía para comprender a los demás profundamente. Ideal para mejorar tus relaciones personales, tu liderazgo y tu capacidad de colaboración.',
    category: 'Relaciones & Comunicación con Criterio',
    broadCategories: ['Habilidades Sociales'],
    coverImage: assetPath('images/course_cover_3.png'),
    instructor: mockInstructor,
    learningObjectives: [
      'Diferenciar entre comunicación pasiva, agresiva y asertiva.',
      'Practicar la escucha activa y empática.',
      'Aprender a decir "no" de manera constructiva.',
      'Formular peticiones y dar feedback de forma efectiva.',
      'Manejar conversaciones difíciles con mayor confianza.'
    ],
    modules: [], // Simplified for catalog view
  },
  {
    id: 'bienestar-trabajo-101',
    title: 'Bienestar Laboral: Metodología PILAR',
    subtitle: 'Construye resiliencia y propósito en tu entorno profesional.',
    description: 'Basado en la metodología especial "PILAR", este curso está diseñado para ayudarte a navegar los desafíos del mundo laboral moderno. Aprenderás a gestionar el estrés, evitar el burnout, comunicarte eficazmente y encontrar un mayor sentido de propósito en tu trabajo diario.',
    category: "Bienestar en el Trabajo - Especial \"PILAR\"",
    broadCategories: ['Gestión Emocional', 'Habilidades Sociales'],
    coverImage: assetPath('images/course_cover_6.png'),
    instructor: mockInstructor,
    learningObjectives: [
        'Aplicar los principios de la metodología PILAR.',
        'Desarrollar estrategias para prevenir el burnout.',
        'Mejorar la comunicación y colaboración en equipo.',
        'Establecer límites saludables entre el trabajo y la vida personal.',
        'Fomentar un ambiente de trabajo positivo.'
    ],
    modules: [],
  },
  {
    id: 'crianza-consciente-101',
    title: 'Crianza Consciente para Familias Modernas',
    subtitle: 'Navega los retos de la crianza con empatía y conexión.',
    description: 'Este curso ofrece herramientas y perspectivas para padres, madres y cuidadores que buscan criar desde la conexión y el respeto mutuo. Abordaremos temas clave desde la infancia hasta la adolescencia, enfocándonos en la comunicación efectiva, la gestión de berrinches y la construcción de un vínculo familiar sólido.',
    category: "Familia, Crianza & Adolescencia",
    broadCategories: ['Habilidades Sociales'],
    coverImage: assetPath('images/course_cover_7.png'),
    instructor: mockInstructor,
    learningObjectives: [
        'Comprender las bases de la crianza consciente y respetuosa.',
        'Aplicar técnicas de comunicación no violenta en la familia.',
        'Manejar conflictos y berrinches de forma constructiva.',
        'Fomentar la autoestima y resiliencia en los hijos.',
        'Adaptar el estilo de crianza a las diferentes etapas del desarrollo.'
    ],
    modules: [],
  }
];

// Mezcla evitando duplicados por id: prioriza cursos detallados sobre placeholders
const catalogById = new Map<string, Course>();
for (const c of discoveredCourses) catalogById.set(c.id, c);
for (const p of placeholderCourses) if (!catalogById.has(p.id)) catalogById.set(p.id, p);

export const courseCatalog: Course[] = Array.from(catalogById.values());

export const initialUserProgress: UserProgress = {
  courses: {
    'autoconocimiento-101': {
      courseId: 'autoconocimiento-101',
      lastAccessedActivityId: 'm1a2',
      completionStatus: {
        m1: { completed: false, activities: { m1a1: true, m1a2: false, m1a3: false, m1a4: false } },
        m2: { completed: false, activities: { m2a1: false, m2a2: false, m2a3: false } },
        m3: { completed: false, activities: { m3a1: false, m3a2: false, m3a3: false, m3a4: false } },
        m4: { completed: false, activities: { m4a1: false, m4a2: false } },
        m5: { completed: false, activities: { m5a1: false } },
      },
      percentage: 15,
      answers: {}
    }
  }
};


export const mockAchievements: Achievement[] = [
    { id: '1', title: 'Primeros Pasos', description: 'Completaste tu primera actividad.', icon: 'fa-shoe-prints', date: '15 de Jul, 2024' },
    { id: '2', title: 'Mente Curiosa', description: 'Finalizaste tu primer módulo.', icon: 'fa-brain', date: '18 de Jul, 2024' },
    { id: '3', title: 'Constancia', description: 'Estudiaste 3 días seguidos.', icon: 'fa-calendar-check', date: '20 de Jul, 2024' },
    { id: '4', title: 'Explorador/a', description: 'Iniciaste un nuevo curso.', icon: 'fa-compass', date: '22 de Jul, 2024' },
];
