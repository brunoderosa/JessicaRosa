import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin, Phone, HeartPulse, ArrowUpRight } from 'lucide-react';
import { CONTACT_INFO, SERVICES_DATA } from '../constants';
import { RoutePath } from '../types';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2D1A1E] text-white pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
          {/* Brand Identity Section */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="inline-flex items-center space-x-3 group">
              <div className="bg-primary p-2.5 rounded-xl shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                <HeartPulse className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white tracking-tighter leading-none">JESSICA ROSA</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-black">Fisioterapeuta</span>
              </div>
            </Link>
            <p className="text-white/50 leading-relaxed font-medium text-base max-w-sm">
              Especialista em reabilitação musculoesquelética e Pilates domiciliar. 
              Unindo ciência e acolhimento para devolver sua autonomia no conforto do seu lar.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group"
              >
                <Instagram size={18} className="text-white/60 group-hover:text-white" />
              </a>
              <a 
                href={`mailto:${CONTACT_INFO.email}`}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group"
              >
                <Mail size={18} className="text-white/60 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Navegação</h4>
            <ul className="space-y-4">
              {[
                { label: 'Início', path: RoutePath.Home },
                { label: 'Sobre Mim', path: RoutePath.About },
                { label: 'Serviços', path: RoutePath.Services },
                { label: 'Contato', path: RoutePath.Contact }
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white/60 hover:text-primary font-bold text-sm transition-colors flex items-center group">
                    <ArrowUpRight size={14} className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quick Links */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Especialidades</h4>
            <ul className="space-y-4">
              {SERVICES_DATA.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <Link to={RoutePath.Services} className="text-white/60 hover:text-primary font-bold text-sm transition-colors block">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Atendimento</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="p-2 bg-white/5 rounded-lg">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1">WhatsApp</p>
                  <p className="text-white/80 font-bold font-serif italic text-lg leading-none">11 99250-1384</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="p-2 bg-white/5 rounded-lg">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1">Localização</p>
                  <p className="text-white/60 text-sm font-medium leading-relaxed">
                    {CONTACT_INFO.location}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-[10px] text-white/30 font-black uppercase tracking-[0.3em]">
              © {currentYear} JESSICA ROSA • TODOS OS DIREITOS RESERVADOS
            </p>
            <div className="h-4 w-px bg-white/10 hidden md:block" />
            <div className="flex items-center space-x-6">
              <span className="text-[9px] font-black text-white/20 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full">
                CREFITO ATIVO
              </span>
              <span className="text-[9px] font-black text-white/20 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full">
                PILATES CERTIFICADO
              </span>
            </div>
          </div>
          
          <p className="text-[9px] text-white/20 font-black uppercase tracking-[0.4em]">
            DESIGN BY <span className="text-primary/40">PREMIUM WEB</span>
          </p>
        </div>
      </div>

      {/* Subtle Background Glows */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />
    </footer>
  );
};

export default Footer;