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
        <rect 
          x="17" y="5" width="6" height="30" 
          rx="0.5"
          fill="black" 
          className="animate-papyrus-body"
        />
        <g className="animate-wavy stroke-zinc-200" strokeWidth="0.5" strokeLinecap="round">
          <path d="M12 12 Q14 11 16 12 T20 12 T24 12 T28 12" />
          <path d="M12 16 Q14 15 16 16 T20 16 T24 16 T28 16" />
          <path d="M12 20 Q14 19 16 20 T20 20 T24 20 T28 20" />
          <path d="M12 24 Q14 23 16 24 T20 24 T24 24 T28 24" />
        </g>
        <g className="rod-container">
           <g className="rod-l">
              <rect x="16" y="3" width="2" height="34" rx="1" fill="#444" />
              <rect x="15.5" y="2" width="3" height="2" rx="0.5" fill="#222" />
              <rect x="15.5" y="36" width="3" height="2" rx="0.5" fill="#222" />
           </g>
           <g className="rod-r">
              <rect x="22" y="3" width="2" height="34" rx="1" fill="#444" />
              <rect x="21.5" y="2" width="3" height="2" rx="0.5" fill="#222" />
              <rect x="21.5" y="36" width="3" height="2" rx="0.5" fill="#222" />
           </g>
        </g>
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

const BackgroundPapyrus: React.FC<{ size: number; top: string; left: string; opacity: number; delay: string }> = ({ size, top, left, opacity, delay }) => (
  <div 
    className="absolute pointer-events-none animate-drift" 
    style={{ 
      top, 
      left, 
      width: size, 
      height: size, 
      opacity,
      animationDelay: delay
    }}
  >
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      className="w-full h-full text-zinc-900"
    >
      <path 
        d="M12 24C12 24 11.5 18 12 12" 
        stroke="currentColor" 
        strokeWidth="1.2" 
        strokeLinecap="round"
      />
      <g stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" opacity="0.8">
        <path d="M12 12L7 7" />
        <path d="M12 12L9.5 5" />
        <path d="M12 12L12 4" />
        <path d="M12 12L14.5 5" />
        <path d="M12 12L17 7" />
        <path d="M12 12L5 10" />
        <path d="M12 12L19 10" />
      </g>
    </svg>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-white selection:bg-[#BCFFB1] overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 dot-pattern opacity-[0.05]"></div>
        
        {/* Decorative Background Plants - Opacidades ligeiramente aumentadas para melhor visibilidade */}
        <BackgroundPapyrus size={120} top="10%" left="5%" opacity={0.08} delay="0s" />
        <BackgroundPapyrus size={80} top="65%" left="12%" opacity={0.10} delay="-5s" />
        <BackgroundPapyrus size={160} top="20%" left="80%" opacity={0.06} delay="-2s" />
        <BackgroundPapyrus size={60} top="80%" left="85%" opacity={0.12} delay="-8s" />
        <BackgroundPapyrus size={40} top="40%" left="15%" opacity={0.07} delay="-12s" />
        <BackgroundPapyrus size={90} top="50%" left="75%" opacity={0.05} delay="-4s" />
        <BackgroundPapyrus size={50} top="15%" left="45%" opacity={0.04} delay="-7s" />
      </div>

      <main className="relative z-10 flex flex-col items-center">
        
        {/* Branding Area */}
        <div className="flex items-center justify-center gap-0 mb-32 group animate-logo-pulse">
          <div className="transform translate-x-3 md:translate-x-5">
            <PapyrusLogo />
          </div>
          <div className="overflow-hidden flex items-center h-28 md:h-40">
            <span className="animate-text-apyr-sync text-7xl md:text-9xl font-extrabold tracking-tighter leading-none select-none text-black ml-1 md:ml-2">
              apyr
            </span>
          </div>
        </div>

        {/* Footer Info Section */}
        <div className="flex flex-col items-center gap-10">
          
          {/* Main Decorative Papyrus Plant Icon (Footer) */}
          <div className="opacity-40 hover:opacity-100 transition-opacity duration-1000 relative">
             {/* Glow effect */}
            <div className="absolute inset-0 blur-2xl bg-[#BCFFB1] opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              className="text-zinc-500 animate-sway relative z-10"
            >
              <path 
                d="M12 24C12 24 11.5 18 12 12" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round"
              />
              <g stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.8">
                <path d="M12 12L7 7" />
                <path d="M12 12L9.5 5" />
                <path d="M12 12L12 4" />
                <path d="M12 12L14.5 5" />
                <path d="M12 12L17 7" />
                <path d="M12 12L5 10" />
                <path d="M12 12L19 10" />
              </g>
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

      <h1 className="sr-only">Papyr - Sistema Bibliotecário Escolar</h1>
    </div>
  );
};

export default App;