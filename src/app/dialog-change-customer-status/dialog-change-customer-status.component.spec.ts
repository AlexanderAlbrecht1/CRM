import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogChangeCustomerStatusComponent } from './dialog-change-customer-status.component';

describe('DialogChangeCustomerStatusComponent', () => {
  let component: DialogChangeCustomerStatusComponent;
  let fixture: ComponentFixture<DialogChangeCustomerStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogChangeCustomerStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogChangeCustomerStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
