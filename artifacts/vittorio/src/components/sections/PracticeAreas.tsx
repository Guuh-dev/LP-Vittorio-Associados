import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const areas = [
  {
    title: "Direito Empresarial",
    desc: "Estruturação de negócios, governança corporativa e consultoria contratual para grupos empresariais de grande porte.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
        <path d="M4 22V2M4 2h16M20 2v20M4 22h16M8 2v20M16 2v20M4 7h16M4 12h16M4 17h16" />
      </svg>
    )
  },
  {
    title: "Fusões & Aquisições",
    desc: "Due diligence, estruturação e execução de operações de M&A, joint ventures e reestruturações societárias complexas.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
        <circle cx="8" cy="12" r="5" />
        <circle cx="16" cy="12" r="5" />
        <path d="M11 12h2" />
      </svg>
    )
  },
  {
    title: "Contencioso Estratégico",
    desc: "Representação em litígios de alta complexidade com metodologia orientada a resultados e gestão estratégica do risco.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
        <path d="M12 3v18M8 6h8M6 10h12M4 14h16M12 21c-4.418 0-8-1.5-8-3.5S7.582 14 12 14s8 1.5 8 3.5-3.582 3.5-8 3.5z" />
        <path d="M12 3L4 7v1M12 3l8 4v1" />
      </svg>
    )
  },
  {
    title: "Compliance & Governança",
    desc: "Programas de integridade, prevenção a riscos regulatórios e adequação às melhores práticas de governança corporativa.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    )
  },
  {
    title: "Direito Tributário",
    desc: "Planejamento tributário, contencioso fiscal e assessoria em operações com impacto tributário relevante.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
    )
  },
  {
    title: "Arbitragem",
    desc: "Condução e suporte em procedimentos arbitrais nacionais e internacionais nas principais câmaras do Brasil.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
        <path d="M4 12l4-4 4 4-4 4z" />
        <path d="M12 12l4-4 4 4-4 4z" />
        <path d="M8 20l4-4 4 4-4 4z" />
        <path d="M8 4l4-4 4 4-4 4z" />
      </svg>
    )
  }
];

export function PracticeAreas() {
  const [setRef, isIntersecting, hasIntersected] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="atuacao" className="py-32 relative bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div ref={setRef as any} className="mb-20">
          <div className={`transition-all duration-1000 ease-out ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-gold" />
              <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-gold">Expertise</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8">Áreas de Atuação</h2>
            <p className="font-sans text-muted text-lg max-w-xl mb-12">Expertise jurídica em cada dimensão da atividade empresarial.</p>
            <div className="w-full h-[1px] gold-hairline" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <div 
              key={index}
              className={`group glass-panel p-10 relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(201,169,97,0.08)] ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Top Accent line (revealed on hover) */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold opacity-0 transform scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-500 origin-left" />
              
              <div className="text-gold mb-8 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                {area.icon}
              </div>
              
              <h3 className="font-serif text-[22px] text-foreground mb-4">{area.title}</h3>
              <p className="font-sans text-sm text-muted leading-relaxed group-hover:text-muted/80 transition-colors">
                {area.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
