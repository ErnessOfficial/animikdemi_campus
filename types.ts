import type { GoogleGenAI } from "@google/genai";

export interface User {
  name: string;
  avatarUrl: string;
  bio?: string;
  hasTakenDiagnostic?: boolean;
  diagnosticAnswers?: string[];
  recommendedCategory?: string;
  notifyCourses?: boolean;
  notifyCommunity?: boolean;
  notifyProgress?: boolean;
}

export interface Instructor {
    name: string;
    title: string;
    avatarUrl: string;
    bio: string;
}

export interface QuizOption {
  text: string;
  feedback: string;
}

export interface QuizQuestion {
  question: string;
  options: QuizOption[];
}

export interface DiagnosticOption {
    text: string;
    category: 'Autoconocimiento' | 'Gestión Emocional' | 'Habilidades Sociales';
}

export interface DiagnosticQuestion {
  question: string;
  options: DiagnosticOption[];
}

export interface EvaluationQuestion {
  prompt: string;
}

export interface Card {
    id: number;
    matchId: number;
    text: string;
    type: 'limiting' | 'empowering';
}

export interface InfoCard {
  title: string;
  body: string;
  color?: string;
}

export interface BaseActivity {
  id: string;
  title: string;
  type: 'video' | 'youtube' | 'text' | 'quiz' | 'evaluation' | 'reflectionTree' | 'audio' | 'upload' | 'feedbackForm' | 'cardGame' | 'finalChallenge' | 'interactiveInvisible' | 'reframeWall' | 'flipCards' | 'pillarsInteractive' | 'pondGame' | 'iframe' | 'interactiveGame' | 'sliderAssessment' | 'emotionWheel' | 'mythBuster' | 'interactiveScenario' | 'habitTrackerBuilder';
  description: string;
  videoSrc?: string;
  audioSrc?: string;
  content?: string[];
  questions?: QuizQuestion[] | EvaluationQuestion[];
  cards?: Card[];
  imageSrc?: string;
  imageAltSrc?: string;
  hideHeader?: boolean;
  flipGroups?: Array<{
    title: string;
    color?: string;
    cards: Array<{ front: string; back: string }>;
  }>;
  ui?: {
    optionBgColor?: string;
    optionTextColor?: string;
  };
  introText?: string;
  infoCards?: InfoCard[];
  closingText?: string;
  // Interactive Game (custom)
  gameType?: string;
  instructions?: string;
  treeConfig?: {
    categories: Array<{ id: string; title: string; icon: string; bgColor: string }>;
    bank: Record<string, string[]>;
    hideImage?: boolean;
  };
}

// 1. Radar de Auto-percepción
export interface SliderAssessmentActivity {
  id: string;
  type: 'sliderAssessment';
  title: string;
  description: string;
  domains: Array<{
    id: string;
    name: string;
    leftLabel: string;
    rightLabel: string;
  }>;
}

// 2. Rueda de Granularidad Emocional
export interface EmotionWheelActivity {
  id: string;
  type: 'emotionWheel';
  title: string;
  description: string;
  coreEmotions: Array<{
    name: string;
    color: string;
    nuances: string[];
    physicalSensation: string;
  }>;
}

// 3. Cazador de Mitos (Estilo Tinder Swipe)
export interface MythBusterActivity {
  id: string;
  type: 'mythBuster';
  title: string;
  description: string;
  statements: Array<{
    text: string;
    isMyth: boolean;
    explanation: string;
  }>;
}

// 4. Simulador de Escenarios Interpersonales
export interface InteractiveScenarioActivity {
  id: string;
  type: 'interactiveScenario';
  title: string;
  description: string;
  scenarios: Array<{
    context: string;
    options: Array<{
      text: string;
      isOptimal: boolean;
      consequence: string;
    }>;
  }>;
}

// 5. Tablero de Hábitos (Drag & Drop)
export interface HabitTrackerBuilderActivity {
  id: string;
  type: 'habitTrackerBuilder';
  title: string;
  description: string;
  habitsToChoose: Array<{
    category: string;
    text: string;
  }>;
  maxSelection: number;
}

export type Activity = BaseActivity & Partial<SliderAssessmentActivity & EmotionWheelActivity & MythBusterActivity & InteractiveScenarioActivity & HabitTrackerBuilderActivity>;

export interface Module {
  id: string;
  title: string;
  activities: Activity[];
}

export interface Course {
  id: string;
  title:string;
  subtitle: string;
  description: string;
  category: string;
  broadCategories: ('Autoconocimiento' | 'Gestión Emocional' | 'Habilidades Sociales')[];
  coverImage: string;
  instructor: Instructor;
  estimatedDurationMinutes?: number;
  learningObjectives: string[];
  modules: Module[];
}

export interface CompletionStatus {
  [moduleId: string]: {
    completed: boolean;
    activities: {
      [activityId: string]: boolean;
    };
  };
}

export interface CourseProgress {
  courseId: string;
  lastAccessedActivityId: string | null;
  completionStatus: CompletionStatus;
  percentage: number;
  answers?: {
    [activityId: string]: any;
  };
  startedAt?: string;
  completedAt?: string; // ISO date when course was fully completed
}

export interface GamificationBadge {
  id: string;
  label: string;
  icon: string; // fontawesome class suffix, e.g., 'fa-star'
  unlockedAt: string; // ISO date
  description: string;
  rarity: 'Común' | 'Poco común' | 'Épico' | 'Legendario' | 'Mítico';
}

export interface GamificationAchievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: string; // ISO date
}

export interface ActivityHistoryItem {
  date: string; // YYYY-MM-DD
  type: 'activity' | 'course' | 'reflection' | 'emotional_tool' | 'meditation' | 'certificate' | 'streak_bonus' | 'weekly_challenge_bonus';
  id: string;
  title: string;
  xp: number;
}

export interface WeeklyChallenge {
  id: string;
  title: string;
  target: number;
  current: number;
  xpReward: number;
  type: 'reflection' | 'meditation' | 'capsule' | 'any';
  completed: boolean;
}

export interface UserProgress {
  courses: {
    [courseId: string]: CourseProgress;
  };
  xp?: number;
  streak?: number;
  longestStreak?: number;
  lastActiveDate?: string; // YYYY-MM-DD
  restDays?: number;
  unlockedBadges?: GamificationBadge[];
  unlockedAchievements?: GamificationAchievement[];
  completedMeditationsCount?: number;
  completedReflectionsCount?: number;
  emotionalToolsUsedCount?: number;
  studyMinutes?: number;
  activityHistory?: ActivityHistoryItem[];
  weeklyChallenges?: WeeklyChallenge[];
  createdAt?: string;
}

export interface Achievement {
    id: string;
    title: string;
    description: string;
    icon: string;
    date: string;
}
