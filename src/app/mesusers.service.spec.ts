import { TestBed } from '@angular/core/testing';

import { MesusersService } from './mesusers.service';

describe('MesusersService', () => {
  let service: MesusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MesusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
