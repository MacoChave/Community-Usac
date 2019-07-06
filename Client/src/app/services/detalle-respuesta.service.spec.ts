import { TestBed } from '@angular/core/testing';

import { DetalleRespuestaService } from './detalle-respuesta.service';

describe('DetalleRespuestaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetalleRespuestaService = TestBed.get(DetalleRespuestaService);
    expect(service).toBeTruthy();
  });
});
