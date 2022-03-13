import { Injectable } from '@angular/core';
import { WeatherRemoteService } from './weather-remote.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private remoteService: WeatherRemoteService) {}

  getData() {
    return this.remoteService.firstCall();
  }
}
