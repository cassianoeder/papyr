import React from 'react';

const PapyrusLogo: React.FC = () => {
  return (
    <div className="relative w-28 h-28 md:w-40 md:h-40 flex items-center justify-center">
      <svg 
        viewBox="0 0 40 40" 
        className="w-full h-full relative z-10"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Corpo do Papiro (Área central que fecha dos lados) */}
        <rect 
          x="17" y="5" width="6" height="30" 
          rx="0.5"
          fill="black" 
          className="animate-papyrus-body"
        />

        {/* Escritas Onduladas (Visíveis apenas enquanto o papiro está aberto) */}
        <g className="animate-wavy stroke-zinc-200" strokeWidth="0.5" strokeLinecap="round">
          <path d="M12 12 Q14 11 16 12 T20 12 T24 12 T28 12" />
          <path d="M12 16 Q14 15 16 16 T20 16 T24 16 T28 16" />
          <path d="M12 20 Q14 19 16 20 T20 20 T24 20 T28 20" />
          <path d="M12 24 Q14 23 16 24 T20 24 T24 24 T28 24" />
        </g>

        {/* Hastes Laterais de Madeira */}
        <g className="rod-container">
           {/* Haste Esquerda */}
           <g className="rod-l">
              <rect x="16" y="3" width="2" height="34" rx="1" fill="#444" />
              <rect x="15.5" y="2" width="3" height="2" rx="0.5" fill="#222" />
              <rect x="15.5" y="36" width="3" height="2" rx="0.5" fill="#222" />
           </g>
           {/* Haste Direita */}
           <g className="rod-r">
              <rect x="22" y="3" width="2" height="34" rx="1" fill="#444" />
              <rect x="21.5" y="2" width="3" height="2" rx="0.5" fill="#222" />
              <rect x="21.5" y="36" width="3" height="2" rx="0.5" fill="#222" />
           </g>
        </g>
        
        {/* O Loop do P (Formado após as hastes se encontrarem no centro) */}
        <path 
          d="M20,6.5 C28,6.5 33,10.5 33,16 C33,21.5 28,25.5 20,25.5" 
          stroke="black" 
          strokeWidth="5" 
          strokeLinecap="round"
          className="animate-p-loop"
        />
      </svg>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-white selection:bg-[#BCFFB1]">
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-[0.05] pointer-events-none"></div>

      <main className="relative z-10 flex flex-col items-center">
        
        {/* Branding Area Sync com Pulsação */}
        <div className="flex items-center justify-center gap-0 mb-32 group animate-logo-pulse">
          
          {/* Logo Animada (O P em formação) */}
          <div className="transform translate-x-3 md:translate-x-5">
            <PapyrusLogo />
          </div>
          
          {/* Texto 'apyr' que surge após o P se estabilizar */}
          <div className="overflow-hidden flex items-center h-28 md:h-40">
            {/* Espaçamento otimizado para o 'a' */}
            <span className="animate-text-apyr-sync text-7xl md:text-9xl font-extrabold tracking-tighter leading-none select-none text-black ml-1 md:ml-2">
              apyr
            </span>
          </div>
        </div>

        {/* Footer Info Section */}
        <div className="flex flex-col items-center gap-10">
          
          {/* Decorative Pine */}
          <div className="opacity-20 hover:opacity-100 transition-opacity duration-1000">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-zinc-500">
              <path 
                className="animate-draw" 
                d="M12 3L7 11H17L12 3Z" 
                stroke="currentColor" strokeWidth="1.5"
              />
              <path 
                className="animate-draw" 
                d="M12 9L4 19H20L12 9Z" 
                stroke="currentColor" strokeWidth="1.5"
                style={{ animationDelay: '0.4s' }}
              />
              <path 
                className="animate-draw" 
                d="M12 19V22" 
                stroke="currentColor" strokeWidth="1.5"
                style={{ animationDelay: '1.2s' }}
              />
            </svg>
          </div>

          {/* Texts */}
          <div className="text-center space-y-4">
            <p className="text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.6em] text-zinc-400">
              Sendo criado em algum vale da serra Gaúcha.
            </p>
            <div className="flex items-center justify-center gap-5">
               <div className="h-[0.5px] w-6 bg-zinc-100"></div>
               <p className="text-[9px] md:text-[10px] font-medium italic lowercase tracking-[0.4em] text-zinc-300">
                powered by: ederson wermeier
               </p>
               <div className="h-[0.5px] w-6 bg-zinc-100"></div>
            </div>
          </div>

          {/* Minimalist Loading Progress */}
          <div className="w-48 h-[1px] bg-zinc-50 relative overflow-hidden mt-2">
            <div className="absolute top-0 left-0 h-full bg-[#BCFFB1] w-1/4 loading-bar-inner"></div>
          </div>
        </div>
      </main>

      {/* SR Only Header */}
      <h1 className="sr-only">Papyr - Sistema Bibliotecário Escolar</h1>
    </div>
  );
};

export default App;