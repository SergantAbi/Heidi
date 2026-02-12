import React from 'react';
import { Instagram, Linkedin, MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-surface-50 text-text-main pt-24 pb-12 border-t border-surface-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-lg rounded-tr-xl rounded-bl-xl flex items-center justify-center text-white font-serif font-bold">
                  AS
                </div>
                <span className="font-serif font-bold text-xl text-primary-dark">Dr. Scherngell</span>
              </div>
              <p className="text-sm text-text-muted leading-relaxed max-w-xs">
                Holistic dentistry in the heart of Vienna. Dedicated to your well-being through biological and aesthetic excellence.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white border border-surface-200 flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-all duration-300">
                    <Instagram size={18}/>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white border border-surface-200 flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-all duration-300">
                    <Linkedin size={18}/>
                </a>
              </div>
          </div>

          {/* Quick Links */}
          <div>
             <h3 className="font-serif font-bold text-lg mb-6 text-primary-dark">Practice</h3>
             <ul className="space-y-4 text-sm font-medium text-text-muted">
                <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-1 group">Philosophy <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"/></a></li>
                <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-1 group">Treatments <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"/></a></li>
                <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-1 group">The Team <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"/></a></li>
                <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-1 group">News & Blog <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"/></a></li>
             </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-6 text-primary-dark">Contact</h3>
            <ul className="space-y-4 text-sm text-text-muted">
                <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Praterstraße 123,<br/>1020 Vienna, Austria</span>
                </li>
                <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary shrink-0" />
                    <a href="tel:+4312345678" className="hover:text-primary transition-colors">+43 1 234 5678</a>
                </li>
                <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary shrink-0" />
                    <a href="mailto:praxis@scherngell.at" className="hover:text-primary transition-colors">praxis@scherngell.at</a>
                </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-6 text-primary-dark">Opening Hours</h3>
            <ul className="space-y-3 text-sm text-text-muted">
                <li className="flex justify-between border-b border-surface-200 pb-2"><span>Mon - Tue</span> <span>09:00 - 18:00</span></li>
                <li className="flex justify-between border-b border-surface-200 pb-2"><span>Wednesday</span> <span>09:00 - 14:00</span></li>
                <li className="flex justify-between border-b border-surface-200 pb-2"><span>Thu - Fri</span> <span>09:00 - 18:00</span></li>
                <li className="flex justify-between pt-1 text-accent font-medium"><span>Weekend</span> <span>Closed</span></li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-surface-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted/60">
            <p>&copy; {new Date().getFullYear()} Dr. Adelheid Scherngell. All rights reserved.</p>
            <div className="flex gap-6">
                <a href="#" className="hover:text-primary">Imprint</a>
                <a href="#" className="hover:text-primary">Privacy Policy</a>
                <a href="#" className="hover:text-primary">Cookie Settings</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;