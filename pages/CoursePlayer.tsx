import React, { useState } from 'react';
import type { Course, CourseProgress, Module as ModuleType, Activity } from '../types';

// Import individual activity components
import VideoPlayer from '../components/activities/VideoPlayer';
import TextContent from '../components/activities/TextContent';
import Quiz from '../components/activities/Quiz';
import ModuleEvaluation from '../components/activities/ModuleEvaluation';
import ReflectionTree from '../components/activities/ReflectionTree';
import AudioPlayer from '../components/activities/AudioPlayer';
import FileUpload from '../components/activities/FileUpload';
import FeedbackForm from '../components/activities/FeedbackForm';
import CardMatchingGame from '../components/activities/CardMatchingGame';
import FinalChallenge from '../components/activities/FinalChallenge';
import CourseSidebar from '../components/course/CourseSidebar';
import InfoCards from '../components/activities/InfoCards';
import InvisibleWall from '../components/activities/InvisibleWall';
import ReframeWall from '../components/activities/ReframeWall';

interface CoursePlayerProps {
  course: Course;
  progress: CourseProgress;
  markActivityAsCompleted: (courseId: string, activityId: string) => void;
  onExit: () => void;
  saveActivityAnswers?: (courseId: string, activityId: string, data: any) => void;
  updateLastAccessed?: (courseId: string, activityId: string) => void;
}

const ActivityRenderer: React.FC<{ activity: Activity; answers?: any; onSaveAnswers?: (data: any) => void; onReadyToComplete?: (ready: boolean) => void }> = ({ activity, answers, onSaveAnswers, onReadyToComplete }) => {
    switch (activity.type) {
        case 'video':
            return (
              <div className="space-y-6">
                <VideoPlayer src={activity.videoSrc || ''} onEnded={() => onReadyToComplete?.(true)} />
                {activity.content && activity.content.length > 0 && (
                  <TextContent content={activity.content as string[]} />
                )}
              </div>
            );
        case 'text':
            return <TextContent content={activity.content as string[]} />;
        case 'quiz':
            return <Quiz questions={activity.questions as any[]} ui={activity.ui} onReadyToComplete={onReadyToComplete} />;
        case 'evaluation':
            return <ModuleEvaluation questions={activity.questions as any[]} />;
        case 'reflectionTree':
            return <ReflectionTree onReadyToComplete={onReadyToComplete} />;
        case 'audio':
            return <AudioPlayer src={activity.audioSrc || ''} transcript={activity.content as string[] | undefined} onEnded={() => onReadyToComplete?.(true)} />;
        case 'upload':
            return (
              <div className="space-y-6">
                {activity.introText && (
                  <p className="text-[#00385b] font-semibold">{activity.introText}</p>
                )}
                {activity.infoCards && activity.infoCards.length > 0 && (
                  <InfoCards cards={activity.infoCards} />
                )}
                {activity.closingText && (
                  <p className="text-[#101021]">{activity.closingText}</p>
                )}
                <FileUpload onReadyToComplete={onReadyToComplete} />
              </div>
            );
        case 'feedbackForm':
            return <FeedbackForm onReadyToComplete={onReadyToComplete} />;
        case 'cardGame':
            return <CardMatchingGame cards={activity.cards || []} onReadyToComplete={onReadyToComplete} />;
        case 'interactiveInvisible':
            return <InvisibleWall initial={answers} onSave={onSaveAnswers} onReadyToComplete={onReadyToComplete} />;
        case 'reframeWall':
            return <ReframeWall initial={answers} onSave={onSaveAnswers} onReadyToComplete={onReadyToComplete} />;
        case 'finalChallenge':
            return <FinalChallenge onReadyToComplete={onReadyToComplete} />;
        default:
            return <p>Actividad no encontrada.</p>;
    }
};


