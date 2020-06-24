import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginReadComponent } from './login-read.component';

describe('LoginReadComponent', () => {
  let component: LoginReadComponent;
  let fixture: ComponentFixture<LoginReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
