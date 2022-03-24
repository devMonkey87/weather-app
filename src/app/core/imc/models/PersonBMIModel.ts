import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PersonBMIModel {
  private _data: any;

  public set data(data) {
    this._data = data;
  }

  public get data() {
    return this._data;
  }
}
