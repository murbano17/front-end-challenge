export interface Audio {
  autoPlay: boolean;
  id: number;
  url: string;
}
export interface Author {
  description: string;
  id: number;
  name: string;
}
export interface Song {
  audio: Audio;
  author: Author;
  description: string;
  genre: string;
  id: number;
  image: string;
  name: string;
}
export type Songs = Song[];
