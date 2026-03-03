import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { serviceCategories } from '../constants';


export default function Services() {
  const navigate = useNavigate();

  const handleServiceClick = (serviceName: string) => {
    navigate('/contact', { state: { selectedService: serviceName } });
  };

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-stone-50/50 -z-10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.4em] text-gold-500 font-bold block mb-4"
          >
            Our Menu
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onClick={() => navigate('/services')}
            className="inline-block cursor-pointer group"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 group-hover:text-gold-600 transition-colors duration-300">
              Services & Pricing
            </h2>
            <div className="h-px w-0 group-hover:w-full bg-gold-500 transition-all duration-500 mx-auto mt-2"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {serviceCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-8 p-8 rounded-3xl bg-white shadow-xl shadow-stone-200/50 border border-stone-100 hover:shadow-2xl hover:shadow-gold-500/5 transition-all duration-500"
            >
              <h4 className="text-2xl font-serif italic border-b border-gold-100 pb-4 text-stone-900">
                {category.title}
              </h4>
              <ul className="space-y-6">
                {category.items.map((item, itemIdx) => (
                  <li 
                    key={itemIdx} 
                    className="flex justify-between items-baseline group cursor-pointer"
                    onClick={() => handleServiceClick(item.name)}
                  >
                    <span className="text-stone-600 group-hover:text-gold-600 transition-colors text-sm md:text-base font-medium group-hover:underline decoration-gold-300 underline-offset-4">{item.name}</span>
                    <div className="flex-grow border-b border-dotted border-stone-200 mx-2 group-hover:border-gold-300 transition-colors"></div>
                    <span className="text-stone-900 font-bold text-sm md:text-base">{item.price}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center text-stone-400 text-[10px] md:text-xs uppercase tracking-widest"
        >
          * Prices may vary based on hair length, thickness, and specific stylist. Please consult for a precise quote.
        </motion.div>
      </div>
    </section>
  );
}
