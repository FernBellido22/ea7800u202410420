
export interface AquaticCenter {
  id: number;
  name: string;
  activityType: AquaticActivityType;
  capacity: number;
  latitude: number;
  longitude: number;
}

export type AquaticActivityType =
  | 'swimming'
  | 'diving'
  | 'aqua-fitness'
  | 'water-polo';
