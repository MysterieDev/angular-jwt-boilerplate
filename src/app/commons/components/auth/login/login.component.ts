import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  model: any = {};

  constructor(private authService: AuthService) {}

  login() {
    this.authService
      .login(this.model.username, this.model.password)
      .toPromise()
      .then((res) => this.authService.setSession(res))
      .catch((err) => console.log(err));
  }
}
