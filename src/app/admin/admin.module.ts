import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { CommonsModule } from '../commons/commons.module';
import { UsersTableComponent } from './users-table/users-table.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [AdminComponent, UsersTableComponent],
  imports: [CommonsModule, AdminRoutingModule],
  exports: [AdminRoutingModule],
})
export class AdminModule {}
