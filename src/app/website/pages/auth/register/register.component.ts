import { Component } from '@angular/core';
import { Router, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AuthService } from "../../../../services/auth.service";
import { RegisterRequest } from "../../../../model/auth";

@Component({
  selector: 'app-register',
  standalone: true,
  imports:[
    FormsModule,
    RouterModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  public request : RegisterRequest = {
    name:'',
    email:'',
    password:''
  }

  public password_confirm : string = '';
  public errorPassword : string = '';

  constructor(
    private _authService : AuthService,
    private _router : Router,
  ){}

  onSubmit(){
    this.errorPassword = '';
    if (this.request.password !== this.password_confirm) {
      this.errorPassword = 'Las contraseñas no coinciden'; 
      return;
    }
    if (
      this.request.name && this.request.email && this.request.password
    ) {
      this._authService.register(this.request).subscribe({
        next:(res)=>{
          this._router.navigate(['/'])
        },
        error:(err)=>{
          
        },
      });
    }
  }

}
