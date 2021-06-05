import { TestBed } from '@angular/core/testing';

import { ChekoutGuard } from './chekout.guard';

describe('ChekoutGuard', () => {
  let guard: ChekoutGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChekoutGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
