import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProfileModule } from './profile/profile.module';
import { AuthInterceptor } from './commons/interceptors/auth.interceptor';
import { CommonsModule } from './commons/commons.module';
@NgModule({
  imports: [CommonsModule, BrowserModule, ProfileModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
