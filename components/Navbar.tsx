import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, HeartPulse } from 'lucide-react';
import { RoutePath } from '../types';
import { CONTACT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', path: RoutePath.Home },
    { label: 'Sobre', path: RoutePath.About },
    { label: 'Serviços', path: RoutePath.Services },
    { label: 'Contato', path: RoutePath.Contact },
  ];

  const isActive = (path: string) => location.pathname === path;

  const openWhatsApp = () => {
    const text = encodeURIComponent(`Olá Jessica! Gostaria de ${CONTACT_INFO.cta}.`);
    window.open(`https://wa.me/${CONTACT_INFO.phone}?text=${text}`, '_blank');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 glass shadow-sm' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-primary p-2 rounded-xl shadow-lg shadow-primary/20">
               <HeartPulse className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-primary tracking-tighter leading-none">JESSICA ROSA</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#6e5559] font-black">Fisioterapeuta</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-bold tracking-widest uppercase transition-all hover:text-primary ${
                  isActive(item.path) ? 'text-primary' : 'text-gray-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={openWhatsApp}
              className="bg-primary text-white px-6 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:shadow-lg hover:bg-[#8a5a64] transition-all"
            >
              Agendar Avaliação
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 py-8 px-8 space-y-6 shadow-2xl animate-in slide-in-from-top duration-300">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block text-2xl font-bold ${
                isActive(item.path) ? 'text-primary' : 'text-gray-400'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={openWhatsApp}
            className="block w-full bg-primary text-white py-5 rounded-2xl text-center font-bold text-lg"
          >
            Fazer Agendamento
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;