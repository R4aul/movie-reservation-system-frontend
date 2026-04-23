import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { AuthService } from "../../../../services/auth.service";
import { LoginRequest } from "../../../../model/auth";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule
],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public loginData : LoginRequest = {
    email:'',
    password:''
  }

  public errors : Record<string,string> = {};

  constructor(
    private _authService :AuthService,
    private _router : Router
  ){}

  onSubmit(){
    if (this.loginData.email && this.loginData.password) {
      this._authService.login(this.loginData).subscribe({
        next:(res)=>{
          this._router.navigate(['/']) 
        },
        error:(err)=>{
          console.log(err)
        }
      });
    }
  

  }

  
}
