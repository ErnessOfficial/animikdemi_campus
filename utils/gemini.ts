import { GoogleGenAI } from '@google/genai';

const MODEL_NAME = (import.meta.env.VITE_GEMINI_MODEL as string) || 'gemini-1.5-flash';
let clientInstance: GoogleGenAI | null = null;

function getClient() {
  if (clientInstance) return clientInstance;
  const apiKey =
    (process.env.GEMINI_API_KEY as string | undefined) ||
    (import.meta.env.VITE_GEMINI_API_KEY as string | undefined);

  if (!apiKey) {
    throw new Error('Falta la variable GEMINI_API_KEY para usar el Kit Reflexivo.');
  }

  clientInstance = new GoogleGenAI({ apiKey });
  return clientInstance;
}

export async function generateGeminiResponse(prompt: string): Promise<string> {
  const client = getClient();
  const result = await client.models.generateContent({
    model: MODEL_NAME,
    contents: prompt
  });
  const text = result.response?.text()?.trim();
  if (!text) {
    throw new Error('La IA no devolvió contenido. Intenta de nuevo.');
  }
  return text;
}
