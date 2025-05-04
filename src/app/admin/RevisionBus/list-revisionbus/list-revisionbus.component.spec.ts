import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRevisionbusComponent } from './list-revisionbus.component';

describe('ListRevisionbusComponent', () => {
  let component: ListRevisionbusComponent;
  let fixture: ComponentFixture<ListRevisionbusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListRevisionbusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListRevisionbusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
