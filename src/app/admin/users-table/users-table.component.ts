import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/profile/components/profile/profile.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'admin-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnInit {
  allUsers: UserInfo[];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<UserInfo[]>('/api/admin/users/all')
      .subscribe((res) => (this.allUsers = res));
  }
}
