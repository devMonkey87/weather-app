import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { POKEMONS_URL } from '../constants';
import { Pokemon } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private readonly http: HttpClient) {}

  public async getAllImages(): Promise<Pokemon[]> {
    return await this.http.get<Pokemon[]>(POKEMONS_URL).toPromise();
  }
}
