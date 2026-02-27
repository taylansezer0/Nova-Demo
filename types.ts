
export type Mood = 'dark' | 'light';

export interface Platform {
  id: string;
  name: string;
  description: string;
  color: string;
  logo: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  platform: string;
  image: string;
  challenge: string;
  solution: string;
  size: 'large' | 'small';
}
