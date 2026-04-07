import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Page } from "../model/page";
import { Movie, MovieShowtimes } from "../model/movie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http : HttpClient
  ) { }

  public all(){
    return this.http.get<Page<Movie>>('api/movies/all');
  }

  showtimes(id : string){
    return this.http.get<MovieShowtimes>('api/movies/'+id+'/showtimes');
  }

}
