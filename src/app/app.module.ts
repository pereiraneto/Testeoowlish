import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListClinicsComponent } from './list-clinics/list-clinics.component';
import { ListItemDetailComponent } from './list-item-detail/list-item-detail.component';
import { routing } from './app.routing';
import { ClinicService } from './list-clinics/list-clinics.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListClinicsComponent,
    ListItemDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [ClinicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
