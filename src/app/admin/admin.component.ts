import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  closedMessage = false;
  constructor() {}

  ngOnInit(): void {}

  toggleMessage() {
    this.closedMessage = !this.closedMessage;
  }
}
