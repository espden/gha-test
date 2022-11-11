import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, throwError, of} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {WeatherForecast} from '../../models/weatherforecast';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {
  url:string = "https://localhost:7056/WeatherForecast";

  constructor(private http:HttpClient) { }

  getWeatherForecast():Observable<WeatherForecast[]> {
    return this.http.get<WeatherForecast[]>(this.url);
    //return this.getWeatherForecastMock();
  }

  getWeatherForecastMock():Observable<WeatherForecast> {
    let w1:WeatherForecast = {summary:"cold", temperatureC:14, temperatureF:40, date:new Date()};
    let w2:WeatherForecast = {summary:"chilly", temperatureC:19, temperatureF:60, date:new Date()};
    let w3:WeatherForecast = {summary:"mild", temperatureC:22, temperatureF:70, date:new Date()};
    return of(w1, w2, w3);
  }
}
