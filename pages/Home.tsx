import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, HeartPulse, MessageSquare, Sparkles, Activity } from 'lucide-react';
import { SERVICES_DATA, CONTACT_INFO, STATS } from '../constants';
import { RoutePath } from '../types';

const Home: React.FC = () => {
  const openWhatsApp = () => {
    const text = encodeURIComponent(`Olá Jessica! Gostaria de mais informações sobre seus atendimentos.`);
    window.open(`https://wa.me/${CONTACT_INFO.phone}?text=${text}`, '_blank');
  };

  const featuredServices = SERVICES_DATA.slice(0, 3);

  return (
    <div className="animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-24 pb-8 hero-gradient overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6 animate-fade-up">
              <div className="inline-flex items-center space-x-3 px-5 py-2 rounded-full glass border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
                <Sparkles size={16} className="animate-pulse" />
                <span>Premium Home Care em São Paulo</span>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl md:text-[5rem] font-black text-[#2D1A1E] leading-[0.95] tracking-tighter text-balance">
                  Reconecte-se com seu <br/><span className="text-primary italic font-serif">bem-estar.</span>
                </h1>
                <p className="text-lg md:text-xl text-[#6E5A5D] leading-relaxed max-w-2xl font-medium opacity-90">
                  Tratamentos personalizados em Fisioterapia, Mat Pilates e Terapias Manuais no conforto da sua casa.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <button onClick={openWhatsApp} className="w-full sm:w-auto bg-[#3D2B2E] text-white px-8 py-5 rounded-2xl font-bold text-lg btn-shadow flex items-center justify-center gap-3 hover:bg-primary transition-colors">
                  <MessageSquare size={20} /> Agendar Avaliação
                </button>
                <Link to={RoutePath.Services} className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-[10px] hover:gap-4 transition-all group">
                  Explorar Serviços <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative hidden lg:block animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-[4rem] shadow-2xl border border-primary/30 p-2 bg-white transform rotate-2 hover:rotate-0 transition-transform duration-700">
                <img 
                  src="https://i.postimg.cc/HLfFr2R6/Jessica-Rosa.jpg" 
                  alt="Dra. Jessica Rosa" 
                  className="w-full h-full object-cover object-top rounded-[3.5rem]" 
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-5 rounded-[2rem] shadow-xl z-20 border border-primary/10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <HeartPulse className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-[#2D1A1E]">CREFITO ATIVO</p>
                    <p className="text-[8px] text-primary font-bold uppercase tracking-widest">Especialista</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Presentation Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 text-primary font-black text-[10px] uppercase tracking-widest">
                <div className="w-8 h-px bg-primary" />
                <span>Bem-vindo(a)</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#2D1A1E] font-serif leading-none tracking-tighter">
                Sou <span className="text-primary italic">Jessica Rosa</span>
              </h2>
              <div className="space-y-4">
                <p className="text-lg md:text-xl text-[#6E5A5D] leading-relaxed font-medium">
                  Fisioterapeuta especialista em reabilitação musculoesquelética pela São Camilo. Acredito que cada paciente merece cuidado individualizado e humanizado.
                </p>
                <div className="p-6 bg-rose-soft/50 rounded-[2.5rem] border-l-8 border-primary italic font-serif text-lg text-[#2D1A1E] shadow-sm leading-snug">
                  "Meu compromisso é ajudar você a recuperar movimento e conquistar mais qualidade de vida."
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, idx) => (
                <div key={idx} className={`p-8 rounded-[3rem] ${idx === 0 ? 'bg-primary text-white col-span-2' : 'bg-white border border-primary/5 shadow-lg'} text-center space-y-1 transition-transform hover:scale-[1.02]`}>
                  <p className="text-4xl md:text-5xl font-black font-serif italic tracking-tighter">{stat.value}</p>
                  <p className={`text-[9px] font-black uppercase tracking-[0.3em] ${idx === 0 ? 'text-white/70' : 'text-[#6E5A5D] opacity-60'}`}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-20 bg-rose-soft/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-3 text-primary font-black text-[10px] uppercase tracking-[0.3em]">
                <Activity size={18} />
                <span>Atuação em Destaque</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-[#2D1A1E] font-serif tracking-tighter leading-none">
                Como posso <span className="text-primary italic">te ajudar?</span>
              </h2>
            </div>
            <Link to={RoutePath.Services} className="bg-[#3D2B2E] text-white px-8 py-4 rounded-xl font-bold text-[9px] uppercase tracking-[0.4em] hover:bg-primary transition-all shadow-lg hover:-translate-y-1">
              Ver Todos os Serviços
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div key={service.id} className="group bg-white rounded-[3.5rem] overflow-hidden border border-primary/5 shadow-sm flex flex-col hover:shadow-2xl transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden relative p-4">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover rounded-[2.8rem] group-hover:scale-105 transition-transform duration-[4s] ease-out" />
                </div>
                <div className="p-10 pt-4 flex-grow flex flex-col">
                  <h3 className="text-[1.65rem] font-bold text-[#2D1A1E] font-serif italic tracking-tight leading-tight mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#6E5A5D] leading-[1.6] font-medium mb-8 text-sm opacity-70 line-clamp-2 tracking-wide">
                    {service.description}
                  </p>
                  <Link to={`${RoutePath.Services}#${service.id}`} className="mt-auto inline-flex items-center gap-4 text-primary text-[10px] font-black uppercase tracking-[0.4em] group-hover:gap-6 transition-all duration-300">
                    <span className="border-b-2 border-transparent group-hover:border-primary/30 pb-1">Ver Detalhes</span>
                    <ArrowRight size={16} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;