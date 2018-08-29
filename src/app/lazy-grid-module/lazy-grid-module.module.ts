import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyPage1Component } from '../lazy-page1/lazy-page1.component';
import { SrkNgGridModule } from '../srk-ng-grid/srk-ng-grid.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'load-me', component: LazyPage1Component }
];

@NgModule({
  imports: [
    CommonModule,
    SrkNgGridModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LazyPage1Component]
})
export class LazyGridModuleModule { }
