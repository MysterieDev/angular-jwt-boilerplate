import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLoggedIn: boolean = false;

  constructor(private authservice: AuthService) {}

  ngOnInit() {
    this.authservice.LoggedInSubject.subscribe(
      (res) => (this.isLoggedIn = res)
    );
    this.authservice.isLoggedIn();
  }

  ngOnDestroy() {
    this.authservice.LoggedInSubject.unsubscribe();
  }

  logout() {
    this.authservice.logout();
    this.isLoggedIn = false;
  }
}
