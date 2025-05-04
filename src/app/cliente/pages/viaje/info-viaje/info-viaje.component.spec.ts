import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoViajeComponent } from './info-viaje.component';

describe('InfoViajeComponent', () => {
  let component: InfoViajeComponent;
  let fixture: ComponentFixture<InfoViajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoViajeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
