import { Component, OnInit } from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Data } from 'src/app/core/services/weather/constants/interfaces/current-weather';
import { WeatherService } from 'src/app/core/services/weather/weather.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  data: Data = {} as Data;
  faSun = faSun;
  faMoon = faMoon;

  constructor(private weatherService: WeatherService) {}

  async ngOnInit(): Promise<void> {
    this.data = await this.weatherService.getData();
  }

  getBackgroundClass(): string {
    if (this.data.precip >= 0 && this.data.precip <= 10) {
      return '';
    } else if (this.data.precip > 70) {
      return 'animate-red';
    } else {
      return '';
    }
  }
}
