import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SrkNgGridComponent } from './srk-ng-grid.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SrkNgGridComponent
  ],
  exports:[
    SrkNgGridComponent
  ]
})
export class SrkNgGridModule { }
