import React, { useState } from 'react';
import { Send, MessageSquare, MapPin, Clock, CalendarCheck, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO, SERVICES_DATA } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', neighborhood: '', service: '', message: '' });

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(`Olá Jessica! Gostaria de ${CONTACT_INFO.cta}.`);
    window.open(`https://wa.me/${CONTACT_INFO.phone}?text=${text}`, '_blank');
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(`Olá Jessica! Meu nome é ${formData.name}. Moro no bairro ${formData.neighborhood}. Gostaria de informações sobre ${formData.service}. ${formData.message}`);
    window.open(`https://wa.me/${CONTACT_INFO.phone}?text=${text}`, '_blank');
  };

  return (
    <div className="pt-28 pb-16 bg-rose-soft/40 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 max-w-3xl mx-auto space-y-6 animate-fade-up">
          <h1 className="text-5xl md:text-[5.5rem] font-black text-[#2D1A1E] tracking-tighter leading-[0.9]">
            Vamos <span className="text-primary italic font-serif">conversar?</span>
          </h1>
          <p className="text-lg md:text-xl text-[#6E5A5D] font-medium leading-relaxed opacity-80 px-4">
            Preencha os campos abaixo para uma triagem rápida. Respondo com prioridade máxima.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Info Card */}
          <div className="lg:col-span-4 space-y-6 animate-fade-up">
            <div className="bg-[#3D2B2E] p-10 rounded-[3.5rem] text-white space-y-10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-[50px] -mr-12 -mt-12" />
              
              <div className="flex items-start space-x-5">
                <MapPin className="text-primary shrink-0 mt-1" size={24} />
                <div className="space-y-2">
                  <h4 className="font-bold text-xl font-serif italic">Área de Atuação</h4>
                  <p className="text-white/60 text-sm leading-relaxed">Atendimento exclusivo domiciliar em toda a Capital de São Paulo.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-5">
                <Clock className="text-primary shrink-0 mt-1" size={24} />
                <div className="space-y-2">
                  <h4 className="font-bold text-xl font-serif italic">Horários</h4>
                  <p className="text-white/60 text-sm leading-relaxed">Segunda a Sexta-feira: <br/>08:00 às 20:00.</p>
                </div>
              </div>

              <div className="pt-2">
                <button 
                  onClick={handleWhatsAppDirect}
                  className="w-full bg-[#25D366] text-white py-5 rounded-2xl font-bold text-base flex items-center justify-center gap-3 hover:scale-[1.03] transition-all shadow-xl"
                >
                  <MessageSquare size={22} /> Conversar Agora
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] border border-primary/5 shadow-sm">
               <p className="text-[9px] font-black text-primary uppercase tracking-[0.3em] mb-2">Importante</p>
               <p className="text-xs text-[#6E5A5D] leading-relaxed">
                 O atendimento domiciliar garante biossegurança, conforto e economia de tempo para o paciente.
               </p>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-8 bg-white p-8 lg:p-16 rounded-[4rem] shadow-sm border border-primary/5 animate-fade-up relative">
            <div className="flex items-center space-x-5 mb-10">
              <div className="p-3 bg-primary/10 rounded-xl">
                <CalendarCheck className="text-primary" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-[#2D1A1E] font-serif italic tracking-tight">Ficha de Triagem</h3>
            </div>
            
            <form onSubmit={handleSubmitForm} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-primary uppercase tracking-[0.3em] ml-2">NOME COMPLETO</label>
                  <input required type="text" placeholder="Seu nome" className="w-full px-6 py-4 rounded-2xl bg-[#F8F8F8] border-2 border-transparent outline-none font-medium text-base text-[#2D1A1E] focus:border-primary/20 transition-all placeholder:text-[#B0A4A6]" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-primary uppercase tracking-[0.3em] ml-2">WHATSAPP</label>
                  <input required type="tel" placeholder="(11) 90000-0000" className="w-full px-6 py-4 rounded-2xl bg-[#F8F8F8] border-2 border-transparent outline-none font-medium text-base text-[#2D1A1E] focus:border-primary/20 transition-all placeholder:text-[#B0A4A6]" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-primary uppercase tracking-[0.3em] ml-2">BAIRRO</label>
                  <input required type="text" placeholder="Ex: Moema" className="w-full px-6 py-4 rounded-2xl bg-[#F8F8F8] border-2 border-transparent outline-none font-medium text-base text-[#2D1A1E] focus:border-primary/20 transition-all placeholder:text-[#B0A4A6]" value={formData.neighborhood} onChange={e => setFormData({...formData, neighborhood: e.target.value})} />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-primary uppercase tracking-[0.3em] ml-2">SERVIÇO</label>
                  <select required className="w-full px-6 py-4 rounded-2xl bg-[#F8F8F8] border-2 border-transparent outline-none font-bold text-[#2D1A1E] cursor-pointer text-base focus:border-primary/20 transition-all" value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})}>
                    <option value="">Selecione</option>
                    {SERVICES_DATA.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-primary uppercase tracking-[0.3em] ml-2">MENSAGEM</label>
                <textarea rows={4} placeholder="Sua dor ou objetivo..." className="w-full px-6 py-5 rounded-[2rem] bg-[#F8F8F8] border-2 border-transparent outline-none resize-none font-medium text-base text-[#2D1A1E] focus:border-primary/20 transition-all placeholder:text-[#B0A4A6]" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full bg-[#3D2B2E] text-white py-6 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:bg-primary transition-all shadow-xl">
                  Enviar Solicitação <Send size={22} />
                </button>
              </div>
              
              <div className="flex items-center justify-center space-x-2 text-[10px] text-[#6E5A5D]/50 font-black uppercase tracking-[0.2em] pt-2">
                <ShieldCheck size={16} className="text-primary" />
                <span>Atendimento Ético Profissional</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;