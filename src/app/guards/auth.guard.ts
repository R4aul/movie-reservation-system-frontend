import { CanActivateFn } from '@angular/router';
import { Router } from "@angular/router";
import { inject } from "@angular/core";

import { AuthService } from "../services/auth.service";
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {

  const _authService = inject(AuthService);
  const _router = inject(Router)

  return _authService.user$.pipe(
    map( (user) => {
      if (!user) {
        _router.navigate(['/']);
        return false; 
      }
      return true
    })
  );
};
