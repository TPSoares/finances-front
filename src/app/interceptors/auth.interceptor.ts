import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('auth_token');
  const router = inject(Router);

  const excludedUrls = ['/login', '/register'];
  const isExcluded = excludedUrls.some((url) => req.url.includes(url));

  if (token && !isExcluded) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });
  }

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 403) {
        localStorage.removeItem('auth_token'); // remove token inválido
        router.navigate(['/login']); // redireciona para login
      }
      return throwError(() => error);
    })
  );
};
