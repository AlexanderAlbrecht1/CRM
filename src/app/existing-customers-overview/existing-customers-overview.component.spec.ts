import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingCustomersOverviewComponent } from './existing-customers-overview.component';

describe('ExistingCustomersOverviewComponent', () => {
  let component: ExistingCustomersOverviewComponent;
  let fixture: ComponentFixture<ExistingCustomersOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExistingCustomersOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExistingCustomersOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
