import { FirebaseService } from './../services/firebase.service';
import { Component } from '@angular/core';
import { Task } from '../../models/task.class';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogActions, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-edit-task',
  standalone: true,
  imports: [MatCardModule, MatInputModule, FormsModule],
  templateUrl: './dialog-edit-task.component.html',
  styleUrl: './dialog-edit-task.component.scss',
})
export class DialogEditTaskComponent {
  task!: Task;

  constructor(
    private firebaseService: FirebaseService,
    public dialogRef: MatDialogRef<DialogEditTaskComponent>
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  saveEditedTask(task:Task) {
    console.log(task.task);
    this.closeDialog();
  }
}
