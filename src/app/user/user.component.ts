import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../../models/user.class';
import {MatCardModule} from '@angular/material/card';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatCardModule,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {

  user = new User();


  constructor(public dialog: MatDialog, private firebaseService: FirebaseService) {}

  getUserList() {
    // return this.firebaseService.user
    console.log(this.firebaseService.user);

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddUserComponent, {
    });
  }
}
