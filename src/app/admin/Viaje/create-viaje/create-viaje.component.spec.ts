import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateViajeComponent } from './create-viaje.component';

describe('CreateViajeComponent', () => {
  let component: CreateViajeComponent;
  let fixture: ComponentFixture<CreateViajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateViajeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
