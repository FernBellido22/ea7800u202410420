
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Weather } from '../../domain/model/weather.entity';

@Component({
  selector: 'app-weather-info',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './weather-info.html',
  styleUrl: './weather-info.css'
})
export class WeatherInfoComponent {
  @Input() weather: Weather | null = null;
  @Input() loading = false;
  @Input() error: string | null = null;
}
