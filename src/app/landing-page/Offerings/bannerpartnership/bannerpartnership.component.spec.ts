import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerpartnershipComponent } from './bannerpartnership.component';

describe('BannerpartnershipComponent', () => {
  let component: BannerpartnershipComponent;
  let fixture: ComponentFixture<BannerpartnershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerpartnershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerpartnershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
