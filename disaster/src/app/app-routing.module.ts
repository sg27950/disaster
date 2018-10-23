import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { BagComponent } from './bag/bag.component';

import { DescriptionComponent } from './description/description.component';
import { WelcomeComponent } from './welcome/welcome.component';

// New feature add by DevPerezJR
import { EarthquakeComponent } from './earthquake/earthquake.component';
import { FireComponent } from './fire/fire.component';
import { FloodComponent } from './flood/flood.component';
import { NuclearComponent } from './nuclear/nuclear.component';
import { TornadoComponent } from './tornado/tornado.component';
// New feature add by DevPerezJR


const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'disaster/home', component: HomeComponent},
  {path: 'disaster/checklist', component: ChecklistComponent},
  {path: 'disaster/description', component: DescriptionComponent},
  {path: 'disaster/earthquake', component: EarthquakeComponent},
  {path: 'disaster/fire', component: FireComponent},
  {path: 'disaster/flood', component: FloodComponent},
  {path: 'disaster/nuclear', component: NuclearComponent},
  {path: 'disaster/tornado', component: TornadoComponent},
  {path: 'disaster/earthquake', component: EarthquakeComponent},
  {path: 'disaster/bag', component: BagComponent},
  { path: '', pathMatch: 'full', redirectTo: '/welcome'}
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
  // declarations: []
})
export class AppRoutingModule { }
