import { TestBed } from '@angular/core/testing';

import { TipoPreguntaService } from './tipo-pregunta.service';

describe('TipoPreguntaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoPreguntaService = TestBed.get(TipoPreguntaService);
    expect(service).toBeTruthy();
  });
});
