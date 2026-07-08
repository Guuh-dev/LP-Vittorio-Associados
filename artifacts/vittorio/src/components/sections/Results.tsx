import React, { useEffect, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const stats = [
  { value: 2.3, suffix: " Bi+", label: "em transações assessoradas", isDecimal: true },
  { value: 180, suffix: "+", label: "empresas atendidas", isDecimal: false },
  { value: 97, suffix: "%", label: "taxa de êxito em contencioso", isDecimal: false },
  { value: 25, suffix: " Anos", label: "de excelência jurídica", isDecimal: false }
];

function AnimatedCounter({ end, suffix, isDecimal, startAnimation }: { end: number, suffix: string, isDecimal: boolean, startAnimation: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let startTime: number;
    const duration = 2000; // 2 seconds

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // ease-out quartic
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      
      const currentVal = end * easeProgress;
      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, startAnimation]);

  const displayValue = isDecimal 
    ? count.toFixed(1).replace('.', ',') 
    : Math.floor(count).toString();

  return (
    <div className="font-serif text-5xl md:text-[80px] leading-none text-gold mb-4 whitespace-nowrap">
      {end === 2.3 && count > 0 && <span className="text-3xl md:text-5xl mr-2">R$</span>}
      {displayValue}{suffix}
    </div>
  );
}

export function Results() {
  const [setRef, isIntersecting, hasIntersected] = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section id="resultados" className="py-32 relative bg-[rgba(255,255,255,0.015)] border-y gold-hairline">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-muted mb-4 block">Resultados</span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">Números que Definem Nossa Trajetória</h2>
        </div>

        <div ref={setRef as any} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 lg:divide-x lg:divide-[rgba(201,169,97,0.2)]">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center lg:px-8 text-center">
              <AnimatedCounter 
                end={stat.value} 
                suffix={stat.suffix} 
                isDecimal={stat.isDecimal} 
                startAnimation={hasIntersected} 
              />
              <span className="font-sans text-xs uppercase tracking-[0.15em] text-muted max-w-[160px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
