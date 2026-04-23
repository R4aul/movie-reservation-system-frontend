import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TokenService } from "./services/token.service";
import { AuthService } from "./services/auth.service";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'movie-reservation-system-frontend';

  constructor(
    private _tokenService : TokenService,
    private _authService : AuthService,
  ){}

  ngOnInit(): void {
    const token = this._tokenService.getToken();
    if (token) {
      this._authService.me().subscribe(); 
    }
  }

}
