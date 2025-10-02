import type { GoogleGenAI } from "@google/genai";

export interface User {
  name: string;
  avatarUrl: string;
  bio?: string;
  hasTakenDiagnostic?: boolean;
  diagnosticAnswers?: string[];
  recommendedCategory?: string;
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

export interface Activity {
  id: string;
  title: string;
  type: 'video' | 'youtube' | 'text' | 'quiz' | 'evaluation' | 'reflectionTree' | 'audio' | 'upload' | 'feedbackForm' | 'cardGame' | 'finalChallenge' | 'interactiveInvisible' | 'reframeWall' | 'flipCards' | 'pillarsInteractive' | 'pondGame' | 'iframe' | 'interactiveGame';
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
}

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
  completedAt?: string; // ISO date when course was fully completed
}

export interface UserProgress {
  courses: {
    [courseId: string]: CourseProgress;
  };
}

export interface Achievement {
    id: string;
    title: string;
    description: string;
    icon: string;
    date: string;
}
