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
import YouTubePlayer from '../components/activities/YouTubePlayer';
import FlipCards from '../components/activities/FlipCards';
import PillarsInteractive from '../components/activities/PillarsInteractive';
import PondGame from '../components/activities/PondGame';
import InteractiveGameActivity from '../components/activities/InteractiveGameActivity';

interface CoursePlayerProps {
  course: Course;
  progress: CourseProgress;
  markActivityAsCompleted: (courseId: string, activityId: string) => void;
  onExit: () => void;
  saveActivityAnswers?: (courseId: string, activityId: string, data: any) => void;
  updateLastAccessed?: (courseId: string, activityId: string) => void;
}

// Subcomponente para actividades de video que pueden incluir transcripción (content)
// y, opcionalmente, un quiz en la misma pantalla. Marca como listo solo cuando
// se haya terminado el video y, si hay preguntas, también el quiz.
const CombinedVideoActivity: React.FC<{
  activity: Activity;
  onReadyToComplete?: (ready: boolean) => void;
}> = ({ activity, onReadyToComplete }) => {
  const [videoDone, setVideoDone] = React.useState(false);
  const [quizDone, setQuizDone] = React.useState(false);
  const hasQuiz = Array.isArray(activity.questions) && activity.questions.length > 0;

  React.useEffect(() => {
    // Si requiere interacción (video o video+quiz), deshabilitar hasta cumplir condiciones
    if (hasQuiz) {
      onReadyToComplete?.(videoDone && quizDone);
    } else {
      onReadyToComplete?.(videoDone);
    }
  }, [videoDone, quizDone, hasQuiz]);

  return (
    <div className="space-y-6">
      <VideoPlayer src={activity.videoSrc || ''} onEnded={() => setVideoDone(true)} />
      {activity.content && activity.content.length > 0 && (
        <TextContent content={activity.content as string[]} />
      )}
      {hasQuiz && (
        <Quiz questions={activity.questions as any[]} ui={activity.ui} onReadyToComplete={(ready) => setQuizDone(!!ready)} />
      )}
    </div>
  );
};

