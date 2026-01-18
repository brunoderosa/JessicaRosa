import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    // Initializing GoogleGenAI with the required named parameter using process.env.API_KEY directly.
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async getAssistantResponse(message: string) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: message,
        config: {
          systemInstruction: `Você é o assistente virtual da fisioterapeuta Jessica Rosa. 
          Ela atua com fisioterapia domiciliar em São Paulo (Capital). 
          Jessica é graduada pela São Camilo e Pós-graduada em Ortopedia e Traumatologia também pela São Camilo.
          Serviços: Fisioterapia Ortopédica, Geriatria, Pilates Clínico e Drenagem Linfática pós-operatória.
          Seja gentil, profissional e técnico, porém acessível. 
          Direcione sempre para agendar uma avaliação domiciliar via WhatsApp no final.
          Não dê diagnósticos, oriente sobre os serviços oferecidos.`,
        },
      });
      return response.text;
    } catch (error) {
      console.error("Error fetching Gemini response:", error);
      return "Desculpe, tive um problema técnico. Mas você pode falar diretamente com a Jessica pelo WhatsApp!";
    }
  }

  async getGoogleReviewsHighlights() {
    try {
      const response = await this.ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: "Quais são os principais pontos positivos sobre 'Jessica Rosa Fisioterapia & Pilates' em São Paulo no Google Maps? Resuma em 3 ou 4 depoimentos curtos focados em melhora da dor e autonomia.",
        config: {
          tools: [{ googleMaps: {} }],
        },
      });

      const text = response.text || "";
      const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      const mapsLinks = groundingChunks
        .filter((chunk: any) => chunk.maps?.uri)
        .map((chunk: any) => ({
          title: chunk.maps.title,
          uri: chunk.maps.uri
        }));

      return { text, mapsLinks };
    } catch (error) {
      console.error("Error fetching Maps reviews:", error);
      return null;
    }
  }
}

export const geminiService = new GeminiService();