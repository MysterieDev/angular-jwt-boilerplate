import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './commons/components/header/header.component';
import { FooterComponent } from './commons/components/footer/footer.component';
import { LoginComponent } from './commons/components/auth/login/login.component';
import { RegisterComponent } from './commons/components/auth/register/register.component';
import { FormsModule } from '@angular/forms';
import { MustMatchDirective } from './commons/components/directives/must-match.directive';
import { ProfileComponent } from './profile/components/profile/profile.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    MustMatchDirective,
    ProfileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
