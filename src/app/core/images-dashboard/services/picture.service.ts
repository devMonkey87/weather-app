import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {Image} from './../interfaces';

@Injectable()
export class PictureService {
  constructor(private readonly http: HttpClient) {}

  public getAllImages(): Promise<Image[]>{
    return of([{ id: 1, description: 'sds', image: 'imagen' }]).toPromise();
  }
}
