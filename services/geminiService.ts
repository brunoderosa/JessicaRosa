import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    // Initializing GoogleGenAI with the required named parameter and environment variable.
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  // Method to handle conversational assistant responses
  async getAssistantResponse(message: string) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: message,
        config: {
          systemInstruction: `Você é o assistente virtual da fisioterapeuta Jessica Rosa. 
          Ela é graduada pela São Camilo e Pós-graduada em Ortopedia e Traumatologia também pela São Camilo.
          Ela atua com fisioterapia domiciliar em São Paulo (Capital), geriatria, ortopedia, drenagem linfática, massagem relaxante e Mat Pilates.
          Seja gentil, profissional e humanizado. Ajude os pacientes a entenderem qual serviço pode ser ideal para eles. 
          Sempre direcione para agendar uma avaliação via WhatsApp no final da conversa.
          Não dê diagnósticos médicos, apenas orientações gerais baseadas nos serviços oferecidos.`,
        },
      });
      // Correctly accessing the .text property as per guidelines
      return response.text || "Desculpe, não consegui processar sua mensagem no momento.";
    } catch (error) {
      console.error("Error fetching Gemini response:", error);
      return "Desculpe, tive um problema técnico. Mas você pode falar diretamente com a Jessica pelo WhatsApp!";
    }
  }

  // New method to fetch Google Maps review highlights using grounding
  async getGoogleReviewsHighlights() {
    try {
      const response = await this.ai.models.generateContent({
        model: "gemini-2.5-flash", // Maps grounding is supported in Gemini 2.5 series models.
        contents: "Quais são os principais pontos positivos e depoimentos recentes sobre 'Jessica Rosa Fisioterapia & Pilates' em São Paulo no Google Maps? Resuma em 3 ou 4 depoimentos curtos e inspiradores.",
        config: {
          tools: [{ googleMaps: {} }],
        },
      });

      const text = response.text || "";
      const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      
      // Extracting the URLs from groundingChunks as required by the guidelines
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