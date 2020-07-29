import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './commons/components/auth/login/login.component';
import { RegisterComponent } from './commons/components/auth/register/register.component';
import { ProfileComponent } from './profile/components/profile/profile.component';
import { HomeComponent } from './commons/components/home/home.component';
import { LoginGuard } from './commons/guards/login.guard';
import { AuthGuard } from './commons/guards/auth.guard';
import { PageNotFoundComponent } from './commons/page-not-found/page-not-found.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { ProfileRoutingModule } from './profile/profile-routing.module';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AdminRoutingModule,
    ProfileRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
