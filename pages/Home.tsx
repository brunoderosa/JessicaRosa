import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Sparkles, Activity, Quote, Star, MapPin, ExternalLink, ChevronLeft, ChevronRight, Award, HeartPulse } from 'lucide-react';
import { SERVICES_DATA, CONTACT_INFO, STATS, TESTIMONIALS } from '../constants';
import { RoutePath } from '../types';

const Home: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeTestimonial]);

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(`Olá Jessica! Gostaria de mais informações sobre seus atendimentos de fisioterapia em São Paulo.`);
    window.open(`https://wa.me/${CONTACT_INFO.phone}?text=${text}`, '_blank');
  };

  const featuredServices = SERVICES_DATA.slice(0, 3);

  return (
    <div className="animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-28 pb-12 hero-gradient overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 flex flex-col space-y-8 md:space-y-12 animate-fade-up">
              {/* Badge superior */}
              <div className="inline-flex self-start items-center space-x-3 px-5 py-2 rounded-full glass border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] shadow-sm">
                <Sparkles size={14} className="animate-pulse" />
                <span>Premium Home Care em São Paulo</span>
              </div>
              
              {/* Título Principal */}
              <h1 className="text-5xl md:text-[5.5rem] font-black text-[#2D1A1E] leading-[0.9] tracking-tighter text-balance">
                Reconecte-se <br/>com seu <br/><span className="text-primary italic font-serif">bem-estar.</span>
              </h1>

              {/* Versão Mobile/Tablet da Imagem */}
              <div className="lg:hidden relative w-full max-w-sm mx-auto my-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <div className="relative z-10 aspect-[4/5] rounded-[3.5rem] shadow-[0_30px_60px_-15px_rgba(197,134,145,0.25)] border border-primary/20 p-2 bg-white transform rotate-1">
                  <img 
                    src="https://i.postimg.cc/HLfFr2R6/Jessica-Rosa.jpg" 
                    alt="Dra. Jessica Rosa" 
                    className="w-full h-full object-cover object-top rounded-[3rem]" 
                  />
                  <div className="absolute bottom-6 -right-2 bg-white p-4 rounded-[2rem] shadow-xl flex items-center gap-3 border border-primary/5 z-20">
                     <HeartPulse size={20} className="text-primary" />
                     <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase text-[#2D1A1E] leading-none mb-1">CREFITO ATIVO</span>
                        <span className="text-[9px] font-bold uppercase text-primary leading-none">ESPECIALISTA</span>
                     </div>
                  </div>
                </div>
              </div>

              {/* Descrição e Botões */}
              <div className="space-y-6 md:space-y-8">
                <p className="text-lg md:text-xl text-[#6E5A5D] leading-relaxed max-w-xl font-medium tracking-tight opacity-90">
                  Especialista em <strong className="text-[#3D2B2E] font-bold">Fisioterapia</strong>, <strong className="text-[#3D2B2E] font-bold">Mat Pilates</strong> e <strong className="text-[#3D2B2E] font-bold">Terapias Manuais</strong>: unindo Rigor Científico e a Conveniência de um Atendimento Personalizado.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-6 pt-2">
                  <button onClick={openWhatsApp} className="w-full sm:w-auto bg-[#3D2B2E] text-white px-10 py-6 rounded-2xl font-bold text-lg btn-shadow flex items-center justify-center gap-4 hover:bg-primary transition-all duration-500">
                    <MessageSquare size={22} /> Agendar Avaliação
                  </button>
                  <Link to={RoutePath.Services} className="flex items-center gap-2 text-primary font-black uppercase tracking-[0.3em] text-[10px] hover:gap-4 transition-all group">
                    Explorar Especialidades <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Hero Image - Versão Desktop com Borda Branca Corrigida */}
            <div className="hidden lg:block lg:col-span-5 relative w-full animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative z-10 aspect-[4/5] overflow-visible rounded-[4rem] md:rounded-[5rem] shadow-[0_40px_80px_-20px_rgba(197,134,145,0.2)] border border-primary/30 p-2 bg-white transform rotate-1 hover:rotate-0 transition-transform duration-1000">
                <div className="w-full h-full overflow-hidden rounded-[3.5rem] md:rounded-[4.5rem]">
                  <img 
                    src="https://i.postimg.cc/HLfFr2R6/Jessica-Rosa.jpg" 
                    alt="Dra. Jessica Rosa" 
                    className="w-full h-full object-cover object-top scale-105" 
                  />
                </div>
                <div className="absolute bottom-10 -right-8 bg-white p-8 rounded-[3rem] shadow-[0_20px_40px_rgba(0,0,0,0.15)] flex items-center gap-5 border border-primary/5 animate-in slide-in-from-right-4 duration-1000 delay-500 max-w-[280px] z-20">
                   <div className="text-primary">
                      <HeartPulse size={32} />
                   </div>
                   <div className="flex flex-col">
                      <span className="text-[13px] font-black uppercase tracking-wider text-[#2D1A1E]">CREFITO ATIVO</span>
                      <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-primary">ESPECIALISTA</span>
                   </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Presentation Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 text-primary font-black text-[10px] uppercase tracking-[0.4em]">
                <div className="w-10 h-px bg-primary" />
                <span>Sobre a Especialista</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#2D1A1E] font-serif leading-tight tracking-tighter">
                Dra. <span className="text-primary italic">Jessica Rosa</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-[#6E5A5D] leading-relaxed font-medium">
                  Fisioterapeuta pós-graduada pela São Camilo. Com mais de 5 anos de experiência, transformo o cuidado tradicional em uma experiência personalizada de <strong>reabilitação e bem-estar.</strong>
                </p>
                <div className="p-6 md:p-7 bg-rose-soft/80 rounded-[2rem] border-l-[8px] border-primary/20 italic font-serif text-[#2D1A1E] shadow-sm leading-snug relative overflow-hidden">
                  <p className="text-lg md:text-xl tracking-tight max-w-xl">
                    "Meu objetivo não é apenas tratar uma dor, mas devolver a <br className="hidden lg:block"/> liberdade do movimento a cada paciente."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {STATS.map((stat, idx) => (
                <div 
                  key={idx} 
                  className={`p-10 rounded-[3.5rem] flex flex-col items-center justify-center gap-3 transition-all hover:-translate-y-1 duration-500 shadow-xl ${
                    idx === 0 
                      ? 'bg-primary text-white col-span-2 py-12 relative overflow-hidden' 
                      : 'bg-white border border-primary/5'
                  }`}
                >
                  {idx === 0 && (
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none opacity-30" />
                  )}
                  <p className={`font-serif italic font-black tracking-tighter leading-none ${
                    idx === 0 ? 'text-6xl md:text-7xl' : 'text-3xl md:text-4xl text-[#2D1A1E]'
                  }`}>
                    {stat.value}
                  </p>
                  <p className={`text-[10px] font-black uppercase tracking-[0.5em] text-center ${
                    idx === 0 ? 'text-white/80' : 'text-[#6E5A5D] opacity-40'
                  }`}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-24 bg-rose-soft/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 text-primary font-black text-[10px] uppercase tracking-[0.4em]">
                <Activity size={18} />
                <span>Especialidades</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#2D1A1E] font-serif tracking-tighter leading-tight">
                Como posso <br/><span className="text-primary italic">te ajudar?</span>
              </h2>
            </div>
            <Link to={RoutePath.Services} className="bg-[#3D2B2E] text-white px-10 py-5 rounded-xl font-black text-[10px] uppercase tracking-[0.4em] hover:bg-primary transition-all shadow-xl">
              Ver Todas Especialidades
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredServices.map((service) => (
              <div key={service.id} className="group bg-white rounded-[3.5rem] overflow-hidden border border-primary/5 shadow-sm flex flex-col hover:shadow-2xl transition-all duration-700">
                <div className="aspect-[4/3] overflow-hidden relative p-4">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover rounded-[2.5rem] group-hover:scale-105 transition-transform duration-[5s]" />
                </div>
                <div className="p-10 pt-4 flex-grow flex flex-col">
                  <h3 className="text-lg md:text-xl font-bold text-[#3D2B2E] font-serif italic tracking-tighter mb-4 group-hover:text-primary transition-colors leading-none whitespace-nowrap">
                    {service.title}
                  </h3>
                  <p className="text-[#6E5A5D] leading-relaxed font-medium mb-8 text-sm opacity-80 line-clamp-3">
                    {service.description}
                  </p>
                  <Link to={`${RoutePath.Services}#${service.id}`} className="mt-auto inline-flex items-center gap-4 text-primary text-[10px] font-black uppercase tracking-[0.4em] group-hover:gap-6 transition-all">
                    <span>Ver Detalhes</span>
                    <ArrowRight size={16} strokeWidth={2.5} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-28 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-3 text-primary text-[10px] font-black uppercase tracking-[0.4em]">
              <Star size={14} fill="currentColor" />
              <span>Depoimentos Reais</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D1A1E] font-serif tracking-tight">
              A palavra de <span className="text-primary italic">quem confia.</span>
            </h2>
          </div>

          <div className="relative mb-12 group/slider px-4 lg:px-12">
            <button 
              onClick={handlePrevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 lg:-translate-x-10 z-20 bg-white p-4 rounded-full shadow-2xl border border-primary/10 text-primary hover:bg-primary/10 hover:scale-110 transition-all opacity-0 group-hover/slider:opacity-100 hidden md:flex items-center justify-center"
            >
              <ChevronLeft size={28} />
            </button>
            
            <button 
              onClick={handleNextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 lg:translate-x-10 z-20 bg-white p-4 rounded-full shadow-2xl border border-primary/10 text-primary hover:bg-primary/10 hover:scale-110 transition-all opacity-0 group-hover/slider:opacity-100 hidden md:flex items-center justify-center"
            >
              <ChevronRight size={28} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative min-h-[380px]">
              {[0, 1, 2].map((offset) => {
                const idx = (activeTestimonial + offset) % TESTIMONIALS.length;
                const t = TESTIMONIALS[idx];
                return (
                  <div 
                    key={`${idx}-${offset}`} 
                    className={`bg-rose-soft/40 p-8 rounded-[3rem] shadow-sm border border-primary/5 flex flex-col relative animate-in fade-in slide-in-from-right-8 duration-1000 ${offset === 1 ? 'hidden md:flex' : offset === 2 ? 'hidden lg:flex' : 'flex'}`}
                  >
                    <div className="flex items-center gap-1.5 text-yellow-500 mb-6">
                      {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    <Quote className="absolute top-8 right-8 text-primary/10" size={32} />
                    <p className="text-[#2D1A1E] font-serif italic text-lg leading-relaxed mb-8 flex-grow">
                      "{t.text}"
                    </p>
                    <div className="flex items-center gap-4 pt-6 border-t border-primary/5 mt-auto">
                      <div className="w-10 h-10 rounded-xl bg-[#3D2B2E] text-white flex items-center justify-center font-black text-[10px]">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-[11px] font-black uppercase tracking-widest text-[#2D1A1E]">{t.name}</p>
                        <p className="text-[9px] text-primary font-bold uppercase tracking-[0.2em]">{t.role}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Optimized Conversion Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto mt-16 px-4">
            
            {/* Google Reviews Card */}
            <div className="bg-white p-8 md:p-10 rounded-[3.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-primary/5 flex flex-col gap-8 h-full group hover:shadow-xl transition-all duration-500">
              
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 bg-[#FDFBFB] rounded-2xl flex items-center justify-center text-[#B58A91] border border-[#F2E4E6] group-hover:scale-105 transition-transform duration-500">
                  <MapPin size={28} strokeWidth={1.5} />
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-[#D4AF37] justify-end mb-1">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-[9px] font-black uppercase tracking-[0.1em] text-[#2D1A1E] leading-none">NOTA 5.0</p>
                </div>
              </div>
              
              <div className="space-y-4 flex-grow">
                <h3 className="text-3xl md:text-4xl font-bold font-serif text-[#3D2B2E] tracking-tight leading-none italic">
                  Excelência no <br/>Google Maps
                </h3>
                <p className="text-[#6E5A5D] text-base leading-relaxed font-medium opacity-80">
                  Referência em atendimento domiciliar humanizado e especializado na região de São Paulo.
                </p>
              </div>

              <a 
                href={CONTACT_INFO.googleMapsReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2D1A1E] text-white py-5 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-[#3D2B2E]/90 transition-all shadow-lg group/btn"
              >
                LER TODAS AS REVIEWS <ExternalLink size={16} />
              </a>
            </div>

            {/* Redesigned Quality Commitment Card */}
            <div className="bg-primary px-8 py-10 rounded-[4rem] text-white flex items-center gap-8 h-full shadow-[0_30px_60px_-15px_rgba(197,134,145,0.3)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none opacity-20" />
              
              <div className="relative z-10 p-5 bg-white/15 rounded-[2.5rem] backdrop-blur-md border border-white/25 group-hover:scale-105 transition-transform duration-700">
                <Award size={36} className="text-white drop-shadow-lg" />
              </div>
              
              <div className="relative z-10 flex flex-col justify-center gap-1">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-80 mb-1">
                  COMPROMISSO
                </p>
                <h3 className="text-2xl md:text-3xl font-serif italic font-medium leading-none tracking-tight">
                  Satisfação de 100%
                </h3>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mt-2">
                  +450 VIDAS TRANSFORMADAS
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
