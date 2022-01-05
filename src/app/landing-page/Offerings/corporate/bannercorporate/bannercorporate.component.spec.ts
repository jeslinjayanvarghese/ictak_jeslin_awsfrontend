import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannercorporateComponent } from './bannercorporate.component';

describe('BannercorporateComponent', () => {
  let component: BannercorporateComponent;
  let fixture: ComponentFixture<BannercorporateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannercorporateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannercorporateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
