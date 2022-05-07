import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomdashComponent } from './customdash/customdash.component';
import { Customdash3Component } from './customdash3/customdash3.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard1', component: CustomdashComponent },
  { path: 'dashboard2', component: Customdash3Component }
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
