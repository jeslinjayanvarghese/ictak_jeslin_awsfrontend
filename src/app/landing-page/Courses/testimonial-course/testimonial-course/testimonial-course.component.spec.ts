import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialCourseComponent } from './testimonial-course.component';

describe('TestimonialCourseComponent', () => {
  let component: TestimonialCourseComponent;
  let fixture: ComponentFixture<TestimonialCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
