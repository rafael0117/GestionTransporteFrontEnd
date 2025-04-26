import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViajeComponent } from './list-viaje.component';

describe('ListViajeComponent', () => {
  let component: ListViajeComponent;
  let fixture: ComponentFixture<ListViajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListViajeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
