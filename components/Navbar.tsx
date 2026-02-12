import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Button from './Button';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Philosophy', href: '#about' },
  { label: 'Treatments', href: '#practice' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled ? 'bg-white/80 backdrop-blur-md border-surface-200 py-3' : 'bg-transparent border-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary text-white flex items-center justify-center rounded-lg rounded-tr-[20px] rounded-bl-[20px] font-serif font-bold text-xl shadow-lg transition-transform group-hover:scale-105 duration-300">
              AS
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-semibold text-xl leading-none text-text-main tracking-tight group-hover:text-primary transition-colors">Dr. Scherngell</span>
              <span className="text-[10px] text-accent uppercase tracking-[0.2em] font-medium mt-0.5">Holistic Dentistry</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-sm font-medium text-text-muted hover:text-primary transition-colors uppercase tracking-widest relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-px after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex flex-col items-end hidden lg:flex">
               <span className="text-[10px] text-text-muted font-bold uppercase tracking-wider">Appointment</span>
               <a href="tel:+4312345678" className="text-sm font-serif font-bold text-primary hover:text-primary-dark transition-colors">+43 1 234 5678</a>
            </div>
            <Button size="sm" className="hidden sm:inline-flex">
               Book Online
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-text-main hover:bg-surface-100 rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-x-0 top-[72px] bg-white/95 backdrop-blur-xl border-b border-surface-200 shadow-xl transition-all duration-300 origin-top transform ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
          <div className="px-6 py-8 space-y-4 flex flex-col items-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xl font-serif text-text-main hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
             <div className="pt-6 w-full max-w-xs">
                <Button className="w-full flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" /> Call Practice
                </Button>
             </div>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;