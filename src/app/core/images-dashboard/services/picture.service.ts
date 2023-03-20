import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { POKEMONS_URL } from '../constants';
import { Image } from './../interfaces';

@Injectable()
export class PictureService {
  constructor(private readonly http: HttpClient) {}

  public async getAllImages(): Promise<Image[]> {
    return await this.http.get<Image[]>(POKEMONS_URL).toPromise();
  }
}
