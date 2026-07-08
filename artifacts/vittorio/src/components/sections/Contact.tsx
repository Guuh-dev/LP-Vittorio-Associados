import React, { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export function Contact() {
  const [setRef, isIntersecting, hasIntersected] = useIntersectionObserver({ threshold: 0.1 });
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');
  
  // Minimal form state to manage floating labels
  const [values, setValues] = useState({
    nome: '',
    empresa: '',
    area: '',
    mensagem: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <section id="contato" className="py-32 relative bg-background">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div 
          ref={setRef as any}
          className={`border border-[rgba(201,169,97,0.3)] p-8 md:p-16 lg:p-24 relative transition-all duration-1000 ease-out ${hasIntersected ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'}`}
        >
          {/* Inner frame decorative corners */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-gold" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-gold" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-gold" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-gold" />

          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Inicie uma Conversa</h2>
            <p className="font-sans text-muted text-lg max-w-xl mx-auto">
              Atendemos por convite ou indicação. Entre em contato para uma avaliação inicial de sua demanda.
            </p>
          </div>

          {formState === 'success' ? (
            <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-500">
              <div className="w-16 h-16 rounded-full border border-gold flex items-center justify-center mb-6 text-gold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-serif text-2xl text-foreground mb-2">Solicitação Recebida</p>
              <p className="font-sans text-muted">Nossa equipe entrará em contato em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group">
                  <input 
                    type="text" 
                    name="nome" 
                    id="nome"
                    required
                    value={values.nome}
                    onChange={handleChange}
                    className="form-input-luxury peer" 
                    placeholder=" "
                  />
                  <label htmlFor="nome" className={`absolute left-0 text-muted transition-all duration-300 pointer-events-none ${values.nome ? '-top-5 text-xs text-gold' : 'top-3 text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:text-gold'}`}>
                    Nome Completo
                  </label>
                </div>
                
                <div className="relative group">
                  <input 
                    type="text" 
                    name="empresa" 
                    id="empresa"
                    required
                    value={values.empresa}
                    onChange={handleChange}
                    className="form-input-luxury peer" 
                    placeholder=" "
                  />
                  <label htmlFor="empresa" className={`absolute left-0 text-muted transition-all duration-300 pointer-events-none ${values.empresa ? '-top-5 text-xs text-gold' : 'top-3 text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:text-gold'}`}>
                    Empresa
                  </label>
                </div>
              </div>

              <div className="relative group">
                <select 
                  name="area" 
                  id="area"
                  required
                  value={values.area}
                  onChange={handleChange}
                  className="form-input-luxury appearance-none bg-transparent relative z-10 cursor-pointer peer"
                >
                  <option value="" disabled className="bg-[#0a0a0a] text-muted"></option>
                  <option value="empresarial" className="bg-[#0a0a0a]">Direito Empresarial</option>
                  <option value="ma" className="bg-[#0a0a0a]">M&A</option>
                  <option value="contencioso" className="bg-[#0a0a0a]">Contencioso</option>
                  <option value="compliance" className="bg-[#0a0a0a]">Compliance</option>
                  <option value="tributario" className="bg-[#0a0a0a]">Tributário</option>
                  <option value="arbitragem" className="bg-[#0a0a0a]">Arbitragem</option>
                  <option value="outro" className="bg-[#0a0a0a]">Outro</option>
                </select>
                {/* Custom dropdown arrow */}
                <div className="absolute right-0 top-4 text-muted pointer-events-none z-0">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M1 1.5L6 6.5L11 1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <label htmlFor="area" className={`absolute left-0 text-muted transition-all duration-300 pointer-events-none z-0 ${values.area ? '-top-5 text-xs text-gold' : 'top-3 text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:text-gold'}`}>
                  Área de Interesse
                </label>
              </div>

              <div className="relative group">
                <textarea 
                  name="mensagem" 
                  id="mensagem"
                  rows={4}
                  required
                  value={values.mensagem}
                  onChange={handleChange}
                  className="form-input-luxury resize-none peer" 
                  placeholder=" "
                />
                <label htmlFor="mensagem" className={`absolute left-0 text-muted transition-all duration-300 pointer-events-none ${values.mensagem ? '-top-5 text-xs text-gold' : 'top-3 text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:text-gold'}`}>
                  Mensagem
                </label>
              </div>

              <div className="flex justify-center pt-8">
                <button 
                  type="submit"
                  disabled={formState === 'loading'}
                  className="bg-[rgba(201,169,97,0.08)] border border-[rgba(201,169,97,0.4)] text-gold px-12 py-4 font-sans text-xs font-semibold tracking-[0.2em] uppercase backdrop-blur-sm transition-all duration-500 hover:bg-[rgba(201,169,97,0.15)] hover:border-[rgba(201,169,97,0.7)] hover:shadow-[0_0_20px_rgba(201,169,97,0.15)] disabled:opacity-50 flex items-center gap-3"
                >
                  {formState === 'loading' ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : 'Enviar Solicitação'}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Contact Info Footer */}
        <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-center">
          <p className="font-sans text-sm text-muted">
            <span className="block font-semibold text-foreground mb-1">São Paulo, SP</span>
            Av. Brigadeiro Faria Lima, 3477 — Torre Sul, 14º andar
          </p>
          <div className="hidden md:block w-[1px] h-10 gold-hairline-vertical" />
          <p className="font-sans text-sm text-muted">
            <span className="block font-semibold text-foreground mb-1">Contato Direto</span>
            <a href="mailto:contato@vittorioassociados.com.br" className="hover:text-gold transition-colors">contato@vittorioassociados.com.br</a>
          </p>
        </div>
      </div>
    </section>
  );
}
