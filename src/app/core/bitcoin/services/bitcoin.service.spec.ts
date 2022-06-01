import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { BitcoinService } from './bitcoin.service';

describe('BitcoinService', () => {
  let service: BitcoinService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useClass: HttpClientMock }],
    });
    service = TestBed.inject(BitcoinService);
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
