import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroclientesListaComponent } from './cadastroclientes-lista.component';

describe('CadastroclientesListaComponent', () => {
  let component: CadastroclientesListaComponent;
  let fixture: ComponentFixture<CadastroclientesListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroclientesListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroclientesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
