import type { Course, UserProgress, GamificationBadge, GamificationAchievement, ActivityHistoryItem, WeeklyChallenge } from '../types';
import type { CelebrationItem } from '../components/platform/CelebrationOverlay';

export const BADGE_CONFIGS: Record<string, { label: string; icon: string; description: string; rarity: 'Común' | 'Poco común' | 'Épico' | 'Legendario' | 'Mítico' }> = {
  'first-course': {
    label: 'Primer paso',
    icon: 'https://res.cloudinary.com/djybwowo6/image/upload/v1782611473/AVISO_DE_NO_SUSTITUCI%C3%93N_La_Inteligencia_Artificial_no_es_un_psic%C3%B3logo_terapeuta_ni_sustituto_de_atenci%C3%B3n_m%C3%A9dica_profesional._Si_necesitas_atenci%C3%B3n_para_tu_salud_mental_acude_a_un_centro_de_salud_ghztmq.svg',
    description: 'Primer curso completado con éxito.',
    rarity: 'Común'
  },
  'constancy-7': {
    label: 'Aprendiz constante',
    icon: 'https://res.cloudinary.com/djybwowo6/image/upload/v1782611470/AVISO_DE_NO_SUSTITUCI%C3%93N_La_Inteligencia_Artificial_no_es_un_psic%C3%B3logo_terapeuta_ni_sustituto_de_atenci%C3%B3n_m%C3%A9dica_profesional._Si_necesitas_atenci%C3%B3n_para_tu_salud_mental_acude_a_un_centro_de_salud-2_fjivwr.svg',
    description: 'Dedicaste tiempo a tu bienestar durante 7 días seguidos.',
    rarity: 'Poco común'
  },
  'courses-10': {
    label: 'Explorador emocional',
    icon: 'https://res.cloudinary.com/djybwowo6/image/upload/v1782611471/AVISO_DE_NO_SUSTITUCI%C3%93N_La_Inteligencia_Artificial_no_es_un_psic%C3%B3logo_terapeuta_ni_sustituto_de_atenci%C3%B3n_m%C3%A9dica_profesional._Si_necesitas_atenci%C3%B3n_para_tu_salud_mental_acude_a_un_centro_de_salud-3_fy0bs4.svg',
    description: 'Completaste 10 cursos finalizados.',
    rarity: 'Épico'
  },
  'meditations-20': {
    label: 'Mente tranquila',
    icon: 'https://res.cloudinary.com/djybwowo6/image/upload/v1782611469/AVISO_DE_NO_SUSTITUCI%C3%93N_La_Inteligencia_Artificial_no_es_un_psic%C3%B3logo_terapeuta_ni_sustituto_de_atenci%C3%B3n_m%C3%A9dica_profesional._Si_necesitas_atenci%C3%B3n_para_tu_salud_mental_acude_a_un_centro_de_salud-4_jt0xp5.svg',
    description: 'Realizaste 20 meditaciones o ejercicios de calma.',
    rarity: 'Épico'
  },
  'active-30': {
    label: 'Constructor de hábitos',
    icon: 'https://res.cloudinary.com/djybwowo6/image/upload/v1782611468/AVISO_DE_NO_SUSTITUCI%C3%93N_La_Inteligencia_Artificial_no_es_un_psic%C3%B3logo_terapeuta_ni_sustituto_de_atenci%C3%B3n_m%C3%A9dica_profesional._Si_necesitas_atenci%C3%B3n_para_tu_salud_mental_acude_a_un_centro_de_salud-5_rtfp7l.svg',
    description: 'Estuviste activo durante 30 días en la plataforma.',
    rarity: 'Épico'
  },
  'courses-50': {
    label: 'Maestro del aprendizaje',
    icon: 'https://res.cloudinary.com/djybwowo6/image/upload/v1782611467/AVISO_DE_NO_SUSTITUCI%C3%93N_La_Inteligencia_Artificial_no_es_un_psic%C3%B3logo_terapeuta_ni_sustituto_de_atenci%C3%B3n_m%C3%A9dica_profesional._Si_necesitas_atenci%C3%B3n_para_tu_salud_mental_acude_a_un_centro_de_salud-6_xjywzc.svg',
    description: 'Completaste 50 cursos en AnImiK.',
    rarity: 'Legendario'
  },
  'constancy-100': {
    label: 'Constancia admirable',
    icon: 'https://res.cloudinary.com/djybwowo6/image/upload/v1782611467/AVISO_DE_NO_SUSTITUCI%C3%93N_La_Inteligencia_Artificial_no_es_un_psic%C3%B3logo_terapeuta_ni_sustituto_de_atenci%C3%B3n_m%C3%A9dica_profesional._Si_necesitas_atenci%C3%B3n_para_tu_salud_mental_acude_a_un_centro_de_salud-7_cqx5gs.svg',
    description: 'Mantuviste una racha de bienestar de 100 días.',
    rarity: 'Legendario'
  },
  'programs-5': {
    label: 'Bienestar integral',
    icon: 'https://res.cloudinary.com/djybwowo6/image/upload/v1782611466/AVISO_DE_NO_SUSTITUCI%C3%93N_La_Inteligencia_Artificial_no_es_un_psic%C3%B3logo_terapeuta_ni_sustituto_de_atenci%C3%B3n_m%C3%A9dica_profesional._Si_necesitas_atenci%C3%B3n_para_tu_salud_mental_acude_a_un_centro_de_salud-8_rrabd8.svg',
    description: 'Completaste 5 programas formativos completos.',
    rarity: 'Legendario'
  },
  'anniversary-1': {
    label: 'Royal Animikind',
    icon: 'https://res.cloudinary.com/djybwowo6/image/upload/v1782611465/AVISO_DE_NO_SUSTITUCI%C3%93N_La_Inteligencia_Artificial_no_es_un_psic%C3%B3logo_terapeuta_ni_sustituto_de_atenci%C3%B3n_m%C3%A9dica_profesional._Si_necesitas_atenci%C3%B3n_para_tu_salud_mental_acude_a_un_centro_de_salud-9_fkc5kk.svg',
    description: 'Cumpliste tu primer año en la plataforma.',
    rarity: 'Mítico'
  }
};

