import { NgModule } from '@angular/core';
import { ProfileService } from './services/profile.service';
import { ProfileComponent } from './components/profile/profile.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, AppRoutingModule],
  providers: [ProfileService],
  bootstrap: [],
})
export class ProfileModule {}
