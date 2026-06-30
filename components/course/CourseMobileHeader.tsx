import React, { useState } from 'react';
import type { Course, CompletionStatus } from '../../types';
import { estimateCourseDurationMinutes, formatDuration } from '../../utils/course';

interface CourseMobileHeaderProps {
  course: Course;
  activeActivityId: string;
  completionStatus: CompletionStatus;
  onSelectActivity: (activityId: string) => void;
  onExit: () => void;
  isMobileView?: boolean;
}

const CourseMobileHeader: React.FC<CourseMobileHeaderProps> = ({
  course,
  activeActivityId,
  completionStatus,
  onSelectActivity,
  onExit,
  isMobileView,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openModules, setOpenModules] = useState<Record<string, boolean>>(() => {
    const initialState: Record<string, boolean> = {};
    course.modules.forEach((m) => {
      // Keep the module containing the active activity open by default
      const hasActive = m.activities.some((a) => a.id === activeActivityId);
      initialState[m.id] = hasActive;
    });
    return initialState;
  });

  const toggleModule = (moduleId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenModules((prev) => ({ ...prev, [moduleId]: !prev[moduleId] }));
  };

  const getModuleProgress = (moduleId: string) => {
    const moduleStatus = completionStatus[moduleId];
    if (!moduleStatus) return 0;
    const totalActivities = Object.keys(moduleStatus.activities).length;
    if (totalActivities === 0) return 0;
    const completedActivities = Object.values(moduleStatus.activities).filter(Boolean).length;
    return (completedActivities / totalActivities) * 100;
  };

  // Find active module and activity labels to show in the toggle button
  let activeModuleTitle = '';
  let activeActivityTitle = '';
  for (const m of course.modules) {
    const act = m.activities.find((a) => a.id === activeActivityId);
    if (act) {
      activeModuleTitle = m.title;
      activeActivityTitle = act.title;
      break;
    }
  }

  const handleActivitySelect = (activityId: string) => {
    onSelectActivity(activityId);
    setIsOpen(false); // Close drawer after selection
  };

  return (
    <div className={`${isMobileView ? 'block' : 'md:hidden'} sticky top-0 left-0 right-0 z-30 bg-white border-b border-[#101021]/10 shadow-md`}>
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#6e4380]/5">
        <button
          onClick={onExit}
          className="text-xs font-bold text-[#24668e] flex items-center justify-center gap-1.5 touch-target"
        >
          <i className="fas fa-arrow-left"></i>
          <span>Volver</span>
        </button>

        <div className="text-center flex-1 mx-4 max-w-[50vw]">
          <h2 className="text-xs font-extrabold text-[#4c1760] truncate">{course.title}</h2>
          {estimateCourseDurationMinutes(course) > 0 && (
            <span className="text-[10px] text-slate-500 font-semibold flex items-center justify-center gap-1 mt-0.5">
              <i className="far fa-clock"></i>
              {formatDuration(estimateCourseDurationMinutes(course))}
            </span>
          )}
        </div>

        {/* Syllabus Toggle Button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={`text-xs font-bold px-3 py-1.5 rounded-xl transition-all border flex items-center justify-center gap-1.5 touch-target ${
            isOpen
              ? 'bg-[#6e4380] text-white border-transparent shadow-md'
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
          }`}
        >
          <span>Contenido</span>
          <i className={`fas fa-chevron-down text-[10px] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
        </button>
      </div>

      {/* Slide Down Accordion Menu / Syllabus Drawer */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 max-h-[60vh] overflow-y-auto bg-white border-b border-[#101021]/15 shadow-xl animate-fade-in z-50">
          <div className="p-4 space-y-4">
            {course.modules.map((module) => {
              const isModuleOpen = openModules[module.id];
              return (
                <div key={module.id} className="border-b border-[#101021]/5 pb-3 last:border-b-0 last:pb-0">
                  <button
                    onClick={(e) => toggleModule(module.id, e)}
                    className="w-full flex items-center justify-between text-left p-2.5 rounded-xl bg-slate-50 border border-slate-100/50 hover:bg-[#101021]/5 transition"
                  >
                    <div className="flex-grow pr-2">
                      <h3 className="font-extrabold text-[#4c1760] text-xs leading-tight">{module.title}</h3>
                      <div className="w-24 bg-[#101021]/10 rounded-full h-1.5 mt-1.5 overflow-hidden">
                        <div
                          className="bg-[#24668e] h-full rounded-full transition-all duration-300"
                          style={{ width: `${getModuleProgress(module.id)}%` }}
                        ></div>
                      </div>
                    </div>
                    <i className={`fas fa-chevron-down text-slate-400 text-[10px] transition-transform duration-300 ${isModuleOpen ? 'rotate-180' : ''}`}></i>
                  </button>

                  {isModuleOpen && (
                    <ul className="mt-2 pl-3 border-l-2 border-slate-100 space-y-1 ml-2">
                      {module.activities.map((activity) => {
                        const isCompleted = completionStatus[module.id]?.activities[activity.id];
                        const isActive = activity.id === activeActivityId;
                        return (
                          <li key={activity.id}>
                            <button
                              onClick={() => handleActivitySelect(activity.id)}
                              className={`w-full text-left p-2.5 rounded-xl text-xs flex items-center justify-between transition-all touch-target ${
                                isActive
                                  ? 'bg-[#4c1760]/10 text-[#4c1760] font-bold'
                                  : 'text-slate-600 hover:bg-slate-50'
                              }`}
                            >
                              <div className="flex items-center gap-2 max-w-[85%]">
                                {isCompleted ? (
                                  <i className="fas fa-check-circle text-[#24668e] text-sm shrink-0"></i>
                                ) : (
                                  <i className="far fa-circle text-slate-300 text-sm shrink-0"></i>
                                )}
                                <span className="truncate">{activity.title}</span>
                              </div>
                              <span className="text-[9px] uppercase px-1.5 py-0.5 rounded-full font-bold bg-[#101021]/5 text-slate-500 scale-90">
                                {activity.type}
                              </span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Sticky Active Lesson Indicator Banner when collapsed */}
      {!isOpen && activeActivityTitle && (
        <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-600">
          <span className="text-[#6e4380] uppercase tracking-wider text-[9px] bg-[#6e4380]/10 px-2 py-0.5 rounded-full">Actividad actual</span>
          <span className="truncate flex-grow">{activeActivityTitle}</span>
        </div>
      )}
    </div>
  );
};

export default CourseMobileHeader;
