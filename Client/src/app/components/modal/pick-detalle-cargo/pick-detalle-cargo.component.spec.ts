import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickDetalleCargoComponent } from './pick-detalle-cargo.component';

describe('PickDetalleCargoComponent', () => {
  let component: PickDetalleCargoComponent;
  let fixture: ComponentFixture<PickDetalleCargoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickDetalleCargoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickDetalleCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
