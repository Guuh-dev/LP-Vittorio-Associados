import React from 'react';

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] pt-1 border-t gold-hairline relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16 flex flex-col items-center">
        
        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-end gap-10 md:gap-0 mb-16">
          
          {/* Left: Brand */}
          <div className="text-center md:text-left">
            <h2 className="font-serif text-xl tracking-[0.15em] text-gold uppercase mb-3">Vittorio & Associados</h2>
            <p className="font-sans text-xs text-muted">© {new Date().getFullYear()} Todos os direitos reservados.</p>
          </div>

          {/* Center: Nav */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="#atuacao" className="font-sans text-xs tracking-wider uppercase text-muted hover:text-gold transition-colors">Atuação</a>
            <a href="#resultados" className="font-sans text-xs tracking-wider uppercase text-muted hover:text-gold transition-colors">Resultados</a>
            <a href="#filosofia" className="font-sans text-xs tracking-wider uppercase text-muted hover:text-gold transition-colors">Filosofia</a>
            <a href="#equipe" className="font-sans text-xs tracking-wider uppercase text-muted hover:text-gold transition-colors">Equipe</a>
          </div>

          {/* Right: Social */}
          <div className="flex gap-6">
            <a href="#" className="text-muted hover:text-gold transition-colors" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" className="text-muted hover:text-gold transition-colors" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>

        </div>

        {/* Bottom Line Info */}
        <div className="text-center">
          <p className="font-sans text-[10px] text-muted/60 tracking-widest uppercase">
            OAB/SP — Registro 12.847 <span className="mx-2">|</span> CNPJ 00.000.000/0001-00
          </p>
        </div>

      </div>
    </footer>
  );
}
