import { TestBed } from '@angular/core/testing';

import { RespuestaService } from './respuesta.service';

describe('RespuestaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RespuestaService = TestBed.get(RespuestaService);
    expect(service).toBeTruthy();
  });
});
