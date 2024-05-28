import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.authService.checkToken().pipe(
      map(response => {
        if (!response) {
          this.router.navigate(['/auth/login']);
          return false;
        }
        return true;
      }),
      catchError((error) => {
        this.router.navigate(['/auth/login']);
        return of(false);
      })
    );
  }
}