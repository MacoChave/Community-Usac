import { TestBed } from '@angular/core/testing';
import { PositionService } from './cargo.service';


describe('PositionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PositionService = TestBed.get(PositionService);
    expect(service).toBeTruthy();
  });
});
