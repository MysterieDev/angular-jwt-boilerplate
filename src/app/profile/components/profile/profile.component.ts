import { Component, OnInit, OnDestroy } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { AuthService } from '../../../commons/services/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  username: string;
  private isLoggedIn$;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.LoggedInSubject;
    this.authService.isLoggedIn();

    if (localStorage.getItem('id_token')) {
      const tokenObj: any = jwt_decode(localStorage.getItem('id_token'));
      this.username = tokenObj.username;
    }
  }
}
