
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white selection:bg-[#BCFFB1] overflow-hidden p-6">
      {/* Logo Assembly Container */}
      <div className="flex flex-col items-center group cursor-default">
        <div className="flex items-center gap-6 animate-float">
          {/* Animated Icon Box */}
          <div className="w-20 h-20 bg-black flex items-center justify-center rounded-sm shadow-[12px_12px_0px_0px_#BCFFB1] transition-transform duration-500 hover:scale-110">
            <span className="text-white font-extrabold text-4xl select-none">P.</span>
          </div>
          
          {/* Brand Name */}
          <div className="flex flex-col">
            <span className="text-7xl md:text-8xl font-extrabold tracking-tighter leading-none select-none">
              Papyr
            </span>
            <div className="h-1 w-0 group-hover:w-full bg-black transition-all duration-700 ease-in-out mt-1"></div>
          </div>
        </div>

        {/* Discreet Phrases & Loading Container - More spacing (mt-36) */}
        <div className="mt-36 text-center flex flex-col items-center gap-4">
          
          {/* Animated Pinus Icon */}
          <div className="mb-2 opacity-40 group-hover:opacity-100 transition-opacity duration-1000">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-zinc-400"
            >
              <path 
                className="animate-draw" 
                d="M12 2L7 10H17L12 2Z" 
                style={{ strokeDasharray: 50, strokeDashoffset: 50 }}
              />
              <path 
                className="animate-draw-delayed" 
                d="M12 8L4 18H20L12 8Z" 
                style={{ strokeDasharray: 60, strokeDashoffset: 60 }}
              />
              <path 
                className="animate-draw-trunk" 
                d="M12 18V22" 
                style={{ strokeDasharray: 10, strokeDashoffset: 10 }}
              />
            </svg>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-zinc-400 opacity-80 group-hover:opacity-100 transition-all duration-1000">
              sendo desenvolvido com amor em um lugar da serra gaúcha
            </span>
            <span className="text-[9px] md:text-[10px] font-medium italic lowercase tracking-[0.2em] text-zinc-500 opacity-70 group-hover:opacity-100 transition-all duration-1000">
              powered by: ederson wermeier
            </span>
          </div>

          {/* Minimalist Loading Bar */}
          <div className="w-48 h-[2px] bg-zinc-100 relative overflow-hidden mt-2">
            <div className="absolute top-0 left-0 h-full bg-[#BCFFB1] w-1/3 animate-[loading_2s_infinite_ease-in-out]"></div>
          </div>
        </div>
      </div>

      {/* Style for custom animations */}
      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(150%); }
          100% { transform: translateX(300%); }
        }

        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }

        .animate-draw {
          animation: draw 2s ease-out forwards;
        }

        .animate-draw-delayed {
          animation: draw 2s ease-out 0.5s forwards;
        }

        .animate-draw-trunk {
          animation: draw 1s ease-out 1.5s forwards;
        }
      `}</style>

      {/* Subtle background pattern */}
      <div className="fixed inset-0 dot-pattern opacity-5 pointer-events-none"></div>
      
      {/* Hidden tag for SEO/Accessibility */}
      <h1 className="sr-only">Papyr - Sistema Bibliotecário Escolar</h1>
    </div>
  );
};

export default App;
