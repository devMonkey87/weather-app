import { Component, OnInit } from '@angular/core';
import { RootObject } from 'src/app/core/services/weather/constants/interfaces/current-weather';
import { WeatherService } from 'src/app/core/services/weather/weather.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  data: RootObject = { data: [], count: 0 };

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getData().then((resp) => (this.data = resp));
  }
}
