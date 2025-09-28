import type { Course, Activity } from '../types';

const ACTIVITY_MINUTES: Record<Activity['type'], number> = {
  video: 6,
  youtube: 6,
  audio: 4,
  text: 3,
  quiz: 4,
  evaluation: 5,
  reflectionTree: 6,
  upload: 5,
  feedbackForm: 6,
  cardGame: 8,
  finalChallenge: 10,
  interactiveInvisible: 7,
  reframeWall: 7,
  flipCards: 6,
  pillarsInteractive: 10,
  pondGame: 8,
};

// Additional overhead per module (navigation, reading headings)
const PER_MODULE_OVERHEAD_MIN = 2;

export function estimateCourseDurationMinutes(course: Course): number {
  if (typeof course.estimatedDurationMinutes === 'number' && course.estimatedDurationMinutes > 0) {
    return course.estimatedDurationMinutes;
  }
  if (!course.modules || course.modules.length === 0) return 0;
  let total = 0;
  for (const mod of course.modules) {
    total += PER_MODULE_OVERHEAD_MIN;
    for (const act of (mod.activities || [])) {
      total += ACTIVITY_MINUTES[act.type] ?? 4;
    }
  }
  return Math.max(0, Math.round(total));
}

export function formatDuration(mins: number): string {
  if (!Number.isFinite(mins) || mins <= 0) return 'N/D';
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  if (h > 0 && m > 0) return `${h} h ${m} min`;
  if (h > 0) return `${h} h`;
  return `${m} min`;
}

