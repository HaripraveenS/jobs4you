import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginApplComponent } from './login-appl.component';

describe('LoginApplComponent', () => {
  let component: LoginApplComponent;
  let fixture: ComponentFixture<LoginApplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginApplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginApplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
