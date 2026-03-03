import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUp, Sparkles } from 'lucide-react';

export default function Charm() {
  const [showPopup, setShowPopup] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('hasSeenWelcomePopup');
      if (!hasSeenPopup) {
        setShowPopup(true);
      }
    }, 3000);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    sessionStorage.setItem('hasSeenWelcomePopup', 'true');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Welcome Popup */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-slate-900/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-[2.5rem] overflow-hidden max-w-lg w-full shadow-2xl relative"
            >
              <button 
                onClick={closePopup}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 z-10 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 h-48 md:h-auto relative">
                  <img 
                    src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800" 
                    alt="Salon Interior" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gold-500/10"></div>
                </div>
                <div className="w-full md:w-1/2 p-10 space-y-6 flex flex-col justify-center">
                  <div className="flex items-center space-x-2 text-gold-500">
                    <Sparkles size={16} />
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Special Offer</span>
                  </div>
                  <h3 className="text-3xl font-serif text-slate-900 leading-tight">
                    New Client <br />
                    <span className="italic">Experience</span>
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Enjoy 15% OFF your first visit. Experience the pinnacle of Korean hair artistry.
                  </p>
                  <button 
                    onClick={closePopup}
                    className="btn-primary !py-3 !text-[10px] w-full"
                  >
                    Claim Offer
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1, backgroundColor: '#c29642' }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-xl shadow-slate-900/20 transition-colors"
          >
            <ArrowUp size={20} strokeWidth={2.5} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
