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
    console.log('works');
    this.authService
      .login(this.model.username, this.model.password)
      .subscribe((data) => console.log(data));
  }
}
