import React, { useEffect, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Wait for loading screen to complete
    const timer = setTimeout(() => setIsLoaded(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Animated gradient background - subtle */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#1a150a] rounded-full blur-[120px] opacity-40 animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#0f0d0a] rounded-full blur-[150px] opacity-50 animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-16">
        <div className="max-w-4xl">
          {/* Label */}
          <div className={`flex items-center gap-4 mb-6 transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} delay-300`}>
            <div className="w-10 h-[1px] bg-gold" />
            <span className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-gold">
              Advocacia Corporativa de Alto Padrão
            </span>
          </div>
          
          {/* Main Headline */}
          <h1 className="font-serif italic font-bold text-5xl md:text-7xl lg:text-[96px] leading-[1.1] text-foreground mb-8">
            <span className={`block transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} delay-400`}>
              Excelência Jurídica
            </span>
            <span className={`block transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} delay-[600ms]`}>
              para Decisões que
            </span>
            <span className={`block transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} delay-[800ms]`}>
              Definem o Futuro
            </span>
            <span className={`block transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} delay-[1000ms]`}>
              do Seu Negócio
            </span>
          </h1>
          
          {/* Sub Headline */}
          <p className={`font-sans text-lg md:text-xl text-muted max-w-2xl mb-12 transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} delay-[1200ms]`}>
            Assessoria estratégica em Direito Empresarial, M&A e Contencioso para as maiores empresas do Brasil.
          </p>
          
          {/* CTA */}
          <div className={`transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} delay-[1400ms]`}>
            <a 
              href="#contato"
              className="inline-block bg-[rgba(201,169,97,0.08)] border border-[rgba(201,169,97,0.4)] text-gold px-9 py-4 font-sans text-xs font-semibold tracking-[0.2em] uppercase backdrop-blur-sm transition-all duration-500 hover:bg-[rgba(201,169,97,0.15)] hover:border-[rgba(201,169,97,0.7)] hover:shadow-[0_0_20px_rgba(201,169,97,0.15)]"
            >
              Solicitar Consulta
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-opacity duration-1000 delay-[2000ms] ${isLoaded ? 'opacity-60' : 'opacity-0'}`}>
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold/70 rotate-90 mb-6">Scroll</span>
        <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gold animate-[scrollLine_2s_ease-in-out_infinite]" />
        </div>
      </div>
      
      <style>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
}