const CoursePlayer: React.FC<CoursePlayerProps> = ({ course, progress, markActivityAsCompleted, onExit, saveActivityAnswers, updateLastAccessed }) => {
  const [activeActivityId, setActiveActivityId] = useState<string>(progress.lastAccessedActivityId || course.modules[0].activities[0].id);

  const handleSelectActivity = (activityId: string) => {
    setActiveActivityId(activityId);
    updateLastAccessed?.(course.id, activityId);
  };
  
  const handleMarkAsCompleted = (activityId: string) => {
    markActivityAsCompleted(course.id, activityId);
    // Avanzar automáticamente a la siguiente actividad si existe
    // Buscar índices actuales
    let nextActivityId: string | null = null;
    outer: for (let mi = 0; mi < course.modules.length; mi++) {
      const mod = course.modules[mi];
      const idx = mod.activities.findIndex(a => a.id === activityId);
      if (idx !== -1) {
        if (idx + 1 < mod.activities.length) {
          nextActivityId = mod.activities[idx + 1].id;
        } else if (mi + 1 < course.modules.length) {
          // Pasar al primer elemento del siguiente módulo
          const nextMod = course.modules[mi + 1];
          if (nextMod.activities.length > 0) nextActivityId = nextMod.activities[0].id;
        }
        break outer;
      }
    }
    if (nextActivityId) {
      setActiveActivityId(nextActivityId);
      updateLastAccessed?.(course.id, nextActivityId);
    }
  };

  const findActiveContent = () => {
    let activeModule: ModuleType | undefined;
    let activeActivity: Activity | undefined;

    for (const mod of course.modules) {
        const foundActivity = mod.activities.find(act => act.id === activeActivityId);
        if (foundActivity) {
            activeModule = mod;
            activeActivity = foundActivity;
            break;
        }
    }
    return { activeModule, activeActivity };
  };

  const { activeModule, activeActivity } = findActiveContent();
  const [canComplete, setCanComplete] = useState<boolean>(true);

  const requiresInteraction = (type: Activity['type']) => {
    return type !== 'text';
  };

  React.useEffect(() => {
    if (!activeActivity) return;
    setCanComplete(!requiresInteraction(activeActivity.type));
  }, [activeActivity?.id]);
  const getDisableHint = (activity?: Activity): string | null => {
    if (!activity) return null;
    switch (activity.type) {
      case 'video':
        return 'Reproduce el video hasta el final.';
      case 'audio':
        return 'Reproduce el audio hasta el final.';
      case 'quiz':
        return 'Responde todas las preguntas del cuestionario.';
      case 'reflectionTree':
        return 'Añade al menos un elemento al árbol.';
      case 'cardGame':
        return 'Resuelve todas las parejas del juego.';
      case 'upload':
        return 'Selecciona un archivo para subir.';
      case 'feedbackForm':
        return 'Completa al menos una respuesta.';
      case 'interactiveInvisible':
        return 'Completa los campos de la reflexión.';
      case 'reframeWall':
        return 'Completa las creencias y la acción de compromiso.';
      case 'finalChallenge':
        return 'Escribe tu plan en el recuadro.';
      default:
        return null;
    }
  };
  const isCompleted = activeModule && activeActivity ? progress.completionStatus[activeModule.id]?.activities[activeActivity.id] || false : false;

  return (
    <div className="flex flex-col md:flex-row gap-8 animate-fade-in">
        <div className="w-full md:w-80 lg:w-96 flex-shrink-0">
            <CourseSidebar
                course={course}
                activeActivityId={activeActivityId}
                completionStatus={progress.completionStatus}
                onSelectActivity={handleSelectActivity}
                onExit={onExit}
            />
        </div>
        <div className="flex-1">
             {activeModule && activeActivity ? (
                <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-[#101021]/10">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#4c1760] mb-2">{activeActivity.title}</h2>
                    <p className="text-[#00385b] font-semibold mb-6">{activeActivity.description}</p>
                    {(activeActivity.type === 'reflectionTree' || activeActivity.type === 'cardGame') && activeActivity.imageSrc && (
                      <div className="mb-6 flex justify-center">
                        <img
                          src={activeActivity.imageSrc}
                          alt={`Ilustración para ${activeActivity.title}`}
                          className="rounded-lg shadow-md max-w-full h-auto sm:max-w-lg"
                        />
                      </div>
                    )}
                    <div className="prose max-w-none prose-slate">
                        <ActivityRenderer 
                          activity={activeActivity} 
                          answers={progress.answers?.[activeActivity.id]}
                          onSaveAnswers={saveActivityAnswers ? (data) => saveActivityAnswers(course.id, activeActivity.id, data) : undefined}
                          onReadyToComplete={(ready) => setCanComplete(!!ready)}
                        />
                    </div>
                    {activeActivity.type !== 'reflectionTree' && activeActivity.imageSrc && (
                      <div className="mt-8 flex justify-center">
                        <img 
                          src={activeActivity.imageSrc} 
                          alt={`Ilustración para ${activeActivity.title}`} 
                          className="rounded-lg shadow-md max-w-full h-auto sm:max-w-md" 
                        />
                      </div>
                    )}
                    {!isCompleted && (
                        <div className="mt-8 flex items-center justify-between">
                            <button
                                onClick={() => { updateLastAccessed?.(course.id, activeActivityId); onExit(); }}
                                className="bg-[#101021]/10 text-[#101021] font-semibold py-2 px-4 rounded-lg hover:bg-[#101021]/20 transition"
                            >
                                Guardar y salir
                            </button>
                            <div className="flex flex-col items-end gap-2">
                              {!canComplete && requiresInteraction(activeActivity.type) && (
                                <div className="text-xs text-[#101021]/70">
                                  <i className="fas fa-info-circle mr-1 text-[#24668e]"></i>
                                  {getDisableHint(activeActivity)}
                                </div>
                              )}
                              <button
                                  onClick={() => handleMarkAsCompleted(activeActivity.id)}
                                  disabled={!canComplete}
                                  className={`font-bold py-2 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-md ${canComplete ? 'bg-[#24668e] text-white hover:bg-[#1a4a69]' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
                              >
                                  Marcar como completado
                              </button>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div className="flex items-center justify-center h-full">
                <p className="text-xl text-[#2b3244]/70">Selecciona una actividad para comenzar.</p>
                </div>
            )}
        </div>
    </div>
  );
};

export default CoursePlayer;
