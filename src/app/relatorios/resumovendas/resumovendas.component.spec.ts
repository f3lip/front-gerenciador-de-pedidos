import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumovendasComponent } from './resumovendas.component';

describe('ResumovendasComponent', () => {
  let component: ResumovendasComponent;
  let fixture: ComponentFixture<ResumovendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumovendasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumovendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
