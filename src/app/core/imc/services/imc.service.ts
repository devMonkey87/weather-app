import { Injectable } from '@angular/core';
import { IPersonBMI } from '../interfaces/IPersonBMI';
import { PersonBMIModel } from '../models/PersonBMIModel';
import { ImcRemoteService } from './imc-remote.service';

@Injectable({
  providedIn: 'root',
})
export class ImcService {
  constructor(
    private readonly remoteService: ImcRemoteService,
    public model: PersonBMIModel
  ) {}

  async getData(data: IPersonBMI) {
    return (this.model.data = await this.remoteService.getIMC(data));
  }
}
