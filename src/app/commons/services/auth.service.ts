import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { share, tap, catchError } from 'rxjs/operators';
import * as moment from 'moment';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  LoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  RoleSubject: BehaviorSubject<string> = new BehaviorSubject('USER');
  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    return this.http
      .post<LoginResult>('/api/auth/login', {
        username,
        password,
      })
      .pipe(
        tap((authResult) => this.setSession(authResult)),
        tap((_) => this.isLoggedIn()),
        tap((_) => this.getRole())
      );
  }

  registerUser(username, email, password) {
    console.log(username, email, password);

    return this.http
      .post<RegisterResult>('/api/auth/signup', {
        username,
        email,
        password,
      })
      .pipe(share());
  }

  public setSession(authResult: LoginResult) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('id_token', authResult.access_token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    this.LoggedInSubject.next(true);
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.LoggedInSubject.next(false);
    this.router.navigate(['/login']);
  }

  public isLoggedIn() {
    const result: boolean = moment().isBefore(this.getExpiration());
    this.LoggedInSubject.next(result);
    return result;
  }

  public getRole() {
    return this.http
      .get<RoleResult>('/api/auth/role')
      .toPromise()
      .then((result) => {
        this.RoleSubject.next(result.role);
        return result;
      })
      .catch((err) => console.log(err));
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}

export interface LoginResult {
  access_token: string;
  expiresIn: string;
}

interface RegisterResult {
  username: string;
  email: string;
}

export interface RoleResult {
  role: string;
}
