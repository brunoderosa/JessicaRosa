import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, HeartPulse, MessageSquare, Sparkles, Activity, Quote, Star, MapPin, ExternalLink, CheckCircle2, ShieldCheck, Award } from 'lucide-react';
import { SERVICES_DATA, CONTACT_INFO, STATS, TESTIMONIALS } from '../constants';
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
      <section className="relative min-h-[80vh] flex items-center pt-24 pb-12 hero-gradient overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6 animate-fade-up">
              <div className="inline-flex items-center space-x-3 px-5 py-2 rounded-full glass border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
                <Sparkles size={16} className="animate-pulse" />
                <span>Premium Home Care em São Paulo</span>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl md:text-[5.5rem] font-black text-[#2D1A1E] leading-[0.9] tracking-tighter text-balance">
                  Reconecte-se com seu <br/><span className="text-primary italic font-serif">bem-estar.</span>
                </h1>
                
                {/* Imagem Mobile - Visível apenas em telas menores que LG */}
                <div className="lg:hidden relative py-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                  <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl">
                    <img 
                      src="https://i.postimg.cc/HLfFr2R6/Jessica-Rosa.jpg" 
                      alt="Dra. Jessica Rosa" 
                      className="w-full h-full object-cover object-top" 
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-primary text-white p-4 rounded-2xl shadow-xl border-2 border-white">
                    <HeartPulse size={20} />
                  </div>
                </div>

                <p className="text-lg md:text-xl text-[#6E5A5D] leading-relaxed max-w-2xl font-medium opacity-90">
                  Tratamentos personalizados em Fisioterapia, Mat Pilates e Terapias Manuais no conforto da sua casa.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <button onClick={openWhatsApp} className="w-full sm:w-auto bg-[#3D2B2E] text-white px-8 py-5 rounded-2xl font-bold text-lg btn-shadow flex items-center justify-center gap-3 hover:bg-primary transition-colors">
                  <MessageSquare size={20} /> Agendar Avaliação
                </button>
                <Link to={RoutePath.Services} className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-[10px] hover:gap-4 transition-all group">
                  Explorar Serviços <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Imagem Desktop - Oculta no Mobile */}
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 text-primary font-black text-[10px] uppercase tracking-widest">
                <div className="w-8 h-px bg-primary" />
                <span>Sobre a Especialista</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#2D1A1E] font-serif leading-none tracking-tighter">
                Dra. <span className="text-primary italic">Jessica Rosa</span>
              </h2>
              <div className="space-y-4">
                <p className="text-lg md:text-xl text-[#6E5A5D] leading-relaxed font-medium">
                  Fisioterapeuta graduada e pós-graduada pela São Camilo. Com mais de 5 anos de experiência, transformo a reabilitação em um momento de cuidado genuíno.
                </p>
                <div className="p-8 bg-rose-soft/50 rounded-[3rem] border-l-8 border-primary italic font-serif text-xl text-[#2D1A1E] shadow-sm leading-snug">
                  "Meu objetivo não é apenas tratar uma dor, mas devolver a liberdade do movimento a cada paciente."
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
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-3 text-primary font-black text-[10px] uppercase tracking-[0.3em]">
                <Activity size={18} />
                <span>Nossas Especialidades</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-[#2D1A1E] font-serif tracking-tighter leading-none">
                Como posso <span className="text-primary italic">te ajudar?</span>
              </h2>
            </div>
            <Link to={RoutePath.Services} className="bg-[#3D2B2E] text-white px-8 py-4 rounded-xl font-bold text-[9px] uppercase tracking-[0.4em] hover:bg-primary transition-all shadow-lg">
              Ver Catálogo Completo
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div key={service.id} className="group bg-white rounded-[3.5rem] overflow-hidden border border-primary/5 shadow-sm flex flex-col hover:shadow-2xl transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden relative p-4">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover rounded-[2.8rem] group-hover:scale-105 transition-transform duration-[4s] ease-out" />
                </div>
                <div className="p-10 pt-4 flex-grow flex flex-col">
                  <h3 className="text-[1.65rem] font-bold text-[#2D1A1E] font-serif italic tracking-tight mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#6E5A5D] leading-[1.6] font-medium mb-8 text-sm opacity-70 line-clamp-2">
                    {service.description}
                  </p>
                  <Link to={`${RoutePath.Services}#${service.id}`} className="mt-auto inline-flex items-center gap-4 text-primary text-[10px] font-black uppercase tracking-[0.4em] group-hover:gap-6 transition-all duration-300">
                    <span>Ver Detalhes</span>
                    <ArrowRight size={16} strokeWidth={2.5} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REFORMULATED REVIEWS SECTION */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.4em]">
              <Star size={14} fill="currentColor" />
              <span>Avaliações Reais</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#2D1A1E] font-serif tracking-tighter leading-tight">
              A palavra de <span className="text-primary italic">quem confia.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Coluna de Depoimentos */}
            <div className="lg:col-span-8 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {TESTIMONIALS.map((t, idx) => (
                  <div key={idx} className="bg-rose-soft p-10 rounded-[3rem] border border-primary/10 flex flex-col hover:shadow-xl transition-all duration-500 relative">
                    <Quote className="text-primary/20 absolute top-8 right-10" size={40} />
                    <div className="mb-6 flex items-center gap-1 text-yellow-500">
                      {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                    </div>
                    <p className="text-lg text-[#2D1A1E] font-serif italic leading-relaxed mb-8 flex-grow">
                      "{t.text}"
                    </p>
                    <div className="flex items-center gap-4 pt-6 border-t border-primary/5">
                      <div className="w-10 h-10 rounded-xl bg-dark text-white flex items-center justify-center font-black text-xs">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-dark">{t.name}</p>
                        <p className="text-[8px] text-primary font-bold uppercase tracking-widest">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coluna de Autoridade */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              
              {/* Card Google Maps - Reestilizado para ser mais limpo */}
              <div className="bg-white p-10 rounded-[3.5rem] border-2 border-primary/10 shadow-2xl flex flex-col gap-6 group hover:border-primary/30 transition-all">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 bg-rose-soft rounded-2xl flex items-center justify-center text-primary">
                    <MapPin size={28} />
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1 text-yellow-500">
                      {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    <span className="text-[10px] font-black text-dark/30 uppercase tracking-widest">Nota 5.0</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif font-bold text-dark italic leading-tight">Excelência no Google Maps</h3>
                  <p className="text-sm text-[#6E5A5D] leading-relaxed">Referência em atendimento domiciliar humanizado e especializado na região de São Paulo.</p>
                </div>

                <a 
                  href={CONTACT_INFO.googleMapsReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-dark text-white px-8 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-primary transition-all shadow-lg"
                >
                  Ler todas as Reviews <ExternalLink size={14} />
                </a>
              </div>

              {/* Card de Satisfação - Isolado e Protegido contra sobreposição */}
              <div className="bg-primary p-10 rounded-[3rem] text-white shadow-xl flex items-center gap-6 group hover:scale-[1.02] transition-transform">
                <div className="w-16 h-16 rounded-[1.5rem] bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <Award size={32} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">Compromisso</span>
                  <h4 className="text-xl font-serif font-bold italic leading-none">Satisfação de 100%</h4>
                  <p className="text-[9px] mt-2 font-black uppercase tracking-widest text-white/40 italic">+450 vidas transformadas</p>
                </div>
              </div>

            </div>
          </div>

          {/* Badges Finais */}
          <div className="mt-20 border-t border-primary/10 pt-12 flex flex-wrap justify-center gap-12 opacity-40">
            <div className="flex items-center gap-3">
              <ShieldCheck size={20} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Crefito Verificado</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 size={20} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Prática Baseada em Evidências</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;