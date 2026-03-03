import React from 'react';
import { motion } from 'motion/react';

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "We begin with a deep dive into your hair history, lifestyle, and goals to create a personalized plan."
  },
  {
    number: "02",
    title: "Artistry",
    description: "Our master stylists apply advanced Korean techniques to transform your look with precision and care."
  },
  {
    number: "03",
    title: "Refinement",
    description: "We perfect every detail and provide you with expert tips to maintain your new style at home."
  }
];

export default function Process() {
  return (
    <section className="py-32 bg-stone-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative group"
            >
              <span className="text-8xl font-serif italic text-white/5 absolute -top-12 -left-4 group-hover:text-gold-500/10 transition-colors duration-500">
                {step.number}
              </span>
              <div className="relative z-10">
                <h3 className="text-2xl font-serif mb-6 flex items-center">
                  <span className="w-8 h-px bg-gold-500 mr-4"></span>
                  {step.title}
                </h3>
                <p className="text-stone-400 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
