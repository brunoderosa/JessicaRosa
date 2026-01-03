import React from 'react';
import { GraduationCap, Award, Stethoscope, Sparkles, Home, ShieldCheck, HeartPulse, Quote, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-16 animate-in fade-in slide-in-from-bottom-5 duration-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section - About */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center mb-16">
          <div className="lg:col-span-5 relative group">
            <div className="relative z-10 aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(197,134,145,0.2)] border border-primary/30 p-2 bg-white transition-transform duration-700 group-hover:scale-[1.02]">
              <img
                src="https://i.postimg.cc/HLfFr2R6/Jessica-Rosa.jpg"
                alt="Dra. Jessica Rosa - Fisioterapeuta"
                className="w-full h-full object-cover object-top rounded-[3.5rem]"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-[60px]" />
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-3 px-6 py-2 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em]">
                <Sparkles size={16} />
                <span>Propósito & Humanização</span>
              </div>
              <h1 className="text-5xl md:text-[5rem] font-black text-[#2D1A1E] leading-[0.85] tracking-tighter text-balance">
                Ciência com <br/><span className="text-primary italic font-serif">alma.</span>
              </h1>
            </div>

            <div className="relative pl-10 border-l-4 border-primary/20">
              <Quote className="absolute -left-5 -top-5 text-primary/20" size={40} />
              <p className="text-xl md:text-3xl font-serif italic text-[#2D1A1E] leading-tight">
                "Acredito que o verdadeiro movimento começa quando o paciente se sente compreendido em sua totalidade."
              </p>
            </div>

            <p className="text-lg text-[#6E5A5D] leading-relaxed font-medium max-w-2xl opacity-90">
              Sou <strong>Jessica Rosa</strong>, fisioterapeuta dedicada a levar a alta performance clínica para dentro do seu lar. Minha formação técnica sólida é a base para o seu bem-estar.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl border border-primary/10 shadow-sm">
                <CheckCircle2 size={16} className="text-primary" />
                <span className="text-[10px] font-black uppercase tracking-widest text-[#2D1A1E]">Pós-Graduada pela São Camilo</span>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl border border-primary/10 shadow-sm">
                <CheckCircle2 size={16} className="text-primary" />
                <span className="text-[10px] font-black uppercase tracking-widest text-[#2D1A1E]">Ortopedia e Traumatologia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: GraduationCap, title: 'Formação', text: 'Graduação e Pós-graduação em Ortopedia e Traumatologia pelo Centro Universitário São Camilo.' },
            { icon: Stethoscope, title: 'Experiência', text: 'Foco em Reabilitação Ortopédica e Geriatria, com protocolos baseados em evidências.' },
            { icon: Home, title: 'Home Care', text: 'Atendimento exclusivo em domicílio em São Paulo Capital, priorizando sua conveniência.' }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-[3rem] border border-primary/5 shadow-lg group hover:-translate-y-2 transition-all">
              <div className="w-14 h-14 bg-rose-soft rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <item.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold font-serif italic text-[#2D1A1E] mb-3">{item.title}</h3>
              <p className="text-[#6E5A5D] text-sm leading-relaxed opacity-80">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Commitment Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch mb-16">
           <div className="relative rounded-[3.5rem] overflow-hidden shadow-xl min-h-[400px]">
              <img 
                src="https://i.postimg.cc/50dRmm1n/tratamento-fisioterapico.jpg" 
                alt="Tratamento Fisioterápico Especializado" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
           </div>
           
           <div className="relative rounded-[3.5rem] bg-[#2D1A1E] p-12 text-left shadow-xl flex flex-col justify-center">
            <div className="space-y-8 relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-white font-serif italic leading-[1.1] tracking-tighter">
                Qualidade de vida em <span className="text-primary">cada detalhe.</span>
              </h2>
              <p className="text-white/60 text-base font-medium leading-relaxed">
                Cada sessão é planejada após uma avaliação criteriosa, respeitando o seu ritmo e limitações.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <HeartPulse className="text-primary" size={18} />
                  <p className="text-[9px] font-black uppercase tracking-widest text-white/40">Cuidado Individual</p>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-primary" size={18} />
                  <p className="text-[9px] font-black uppercase tracking-widest text-white/40">Ética Profissional</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;