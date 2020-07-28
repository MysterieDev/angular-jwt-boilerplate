import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './commons/components/auth/login/login.component';
import { RegisterComponent } from './commons/components/auth/register/register.component';
import { ProfileComponent } from './profile/components/profile/profile.component';
import { HomeComponent } from './commons/components/home/home.component';
import { AuthGuard } from './auth.guard';
import { LoginGuard } from './login.guard';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AdminGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
