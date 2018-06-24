import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaDepartamentoComponent } from './pesquisa-departamento.component';

describe('PesquisaDepartamentoComponent', () => {
  let component: PesquisaDepartamentoComponent;
  let fixture: ComponentFixture<PesquisaDepartamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaDepartamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
