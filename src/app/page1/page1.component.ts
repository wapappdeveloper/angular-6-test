import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../services/global-data.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor(private globalDataService:GlobalDataService) { }

  ngOnInit() {
    console.log(this.globalDataService.data);
    this.globalDataService.data.name = 'darwin';
  }

}
