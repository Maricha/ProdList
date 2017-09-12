import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';

const WELCOME_ROUTER: Routes = [
    {
        path: '',
        component: WelcomeComponent,
    }
 ];

export const welcomeRouter = RouterModule.forChild(WELCOME_ROUTER);
