import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AgencyListComponent } from './components/agency-list/agency-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StarComponent } from './components/common/star/star.component';
import { AgencyDetailsComponent } from './components/agency-details/agency-details.component';
import { AgencyInformationsComponent } from './components/agency-details/agency-informations/agency-informations.component';
import { AgencyProjectsComponent } from './components/agency-details/agency-projects/agency-projects.component';
import { AgencyRatingComponent } from './components/agency-details/agency-rating/agency-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainPageComponent,
    AgencyListComponent,
    StarComponent,
    AgencyDetailsComponent,
    AgencyInformationsComponent,
    AgencyProjectsComponent,
    AgencyRatingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
