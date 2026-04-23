import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private key = 'token';

  constructor() { }

  saveToken(token : string){
    localStorage.setItem(this.key,token);
  }

  getToken(){
    const token = localStorage.getItem(this.key);
    return token; 
  }

  removeToken(){
    localStorage.removeItem(this.key);
  }

}
