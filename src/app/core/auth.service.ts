import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth';

  private http = inject(HttpClient); 

  login(email: string, password: string) {
    return this.http.post<{ access_token: string; role?: string; modules?: string[] }>(
      `${this.apiUrl}/login`,
      { email, password }
    );
  }
  

  saveToken(token: string) {
    localStorage.setItem('access_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  logout() {
    localStorage.removeItem('access_token');
  }
}
