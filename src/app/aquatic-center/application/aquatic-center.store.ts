
import { Injectable, signal } from '@angular/core';
import { AquaticCenterResponse } from "../infrastructure/aquatic-center-response";

@Injectable({
  providedIn: 'root'
})
export class AquaticCenterStore {
  private readonly _aquaticCenters = signal<AquaticCenterResponse[]>([]);
  private readonly _loading = signal<boolean>(false);
  private readonly _error = signal<string | null>(null);

  readonly aquaticCenters = this._aquaticCenters.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();

  setAquaticCenters(centers: AquaticCenterResponse[]): void {
    this._aquaticCenters.set(centers);
    this._error.set(null);
  }

  setLoading(loading: boolean): void {
    this._loading.set(loading);
  }

  setError(message: string | null): void {
    this._error.set(message);
  }

  getById(id: number): AquaticCenterResponse | undefined {
    return this._aquaticCenters().find(center => center.id === id);
  }
  clearError(): void {
    this._error.set(null);
  }
}
