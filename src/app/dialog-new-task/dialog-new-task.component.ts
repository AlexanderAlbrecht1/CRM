import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FirebaseService } from '../services/firebase.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-dialog-new-task',
  standalone: true,
  imports: [MatCardModule,FormsModule, MatFormFieldModule, MatInputModule, MatDialogModule],
  templateUrl: './dialog-new-task.component.html',
  styleUrl: './dialog-new-task.component.scss'
})
export class DialogNewTaskComponent {

  constructor(
      public firebaseService: FirebaseService,
      public dialogRef: MatDialogRef<DialogNewTaskComponent>
    ) {}

}
