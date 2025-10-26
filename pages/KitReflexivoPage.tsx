import React, { useCallback, useMemo, useState } from 'react';

type KitCardId = 'motivacion' | 'relajacion' | 'desconexion' | 'interaccion';

const kitCards: Array<{
  id: KitCardId;
  title: string;
  description: string;
  icon: string;
  accent: string;
}> = [
  {
    id: 'motivacion',
    title: 'Motivación',
    description: 'Recupera tu impulso emocional con un mensaje breve y accionable.',
    icon: 'fa-bolt',
    accent: 'from-[#f5af19] to-[#f12711]'
  },
  {
    id: 'relajacion',
    title: 'Relajación',
    description: 'Encuentra calma con ejercicios simples para momentos retadores.',
    icon: 'fa-leaf',
    accent: 'from-[#5ee7df] to-[#b490ca]'
  },
  {
    id: 'desconexion',
    title: 'Desconexión',
    description: 'Ideas rápidas para desconectar y regular tu energía.',
    icon: 'fa-moon',
    accent: 'from-[#8360c3] to-[#2ebf91]'
  },
  {
    id: 'interaccion',
    title: 'Interacción',
    description: 'Escribe tu situación y recibe una guía reflexiva personalizada.',
    icon: 'fa-comments',
    accent: 'from-[#ff512f] to-[#dd2476]'
  }
];

const staticPrompts: Record<Exclude<KitCardId, 'interaccion'>, string> = {
  motivacion:
    'Eres mentor en AnImiKdemi. Crea un mensaje breve (máx. 120 palabras) para recuperar la motivación emocional. Incluye: 1) reflexión empática en primera persona (2 frases); 2) sugerencia práctica inmediata (1 frase); 3) recomendación de explorar una categoría de formación de AnImiKdemi (Autoconocimiento, Gestión Emocional o Habilidades Sociales) y por qué. Mantén tono cálido y positivo en español.',
  relajacion:
    'Eres guía de bienestar en AnImiKdemi. Genera un mensaje corto (máx. 120 palabras) con: 1) respiración/pausas para bajar el estrés; 2) un ejercicio corporal o sensorial sencillo; 3) sugerencia de categoría de formación para seguir profundizando (elige una y explica en 1 frase). Habla en español, tono suave y alentador.',
  desconexion:
    'Actúa como facilitador de autocuidado en AnImiKdemi. Redacta un mensaje conciso (máx. 120 palabras) que incluya: 1) recordatorio para poner límites saludables hoy; 2) actividad breve para desconectar de la ansiedad; 3) recomendación de una categoría de formación y motivo. Tono optimista y práctico en español.'
};

const cardIcons: Record<KitCardId, string> = {
  motivacion: 'fa-bolt',
  relajacion: 'fa-leaf',
  desconexion: 'fa-moon',
  interaccion: 'fa-comments'
};

