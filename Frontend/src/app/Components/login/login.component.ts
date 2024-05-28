import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private service:AuthService) { }

  getElements(event: Event){
      event.preventDefault();
      const email = (document.getElementById('username') as HTMLInputElement).value;
      const pass = (document.getElementById('password') as HTMLInputElement).value;
      

      this.service.login(email, pass).subscribe(
        response => {
          console.log(document.cookie); // Imprime las cookies
          this.router.navigate(['/']); // Redirige a la ruta raíz
        },
        error => console.error(error)
      );
  }
}