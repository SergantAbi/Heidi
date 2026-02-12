import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-primary-dark text-white relative isolate overflow-hidden">
      
      <svg className="absolute top-0 left-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
        <defs>
          <pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth="0" fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
      </svg>
      
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-20 w-96 h-96 bg-accent rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
            
            <div className="lg:col-span-2 space-y-8">
                 <span className="text-accent-light font-bold tracking-widest uppercase text-xs">Patient Stories</span>
                 <h2 className="text-fluid-h2 font-serif font-bold leading-tight">
                    Trust built on <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-white">Empathy & Skill</span>
                 </h2>
                 <p className="text-primary-light/80 text-lg font-light">
                    We don't just treat teeth; we treat people. Read what our patients say about their journey to better health.
                 </p>
                 <div className="flex gap-8 pt-4">
                    <div>
                        <p className="text-3xl font-serif">4.9</p>
                        <div className="flex text-accent gap-0.5 text-xs mt-1">
                            {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
                        </div>
                        <p className="text-xs text-primary-light/60 mt-1">Google Reviews</p>
                    </div>
                    <div>
                        <p className="text-3xl font-serif">98%</p>
                        <p className="text-xs text-primary-light/60 mt-1 uppercase tracking-wide">Recommendation Rate</p>
                    </div>
                 </div>
            </div>

            <div className="lg:col-span-3">
                 <div className="relative bg-white/5 backdrop-blur-md p-10 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl">
                    <Quote className="w-12 h-12 text-accent/40 mb-6" />
                    <p className="text-xl md:text-2xl font-serif italic leading-relaxed text-surface-50 mb-8">
                        "Dr. Scherngell has a unique approach. I never felt rushed, and she explained the connection between my dental health and my chronic migraines. The treatment was life-changing."
                    </p>
                    
                    <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop" alt="Sarah M." className="w-12 h-12 rounded-full object-cover border-2 border-accent/50" />
                        <div>
                            <p className="font-bold text-white">Sarah M.</p>
                            <p className="text-xs text-primary-light uppercase tracking-wider">Patient since 2019</p>
                        </div>
                    </div>
                 </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;