const KitReflexivoPage: React.FC = () => {
  const [activeCard, setActiveCard] = useState<KitCardId | null>(null);
  const [responseText, setResponseText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userQuestion, setUserQuestion] = useState('');

  const resetState = () => {
    setResponseText('');
    setError(null);
    setUserQuestion('');
  };

  const runPrompt = useCallback(async (prompt: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('/api/kit-reflexivo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt })
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload.error || 'No pude obtener una respuesta. Intenta nuevamente.');
      }

      const payload = await response.json();
      setResponseText(payload.text || '');
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'No pude obtener una respuesta. Intenta nuevamente.'
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const handleCardClick = (cardId: KitCardId) => {
    setActiveCard(cardId);
    resetState();
    if (cardId !== 'interaccion') {
      runPrompt(staticPrompts[cardId]);
    }
  };

  const handleBackToGrid = () => {
    setActiveCard(null);
    resetState();
  };

  const handleInteractSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!userQuestion.trim()) {
      setError('Comparte tu situación para que la IA pueda orientarte.');
      return;
    }
    const prompt = `Eres mentor de aprendizaje emocional en AnImiKdemi. El usuario comparte: "${userQuestion.trim()}". Responde en español con 3 partes: 1) reflexión empática en 2 frases, 2) orientación concreta con un paso inicial (1 frase), 3) recomienda una categoría de formación AnImiKdemi (Autoconocimiento, Gestión Emocional o Habilidades Sociales) explicando por qué en 1 frase. Máximo 130 palabras.`;
    setResponseText('');
    setError(null);
    runPrompt(prompt);
  };

  const activeCardData = useMemo(
    () => kitCards.find(card => card.id === activeCard) || null,
    [activeCard]
  );

  if (!activeCardData) {
    return (
      <section className="space-y-6">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#6e4380]">Kit Reflexivo</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#101021]">Recursos inmediatos para regular tus emociones</h1>
          <p className="text-[#101021]/80">
            Elige una tarjeta y recibe micro-recomendaciones guiadas por IA para acompañarte en momentos de motivación,
            relajación, desconexión o introspección.
          </p>
        </header>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {kitCards.map(card => (
            <button
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${card.accent} p-[1px] text-left shadow-lg transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#6e4380]`}
            >
              <div className="h-full w-full rounded-2xl bg-white p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#6e4380]/10 flex items-center justify-center text-[#6e4380]">
                    <i className={`fas ${card.icon} text-xl`}></i>
                  </div>
                  <i className="fas fa-arrow-right text-[#6e4380]/60 group-hover:translate-x-1 transition"></i>
                </div>
                <h2 className="mt-6 text-xl font-bold text-[#101021]">{card.title}</h2>
                <p className="mt-2 text-sm text-[#101021]/80">{card.description}</p>
              </div>
            </button>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <button
        onClick={handleBackToGrid}
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#6e4380] hover:text-[#4c1760]"
      >
        <i className="fas fa-arrow-left"></i>
        Volver al Kit Reflexivo
      </button>
      <div className="bg-white rounded-2xl shadow-md border border-[#101021]/10 p-5 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#6e4380]/10 flex items-center justify-center text-[#6e4380]">
              <i className={`fas ${cardIcons[activeCardData.id]} text-xl`}></i>
            </div>
            <div>
              <p className="text-sm uppercase font-semibold text-[#6e4380]/70">Kit Reflexivo</p>
              <h2 className="text-2xl font-bold text-[#101021]">{activeCardData.title}</h2>
            </div>
          </div>
          <button
            onClick={handleBackToGrid}
            className="px-4 py-2 rounded-full border border-[#101021]/20 text-sm font-medium text-[#101021] hover:bg-[#101021]/5"
          >
            Salir
          </button>
        </div>

        {activeCard === 'interaccion' ? (
          <form onSubmit={handleInteractSubmit} className="space-y-4">
            <label className="block text-sm font-semibold text-[#101021]">Comparte brevemente en qué necesitas apoyo</label>
            <textarea
              value={userQuestion}
              onChange={e => setUserQuestion(e.target.value)}
              rows={4}
              className="w-full rounded-xl border border-[#101021]/20 p-4 focus:border-[#6e4380] focus:ring-2 focus:ring-[#6e4380]/20"
              placeholder="Ej. Me cuesta desconectarme del trabajo y quiero recuperar mi equilibrio emocional"
            ></textarea>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#6e4380] px-6 py-2 text-white font-semibold hover:bg-[#4c1760] disabled:opacity-60"
                disabled={loading}
              >
                <i className="fas fa-sparkles"></i>
                Obtener guía reflexiva
              </button>
              <p className="text-xs text-[#101021]/60">La IA generará una respuesta breve y positiva.</p>
            </div>
          </form>
        ) : (
          <p className="text-sm text-[#101021]/70">
            Analizando tus necesidades para ofrecerte una dosis de {activeCardData.title.toLowerCase()} inmediata.
          </p>
        )}

        <div className="min-h-[160px] rounded-2xl border border-dashed border-[#6e4380]/30 bg-[#6e4380]/5 p-5">
          {loading && (
            <div className="flex items-center gap-3 text-[#6e4380]">
              <span className="flex h-3 w-3 rounded-full bg-current animate-pulse"></span>
              <span className="text-sm font-medium">Creando tu mensaje personalizado…</span>
            </div>
          )}
          {!loading && error && (
            <p className="text-sm text-[#dd566f] font-medium">{error}</p>
          )}
          {!loading && !error && responseText && (
            <div className="space-y-3 text-sm leading-relaxed text-[#101021]">
              {responseText.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          )}
          {!loading && !error && !responseText && activeCard === 'interaccion' && (
            <p className="text-sm text-[#101021]/70">
              Escribe tu consulta y recibe una guía reflexiva basada en aprendizaje emocional.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default KitReflexivoPage;
