import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDestinoComponent } from './list-destino.component';

describe('ListDestinoComponent', () => {
  let component: ListDestinoComponent;
  let fixture: ComponentFixture<ListDestinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDestinoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
