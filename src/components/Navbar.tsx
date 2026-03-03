import React from 'react';
import { Phone, Instagram, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services/Pricing', path: '/services' },
    { name: 'Our Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isOpen ? 'bg-white py-3 shadow-lg' : (scrolled ? 'bg-white/80 backdrop-blur-xl py-3 shadow-lg shadow-stone-900/5' : 'bg-transparent py-6')}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex-shrink-0 group">
            <div className="flex flex-col items-start">
              <span className="text-3xl md:text-4xl font-serif tracking-tight text-stone-900 group-hover:text-gold-500 transition-colors duration-500 leading-none italic">Elle</span>
              <span className="text-[7px] md:text-[9px] uppercase tracking-[0.6em] md:tracking-[0.8em] text-gold-600 font-black mt-1 md:mt-1.5 ml-0.5">Hair Salon</span>
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-12 items-center">
            {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className={`text-[10px] uppercase tracking-[0.3em] font-semibold transition-all duration-300 relative group/link ${location.pathname === link.path ? 'text-stone-900' : 'text-stone-500 hover:text-stone-900'}`}
                >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-px bg-gold-500 transition-all duration-500 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover/link:w-full'}`}></span>
              </Link>
            ))}
              <Link 
                to="/contact#message"
                className="bg-stone-900 text-white px-8 py-3 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-gold-500 transition-all rounded-full shadow-lg shadow-stone-900/10 inline-block"
              >
              Book Now
            </Link>
          </div>

            <div className="md:hidden flex items-center space-x-6">
              <a href="tel:17149921800" className="text-stone-900"><Phone size={18} /></a>
              <button onClick={() => setIsOpen(!isOpen)} className="text-stone-900">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="md:hidden fixed inset-0 bg-stone-900/20 backdrop-blur-sm z-[60]"
              />
            
            {/* Drawer */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="md:hidden fixed top-0 right-0 bottom-0 w-[80%] max-w-xs bg-white z-[70] shadow-2xl flex flex-col"
            >
              <div className="flex justify-between items-center px-6 py-8 border-b border-slate-100">
                <span className="text-xs uppercase tracking-[0.4em] font-bold text-gold-500">Menu</span>
                <button onClick={() => setIsOpen(false)} className="text-stone-900 p-1 hover:text-gold-500 transition-colors">
                  <X size={24} strokeWidth={1.5} />
                </button>
              </div>

              <div className="flex-1 px-6 py-12">
                <nav className="space-y-6">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                    >
                      <Link 
                        to={link.path} 
                        className={`text-xl font-serif block transition-all duration-300 ${location.pathname === link.path ? 'text-stone-900 pl-4 border-l-2 border-gold-500 italic' : 'text-stone-400 hover:text-stone-900 hover:pl-2'}`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-16 space-y-8"
                >
                  <Link 
                    to="/contact#message"
                    onClick={() => setIsOpen(false)}
                    className="btn-primary w-full text-center inline-block !py-4 !text-[10px]"
                  >
                    Book Now
                  </Link>
                  
                  <div className="flex justify-center space-x-8">
                    <a href="https://www.instagram.com/elle_hairsalon_/?hl=en" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-gold-500 transition-colors p-2"><Instagram size={20} /></a>
                    <a href="tel:17149921800" className="text-slate-400 hover:text-gold-500 transition-colors p-2"><Phone size={20} /></a>
                  </div>
                </motion.div>
              </div>

              <div className="p-8 border-t border-slate-50">
                <p className="text-[9px] uppercase tracking-[0.3em] text-slate-400 text-center">Elle Hair Salon • La Habra</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
