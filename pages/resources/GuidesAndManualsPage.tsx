import React from 'react';
import ResourceList from '../../components/resources/ResourceList';
import { guides } from '../../constants/resources/guides';

interface Props {
  onBack: () => void;
}

const GuidesAndManualsPage: React.FC<Props> = ({ onBack }) => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#6e4380] to-[#24668e] text-white rounded-xl p-6 shadow mb-6">
        <h1 className="text-2xl font-extrabold">Guías y Manuales</h1>
        <p className="mt-2 text-white/90">Descarga las guías completas de los cursos y manuales prácticos de ejercicios.</p>
      </div>
      <ResourceList
        heading="Descargas disponibles"
        subtitle="Usa el buscador para encontrar una guía por nombre."
        items={guides}
        onBack={onBack}
      />
    </div>
  );
};

export default GuidesAndManualsPage;

