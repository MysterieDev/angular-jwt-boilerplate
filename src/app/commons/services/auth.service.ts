import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, tap, share } from 'rxjs/operators';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  LoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http
      .post<LoginResult>('/auth/login', {
        username,
        password,
      })
      .pipe(shareReplay());
  }

  registerUser(username, email, password) {
    console.log(username, email, password);

    return this.http
      .post<RegisterResult>('/auth/signup', {
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
  }

  public isLoggedIn() {
    this.LoggedInSubject.next(moment().isBefore(this.getExpiration()));
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}

interface LoginResult {
  access_token: string;
  expiresIn: string;
}

interface RegisterResult {
  username: string;
  email: string;
}
