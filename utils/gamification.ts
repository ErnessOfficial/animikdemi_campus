import type { Course, UserProgress } from '../types';
import { courseCategories } from '../constants/platformData';

export interface GamificationBadge {
  id: string;
  label: string;
  icon: string; // fontawesome class suffix, e.g., 'fa-star'
}

export interface GamificationStats {
  points: number;
  level: number;
  currentToNext: number; // 0-100
  completedCourses: number;
  badges: GamificationBadge[];
  areasCompleted: number;
  areasTotal: number;
  areaBadges: GamificationBadge[];
  areasLevel: number; // 1 si completó al menos un curso de cada área
}

export const computeGamification = (progress: UserProgress, catalog: Course[]): GamificationStats => {
  let totalActivities = 0;
  let completedActivities = 0;
  let completedCourses = 0;

  for (const course of catalog) {
    const p = progress.courses[course.id];
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
    totalActivities += courseTotal;
    completedActivities += courseCompleted;
    if (courseTotal > 0 && courseCompleted === courseTotal) completedCourses += 1;
  }

  const points = completedActivities * 10; // 10 puntos por actividad completada
  const level = Math.floor(points / 100) + 1; // cada 100 puntos sube de nivel
  const currentToNext = Math.min(100, points % 100);

  const badges: GamificationBadge[] = [];
  if (completedActivities >= 1) badges.push({ id: 'first-step', label: 'Primer paso', icon: 'fa-shoe-prints' });
  if (completedCourses >= 1) badges.push({ id: 'first-course', label: 'Primer curso', icon: 'fa-trophy' });
  if (points >= 300) badges.push({ id: 'consistency', label: 'Constancia', icon: 'fa-calendar-check' });

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
    const p = progress.courses[course.id];
    if (!p) continue;
    // Determinar si el curso está completado
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
  }));

  if (areasLevel === 1) badges.push({ id: 'areas-master', label: 'Bienestar Integral', icon: 'fa-layer-group' });

  return { points, level, currentToNext, completedCourses, badges, areasCompleted, areasTotal, areaBadges, areasLevel };
};
