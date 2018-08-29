import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { Page1Component } from './page1/page1.component';
import { SrkNgGridModule } from './srk-ng-grid/srk-ng-grid.module';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SrkNgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
