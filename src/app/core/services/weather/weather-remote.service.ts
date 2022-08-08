import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CURRENT_WEATHER_URL, WEATHER_URL } from './constants';
import { map } from 'rxjs/operators';
import {
  RAPID_API_HOST,
  RAPID_API_KEY,
  RAPID_API_KEY_PASSWORD,
  RAPID_API_WEATHER_HOST_VALUE,
} from 'src/app/shared/constants';

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
    headers = headers.append(
      RAPID_API_HOST,
      RAPID_API_WEATHER_HOST_VALUE
    );
    headers = headers.append(RAPID_API_KEY, RAPID_API_KEY_PASSWORD);

    return this.http
      .get<any>(CURRENT_WEATHER_URL, { params, headers })
      .pipe(map((data) => data.data[0]))
      .toPromise();
  }
}
