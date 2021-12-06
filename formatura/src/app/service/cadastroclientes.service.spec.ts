import { TestBed } from '@angular/core/testing';

import { CadastroclientesService } from './cadastroclientes.service';

describe('CadastroclientesService', () => {
  let service: CadastroclientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroclientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
