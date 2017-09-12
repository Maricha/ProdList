import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductGuardService } from './product-guard.service';

const PRODUCT_ROUTER: Routes = [
    {
        path: '',
        component: ProductListComponent,
    },
    {
        path: ':id',
        component: ProductDetailComponent,
        canActivate: [ProductGuardService]
    }
 ];

export const productRouter = RouterModule.forChild(PRODUCT_ROUTER);
