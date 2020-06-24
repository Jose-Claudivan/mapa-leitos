import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadeAdmComponent } from './unidade-adm.component';

describe('UnidadeAdmComponent', () => {
  let component: UnidadeAdmComponent;
  let fixture: ComponentFixture<UnidadeAdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadeAdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadeAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
