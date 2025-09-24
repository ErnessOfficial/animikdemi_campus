import React from 'react';
import type { View } from '../App';
import ResourceCard from '../components/resources/ResourceCard';

interface ResourcesPageProps {
  onNavigate: (view: View) => void;
}

const ResourcesPage: React.FC<ResourcesPageProps> = ({ onNavigate }) => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#6e4380] to-[#24668e] text-white rounded-xl p-6 shadow">
        <h1 className="text-2xl font-extrabold">Recursos</h1>
        <p className="mt-2 text-white/90">
          En esta sección encontrarás recursos adicionales para tus acciones formativas, materiales de consulta y contenidos para reflexionar sobre distintos aspectos del bienestar emocional.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <ResourceCard
          imageSrc="/images/recursos_guias.png"
          title="Guías y Manuales"
          description="Descarga guías completas en PDF de los cursos y manuales prácticos de ejercicios."
          onExplore={() => onNavigate('resources-guides')}
        />
        <ResourceCard
          imageSrc="/images/recursos_infografias.png"
          title="Infografías"
          description="Infografías visuales sobre temas de bienestar emocional y cómo mejorarlo."
          onExplore={() => onNavigate('resources-infographics')}
        />
        <ResourceCard
          imageSrc="/images/recursos_complementarios.png"
          title="Recursos Complementarios"
          description="Artículos y enlaces externos para ampliar tus fuentes y conectar con el mundo de AnImiKdemi."
          onExplore={() => onNavigate('resources-complementary')}
        />
      </div>
    </div>
  );
};

export default ResourcesPage;
