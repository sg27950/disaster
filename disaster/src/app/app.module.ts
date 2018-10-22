import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { DescriptionComponent } from './description/description.component';
import { AppRoutingModule } from './/app-routing.module';
import { BagComponent } from './bag/bag.component';

// <--Import these modules-->
import { HttpService } from './http.service';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    ChecklistComponent,
    DescriptionComponent,
    BagComponent
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
