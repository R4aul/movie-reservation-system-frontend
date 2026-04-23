import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { BehaviorSubject } from "rxjs";

import { TokenService } from "./token.service";
import { LoginRequest, RegisterRequest, AuthResponse } from "../model/auth";
import { User } from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user = new BehaviorSubject<User | null>(null);
  user$ = this.user.asObservable();

  constructor(
    private _http : HttpClient,
    private _tokenService : TokenService
  ) { }

  login(request : LoginRequest){
    return this._http.post<AuthResponse>('/api/auth/login',request)
    .pipe(
      tap((response) => this._tokenService.saveToken(response.jwt))
    ); 
  }

  register(request : RegisterRequest){
    return this._http.post<AuthResponse>('/api/auth/register',request)
    .pipe(
      tap((response) => this._tokenService.saveToken(response.jwt))
    ); 
  }

  me(){
    return this._http.get<User>('/api/auth/me')
    .pipe(
      tap((response) => this.user.next(response))
    );
  }

  setUser(user : User){

  }

  logout(){
    this._tokenService.removeToken()
  }
}
