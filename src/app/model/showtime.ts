import { Movie } from "./movie";
import { Room } from "./room";

export interface Showtimes{
    startTime:Date,
    movie:Movie,
    room:Room
}