import { User } from './../../models/user.class';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FirebaseService } from '../services/firebase.service';
// import { User } from '../../models/user.class';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { doc, updateDoc } from '@angular/fire/firestore';
import { inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-edit-address-dialog',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    FormsModule,
    MatButtonModule,
    MatDialogContent,
    MatLabel,
    MatDialogActions,
  ],
  templateUrl: './edit-address-dialog.component.html',
  styleUrl: './edit-address-dialog.component.scss',
})
export class EditAddressDialogComponent {

  user!: User;
  street: string = '';
  city: string = '';
  zipCode: number = 0;
  firestore = inject(Firestore);

  constructor(
    public dialogRef: MatDialogRef<EditAddressDialogComponent>,
    public firebaseService: FirebaseService
  ) {}

  ngOnInit() {
    this.street = this.user.street;
    this.zipCode = this.user.zipCode;
    this.city = this.user.city;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  async saveAddress(user:any) {
    const userAdressRef = doc(this.firestore, 'user', user.id);
    await updateDoc(userAdressRef, {
      street : this.street,
      zipCode : this.zipCode,
      city : this.city,
    });
    this.closeDialog();

  }
}
