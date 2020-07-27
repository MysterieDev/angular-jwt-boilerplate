import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn$;

  constructor(private authservice: AuthService) {}

  ngOnInit() {
    this.isLoggedIn$ = this.authservice.LoggedInSubject;
    this.authservice.isLoggedIn();
  }

  logout() {
    this.authservice.logout();
  }
}
