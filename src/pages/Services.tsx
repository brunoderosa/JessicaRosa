import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SERVICES_DATA, CONTACT_INFO } from '../constants';
import { Check, ArrowRight, Sparkles, Quote } from 'lucide-react';

const Services: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  const openWhatsApp = (serviceTitle: string) => {
    const text = encodeURIComponent(`Olá Jessica! Gostaria de saber mais sobre o tratamento de ${serviceTitle}.`);
    window.open(`https://wa.me/${CONTACT_INFO.phone}?text=${text}`, '_blank');
  };

  return (
    <div className="pt-28 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 max-w-4xl mx-auto space-y-4 animate-fade-up">
          <div className="inline-flex items-center space-x-3 px-5 py-2 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em] shadow-sm">
            <Sparkles size={16} />
            <span>Excelência Clínica Domiciliar</span>
          </div>
          <h1 className="text-4xl md:text-[4.5rem] font-black text-[#2D1A1E] tracking-tighter leading-[0.85] text-balance">
            Cuidados <span className="text-primary italic font-serif">Sob Medida.</span>
          </h1>
          <p className="text-[#6E5A5D] text-lg font-medium leading-relaxed max-w-2xl mx-auto opacity-80">
            Tratamentos baseados em evidências científicas levados até você.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-12 lg:space-y-16">
          {SERVICES_DATA.map((service, idx) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`scroll-mt-32 flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center animate-fade-up`}
            >
              <div className="w-full lg:w-1/2 relative group">
                <div className="aspect-[1.3/1] rounded-[3rem] overflow-hidden shadow-lg border border-primary/20 p-2 bg-white relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    loading="lazy"
                    className="w-full h-full object-cover rounded-[2.5rem] transition-transform duration-[6s] group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-serif text-primary/10 font-black leading-none">{String(idx + 1).padStart(2, '0')}</span>
                    <h2 className="text-3xl md:text-4xl font-black text-[#2D1A1E] font-serif italic tracking-tighter leading-tight">{service.title}</h2>
                  </div>
                  <p className="text-lg text-[#6E5A5D] leading-relaxed font-medium opacity-90">
                    {service.fullDescription}
                  </p>
                </div>

                {service.benefits && (
                  <div className="space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Indicado para:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center space-x-3 text-[#2D1A1E] text-xs font-bold bg-rose-soft/60 p-3 rounded-xl border border-primary/5">
                          <Check className="text-primary shrink-0" size={14} strokeWidth={3} />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-2">
                  <button 
                    onClick={() => openWhatsApp(service.title)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#3D2B2E] text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-primary transition-all shadow-xl group"
                  >
                    Solicitar Orçamento <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-16 text-center animate-fade-up pb-4">
          <Quote className="text-primary/10 mx-auto mb-4" size={40} />
          <p className="text-2xl md:text-3xl font-serif italic font-bold text-[#2D1A1E] max-w-4xl mx-auto leading-tight px-4">
            "Reconecte-se com seu bem-estar. Cuide do seu corpo com tratamentos personalizados"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
