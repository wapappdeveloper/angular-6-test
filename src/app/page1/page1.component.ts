import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../services/global-data.service';
import { GlobalCommunicateService } from '../services/global-communicate.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor(private globalDataService:GlobalDataService, private globalCommunicateService:GlobalCommunicateService) { }

  ngOnInit() {
    console.log(this.globalDataService.data);
    this.globalDataService.data.name = 'darwin';
    this.globalCommunicateService.sendData('i am updating');
  }

}
