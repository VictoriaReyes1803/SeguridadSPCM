import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../services/Auth/auth.service';
import { SecureCookieService } from '../services/cookies/cookies.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService,
    private cookieService: CookieService,
    private router: Router,
    private secureCookieService: SecureCookieService,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this.secureCookieService.getSecureCookie('access'); 
    
    let authReq = req;
    
    if (accessToken) {
      authReq = req.clone({
        setHeaders: { Authorization: `Bearer ${accessToken}` }
      });
    }

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 && accessToken || error.status === 403 && accessToken ) {
          return this.handle401Error(authReq, next);
        }

        return throwError(() => error);
      })
    );
  }

  private handle401Error(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const refreshToken = this.secureCookieService.getSecureCookie('refresh');

    if (refreshToken) {
     
      return this.authService.refreshToken(refreshToken).pipe(
        switchMap((newTokens: any) => {
          
          this.secureCookieService.setSecureCookie('access', newTokens.access);
          this.secureCookieService.setSecureCookie('refresh', newTokens.refresh);

          const clonedReq = req.clone({
            setHeaders: {
              Authorization: `Bearer ${newTokens.access}`
            }
          });

          return next.handle(clonedReq);
        }),
        catchError(err => {
          this.secureCookieService.delete('access');
          this.secureCookieService.delete('refresh');
          this.router.navigate(['/']);
          return throwError(() => err);
        })
      );
    } else {
      this.secureCookieService.delete('access');
      this.secureCookieService.delete('refresh');
      this.router.navigate(['/']);
      return throwError(() => 'No refresh token available');
    }
  }
}