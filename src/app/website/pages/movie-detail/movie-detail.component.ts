import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of, switchMap } from "rxjs";
import { MovieService } from "../../../services/movie.service";
import { MovieShowtimes } from "../../../model/movie";

@Component({
  selector: 'app-movie-detail',
  standalone: false,
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit{
  
  movieId : string | null = null;
  movie : MovieShowtimes | null = null;
  
  constructor(
    private _activatedRouter : ActivatedRoute,
    private _movieService : MovieService,
    private _router : Router
  ){}

  ngOnInit(): void {
    this._activatedRouter.paramMap.pipe(
      switchMap((params)=>{
        this.movieId = params.get('id');
        if (!this.movieId) {
          this._router.navigate(['/'])
          return of(null);
        }
        return this._movieService.showtimes(this.movieId);
      })
    ).subscribe({
      next:(data)=>{
        if (!data) {
          this._router.navigate(['/'])
        }
        this.movie = data;
      },
      error:(err)=>{
        this._router.navigate(['/'])
      }
    }); 
  }

}
