
import React from 'react';

const TopBar: React.FC = () => {
  return (
    <header className="h-20 flex items-center justify-between px-10 bg-[#F8F7F2]">
      {/* Search Input */}
      <div className="relative w-full max-w-xl group">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A1A1A1] group-focus-within:text-[#1A1A1A] transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </span>
        <input 
          type="text" 
          placeholder="Search book name, author, edition..."
          className="w-full h-11 pl-12 pr-4 bg-transparent border-none focus:ring-0 text-sm placeholder-[#A1A1A1] focus:placeholder-[#D1D1D1] transition-all"
        />
      </div>

      {/* User Info */}
      <div className="flex items-center space-x-4">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-semibold text-[#1A1A1A]">Alexander Mark</p>
          <p className="text-[10px] text-[#A1A1A1] uppercase tracking-widest font-bold">Admin</p>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm hover:scale-105 transition-transform cursor-pointer">
          <img src="https://i.pravatar.cc/150?u=admin" alt="User Avatar" className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  );
};

export default TopBar;
