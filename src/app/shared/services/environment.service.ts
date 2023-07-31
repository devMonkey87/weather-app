import { Injectable } from '@angular/core';
import { environment, EnvironmentEnum } from 'src/environments/environment';

type EnvironmentKeys = keyof typeof environment;

@Injectable({
  providedIn: 'root',
})


export class EnvironmentService {
  constructor() {}

  public getEnvironmentProperty(key: EnvironmentKeys): any  {
    return environment[key];
  }

  public get enumTypes() {
    return EnvironmentEnum;
  }
}
