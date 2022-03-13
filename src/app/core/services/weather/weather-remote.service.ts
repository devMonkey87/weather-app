import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CURRENT_WEATHER_URL, WEATHER_URL } from './constants';
import { RootObject } from './constants/interfaces/current-weather';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class WeatherRemoteService {
  constructor(private http: HttpClient) {}

  public firstCall() {
    let params = new HttpParams();
    params = params.append('lat', '41.390205');
    params = params.append('lon', '2.154007');

    
    let headers = new HttpHeaders();
    headers = headers.append('x-rapidapi-host', 'weatherbit-v1-mashape.p.rapidapi.com');
    headers= headers.append(
      'x-rapidapi-key',
      '94ee14ffabmshfbfd83af1fe237ep166202jsn5bd8d48365f2'
    );

    return this.http.get<RootObject>(CURRENT_WEATHER_URL, { params, headers }).toPromise();
  }
}
