import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
import { DashbordComponent } from './dashbord/dashbord.component';
import {RegistrationService} from "./registration.service";
import {LoginService} from "./login.service";
import { ConformationComponent } from './conformation/conformation.component';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DashbordComponent,
    ConformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [RegistrationService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

