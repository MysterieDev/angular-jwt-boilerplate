import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  username: string;
  constructor() {}

  ngOnInit(): void {
    if (localStorage.getItem('id_token')) {
      const tokenObj: any = jwt_decode(localStorage.getItem('id_token'));
      this.username = tokenObj.username;
    }
  }
}
