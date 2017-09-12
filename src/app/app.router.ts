import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

export const router: Routes = [
    {
        path: 'welcome',
        loadChildren: 'app/home/welcome.module#WelcomeModule'
    },
    {
        path: 'products',
        loadChildren: 'app/products/product.module#ProductModule'
    },
    {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(router, {preloadingStrategy: PreloadAllModules});
