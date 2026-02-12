import React from 'react';
import Button from './Button';
import { ArrowRight, Star, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full min-h-screen pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-organic-gradient flex items-center">
      
      {/* Abstract Background Blobs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-light/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="space-y-10 text-center lg:text-left opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-white shadow-soft backdrop-blur-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-light opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-xs font-bold text-primary-dark uppercase tracking-widest">Accepting New Patients</span>
            </div>

            <h1 className="text-fluid-h1 font-serif font-bold text-text-main leading-[1.1] tracking-tight">
              Where Science <br/> Meets <span className="text-primary italic relative">Art
                <svg className="absolute w-full h-4 -bottom-2 left-0 text-accent/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className="text-fluid-body text-text-muted max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
              Experience the harmony of holistic dentistry with Dr. Adelheid Scherngell. We combine state-of-the-art technology with a whole-body approach for your lasting health.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-2">
              <Button size="lg">
                Book Consultation
              </Button>
              <a href="#about" className="group flex items-center gap-2 px-6 py-4 text-text-main font-medium hover:text-primary transition-colors">
                <span>Our Philosophy</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-primary/10 grid grid-cols-2 sm:grid-cols-3 gap-6 text-left">
                <div>
                   <p className="text-3xl font-serif font-bold text-primary">20+</p>
                   <p className="text-xs text-text-muted uppercase tracking-wider mt-1">Years Experience</p>
                </div>
                <div>
                   <p className="text-3xl font-serif font-bold text-primary">5k+</p>
                   <p className="text-xs text-text-muted uppercase tracking-wider mt-1">Smiles Restored</p>
                </div>
                <div className="col-span-2 sm:col-span-1 flex items-center gap-3">
                   <div className="bg-white p-2 rounded-full shadow-soft">
                      <ShieldCheck className="w-6 h-6 text-accent" />
                   </div>
                   <div className="text-xs text-text-muted uppercase tracking-wider leading-tight">
                      Certified <br/> Specialist
                   </div>
                </div>
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-xl opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            
            {/* Organic Mask Image Container */}
            <div className="relative z-10 w-full aspect-[4/5] mask-organic bg-surface-200 transition-transform hover:scale-[1.02] duration-700 ease-out">
                <img 
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" 
                    alt="Dr. Adelheid Scherngell treating a patient" 
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Floating Elements */}
            <div className="absolute top-1/4 -right-4 lg:-right-8 animate-float" style={{ animationDelay: '1s' }}>
                <div className="glass-panel p-4 rounded-2xl shadow-soft max-w-[180px]">
                   <div className="flex text-accent gap-1 mb-2">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                   </div>
                   <p className="text-xs font-serif italic text-text-main">
                     "The most gentle treatment I've ever experienced."
                   </p>
                </div>
            </div>

             <div className="absolute bottom-1/4 -left-4 lg:-left-8 animate-float" style={{ animationDelay: '0s' }}>
                <div className="bg-primary text-white p-5 rounded-2xl rounded-tr-none shadow-glow">
                   <p className="font-serif text-2xl font-bold">Top Rated</p>
                   <p className="text-xs text-primary-light uppercase tracking-wider mt-1">Clinic in Vienna</p>
                </div>
            </div>

            {/* Decorative Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/20 rounded-full -z-10 opacity-30 animate-spin" style={{ animationDuration: '60s' }}>
                <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;