import { TestBed } from '@angular/core/testing';

import { SrcTemaService } from './src-tema.service';

describe('SrcTemaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SrcTemaService = TestBed.get(SrcTemaService);
    expect(service).toBeTruthy();
  });
});
