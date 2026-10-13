
import { AquaticCenter } from '../domain/model/aquatic-center.entity';
import { AquaticCenterResponse } from './aquatic-center-response';

export class AquaticCenterAssembler {

  static toEntity(response: AquaticCenterResponse): AquaticCenter {
    return {
      id: response.id,
      name: response.name,
      activityType: response.activityType,
      capacity: response.capacity,
      latitude: response.latitude,
      longitude: response.longitude
    };
  }

  static toEntities(
    responses: AquaticCenterResponse[]
  ): AquaticCenter[] {
    return responses.map(response => this.toEntity(response));
  }
}

