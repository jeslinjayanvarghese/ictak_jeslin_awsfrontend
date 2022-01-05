import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanneracademicComponent } from './banneracademic.component';

describe('BanneracademicComponent', () => {
  let component: BanneracademicComponent;
  let fixture: ComponentFixture<BanneracademicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanneracademicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanneracademicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
