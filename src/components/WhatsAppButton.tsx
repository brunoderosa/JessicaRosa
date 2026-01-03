import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    const text = encodeURIComponent(`Olá Jessica! Gostaria de ${CONTACT_INFO.cta}.`);
    window.open(`https://wa.me/${CONTACT_INFO.phone}?text=${text}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-24 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center border-4 border-white"
      title="Fale no WhatsApp"
    >
      <MessageCircle size={32} fill="currentColor" />
      <span className="absolute -top-2 -left-2 flex h-5 w-5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-5 w-5 bg-green-500"></span>
      </span>
    </button>
  );
};

export default WhatsAppButton;