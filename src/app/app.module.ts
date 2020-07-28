import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProfileModule } from './profile/profile.module';
import { AuthInterceptor } from './commons/interceptors/auth.interceptor';
import { CommonsModule } from './commons/commons.module';
import { AdminModule } from './admin/admin.module';
@NgModule({
  imports: [CommonsModule, ProfileModule, AdminModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
