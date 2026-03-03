import React from 'react';
import { motion } from 'motion/react';
import Team from '../components/Team';

export default function TeamPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <div className="bg-white py-24 border-b border-gold-200">
        <div className="max-w-7xl mx-auto px-4 text-center overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-serif text-slate-900 mb-6"
          >
            Our Team
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg md:text-xl font-light"
          >
            Meet our collective of master stylists and beauty experts. 
            With decades of international experience, we are dedicated to 
            crafting your perfect look.
          </motion.p>
        </div>
      </div>
      <Team />
    </motion.div>
  );
}
