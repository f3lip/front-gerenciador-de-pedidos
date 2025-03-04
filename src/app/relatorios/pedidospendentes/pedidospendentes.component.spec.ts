import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidospendentesComponent } from './pedidospendentes.component';

describe('PedidospendentesComponent', () => {
  let component: PedidospendentesComponent;
  let fixture: ComponentFixture<PedidospendentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedidospendentesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PedidospendentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
