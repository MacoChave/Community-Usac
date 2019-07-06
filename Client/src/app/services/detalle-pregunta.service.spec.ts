import { TestBed } from '@angular/core/testing';

import { DetallePreguntaService } from './detalle-pregunta.service';

describe('DetallePreguntaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetallePreguntaService = TestBed.get(DetallePreguntaService);
    expect(service).toBeTruthy();
  });
});
