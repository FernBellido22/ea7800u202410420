
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Weather } from '../domain/model/weather.entity';
import { WeatherResponse } from './weather-response';
import { WeatherAssembler } from './weather-assembler';

@Injectable({
  providedIn: 'root'
})
export class WeatherApi {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'https://api.open-meteo.com/v1/forecast';

  getCurrentWeather(
    latitude: number,
    longitude: number
  ): Observable<Weather> {
    const params = new HttpParams()
      .set('latitude', latitude)
      .set('longitude', longitude)
      .set('current', 'temperature_2m');

    return this.http
      .get<WeatherResponse>(this.baseUrl, { params })
      .pipe(
        map(response => WeatherAssembler.toEntity(response))
      );
  }
}
