
import { Book, ReaderFriend, ScheduleDay } from './types';

export const POPULAR_BOOKS: Book[] = [
  {
    id: '1',
    title: 'The World of Ice and Fire',
    author: 'George R.R. Martin',
    cover: 'https://images.unsplash.com/photo-1543004228-2593d1c3987d?q=80&w=400&h=600&auto=format&fit=crop',
    category: 'Fantasy'
  },
  {
    id: '2',
    title: 'Fantastic Beasts',
    author: 'J.K. Rowling',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&h=600&auto=format&fit=crop',
    category: 'Adventure'
  },
  {
    id: '3',
    title: 'Game of Thrones',
    author: 'George R.R. Martin',
    cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&h=600&auto=format&fit=crop',
    category: 'Drama'
  },
  {
    id: '4',
    title: 'The Wise Man\'s Fear',
    author: 'Patrick Rothfuss',
    cover: 'https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=400&h=600&auto=format&fit=crop',
    category: 'Magic'
  }
];

export const FRIENDS: ReaderFriend[] = [
  {
    id: '1',
    name: 'Roberto Jordan',
    avatar: 'https://i.pravatar.cc/150?u=roberto',
    lastRead: 'Chapter Five: Diagon Alley',
    lastComment: 'What a delightful and magical chapter it is! It indeed transports readers to the wizarding world..',
    timeAgo: '2 min ago'
  },
  {
    id: '2',
    name: 'Anna Henry',
    avatar: 'https://i.pravatar.cc/150?u=anna',
    lastRead: 'The Forbidden Forest',
    lastComment: 'I finished reading the chapter last night, it was intense!',
    timeAgo: '1 hour ago'
  }
];

export const SCHEDULE: ScheduleDay[] = [
  { day: 'Sun', date: 11 },
  { day: 'Mon', date: 12 },
  { day: 'Tue', date: 13, isActive: true },
  { day: 'Wed', date: 14 },
  { day: 'Thu', date: 15 },
  { day: 'Fri', date: 16 },
  { day: 'Sat', date: 17 },
];
