import { Injectable, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  login(username: string, password: string): boolean {
    if (isPlatformBrowser(this.platformId)) {
      if (username === 'admin' && password === 'admin') {
        localStorage.setItem('loggedIn', 'true'); // Set loggedIn flag on successful login
        return true;
      }
    }
    return false;
  }

  isLoggedIn(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('loggedIn') === 'true'; // Check if user is logged in
    }
    return false;
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('loggedIn'); // Clear login status on logout
    }
  }
}
