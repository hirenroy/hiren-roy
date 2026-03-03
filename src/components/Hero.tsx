import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen flex flex-col lg:flex-row items-stretch overflow-hidden bg-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold-50/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-stone-50 rounded-full blur-[100px]"></div>
      </div>
      
      {/* Text Content */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-24 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="block text-[10px] uppercase font-bold text-gold-500 mb-8"
          >
            La Habra's Premier Destination
          </motion.span>
          
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif text-stone-900 leading-[0.85] tracking-tighter mb-10">
            <span className="block overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Artistry
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="block italic font-light text-gold-500/80"
              >
                Defined
              </motion.span>
            </span>
          </h1>

          <p className="text-stone-500 text-base md:text-xl font-light leading-relaxed mb-12 max-w-md">
            Experience the pinnacle of Korean hair artistry. 
            Precision cutting, custom color, and master transformations.
          </p>

          <div className="flex flex-wrap gap-6">
            <motion.a 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="/contact#message"
              className="btn-primary"
            >
              Book Appointment
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="/services"
              className="btn-outline"
            >
              Our Services
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Image Content */}
      <div className="flex-1 relative h-[50vh] lg:h-full overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=2000" 
            alt="High-end Hair Styling" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent hidden lg:block"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent lg:hidden"></div>
        </motion.div>
        
        {/* Floating Detail */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 right-12 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl hidden md:block max-w-[200px]"
        >
          <p className="text-[10px] uppercase tracking-widest text-white/80 mb-2">Signature Style</p>
          <p className="text-white font-serif italic text-lg">Digital Perm Mastery</p>
        </motion.div>
      </div>

      <motion.div 
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-8 z-20 text-stone-300 hidden lg:block"
      >
        <ArrowDown size={20} strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}
