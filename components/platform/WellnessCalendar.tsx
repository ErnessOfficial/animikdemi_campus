import React from 'react';
import type { ActivityHistoryItem } from '../../types';
import { getLocalDateString } from '../../utils/gamification';

interface WellnessCalendarProps {
  history?: ActivityHistoryItem[];
}

const WellnessCalendar: React.FC<WellnessCalendarProps> = ({ history = [] }) => {
  const todayStr = getLocalDateString();
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0-indexed

  // Month information
  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  // Get weekday of the 1st of this month (0 = Sun, 1 = Mon, ..., 6 = Sat)
  const firstDayIndex = new Date(year, month, 1).getDay();
  // Adjust so that week starts on Monday: (Sun index is 0, make it 6, others shift left)
  const paddedCells = firstDayIndex === 0 ? 6 : firstDayIndex - 1;

  // Active dates set (YYYY-MM-DD)
  const activeDatesSet = new Set(history.map(item => item.date));

  // Build grid items
  const calendarCells: Array<{ dayNum: number | null; dateStr: string; isActive: boolean; isToday: boolean }> = [];
  
  // Padding cells for previous month empty days
  for (let i = 0; i < paddedCells; i++) {
    calendarCells.push({ dayNum: null, dateStr: '', isActive: false, isToday: false });
  }

  // Current month days
  for (let day = 1; day <= daysInMonth; day++) {
    const formattedDay = day < 10 ? `0${day}` : `${day}`;
    const formattedMonth = (month + 1) < 10 ? `0${month + 1}` : `${month + 1}`;
    const dateStr = `${year}-${formattedMonth}-${formattedDay}`;
    const isToday = dateStr === todayStr;
    const isActive = activeDatesSet.has(dateStr);
    
    calendarCells.push({
      dayNum: day,
      dateStr,
      isActive,
      isToday
    });
  }

  const weekdays = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  const consecutiveDays = () => {
    // Calculate total active days this month
    let count = 0;
    for (let day = 1; day <= daysInMonth; day++) {
      const formattedDay = day < 10 ? `0${day}` : `${day}`;
      const formattedMonth = (month + 1) < 10 ? `0${month + 1}` : `${month + 1}`;
      const dateStr = `${year}-${formattedMonth}-${formattedDay}`;
      if (activeDatesSet.has(dateStr)) count++;
    }
    return count;
  };

  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-extrabold text-slate-800 text-base sm:text-lg flex items-center gap-2">
            <i className="far fa-calendar-check text-[#6e4380]"></i>
            Calendario de Bienestar
          </h3>
          <p className="text-[11px] text-slate-500 mt-0.5">
            Muestra tus momentos de conexión y constancia
          </p>
        </div>
        <div className="text-right">
          <span className="text-xs font-bold text-slate-800 bg-slate-100 px-3 py-1 rounded-full">
            {monthNames[month]} {year}
          </span>
        </div>
      </div>

      {/* Weekdays Header */}
      <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold text-slate-400 mb-2">
        {weekdays.map((w, idx) => (
          <div key={idx}>{w}</div>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-2">
        {calendarCells.map((cell, idx) => {
          if (cell.dayNum === null) {
            return <div key={`empty-${idx}`} className="aspect-square"></div>;
          }

          return (
            <div
              key={cell.dateStr}
              className={`aspect-square rounded-full flex items-center justify-center text-xs font-semibold relative transition-all duration-300 ${
                cell.isActive
                  ? 'bg-emerald-500 text-white shadow-sm hover:scale-105 shadow-emerald-500/20'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              } ${cell.isToday ? 'ring-2 ring-[#6e4380] ring-offset-1' : ''}`}
              title={cell.isActive ? `¡Estudiaste el ${cell.dayNum}! 🌿` : `Sin actividad el ${cell.dayNum}`}
            >
              {cell.dayNum}
              {cell.isToday && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#6e4380] rounded-full"></span>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer Legend */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 flex-wrap gap-2">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
            <span>Activo</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-100 border border-slate-200 inline-block"></span>
            <span>Sin actividad</span>
          </div>
        </div>
        <div>
          <span>Días dedicados este mes: <strong>{consecutiveDays()}</strong></span>
        </div>
      </div>
    </div>
  );
};

export default WellnessCalendar;
