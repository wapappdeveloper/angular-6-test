/**
 * Use This service for Local Communication with siblings or un related components.
 * Note: Should not inject/import this service into root Module 'app.module.ts'
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class LocalCommunicateService {

  private dataSource = new BehaviorSubject("default message");
  public receiveData = this.dataSource.asObservable();

  constructor() { }

  sendData(data: any) {
    this.dataSource.next(data);
  }
 
}
