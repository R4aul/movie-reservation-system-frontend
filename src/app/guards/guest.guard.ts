import { CanActivateFn } from '@angular/router';
import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { TokenService } from "../services/token.service";
import { map } from "rxjs";

export const guestGuard: CanActivateFn = (route, state) => {
  
  const _tokenService = inject(TokenService);
  const _router = inject(Router);

  const token = _tokenService.getToken();

  if (token) {
    _router.navigate(['/'])
    return false 
  }
  return true;
};
