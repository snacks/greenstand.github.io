import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { GetInvolvedComponent } from './get-involved/get-involved.component';
import { GetInvolvedFormComponent } from './get-involved/get-involved-form/get-involved-form.component';
import { PaypalComponent } from './get-involved/paypal/paypal.component';
import { AboutComponent } from './about/about.component';
import { HttpService } from './http.service';
import { FooterComponent } from './footer/footer.component';
import { CycleComponent } from './home/cycle/cycle.component';
import { MapComponent } from './home/map/map.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'get-involved', component: GetInvolvedComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GetInvolvedComponent,
    GetInvolvedFormComponent,
    PaypalComponent,
    AboutComponent,
    FooterComponent,
    CycleComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBRQvvfmfP-8gX8gJHRYAUpkrWadQX4jK0'
    })
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})

export class AppModule { }
