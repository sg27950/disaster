import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { DescriptionComponent } from './description/description.component';
import { AppRoutingModule } from './app-routing.module';
import { BagComponent } from './bag/bag.component';

// <--Import these modules-->
import { HttpService } from './http.service';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TornadoComponent } from './tornado/tornado.component';
import { FireComponent } from './fire/fire.component';
import { FloodComponent } from './flood/flood.component';
import { EarthquakeComponent } from './earthquake/earthquake.component';
import { NuclearComponent } from './nuclear/nuclear.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    ChecklistComponent,
    DescriptionComponent,
    BagComponent,
    TornadoComponent,
    FireComponent,
    FloodComponent,
    EarthquakeComponent,
    NuclearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // <--Add these-->
    FormsModule,
    HttpClientModule
    // <--Add these-->
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
