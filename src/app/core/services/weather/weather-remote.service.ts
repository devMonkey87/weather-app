import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WEATHER_URL } from './constants';

@Injectable({
  providedIn: 'root',
})
export class WeatherRemoteService {
  constructor(private http: HttpClient) {}

  public firstCall() {
    let params = new HttpParams();
    params = params.append('lat', '35.5');
    params = params.append('lon', '-78.5');

    
    let headers = new HttpHeaders();
    headers = headers.append('x-rapidapi-host', 'weatherbit-v1-mashape.p.rapidapi.com');
    headers= headers.append(
      'x-rapidapi-key',
      '94ee14ffabmshfbfd83af1fe237ep166202jsn5bd8d48365f2'
    );

    return this.http.get(WEATHER_URL, { params, headers }).toPromise();
  }
}
