import { TestBed, inject } from '@angular/core/testing';

import { LocalCommunicateService } from './local-communicate.service';

describe('LocalCommunicateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalCommunicateService]
    });
  });

  it('should be created', inject([LocalCommunicateService], (service: LocalCommunicateService) => {
    expect(service).toBeTruthy();
  }));
});
