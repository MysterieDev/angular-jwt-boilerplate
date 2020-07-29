import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  @Input() headline: string;
  @Input() message: string;
  closedMessage = false;

  toggleMessage() {
    this.closedMessage = !this.closedMessage;
  }
}
