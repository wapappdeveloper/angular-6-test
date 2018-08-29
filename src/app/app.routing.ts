import { Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';

export const routes: Routes = [
    { path: 'grid', component: Page1Component },
    { path: 'lazy', loadChildren: './lazy-grid-module/lazy-grid-module.module#LazyGridModuleModule' }
];


