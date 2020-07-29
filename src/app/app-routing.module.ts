import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './commons/components/auth/login/login.component';
import { RegisterComponent } from './commons/components/auth/register/register.component';
import { ProfileComponent } from './profile/components/profile/profile.component';
import { HomeComponent } from './commons/components/home/home.component';
import { LoginGuard } from './commons/guards/login.guard';
import { AuthGuard } from './commons/guards/auth.guard';
import { AdminGuard } from './commons/guards/admin.guard';
import { AdminComponent } from './admin/admin.component';
import { UsersTableComponent } from './admin/users-table/users-table.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
