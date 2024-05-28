import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { AuthGuard } from './auth.guard'; // Importa AuthGuard

const routes: Routes = [
  { path: "auth/login", component: LoginComponent},
  { path: "", component: HomeComponent, canActivate: [AuthGuard]}, // Utiliza AuthGuard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }