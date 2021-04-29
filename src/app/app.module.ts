import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { FontAwesomeModule }  from '@fortawesome/angular-fontawesome';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { ParticlesModule } from 'angular-particle';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { FlipCardModule } from './shared/flip-card/flip-card.module'


@NgModule({
  declarations: [
    AppComponent,
    HeaderPageComponent,
    HomePageComponent,
    FooterPageComponent,
    AboutMeComponent,
    MyProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ParticlesModule,
    FlipCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
