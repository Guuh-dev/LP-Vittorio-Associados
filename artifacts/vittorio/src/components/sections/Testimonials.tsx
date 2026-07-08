import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const testimonials = [
  {
    quote: "A expertise do escritório Vittorio & Associados foi determinante para o fechamento da nossa maior operação de M&A. A condução foi impecável, do início à execução. Parceria que recomendamos sem reservas.",
    author: "CEO",
    company: "Grupo Industrial de Grande Porte, São Paulo"
  },
  {
    quote: "Em um contencioso de alta complexidade que se arrastava por anos, a equipe trouxe uma estratégia cirúrgica que resultou em acordo favorável em menos de oito meses. Resultado extraordinário.",
    author: "Diretor Jurídico",
    company: "Companhia do Setor de Energia"
  },
  {
    quote: "Nossa reestruturação societária envolveu seis jurisdições diferentes. A coordenação do Vittorio & Associados foi sofisticada e eficiente. Não contratamos advogados — contratamos estrategistas.",
    author: "CFO",
    company: "Holding Multinacional com Operações no Brasil"
  }
];

export function Testimonials() {
  const [setRef, isIntersecting, hasIntersected] = useIntersectionObserver({ threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 relative bg-[rgba(255,255,255,0.015)] border-y gold-hairline overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div ref={setRef as any} className="text-center mb-16">
          <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-muted block mb-4">Reputação</span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">O que nossos clientes dizem</h2>
        </div>

        <div className={`relative transition-all duration-1000 ease-out ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="glass-panel p-10 md:p-16 relative">
            <span className="absolute top-8 left-8 md:top-12 md:left-12 font-serif text-[80px] leading-none text-gold/20">"</span>
            
            <div className="relative z-10 min-h-[160px] flex flex-col justify-center">
              {testimonials.map((t, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-700 absolute inset-0 flex flex-col justify-center ${index === currentIndex ? 'opacity-100 pointer-events-auto translate-x-0' : 'opacity-0 pointer-events-none translate-x-8'}`}
                >
                  <p className="font-serif italic text-xl md:text-2xl leading-relaxed text-foreground mb-8">
                    {t.quote}
                  </p>
                  <div>
                    <p className="font-sans text-sm font-semibold text-gold mb-1">{t.author}</p>
                    <p className="font-sans text-xs text-muted uppercase tracking-wider">{t.company}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Dots */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-gold w-6' : 'bg-muted/30 hover:bg-gold/50'}`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
