import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { welcomeRouter } from './welcome.router';
import { WelcomeComponent} from './welcome.component';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    welcomeRouter,
    SharedModule
  ]
})
export class WelcomeModule { }
