import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientenewsListaComponent } from './clientenews-lista.component';

describe('ClientenewsListaComponent', () => {
  let component: ClientenewsListaComponent;
  let fixture: ComponentFixture<ClientenewsListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientenewsListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientenewsListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
