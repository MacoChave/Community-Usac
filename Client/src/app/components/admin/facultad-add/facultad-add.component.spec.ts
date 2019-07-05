import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultadAddComponent } from './facultad-add.component';

describe('FacultadAddComponent', () => {
  let component: FacultadAddComponent;
  let fixture: ComponentFixture<FacultadAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultadAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultadAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
