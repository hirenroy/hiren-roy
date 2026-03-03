import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { serviceCategories } from '../constants';

export default function ContactPage() {
  const location = useLocation();
  const [selectedService, setSelectedService] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');

  // Flatten services for easier searching
  const allServices = serviceCategories.flatMap(category => category.items);

  useEffect(() => {
    if (location.state && location.state.selectedService) {
      const serviceName = location.state.selectedService;
      setSelectedService(serviceName);
      
      const service = allServices.find(s => s.name === serviceName);
      if (service) {
        setSelectedPrice(service.price);
      }
      
      // Scroll to message section
      setTimeout(() => {
        const messageSection = document.getElementById('message');
        if (messageSection) {
          messageSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (location.hash === '#message') {
      // Scroll to message section if hash is present
      setTimeout(() => {
        const messageSection = document.getElementById('message');
        if (messageSection) {
          messageSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.state, location.hash]);

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const serviceName = e.target.value;
    setSelectedService(serviceName);
    
    const service = allServices.find(s => s.name === serviceName);
    if (service) {
      setSelectedPrice(service.price);
    } else {
      setSelectedPrice('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <div className="bg-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 text-center overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-serif text-slate-900 mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg md:text-xl font-light"
          >
            Ready for your transformation? Contact us to book your appointment 
            or ask any questions about our services.
          </motion.p>
        </div>
      </div>

      <section className="pb-24 bg-white relative">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Contact Form */}
          <motion.div 
            id="message"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-10 rounded-[2rem] border border-gold-100 shadow-xl shadow-stone-200/50 scroll-mt-32"
          >
            <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-6 text-center">Send us a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Name</label>
                  <input type="text" className="w-full bg-white/50 border border-gold-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all text-sm" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Phone</label>
                  <input type="tel" className="w-full bg-white/50 border border-gold-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all text-sm" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Service Interested In</label>
                <select 
                  value={selectedService}
                  onChange={handleServiceChange}
                  className="w-full bg-white/50 border border-gold-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all appearance-none text-sm"
                >
                  <option value="">Select a service...</option>
                  {serviceCategories.map((category, idx) => (
                    <optgroup key={idx} label={category.title}>
                      {category.items.map((item, itemIdx) => (
                        <option key={itemIdx} value={item.name}>
                          {item.name} ({item.price})
                        </option>
                      ))}
                    </optgroup>
                  ))}
                  <option value="Other">Other</option>
                </select>
                {selectedPrice && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-gold-600 text-xs font-medium mt-2 flex items-center"
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-500 mr-2"></span>
                    Estimated Price: {selectedPrice}
                  </motion.div>
                )}
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Message</label>
                <textarea rows={3} className="w-full bg-white/50 border border-gold-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all text-sm"></textarea>
              </div>
              <button className="btn-primary w-full py-3 text-xs">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
