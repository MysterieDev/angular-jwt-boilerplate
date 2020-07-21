import { NgModule } from '@angular/core';
import { ProfileService } from './services/profile.service';
import { ProfileComponent } from './components/profile/profile.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule],
  providers: [ProfileService],
  bootstrap: [],
})
export class ProfileModule {}
