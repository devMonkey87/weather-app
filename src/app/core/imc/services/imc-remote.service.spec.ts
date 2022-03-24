import { TestBed } from '@angular/core/testing';

import { ImcRemoteService } from './imc-remote.service';

describe('ImcRemoteService', () => {
  let service: ImcRemoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImcRemoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
