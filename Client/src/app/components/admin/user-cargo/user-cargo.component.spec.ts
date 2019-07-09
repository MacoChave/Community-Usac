import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCargoComponent } from './user-cargo.component';

describe('UserCargoComponent', () => {
  let component: UserCargoComponent;
  let fixture: ComponentFixture<UserCargoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCargoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
