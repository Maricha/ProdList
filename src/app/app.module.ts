import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { appRouter } from './app.router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule,
    appRouter
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
