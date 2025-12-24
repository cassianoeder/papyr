
import React from 'react';
import { POPULAR_BOOKS } from '../constants';
import BookCard from './BookCard';

interface DashboardProps {
  onBookSelect: (id: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onBookSelect }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-4">
        <div className="flex-1 space-y-4">
          <h1 className="text-6xl font-serif text-[#1A1A1A] leading-tight">
            Happy reading, <br />
            <span className="text-[#F16D64]">Harvey</span>
          </h1>
          <p className="text-[#6B6B66] text-lg leading-relaxed max-w-md">
            Wow! you've delved deep into the wizarding world's secrets. Have Harry's parents died yet? Oops, looks like you're not there yet. Get reading now!
          </p>
          <button className="flex items-center space-x-3 bg-[#1A1A1A] text-white px-8 py-4 rounded-xl hover:bg-[#333] transition-all group mt-2">
            <span className="font-semibold text-sm">Start reading</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
          </button>
        </div>

        {/* Featured Open Book Decoration (Visual) */}
        <div className="relative hidden lg:block mr-12 group">
            <div className="w-72 h-48 bg-white shadow-2xl rounded-sm perspective-[1000px] flex overflow-hidden border border-[#EEE]">
                <div className="w-1/2 bg-[#F9F9F9] p-4 flex flex-col justify-end space-y-2">
                    <div className="h-1 w-full bg-[#DDD]"></div>
                    <div className="h-1 w-3/4 bg-[#DDD]"></div>
                    <div className="h-1 w-5/6 bg-[#DDD]"></div>
                </div>
                <div className="w-1/2 bg-white p-4 relative overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=200" alt="Book Feature" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                    <div className="relative z-10 bg-white/60 backdrop-blur-sm p-2 text-[8px] font-bold uppercase tracking-widest text-center mt-auto">New Edition</div>
                </div>
            </div>
            {/* Shadows and floating effect */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#1A1A1A]/5 blur-xl -z-10 rounded-full group-hover:bg-[#1A1A1A]/10 transition-colors"></div>
        </div>
      </section>

      {/* Popular Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-serif font-semibold text-[#1A1A1A]">Popular Now</h2>
          <div className="flex space-x-2">
             <div className="w-2 h-2 rounded-full bg-[#1A1A1A]"></div>
             <div className="w-2 h-2 rounded-full bg-[#EBEAE4]"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {POPULAR_BOOKS.map((book) => (
            <BookCard key={book.id} book={book} onClick={() => onBookSelect(book.id)} />
          ))}
        </div>
      </section>

      {/* New Series Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-serif font-semibold text-[#1A1A1A]">New Series Collection</h2>
          <button className="text-sm font-bold text-[#A1A1A1] hover:text-[#1A1A1A] transition-colors">See All</button>
        </div>
        
        <div className="bg-white rounded-2xl p-6 border border-[#EBEAE4] hover:shadow-xl transition-all group flex items-center space-x-6 cursor-pointer">
            <div className="flex -space-x-4">
                <img src="https://images.unsplash.com/photo-1543004228-2593d1c3987d?auto=format&fit=crop&q=80&w=100" className="w-20 h-28 object-cover rounded shadow-lg border-2 border-white relative z-20" />
                <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=100" className="w-20 h-28 object-cover rounded shadow-lg border-2 border-white relative z-10" />
            </div>
            <div className="flex-1">
                <h3 className="text-xl font-serif font-bold text-[#1A1A1A]">A Legend of Ice and Fire: The Ice Horse</h3>
                <p className="text-[#A1A1A1] text-sm font-medium mt-1">8 chapters each vol</p>
            </div>
            <div className="text-right">
                <p className="text-2xl font-serif font-bold text-[#1A1A1A]">2 vol</p>
                <div className="flex justify-end mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
