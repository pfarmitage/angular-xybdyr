import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.authService.getCurrentUser()
        .then(user => {
          if (user) {
            resolve(true);
          } else {
            this.router.navigate(['/login']);
            resolve(false);
          }
        }, err => {
          this.router.navigate(['/login']);
          resolve(false);
        });
    });
  }
}
