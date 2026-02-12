import React from 'react';
import { Sparkles, Activity, Anchor, Heart } from 'lucide-react';

const services = [
  {
    title: 'Holistic Dentistry',
    description: 'We view teeth as part of the whole body system, using biocompatible materials and gentle methods.',
    icon: Heart,
    color: 'bg-rose-50 text-rose-500',
  },
  {
    title: 'Aesthetic Correction',
    description: 'Natural-looking veneers, whitening, and bonding to restore the authentic beauty of your smile.',
    icon: Sparkles,
    color: 'bg-amber-50 text-amber-500',
  },
  {
    title: 'Implantology',
    description: 'State-of-the-art ceramic implants that integrate perfectly with your biology for lasting stability.',
    icon: Anchor,
    color: 'bg-blue-50 text-blue-500',
  },
  {
    title: 'Periodontology',
    description: 'Expert care for your gums using laser technology to ensure a strong foundation for your teeth.',
    icon: Activity,
    color: 'bg-teal-50 text-teal-600',
  },
];

const Services: React.FC = () => {
  return (
    <section id="practice" className="py-24 bg-surface-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Our Expertise</span>
            <h2 className="text-fluid-h2 font-serif font-bold text-text-main mb-6">
                Comprehensive Care for <br/> <span className="italic text-primary">Conscious People</span>
            </h2>
            <p className="text-text-muted text-lg font-light leading-relaxed">
                We combine manual dexterity with medical precision. Every treatment is tailored to your individual needs and biological rhythm.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group relative bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-surface-200 hover:border-primary/20">
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-8 rotate-3 group-hover:rotate-0 transition-transform duration-500`}>
                <service.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-serif font-bold text-text-main mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
              
              <p className="text-text-muted text-sm leading-relaxed mb-8 opacity-80 group-hover:opacity-100">
                {service.description}
              </p>

              <div className="absolute bottom-8 right-8 w-8 h-8 rounded-full bg-surface-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                 <span className="text-primary text-lg">→</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <a href="#treatments" className="inline-flex items-center gap-2 text-primary font-medium border-b border-primary/30 pb-0.5 hover:border-primary transition-colors hover:gap-3 duration-300">
                View All Treatments <span className="text-xl">→</span>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Services;