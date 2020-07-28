import { NgModule } from '@angular/core';
import { ProfileService } from './services/profile.service';
import { ProfileComponent } from './components/profile/profile.component';
import { CommonsModule } from '../commons/commons.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonsModule],
  providers: [ProfileService],
  bootstrap: [],
})
export class ProfileModule {}
