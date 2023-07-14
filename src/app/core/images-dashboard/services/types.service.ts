import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TYPES_URL } from '../constants';
import { PokemonType } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class TypesService {
  constructor(private readonly http: HttpClient) {}

  public async getTypes(): Promise<PokemonType[]> {
    return await this.http.get<PokemonType[]>(TYPES_URL).toPromise();
  }
}
