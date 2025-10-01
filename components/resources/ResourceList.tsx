import React, { useMemo, useState } from 'react';

export interface ResourceItem {
  title: string;
  url: string;
}

interface ResourceListProps {
  heading: string;
  subtitle?: string;
  items: ResourceItem[];
  onBack?: () => void;
}

const ResourceList: React.FC<ResourceListProps> = ({ heading, subtitle, items, onBack }) => {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((i) => i.title.toLowerCase().includes(q));
  }, [items, query]);

  return (
    <div className="bg-white rounded-xl shadow p-6 border border-[#101021]/10">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold text-[#101021]">{heading}</h2>
          {subtitle && <p className="text-[#101021]/70 mt-1">{subtitle}</p>}
        </div>
        {onBack && (
          <button onClick={onBack} className="bg-[#6e4380] text-white font-semibold py-2 px-4 rounded-lg hover:opacity-90">Volver</button>
        )}
      </div>

      <div className="mb-4">
        <div className="relative">
          <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-[#101021]/40"></i>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por título o palabra clave..."
            className="w-full bg-[#f0f2f5] rounded-lg py-2 pl-9 pr-3 border border-transparent focus:bg-white focus:border-[#6e4380] focus:ring-1 focus:ring-[#6e4380] transition"
          />
        </div>
      </div>

      <ul className="divide-y divide-[#101021]/10">
        {filtered.map((it, idx) => (
          <li key={idx} className="py-3 flex items-center justify-between">
            <span className="text-[#101021]">{it.title}</span>
            <a href={it.url} target="_blank" rel="noopener noreferrer" className="text-[#24668e] font-semibold hover:underline">
              Descargar / Abrir
            </a>
          </li>
        ))}
        {filtered.length === 0 && (
          <li className="py-6 text-center text-[#101021]/60">No se encontraron resultados para "{query}"</li>
        )}
      </ul>
    </div>
  );
};

export default ResourceList;
