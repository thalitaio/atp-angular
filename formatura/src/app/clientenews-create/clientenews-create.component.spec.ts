import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientenewsCreateComponent } from './clientenews-create.component';

describe('ClientenewsCreateComponent', () => {
  let component: ClientenewsCreateComponent;
  let fixture: ComponentFixture<ClientenewsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientenewsCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientenewsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
