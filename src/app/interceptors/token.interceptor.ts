import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from "@angular/core";
import { TokenService } from "../services/token.service";

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  
  const _tokenService = inject(TokenService);
  const token = _tokenService.getToken();

  if (token) {
    const cloned = req.clone({
      headers:req.headers.set('Authorization', `Bearer ${token}`)
    });
    return next(cloned); 
  }
  return next(req);
};
