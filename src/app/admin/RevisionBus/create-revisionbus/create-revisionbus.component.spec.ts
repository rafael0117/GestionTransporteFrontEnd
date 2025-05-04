import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRevisionbusComponent } from './create-revisionbus.component';

describe('CreateRevisionbusComponent', () => {
  let component: CreateRevisionbusComponent;
  let fixture: ComponentFixture<CreateRevisionbusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateRevisionbusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateRevisionbusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
