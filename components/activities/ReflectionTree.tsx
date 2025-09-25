import React, { useEffect, useState } from 'react';
import { assetPath } from '../../utils/paths';

const ITEMS_BANK = {
  valores: ["Honestidad", "Respeto", "Amor", "Libertad", "Creatividad", "Familia"],
  creencias: ["Puedo lograr lo que me propongo", "El fracaso es aprendizaje", "Soy digno/a de amor", "El cambio es bueno"],
  logros: ["Terminé mis estudios", "Superé un miedo", "Ayudé a un amigo", "Aprendí una nueva habilidad", "Viajé solo/a"]
};

type Category = 'valores' | 'creencias' | 'logros';

const ReflectionTree: React.FC<{ onReadyToComplete?: (ready: boolean) => void }> = ({ onReadyToComplete }) => {
  const [tree, setTree] = useState<Record<Category, string[]>>({
    valores: [],
    creencias: [],
    logros: [],
  });

  const addItemToTree = (category: Category, item: string) => {
    if (!tree[category].includes(item)) {
      setTree(prevTree => ({
        ...prevTree,
        [category]: [...prevTree[category], item]
      }));
    }
  };
  
  const removeItemFromTree = (category: Category, item: string) => {
    setTree(prevTree => ({
        ...prevTree,
        [category]: prevTree[category].filter(i => i !== item)
    }));
  };

  useEffect(() => {
    const hasAny = tree.valores.length + tree.creencias.length + tree.logros.length > 0;
    onReadyToComplete?.(hasAny);
  }, [tree, onReadyToComplete]);

  const renderBranch = (category: Category, title: string, icon: string, bgColor: string) => (
    <div className="p-4 rounded-lg shadow-md min-h-[200px]" style={{ backgroundColor: bgColor }}>
      <h4 className="font-bold text-lg mb-3 text-[#4c1760] flex items-center"><i className={`${icon} mr-2 text-[#24668e]`}></i> {title}</h4>
      <div className="flex flex-wrap gap-2">
        {tree[category].map(item => (
          <span key={item} className="flex items-center bg-[#24668e]/20 text-[#1a4a69] text-sm font-medium px-2.5 py-1 rounded-full">
            {item}
            <button onClick={() => removeItemFromTree(category, item)} className="ml-2 text-[#1f597c] hover:text-[#1a4a69]">&times;</button>
          </span>
        ))}
        {tree[category].length === 0 && <p className="text-sm text-[#101021]/50 italic">Añade elementos desde el banco.</p>}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-6">
        {renderBranch('valores', 'Mis Valores Fundamentales', 'fas fa-heart', '#f3e8ff')}
        {renderBranch('creencias', 'Mis Creencias Potenciadoras', 'fas fa-lightbulb', '#ffe4e6')}
        {renderBranch('logros', 'Mis Logros y Fortalezas', 'fas fa-trophy', '#e0f2fe')}
      </div>

      <p className="text-[#00385b] font-semibold text-sm">Haz clic en un elemento del banco y añádelo a la tarjeta superior correspondiente (Valores, Creencias o Logros).</p>

      <div className="bg-[#101021]/5 p-4 rounded-lg border border-[#101021]/10">
        <h4 className="font-bold text-center mb-4 text-[#00385b]">Banco de Elementos</h4>
        <div className="grid md:grid-cols-3 gap-6">
          {(Object.keys(ITEMS_BANK) as Category[]).map(category => (
            <div key={category}>
              <h5 className="font-semibold mb-2 capitalize text-[#00385b]">{category}</h5>
              <div className="flex flex-wrap gap-2">
                {ITEMS_BANK[category].map(item => (
                  <button
                    key={item}
                    onClick={() => addItemToTree(category, item)}
                    className="bg-[#6e4380]/10 text-[#6e4380] text-sm px-3 py-1 rounded-full hover:bg-[#6e4380]/20 transition"
                  >
                    + {item}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="mt-4 text-[#101021]">La imagen que ves a continuación es un template que puede servirte como modelo para crear tu propio Árbol para las siguientes actividades. También puedes ser creativo/a y diseñar tu propio modelo. Si deseas descargar este modelo, lo encontrarás en Recursos → Guías y Manuales como "Mi Árbol de la Reflexión - Template".</p>
        <div className="mt-4 flex justify-center">
          <img
            src={assetPath('images/arbol_reflexion.png')}
            alt="Mi Árbol de la Reflexión - Template"
            className="rounded-lg shadow-md max-w-full h-auto sm:max-w-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ReflectionTree;