const ActivityRenderer: React.FC<{ activity: Activity; answers?: any; onSaveAnswers?: (data: any) => void; onReadyToComplete?: (ready: boolean) => void }> = ({ activity, answers, onSaveAnswers, onReadyToComplete }) => {
    switch (activity.type) {
        case 'video':
            return (
              <CombinedVideoActivity activity={activity} onReadyToComplete={onReadyToComplete} />
            );
        case 'youtube':
            return (
              <div className="space-y-6">
                <YouTubePlayer url={activity.videoSrc || ''} />
                {activity.content && activity.content.length > 0 && (
                  <TextContent content={activity.content as string[]} />
                )}
              </div>
            );
        case 'text':
            return <TextContent content={activity.content as string[]} />;
        case 'iframe':
            // Render HTML content inside an iframe using srcDoc when provided,
            // otherwise fall back to a URL in videoSrc.
            return (
              <div className="w-full">
                {activity.content && activity.content.length > 0 ? (
                  <iframe
                    title={activity.title}
                    className="w-full border rounded-lg shadow-sm"
                    style={{ minHeight: 1100 }}
                    srcDoc={(activity.content as string[]).join('\n')}
                  />
                ) : (
                  <iframe
                    title={activity.title}
                    className="w-full border rounded-lg shadow-sm"
                    style={{ minHeight: 1100 }}
                    src={activity.videoSrc || ''}
                  />
                )}
              </div>
            );
        case 'quiz':
            return <Quiz questions={activity.questions as any[]} ui={activity.ui} onReadyToComplete={onReadyToComplete} />;
        case 'evaluation':
            return (
              <div className="space-y-6">
                {activity.content && activity.content.length > 0 && (
                  <TextContent content={activity.content as string[]} />
                )}
                {activity.audioSrc && (
                  <AudioPlayer src={activity.audioSrc} onEnded={() => { /* audio no bloquea */ }} />
                )}
                <ModuleEvaluation questions={activity.questions as any[]} onReadyToComplete={onReadyToComplete} />
              </div>
            );
        case 'reflectionTree':
            return <ReflectionTree onReadyToComplete={onReadyToComplete} />;
        case 'audio':
            return <AudioPlayer src={activity.audioSrc || ''} transcript={activity.content as string[] | undefined} onEnded={() => onReadyToComplete?.(true)} />;
        case 'interactiveGame':
            return (
              <InteractiveGameActivity
                title={activity.title}
                description={activity.description}
                instructions={activity.instructions}
                onComplete={() => onReadyToComplete?.(true)}
              />
            );
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
        case 'flipCards':
            return (
              <FlipCards
                heading={activity.description}
                imageSrc={activity.imageSrc}
                note={activity.introText}
                groups={activity.flipGroups || []}
                onReadyToComplete={onReadyToComplete}
              />
            );
        case 'pillarsInteractive':
            return <PillarsInteractive onReadyToComplete={onReadyToComplete} />;
        case 'pondGame':
            return (
              <div className="space-y-6">
                {activity.content && activity.content.length > 0 && (
                  <TextContent content={activity.content as string[]} />
                )}
                <PondGame onReadyToComplete={onReadyToComplete} />
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
  const [toast, setToast] = useState<string | null>(null);
  const showToast = (msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(null), 2200);
  };
  const [zoomSrc, setZoomSrc] = useState<string | null>(null);
  const closeZoom = () => setZoomSrc(null);
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeZoom(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

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
      showToast('Progreso guardado. Avanzando a la siguiente actividad...');
    } else {
      showToast('Actividad completada.');
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
    // No gating for textual or YouTube embeds (no ended event)
    if (type === 'text' || type === 'youtube' || type === 'iframe') return false;
    return true;
  };

  React.useEffect(() => {
    if (!activeActivity) return;
    setCanComplete(!requiresInteraction(activeActivity.type));
  }, [activeActivity?.id]);
  const getDisableHint = (activity?: Activity): string | null => {
    if (!activity) return null;
    switch (activity.type) {
      case 'video':
        return Array.isArray(activity.questions) && activity.questions.length > 0
          ? 'Reproduce el video y completa el quiz.'
          : 'Reproduce el video hasta el final.';
      case 'youtube':
        return null;
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
                    {!activeActivity.hideHeader && (
                      <>
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#4c1760] mb-2">{activeActivity.title}</h2>
                        <p className="text-[#00385b] font-semibold mb-6">{activeActivity.description}</p>
                      </>
                    )}
                    {activeActivity.imageSrc && activeActivity.type !== 'flipCards' && (
                      <div className="mb-6 flex justify-center">
                        {activeActivity.imageAltSrc ? (
                          <picture>
                            <source srcSet={activeActivity.imageSrc} type="image/svg+xml" />
                            <img
                              src={activeActivity.imageAltSrc}
                              alt={`Ilustración para ${activeActivity.title}`}
                              className="rounded-lg shadow-md w-full h-auto max-w-3xl cursor-zoom-in"
                              onClick={() => setZoomSrc(activeActivity.imageAltSrc || activeActivity.imageSrc!)}
                            />
                          </picture>
                        ) : (
                          <img
                            src={activeActivity.imageSrc}
                            alt={`Ilustración para ${activeActivity.title}`}
                            className="rounded-lg shadow-md w-full h-auto max-w-3xl cursor-zoom-in"
                            onClick={() => setZoomSrc(activeActivity.imageSrc!)}
                          />
                        )}
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
                    
                    {!isCompleted && (
                        <div className="mt-8 flex items-center justify-between">
                            <button
                                onClick={() => { updateLastAccessed?.(course.id, activeActivityId); showToast('Progreso guardado.'); setTimeout(() => onExit(), 800); }}
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
        {toast && (
          <div className="fixed bottom-6 right-6 bg-[#24668e] text-white px-4 py-3 rounded-lg shadow-lg text-sm sm:text-base animate-fade-in">
            <i className="fas fa-check-circle mr-2 text-white/90"></i>{toast}
          </div>
        )}
        {zoomSrc && (
          <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={closeZoom}>
            <div className="relative max-w-[95vw] max-h-[90vh] bg-white p-3 sm:p-4 rounded" onClick={(e) => e.stopPropagation()}>
              <img src={zoomSrc} alt="Infografía ampliada" className="w-auto h-auto max-w-[90vw] max-h-[82vh] rounded shadow-2xl" />
              <button
                aria-label="Cerrar"
                onClick={closeZoom}
                className="absolute -top-3 -right-3 bg-white text-[#101021] rounded-full w-9 h-9 shadow flex items-center justify-center hover:bg-[#f0f2f5]"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

export default CoursePlayer;
