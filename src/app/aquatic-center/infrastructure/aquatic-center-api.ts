
import { Observable } from 'rxjs';
import { AquaticCenterEntity } from "../domain/model/aquatic-center.entity";

export abstract class AquaticCenterApi{

  abstract getAll(): Observable<AquaticCenterEntity[]>;

  abstract getById(id: number): Observable<AquaticCenterEntity>;
}
