import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadeLoginComponent } from './unidade-login.component';

describe('UnidadeLoginComponent', () => {
  let component: UnidadeLoginComponent;
  let fixture: ComponentFixture<UnidadeLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadeLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
