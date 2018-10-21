import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component'
import { ChecklistComponent } from './checklist/checklist.component'
import { DescriptionComponent } from './description/description.component'
import { WelcomeComponent } from './welcome/welcome.component'

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'disaster/home', component: HomeComponent},
  {path: 'disaster/checklist', component: ChecklistComponent},
  {path: 'disaster/description', component: DescriptionComponent},
  

];
@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
  // declarations: []
})
export class AppRoutingModule { }
