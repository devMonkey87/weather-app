import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { POKEMONS_URL } from '../constants';
import { Pokemon } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private readonly http: HttpClient) {}

  public async getAllPokemons(): Promise<Pokemon[]> {
    return await this.http.get<Pokemon[]>(POKEMONS_URL).toPromise();
  }

  public async getPokemon(id: string): Promise<Pokemon[]> {
    return await this.http.get<Pokemon[]>(`${POKEMONS_URL}/${id}`).toPromise();
  }

  public async savePokemon(pokemon: Pokemon): Promise<Pokemon> {
    return await this.http.post<Pokemon>(POKEMONS_URL, pokemon).toPromise();
  }

  public async updatePokemon(pokemon: Pokemon): Promise<Pokemon> {
    return await this.http.put<Pokemon>(POKEMONS_URL, pokemon).toPromise();
  }

  public async deletePokemon(id: string): Promise<Pokemon> {
    return await this.http.delete<Pokemon>(`${POKEMONS_URL}/${id}`).toPromise();
  }
}
