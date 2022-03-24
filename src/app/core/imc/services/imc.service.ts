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

  async initData(data: IPersonBMI): Promise<void> {
    this.model.data = await this.remoteService.getIMC(data);
  }

  public async getData(data:IPersonBMI): Promise<IPersonBMI> {
    return this.model.data;
  }
}
