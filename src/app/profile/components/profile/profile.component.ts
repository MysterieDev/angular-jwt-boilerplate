import { Component, OnInit, OnDestroy } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { AuthService } from '../../../commons/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfileService } from '../../services/profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userinfo: UserInfo;
  constructor(
    private http: HttpClient,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.profileService.getUserInfo().subscribe((res) => (this.userinfo = res));
  }
}

export interface UserInfo {
  username: string;
  email: string;
  role: string;
}
