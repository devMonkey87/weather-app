import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather/weather.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss'],
})
export class MainDashboardComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
this.weatherService.getData();

  }
}
