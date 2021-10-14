/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EspecialistService } from './Especialist.service';

describe('Service: Especialist', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EspecialistService]
    });
  });

  it('should ...', inject([EspecialistService], (service: EspecialistService) => {
    expect(service).toBeTruthy();
  }));
});
