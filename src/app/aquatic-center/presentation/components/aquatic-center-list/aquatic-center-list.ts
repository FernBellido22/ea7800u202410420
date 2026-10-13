
import { Component, Input } from '@angular/core';
import { AquaticCenter } from '../../../domain/model/aquatic-center.entity';
import { AquaticCenterItemComponent } from '../aquatic-center-item/aquatic-center-item';

@Component({
  selector: 'app-aquatic-center-list',
  standalone: true,
  imports: [AquaticCenterItemComponent],
  templateUrl: './aquatic-center-list.html',
  styleUrl: './aquatic-center-list.css'
})
export class AquaticCenterListComponent {
  @Input() centers: AquaticCenter[] = [];
}
