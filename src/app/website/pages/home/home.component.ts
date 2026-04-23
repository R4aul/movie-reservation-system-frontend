import { Component, OnInit } from '@angular/core';
import { MovieService } from "../../../services/movie.service";
import { Movie } from "../../../model/movie";

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  movies : Movie[] = [];

  constructor(
    private _movieService : MovieService
  ){

  }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(){
    this._movieService.all().subscribe({
      next:(response)=>{
        this.movies = response.content;
      },
      error:(error)=>{
        console.log(error);
      } 
    }); 
  }

}
