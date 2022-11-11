import { Component, OnInit } from '@angular/core';
import { WeatherForecastService } from 'src/service/weatherforecast/weatherforecast.service';
import { WeatherForecast } from 'src/models/weatherforecast';

@Component({
  selector: 'app-weather-forecast-list',
  templateUrl: './weather-forecast-list.component.html',
  styleUrls: ['./weather-forecast-list.component.css']
})
export class WeatherForecastListComponent implements OnInit {

  weatherForecastList:WeatherForecast[] = [];

  constructor(private weatherForecastService:WeatherForecastService) { }

  ngOnInit(): void {
    this.weatherForecastService.getWeatherForecast().subscribe(weatherForecastList => {
      weatherForecastList.forEach(weatherForecast => {
        console.log(`C: ${weatherForecast.temperatureC}, F: ${weatherForecast.temperatureF}, Summary: ${weatherForecast.summary}, Date: ${weatherForecast.date}`);
        this.weatherForecastList.push(weatherForecast);
      });

    });
  }

}
