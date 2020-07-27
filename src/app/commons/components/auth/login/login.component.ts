import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService, LoginResult } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { pipe, Subscription } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  model: any = {};
  isLoggedIn$;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.isLoggedIn$ = this.authService.LoggedInSubject;
  }

  login() {
    this.authService
      .login(this.model.username, this.model.password)
      .subscribe((res) => this.router.navigate(['/profile']));
  }
}
