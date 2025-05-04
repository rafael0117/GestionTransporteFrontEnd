import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajesDestinoComponent } from './viajes-destino.component';

describe('ViajesDestinoComponent', () => {
  let component: ViajesDestinoComponent;
  let fixture: ComponentFixture<ViajesDestinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViajesDestinoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViajesDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
