import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn$;
  role$;

  constructor(private authservice: AuthService) {}

  ngOnInit() {
    this.isLoggedIn$ = this.authservice.LoggedInSubject;
    this.role$ = this.authservice.RoleSubject;

    //Fill Subjects with new Values
    this.authservice.isLoggedIn();
    this.authservice.getRole();
  }

  logout() {
    this.authservice.logout();
  }
}
