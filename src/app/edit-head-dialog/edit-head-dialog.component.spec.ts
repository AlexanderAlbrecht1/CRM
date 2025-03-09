import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHeadDialogComponent } from './edit-head-dialog.component';

describe('EditHeadDialogComponent', () => {
  let component: EditHeadDialogComponent;
  let fixture: ComponentFixture<EditHeadDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditHeadDialogComponent]
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
