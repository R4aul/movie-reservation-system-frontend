import { Component, OnInit } from '@angular/core';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-navigation',
  standalone: false,
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit{

  user: User | null = null;

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    let user : User = {
      id:1,
      name:"Raul",
      email:"raul@test.com",
      role:"ADMIN"
    }
    this.user = user;
  }

  logout() {
    localStorage.removeItem('token');
    this.user = null;
  }

}
