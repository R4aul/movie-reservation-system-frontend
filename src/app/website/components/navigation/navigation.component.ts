import { Component, OnInit } from '@angular/core';

import { AuthService } from "../../../services/auth.service";
import { User } from "../../../model/user";

@Component({
  selector: 'app-navigation',
  standalone: false,
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit{

  user: User | null = null;

  constructor(
    private _authService : AuthService,
  ){}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this._authService.user$.subscribe({
      next:(res)=>{
        this.user = res
      }
    })
  }

  logout() {
    this._authService.logout();
    this.user = null;
  }

}
