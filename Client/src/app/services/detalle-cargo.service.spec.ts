import { TestBed } from '@angular/core/testing';

import { DetalleCargoService } from './detalle-cargo.service';

describe('DetalleCargoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetalleCargoService = TestBed.get(DetalleCargoService);
    expect(service).toBeTruthy();
  });
});
