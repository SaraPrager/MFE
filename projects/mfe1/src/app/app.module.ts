import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FlightsModule } from './flights/flights.module';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [
    BrowserModule,
    FlightsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    HomeComponent,
    AppComponent,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
