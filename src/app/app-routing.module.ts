import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddpersonComponent } from './addperson/addperson.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
   { path: 'home', component: HomeComponent },
  //  { path: '',redirectTo:'/login' ,pathMatch: 'full'},
   { path: 'login', component: LoginComponent },
   { path: 'addperson', component: AddpersonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
