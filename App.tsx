import React from 'react';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-white selection:bg-[#BCFFB1]">
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-[0.03] pointer-events-none"></div>

      <main className="relative z-10 flex flex-col items-center">
        
        {/* Logo Section */}
        <div className="flex items-center gap-5 md:gap-8 animate-float mb-32">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-black flex items-center justify-center rounded-sm shadow-[10px_10px_0px_0px_#BCFFB1] hover:scale-105 transition-transform duration-500">
            <span className="text-white font-extrabold text-3xl md:text-4xl select-none">P.</span>
          </div>
          
          <div className="flex flex-col group cursor-default">
            <span className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-none">
              Papyr
            </span>
            <div className="h-[3px] w-0 group-hover:w-full bg-black transition-all duration-700 ease-in-out mt-1"></div>
          </div>
        </div>

        {/* Footer Info Section */}
        <div className="flex flex-col items-center gap-6">
          
          {/* Pine Tree SVG Animation */}
          <div className="opacity-60">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-zinc-400">
              <path 
                className="animate-draw" 
                d="M12 3L7 11H17L12 3Z" 
                stroke="currentColor" strokeWidth="1.2"
              />
              <path 
                className="animate-draw" 
                d="M12 9L4 19H20L12 9Z" 
                stroke="currentColor" strokeWidth="1.2"
                style={{ animationDelay: '0.4s' }}
              />
              <path 
                className="animate-draw" 
                d="M12 19V22" 
                stroke="currentColor" strokeWidth="1.2"
                style={{ animationDelay: '1.2s' }}
              />
            </svg>
          </div>

          {/* Texts */}
          <div className="text-center space-y-2">
            <p className="text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.4em] text-zinc-400">
              sendo desenvolvido com amor em um lugar da serra gaúcha
            </p>
            <p className="text-[9px] md:text-[10px] font-medium italic lowercase tracking-[0.2em] text-zinc-300">
              powered by: ederson wermeier
            </p>
          </div>

          {/* Loading Bar */}
          <div className="w-40 h-[1.5px] bg-zinc-100 relative overflow-hidden mt-4">
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