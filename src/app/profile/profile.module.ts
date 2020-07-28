import { NgModule } from '@angular/core';
import { ProfileService } from './services/profile.service';
import { ProfileComponent } from './components/profile/profile.component';
import { CommonsModule } from '../commons/commons.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonsModule],
  providers: [],
  bootstrap: [],
})
export class ProfileModule {}
