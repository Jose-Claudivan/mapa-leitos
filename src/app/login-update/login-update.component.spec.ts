import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUpdateComponent } from './login-update.component';

describe('LoginUpdateComponent', () => {
  let component: LoginUpdateComponent;
  let fixture: ComponentFixture<LoginUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
