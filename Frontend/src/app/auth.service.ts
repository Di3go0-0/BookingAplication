import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer, Observable } from 'rxjs';
import { switchMap } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  apiURL:String = 'http://localhost:3600/';

  checkToken(): Observable<any> {
    let token = document.cookie.split('=')[1]; // Obtiene el token de las cookies
    return this.http.post(this.apiURL+'api/token/', { token: token }, { withCredentials: true });
  }

  login(email: string, pass: string): Observable<any> {
    return this.http.post(this.apiURL+'api/auth/login', { email, pass }, { withCredentials: true });
  }
  
  getBookings(): Observable<any> {
    return timer(0, 5000).pipe( // 0 es el tiempo de inicio y 5000 es el intervalo en milisegundos (5 segundos)
        switchMap(() => this.http.get(this.apiURL+'api/booking', { withCredentials: true }))
    );
}



}