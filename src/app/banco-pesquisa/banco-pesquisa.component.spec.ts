import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BancoPesquisaComponent } from './banco-pesquisa.component';

describe('BancoPesquisaComponent', () => {
  let component: BancoPesquisaComponent;
  let fixture: ComponentFixture<BancoPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BancoPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BancoPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
