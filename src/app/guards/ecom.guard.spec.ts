import { TestBed, async, inject } from '@angular/core/testing';

import { EcomGuard } from './ecom.guard';

describe('EcomGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EcomGuard]
    });
  });

  it('should ...', inject([EcomGuard], (guard: EcomGuard) => {
    expect(guard).toBeTruthy();
  }));
});
