import { TestBed } from '@angular/core/testing';
import { PositionServiceService } from './cargo-service.service';


describe('PositionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PositionServiceService = TestBed.get(PositionServiceService);
    expect(service).toBeTruthy();
  });
});
