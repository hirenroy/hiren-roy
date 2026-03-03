import React from 'react';
import { motion } from 'motion/react';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import Process from '../components/Process';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      
      {/* Featured Services Teaser */}
      <section id="expertise" className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-[4/5] overflow-hidden rounded-[3rem] shadow-2xl group"
            >
              <img 
                src="https://static.wixstatic.com/media/adca43_4a6f5c0ff56c407d9cb3186a6b9a3a04~mv2.jpg/v1/crop/x_266,y_216,w_3355,h_3638/fill/w_806,h_874,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/sssoo.jpg" 
                alt="Sue, Hair Style Director at work" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-700"></div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.4em] text-gold-500 font-bold block">Master Artistry</span>
                <h2 className="text-5xl md:text-6xl font-serif text-slate-900 leading-tight overflow-hidden">
                  <motion.span 
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="block"
                  >
                    Specialized in
                  </motion.span>
                  <motion.span 
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="block italic font-light"
                  >
                    Digital Perms & Balayage
                  </motion.span>
                </h2>
              </div>
              
              <p className="text-slate-600 text-xl font-light leading-relaxed">
                We bring the latest Korean and modern hair techniques to La Habra. 
                Our signature Digital Perms create soft, natural-looking waves that 
                last, while our Balayage artistry provides seamless, sun-kissed 
                dimension tailored to your unique style.
              </p>

              <div className="pt-6">
                <Link 
                  to="/services" 
                  className="inline-flex items-center space-x-4 text-slate-900 group"
                >
                  <span className="btn-outline !px-10">View All Services</span>
                  <motion.div 
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={20} className="text-gold-500" />
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Process />
      <Testimonials />
      <Gallery />
    </motion.div>
  );
}
