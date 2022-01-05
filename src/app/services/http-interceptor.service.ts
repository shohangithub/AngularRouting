import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/internal/operators/tap';
import { AppConfigService } from './app-config.service';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  cloneRequest: any;
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const user = AppConfigService.getUserInfo();

    if (user != null) {
      if (req.responseType !== 'text') {
        this.cloneRequest = req.clone({
          headers: req.headers.set('Authorization', 'Basic ' + user),
        });
      } else {
        this.cloneRequest = req.clone();
      }

      return next.handle(this.cloneRequest).pipe(
        tap({
          next: (x: HttpEvent<any>) => {
            if (x instanceof HttpResponse) {
            }
          },
          error: (err) => {
            if (err.status === 401) {
              this.authService.deleteToken();
              this.router.navigate(['/login']);
            }
          },
          complete: () => {},
        })
      );
    } else {
      return next.handle(req.clone()).pipe(
        tap({
          next: (x: HttpEvent<any>) => {
            if (x instanceof HttpResponse) {
            }
          },
          error: (err) => {
            if (err.status === 401) {
              this.authService.deleteToken();
              this.router.navigate(['/login']);
            }
          },
          complete: () => {},
        })
      );
    }
  }
}
