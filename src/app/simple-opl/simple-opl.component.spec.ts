import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleOPLComponent } from './simple-opl.component';

describe('SimpleOPLComponent', () => {
  let component: SimpleOPLComponent;
  let fixture: ComponentFixture<SimpleOPLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleOPLComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpleOPLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
