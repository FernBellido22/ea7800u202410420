import { Injectable, signal } from '@angular/core';

export interface Weather {
  temperature: number;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherStore {
  private readonly _weather = signal<Weather | null>(null);
  private readonly _loading = signal<boolean>(false);
  private readonly _error = signal<string | null>(null);

  readonly weather = this._weather.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();

  setWeather(weather: Weather): void {
    this._weather.set(weather);
    this._error.set(null);
  }

  setLoading(loading: boolean): void {
    this._loading.set(loading);
  }

  setError(message: string | null): void {
    this._error.set(message);
  }

  clear(): void {
    this._weather.set(null);
    this._error.set(null);
    this._loading.set(false);
  }
}
