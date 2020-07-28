import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from '../components/profile/profile.component';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  username: string;
  constructor(private http: HttpClient) {}

  getUserInfo() {
    return this.http.get<UserInfo>('api/user/info');
  }
}
