import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatIcon } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogNewTaskComponent } from '../dialog-new-task/dialog-new-task.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-simple-opl',
  standalone: true,
  imports: [MatCardModule,MatCheckboxModule, FormsModule, CommonModule, MatIcon, MatTooltipModule, MatDialogModule],
  templateUrl: './simple-opl.component.html',
  styleUrl: './simple-opl.component.scss'
})
export class SimpleOPLComponent {

  checked = false;

  constructor(
      public dialog: MatDialog,
      private firebaseService: FirebaseService
    ) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogNewTaskComponent, {});

  }

  getTaskList() {
    return this.firebaseService.task
  }

}
