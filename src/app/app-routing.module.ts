import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './entrypages/home/home.component';
import { LoginpageComponent } from './entrypages/home/loginpage/loginpage.component';
import { DashboardComponent } from './entrypages/dashboard/dashboard.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginpageComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'home', component: HomeComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
