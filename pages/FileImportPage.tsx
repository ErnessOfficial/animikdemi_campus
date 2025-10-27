import React, { useState } from 'react';

interface FileImportPageProps {
  onBack: () => void;
}

const FileImportPage: React.FC<FileImportPageProps> = ({ onBack }) => {
  const [fileName, setFileName] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
    setError(null);
    try {
      const text = await file.text();
      setContent(text);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No se pudo leer el archivo');
      setContent('');
    }
  };

  return (
    <section className="space-y-6">
      <button onClick={onBack} className="inline-flex items-center gap-2 text-sm font-semibold text-[#6e4380] hover:text-[#4c1760]">
        <i className="fas fa-arrow-left" /> Volver al panel
      </button>
      <div className="bg-white rounded-2xl shadow-md border border-[#101021]/10 p-6 space-y-5">
        <header>
          <p className="text-sm uppercase font-semibold text-[#6e4380]/70">Importar contenido</p>
          <h1 className="text-2xl font-bold text-[#101021]">Abrir archivo</h1>
          <p className="text-[#101021]/70">Esta vista se activa cuando el manifiesto solicita abrir archivos .json.</p>
        </header>
        <div className="p-6 border-2 border-dashed border-[#101021]/20 rounded-xl text-center">
          <input type="file" accept="application/json,.json" onChange={handleFileChange} />
          {fileName && <p className="mt-2 text-sm text-[#101021]">Archivo seleccionado: {fileName}</p>}
        </div>
        {error && <p className="text-sm text-[#dd566f]">{error}</p>}
        {content && (
          <pre className="bg-[#101021]/5 rounded-xl p-4 overflow-auto text-xs text-[#101021] max-h-80">
            {content}
          </pre>
        )}
      </div>
    </section>
  );
};

export default FileImportPage;
