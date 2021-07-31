import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DetailPageComponent } from './components/detail-page/detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    HomePageComponent,
    DetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
