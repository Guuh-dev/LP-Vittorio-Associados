import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const partners = [
  {
    name: "Dr. Vittorio Cavalcante",
    title: "Sócio Fundador",
    specialty: "M&A e Direito Societário",
    initials: "VC"
  },
  {
    name: "Dra. Ana Cristina Mello",
    title: "Sócia",
    specialty: "Contencioso Estratégico e Arbitragem",
    initials: "AM"
  },
  {
    name: "Dr. Rafael Bertagnolli",
    title: "Sócio",
    specialty: "Direito Tributário e Planejamento Fiscal",
    initials: "RB"
  },
  {
    name: "Dra. Isabela Fonseca",
    title: "Sócia",
    specialty: "Compliance e Regulatório",
    initials: "IF"
  }
];

export function Team() {
  const [setRef, isIntersecting, hasIntersected] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="equipe" className="py-32 relative bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div ref={setRef as any} className="mb-20">
          <div className={`transition-all duration-1000 ease-out ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-gold" />
              <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-gold">Equipe</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8">Liderança</h2>
            <div className="w-full h-[1px] gold-hairline" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className={`group transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Portrait Placeholder */}
              <div className="aspect-[3/4] w-full bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] mb-6 flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:border-gold/30 group-hover:shadow-[0_0_20px_rgba(201,169,97,0.05)]">
                {/* Subtle texture over portrait */}
                <div className="absolute inset-0 bg-noise opacity-30" />
                <span className="font-serif text-4xl text-muted/30 group-hover:text-gold/40 transition-colors duration-500">{partner.initials}</span>
                
                {/* Hover overlay element */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Details */}
              <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="font-serif text-xl text-foreground mb-2">{partner.name}</h3>
                <p className="font-sans text-xs uppercase tracking-wider text-gold mb-1">{partner.title}</p>
                <p className="font-sans text-sm text-muted">{partner.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
