import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RAPID_API_BMI_HOST_VALUE, RAPID_API_HOST, RAPID_API_KEY, RAPID_API_KEY_PASSWORD,  } from 'src/app/shared/constants';
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
    headers = headers.append(RAPID_API_HOST, RAPID_API_BMI_HOST_VALUE);
    headers = headers.append(RAPID_API_KEY, RAPID_API_KEY_PASSWORD);

    return this.http
      .get<IPersonBMI>(
        'https://body-mass-index-bmi-calculator.p.rapidapi.com/metric',
        { params, headers }
      )
      .toPromise();
  }
}
