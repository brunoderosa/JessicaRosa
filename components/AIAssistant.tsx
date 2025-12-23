import React, { useState } from 'react';
import { MessageCircle, Send, X, Loader2, Sparkles, User, Bot } from 'lucide-react';
import { geminiService } from '../services/geminiService';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: 'Olá! Sou o assistente da Dra. Jessica. Em que posso te ajudar hoje?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const aiResponse = await geminiService.getAssistantResponse(userMsg);
    
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#3D2B2E] text-white p-5 rounded-[2rem] shadow-2xl hover:scale-110 transition-all flex items-center space-x-3 border-4 border-white"
        >
          <Sparkles size={24} className="text-primary animate-pulse" />
          <span className="hidden sm:inline font-black uppercase tracking-widest text-[10px]">Consultar IA</span>
        </button>
      ) : (
        <div className="bg-white w-[90vw] sm:w-[400px] h-[600px] rounded-[3rem] shadow-2xl flex flex-col border border-primary/10 animate-in slide-in-from-bottom-12 duration-500 overflow-hidden">
          {/* Header */}
          <div className="bg-[#3D2B2E] p-8 flex justify-between items-center text-white relative">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30">
                <Bot size={28} className="text-primary" />
              </div>
              <div>
                <p className="font-bold font-serif italic text-lg leading-none">Smart Assistant</p>
                <p className="text-[10px] uppercase tracking-widest opacity-60 mt-1.5 font-black">Jessica Rosa Fisio</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-xl transition-colors">
              <X size={24} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-rose-soft/40 scrollbar-hide">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-5 rounded-[2rem] text-sm leading-relaxed font-medium ${
                    msg.role === 'user'
                      ? 'bg-primary text-white rounded-tr-none shadow-lg'
                      : 'bg-white text-[#2D1A1E] rounded-tl-none shadow-sm border border-primary/5'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-5 rounded-[2rem] rounded-tl-none flex items-center space-x-3 shadow-sm border border-primary/5">
                  <Loader2 className="animate-spin text-primary" size={20} />
                  <span className="text-xs text-[#6E5A5D] italic font-bold">Analisando...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-8 bg-white border-t border-primary/5 flex items-center space-x-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Pergunte sobre sua dor..."
              className="flex-1 bg-rose-soft/50 border-none rounded-2xl px-6 py-5 text-sm font-bold focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-[#6E5A5D]/40"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-primary text-white p-5 rounded-2xl hover:bg-[#8a5a64] disabled:opacity-30 transition-all shadow-lg"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;