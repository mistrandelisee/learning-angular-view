import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddpersonComponent } from './addperson/addperson.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationViewComponent } from './notification-view/notification-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { UserViewComponent } from './user-view/user-view.component';

const routes: Routes = [
  //  { path: 'home', component: HomeComponent },
  //  { path: '',redirectTo:'/dashboard' ,pathMatch: 'full'},
  //  { path: 'login', component: LoginComponent },
  //  { path: 'users', component: UsersComponent },
  //  { path: 'user/:id', component: UserViewComponent },
  //  { path: 'dashboard', component: DashboardComponent },
  //  { path: 'profile', component: ProfileComponent },
  //  { path: 'notification', component: NotificationViewComponent },
  //  { path: 'addperson', component: AddpersonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
