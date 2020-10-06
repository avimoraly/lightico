import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UpperNavComponent } from './upper-nav/upper-nav.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    UpperNavComponent,
    FooterNavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
