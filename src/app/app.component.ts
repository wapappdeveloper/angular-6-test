import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'my-test';
  width:number = 100;
  height:number = 100;
  constructor(){
    
  }

  emitter(obj:any){
    console.log(obj);
  }
}
