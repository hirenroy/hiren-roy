import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is a Digital Perm?",
    answer: "A digital perm is a modern technique that uses temperature-controlled rods connected to a machine. It creates soft, natural-looking waves that are easier to style and maintain than traditional perms. It's especially popular for creating the 'Korean wave' look."
  },
  {
    question: "How long does a digital perm last?",
    answer: "Typically, a digital perm can last anywhere from 3 to 6 months, depending on your hair type and how well you maintain it. The curls tend to become more natural over time."
  },
  {
    question: "Is balayage suitable for all hair types?",
    answer: "Yes! Balayage is a highly customizable hand-painting technique that works on almost all hair lengths and textures. Our master colorists will tailor the application to complement your natural hair color and skin tone."
  },
  {
    question: "Do I need to book an appointment in advance?",
    answer: "We highly recommend booking in advance, especially for specialized services like digital perms or full color transformations, as these can take several hours. However, feel free to call for last-minute availability."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold-500 font-bold block mb-4">Common Questions</span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900">Frequently Asked</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl border border-stone-100 overflow-hidden shadow-sm"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-stone-50 transition-colors"
              >
                <span className="text-lg font-serif text-stone-900">{faq.question}</span>
                <div className="text-gold-500">
                  {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-stone-500 font-light leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
