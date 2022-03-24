import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPersonBMI } from '../interfaces/IPersonBMI';

@Injectable({
  providedIn: 'root',
})
export class ImcRemoteService {
  constructor(private readonly http: HttpClient) {}

  getIMC(data: any): Promise<IPersonBMI> {
    let params = new HttpParams();
    params = params.append('height', data.height);
    params = params.append('weight', data.weight);

    let headers = new HttpHeaders();
    headers = headers.append(
      'X-RapidAPI-Host',
      'body-mass-index-bmi-calculator.p.rapidapi.com'
    );
    headers = headers.append(
      'X-RapidAPI-Key',
      '94ee14ffabmshfbfd83af1fe237ep166202jsn5bd8d48365f2'
    );

    return this.http
      .get<IPersonBMI>(
        'https://body-mass-index-bmi-calculator.p.rapidapi.com/metric',
        { params, headers }
      )
      .toPromise();
  }
}
