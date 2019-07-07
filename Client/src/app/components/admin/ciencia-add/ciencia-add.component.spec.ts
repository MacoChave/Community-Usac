import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CienciaAddComponent } from './ciencia-add.component';

describe('CienciaAddComponent', () => {
  let component: CienciaAddComponent;
  let fixture: ComponentFixture<CienciaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CienciaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CienciaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
