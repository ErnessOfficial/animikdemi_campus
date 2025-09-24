import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#f0f2f5]">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-[#6e4380]"></div>
        <p className="mt-4 text-lg font-semibold text-[#101021]/80">Cargando...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;