import React, { useState, useEffect } from 'react';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';

// Import types
import type { User, UserProgress, Course } from './types';

// Import data
import { initialUserProgress, courseCatalog, diagnosticTestQuestions } from './constants/platformData';
import { courseData as detailedCourseData } from './constants/courses/courseData';
import { courseDataMindfulness } from './constants/courses/courseDataMindfulness';

// Import components and pages
import Sidebar from './components/platform/Sidebar';
import Header from './components/platform/Header';
import Dashboard from './pages/Dashboard';
import CourseCatalogPage from './pages/CourseCatalogPage';
import ProfilePage from './pages/ProfilePage';
import CoursePlayer from './pages/CoursePlayer';
import CourseDetailPage from './pages/CourseDetailPage';
import ResourcesPage from './pages/ResourcesPage';
import GuidesAndManualsPage from './pages/resources/GuidesAndManualsPage';
import ComplementaryResourcesPage from './pages/resources/ComplementaryResourcesPage';
import InfographicsPage from './pages/resources/InfographicsPage';
import DiagnosticTestModal from './components/platform/DiagnosticTestModal';
import EnrollmentConfirmationModal from './components/platform/EnrollmentConfirmationModal';
import LoginPage from './pages/LoginPage';
import LoadingSpinner from './components/common/LoadingSpinner';
import DebugAuthPanel from './components/common/DebugAuthPanel';


export type View =
  | 'dashboard'
  | 'catalog'
  | 'my-courses'
  | 'community'
  | 'profile'
  | 'course-player'
  | 'course-detail'
  | 'resources'
  | 'resources-guides'
  | 'resources-infographics'
  | 'resources-complementary';

const App: React.FC = () => {
    const { isLoading, isAuthenticated, user: kindeUser, login, register, logout } = useKindeAuth();
    const bypassAuth = import.meta.env.VITE_BYPASS_AUTH === 'true';

    // State management
    const [user, setUser] = useState<User | null>(null);
    const [progress, setProgress] = useState<UserProgress>(initialUserProgress);
    const [view, setView] = useState<View>('dashboard');
    const [activeCourseId, setActiveCourseId] = useState<string | null>(null);
    const [courseToEnroll, setCourseToEnroll] = useState<Course | null>(null);
    const [showDiagnostic, setShowDiagnostic] = useState(false);

    useEffect(() => {
        if (bypassAuth) {
            const appUser: User = {
                name: 'Dev User',
                avatarUrl: '/images/instructor_avatar.png',
                bio: 'Usuario simulado para desarrollo',
                hasTakenDiagnostic: false,
            };
            setUser(appUser);
            const timer = setTimeout(() => setShowDiagnostic(true), 800);
            return () => clearTimeout(timer);
        }
        if (isAuthenticated && kindeUser) {
            const appUser: User = {
                // FIX: Corrected property names from snake_case to camelCase for Kinde user object.
                name: `${kindeUser.givenName || ''} ${kindeUser.familyName || ''}`.trim(),
                avatarUrl: kindeUser.picture || '/images/instructor_avatar.png',
                // Assuming these are stored/managed within the app's own backend in a real scenario
                bio: 'Aprendiz de por vida y entusiasta del crecimiento personal.',
                hasTakenDiagnostic: false, // This would be fetched from your DB
            };
            setUser(appUser);
            
            if (!appUser.hasTakenDiagnostic) {
                 const timer = setTimeout(() => setShowDiagnostic(true), 1000);
                 return () => clearTimeout(timer);
            }
        } else {
            setUser(null);
        }
    }, [bypassAuth, isAuthenticated, kindeUser]);
    
    // Handlers
    const handleNavigation = (newView: View) => {
        setView(newView);
        setActiveCourseId(null);
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
                    completionStatus: {}
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
    
    const handleUpdateUser = (updatedUser: Partial<User>) => {
        setUser(prev => prev ? ({ ...prev, ...updatedUser }) : null);
    };

    const markActivityAsCompleted = (courseId: string, activityId: string) => {
        setProgress(prevProgress => {
            const courseProgress = prevProgress.courses[courseId];
            if (!courseProgress) return prevProgress;

            const detailedCourse = courseCatalog.find(c => c.id === courseId);
            if (!detailedCourse) return prevProgress;

            let moduleId: string | null = null;
            for (const m of detailedCourse.modules) {
                if(m.activities.some(a => a.id === activityId)) {
                    moduleId = m.id;
                    break;
                }
            }

            if (!moduleId) return prevProgress;

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

            return {
                ...prevProgress,
                courses: {
                    ...prevProgress.courses,
                    [courseId]: {
                        ...courseProgress,
                        completionStatus: newCompletionStatus,
                        percentage,
                    }
                }
            }
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
                return <Dashboard user={user} progress={progress} onContinueCourse={handleContinueCourse} onExploreCourse={handleSelectCourse} onEnroll={handleEnroll} />;
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
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h1 className="text-2xl font-bold">Mis Cursos</h1>
                        <p className="mt-2 text-[#101021]/80">Esta página está en construcción.</p>
                    </div>
                );
            case 'community':
                return (
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h1 className="text-2xl font-bold">Comunidad</h1>
                        <p className="mt-2 text-[#101021]/80">Esta página está en construcción.</p>
                    </div>
                );
            case 'profile':
                return <ProfilePage user={user} progress={progress} onUpdateUser={handleUpdateUser} />;
            default:
                return <Dashboard user={user} progress={progress} onContinueCourse={handleContinueCourse} onExploreCourse={handleSelectCourse} onEnroll={handleEnroll} />;
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
            <div className="flex h-screen bg-[#f0f2f5] font-sans">
                <Sidebar activeView={view} onNavigate={handleNavigation} onLogout={() => logout()} />
                <main className="flex-1 flex flex-col h-screen">
                    <Header user={user} />
                    <div className="flex-1 p-6 sm:p-8 overflow-y-auto">
                        {renderContent()}
                    </div>
                </main>
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
            </div>
        );
    }

    return (
        <>
            {content}
            {import.meta.env.DEV && <DebugAuthPanel />}
        </>
    );
};

export default App;
