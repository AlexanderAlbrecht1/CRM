import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { Task } from '../../models/task.class';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-dialog-delete-task',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './dialog-delete-task.component.html',
  styleUrl: './dialog-delete-task.component.scss'
})
export class DialogDeleteTaskComponent {

  task! :Task;

  constructor(private firebaseService: FirebaseService) {};

  deleteTask(id:string) {
    this.firebaseService.deleteTask(id)
  }

}
