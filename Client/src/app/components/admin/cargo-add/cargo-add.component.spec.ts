import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoAddComponent } from './cargo-add.component';

describe('CargoAddComponent', () => {
  let component: CargoAddComponent;
  let fixture: ComponentFixture<CargoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
