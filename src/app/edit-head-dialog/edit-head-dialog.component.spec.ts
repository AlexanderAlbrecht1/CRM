import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { EditHeadDialogComponent } from './edit-head-dialog.component';

describe('EditHeadDialogComponent', () => {
  let component: EditHeadDialogComponent;
  let fixture: ComponentFixture<EditHeadDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditHeadDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} } // 🔥 MatDialogRef als Mock bereitstellen
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHeadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
