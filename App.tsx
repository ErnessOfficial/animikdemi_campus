import React, { useState, useEffect } from 'react';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';

// Import types
import type { User, UserProgress, Course } from './types';

// Import data
import { initialUserProgress, courseCatalog, diagnosticTestQuestions } from './constants/platformData';
import { courseData as detailedCourseData } from './constants/courses/courseData';
import { courseDataMindfulness } from './constants/courses/courseDataMindfulness';

// Import gamification helpers
import CelebrationOverlay, { CelebrationItem } from './components/platform/CelebrationOverlay';
import { recordCompletedAction, checkDailyStreak, initializeGamification } from './utils/gamification';

// Import components and pages
import Sidebar from './components/platform/Sidebar';
import MobileNav from './components/platform/MobileNav';
import Header from './components/platform/Header';
import Dashboard from './pages/Dashboard';
import CourseCatalogPage from './pages/CourseCatalogPage';
import ProfilePage from './pages/ProfilePage';
import MyCoursesPage from './pages/MyCoursesPage';
import CoursePlayer from './pages/CoursePlayer';
import CourseDetailPage from './pages/CourseDetailPage';
import ResourcesPage from './pages/ResourcesPage';
import GuidesAndManualsPage from './pages/resources/GuidesAndManualsPage';
import ComplementaryResourcesPage from './pages/resources/ComplementaryResourcesPage';
import InfographicsPage from './pages/resources/InfographicsPage';
import KitReflexivoPage from './pages/KitReflexivoPage';
import ShareInboxPage from './pages/ShareInboxPage';
import ComposeMessagePage from './pages/ComposeMessagePage';
import FileImportPage from './pages/FileImportPage';
import DiagnosticTestModal from './components/platform/DiagnosticTestModal';
import EnrollmentConfirmationModal from './components/platform/EnrollmentConfirmationModal';
import LoginPage from './pages/LoginPage';
import LoadingSpinner from './components/common/LoadingSpinner';
import DebugAuthPanel from './components/common/DebugAuthPanel';
import { assetPath } from './utils/paths';
import WhatIsAnimikroPage from './pages/WhatIsAnimikroPage';
import WelcomeReflectionModal from './components/platform/WelcomeReflectionModal';
import { welcomePhrases } from './constants/welcomePhrases';
import Footer from './components/platform/Footer';
import MedicalDisclaimerPage from './pages/MedicalDisclaimerPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import HelpPage from './pages/HelpPage';
import CookieConsentBanner from './components/platform/CookieConsentBanner';


export type View =
  | 'dashboard'
  | 'catalog'
  | 'my-courses'
  | 'community'
  | 'profile'
  | 'profile-certs'
  | 'profile-account'
  | 'profile-badges'
  | 'course-player'
  | 'course-detail'
  | 'resources'
  | 'resources-guides'
  | 'resources-infographics'
  | 'resources-complementary'
  | 'share'
  | 'compose'
  | 'file-open'
  | 'about'
  | 'medical-disclaimer'
  | 'privacy-policy'
  | 'cookie-policy'
  | 'terms-conditions'
  | 'help';

const viewPathMap: Partial<Record<View, string>> = {
  share: '/compartir',
  compose: '/compose',
  'file-open': '/abrir-archivo',
  'medical-disclaimer': '/disclaimer-medico',
  'privacy-policy': '/politica-privacidad',
  'cookie-policy': '/politica-cookies',
  'terms-conditions': '/terminos-condiciones',
  'profile-account': '/perfil-ajustes',
  'profile-badges': '/perfil-insignias',
  help: '/ayuda',
};

const pathViewMap: Record<string, View> = {
  '/compartir': 'share',
  '/compose': 'compose',
  '/abrir-archivo': 'file-open',
  '/disclaimer-medico': 'medical-disclaimer',
  '/politica-privacidad': 'privacy-policy',
  '/politica-cookies': 'cookie-policy',
  '/terminos-condiciones': 'terms-conditions',
  '/perfil-ajustes': 'profile-account',
  '/perfil-insignias': 'profile-badges',
  '/ayuda': 'help',
};

const resolveInitialView = (): View => {
  if (typeof window === 'undefined') return 'dashboard';
  const path = window.location.pathname;
  return pathViewMap[path] ?? 'dashboard';
};

