import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { NgServiceWorker, ServiceWorkerModule } from '@angular/service-worker'

import { AppComponent } from './app.component';
import { appRouter } from './app.router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-store'}),
    NoopAnimationsModule,
    HttpClientModule,
    ServiceWorkerModule,
    appRouter
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(sw: NgServiceWorker) {
    sw.push.subscribe(() => {
      console.log("notyfikacja")
    })
  }
}