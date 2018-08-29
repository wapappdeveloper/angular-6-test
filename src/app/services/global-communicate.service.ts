/**
 * Use This service for GLobal Communication with siblings or un related components and/or module.
 * Note: Should not inject/import this service into sub Module or only its import in root module 'app.module.ts'
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class GlobalCommunicateService {

  private dataSource = new BehaviorSubject("default message");
  public receiveData = this.dataSource.asObservable();

  constructor() { }

  sendData(data: any) {
    this.dataSource.next(data);
  }
 
}
