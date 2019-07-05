import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBasicComponent } from './admin-basic.component';

describe('AdminBasicComponent', () => {
  let component: AdminBasicComponent;
  let fixture: ComponentFixture<AdminBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
