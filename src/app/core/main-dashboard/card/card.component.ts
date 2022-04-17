import { animate, style, transition, trigger } from '@angular/animations';
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
    await this.weatherService
      .getData()
      .then((response) => (this.data = response));
  }
}
