import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  model: any = {};

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService
      .login(this.model.username, this.model.password)
      .toPromise()
      .then((res) => this.authService.setSession(res))
      .then((_) => this.router.navigateByUrl('/'))
      .catch((err) => {
        console.log(err);
        this.router.navigateByUrl('/login');
      });
  }
}
