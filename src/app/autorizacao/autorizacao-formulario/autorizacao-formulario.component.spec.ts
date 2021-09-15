import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorizacaoFormularioComponent } from './autorizacao-formulario.component';

describe('AutorizacaoFormularioComponent', () => {
  let component: AutorizacaoFormularioComponent;
  let fixture: ComponentFixture<AutorizacaoFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutorizacaoFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorizacaoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
