import { TestBed, inject } from '@angular/core/testing';

import { GlobalCommunicateService } from './global-communicate.service';

describe('CommunicateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalCommunicateService]
    });
  });

  it('should be created', inject([GlobalCommunicateService], (service: GlobalCommunicateService) => {
    expect(service).toBeTruthy();
  }));
});
