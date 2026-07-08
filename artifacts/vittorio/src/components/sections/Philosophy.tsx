import React, { useEffect, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export function Philosophy() {
  const [setRef, isIntersecting, hasIntersected] = useIntersectionObserver({ threshold: 0.1 });
  const [offset, setOffset] = useState(0);

  // Subtle parallax
  useEffect(() => {
    const handleScroll = () => {
      // Calculate position relative to viewport
      const section = document.getElementById('filosofia');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
          // Left column moves slightly slower (-15% speed = parallax effect)
          setOffset(scrollProgress * 40 - 20); 
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="filosofia" className="py-32 relative bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div 
          ref={setRef as any} 
          className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center"
        >
          {/* Left Column - Quote */}
          <div 
            className={`w-full lg:w-[60%] transition-opacity duration-1000 ease-out ${hasIntersected ? 'opacity-100' : 'opacity-0'}`}
            style={{ transform: `translateY(${offset}px)` }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-[1px] bg-gold" />
              <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-gold">Filosofia</span>
            </div>
            
            <blockquote className="font-serif italic text-3xl md:text-[40px] leading-[1.3] text-foreground mb-8">
              "Não representamos clientes. Construímos parcerias com líderes que entendem que o direito é um instrumento estratégico — não um custo."
            </blockquote>
            
            <p className="font-sans text-sm tracking-wide text-gold">
              Dr. Vittorio Cavalcante, Sócio Fundador
            </p>
          </div>

          {/* Right Column - Text */}
          <div className={`w-full lg:w-[40%] space-y-6 transition-all duration-1000 delay-300 ease-out ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <p className="font-sans text-muted text-lg leading-relaxed">
              Fundado em 1999, o escritório Vittorio & Associados consolidou-se como uma das referências nacionais no assessoramento jurídico a grandes grupos empresariais.
            </p>
            <p className="font-sans text-muted text-lg leading-relaxed">
              Nossa abordagem é orientada por resultado, com profundo conhecimento setorial e presença ativa nas operações mais relevantes do mercado brasileiro nos últimos 25 anos.
            </p>
            <p className="font-sans text-muted text-lg leading-relaxed">
              Atuamos com absoluta confidencialidade, rigor técnico e compromisso irrestrito com os interesses de nossos clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
