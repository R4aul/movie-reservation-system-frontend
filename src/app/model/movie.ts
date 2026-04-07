import { Genre } from "./genre";

export interface Movie {
  id: number;
  title: string;
  genre: Genre;
  rating: string;
  image?: string;
  duration: number
}