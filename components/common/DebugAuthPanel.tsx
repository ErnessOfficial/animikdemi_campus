import React, { useState } from 'react';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';

const DebugAuthPanel: React.FC = () => {
  const { isLoading, isAuthenticated, user } = useKindeAuth();
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-4 right-4 z-50 bg-[#24668e] text-white text-sm font-semibold px-3 py-2 rounded shadow hover:bg-[#1a4a69]"
      >
        {open ? 'Cerrar Debug' : 'Auth Debug'}
      </button>
      {open && (
        <div className="fixed bottom-16 right-4 z-50 w-[28rem] max-w-[90vw] max-h-[70vh] overflow-auto bg-white border border-gray-200 shadow-xl rounded p-4 text-sm">
          <h3 className="font-bold mb-2 text-[#101021]">Estado de Autenticación</h3>
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="text-[#101021]/70">isLoading</div>
            <div className="font-mono">{String(isLoading)}</div>
            <div className="text-[#101021]/70">isAuthenticated</div>
            <div className="font-mono">{String(isAuthenticated)}</div>
            <div className="text-[#101021]/70">location</div>
            <div className="font-mono break-all">{typeof window !== 'undefined' ? window.location.href : ''}</div>
          </div>
          <h4 className="font-semibold mb-1 text-[#101021]">Kinde user</h4>
          <pre className="bg-gray-50 p-2 rounded overflow-auto text-xs leading-snug">
            {JSON.stringify(user ?? null, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default DebugAuthPanel;

