import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {

  data:any = {
    name:'lional'
  }

  constructor() { }

}
