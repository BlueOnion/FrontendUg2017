/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Calc1Service } from './calc1.service';

describe('Calc1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Calc1Service]
    });
  });

  it('should ...', inject([Calc1Service], (service: Calc1Service) => {
    expect(service).toBeTruthy();
  }));
});
