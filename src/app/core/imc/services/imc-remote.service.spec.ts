import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ImcRemoteService } from './imc-remote.service';

describe('ImcRemoteService', () => {
  let service: ImcRemoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useClass: HttpClientMock }],
    });
    service = TestBed.inject(ImcRemoteService);
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
