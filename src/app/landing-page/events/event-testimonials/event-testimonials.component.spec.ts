import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTestimonialsComponent } from './event-testimonials.component';

describe('EventTestimonialsComponent', () => {
  let component: EventTestimonialsComponent;
  let fixture: ComponentFixture<EventTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventTestimonialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
