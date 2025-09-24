import React, { useState } from 'react';
import type { Course, CompletionStatus } from '../../types';

interface CourseSidebarProps {
  course: Course;
  activeActivityId: string;
  completionStatus: CompletionStatus;
  onSelectActivity: (activityId: string) => void;
  onExit: () => void;
}

const CourseSidebar: React.FC<CourseSidebarProps> = ({ course, activeActivityId, completionStatus, onSelectActivity, onExit }) => {
  const [openModules, setOpenModules] = useState<Record<string, boolean>>(() => {
    const initialState: Record<string, boolean> = {};
    course.modules.forEach(m => initialState[m.id] = true);
    return initialState;
  });

  const toggleModule = (moduleId: string) => {
    setOpenModules(prev => ({ ...prev, [moduleId]: !prev[moduleId] }));
  };
  
  const getModuleProgress = (moduleId: string) => {
    const moduleStatus = completionStatus[moduleId];
    if (!moduleStatus) return 0;
    const totalActivities = Object.keys(moduleStatus.activities).length;
    if (totalActivities === 0) return 0;
    const completedActivities = Object.values(moduleStatus.activities).filter(Boolean).length;
    return (completedActivities / totalActivities) * 100;
  };

  return (
    <aside className="w-full bg-white shadow-lg rounded-xl flex-shrink-0 border border-[#101021]/10 flex flex-col h-full">
      <div className="p-4 border-b border-[#101021]/10">
        <button onClick={onExit} className="text-sm text-[#24668e] hover:underline mb-2">
          <i className="fas fa-arrow-left mr-2"></i>Volver al Dashboard
        </button>
        <h2 className="text-xl font-bold text-[#101021]">{course.title}</h2>
        <p className="text-sm text-[#101021]/70">{course.subtitle}</p>
      </div>
      <div className="p-4 flex-grow overflow-y-auto">
        <div className="space-y-4">
          {course.modules.map(module => (
            <div key={module.id}>
              <button 
                onClick={() => toggleModule(module.id)} 
                className="w-full flex items-center justify-between text-left p-3 rounded-lg bg-[#101021]/5 hover:bg-[#101021]/10 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="font-bold text-[#101021] text-md">{module.title}</h3>
                  <div className="w-full bg-[#101021]/20 rounded-full h-2 mt-2">
                    <div 
                      className="bg-[#24668e] h-2 rounded-full transition-all duration-500" 
                      style={{ width: `${getModuleProgress(module.id)}%` }}
                    ></div>
                  </div>
                </div>
                <i className={`fas fa-chevron-down text-[#101021]/60 ml-2 transition-transform ${openModules[module.id] ? 'rotate-180' : ''}`}></i>
              </button>
              {openModules[module.id] && (
                <ul className="mt-2 ml-4 border-l-2 border-[#101021]/10 pl-4 space-y-1">
                  {module.activities.map(activity => {
                    const isCompleted = completionStatus[module.id]?.activities[activity.id];
                    const isActive = activity.id === activeActivityId;
                    return (
                      <li key={activity.id}>
                        <button 
                          onClick={() => onSelectActivity(activity.id)} 
                          className={`w-full text-left p-2.5 rounded-md text-sm transition-all ${
                            isActive 
                              ? 'bg-[#6e4380]/20 text-[#6e4380] font-semibold' 
                              : 'text-[#101021]/80 hover:bg-[#6e4380]/10 hover:text-[#6e4380]'
                          }`}
                        >
                          <div className="flex items-center">
                            {isCompleted ? (
                              <i className="fas fa-check-circle text-[#24668e] mr-3"></i>
                            ) : (
                              <i className="far fa-circle text-[#101021]/40 mr-3"></i>
                            )}
                            <span className="flex-1">{activity.title}</span>
                          </div>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default CourseSidebar;
