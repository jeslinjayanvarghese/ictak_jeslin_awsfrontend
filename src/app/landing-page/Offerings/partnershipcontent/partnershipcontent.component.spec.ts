import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnershipcontentComponent } from './partnershipcontent.component';

describe('PartnershipcontentComponent', () => {
  let component: PartnershipcontentComponent;
  let fixture: ComponentFixture<PartnershipcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnershipcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnershipcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
