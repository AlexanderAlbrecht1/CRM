import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddressDialogComponent } from './edit-address-dialog.component';
import { MatDialogRef } from '@angular/material/dialog';

describe('EditAddressDialogComponent', () => {
  let component: EditAddressDialogComponent;
  let fixture: ComponentFixture<EditAddressDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditAddressDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAddressDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
