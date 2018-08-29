import { Component, ViewEncapsulation } from '@angular/core';
import { GlobalCommunicateService } from './services/global-communicate.service';

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
  constructor(private globalCommunicateService:GlobalCommunicateService){
    
  }

  ngOnInit(){
    this.globalCommunicateService.receiveData.subscribe((data)=>{
      console.log(data);
    });
  }

  emitter(obj:any){
    console.log(obj);
  }
}
