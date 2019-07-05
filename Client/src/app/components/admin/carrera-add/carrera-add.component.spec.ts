import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreraAddComponent } from './carrera-add.component';

describe('CarreraAddComponent', () => {
  let component: CarreraAddComponent;
  let fixture: ComponentFixture<CarreraAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarreraAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarreraAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
