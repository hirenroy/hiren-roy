import React from 'react';
import { motion } from 'motion/react';

const galleryImages = [
  "https://hairplus.sg/wp-content/uploads/2022/03/2.png",
  "https://wimg.heraldcorp.com/content/default/2024/04/30/20240430050723_0.jpg",
  "https://hairplus.sg/wp-content/uploads/2022/03/3.png",
  "https://thechicsavvy.com/wp-content/uploads/2025/04/Korean-Hairstyle14-775x1024.webp",
  "https://thechicsavvy.com/wp-content/uploads/2025/04/Korean-Hairstyle15-683x1024.webp"
];

export default function Gallery() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.4em] text-gold-500 font-bold block mb-4"
            >
              Our Portfolio
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-stone-900"
            >
              Artistry in Motion
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a 
              href="https://www.instagram.com/elle_hairsalon_/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.2em] font-bold text-stone-900 border-b border-stone-900/20 pb-2 hover:border-gold-500 transition-colors"
            >
              Follow on Instagram
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6">
          {galleryImages.map((img, idx) => (
            <motion.a
              key={idx}
              href="https://www.instagram.com/elle_hairsalon_/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative overflow-hidden rounded-2xl md:rounded-[2rem] group cursor-pointer block aspect-[3/4] ${
                idx < 2 ? 'md:col-span-3' : 'md:col-span-2'
              }`}
            >
              <img 
                src={img} 
                alt={`Gallery work ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white text-[10px] uppercase tracking-[0.3em] font-bold border border-white/40 px-4 py-2 rounded-full backdrop-blur-sm">View Work</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
