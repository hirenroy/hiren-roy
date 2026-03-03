import React from 'react';
import { motion } from 'motion/react';
import Services from '../components/Services';
import FAQ from '../components/FAQ';

export default function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <div className="bg-white py-12 border-b border-gold-200">
        <div className="max-w-7xl mx-auto px-4 text-center overflow-hidden">
        </div>
      </div>
      <Services />
      <FAQ />
      
      {/* Consultation CTA */}
      <section className="py-32 bg-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=2000" 
            alt="Salon Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif mb-8"
          >
            Not sure which treatment is right for you?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 mb-12 text-xl font-light"
          >
            Book a complimentary consultation with one of our master stylists. 
            We'll analyze your hair type and discuss your goals to create a 
            personalized plan.
          </motion.p>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:17149921800"
            className="btn-primary !bg-gold-500 !text-white"
          >
            Call to Consult
          </motion.a>
        </div>
      </section>
    </motion.div>
  );
}
