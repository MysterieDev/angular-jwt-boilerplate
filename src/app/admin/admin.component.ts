import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from '../profile/components/profile/profile.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  closedMessage = false;

  toggleMessage() {
    this.closedMessage = !this.closedMessage;
  }
}
