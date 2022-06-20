import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { BitcoinService } from './bitcoin.service';

describe('BitcoinService', () => {
  let service: any, services: any, spies:any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BitcoinService, 
        { provide: HttpClient, useClass: HttpClientMock }
      ]});
    service = TestBed.inject(BitcoinService);
    initServices();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should have injected correct services', () => {
    expect(service.http).toEqual(services.http);
  });
  it('should call get http service when getData is called', async () => {
    spies.http.get.and.returnValue(of([]));
    await service.getData();
    expect(spies.http.get).toHaveBeenCalled();
    
  });

  function initServices() {
    services = {
      http: TestBed.inject(HttpClient)
    };
    initSpies();
  }
  function initSpies() {
    spies = {
      http: {
        get: spyOn(services.http, 'get')
      }
      }
    };
    class HttpClientMock {
      get() {
        return null;
      }
      post() {
        return null;
      }
    }
});
