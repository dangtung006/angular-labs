import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { AboutComponent } from 'src/app/components/about/about.component';

const routes : Routes = [
  { path : '' , component : LoginComponent},
  { path : '/home' , component : HomeComponent},
  { path : '/about', component : AboutComponent},
  { path : '**' ,  redirectTo : ""}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule { }
