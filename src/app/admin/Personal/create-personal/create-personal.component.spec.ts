import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePersonalComponent } from './create-personal.component';

describe('CreatePersonalComponent', () => {
  let component: CreatePersonalComponent;
  let fixture: ComponentFixture<CreatePersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePersonalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
