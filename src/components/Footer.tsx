import React from 'react';
import { Phone, Mail, MapPin, Instagram, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white text-slate-900 pt-32 pb-12 border-t border-gold-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
          <div className="space-y-8 lg:col-span-1">
            <Link to="/" className="flex flex-col items-start group">
              <span className="text-4xl font-serif tracking-tight text-stone-900 group-hover:text-gold-500 transition-colors duration-500 leading-none italic">Elle</span>
              <span className="text-[9px] uppercase tracking-[0.8em] text-gold-600 font-black mt-1.5 ml-0.5">Hair Salon</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs font-light">
              La Habra's destination for modern hair techniques, specialized digital perms, and custom color artistry.
            </p>
            <div className="flex space-x-6 pt-2">
              <a href="https://www.instagram.com/elle_hairsalon_/?hl=en" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-gold-500 transition-colors">
                <Instagram size={22} />
              </a>
              <a href="https://www.yelp.com/biz/elle-hair-salon-la-habra-5" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-gold-500 transition-colors">
                <span className="text-[10px] font-bold tracking-[0.3em]">YELP</span>
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold-500">Quick Links</h3>
            <ul className="space-y-4 text-sm font-light">
              <li><Link to="/" className="text-slate-600 hover:text-slate-900 transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-slate-600 hover:text-slate-900 transition-colors">Services/Pricing</Link></li>
              <li><Link to="/team" className="text-slate-600 hover:text-slate-900 transition-colors">Our Team</Link></li>
              <li><Link to="/contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold-500">Business Hours</h3>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex justify-between">
                <span className="text-slate-600">Mon - Sat</span>
                <span className="text-slate-900 font-medium">10:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-600">Sunday</span>
                <span className="text-gold-500 italic font-medium">Closed</span>
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold-500">Contact</h3>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-center space-x-3">
                <Phone size={14} className="text-gold-500" />
                <a href="tel:17149921800" className="text-slate-600 hover:text-slate-900 transition-colors">1 (714) 992-1800</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={14} className="text-gold-500" />
                <a href="mailto:bori730@gmail.com" className="text-slate-600 hover:text-slate-900 transition-colors">bori730@gmail.com</a>
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold-500">Visit Us</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-3 text-sm font-light">
                <MapPin size={14} className="text-gold-500 mt-1 flex-shrink-0" />
                <p className="text-slate-600 leading-relaxed">
                  1222 S Idaho St b,<br />
                  La Habra, CA 90631
                </p>
              </div>
              <a 
                href="https://maps.google.com/?q=1222+S+Idaho+St+b,+La+Habra,+CA+90631" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary !py-3 !text-[10px] inline-flex items-center space-x-2"
              >
                <MapPin size={12} />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gold-200 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-400 uppercase tracking-[0.3em]">
          <p>© {new Date().getFullYear()} Elle Hair Salon. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <span className="italic text-gold-400">Artistry in Every Transformation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
