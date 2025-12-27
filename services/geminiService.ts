
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Eres un asistente experto de la "Fundación Raíces de Amor que Sanan" para el proyecto "Brigadas de Salud Mental y Emocional" en la U.E. Técnica Experimental Mitad del Mundo.
Tu objetivo es orientar a docentes, padres y estudiantes sobre el protocolo de actuación.
Contexto:
- No reemplazamos al DECE, lo apoyamos descomprimiendo casos leves.
- Filtro Verde/Amarillo: Casos de ansiedad leve, estrés, problemas cotidianos. Usamos terapias holísticas y círculos.
- Filtro Rojo: Violencia, ideación suicida, consumo de drogas. PROTOCOLO: Contención inmediata y DERIVACIÓN OBLIGATORIA AL DECE.
- Metodología: Psicología integrativa + Sabiduría Ancestral (Medicina Floral Andina).
- Costo: $0 para el MINEDEC (autogestionado).
Responde siempre con empatía, profesionalismo y basado estrictamente en este marco legal y metodológico.
`;

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async getChatResponse(prompt: string, history: {role: string, parts: {text: string}[]}[]) {
    try {
      const response = await this.ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [...history, { role: 'user', parts: [{ text: prompt }] }],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });

      return response.text;
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "Lo siento, tuve un problema conectando con mi base de conocimientos. Por favor, intenta de nuevo.";
    }
  }
}

export const geminiService = new GeminiService();