const courseCategories = [
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

export interface GamificationStats {
  points: number;
  level: number;
  currentToNext: number; // 0-100
  levelTitle: string;
  completedCourses: number;
  badges: GamificationBadge[];
  areasCompleted: number;
  areasTotal: number;
  areaBadges: GamificationBadge[];
  areasLevel: number;
  emotionalStage: string;
  streak: number;
  restDays: number;
  weeklyChallenges: WeeklyChallenge[];
  activityHistory: ActivityHistoryItem[];
  longestStreak: number;
}

// Get YYYY-MM-DD in local time
export const getLocalDateString = (d: Date = new Date()): string => {
  const offset = d.getTimezoneOffset();
  const localDate = new Date(d.getTime() - (offset * 60 * 1000));
  return localDate.toISOString().split('T')[0];
};

// Check date differences
export const getDaysDifference = (dateStr1: string, dateStr2: string): number => {
  if (!dateStr1 || !dateStr2) return 0;
  const d1 = new Date(dateStr1 + 'T00:00:00');
  const d2 = new Date(dateStr2 + 'T00:00:00');
  const diffTime = Math.abs(d2.getTime() - d1.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

export const getLevelTitle = (level: number): string => {
  if (level >= 100) return 'Maestro del Crecimiento Personal';
  if (level >= 75) return 'Guardián Emocional';
  if (level >= 50) return 'Embajador AnImiK';
  if (level >= 30) return 'Mentor del Bienestar';
  if (level >= 20) return 'Arquitecto del Equilibrio';
  if (level >= 15) return 'Navegante Interior';
  if (level >= 10) return 'Constructor de Hábitos';
  if (level >= 5) return 'Explorador Emocional';
  return 'Semilla del Bienestar';
};

export const getEmotionalStage = (progress: UserProgress): string => {
  const completedCoursesCount = Object.values(progress.courses || {}).filter(
    (c) => c.percentage === 100
  ).length;
  
  const reflections = progress.completedReflectionsCount || 0;
  const meditations = progress.completedMeditationsCount || 0;
  const tools = progress.emotionalToolsUsedCount || 0;
  const activeDays = new Set((progress.activityHistory || []).map((h) => h.date)).size;

  // Compute a weighted score of user involvement
  const score =
    completedCoursesCount * 30 +
    reflections * 10 +
    meditations * 10 +
    tools * 10 +
    activeDays * 5;

  if (score >= 1500) return 'Trascendencia';
  if (score >= 1000) return 'Inspiración';
  if (score >= 750) return 'Florecimiento';
  if (score >= 500) return 'Equilibrio';
  if (score >= 300) return 'Consolidación';
  if (score >= 150) return 'Crecimiento';
  if (score >= 80) return 'Descubrimiento';
  if (score >= 30) return 'Curiosidad';
  return 'Despertar';
};

function getWeekNumber(d: Date): number {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dayNum = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  return Math.ceil((((date.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
}

export const generateWeeklyChallenges = (date: Date): WeeklyChallenge[] => {
  const weekNum = getWeekNumber(date);
  return [
    {
      id: `weekly-capsule-${weekNum}`,
      title: 'Completa una cápsula (Video o lectura)',
      target: 1,
      current: 0,
      xpReward: 50,
      type: 'capsule',
      completed: false,
    },
    {
      id: `weekly-meditation-${weekNum}`,
      title: 'Realiza una práctica de meditación',
      target: 1,
      current: 0,
      xpReward: 50,
      type: 'meditation',
      completed: false,
    },
    {
      id: `weekly-reflection-${weekNum}`,
      title: 'Haz una parada reflexiva en el Kit',
      target: 1,
      current: 0,
      xpReward: 50,
      type: 'reflection',
      completed: false,
    }
  ];
};

export const initializeGamification = (progress: UserProgress): UserProgress => {
  const initialized = {
    ...progress,
    courses: progress.courses || {},
    xp: progress.xp ?? 0,
    streak: progress.streak ?? 0,
    longestStreak: progress.longestStreak ?? 0,
    lastActiveDate: progress.lastActiveDate ?? '',
    restDays: progress.restDays ?? 2, // Empezar con 2 días de descanso
    unlockedBadges: progress.unlockedBadges ?? [],
    unlockedAchievements: progress.unlockedAchievements ?? [],
    completedMeditationsCount: progress.completedMeditationsCount ?? 0,
    completedReflectionsCount: progress.completedReflectionsCount ?? 0,
    emotionalToolsUsedCount: progress.emotionalToolsUsedCount ?? 0,
    studyMinutes: progress.studyMinutes ?? 0,
    activityHistory: progress.activityHistory ?? [],
    weeklyChallenges: progress.weeklyChallenges ?? generateWeeklyChallenges(new Date()),
    createdAt: progress.createdAt ?? new Date().toISOString(),
  };

  // Migrar insignias antiguas con iconos fa- o nombres antiguos a la nueva configuración de Cloudinary
  initialized.unlockedBadges = (initialized.unlockedBadges || []).map(badge => {
    const config = BADGE_CONFIGS[badge.id];
    if (config) {
      return {
        ...badge,
        label: config.label,
        icon: config.icon,
        description: config.description,
        rarity: config.rarity
      };
    }
    return badge;
  });

  // Migrar puntos antiguos si xp es 0 pero ya completó actividades
  if (initialized.xp === 0) {
    let completedActivities = 0;
    Object.values(progress.courses || {}).forEach(courseProgress => {
      Object.values(courseProgress.completionStatus || {}).forEach(mod => {
        completedActivities += Object.values(mod.activities || {}).filter(Boolean).length;
      });
    });
    if (completedActivities > 0) {
      initialized.xp = completedActivities * 10;
    }
  }

  return initialized;
};

// Check if badges or achievements are newly unlocked
export const checkBadgesAndAchievements = (
  progress: UserProgress,
  catalog: Course[]
): { newBadges: GamificationBadge[]; newAchievements: GamificationAchievement[] } => {
  const newBadges: GamificationBadge[] = [];
  const newAchievements: GamificationAchievement[] = [];
  const now = new Date().toISOString();
  
  const xp = progress.xp || 0;
  const streak = progress.streak || 0;
  const longestStreak = progress.longestStreak || 0;
  const unlockedBadges = progress.unlockedBadges || [];
  const unlockedAchievements = progress.unlockedAchievements || [];
  
  const completedCoursesCount = Object.values(progress.courses || {}).filter(
    (c) => c.percentage === 100
  ).length;
  
  const reflections = progress.completedReflectionsCount || 0;
  const meditations = progress.completedMeditationsCount || 0;
  const activeDays = new Set((progress.activityHistory || []).map((h) => h.date)).size;

  const hasBadge = (id: string) => unlockedBadges.some((b) => b.id === id);
  const hasAchievement = (id: string) => unlockedAchievements.some((a) => a.id === id);

  // 1. Badge Checks
  if (completedCoursesCount >= 1 && !hasBadge('first-course')) {
    newBadges.push({
      id: 'first-course',
      label: BADGE_CONFIGS['first-course'].label,
      icon: BADGE_CONFIGS['first-course'].icon,
      unlockedAt: now,
      description: BADGE_CONFIGS['first-course'].description,
      rarity: BADGE_CONFIGS['first-course'].rarity,
    });
  }

  if (streak >= 7 && !hasBadge('constancy-7')) {
    newBadges.push({
      id: 'constancy-7',
      label: BADGE_CONFIGS['constancy-7'].label,
      icon: BADGE_CONFIGS['constancy-7'].icon,
      unlockedAt: now,
      description: BADGE_CONFIGS['constancy-7'].description,
      rarity: BADGE_CONFIGS['constancy-7'].rarity,
    });
  }

  if (completedCoursesCount >= 10 && !hasBadge('courses-10')) {
    newBadges.push({
      id: 'courses-10',
      label: BADGE_CONFIGS['courses-10'].label,
      icon: BADGE_CONFIGS['courses-10'].icon,
      unlockedAt: now,
      description: BADGE_CONFIGS['courses-10'].description,
      rarity: BADGE_CONFIGS['courses-10'].rarity,
    });
  }

  if (meditations >= 20 && !hasBadge('meditations-20')) {
    newBadges.push({
      id: 'meditations-20',
      label: BADGE_CONFIGS['meditations-20'].label,
      icon: BADGE_CONFIGS['meditations-20'].icon,
      unlockedAt: now,
      description: BADGE_CONFIGS['meditations-20'].description,
      rarity: BADGE_CONFIGS['meditations-20'].rarity,
    });
  }

  if (activeDays >= 30 && !hasBadge('active-30')) {
    newBadges.push({
      id: 'active-30',
      label: BADGE_CONFIGS['active-30'].label,
      icon: BADGE_CONFIGS['active-30'].icon,
      unlockedAt: now,
      description: BADGE_CONFIGS['active-30'].description,
      rarity: BADGE_CONFIGS['active-30'].rarity,
    });
  }

  if (completedCoursesCount >= 50 && !hasBadge('courses-50')) {
    newBadges.push({
      id: 'courses-50',
      label: BADGE_CONFIGS['courses-50'].label,
      icon: BADGE_CONFIGS['courses-50'].icon,
      unlockedAt: now,
      description: BADGE_CONFIGS['courses-50'].description,
      rarity: BADGE_CONFIGS['courses-50'].rarity,
    });
  }

  if (longestStreak >= 100 && !hasBadge('constancy-100')) {
    newBadges.push({
      id: 'constancy-100',
      label: BADGE_CONFIGS['constancy-100'].label,
      icon: BADGE_CONFIGS['constancy-100'].icon,
      unlockedAt: now,
      description: BADGE_CONFIGS['constancy-100'].description,
      rarity: BADGE_CONFIGS['constancy-100'].rarity,
    });
  }

  // programs-5 check: count completed courses that are marked as programs
  const completedProgramsCount = Object.keys(progress.courses || {}).filter(cid => {
    const course = catalog.find(c => c.id === cid);
    const cp = progress.courses[cid];
    return cp && cp.percentage === 100 && (course?.id.startsWith('programa') || course?.title.toLowerCase().includes('programa'));
  }).length;

  if (completedProgramsCount >= 5 && !hasBadge('programs-5')) {
    newBadges.push({
      id: 'programs-5',
      label: BADGE_CONFIGS['programs-5'].label,
      icon: BADGE_CONFIGS['programs-5'].icon,
      unlockedAt: now,
      description: BADGE_CONFIGS['programs-5'].description,
      rarity: BADGE_CONFIGS['programs-5'].rarity,
    });
  }

  // anniversary-1 check: count days since creation
  const createdAt = progress.createdAt || now;
  const daysActive = getDaysDifference(createdAt.split('T')[0], now.split('T')[0]);
  if (daysActive >= 365 && !hasBadge('anniversary-1')) {
    newBadges.push({
      id: 'anniversary-1',
      label: BADGE_CONFIGS['anniversary-1'].label,
      icon: BADGE_CONFIGS['anniversary-1'].icon,
      unlockedAt: now,
      description: BADGE_CONFIGS['anniversary-1'].description,
      rarity: BADGE_CONFIGS['anniversary-1'].rarity,
    });
  }

  // 2. Achievement Checks
  if (completedCoursesCount >= 1 && !hasAchievement('ach-first-cert')) {
    newAchievements.push({
      id: 'ach-first-cert',
      title: 'Primer Certificado',
      description: 'Obtuviste tu primer certificado de bienestar.',
      icon: 'fa-award',
      unlockedAt: now,
    });
  }

  if (xp >= 1000 && !hasAchievement('ach-xp-1000')) {
    newAchievements.push({
      id: 'ach-xp-1000',
      title: '1.000 XP acumulados',
      description: 'Cruzaste la marca de 1.000 XP acumulados.',
      icon: 'fa-star',
      unlockedAt: now,
    });
  }

  if (completedCoursesCount >= 10 && !hasAchievement('ach-certs-10')) {
    newAchievements.push({
      id: 'ach-certs-10',
      title: '10 Certificados',
      description: 'Desbloqueaste 10 certificaciones de finalización.',
      icon: 'fa-medal',
      unlockedAt: now,
    });
  }

  // Hours of learning: estimate from studyMinutes
  const studyMinutes = progress.studyMinutes || 0;
  if (studyMinutes >= 3000 && !hasAchievement('ach-hours-50')) {
    newAchievements.push({
      id: 'ach-hours-50',
      title: '50 Horas de Aprendizaje',
      description: 'Dedicaste 50 horas de estudio a tu crecimiento personal.',
      icon: 'fa-hourglass-half',
      unlockedAt: now,
    });
  }

  if (completedProgramsCount >= 1 && !hasAchievement('ach-program-done')) {
    newAchievements.push({
      id: 'ach-program-done',
      title: 'Programa Completo',
      description: 'Completaste tu primer programa completo de AnImiKdemi.',
      icon: 'fa-book-open',
      unlockedAt: now,
    });
  }

  if (meditations >= 100 && !hasAchievement('ach-meditations-100')) {
    newAchievements.push({
      id: 'ach-meditations-100',
      title: '100 Meditaciones',
      description: 'Alcanzaste las 100 meditaciones realizadas.',
      icon: 'fa-spa',
      unlockedAt: now,
    });
  }

  return { newBadges, newAchievements };
};

export const computeGamification = (progress: UserProgress, catalog: Course[]): GamificationStats => {
  const initialized = initializeGamification(progress);
  
  const points = initialized.xp || 0;
  const level = Math.floor(points / 100) + 1; // cada 100 puntos sube de nivel
  const currentToNext = Math.min(100, points % 100);
  const levelTitle = getLevelTitle(level);
  
  let completedCourses = 0;
  for (const course of catalog) {
    const p = initialized.courses[course.id];
    if (!p) continue;
    let courseTotal = 0;
    let courseCompleted = 0;
    for (const mod of course.modules) {
      courseTotal += mod.activities.length;
      const modStatus = p.completionStatus[mod.id];
      if (modStatus) {
        courseCompleted += Object.values(modStatus.activities || {}).filter(Boolean).length;
      }
    }
    if (courseTotal > 0 && courseCompleted === courseTotal) completedCourses += 1;
  }

  // Áreas del bienestar emocional (por categoría de curso)
  const categoryIconMap: Record<string, string> = {
    'Autoconciencia & Regulación emocional': 'fa-brain',
    'Ansiedad, Estrés y Calma': 'fa-spa',
    'Sueño & Descanso consciente': 'fa-bed',
    'Relaciones & Comunicación con Criterio': 'fa-comments',
    'Familia, Crianza & Adolescencia': 'fa-people-roof',
    'Bienestar en el Trabajo - Especial "PILAR"': 'fa-briefcase',
    'Bienestar en el Trabajo & Burnout': 'fa-briefcase',
    'Mujer, Hombre & Etapas vitales': 'fa-venus-mars',
    'Mujer &  Hombre - Etapas vitales': 'fa-venus-mars',
    'Migración & Cambio de vida': 'fa-plane-departure',
    'Duelo, Pérdida & Crisis': 'fa-heart-broken',
    'Autocuidado  y  Bienestar Digital': 'fa-mobile-screen',
    'Digital & Autocuidado en la era de pantallas': 'fa-mobile-screen',
  };

  const completedAreasSet = new Set<string>();
  for (const course of catalog) {
    const p = initialized.courses[course.id];
    if (!p) continue;
    let courseTotal = 0;
    let courseCompleted = 0;
    for (const mod of course.modules) {
      courseTotal += mod.activities.length;
      const modStatus = p.completionStatus[mod.id];
      if (modStatus) courseCompleted += Object.values(modStatus.activities || {}).filter(Boolean).length;
    }
    if (courseTotal > 0 && courseCompleted === courseTotal && course.category) {
      completedAreasSet.add(course.category);
    }
  }

  const areasTotal = courseCategories.length;
  const areasCompleted = Math.min(completedAreasSet.size, areasTotal);
  const areasLevel = areasCompleted === areasTotal ? 1 : 0;

  const areaBadges: GamificationBadge[] = Array.from(completedAreasSet).map(cat => ({
    id: `area-${cat}`,
    label: cat,
    icon: categoryIconMap[cat] || 'fa-circle-check',
    unlockedAt: new Date().toISOString(),
    description: `Completaste cursos del área ${cat}.`,
    rarity: 'Poco común',
  }));

  // Combinar insignias de área calculadas dinámicamente y las insignias desbloqueadas oficialmente en el perfil
  const allBadges = [...(initialized.unlockedBadges || [])];
  if (areasLevel === 1 && !allBadges.some(b => b.id === 'areas-master')) {
    allBadges.push({
      id: 'areas-master',
      label: 'Bienestar Integral',
      icon: 'fa-layer-group',
      unlockedAt: new Date().toISOString(),
      description: 'Completaste al menos un curso de todas las áreas de bienestar.',
      rarity: 'Legendario',
    });
  }

  return {
    points,
    level,
    currentToNext,
    levelTitle,
    completedCourses,
    badges: allBadges,
    areasCompleted,
    areasTotal,
    areaBadges,
    areasLevel,
    emotionalStage: getEmotionalStage(initialized),
    streak: initialized.streak || 0,
    restDays: initialized.restDays ?? 2,
    weeklyChallenges: initialized.weeklyChallenges || [],
    activityHistory: initialized.activityHistory || [],
    longestStreak: initialized.longestStreak || 0,
  };
};

export const checkDailyStreak = (progress: UserProgress): { updatedProgress: UserProgress; message?: string } => {
  const initialized = initializeGamification(progress);
  const today = getLocalDateString();
  const lastActive = initialized.lastActiveDate || '';
  
  if (!lastActive) {
    initialized.lastActiveDate = today;
    initialized.streak = 1;
    initialized.longestStreak = 1;
    return { updatedProgress: initialized };
  }

  if (lastActive === today) {
    return { updatedProgress: initialized };
  }

  const daysDiff = getDaysDifference(lastActive, today);

  if (daysDiff === 1) {
    // Active yesterday, active today -> increment streak
    initialized.streak = (initialized.streak || 0) + 1;
    initialized.longestStreak = Math.max(initialized.longestStreak || 0, initialized.streak);
    initialized.lastActiveDate = today;
    
    // Add streak bonus points
    initialized.xp = (initialized.xp || 0) + 5;
    initialized.activityHistory = initialized.activityHistory || [];
    initialized.activityHistory.push({
      date: today,
      type: 'streak_bonus',
      id: 'streak-bonus',
      title: 'Bono por continuar racha diaria',
      xp: 5
    });

    // Replenish rest days: +1 for every 7 days streak, cap at 3
    if (initialized.streak % 7 === 0 && (initialized.restDays || 0) < 3) {
      initialized.restDays = (initialized.restDays || 0) + 1;
    }

    return { 
      updatedProgress: initialized, 
      message: `¡Racha del día mantenida! 🔥 ${initialized.streak} días consecutivos. (+5 XP adicionales)` 
    };
  } else if (daysDiff === 2) {
    // Missed exactly 1 day. Check rest days.
    if ((initialized.restDays || 0) > 0) {
      initialized.restDays = (initialized.restDays || 0) - 1;
      initialized.streak = (initialized.streak || 0) + 1;
      initialized.longestStreak = Math.max(initialized.longestStreak || 0, initialized.streak);
      initialized.lastActiveDate = today;
      initialized.xp = (initialized.xp || 0) + 5;
      
      initialized.activityHistory = initialized.activityHistory || [];
      initialized.activityHistory.push({
        date: today,
        type: 'streak_bonus',
        id: 'streak-rest-day',
        title: 'Bono de racha (Día de descanso utilizado)',
        xp: 5
      });

      return { 
        updatedProgress: initialized, 
        message: `¡Racha salvada! 🛌 Usaste un día de descanso compasivo para mantener tu racha de ${initialized.streak} días.`
      };
    } else {
      // Reset streak
      initialized.streak = 1;
      initialized.lastActiveDate = today;
      return { 
        updatedProgress: initialized, 
        message: 'Tu racha se ha reiniciado, pero hoy es un excelente día para reconectar con tu bienestar. 🌱' 
      };
    }
  } else {
    // Reset streak
    initialized.streak = 1;
    initialized.lastActiveDate = today;
    return { updatedProgress: initialized };
  }
};

export const recordCompletedAction = (
  progress: UserProgress,
  action: { 
    type: 'video' | 'youtube' | 'text' | 'quiz' | 'evaluation' | 'reflectionTree' | 'audio' | 'upload' | 'feedbackForm' | 'cardGame' | 'finalChallenge' | 'interactiveInvisible' | 'reframeWall' | 'flipCards' | 'pillarsInteractive' | 'pondGame' | 'iframe' | 'interactiveGame' | 'reflection' | 'streak_bonus' | 'weekly_challenge_bonus';
    id: string; 
    title: string; 
    courseId?: string;
  },
  catalog: Course[]
): { updatedProgress: UserProgress; newCelebrations: CelebrationItem[] } => {
  let initialized = initializeGamification(progress);
  const today = getLocalDateString();
  const now = new Date().toISOString();
  
  // Calculate XP based on action type
  let xpEarned = 10; // default
  if (action.type === 'reflection' || action.type === 'reflectionTree' || action.type === 'interactiveInvisible') {
    xpEarned = 15;
    initialized.completedReflectionsCount = (initialized.completedReflectionsCount || 0) + 1;
  } else if (action.type === 'audio') {
    xpEarned = 25; // Meditaciones/Audios
    initialized.completedMeditationsCount = (initialized.completedMeditationsCount || 0) + 1;
  } else if (action.type === 'video' || action.type === 'youtube') {
    xpEarned = 20; // Cápsula
  } else if (['pondGame', 'flipCards', 'cardGame', 'reframeWall', 'pillarsInteractive', 'interactiveGame'].includes(action.type)) {
    xpEarned = 10; // Herramienta emocional
    initialized.emotionalToolsUsedCount = (initialized.emotionalToolsUsedCount || 0) + 1;
  }

  // Award points
  const prevLevel = Math.floor((initialized.xp || 0) / 100) + 1;
  initialized.xp = (initialized.xp || 0) + xpEarned;
  const newLevel = Math.floor((initialized.xp || 0) / 100) + 1;

  // Add study minutes
  initialized.studyMinutes = (initialized.studyMinutes || 0) + (action.type === 'audio' ? 15 : 10);

  // Record history
  initialized.activityHistory = initialized.activityHistory || [];
  initialized.activityHistory.push({
    date: today,
    type: action.type === 'reflection' ? 'reflection' : 'activity',
    id: action.id,
    title: action.title,
    xp: xpEarned
  });

  const newCelebrations: CelebrationItem[] = [];

  // Level Up Celebration
  if (newLevel > prevLevel) {
    newCelebrations.push({
      type: 'level',
      id: String(newLevel),
      title: '¡Subiste de Nivel!',
      description: `Has alcanzado el nivel ${newLevel} "${getLevelTitle(newLevel)}".`,
      icon: 'fa-angles-up',
      xpReward: 100
    });
    initialized.xp = (initialized.xp || 0) + 100; // Bonus on level up
  }

  // Update Weekly Challenges
  initialized.weeklyChallenges = (initialized.weeklyChallenges || generateWeeklyChallenges(new Date())).map(challenge => {
    if (challenge.completed) return challenge;
    
    let matches = false;
    if (challenge.type === 'capsule' && (action.type === 'video' || action.type === 'youtube' || action.type === 'text')) {
      matches = true;
    } else if (challenge.type === 'meditation' && action.type === 'audio') {
      matches = true;
    } else if (challenge.type === 'reflection' && (action.type === 'reflection' || action.type === 'reflectionTree' || action.type === 'interactiveInvisible')) {
      matches = true;
    }

    if (matches) {
      const nextVal = challenge.current + 1;
      const completedNow = nextVal >= challenge.target;
      if (completedNow) {
        initialized.xp = (initialized.xp || 0) + challenge.xpReward;
        newCelebrations.push({
          type: 'achievement',
          id: challenge.id,
          title: 'Reto Semanal Completado',
          description: `Completaste: "${challenge.title}"`,
          icon: 'fa-gift',
          xpReward: challenge.xpReward
        });
        
        // Log weekly challenge completion in history
        initialized.activityHistory!.push({
          date: today,
          type: 'weekly_challenge_bonus',
          id: challenge.id,
          title: `Reto semanal: ${challenge.title}`,
          xp: challenge.xpReward
        });
      }
      return { ...challenge, current: nextVal, completed: completedNow };
    }
    return challenge;
  });

  // Check overall weekly completion bonus
  const weeklyChallengesCompletedCount = initialized.weeklyChallenges.filter(c => c.completed).length;
  // If all challenges are completed, award extra bonus once
  const wasAllCompleted = progress.weeklyChallenges?.every(c => c.completed) || false;
  if (weeklyChallengesCompletedCount === 3 && !wasAllCompleted) {
    initialized.xp = (initialized.xp || 0) + 125;
    newCelebrations.push({
      type: 'achievement',
      id: 'weekly-bonus-all',
      title: '¡Retos Semanales Completados!',
      description: 'Superaste todos los retos de la semana.',
      icon: 'fa-box-open',
      xpReward: 125
    });

    initialized.activityHistory.push({
      date: today,
      type: 'weekly_challenge_bonus',
      id: 'weekly-bonus-all',
      title: 'Bono completo de retos semanales',
      xp: 125
    });
  }

  // Check achievements and badges
  const checkResult = checkBadgesAndAchievements(initialized, catalog);
  
  if (checkResult.newBadges.length > 0) {
    checkResult.newBadges.forEach(badge => {
      initialized.unlockedBadges = [...(initialized.unlockedBadges || []), badge];
      newCelebrations.push({
        type: 'badge',
        id: badge.id,
        title: badge.label,
        description: badge.description,
        icon: badge.icon,
        rarity: badge.rarity,
        xpReward: 100 // Reward for earning a badge
      });
      initialized.xp = (initialized.xp || 0) + 100;
    });
  }

  if (checkResult.newAchievements.length > 0) {
    checkResult.newAchievements.forEach(ach => {
      initialized.unlockedAchievements = [...(initialized.unlockedAchievements || []), ach];
      newCelebrations.push({
        type: 'achievement',
        id: ach.id,
        title: ach.title,
        description: ach.description,
        icon: ach.icon
      });
    });
  }

  return { updatedProgress: initialized, newCelebrations };
};
