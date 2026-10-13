
import { Weather } from '../domain/model/weather.entity';
import { WeatherResponse } from './weather-response';

export class WeatherAssembler {

  static toEntity(response: WeatherResponse): Weather {
    return {
      temperature: response.current.temperature_2m
    };
  }
}
