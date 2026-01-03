import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import { RoutePath } from './types';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path={RoutePath.Home} element={<Home />} />
          <Route path={RoutePath.About} element={<About />} />
          <Route path={RoutePath.Services} element={<Services />} />
          <Route path={RoutePath.Contact} element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
