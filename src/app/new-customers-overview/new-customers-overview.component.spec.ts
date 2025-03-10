import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCustomersOverviewComponent } from './new-customers-overview.component';

describe('NewCustomersOverviewComponent', () => {
  let component: NewCustomersOverviewComponent;
  let fixture: ComponentFixture<NewCustomersOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCustomersOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewCustomersOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
