import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginEmpComponent} from './login-emp/login-emp.component'
import {LoginApplComponent} from './login-appl/login-appl.component'
import { HomeComponent } from './home/home.component';
import {RegisterApplicantComponent} from './register-applicant/register-applicant.component'
import {RegisterEmployerComponent} from './register-employer/register-employer.component'
const routes: Routes = [
  
  {path : '' , redirectTo:'/home' , pathMatch:'full'},
  {path : 'loginap' , component:LoginApplComponent},
  {path : 'loginem' , component:LoginEmpComponent},
  {path : 'home'  , component:HomeComponent},
  {path : 'registerap' , component:RegisterApplicantComponent},
  {path : 'registerem' , component:RegisterEmployerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
