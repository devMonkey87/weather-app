import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  RAPID_API_BITCOIN_HOST_VALUE,
  RAPID_API_HOST,
  RAPID_API_KEY,
  RAPID_API_KEY_PW,
} from 'src/app/shared/constants';
import { BITCOINS_URL } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class BitcoinService {
  constructor(private readonly http: HttpClient) {}

  public async getData() {
    const headers = new HttpHeaders()
      .set(RAPID_API_HOST, RAPID_API_BITCOIN_HOST_VALUE)
      .set(RAPID_API_KEY, RAPID_API_KEY_PW);
    return await this.http.get<any[]>(BITCOINS_URL, { headers }).toPromise();
  }
}
