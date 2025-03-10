import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VipCustomersOverviewComponent } from './vip-customers-overview.component';

describe('VipCustomersOverviewComponent', () => {
  let component: VipCustomersOverviewComponent;
  let fixture: ComponentFixture<VipCustomersOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VipCustomersOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VipCustomersOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
