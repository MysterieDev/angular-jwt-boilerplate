import { NgModule } from '@angular/core';
import { ProfileComponent } from './components/profile/profile.component';
import { CommonsModule } from '../commons/commons.module';
@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonsModule],
  exports: [],
})
export class ProfileModule {}
