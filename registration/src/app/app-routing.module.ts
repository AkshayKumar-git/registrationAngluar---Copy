import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginFormComponent} from "./login-form/login-form.component";
import {RegistrationMainFormComponent} from "./registration-main-form/registration-main-form.component";
import {DashbordComponent} from "./dashbord/dashbord.component";
import {ConformationComponent} from "./conformation/conformation.component";

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginFormComponent},
  {path:'registration',component:RegistrationMainFormComponent},
  {path:'dashboard',component:DashbordComponent},
  {path:'conformation',component:ConformationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[LoginFormComponent,RegistrationMainFormComponent,DashbordComponent,ConformationComponent]
