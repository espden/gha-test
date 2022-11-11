import { Component, OnInit, Input } from '@angular/core';
import { WeatherForecast } from 'src/models/weatherforecast';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {
  @Input() weatherForecast:WeatherForecast = {date:new Date(), temperatureC:0, temperatureF:0, summary:""};
  constructor() { }

  ngOnInit(): void {
  }

}
