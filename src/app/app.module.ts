import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddpersonComponent } from './addperson/addperson.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HomeAngularComponent } from './home-angular/home-angular.component';
import { ProfileComponent } from './profile/profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { NotificationsListComponent } from './notifications-list/notifications-list.component';
import { NotificationViewComponent } from './notification-view/notification-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { UserViewComponent } from './user-view/user-view.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AddpersonComponent,
    HomeComponent,
    LoginComponent,
    HomeAngularComponent,
    ProfileComponent,
    SidebarComponent,
    DashboardHeaderComponent,
    NotificationsListComponent,
    NotificationViewComponent,
    DashboardComponent,
    UsersComponent,
    UserViewComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