const readShareParams = () => {
  if (typeof window === 'undefined') return { title: '', text: '', url: '' };
  const params = new URLSearchParams(window.location.search);
  return {
    title: params.get('titulo') || params.get('title') || '',
    text: params.get('texto') || params.get('text') || '',
    url: params.get('url') || '',
  };
};

const readComposeParams = () => {
  if (typeof window === 'undefined') return { to: '' };
  const params = new URLSearchParams(window.location.search);
  return {
    to: params.get('to') || '',
  };
};

function selectRandomWelcomePhrase(userName: string): string {
  if (welcomePhrases.length === 0) return '';
  const historyKey = `anik:reflection-history:v1:${userName}`;
  let shownIndices: number[] = [];
  try {
    const raw = localStorage.getItem(historyKey);
    if (raw) {
      shownIndices = JSON.parse(raw);
      if (!Array.isArray(shownIndices)) shownIndices = [];
    }
  } catch {}

  const maxHistorySize = 100;
  let availableIndices = welcomePhrases
    .map((_, idx) => idx)
    .filter(idx => !shownIndices.includes(idx));

  if (availableIndices.length === 0) {
    shownIndices = [];
    availableIndices = welcomePhrases.map((_, idx) => idx);
  }

  const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
  
  shownIndices.push(randomIndex);
  if (shownIndices.length > maxHistorySize) {
    shownIndices.shift();
  }

  try {
    localStorage.setItem(historyKey, JSON.stringify(shownIndices));
  } catch {}

  return welcomePhrases[randomIndex];
}

