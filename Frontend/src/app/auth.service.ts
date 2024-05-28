import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  checkToken(): Observable<any> {
    let token = document.cookie.split('=')[1]; // Obtiene el token de las cookies
    return this.http.post('http://localhost:3600/api/token/', { token: token }, { withCredentials: true });
  }
}