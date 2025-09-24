import React from 'react';
import ResourceList from '../../components/resources/ResourceList';
import { infographics } from '../../constants/resources/infographics';

interface Props {
  onBack: () => void;
}

const InfographicsPage: React.FC<Props> = ({ onBack }) => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#6e4380] to-[#24668e] text-white rounded-xl p-6 shadow mb-6">
        <h1 className="text-2xl font-extrabold">Infografías</h1>
        <p className="mt-2 text-white/90">Explora una colección visual de temas clave del bienestar emocional.</p>
      </div>
      <ResourceList
        heading="Infografías disponibles"
        subtitle="Usa el buscador para localizar por título."
        items={infographics}
        onBack={onBack}
      />
    </div>
  );
};

export default InfographicsPage;

