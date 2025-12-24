
import React from 'react';
import { SCHEDULE, FRIENDS } from '../constants';

const RightPanel: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Currently Reading / Stats Header */}
      <section className="space-y-4">
        <h2 className="text-3xl font-serif font-bold text-[#1A1A1A]">The Camberwell <br />Secrets</h2>
        <div className="flex items-center justify-between text-[#F16D64] font-bold">
            <span className="text-xl">154 <span className="text-[#A1A1A1] font-normal text-sm">/ 300 pages</span></span>
        </div>
        <p className="text-[#6B6B66] text-sm leading-relaxed">
            Harry as he returns to Hogwarts school of witchcraft and wizardry for his 2nd year, only to discover that...
        </p>
        <p className="text-right text-[10px] font-bold uppercase tracking-widest text-[#A1A1A1]">
          - JK Rowling
        </p>
      </section>

      {/* Schedule Reading */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-serif font-bold text-[#1A1A1A]">Schedule Reading</h3>
          <div className="flex space-x-1">
            <button className="p-1 hover:bg-[#F8F7F2] rounded transition-colors"><ChevronLeftIcon /></button>
            <button className="p-1 hover:bg-[#F8F7F2] rounded transition-colors"><ChevronRightIcon /></button>
          </div>
        </div>
        <div className="flex justify-between items-center bg-[#FDFCF8] p-4 rounded-2xl border border-[#EBEAE4]">
          {SCHEDULE.map((item) => (
            <div 
              key={item.date} 
              className={`flex flex-col items-center py-3 px-2 rounded-xl transition-all ${item.isActive ? 'bg-white shadow-xl scale-110 ring-1 ring-[#F16D64]/10' : ''}`}
            >
              <span className={`text-[10px] font-bold uppercase tracking-tighter ${item.isActive ? 'text-[#F16D64]' : 'text-[#A1A1A1]'}`}>
                {item.day}
              </span>
              <span className={`text-lg font-bold mt-1 ${item.isActive ? 'text-[#1A1A1A]' : 'text-[#6B6B66]'}`}>
                {item.date}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Reader Friends */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
            <h3 className="text-xl font-serif font-bold text-[#1A1A1A]">Reader Friends</h3>
            <div className="flex space-x-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#EBEAE4]"></div>
            </div>
        </div>
        <div className="space-y-8">
          {FRIENDS.map((friend) => (
            <div key={friend.id} className="flex space-x-4">
              <img src={friend.avatar} className="w-12 h-12 rounded-full border-2 border-white shadow-sm flex-shrink-0" />
              <div className="space-y-2 flex-1">
                <div className="flex justify-between items-center">
                    <h4 className="text-sm font-bold text-[#1A1A1A]">{friend.name}</h4>
                    <span className="text-[10px] text-[#A1A1A1] font-medium">{friend.timeAgo}</span>
                </div>
                <p className="text-xs text-[#6B6B66] leading-relaxed">
                    {friend.lastComment}
                </p>
                <div className="flex items-center space-x-2 text-[#F16D64] text-[10px] font-bold uppercase tracking-widest bg-[#FFF5F4] px-2 py-1 rounded-full w-fit">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>{friend.lastRead}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const ChevronLeftIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
);
const ChevronRightIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
);

export default RightPanel;
