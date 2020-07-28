import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { CommonsModule } from '../commons/commons.module';

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonsModule],
})
export class AdminModule {}
