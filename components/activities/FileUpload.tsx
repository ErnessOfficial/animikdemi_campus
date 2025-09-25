import React, { useState, useRef, useEffect } from 'react';

const FileUpload: React.FC<{ onReadyToComplete?: (ready: boolean) => void }> = ({ onReadyToComplete }) => {
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    }
  };

  useEffect(() => {
    onReadyToComplete?.(!!fileName);
  }, [fileName, onReadyToComplete]);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="p-8 border-2 border-dashed border-[#101021]/30 rounded-lg text-center">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/*,.txt,.pdf,.doc,.docx"
      />
      <div className="mb-4">
        <i className="fas fa-cloud-upload-alt text-5xl text-[#6e4380]"></i>
      </div>
      <h4 className="text-lg font-semibold text-[#101021] mb-2">Sube tu Reflexión</h4>
      <p className="text-sm text-[#101021]/70 mb-6">
        Puedes subir una imagen de tu "Árbol de la Reflexión" o un documento con un extracto de tu diario.
      </p>
      <button
        onClick={handleButtonClick}
        className="bg-[#6e4380] text-white font-bold py-2 px-6 rounded-lg hover:bg-[#533260] transition-transform transform hover:scale-105"
      >
        Seleccionar Archivo
      </button>
      {fileName && (
        <div className="mt-6 bg-[#24668e]/10 text-[#1a4a69] p-3 rounded-md text-sm">
          Archivo seleccionado: <strong>{fileName}</strong>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
