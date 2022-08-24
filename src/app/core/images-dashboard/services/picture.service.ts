import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IMAGES_URL } from '../constants';
import { Image } from './../interfaces';

@Injectable()
export class PictureService {
  constructor(private readonly http: HttpClient) {}

  public async getAllImages(): Promise<Image[]> {
    return await this.http.get<Image[]>(IMAGES_URL).toPromise();
  }
}
