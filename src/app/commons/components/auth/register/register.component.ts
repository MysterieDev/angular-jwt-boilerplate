import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  model: any = {};

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService
      .registerUser(this.model.username, this.model.email, this.model.password)
      .toPromise()
      .then((_) => this.router.navigateByUrl('/login'))
      .catch((_) => this.router.navigateByUrl('/register'));
  }
}
