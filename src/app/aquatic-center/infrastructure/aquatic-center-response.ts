import { AquaticActivityType } from '../domain/model/aquatic-center.entity';

export interface AquaticCenterResponse {
  id: number;
  name: string;
  activityType: AquaticActivityType;
  capacity: number;
  latitude: number;
  longitude: number;
}