const App: React.FC = () => {
    const { isLoading, isAuthenticated, user: kindeUser, login, register, logout } = useKindeAuth();
    const bypassAuth = import.meta.env.VITE_BYPASS_AUTH === 'true';

    // State management
    const [user, setUser] = useState<User | null>(null);
    const [progress, setProgress] = useState<UserProgress>(initialUserProgress);
    const [view, setView] = useState<View>(() => resolveInitialView());
    const [activeCourseId, setActiveCourseId] = useState<string | null>(null);
    const [courseToEnroll, setCourseToEnroll] = useState<Course | null>(null);
    const [showDiagnostic, setShowDiagnostic] = useState(false);
    const [showReflection, setShowReflection] = useState(false);
    const [randomReflectionPhrase, setRandomReflectionPhrase] = useState('');
    const [shareDefaults, setShareDefaults] = useState(() => readShareParams());
    const [composeDefaults, setComposeDefaults] = useState(() => readComposeParams());
    const [swUpdateReady, setSwUpdateReady] = useState(false);
    const [swUpdating, setSwUpdating] = useState(false);

    // Gamification states
    const [pendingCelebrations, setPendingCelebrations] = useState<CelebrationItem[]>([]);
    const [streakChecked, setStreakChecked] = useState(false);
    const [appToast, setAppToast] = useState<string | null>(null);
    const showAppToast = (msg: string) => {
        setAppToast(msg);
        window.setTimeout(() => setAppToast(null), 3000);
    };

    const handleCookieConsentChange = (consent: 'all' | 'necessary') => {
        if (consent === 'all') {
            console.log('Cookies analíticas/opcionales permitidas. Cargando scripts analíticos... 📊');
            // Si en el futuro existiera algún script de analíticas (ej. gtag), se cargaría dinámicamente aquí.
        } else {
            console.log('Cookies opcionales rechazadas. Solo se ejecutan cookies estrictamente necesarias. 🔒');
        }
    };

    useEffect(() => {
        if (bypassAuth) {
            const appUser: User = {
                name: 'Dev User',
                avatarUrl: assetPath('images/instructor_avatar.png'),
                bio: 'Usuario simulado para desarrollo',
                hasTakenDiagnostic: false,
            };
            
            // Cargar datos de usuario desde localStorage si existen
            const userKey = `anik:user:v1:${appUser.name}`;
            try {
              const rawUser = localStorage.getItem(userKey);
              if (rawUser) {
                const parsedUser = JSON.parse(rawUser);
                appUser.hasTakenDiagnostic = parsedUser.hasTakenDiagnostic;
                appUser.recommendedCategory = parsedUser.recommendedCategory;
                appUser.diagnosticAnswers = parsedUser.diagnosticAnswers;
              }
            } catch {}

            setUser(appUser);
            // Cargar progreso desde localStorage si existe
            const key = `anik:progress:v1:${appUser.name}`;
            try {
              const raw = localStorage.getItem(key);
              if (raw) {
                const parsed = JSON.parse(raw);
                if (parsed && parsed.courses) setProgress(initializeGamification(parsed));
              } else {
                setProgress(initializeGamification(initialUserProgress));
              }
            } catch {}
            
            // Decidir si mostrar Diagnóstico o Reflexión de Bienvenida
            if (!appUser.hasTakenDiagnostic) {
                const timer = setTimeout(() => setShowDiagnostic(true), 800);
                return () => clearTimeout(timer);
            } else {
                const phrase = selectRandomWelcomePhrase(appUser.name);
                setRandomReflectionPhrase(phrase);
                const timer = setTimeout(() => setShowReflection(true), 800);
                return () => clearTimeout(timer);
            }
        }
        if (isAuthenticated && kindeUser) {
            const userName = `${kindeUser.givenName || ''} ${kindeUser.familyName || ''}`.trim();
            const appUser: User = {
                name: userName,
                avatarUrl: kindeUser.picture || assetPath('images/instructor_avatar.png'),
                bio: 'Aprendiz de por vida y entusiasta del crecimiento personal.',
                hasTakenDiagnostic: false,
            };
            
            // Cargar datos de usuario desde localStorage si existen
            const userKey = `anik:user:v1:${userName}`;
            try {
              const rawUser = localStorage.getItem(userKey);
              if (rawUser) {
                const parsedUser = JSON.parse(rawUser);
                appUser.hasTakenDiagnostic = parsedUser.hasTakenDiagnostic;
                appUser.recommendedCategory = parsedUser.recommendedCategory;
                appUser.diagnosticAnswers = parsedUser.diagnosticAnswers;
              }
            } catch {}

            setUser(appUser);
            // Cargar progreso desde localStorage si existe
            const key = `anik:progress:v1:${appUser.name || 'user'}`;
            try {
              const raw = localStorage.getItem(key);
              if (raw) {
                const parsed = JSON.parse(raw);
                if (parsed && parsed.courses) setProgress(initializeGamification(parsed));
              } else {
                setProgress(initializeGamification(initialUserProgress));
              }
            } catch {}
            
            // Decidir si mostrar Diagnóstico o Reflexión de Bienvenida
            if (!appUser.hasTakenDiagnostic) {
                 const timer = setTimeout(() => setShowDiagnostic(true), 1000);
                 return () => clearTimeout(timer);
            } else {
                 const phrase = selectRandomWelcomePhrase(userName);
                 setRandomReflectionPhrase(phrase);
                 const timer = setTimeout(() => setShowReflection(true), 1000);
                 return () => clearTimeout(timer);
            }
        } else {
            setUser(null);
        }
    }, [bypassAuth, isAuthenticated, kindeUser]);

    // Check daily streak when user and progress are loaded
    useEffect(() => {
        if (!user || streakChecked) return;
        
        const checkResult = checkDailyStreak(progress);
        setProgress(checkResult.updatedProgress);
        if (checkResult.message) {
            showAppToast(checkResult.message);
        }
        setStreakChecked(true);
    }, [user, streakChecked, progress]);

    // Persistir progreso en localStorage por usuario
    useEffect(() => {
      if (!user) return;
      const key = `anik:progress:v1:${user.name || 'user'}`;
      try {
        localStorage.setItem(key, JSON.stringify(progress));
      } catch {}
    }, [user, progress]);

    // Persistir perfil de usuario en localStorage
    useEffect(() => {
      if (!user) return;
      const key = `anik:user:v1:${user.name}`;
      try {
        localStorage.setItem(key, JSON.stringify(user));
      } catch {}
    }, [user]);
    
    // Handlers
    const handleNavigation = (newView: View) => {
        setView(newView);
        setActiveCourseId(null);
    };

    useEffect(() => {
      if (typeof window === 'undefined') return;
      const path = viewPathMap[view] ?? '/';
      const shouldPreserveSearch = view === 'share' || view === 'compose';
      const desiredUrl = shouldPreserveSearch ? `${path}${window.location.search}` : path;
      if (window.location.pathname !== path || (!shouldPreserveSearch && window.location.search)) {
        window.history.replaceState(null, '', desiredUrl);
      }
    }, [view]);

    useEffect(() => {
      if (view === 'share') {
        setShareDefaults(readShareParams());
      }
    }, [view]);

    useEffect(() => {
      if (view === 'compose') {
        setComposeDefaults(readComposeParams());
      }
    }, [view]);

    useEffect(() => {
      if (!('serviceWorker' in navigator)) return;
      const handleMessage = (event: MessageEvent) => {
        const data = event.data as { type?: string } | undefined;
        if (data?.type === 'SW_UPDATE_AVAILABLE') {
          setSwUpdateReady(true);
        }
      };
      navigator.serviceWorker.addEventListener('message', handleMessage);

      const handleControllerChange = () => {
        window.location.reload();
      };
      navigator.serviceWorker.addEventListener('controllerchange', handleControllerChange);

      return () => {
        navigator.serviceWorker.removeEventListener('message', handleMessage);
        navigator.serviceWorker.removeEventListener('controllerchange', handleControllerChange);
      };
    }, []);

    const handleRefreshApp = async () => {
      if (!('serviceWorker' in navigator)) return;
      setSwUpdating(true);
      try {
        const registration = await navigator.serviceWorker.getRegistration();
        registration?.waiting?.postMessage({ type: 'SKIP_WAITING' });
      } catch {
        setSwUpdating(false);
        setSwUpdateReady(false);
      }
    };
    
    const handleDiagnosticComplete = (answers: string[], recommendedCategory: string) => {
       if(!user) return;
        setUser(prevUser => prevUser ? ({
            ...prevUser,
            hasTakenDiagnostic: true,
            diagnosticAnswers: answers,
            recommendedCategory: recommendedCategory,
        }) : null);
        setShowDiagnostic(false);
    };

    const handleSelectCourse = (courseId: string) => {
        setActiveCourseId(courseId);
        setView('course-detail');
    };

    const handleEnroll = (courseId: string) => {
        const course = courseCatalog.find(c => c.id === courseId);
        if (course) {
            setCourseToEnroll(course);
        }
    };
    
    const confirmEnrollment = () => {
        if (!courseToEnroll) return;
        
        const detailedCourse = courseCatalog.find(c => c.id === courseToEnroll.id);
        
        const newProgress: UserProgress = {
            ...progress,
            courses: {
                ...progress.courses,
                [courseToEnroll.id]: {
                    courseId: courseToEnroll.id,
                    lastAccessedActivityId: null,
                    percentage: 0,
                    completionStatus: {},
                    startedAt: new Date().toISOString()
                }
            }
        };

        if (detailedCourse) {
            const initialStatus: any = {};
            detailedCourse.modules.forEach(module => {
                initialStatus[module.id] = {
                    completed: false,
                    activities: module.activities.reduce((acc, activity) => {
                        acc[activity.id] = false;
                        return acc;
                    }, {} as Record<string, boolean>)
                };
            });
            newProgress.courses[courseToEnroll.id].completionStatus = initialStatus;
            newProgress.courses[courseToEnroll.id].lastAccessedActivityId = detailedCourse.modules[0].activities[0].id;
        }

        setProgress(newProgress);
        setActiveCourseId(courseToEnroll.id);
        setView('course-player');
        setCourseToEnroll(null);
    };
    
    const handleContinueCourse = (courseId: string) => {
        setActiveCourseId(courseId);
        setView('course-player');
    };

    const updateLastAccessed = (courseId: string, activityId: string) => {
        setProgress(prev => {
            const courseProgress = prev.courses[courseId];
            if (!courseProgress) return prev;
            return {
                ...prev,
                courses: {
                    ...prev.courses,
                    [courseId]: {
                        ...courseProgress,
                        lastAccessedActivityId: activityId,
                    }
                }
            };
        });
    };
    
    const handleUpdateUser = (updatedUser: Partial<User>) => {
        setUser(prev => prev ? ({ ...prev, ...updatedUser }) : null);
    };

    const handleReflectionCompleted = () => {
        const actionResult = recordCompletedAction(
            progress,
            { type: 'reflection', id: 'kit-reflexivo-chat', title: 'Reflexión en Kit Reflexivo' },
            courseCatalog
        );
        setProgress(actionResult.updatedProgress);
        if (actionResult.newCelebrations.length > 0) {
            setPendingCelebrations(prevCel => [...prevCel, ...actionResult.newCelebrations]);
        }
        showAppToast('¡Reflexión registrada! +15 XP obtenidos 🌿');
    };

    const markActivityAsCompleted = (courseId: string, activityId: string) => {
        const courseProgress = progress.courses[courseId];
        if (!courseProgress) return;

        const detailedCourse = courseCatalog.find(c => c.id === courseId);
        if (!detailedCourse) return;

        let moduleId: string | null = null;
        for (const m of detailedCourse.modules) {
            if (m.activities.some(a => a.id === activityId)) {
                moduleId = m.id;
                break;
            }
        }

        if (!moduleId) return;

        const wasActivityCompleted = courseProgress.completionStatus[moduleId]?.activities[activityId];

        const newCompletionStatus = { ...courseProgress.completionStatus };
        if (!newCompletionStatus[moduleId]) {
            newCompletionStatus[moduleId] = { completed: false, activities: {} };
        }
        newCompletionStatus[moduleId].activities[activityId] = true;

        const moduleActivities = detailedCourse.modules.find(m => m.id === moduleId)!.activities;
        const completedActivitiesInModule = Object.values(newCompletionStatus[moduleId].activities).filter(Boolean).length;
        if (completedActivitiesInModule === moduleActivities.length) {
            newCompletionStatus[moduleId].completed = true;
        }

        let totalActivities = 0;
        let totalCompleted = 0;
        detailedCourse.modules.forEach(m => {
            totalActivities += m.activities.length;
            totalCompleted += Object.values(newCompletionStatus[m.id]?.activities || {}).filter(Boolean).length;
        });
        const percentage = totalActivities > 0 ? (totalCompleted / totalActivities) * 100 : 0;

        const isNowCompleted = totalCompleted === totalActivities && totalActivities > 0;
        const nextCompletedAt = isNowCompleted && !courseProgress.completedAt ? new Date().toISOString() : courseProgress.completedAt;

        let currentProgress: UserProgress = {
            ...progress,
            courses: {
                ...progress.courses,
                [courseId]: {
                    ...courseProgress,
                    completionStatus: newCompletionStatus,
                    percentage,
                    completedAt: nextCompletedAt,
                }
            }
        };

        let newCels: CelebrationItem[] = [];

        if (!wasActivityCompleted) {
            const activityObj = detailedCourse.modules.find(m => m.id === moduleId)?.activities.find(a => a.id === activityId);
            const actTitle = activityObj?.title || 'Actividad';
            const actType = activityObj?.type || 'text';

            const actionResult = recordCompletedAction(
                currentProgress,
                { type: actType, id: activityId, title: actTitle, courseId },
                courseCatalog
            );
            currentProgress = actionResult.updatedProgress;
            
            if (actionResult.newCelebrations.length > 0) {
                newCels = [...newCels, ...actionResult.newCelebrations];
            }

            if (isNowCompleted && !courseProgress.completedAt) {
                const isProgram = courseId.startsWith('programa') || detailedCourse.title.toLowerCase().includes('programa');
                const xpForCourse = isProgram ? 500 : 100;
                
                const courseResult = recordCompletedAction(
                    currentProgress,
                    { 
                      type: isProgram ? 'pillarsInteractive' : 'finalChallenge', 
                      id: courseId, 
                      title: `Completado: ${detailedCourse.title}`, 
                      courseId 
                    },
                    courseCatalog
                );
                
                currentProgress = courseResult.updatedProgress;
                currentProgress.xp = (currentProgress.xp || 0) + xpForCourse + 200;
                
                newCels = [
                  ...newCels,
                  {
                    type: 'course',
                    id: courseId,
                    title: '¡Curso Completado!',
                    description: `Completaste con éxito el curso: ${detailedCourse.title}. +200 XP por tu Certificado y +${xpForCourse} XP por finalizar.`,
                    icon: 'fa-certificate',
                    xpReward: xpForCourse + 200
                  },
                  ...courseResult.newCelebrations
                ];
            }
        }

        setProgress(currentProgress);
        if (newCels.length > 0) {
            setPendingCelebrations(prevCel => [...prevCel, ...newCels]);
        }
    };

    const saveActivityAnswers = (courseId: string, activityId: string, data: any) => {
        setProgress(prev => {
            const courseProgress = prev.courses[courseId];
            if (!courseProgress) return prev;
            const updated: UserProgress = {
                ...prev,
                courses: {
                    ...prev.courses,
                    [courseId]: {
                        ...courseProgress,
                        answers: {
                            ...(courseProgress.answers || {}),
                            [activityId]: data,
                        }
                    }
                }
            };
            return updated;
        });
    };
    
    // Render logic for authenticated user
    const renderContent = () => {
        if (view === 'course-player' && activeCourseId) {
            const detailedCourse = courseCatalog.find(c => c.id === activeCourseId);
            if (detailedCourse) {
                 return <CoursePlayer 
                            course={detailedCourse} 
                            progress={progress.courses[activeCourseId]}
                            markActivityAsCompleted={markActivityAsCompleted}
                            saveActivityAnswers={saveActivityAnswers}
                            updateLastAccessed={updateLastAccessed}
                            onExit={() => handleNavigation('dashboard')}
                        />;
            } else {
                 return (
                    <div className="text-center p-8 bg-white rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-[#101021]">Datos del curso no disponibles</h2>
                        <p className="mt-2 text-[#101021]/80">Esto es una demostración. Solo los cursos con contenido detallado están completamente implementados.</p>
                        <button onClick={() => handleNavigation('dashboard')} className="mt-6 bg-[#24668e] text-white font-bold py-2 px-6 rounded-lg hover:bg-[#1a4a69] transition">
                            Volver al Dashboard
                        </button>
                    </div>
                 )
            }
        }

        if (view === 'course-detail' && activeCourseId) {
            const course = courseCatalog.find(c => c.id === activeCourseId);
            if(course) {
                const detailedCourse = course;
                return <CourseDetailPage 
                            course={detailedCourse} 
                            progress={progress} 
                            onEnroll={handleEnroll}
                            onGoToCourse={handleContinueCourse}
                            onBack={() => handleNavigation('catalog')}
                        />
            }
        }
        
        switch (view) {
            case 'dashboard':
                return <Dashboard user={user} progress={progress} onContinueCourse={handleContinueCourse} onExploreCourse={handleSelectCourse} onEnroll={handleEnroll} onNavigate={handleNavigation} />;
            case 'catalog':
                return <CourseCatalogPage progress={progress} onSelectCourse={handleSelectCourse} onEnroll={handleEnroll} />;
            case 'resources':
                return <ResourcesPage onNavigate={handleNavigation} />;
            case 'resources-guides':
                return <GuidesAndManualsPage onBack={() => handleNavigation('resources')} />;
            case 'resources-infographics':
                return <InfographicsPage onBack={() => handleNavigation('resources')} />;
            case 'resources-complementary':
                return <ComplementaryResourcesPage onBack={() => handleNavigation('resources')} />;
            case 'my-courses':
                return (
                    <MyCoursesPage 
                        progress={progress} 
                        onContinueCourse={handleContinueCourse} 
                        onNavigateToCertificates={() => handleNavigation('profile-certs')} 
                    />
                );
            case 'community':
                return <KitReflexivoPage onReflectionCompleted={handleReflectionCompleted} />;
            case 'about':
                return <WhatIsAnimikroPage />;
            case 'share':
                return <ShareInboxPage initialData={shareDefaults} onBack={() => handleNavigation('dashboard')} />;
            case 'compose':
                return <ComposeMessagePage defaultTo={composeDefaults.to} onBack={() => handleNavigation('dashboard')} />;
            case 'file-open':
                return <FileImportPage onBack={() => handleNavigation('dashboard')} />;
            case 'profile':
                return <ProfilePage user={user} progress={progress} onUpdateUser={handleUpdateUser} initialTab="personal" />;
            case 'profile-certs':
                return <ProfilePage user={user} progress={progress} onUpdateUser={handleUpdateUser} initialTab="certs" />;
            case 'profile-account':
                return <ProfilePage user={user} progress={progress} onUpdateUser={handleUpdateUser} initialTab="account" />;
            case 'profile-badges':
                return <ProfilePage user={user} progress={progress} onUpdateUser={handleUpdateUser} initialTab="badges" />;
            case 'medical-disclaimer':
                return <MedicalDisclaimerPage onBack={() => handleNavigation('dashboard')} />;
            case 'privacy-policy':
                return <PrivacyPolicyPage onBack={() => handleNavigation('dashboard')} />;
            case 'cookie-policy':
                return <CookiePolicyPage onBack={() => handleNavigation('dashboard')} />;
            case 'terms-conditions':
                return <TermsConditionsPage onBack={() => handleNavigation('dashboard')} />;
            case 'help':
                return <HelpPage />;
            default:
                return <Dashboard user={user} progress={progress} onContinueCourse={handleContinueCourse} onExploreCourse={handleSelectCourse} onEnroll={handleEnroll} onNavigate={handleNavigation} />;
        }
    };
    
    const uiLoading = bypassAuth ? false : isLoading;
    const uiAuthenticated = bypassAuth ? true : isAuthenticated;

    let content: React.ReactNode = null;
    if (uiLoading) {
        content = <LoadingSpinner />;
    } else if (!uiAuthenticated || !user) {
        content = <LoginPage onLogin={() => login()} onRegister={() => register()} />;
    } else {
        content = (
            <div className="min-h-screen bg-[#f0f2f5] font-sans">
                <div className="flex flex-col lg:flex-row min-h-screen">
                    <div className="hidden lg:flex lg:flex-shrink-0">
                        <Sidebar activeView={view} onNavigate={handleNavigation} onLogout={() => logout()} />
                    </div>
                    <main className="flex-1 flex flex-col min-h-screen">
                        <MobileNav
                            activeView={view}
                            onNavigate={handleNavigation}
                            onLogout={() => logout()}
                        />
                        <Header 
                            user={user} 
                            progress={progress}
                            onNavigate={handleNavigation} 
                            onLogout={() => logout()} 
                        />
                        <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto flex flex-col">
                            <div className="flex-grow pb-8 flex flex-col">
                                {renderContent()}
                            </div>
                            <Footer onNavigate={handleNavigation} />
                        </div>
                    </main>
                </div>
                {showDiagnostic && (
                    <DiagnosticTestModal 
                        questions={diagnosticTestQuestions}
                        onComplete={handleDiagnosticComplete}
                    />
                )}
                {courseToEnroll && (
                    <EnrollmentConfirmationModal 
                        course={courseToEnroll}
                        onConfirm={confirmEnrollment}
                        onCancel={() => setCourseToEnroll(null)}
                    />
                )}
                {showReflection && (
                    <WelcomeReflectionModal 
                        phrase={randomReflectionPhrase}
                        onClose={() => setShowReflection(false)}
                    />
                )}
            </div>
        );
    }

    return (
        <>
            {content}
            {pendingCelebrations.length > 0 && (
              <CelebrationOverlay 
                item={pendingCelebrations[0]} 
                onClose={() => setPendingCelebrations(prev => prev.slice(1))} 
              />
            )}
            {appToast && (
              <div className="fixed bottom-6 right-6 bg-[#24668e] text-white px-4 py-3 rounded-xl shadow-lg z-50 text-sm sm:text-base animate-fade-in flex items-center gap-2 border border-white/10">
                <i className="fas fa-info-circle text-white/90"></i>
                <span>{appToast}</span>
              </div>
            )}
            {swUpdateReady && (
              <div className="fixed bottom-4 right-4 z-50 max-w-xs rounded-2xl bg-[#101021] text-white shadow-lg p-4 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <i className="fas fa-arrow-rotate-right text-[#6e4380]"></i>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Hay una actualización</p>
                    <p className="text-xs text-white/80 mt-1">Reinicia la aplicación para cargar la última versión.</p>
                  </div>
                </div>
                <button
                  onClick={handleRefreshApp}
                  disabled={swUpdating}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#6e4380] px-4 py-2 text-sm font-semibold hover:bg-[#4c1760] disabled:opacity-60"
                >
                  <i className="fas fa-sync"></i>
                  {swUpdating ? 'Actualizando…' : 'Actualizar'}
                </button>
              </div>
            )}
            {import.meta.env.DEV && <DebugAuthPanel />}
            <CookieConsentBanner onConsentChange={handleCookieConsentChange} />
        </>
    );
};

export default App;
