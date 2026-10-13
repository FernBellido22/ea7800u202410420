
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AquaticCenter } from '../../../domain/model/aquatic-center.entity';

@Component({
  selector: 'app-aquatic-center-item',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './aquatic-center-item.html',
  styleUrl: './aquatic-center-item.css'
})
export class AquaticCenterItemComponent {
  @Input({ required: true }) center!: AquaticCenter;
}
