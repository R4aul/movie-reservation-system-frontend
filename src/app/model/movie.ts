import { Genre } from "./genre";
import { Showtimes } from "./showtime";

export interface Movie {
  id: number;
  title: string;
  genre: Genre;
  rating: string;
  image?: string;
  duration: number
}

export interface MovieShowtimes extends Partial<Movie>{
  showtimes: Showtimes[]
}