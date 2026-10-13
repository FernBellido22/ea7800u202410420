
import { Observable } from 'rxjs';
import { AquaticCenter } from "../domain/model/aquatic-center.entity";

export abstract class AquaticCenterApi{

  abstract getAll(): Observable<AquaticCenter[]>;

  abstract getById(id: number): Observable<AquaticCenter>;
}
