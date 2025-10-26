import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from '@google/genai';

const MODEL_NAME = process.env.GEMINI_MODEL || 'gemini-1.5-flash';

let client: GoogleGenAI | null = null;

function getClient() {
  if (client) return client;
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY no está configurada en el entorno del servidor.');
  }
  client = new GoogleGenAI({ apiKey });
  return client;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { prompt } = req.body as { prompt?: string };
  if (!prompt || typeof prompt !== 'string') {
    return res.status(400).json({ error: 'Prompt requerido' });
  }

  try {
    const ai = getClient();
    const result = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: prompt,
    });
    return res.status(200).json({
      text: result.response?.text()?.trim() ?? '',
    });
  } catch (error: any) {
    console.error('[kit-reflexivo]', error);
    return res.status(500).json({
      error: error?.message || 'Error generando la respuesta',
    });
  }
}
