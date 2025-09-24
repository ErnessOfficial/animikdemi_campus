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

interface CoursePlayerProps {
  course: Course;
  progress: CourseProgress;
  markActivityAsCompleted: (courseId: string, activityId: string) => void;
  onExit: () => void;
}

const ActivityRenderer: React.FC<{ activity: Activity }> = ({ activity }) => {
    switch (activity.type) {
        case 'video':
            return <VideoPlayer src={activity.videoSrc || ''} />;
        case 'text':
            return <TextContent content={activity.content as string[]} />;
        case 'quiz':
            return <Quiz questions={activity.questions as any[]} />;
        case 'evaluation':
            return <ModuleEvaluation questions={activity.questions as any[]} />;
        case 'reflectionTree':
            return <ReflectionTree />;
        case 'audio':
            return <AudioPlayer src={activity.audioSrc || ''} transcript={activity.content as string[] | undefined} />;
        case 'upload':
            return <FileUpload />;
        case 'feedbackForm':
            return <FeedbackForm />;
        case 'cardGame':
            return <CardMatchingGame cards={activity.cards || []} />;
        case 'finalChallenge':
            return <FinalChallenge />;
        default:
            return <p>Actividad no encontrada.</p>;
    }
};


const CoursePlayer: React.FC<CoursePlayerProps> = ({ course, progress, markActivityAsCompleted, onExit }) => {
  const [activeActivityId, setActiveActivityId] = useState<string>(progress.lastAccessedActivityId || course.modules[0].activities[0].id);

  const handleSelectActivity = (activityId: string) => {
    setActiveActivityId(activityId);
  };
  
  const handleMarkAsCompleted = (activityId: string) => {
    markActivityAsCompleted(course.id, activityId);
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
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#101021] mb-2">{activeActivity.title}</h2>
                    <p className="text-[#101021]/80 mb-6">{activeActivity.description}</p>
                    <div className="prose max-w-none prose-slate">
                        <ActivityRenderer activity={activeActivity} />
                    </div>
                    {activeActivity.imageSrc && (
                    <div className="mt-8 flex justify-center">
                        <img 
                        src={activeActivity.imageSrc} 
                        alt={`Ilustración para ${activeActivity.title}`} 
                        className="rounded-lg shadow-md max-w-full h-auto sm:max-w-md" 
                        />
                    </div>
                    )}
                    {!isCompleted && (
                        <div className="mt-8 text-right">
                            <button
                                onClick={() => handleMarkAsCompleted(activeActivity.id)}
                                className="bg-[#24668e] text-white font-bold py-2 px-6 rounded-lg hover:bg-[#1a4a69] transition-transform transform hover:scale-105 shadow-md"
                            >
                                Marcar como completado
                            </button>
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