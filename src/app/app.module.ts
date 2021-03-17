import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddpersonComponent } from './addperson/addperson.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HomeAngularComponent } from './home-angular/home-angular.component';


@NgModule({
  declarations: [
    AppComponent,
    AddpersonComponent,
    HomeComponent,
    LoginComponent,
    HomeAngularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
