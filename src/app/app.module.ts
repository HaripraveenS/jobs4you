import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginEmpComponent } from './login-emp/login-emp.component';
import { LoginApplComponent } from './login-appl/login-appl.component';
import { RegisterApplicantComponent } from './register-applicant/register-applicant.component';
import { RegisterEmployerComponent } from './register-employer/register-employer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginEmpComponent,
    LoginApplComponent,
    RegisterApplicantComponent,
    RegisterEmployerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
