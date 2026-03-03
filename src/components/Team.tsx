import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2 } from 'lucide-react';

const teamMembers = [
  {
    name: "Elle (Sue)",
    role: "Hair Style Director / Owner",
    image: "https://static.wixstatic.com/media/adca43_4a6f5c0ff56c407d9cb3186a6b9a3a04~mv2.jpg/v1/crop/x_266,y_216,w_3355,h_3638/fill/w_806,h_874,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/sssoo.jpg",
    bio: "With over 33 years of elite experience, Sue is a visionary in the hair industry, bringing world-class artistry and a prestigious background to every transformation.",
    highlights: [
      {
        title: "Professional Milestones",
        items: [
          "Vidal Sassoon (1998)",
          "Jung Saem Mool Korea | Co-founding Member (1999)",
          "Mir Hair Apgujung | Hair Style Director (2004)",
          "Elle Hair Salon | Hair Style Director (2022–Present)"
        ]
      },
      {
        title: "Celebrity Artistry",
        items: [
          "Yong Joon Bae • JYP • Seung Chul Lee • GOD",
          "Ju Hyun Oak • Hae Jin Han • Yuh Jung Cho",
          "Hae Il Park • Ji Won Eum"
        ]
      },
      {
        title: "Prestigious Clientele",
        items: [
          "La Hee Hong (Director, Leeum Museum, Samsung Group)",
          "Suh Yun Lee (Samsung Group)",
          "Mi Hyang Lee (Wife of Paris Baguette Group CEO)",
          "Jeong Su Kim (President, Samyang)"
        ]
      }
    ]
  },
  {
    name: "Eunice",
    role: "Manager",
    image: "https://static.wixstatic.com/media/adca43_9a3305ae359d4d0496c9b47287d2152d~mv2.jpg/v1/crop/x_0,y_55,w_1908,h_2069/fill/w_806,h_874,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Eunice_edited.jpg",
    bio: "Eunice has over 20 years of experience in beauty and style. She graduated from Palace Beauty College and is a certified hairstylist and Hoyu and Schwarzkopf colorist."
  },
  {
    name: "Yuna",
    role: "Hair Stylist",
    image: "https://static.wixstatic.com/media/adca43_c83727df705245abadc14699717f2a64~mv2.jpg/v1/crop/x_0,y_156,w_450,h_488/fill/w_540,h_586,al_c,lg_1,q_80,enc_avif,quality_auto/1770187240771_edited.jpg",
    bio: "Hello, I am a passionate and responsible hair stylist. I take pride in finding the perfect style for each client, and I specialize in creating natural and sophisticated looks, especially through balayage. I always prioritize customer satisfaction by providing attentive service and friendly communication. I feel the greatest sense of fulfillment when I see my clients become even more beautiful through my work. I look forward to bringing you a fresh new style here at this salon."
  },
  {
    name: "Iryen Jang",
    role: "Hair Stylist",
    image: "https://static.wixstatic.com/media/adca43_a62e57e067364a418de11b6453c43ac0~mv2.jpg/v1/crop/x_0,y_266,w_1280,h_1388/fill/w_806,h_874,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1770187425145_edited.jpg",
    bio: "With 25 years of professionally developed experience beginning in Korea, she specializes in wedding updos as well as precise, detailed-oriented Korean-style haircuts. She has extensive experience working with diverse ethnicities and all hair types and textures, delivering customized color and styling. She also brings professional stage experience, having provided hair styling support for multiple artists at the Hollywood Bowl (2015-2018)."
  },
  {
    name: "Lydia",
    role: "Hair Stylist",
    image: "https://static.wixstatic.com/media/0a4aa6_34ff88c2656343afae83908a01ff4606~mv2.jpg/v1/crop/x_326,y_353,w_1082,h_1173/fill/w_806,h_874,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/lydia_edited.jpg",
    bio: "With over 15 years of professional experience, she has worked in high profile settings. Including providing hair styling support for Jay Chou, a well-known Chinese singer, at his 2019 concert, as well as participating in the 2025 Selene Spring Fashion Show. She is a Schwarzkopf-trained and Hoyu-certified colorist, specializing in balayage, Korean perms, and braid extensions. Fluent in Korean, English and Chinese, she serves a diverse international clientele."
  }
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

  return (
    <section id="team" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold-50/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-stone-50 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24 md:space-y-40">
          {teamMembers.map((member, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col md:flex-row gap-10 md:gap-32 items-start ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-full md:w-1/2 group md:sticky md:top-32">
                <div 
                  className="relative aspect-[4/5] overflow-hidden rounded-[2rem] md:rounded-[2.5rem] shadow-2xl bg-gold-100 cursor-zoom-in group"
                  onClick={() => setSelectedMember(member)}
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-stone-900/20 backdrop-blur-[2px]">
                    <div className="bg-white/90 p-4 rounded-full shadow-xl">
                      <Maximize2 size={24} className="text-stone-900" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6 md:space-y-8">
                <div className="space-y-2">
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-gold-500 font-bold">{member.role}</span>
                  <h3 className="text-3xl md:text-5xl font-serif text-slate-900 leading-tight">{member.name}</h3>
                </div>
                <div className="w-12 md:w-16 h-px bg-gold-300"></div>
                
                <p className="text-slate-600 leading-relaxed text-base md:text-xl font-light italic">
                  "{member.bio}"
                </p>

                {member.highlights && (
                  <div className="space-y-8 md:space-y-10 pt-2 md:pt-4">
                    {member.highlights.map((section, sIdx) => (
                      <div key={sIdx} className="space-y-3 md:space-y-4">
                        <h4 className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-slate-900 flex items-center">
                          <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gold-500 rounded-full mr-3"></span>
                          {section.title}
                        </h4>
                        <ul className="grid grid-cols-1 gap-2">
                          {section.items.map((highlight, hIdx) => (
                            <li key={hIdx} className="text-slate-500 text-xs md:text-sm font-light flex items-start">
                              <span className="text-gold-500 mr-2">•</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                <div className="pt-8">
                  <button className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-slate-900 border-b-2 border-gold-500/20 pb-2 hover:border-gold-500 transition-all">
                    View Portfolio
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-stone-900/95 backdrop-blur-md"
            onClick={() => setSelectedMember(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-gold-500 transition-colors z-[110] bg-black/20 md:bg-transparent p-2 md:p-0 rounded-full md:rounded-none backdrop-blur-sm md:backdrop-blur-none"
              onClick={() => setSelectedMember(null)}
            >
              <X size={24} className="md:w-8 md:h-8" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full h-[85vh] md:h-auto md:max-h-[85vh] flex flex-col md:flex-row bg-white rounded-[2rem] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full md:w-1/2 h-[50%] md:h-full relative bg-stone-100 flex items-center justify-center p-4">
                <img 
                  src={selectedMember.image} 
                  alt={selectedMember.name} 
                  className="w-full h-full object-contain drop-shadow-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-full md:w-1/2 p-6 md:p-12 overflow-y-auto bg-white flex flex-col h-[50%] md:h-full">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-gold-500 font-bold">{selectedMember.role}</span>
                  <button 
                    onClick={() => setSelectedMember(null)}
                    className="md:hidden text-stone-400 hover:text-stone-900"
                  >
                    <X size={24} />
                  </button>
                </div>
                <h2 className="text-2xl md:text-4xl font-serif text-stone-900 mb-4 md:mb-6">{selectedMember.name}</h2>
                <div className="w-12 h-px bg-gold-300 mb-6 md:mb-8"></div>
                <p className="text-stone-600 font-light leading-relaxed italic text-sm md:text-lg mb-6 md:mb-8">
                  "{selectedMember.bio}"
                </p>
                
                {selectedMember.highlights && (
                   <div className="space-y-6 mb-8">
                     {selectedMember.highlights.map((section, sIdx) => (
                       <div key={sIdx} className="space-y-2">
                         <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-900">{section.title}</h4>
                         <ul className="text-xs text-stone-500 font-light space-y-1">
                           {section.items.map((item, i) => (
                             <li key={i}>• {item}</li>
                           ))}
                         </ul>
                       </div>
                     ))}
                   </div>
                )}

                <button 
                  onClick={() => setSelectedMember(null)}
                  className="btn-primary !py-3 md:!py-4 !text-[10px] w-full md:w-auto self-start mt-auto"
                >
                  Close Profile
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


