import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TableData } from './srk-ng-grid.interface';

@Component({
  selector: 'app-srk-ng-grid',
  templateUrl: './srk-ng-grid.component.html',
  styleUrls: ['./srk-ng-grid.component.css']
})
export class SrkNgGridComponent implements OnInit {

  @Input() private width:number = 0;
  @Input() private height:number = 0;
  @Output() private emitter:EventEmitter<any> = new EventEmitter();

  tableData:TableData;

  constructor() { }

  ngOnChanges(){
    console.log('0. ngOnChanges');
  }

  ngOnInit() {
    console.log('1. ngOnInit');
    console.log(this.width);
    console.log(this.height);
    console.log(this.emitter);
    this.emitter.emit({emitterName:'emitter1'});

  }

  ngAfterContentInit(){
    console.log('2. ngAfterContentInit');
  }

  ngAfterContentChecked(){
    console.log('3. ngAfterContentChecked');
  }

  ngAfterViewInit(){
    console.log('4. ngAfterViewInit');
  }

  ngAfterViewChecked(){
    console.log('5. ngAfterViewChecked');
  }

}
