
export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  category: string;
  pages?: number;
  readPages?: number;
  description?: string;
}

export interface ReaderFriend {
  id: string;
  name: string;
  avatar: string;
  lastRead: string;
  lastComment: string;
  timeAgo: string;
}

export interface ScheduleDay {
  day: string;
  date: number;
  isActive?: boolean;
}
