import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroclientesCreateComponent } from './cadastroclientes-create.component';

describe('CadastroclientesCreateComponent', () => {
  let component: CadastroclientesCreateComponent;
  let fixture: ComponentFixture<CadastroclientesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroclientesCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroclientesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
