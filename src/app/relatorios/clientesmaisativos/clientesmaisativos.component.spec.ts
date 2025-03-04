import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesmaisativosComponent } from './clientesmaisativos.component';

describe('ClientesmaisativosComponent', () => {
  let component: ClientesmaisativosComponent;
  let fixture: ComponentFixture<ClientesmaisativosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientesmaisativosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientesmaisativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
