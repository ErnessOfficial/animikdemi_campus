import React, { useState, useEffect } from 'react';
import type { Activity } from '../../types';

interface SliderAssessmentProps {
  activity: Activity;
  onReadyToComplete?: (ready: boolean) => void;
}

const SliderAssessment: React.FC<SliderAssessmentProps> = ({ activity, onReadyToComplete }) => {
  const domains = activity.domains || activity.sliderDomains || [];
  
  // Initialize slider values (default: 50)
  const [values, setValues] = useState<Record<string, number>>(() => {
    const init: Record<string, number> = {};
    domains.forEach(d => {
      init[d.id] = 50;
    });
    return init;
  });

  const handleSliderChange = (id: string, val: number) => {
    setValues(prev => ({
      ...prev,
      [id]: val
    }));
  };

  useEffect(() => {
    // This activity is immediately complete or always ready once modified
    onReadyToComplete?.(true);
  }, [onReadyToComplete]);

  // Radar Chart Calculations (Center: 150, 150. Radius: 100. SVG ViewBox: 0 0 300 300)
  const cx = 150;
  const cy = 150;
  const r = 90;
  const n = domains.length;

  // Compute points for the grid rings (25%, 50%, 75%, 100%)
  const gridRings = [0.25, 0.5, 0.75, 1];
  const ringPolygons = gridRings.map(scale => {
    const points: string[] = [];
    for (let i = 0; i < n; i++) {
      const angle = (i * 2 * Math.PI) / n - Math.PI / 2;
      const x = cx + r * scale * Math.cos(angle);
      const y = cy + r * scale * Math.sin(angle);
      points.push(`${x},${y}`);
    }
    return points.join(' ');
  });

  // Axis lines
  const axes = domains.map((d, i) => {
    const angle = (i * 2 * Math.PI) / n - Math.PI / 2;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    const labelX = cx + (r + 20) * Math.cos(angle);
    const labelY = cy + (r + 12) * Math.sin(angle);
    return {
      x2: x,
      y2: y,
      labelX,
      labelY,
      label: d.name,
      id: d.id
    };
  });

  // User values polygon
  const userPolygonPoints = domains.map((d, i) => {
    const val = values[d.id] ?? 50;
    const angle = (i * 2 * Math.PI) / n - Math.PI / 2;
    const x = cx + r * (val / 100) * Math.cos(angle);
    const y = cy + r * (val / 100) * Math.sin(angle);
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="flex flex-col items-center gap-8 p-6 bg-slate-50/50 rounded-2xl border border-slate-100 shadow-inner">
      {/* Radar Chart Display (On Top and Expanded) */}
      <div className="w-full max-w-[420px] sm:max-w-[460px] flex-shrink-0 flex flex-col items-center bg-white p-5 rounded-2xl border border-slate-100 shadow-md transform hover:scale-[1.01] transition-transform duration-300">
        <h4 className="text-sm font-extrabold text-[#24668e] mb-3 uppercase tracking-wide flex items-center gap-2">
          <i className="fas fa-chart-pie"></i>
          Tu Perfil de Radar Emocional
        </h4>
        <div className="relative w-full aspect-square">
          <svg viewBox="0 0 300 300" className="w-full h-full">
            {/* Concentric helper grids */}
            {ringPolygons.map((points, idx) => (
              <polygon
                key={idx}
                points={points}
                fill="none"
                stroke="#24668e"
                strokeOpacity="0.09"
                strokeWidth="1.2"
              />
            ))}

            {/* Grid ring labels */}
            {[25, 50, 75, 100].map((val, idx) => (
              <text
                key={idx}
                x={cx}
                y={cy - r * (val / 100) + 4}
                textAnchor="middle"
                className="text-[8px] font-bold fill-[#24668e]/50"
              >
                {val}
              </text>
            ))}

            {/* Axis Lines & Labels */}
            {axes.map((axis, idx) => (
              <g key={idx}>
                <line
                  x1={cx}
                  y1={cy}
                  x2={axis.x2}
                  y2={axis.y2}
                  stroke="#24668e"
                  strokeOpacity="0.12"
                  strokeWidth="1.5"
                />
                <text
                  x={axis.labelX}
                  y={axis.labelY}
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  className="text-[10px] font-extrabold fill-[#24668e]"
                >
                  {axis.label}
                </text>
              </g>
            ))}

            {/* User values shape polygon */}
            <polygon
              points={userPolygonPoints}
              fill="url(#radarGradient)"
              stroke="#6e4380"
              strokeWidth="3"
              strokeLinejoin="round"
              className="transition-all duration-300 ease-out"
            />

            {/* Vertices Dots */}
            {domains.map((d, i) => {
              const val = values[d.id] ?? 50;
              const angle = (i * 2 * Math.PI) / n - Math.PI / 2;
              const x = cx + r * (val / 100) * Math.cos(angle);
              const y = cy + r * (val / 100) * Math.sin(angle);
              return (
                <circle
                  key={d.id}
                  cx={x}
                  cy={y}
                  r="5"
                  className="fill-white stroke-[#6e4380] stroke-[3] transition-all duration-300 ease-out cursor-pointer hover:r-6"
                  title={`${d.name}: ${val}%`}
                />
              );
            })}

            {/* Gradient Definitions: Blends deep blue center to warm purple edge */}
            <defs>
              <radialGradient id="radarGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#24668e" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#6e4380" stopOpacity="0.5" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <p className="text-[10px] text-[#24668e]/80 text-center font-bold mt-2 leading-tight">
          Ajusta los controles inferiores para ver cómo cambia tu radar en tiempo real.
        </p>
      </div>

      {/* Sliders Container (Placed Below) */}
      <div className="w-full space-y-4 max-w-[500px]">
        <p className="text-xs font-bold text-[#24668e] uppercase tracking-wider mb-2 text-center">
          Evalúa tus niveles actuales deslizando las variables:
        </p>
        {domains.map(domain => {
          const val = values[domain.id] ?? 50;
          return (
            <div key={domain.id} className="space-y-1 bg-white p-3.5 rounded-xl border border-slate-100 shadow-sm hover:border-[#24668e]/20 transition-all duration-300">
              <div className="flex justify-between items-center">
                <span className="font-extrabold text-xs sm:text-sm text-[#24668e]">{domain.name}</span>
                <span className="text-xs font-extrabold bg-[#24668e]/10 text-[#24668e] px-2.5 py-0.5 rounded-full">{val}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={val}
                onChange={(e) => handleSliderChange(domain.id, parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#24668e]"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-semibold px-0.5">
                <span>{domain.leftLabel}</span>
                <span>{domain.rightLabel}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SliderAssessment;
