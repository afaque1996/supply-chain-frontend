import { Injectable, inject } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root' // ✅ Ensure it's available globally
})
export class AuthGuard implements CanActivate {
  private authService = inject(AuthService);
  private router = inject(Router);

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = this.authService.getToken();
    
    if (token) {
      return true; // ✅ Allow access if token exists
    } else {
      console.warn('⛔ Unauthorized! Redirecting to Login...');
      this.router.navigate(['/login']); // 🚀 Redirect to login if not authenticated
      return false;
    }
  }
}
