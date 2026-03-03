import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah M.",
    location: "La Habra",
    text: "The best hair experience I've had in years. The attention to detail with my digital perm was incredible. I finally found my forever salon.",
    rating: 5
  },
  {
    name: "Jessica L.",
    location: "Fullerton",
    text: "Sue is a master of her craft. I've been coming here for my balayage for two years and I'm always blown away by the results.",
    rating: 5
  },
  {
    name: "Michelle W.",
    location: "Brea",
    text: "Professional, clean, and incredibly talented stylists. They really listen to what you want and deliver even better results.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.4em] text-gold-500 font-bold block mb-4"
          >
            Client Stories
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-stone-900"
          >
            Kind Words from Our Guests
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[2rem] shadow-xl shadow-stone-200/50 border border-stone-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex space-x-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <p className="text-stone-600 text-lg font-light leading-relaxed italic mb-8">
                  "{t.text}"
                </p>
              </div>
              <div>
                <p className="text-stone-900 font-bold text-sm tracking-wide">{t.name}</p>
                <p className="text-stone-400 text-[10px] uppercase tracking-widest mt-1">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
