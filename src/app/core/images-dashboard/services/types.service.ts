import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TYPES_URL } from '../constants';
import { Type } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class TypesService {
  constructor(private readonly http: HttpClient) {}

  public async getTypes(): Promise<Type[]> {
    return await this.http.get<Type[]>(TYPES_URL).toPromise();
  }
}
