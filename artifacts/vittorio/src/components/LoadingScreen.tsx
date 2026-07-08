import React, { useEffect, useState } from 'react';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState<'drawing' | 'text' | 'sweep' | 'reveal' | 'done'>('drawing');

  useEffect(() => {
    // Timing sequence for exactly 1.8 seconds total
    const drawTimer = setTimeout(() => setStage('text'), 600); // Draw monogram (0-0.6s)
    const textTimer = setTimeout(() => setStage('sweep'), 1000); // Fade in text (0.6-1.0s)
    const sweepTimer = setTimeout(() => setStage('reveal'), 1400); // Sweep line (1.0-1.4s)
    const doneTimer = setTimeout(() => {
      setStage('done');
      onComplete();
    }, 1800); // Reveal (1.4-1.8s)

    return () => {
      clearTimeout(drawTimer);
      clearTimeout(textTimer);
      clearTimeout(sweepTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  if (stage === 'done') return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-400 ${
        stage === 'reveal' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center">
        {/* Monogram drawing */}
        <div className="w-16 h-16 mb-8 relative flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full text-gold">
            <path
              d="M20 20 L40 80 L60 20 M55 80 L70 35 L85 80"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="miter"
              className="[stroke-dasharray:300] [stroke-dashoffset:300]"
              style={{
                animation: 'drawIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards'
              }}
            />
          </svg>
        </div>

        {/* Firm Name */}
        <h1 
          className={`font-serif tracking-widest text-gold text-lg md:text-xl uppercase transition-opacity duration-400 ${
            stage === 'text' || stage === 'sweep' || stage === 'reveal' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Vittorio & Associados
        </h1>
        
        {/* Sweeping Line */}
        <div className="relative mt-8 w-64 h-[1px] overflow-hidden">
          <div 
            className={`absolute top-0 bottom-0 bg-gold transition-all duration-400 ease-out ${
              stage === 'sweep' || stage === 'reveal' ? 'left-0 w-full' : '-left-full w-0'
            }`}
          />
        </div>
      </div>
      
      <style>{`
        @keyframes drawIn {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
}
