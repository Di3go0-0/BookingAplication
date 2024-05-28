import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private http: HttpClient, private router: Router) { }

  getElements(event: Event){
      event.preventDefault();
      const email = (document.getElementById('username') as HTMLInputElement).value;
      const pass = (document.getElementById('password') as HTMLInputElement).value;
      
      this.http.post('http://localhost:3600/api/auth/login', { email, pass }, { withCredentials: true }).subscribe(
          response => {
            console.log(document.cookie); // Imprime las cookies
            this.router.navigate(['/']); // Redirige a la ruta raíz
          },
          error => console.error(error)
      );
  }
}