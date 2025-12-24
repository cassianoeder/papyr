
import React from 'react';
import { Book } from '../types';

interface BookCardProps {
  book: Book;
  onClick: () => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onClick }) => {
  return (
    <div 
      className="group cursor-pointer space-y-3"
      onClick={onClick}
    >
      <div className="relative aspect-[2/3] overflow-hidden rounded-xl bg-gray-100 shadow-md group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500">
        <img 
          src={book.cover} 
          alt={book.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div>
        <h3 className="font-serif font-bold text-[#1A1A1A] leading-tight group-hover:text-[#F16D64] transition-colors">{book.title}</h3>
        <p className="text-[#A1A1A1] text-[10px] font-bold uppercase tracking-wider mt-1">{book.category}</p>
      </div>
    </div>
  );
};

export default BookCard;
