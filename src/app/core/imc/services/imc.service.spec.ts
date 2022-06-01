import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ImcService } from './imc.service';

describe('ImcService', () => {
  let service: ImcService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useClass: HttpClientMock }],
    });
    service = TestBed.inject(ImcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  class HttpClientMock {
    getData() {
      return null;
    }
  }
});
