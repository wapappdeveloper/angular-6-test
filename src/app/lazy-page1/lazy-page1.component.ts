import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../services/global-data.service';

@Component({
  selector: 'app-lazy-page1',
  templateUrl: './lazy-page1.component.html',
  styleUrls: ['./lazy-page1.component.css']
})
export class LazyPage1Component implements OnInit {

  constructor(private globalDataService:GlobalDataService){

  }
  ngOnInit() {
    console.log(this.globalDataService.data);
  }

}
