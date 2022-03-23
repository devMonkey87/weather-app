import { Component, OnInit } from '@angular/core';
import { Data } from '../services/weather/constants/interfaces/current-weather';
import { WeatherService } from '../services/weather/weather.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss'],
})
export class MainDashboardComponent implements OnInit {
  data: Data = {} as Data;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getData().then((resp) => (this.data = resp));
  }
}